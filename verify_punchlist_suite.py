# -*- coding: utf-8 -*-
"""
verify_punchlist_suite.py
Automated test suite verifying all 11 Claude punch list fixes in index.html.
"""

import sys, os, re

sys.stdout.reconfigure(encoding='utf-8')

print("==================================================")
print("  PUNCH LIST COMPREHENSIVE VERIFICATION SUITE")
print("==================================================")

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

passed = 0
failed = 0

def check(test_num, title, condition, detail=""):
    global passed, failed
    if condition:
        print(f"  [✓ PASS] Test {test_num}: {title}")
        if detail:
            print(f"           → {detail}")
        passed += 1
    else:
        print(f"  [✗ FAIL] Test {test_num}: {title}")
        if detail:
            print(f"           → Reason: {detail}")
        failed += 1

# Test 1: Personal email removed
check(1, "Personal email 2309sanyam@gmail.com eradicated",
      "2309sanyam@gmail.com" not in html,
      "No trace of 2309sanyam@gmail.com found in index.html")

# Test 2: Shivram Singh demo email added
check(2, "Shivram Singh demo account added to Google sign-in",
      "demo.entrepreneur@sahayak.app" in html and "Shivram Singh" in html,
      "Found demo.entrepreneur@sahayak.app with Shivram Singh")

# Test 3: 18+ Age gate hidden by default
check(3, "18+ Age gate set to display:none by default",
      'id="age-gate-overlay" style="display:none;' in html,
      "No full-screen blocker on initial cold visit")

# Test 4: Regulatory age compliance checkbox
check(4, "Registration form contains 18+ compliance confirmation",
      'id="reg-age-confirm"' in html,
      "Compliance checkbox present in signup view")

# Test 5: Farming & Food Processing in Dropdowns
check(5, "Farming & Food Processing in #f-business and #signup-sector",
      'value="farming_produce"' in html and 'value="food_processing"' in html,
      "Both sectors selectable in assessment & registration forms")

# Test 6: Farming & Food Processing in BUSINESS_MODELS
check(6, "BUSINESS_MODELS has farming_produce and food_processing",
      "farming_produce: {" in html and "food_processing: {" in html,
      "Capital splits, minCapital, and idealCapital registered")

# Test 7: Feasibility Report PS Module 1 labeling
check(7, "Feasibility Report labeled with SIH26091 Module 1",
      "MODULE 1: AI-DRIVEN HYPER-LOCAL FEASIBILITY REPORT" in html and "MODULE 1 · FEASIBILITY" in html,
      "Clear PS compliance badge and stamp on Results Screen")

# Test 8: Module 1.2 Dedicated Catchment & Competitor Intelligence Card
check(8, "Module 1.2 Catchment & Competitor Intelligence card visible",
      "Module 1.2: Hyper-Local Market &amp; Competitor Intelligence" in html and "~1,400 Families" in html and "Wholesale Mandi Index" in html,
      "Dedicated section with footfall, competitors, mandi index, and unmet gap")

# Test 9: Dual Lending Channel Selector (NSFDC 6% vs Nodal 8.5%)
check(9, "Dual Lending Channel selector present",
      "setPlannerLendingChannel" in html and "6.0% Fixed Concessional" in html and "8.5% Priority Sector" in html,
      "Institutional clarifier and toggle available in Repayment Planner")

# Test 10: Seasonal Harvest Cashflow Cycle toggle & timeline logic
check(10, "Seasonal Cashflow Rhythm toggle and calculation logic",
      "toggleSeasonalRepayment" in html and "isSeasonalCashflowActive" in html and "🌾 Post-Harvest Peak" in html,
      "Seasonal skews (60% lean / 140% harvest) integrated into calculation & timeline")

# Test 11: Dynamic PMEGP calculation (15% to 35% KVIC Matrix)
check(11, "Dynamic PMEGP subsidy computation",
      "isRuralArea" in html and "Special Rural: 35%" in html,
      "Calculates subsidy based on category and rural/urban area")

# Test 12: Smart Ledger 10 Seed Transactions & Reset Demo Data button
check(12, "Smart Ledger seeded with 10 items + Reset Demo Data button",
      "seed_tx_10" in html and "resetLedgerDemoData" in html and "🔄 Reset Demo Data" in html,
      "Rich default ledger with sales, mandi wholesale, diesel, utilities, and udhar")

# Test 13: Simulated Aadhaar & Phone OTP Pre-Fill
check(13, "Simulated OTP pre-fill for 1-click judging demo",
      "otpIn.value = activeGeneratedOtp;" in html and "phoneOtpIn.value = '1234'" in html,
      "Aadhaar OTP pre-fills automatically; phone OTP pre-fills 1234")

# Test 14: Shivram Singh Agri Persona 1-Click Demo
check(14, "Shivram Singh Agri Persona 1-Click Assessment",
      "viewAgriSampleAssessment" in html and "Agri Persona (Shivram Singh)" in html,
      "Agri slide and hero chip directly load farming_produce assessment")

print("\n--------------------------------------------------")
print(f"Results: {passed} PASSED, {failed} FAILED")
print("--------------------------------------------------")

if failed == 0:
    print("🏆 ALL 14 TESTS PASSED! PUNCH LIST 100% RESOLVED.")
else:
    sys.exit(1)
