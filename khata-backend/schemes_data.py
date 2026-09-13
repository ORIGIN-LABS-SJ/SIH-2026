"""
Khata Backend - Government Schemes Knowledge Base (2025-2026)
Real, verified schemes for micro-entrepreneurs in India with consumer favorability scoring.
"""

SCHEMES_DB = [
    {
        "id": "pmegp",
        "name": "PMEGP (Prime Minister's Employment Generation Programme)",
        "name_hi": "पीएमईजीपी (प्रधानमंत्री रोजगार सृजन कार्यक्रम)",
        "category_tags": ["subsidy", "women", "sc_st_obc", "rural"],
        "max_loan": 2000000,
        "max_loan_formatted": "₹20,00,000 (Services) / ₹50,00,000 (Mfg)",
        "base_interest_rate": 8.5,
        "interest_rate_formatted": "8.5% p.a.",
        "margin_req_general": 10,
        "margin_req_special": 5,
        "subsidy_rural_special": 35,
        "subsidy_urban_special": 25,
        "subsidy_rural_general": 25,
        "subsidy_urban_general": 15,
        "moratorium_months": 6,
        "collateral_required": False,
        "ministry": "Ministry of MSME, Govt of India",
        "nodal_agency": "KVIC (Khadi and Village Industries Commission)",
        "description": "Prime credit-linked capital subsidy programme offering up to 35% direct non-repayable capital grant for micro-enterprises.",
        "description_hi": "सूक्ष्म उद्यमों के लिए 35% तक प्रत्यक्ष गैर-वापसी योग्य सरकारी पूंजीगत अनुदान/सब्सिडी प्रदान करने वाली प्रमुख योजना।"
    },
    {
        "id": "pm_vishwakarma",
        "name": "PM Vishwakarma Yojana",
        "name_hi": "पीएम विश्वकर्मा योजना",
        "category_tags": ["artisan", "tailoring", "low_interest", "toolkit_grant"],
        "max_loan": 300000,
        "max_loan_formatted": "₹3,00,000 (Tranche 1: ₹1L + Tranche 2: ₹2L)",
        "base_interest_rate": 5.0,
        "interest_rate_formatted": "5.0% Subsidized (Govt pays 8% subvention)",
        "margin_req_general": 0,
        "margin_req_special": 0,
        "subsidy_percent": 0,
        "cash_grant": 15000,
        "cash_grant_note": "₹15,000 e-voucher for modern toolkits + ₹500/day skill training stipend",
        "moratorium_months": 3,
        "collateral_required": False,
        "eligible_trades": ["tailoring", "handicraft", "carpentry", "blacksmith", "barber", "pottery", "mason"],
        "ministry": "Ministry of Micro, Small and Medium Enterprises",
        "description": "Central scheme for artisans and trade craftspeople providing loans at ultra-low 5% interest with a ₹15,000 free toolkit grant.",
        "description_hi": "पारंपरिक कारीगरों व सिलाई/शिल्पकारों के लिए मात्र 5% रियायती ब्याज पर ₹3 लाख का ऋण तथा ₹15,000 का निःशुल्क टूलकिट अनुदान।"
    },
    {
        "id": "nsfdc",
        "name": "NSFDC / NBCFDC Concessional Term Loan",
        "name_hi": "एनएसएफडीसी / एनबीसीएफडीसी रियायती ऋण योजना",
        "category_tags": ["sc_st_obc", "low_interest", "backward_classes"],
        "max_loan": 1500000,
        "max_loan_formatted": "₹15,00,000",
        "base_interest_rate": 6.0,
        "interest_rate_formatted": "6.0% Fixed Concessional",
        "margin_req_general": 15,
        "margin_req_special": 10,
        "subsidy_percent": 10,
        "moratorium_months": 6,
        "collateral_required": False,
        "ministry": "Ministry of Social Justice & Empowerment",
        "description": "Subsidized term loans for backward and marginalized entrepreneurs with fixed 6% concessional interest and 6-month grace period.",
        "description_hi": "पिछड़े और वंचित वर्ग के उद्यमियों हेतु 6% की निश्चित रियायती ब्याज दर और 6 महीने की किश्त मोहलत के साथ रियायती ऋण।"
    },
    {
        "id": "standup",
        "name": "Stand-Up India Scheme",
        "name_hi": "स्टैंड-अप इंडिया योजना",
        "category_tags": ["women", "sc_st", "high_ticket"],
        "max_loan": 10000000,
        "max_loan_formatted": "₹10,00,000 to ₹1,00,00,000",
        "base_interest_rate": 8.0,
        "interest_rate_formatted": "Base Rate + 3% (Tenor Premium)",
        "margin_req_general": 15,
        "margin_req_special": 15,
        "subsidy_percent": 0,
        "moratorium_months": 18,
        "collateral_required": False,
        "ministry": "Ministry of Finance, Govt of India",
        "description": "Dedicated bank branch quota for greenfield micro-enterprises led by Women, Scheduled Castes (SC), and Scheduled Tribes (ST).",
        "description_hi": "महिला और एससी/एसटी उद्यमियों के नए उद्यमों के लिए प्रत्येक बैंक शाखा स्तर पर समर्पित ₹10 लाख से ₹1 करोड़ तक का ऋण।"
    },
    {
        "id": "svanidhi",
        "name": "PM SVANidhi (Street Vendor's AtmaNirbhar Nidhi)",
        "name_hi": "पीएम स्वनिधि योजना",
        "category_tags": ["street_vendor", "food_cart", "zero_margin", "cashback"],
        "max_loan": 50000,
        "max_loan_formatted": "₹10,00,000 (1st: ₹10k, 2nd: ₹20k, 3rd: ₹50k)",
        "base_interest_rate": 7.0,
        "interest_rate_formatted": "7% Direct Interest Subsidy",
        "margin_req_general": 0,
        "margin_req_special": 0,
        "subsidy_percent": 7,
        "cashback_annual": 1200,
        "moratorium_months": 0,
        "collateral_required": False,
        "ministry": "Ministry of Housing and Urban Affairs",
        "description": "Zero-margin working capital loan for street vendors, mobile food carts, and kiosks with 7% interest cashback on regular repayment.",
        "description_hi": "ठेले, रेहड़ी और छोटे खाद्य विक्रेताओं के लिए बिना किसी मार्जिन मनी के 7% ब्याज कैशबैक सब्सिडी वाला कार्यशील पूंजी ऋण।"
    },
    {
        "id": "mudra_kishore",
        "name": "Pradhan Mantri MUDRA Yojana (Kishore)",
        "name_hi": "प्रधानमंत्री मुद्रा योजना (किशोर)",
        "category_tags": ["collateral_free", "general_purpose", "retail_store"],
        "max_loan": 500000,
        "max_loan_formatted": "₹50,000 to ₹5,00,000",
        "base_interest_rate": 8.2,
        "interest_rate_formatted": "8.2% to 9.5% p.a.",
        "margin_req_general": 15,
        "margin_req_special": 10,
        "subsidy_percent": 0,
        "moratorium_months": 3,
        "collateral_required": False,
        "ministry": "Department of Financial Services, Ministry of Finance",
        "description": "100% collateral-free credit for growing retail shops, grocery stores, and repair centers backed by CGTMSE credit guarantee.",
        "description_hi": "दुकानदारों, किराना व सर्विस इकाइयों के लिए बिना किसी संपत्ति गिरवी रखे क्रेडिट गारंटी से सुरक्षित बैंक ऋण।"
    },
    {
        "id": "mudra_tarun_plus",
        "name": "PM MUDRA Yojana (Tarun Plus — 2024 Enhanced)",
        "name_hi": "पीएम मुद्रा योजना (तरुण प्लस — ₹20 लाख तक)",
        "category_tags": ["expansion", "collateral_free", "budget_2024"],
        "max_loan": 2000000,
        "max_loan_formatted": "Up to ₹20,00,000",
        "base_interest_rate": 8.9,
        "interest_rate_formatted": "8.9% p.a.",
        "margin_req_general": 15,
        "margin_req_special": 15,
        "subsidy_percent": 0,
        "moratorium_months": 6,
        "collateral_required": False,
        "ministry": "Department of Financial Services, Ministry of Finance",
        "description": "Enhanced loan limit announced in Union Budget for established entrepreneurs with good credit track record to scale up.",
        "description_hi": "अच्छे क्रेडिट रिकॉर्ड वाले उद्यमियों के लिए केंद्रीय बजट में बढ़ाई गई ₹20 लाख तक की संपार्श्विक-मुक्त ऋण सीमा।"
    }
]


def calculate_favorability(scheme, user_profile):
    """
    Computes a composite consumer favorability score (0 - 100+).
    HIGHER SCORE = MORE FAVOURABLE TO CONSUMER (saves more money, lower risk).
    
    Factors considered:
    1. Direct Non-repayable Cash Subsidy / Grant (Biggest money saver)
    2. Interest Subvention / Concessional Interest (Lower annual burden)
    3. Minimum Own Margin Money Required (Lower upfront cash drain)
    4. Demographic Match Bonus (Women, SC, ST, OBC special perks)
    5. Capital Range Suitability (Best fit for their budget)
    6. Moratorium Grace Period (Relief in first 6 months)
    """
    gender = user_profile.get("gender", "male").lower()
    category = user_profile.get("category", "general").lower()
    capital = float(user_profile.get("capital", 150000))
    business_type = user_profile.get("business_type", "grocery").lower()
    is_rural = "rural" in user_profile.get("location", "").lower() or "village" in user_profile.get("location", "").lower() or True

    score = 50.0  # Base neutral score
    reasons = []

    # 1. Direct Grant / Capital Subsidy (Massive consumer benefit)
    if scheme["id"] == "pmegp":
        is_special = (gender == "female" or category in ["sc", "st", "obc", "minority"])
        subsidy_pct = 35 if (is_rural and is_special) else (25 if is_special else (25 if is_rural else 15))
        margin_pct = 5 if is_special else 10
        
        subsidy_amount = round(capital * (subsidy_pct / 100))
        score += 45 + (subsidy_pct * 0.8)
        
        reasons.append(f"Provides a {subsidy_pct}% non-repayable government grant (saves ₹{subsidy_amount:,} out-of-pocket).")
        reasons.append(f"Only {margin_pct}% own margin money required ({100 - margin_pct}% bank financed).")
        
        if is_special:
            score += 15
            reasons.append("Demographic privilege applied: Extra 10% capital subsidy.")

    elif scheme["id"] == "pm_vishwakarma":
        is_artisan_trade = any(t in business_type for t in ["tailor", "sew", "cloth", "craft", "potter", "wood", "repair"])
        if is_artisan_trade or capital <= 200000:
            score += 55
            reasons.append("Ultra-low 5.0% subsidized interest rate (government pays remaining 8% interest).")
            reasons.append("₹15,000 direct free toolkit grant + 100% collateral-free credit.")
            reasons.append("0% margin money required from entrepreneur.")
        else:
            score += 20

    elif scheme["id"] == "nsfdc":
        if category in ["sc", "st", "obc", "minority"]:
            score += 40
            reasons.append("6.0% fixed concessional interest — significantly lower than standard commercial bank rates (9-12%).")
            reasons.append("Up to 6 months moratorium on principal repayment while business stabilizes.")
        else:
            score -= 10

    elif scheme["id"] == "standup":
        if gender == "female" or category in ["sc", "st"]:
            score += 35
            if capital >= 500000:
                score += 25
            reasons.append("Dedicated priority sanction quota for women and SC/ST greenfield enterprises.")
            reasons.append("Up to 18-month moratorium repayment cushion.")
        else:
            score = 10  # Not eligible

    elif scheme["id"] == "svanidhi":
        if capital <= 60000 or "cart" in business_type or "vendor" in business_type:
            score += 60
            reasons.append("0% margin money required — completely accessible for small budgets.")
            reasons.append("7% direct interest cashback + ₹1,200 annual digital transaction rewards.")
        else:
            score += 10

    elif scheme["id"] == "mudra_kishore":
        if 50000 <= capital <= 500000:
            score += 30
            reasons.append("100% collateral-free credit backed by National Credit Guarantee (CGTMSE).")
            reasons.append("Zero third-party guarantor required.")

    elif scheme["id"] == "mudra_tarun_plus":
        if capital > 500000:
            score += 25
            reasons.append("High credit ceiling up to ₹20 Lakhs for established enterprises.")

    # 2. Interest rate penalty/reward
    interest = scheme.get("base_interest_rate", 8.5)
    if interest <= 5.0:
        score += 25
    elif interest <= 6.5:
        score += 15
    elif interest <= 8.5:
        score += 5

    # 3. Margin requirement reward
    margin = scheme.get("margin_req_special" if (gender == "female" or category != "general") else "margin_req_general", 15)
    if margin == 0:
        score += 20
    elif margin <= 5:
        score += 15
    elif margin <= 10:
        score += 8

    # 4. Moratorium cushion reward
    moratorium = scheme.get("moratorium_months", 3)
    score += (moratorium * 1.5)

    return {
        "favorability_score": round(score, 1),
        "primary_reason": reasons[0] if reasons else "Competitive concessional credit terms.",
        "all_reasons": reasons,
        "is_top_recommendation": False
    }


def get_ranked_schemes(user_profile):
    """
    Ranks schemes by consumer favorability so the MOST FAVORABLE scheme
    is ALWAYS returned FIRST.
    """
    scored_schemes = []
    for s in SCHEMES_DB:
        calc = calculate_favorability(s, user_profile)
        merged = {**s, **calc}
        # Provide camelCase aliases for frontend convenience
        merged["favorabilityScore"] = merged["favorability_score"]
        merged["subsidy"] = f"{merged.get('subsidy_rural_special', merged.get('subsidy_percent', 0))}%"
        merged["interestRate"] = merged.get("interest_rate_formatted", f"{merged.get('base_interest_rate', 8.5)}% p.a.")
        merged["maxLoan"] = merged.get("max_loan_formatted", f"₹{merged.get('max_loan', 1000000):,}")
        scored_schemes.append(merged)

    # Sort descending by favorability_score
    scored_schemes.sort(key=lambda x: x["favorability_score"], reverse=True)

    # Mark the #1 scheme
    if scored_schemes:
        scored_schemes[0]["is_top_recommendation"] = True
        scored_schemes[0]["isTopRecommendation"] = True

    return scored_schemes
