"""
Khata SQLite Database Service
Provides persistent storage for users, business profiles, and AI chat sessions.
Zero-configuration, lightweight, and 100% free.
"""

import sqlite3
import hashlib
import os
import json
from datetime import datetime

DB_PATH = os.path.join(os.path.dirname(__file__), "khata.db")


def get_db():
    conn = sqlite3.connect(DB_PATH, check_same_thread=False)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    """Initializes tables if they do not exist."""
    conn = get_db()
    cursor = conn.cursor()
    
    # Users table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        full_name TEXT NOT NULL,
        email TEXT UNIQUE,
        phone TEXT UNIQUE,
        business_name TEXT,
        business_sector TEXT DEFAULT 'retail',
        category TEXT DEFAULT 'general',
        password_hash TEXT,
        auth_provider TEXT DEFAULT 'email',
        avatar_url TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    """)

    # Business assessments table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS business_assessments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        enterprise_name TEXT,
        sector TEXT,
        investment REAL,
        turnover REAL,
        location TEXT,
        category TEXT,
        gender TEXT,
        matched_schemes_json TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
    )
    """)

    # Chat history table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS chat_history (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        user_query TEXT NOT NULL,
        ai_response TEXT NOT NULL,
        language TEXT DEFAULT 'hi',
        source TEXT DEFAULT 'gemini-1.5-flash',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    """)

    conn.commit()
    conn.close()
    print("[KHATA DATABASE] SQLite database initialized successfully at", DB_PATH)


def hash_password(password: str) -> str:
    """Hashes password with salt using SHA-256."""
    salt = "khata_sih_2026_salt_"
    return hashlib.sha256((salt + password).encode('utf-8')).hexdigest()


def verify_password(plain_password: str, hashed_password: str) -> bool:
    return hash_password(plain_password) == hashed_password


def create_user(full_name: str, email: str = None, phone: str = None,
                password: str = None, business_name: str = None,
                business_sector: str = "retail", category: str = "general",
                auth_provider: str = "email", avatar_url: str = None):
    """Creates a new user record."""
    conn = get_db()
    cursor = conn.cursor()

    pwd_hash = hash_password(password) if password else None

    # Check for existing user
    if email:
        cursor.execute("SELECT * FROM users WHERE email = ?", (email.strip().lower(),))
        if cursor.fetchone():
            conn.close()
            raise ValueError("An account with this email address already exists.")
            
    if phone:
        cursor.execute("SELECT * FROM users WHERE phone = ?", (phone.strip(),))
        if cursor.fetchone():
            conn.close()
            raise ValueError("An account with this phone number already exists.")

    cursor.execute("""
    INSERT INTO users (full_name, email, phone, business_name, business_sector, category, password_hash, auth_provider, avatar_url)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, (
        full_name.strip(),
        email.strip().lower() if email else None,
        phone.strip() if phone else None,
        business_name.strip() if business_name else f"{full_name}'s Enterprise",
        business_sector,
        category,
        pwd_hash,
        auth_provider,
        avatar_url
    ))
    user_id = cursor.lastrowid
    conn.commit()

    cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))
    row = cursor.fetchone()
    user_dict = dict(row)
    user_dict.pop("password_hash", None)
    conn.close()
    return user_dict


def authenticate_user(identifier: str, password: str = None):
    """Authenticates user by email or phone."""
    conn = get_db()
    cursor = conn.cursor()

    clean_id = identifier.strip()
    cursor.execute("SELECT * FROM users WHERE email = ? OR phone = ?", (clean_id.lower(), clean_id))
    row = cursor.fetchone()
    conn.close()

    if not row:
        return None

    user_dict = dict(row)
    if password:
        if not verify_password(password, user_dict.get("password_hash", "")):
            return None

    user_dict.pop("password_hash", None)
    return user_dict


def get_or_create_google_user(google_email: str, name: str, picture: str = None):
    """Gets existing Google user or registers new one."""
    conn = get_db()
    cursor = conn.cursor()

    clean_email = google_email.strip().lower()
    cursor.execute("SELECT * FROM users WHERE email = ?", (clean_email,))
    row = cursor.fetchone()

    if row:
        user_dict = dict(row)
        user_dict.pop("password_hash", None)
        conn.close()
        return user_dict, False

    # Create new Google user
    cursor.execute("""
    INSERT INTO users (full_name, email, auth_provider, avatar_url, business_name)
    VALUES (?, ?, 'google', ?, ?)
    """, (
        name.strip(),
        clean_email,
        picture,
        f"{name}'s Venture"
    ))
    user_id = cursor.lastrowid
    conn.commit()

    cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))
    new_row = cursor.fetchone()
    user_dict = dict(new_row)
    user_dict.pop("password_hash", None)
    conn.close()
    return user_dict, True


def log_chat_interaction(user_id: int, query: str, response: str, language: str = 'hi', source: str = 'gemini'):
    """Logs conversation interaction for SIH evaluation metrics."""
    try:
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute("""
        INSERT INTO chat_history (user_id, user_query, ai_response, language, source)
        VALUES (?, ?, ?, ?, ?)
        """, (user_id, query, response, language, source))
        conn.commit()
        conn.close()
    except Exception as e:
        print("[DB LOG ERROR]", e)


# Initialize DB immediately on module import
init_db()
