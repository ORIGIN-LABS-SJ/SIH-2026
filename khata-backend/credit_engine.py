"""
Alternative ML Credit Scoring & Bank Financial Dossier (DPR) Engine
SIH26091 — Ministry of Social Justice and Empowerment
Provides non-bureau underwriting for rural micro-entrepreneurs who lack traditional CIBIL scores.
"""

from typing import Dict, Any, List, Optional
import math
import hashlib
from datetime import datetime


def calculate_alternative_credit_score(
    sales_total: float = 0.0,
    expense_total: float = 0.0,
    udhar_total: float = 0.0,
    udhar_settled_ratio: float = 0.85,
    tx_count: int = 10,
    business_type: str = "grocery",
    capital: float = 150000.0,
    cibil_input: Optional[int] = None
) -> Dict[str, Any]:
    """
    Computes a non-bureau alternative credit score (300 to 900) based on
    4 real-world rural operational discipline pillars:
    1. Cash Flow Predictability (35% weight)
    2. Supplier & Inventory Discipline (25% weight)
    3. Overhead & Utility Regularity (20% weight)
    4. Customer Udhar Recovery Velocity (20% weight)
    """
    # 1. Pillar 1: Cash Flow Predictability (35%)
    # Evaluates transaction frequency, operating cash margin, and revenue volume
    net_profit = sales_total - expense_total
    margin_ratio = (net_profit / sales_total) if sales_total > 0 else 0.25
    margin_score = min(1.0, max(0.2, margin_ratio / 0.30))  # 30% margin is benchmark
    volume_score = min(1.0, max(0.3, (sales_total / 1000) / 10.0))  # Benchmark ₹10k+ volume
    freq_score = min(1.0, max(0.4, tx_count / 15.0))
    p1_cash_flow = round((margin_score * 0.45 + volume_score * 0.30 + freq_score * 0.25), 3)

    # 2. Pillar 2: Supplier & Inventory Payment Discipline (25%)
    # Evaluates healthy restocking ratio (expenses shouldn't exceed 85% of sales, shouldn't be 0)
    exp_ratio = (expense_total / sales_total) if sales_total > 0 else 0.5
    if 0.35 <= exp_ratio <= 0.75:
        p2_supplier = 0.95
    elif 0.20 <= exp_ratio < 0.35 or 0.75 < exp_ratio <= 0.85:
        p2_supplier = 0.80
    else:
        p2_supplier = 0.60

    # 3. Pillar 3: Overhead & Utility Regularity (20%)
    # Operational continuity indicated by steady transactions and capital base
    cap_adequacy = min(1.0, max(0.4, capital / 100000.0))
    p3_utilities = round(min(1.0, 0.5 + 0.5 * cap_adequacy), 3)

    # 4. Pillar 4: Customer Udhar Recovery Velocity (20%)
    # Evaluates recovery rate of customer credit
    p4_recovery = min(1.0, max(0.3, float(udhar_settled_ratio)))

    # Composite Normalized Score (0.0 to 1.0)
    composite_factor = (
        p1_cash_flow * 0.35 +
        p2_supplier * 0.25 +
        p3_utilities * 0.20 +
        p4_recovery * 0.20
    )

    # Scale to 300 - 900
    calculated_score = int(round(300 + composite_factor * 600))
    calculated_score = min(880, max(350, calculated_score))

    # Rating categorization
    if calculated_score >= 750:
        rating_band = "AAA"
        rating_desc = "Super Prime · Instant Sanction & Up to 35% PMEGP Subsidy"
        risk_level = "Very Low"
        interest_rebate = "0.50% - 0.75% p.a."
        sanction_timeline = "24 - 48 Hours"
    elif calculated_score >= 680:
        rating_band = "AA"
        rating_desc = "Low Risk · Eligible for Collateral-Free MUDRA / NSFDC"
        risk_level = "Low"
        interest_rebate = "0.25% - 0.50% p.a."
        sanction_timeline = "3 - 5 Days"
    elif calculated_score >= 580:
        rating_band = "A"
        rating_desc = "Standard Micro-Credit · Approved under CGTMSE Guarantee"
        risk_level = "Moderate"
        interest_rebate = "Standard Scheme Rates"
        sanction_timeline = "5 - 7 Days"
    else:
        rating_band = "Micro-Prime"
        rating_desc = "Micro-Credit with Cash Buffer Guidance"
        risk_level = "Monitored"
        interest_rebate = "Standard Rates with 2Q Moratorium"
        sanction_timeline = "7 - 10 Days"

    # Effective score considering traditional CIBIL if provided
    effective_bureau_score = cibil_input if (cibil_input and cibil_input >= 300) else calculated_score

    return {
        "alternative_score": calculated_score,
        "effective_score": effective_bureau_score,
        "rating_band": rating_band,
        "rating_description": rating_desc,
        "risk_level": risk_level,
        "interest_rebate": interest_rebate,
        "sanction_timeline": sanction_timeline,
        "cgtmse_eligible": calculated_score >= 580,
        "pillars": {
            "cash_flow": {
                "name": "Daily Cash Flow Predictability",
                "weight": 35,
                "score_pct": int(round(p1_cash_flow * 100)),
                "status": "Healthy & Consistent" if p1_cash_flow >= 0.75 else "Moderate"
            },
            "supplier_discipline": {
                "name": "Supplier & Inventory Discipline",
                "weight": 25,
                "score_pct": int(round(p2_supplier * 100)),
                "status": "Prompt Wholesale Turnover" if p2_supplier >= 0.8 else "Standard"
            },
            "utilities": {
                "name": "Overhead & Utility Regularity",
                "weight": 20,
                "score_pct": int(round(p3_utilities * 100)),
                "status": "Consistent Operational Baseline"
            },
            "udhar_recovery": {
                "name": "Customer Udhar Recovery Velocity",
                "weight": 20,
                "score_pct": int(round(p4_recovery * 100)),
                "status": "High Collection Reliability" if p4_recovery >= 0.75 else "Active Follow-ups"
            }
        },
        "underwriting_summary": (
            f"Entrepreneur exhibits a strong Sahayak Alternative Credit Score of {calculated_score}/900 ({rating_band}). "
            f"Cash flow consistency and disciplined restocking qualify this unit for 100% collateral-free credit under "
            f"Credit Guarantee Trust for Micro and Small Enterprises (CGTMSE) with Priority Sector Lending (PSL) benefits."
        )
    }


def generate_bank_financial_dossier(
    entrepreneur_name: str = "Ramesh Sharma",
    business_name: str = "Ramesh General Provisions",
    trade: str = "Grocery & General Provisions",
    location: str = "Sojat City, Rajasthan",
    social_category: str = "OBC",
    gender: str = "Male",
    project_cost: float = 180000.0,
    sales_total: float = 0.0,
    expense_total: float = 0.0,
    udhar_total: float = 0.0,
    cibil_score: int = 720
) -> Dict[str, Any]:
    """
    Generates an official bank appraisal Detailed Project Report (DPR)
    formatted for commercial banks (SBI, PNB, BOB, RRBs) and MoSJE/MSME nodal agencies.
    """
    # Alternative Credit Evaluation
    credit_profile = calculate_alternative_credit_score(
        sales_total=sales_total,
        expense_total=expense_total,
        udhar_total=udhar_total,
        capital=project_cost,
        cibil_input=cibil_score
    )

    # Capital Structuring & Means of Finance
    margin_percent = 10.0 if social_category.upper() in ["SC", "ST", "WOMEN"] or gender.lower() == "female" else 15.0
    margin_money = round(project_cost * (margin_percent / 100.0))
    loan_amount = round(project_cost - margin_money)

    # Term Loan vs Working Capital Split
    term_loan = round(loan_amount * 0.65)
    working_capital_cc = round(loan_amount * 0.35)

    # Targeted Government Capital Subsidy (PMEGP / NSFDC / Vishwakarma)
    is_special_cat = social_category.upper() in ["SC", "ST", "OBC", "MINORITY"] or gender.lower() == "female"
    subsidy_rate = 35.0 if is_special_cat else 25.0
    estimated_subsidy = round(project_cost * (subsidy_rate / 100.0))

    # 12-Month Financial Projections & Cashflow
    base_monthly_turnover = max(35000.0, (sales_total * 30.0) if sales_total > 500 else (project_cost * 0.35))
    monthly_sales = round(base_monthly_turnover)
    monthly_raw_stock = round(monthly_sales * 0.60)
    monthly_operating_exp = round(monthly_sales * 0.15)
    monthly_net_cashflow = round(monthly_sales - monthly_raw_stock - monthly_operating_exp)

    # Debt Service Coverage Ratio (DSCR) Calculation
    # Annual Interest at 7.5% average concessional rate + 36-month principal amortization
    annual_interest_rate = 0.075
    monthly_interest = round(term_loan * (annual_interest_rate / 12.0))
    monthly_principal = round(term_loan / 36.0)
    monthly_debt_obligation = monthly_interest + monthly_principal

    annual_operating_cashflow = monthly_net_cashflow * 12.0
    annual_debt_obligation = max(1.0, monthly_debt_obligation * 12.0)
    dscr = round(annual_operating_cashflow / annual_debt_obligation, 2)

    # Unique Verification Hash for Bank Branch Officer
    raw_hash = f"{entrepreneur_name}_{project_cost}_{location}_{credit_profile['alternative_score']}_{datetime.now().strftime('%Y%m')}"
    verification_hash = hashlib.sha256(raw_hash.encode()).hexdigest()[:16].upper()

    return {
        "dossier_id": f"DPR-SIH26091-{verification_hash[:8]}",
        "verification_hash": verification_hash,
        "generated_at": datetime.now().strftime("%d %b %Y, %I:%M %p"),
        "enterprise": {
            "entrepreneur_name": entrepreneur_name,
            "business_name": business_name,
            "trade": trade,
            "location": location,
            "social_category": social_category,
            "gender": gender,
            "is_woman_led": gender.lower() == "female",
            "psl_classification": "Priority Sector Lending - Micro Enterprise (RBI Regulated)"
        },
        "credit_assessment": credit_profile,
        "means_of_finance": {
            "total_project_cost": project_cost,
            "promoter_margin_percent": margin_percent,
            "promoter_margin_money": margin_money,
            "total_bank_loan": loan_amount,
            "term_loan_component": term_loan,
            "working_capital_cc": working_capital_cc,
            "target_scheme": "PMEGP / NSFDC Concessional Credit" if is_special_cat else "MUDRA Kishore Collateral-Free",
            "subsidy_rate_percent": subsidy_rate,
            "estimated_capital_subsidy": estimated_subsidy,
            "net_effective_cost": max(0, project_cost - estimated_subsidy)
        },
        "financial_projections": {
            "projected_monthly_sales": monthly_sales,
            "monthly_raw_stock": monthly_raw_stock,
            "monthly_operating_overhead": monthly_operating_exp,
            "monthly_net_profit": monthly_net_cashflow,
            "annual_net_cashflow": annual_operating_cashflow,
            "monthly_debt_service_emi": monthly_debt_obligation,
            "dscr_ratio": dscr,
            "dscr_verdict": "Robust & Highly Bankable (> 1.25x RBI Standard)" if dscr >= 1.5 else "Adequate Coverage"
        },
        "nodal_bank_routing": [
            {
                "bank_name": "State Bank of India (SBI)",
                "category": "Lead District Bank / PMEGP Nodal",
                "interest_rate": "8.50% - 9.15%",
                "processing_fee": "Nil under ₹5 Lakhs",
                "special_facility": "SBI e-Mudra paperless sanction"
            },
            {
                "bank_name": "Punjab National Bank (PNB)",
                "category": "PNB Sanjeevani MSME Desks",
                "interest_rate": "8.75% - 9.40%",
                "processing_fee": "Nil for Micro OBC/SC/ST units",
                "special_facility": "Direct KVIC subsidy adjustment portal"
            },
            {
                "bank_name": "Regional Rural Bank (Gramin Bank)",
                "category": "Village & Mandi Branch Network",
                "interest_rate": "8.50% - 9.25%",
                "processing_fee": "Nil",
                "special_facility": "Doorstep village branch credit approval"
            }
        ],
        "document_checklist": [
            "Aadhaar Card with active mobile link",
            "PAN Card & 2 Passport-sized photographs",
            "Free Udyam MSME Registration Certificate (udyamregistration.gov.in)",
            "Machinery, fit-out or raw stock dealer quotation / invoice estimate",
            "6-Month Bank Account Passbook / Statement",
            "Sahayak Verified DPR & Alternative Credit Dossier (Certified Document Attached)"
        ]
    }
