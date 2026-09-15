# -*- coding: utf-8 -*-
import sys, os

try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

DEFAULT_KEY = "AQ.Ab8RN6LwQQew8RNo08aYnUMxVIOBLUEAJl4gIhINCRFTQ-KRlw"

print("Setting default Gemini API key across frontend and backend...")

# 1. Update khata-backend/.env
backend_env_path = os.path.join("khata-backend", ".env")
env_content = f"""PORT=5000
HOST=0.0.0.0
ENVIRONMENT=production
GEMINI_API_KEY={DEFAULT_KEY}
"""
with open(backend_env_path, "w", encoding="utf-8") as f:
    f.write(env_content)
print("✓ Updated khata-backend/.env")

# 2. Update khata-backend/ai_service.py
with open("khata-backend/ai_service.py", "r", encoding="utf-8") as f:
    ai_code = f.read()

# Make sure DEFAULT_GEMINI_KEY is used as fallback in ai_service.py
default_key_def = f'DEFAULT_GEMINI_KEY = "{DEFAULT_KEY}"\n'
if "DEFAULT_GEMINI_KEY =" not in ai_code:
    ai_code = default_key_def + ai_code

# Update candidate model priority in call_gemini_api
ai_code = ai_code.replace(
    'default_candidates = [\n        "gemini-2.0-flash",\n        "gemini-2.5-flash",\n        "gemini-1.5-flash-latest",',
    'default_candidates = [\n        "gemini-flash-lite-latest",\n        "gemini-flash-latest",\n        "gemini-3.7-flash",\n        "gemini-2.0-flash",\n        "gemini-2.5-flash",'
)

ai_code = ai_code.replace(
    'api_key = (params.get("geminiApiKey") or params.get("apiKey") or os.getenv("GEMINI_API_KEY", "")).strip()',
    f'api_key = (params.get("geminiApiKey") or params.get("apiKey") or os.getenv("GEMINI_API_KEY", "") or DEFAULT_GEMINI_KEY).strip()'
)

with open("khata-backend/ai_service.py", "w", encoding="utf-8") as f:
    f.write(ai_code)
print("✓ Updated khata-backend/ai_service.py")

# 3. Update index.html
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# Add DEFAULT_GEMINI_API_KEY near API_BASE_URL
if "const DEFAULT_GEMINI_API_KEY" not in html:
    html = html.replace(
        "const API_BASE_URL = IS_LOCAL ? 'http://localhost:5000' : '';",
        f"const API_BASE_URL = IS_LOCAL ? 'http://localhost:5000' : '';\nconst DEFAULT_GEMINI_API_KEY = '{DEFAULT_KEY}';\ntry {{ if (!localStorage.getItem('khata_gemini_key')) {{ localStorage.setItem('khata_gemini_key', DEFAULT_GEMINI_API_KEY); }} }} catch(e){{}};"
    )

# Update read of savedKey in sendChatMessage
html = html.replace(
    "const savedKey = localStorage.getItem('khata_gemini_key') || '';",
    f"const savedKey = (localStorage.getItem('khata_gemini_key') || DEFAULT_GEMINI_API_KEY).trim();"
)

# Update candidateModels in index.html
html = html.replace(
    "const candidateModels = ['gemini-2.0-flash', 'gemini-2.5-flash', 'gemini-1.5-flash-latest', 'gemini-1.5-pro', 'gemini-2.0-flash-exp'];",
    "const candidateModels = ['gemini-flash-lite-latest', 'gemini-flash-latest', 'gemini-3.7-flash', 'gemini-2.0-flash', 'gemini-2.5-flash', 'gemini-1.5-flash-latest', 'gemini-pro-latest'];"
)

# Update openGeminiKeyModal in index.html
html = html.replace(
    "const saved = localStorage.getItem('khata_gemini_key') || '';",
    "const saved = (localStorage.getItem('khata_gemini_key') || DEFAULT_GEMINI_API_KEY).trim();"
)
html = html.replace(
    "status.textContent = '🟢 Google Gemini API Key configured in your browser.';",
    "status.textContent = '🟢 Google Gemini Flash active (Pre-configured cloud key).';"
)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)
print("✓ Updated index.html with auto-configured default Gemini key")

print("Done setting default Gemini API key!")
