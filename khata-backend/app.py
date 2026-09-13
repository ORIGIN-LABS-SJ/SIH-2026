"""
Khata Backend - Central REST API Service
Flask-based backend with CORS, Gemini AI integration, real 2025-2026 scheme matching,
and consumer favorability ranking.
"""

import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from schemes_data import get_ranked_schemes, SCHEMES_DB
from ai_service import generate_advisor_response, LANGUAGE_MAP

app = Flask(__name__)
# Enable CORS for all origins (supports desktop file:// and web clients)
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Business models capital benchmarks
BUSINESS_MODELS = {
    "grocery": {
        "name": "Grocery & General Provisions Store",
        "min_capital": 150000,
        "ideal_capital": 300000,
        "splits": {"raw": 45, "setup": 25, "mkt": 10, "buff": 20}
    },
    "tailoring": {
        "name": "Tailoring & Garment Alterations",
        "min_capital": 40000,
        "ideal_capital": 80000,
        "splits": {"raw": 30, "setup": 45, "mkt": 10, "buff": 15}
    },
    "dairy": {
        "name": "Dairy & Milk Collection Depot",
        "min_capital": 75000,
        "ideal_capital": 150000,
        "splits": {"raw": 50, "setup": 25, "mkt": 5, "buff": 20}
    },
    "handicraft": {
        "name": "Handicrafts & Handloom Weaving",
        "min_capital": 50000,
        "ideal_capital": 100000,
        "splits": {"raw": 40, "setup": 30, "mkt": 15, "buff": 15}
    },
    "food_cart": {
        "name": "Mobile Food & Chaat Cart",
        "min_capital": 35000,
        "ideal_capital": 70000,
        "splits": {"raw": 40, "setup": 40, "mkt": 5, "buff": 15}
    },
    "mobile_repair": {
        "name": "Mobile Repair & Accessories Kiosk",
        "min_capital": 60000,
        "ideal_capital": 120000,
        "splits": {"raw": 45, "setup": 30, "mkt": 10, "buff": 15}
    }
}


@app.route("/api/health", methods=["GET"])
def health_check():
    gemini_configured = bool(os.getenv("GEMINI_API_KEY", ""))
    return jsonify({
        "status": "online",
        "service": "Khata Micro-Enterprise Advisory Backend",
        "version": "2.0.0",
        "gemini_live": gemini_configured,
        "supported_languages": list(LANGUAGE_MAP.keys())
    })


@app.route("/api/schemes/match", methods=["POST"])
def match_schemes():
    """
    Ranks schemes by consumer favorability.
    GUARANTEE: The scheme that saves the most money/interest is ranked FIRST.
    """
    data = request.get_json() or {}
    ranked = get_ranked_schemes(data)
    
    return jsonify({
        "success": True,
        "count": len(ranked),
        "most_favorable": ranked[0] if ranked else None,
        "schemes": ranked
    })


@app.route("/api/ai-advisor", methods=["POST"])
def ai_advisor():
    """
    Multilingual AI advisor response.
    Replies in user's selected language (Hindi, Gujarati, Marathi, etc.)
    """
    data = request.get_json() or {}
    result = generate_advisor_response(data)
    return jsonify({
        "success": True,
        **result
    })


@app.route("/api/capital/optimize", methods=["POST"])
def optimize_capital():
    """
    Calculates intelligent capital distribution & checks for capital adequacy.
    """
    data = request.get_json() or {}
    capital = float(data.get("capital", 150000))
    biz_key = data.get("businessType", "grocery").lower()
    
    # Match model
    model = BUSINESS_MODELS.get(biz_key, BUSINESS_MODELS["grocery"])
    splits = model["splits"]
    is_adequate = capital >= model["min_capital"]
    gap = max(0, model["min_capital"] - capital)

    distribution = [
        {
            "category": "Raw Materials & Stock",
            "percent": splits["raw"],
            "amount": round(capital * (splits["raw"] / 100)),
            "purpose": "Wholesale opening inventory and trade goods."
        },
        {
            "category": "Furniture & Fit-out",
            "percent": splits["setup"],
            "amount": round(capital * (splits["setup"] / 100)),
            "purpose": "Shelves, counters, lighting, and basic equipment."
        },
        {
            "category": "Marketing & Digital QR",
            "percent": splits["mkt"],
            "amount": round(capital * (splits["mkt"] / 100)),
            "purpose": "Signboard, UPI QR stands, and opening promotions."
        },
        {
            "category": "3-Month Cash Cushion",
            "percent": splits["buff"],
            "amount": round(capital * (splits["buff"] / 100)),
            "purpose": "Untouchable emergency buffer for rent and utilities."
        }
    ]

    return jsonify({
        "success": True,
        "business": model["name"],
        "capital": capital,
        "is_adequate": is_adequate,
        "funding_gap": gap,
        "min_required": model["min_capital"],
        "ideal_capital": model["ideal_capital"],
        "distribution": distribution
    })


@app.route("/api/auth/otp/send", methods=["POST"])
def send_otp():
    """
    Simulates / integrates Indian phone OTP dispatch.
    """
    data = request.get_json() or {}
    phone = data.get("phone", "").strip()
    if len(phone) < 10:
        return jsonify({"success": False, "error": "Invalid 10-digit Indian phone number"}), 400
    
    return jsonify({
        "success": True,
        "message": f"OTP sent to +91 {phone}",
        "demo_otp": "1234",
        "demoOtp": "1234"
    })


@app.route("/api/auth/otp/verify", methods=["POST"])
def verify_otp():
    """
    Verifies phone OTP.
    """
    data = request.get_json() or {}
    otp = str(data.get("otp") or "").strip()
    phone = str(data.get("phone") or "").strip()

    # For demo / developer mode, any 4-digit code or '1234' succeeds
    if len(otp) == 4:
        return jsonify({
            "success": True,
            "user": {
                "displayName": f"+91 {phone}",
                "phone": phone,
                "authType": "phone"
            }
        })
    return jsonify({"success": False, "error": "Invalid OTP. Please enter 4 digits."}), 400


if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    print(f"[KHATA BACKEND] Starting on http://localhost:{port}")
    app.run(host="0.0.0.0", port=port, debug=False)
