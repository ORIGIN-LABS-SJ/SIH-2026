"""
Sahayak — Phase 5: Simulated UIDAI Aadhaar e-KYC Engine & Identity Stack
Official SIH26091 (Ministry of Social Justice and Empowerment) Service
"""

import re
import hashlib
from datetime import datetime
from typing import Dict, Any, Optional

# Verhoeff algorithm multiplication table
VERHOEFF_D = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
    [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
    [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
    [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
    [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
    [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
    [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
    [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
]

# Verhoeff permutation table
VERHOEFF_P = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
    [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
    [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
    [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
    [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
    [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
    [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]
]

# Verhoeff inverse table
VERHOEFF_INV = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9]


def validate_verhoeff_aadhaar(num_str: str) -> bool:
    """
    Validates a 12-digit Indian Aadhaar number using the official Verhoeff checksum algorithm.
    Allows standard clean numerical strings.
    """
    clean_num = re.sub(r'[\s\-]', '', num_str)
    if not clean_num.isdigit() or len(clean_num) != 12:
        return False
    
    # Check for obvious mock or dummy repeating sequences
    if len(set(clean_num)) == 1:
        return False

    c = 0
    reversed_digits = [int(x) for x in reversed(clean_num)]
    for i, digit in enumerate(reversed_digits):
        p_val = VERHOEFF_P[i % 8][digit]
        c = VERHOEFF_D[c][p_val]
    return c == 0


# Active in-memory session store for KYC OTPs
ACTIVE_KYC_SESSIONS: Dict[str, Dict[str, Any]] = {}

# Default verified demo profile (tailored for MoSJE concessional schemes)
DEFAULT_VERIFIED_PROFILE = {
    "full_name": "Ramesh Chand Patel",
    "care_of": "S/O Ram Swaroop Patel",
    "gender": "Male",
    "dob": "15/08/1984",
    "age": 42,
    "photo_url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    "address": {
        "house": "Plot No. 42, Gali No. 3",
        "locality": "Shivpur Industrial Area",
        "landmark": "Near Shiv Temple",
        "sub_district": "Varanasi Sadar",
        "district": "Varanasi",
        "state": "Uttar Pradesh",
        "pincode": "221003",
        "country": "India"
    },
    "social_category": "OBC (Other Backward Class - Eligible for NBCFDC 6% Concessional Credit & PMEGP 35% Subsidy)",
    "target_ministry": "Ministry of Social Justice and Empowerment (MoSJE)",
    "msme_udyam_number": "UDYAM-UP-75-0049210",
    "bank_account_seeded": True,
    "dbt_enabled": True
}


def initiate_aadhaar_kyc(aadhaar_number: str) -> Dict[str, Any]:
    """
    Initiates Aadhaar e-KYC by validating the Aadhaar number format
    and generating an OTP session to the simulated registered mobile.
    """
    clean_aadhaar = re.sub(r'[\s\-]', '', aadhaar_number)
    
    # If 12 digits, accept demo or verhoeff
    if len(clean_aadhaar) != 12 or not clean_aadhaar.isdigit():
        raise ValueError("Invalid Aadhaar number. Must be exactly 12 digits.")

    masked_aadhaar = f"XXXX-XXXX-{clean_aadhaar[-4:]}"
    txn_id = f"TXN-KYC-{int(datetime.now().timestamp())}-{clean_aadhaar[-4:]}"
    otp = "123456"  # Standard demonstration OTP
    masked_mobile = "+91 98*** ***10"

    ACTIVE_KYC_SESSIONS[txn_id] = {
        "aadhaar": clean_aadhaar,
        "masked_aadhaar": masked_aadhaar,
        "otp": otp,
        "created_at": datetime.now(),
        "masked_mobile": masked_mobile,
        "status": "OTP_SENT"
    }

    return {
        "success": True,
        "transaction_id": txn_id,
        "masked_aadhaar": masked_aadhaar,
        "masked_mobile": masked_mobile,
        "message": f"Simulated OTP sent to registered mobile {masked_mobile}.",
        "demo_otp_hint": "123456"
    }


def confirm_aadhaar_kyc(aadhaar_number: str, otp: str, txn_id: str) -> Dict[str, Any]:
    """
    Validates the 6-digit OTP and generates an authentic UIDAI Demographic verification packet.
    """
    clean_aadhaar = re.sub(r'[\s\-]', '', aadhaar_number)
    session = ACTIVE_KYC_SESSIONS.get(txn_id)

    # Allow testing without strict session if OTP is demo OTP 123456
    if not session and otp != "123456":
        raise ValueError("KYC session expired or invalid. Please request a fresh OTP.")

    if session and session["otp"] != otp and otp != "123456":
        raise ValueError("Incorrect OTP entered. Use demo OTP 123456.")

    masked_aadhaar = f"XXXX-XXXX-{clean_aadhaar[-4:]}" if len(clean_aadhaar) >= 4 else "XXXX-XXXX-9021"
    timestamp_str = datetime.now().strftime("%Y-%m-%d %H:%M:%S IST")
    uidai_token = f"UIDAI-eKYC-2026-MOSJE-{clean_aadhaar[-4:] if len(clean_aadhaar) >= 4 else '9021'}"

    # Generate cryptographic SHA-256 seal for the e-KYC demographic packet
    raw_signature = f"{masked_aadhaar}|{DEFAULT_VERIFIED_PROFILE['full_name']}|{DEFAULT_VERIFIED_PROFILE['dob']}|{uidai_token}|{timestamp_str}"
    digital_hash = hashlib.sha256(raw_signature.encode()).hexdigest()

    verified_profile = {
        "status": "VERIFIED",
        "uidai_token": uidai_token,
        "masked_aadhaar": masked_aadhaar,
        "full_name": DEFAULT_VERIFIED_PROFILE["full_name"],
        "care_of": DEFAULT_VERIFIED_PROFILE["care_of"],
        "gender": DEFAULT_VERIFIED_PROFILE["gender"],
        "dob": DEFAULT_VERIFIED_PROFILE["dob"],
        "age": DEFAULT_VERIFIED_PROFILE["age"],
        "photo_url": DEFAULT_VERIFIED_PROFILE["photo_url"],
        "address": DEFAULT_VERIFIED_PROFILE["address"],
        "formatted_address": (
            f"{DEFAULT_VERIFIED_PROFILE['address']['house']}, "
            f"{DEFAULT_VERIFIED_PROFILE['address']['locality']}, "
            f"{DEFAULT_VERIFIED_PROFILE['address']['district']}, "
            f"{DEFAULT_VERIFIED_PROFILE['address']['state']} - "
            f"{DEFAULT_VERIFIED_PROFILE['address']['pincode']}"
        ),
        "social_category": DEFAULT_VERIFIED_PROFILE["social_category"],
        "target_ministry": DEFAULT_VERIFIED_PROFILE["target_ministry"],
        "msme_udyam_number": DEFAULT_VERIFIED_PROFILE["msme_udyam_number"],
        "bank_account_seeded": DEFAULT_VERIFIED_PROFILE["bank_account_seeded"],
        "dbt_enabled": DEFAULT_VERIFIED_PROFILE["dbt_enabled"],
        "verified_at": timestamp_str,
        "sha256_digital_seal": digital_hash,
        "psl_lending_justification": (
            "Beneficiary meets 100% RBI Priority Sector Lending (PSL) criteria for unbanked micro-enterprises "
            "with Aadhaar-seeded Jan Dhan / Current account under MoSJE guidelines."
        )
    }

    if session:
        session["status"] = "VERIFIED"
        session["verified_profile"] = verified_profile

    return {
        "success": True,
        "message": "Aadhaar e-KYC demographic authentication successful.",
        "profile": verified_profile
    }
