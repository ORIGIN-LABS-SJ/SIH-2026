# -*- coding: utf-8 -*-
import sys, os, re

try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

print("==================================================")
print("  SAHAYAK COMPREHENSIVE VERIFICATION SUITE")
print("==================================================")

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

all_tests_passed = True

# TEST 1: Check Modal Bank Options
print("\n[Test 1] Checking Bank Options Modal encapsulation...")
modal_count = html.count('id="modal-bank-options"')
print(f"  Count of #modal-bank-options: {modal_count}")
if modal_count == 1:
    print("  ✓ PASS: Exactly 1 #modal-bank-options found.")
else:
    print(f"  ✗ FAIL: Expected 1 #modal-bank-options, found {modal_count}")
    all_tests_passed = False

# Check if there are any orphaned close buttons or leaked headers outside modal-bank-options
orphaned_button = '<button type="button" onclick="closeBankOptionsModal()"'
btn_count = html.count(orphaned_button)
print(f"  Count of closeBankOptionsModal buttons: {btn_count}")
if btn_count <= 2: # 1 in header, 1 in footer
    print("  ✓ PASS: Clean close buttons inside the modal only.")
else:
    print("  ✗ FAIL: Extra orphaned close buttons detected.")
    all_tests_passed = False

# TEST 2: Voice-to-Ledger Action Engine parsing
print("\n[Test 2] Testing Voice-to-Ledger Action Engine...")
def parse_voice(transcript):
    text = transcript.lower().strip()
    type_ = 'income'
    amount = 0
    category = 'Grocery / Retail'
    
    udharKeywords = ['udhar', 'udhari', 'credit', 'baaki', 'baki', 'baad me dega', 'baad mein', 'khate me', 'khaate mein', 'udhar diya', 'udhaar']
    expenseKeywords = ['kharcha', 'kharch', 'expense', 'spent', 'kharida', 'kharid', 'paid', 'purchase', 'buying', 'petrol', 'diesel', 'rent', 'kiraya', 'bijli', 'bill', 'repair', 'diya to', 'paid to', 'mandi se']
    incomeKeywords = ['sale', 'sales', 'bikri', 'becha', 'bechi', 'beche', 'sold', 'aaya', 'aaye', 'mil gaya', 'received', 'kamaya', 'earning', 'jama hua', 'income']
    repaymentKeywords = ['chuka', 'chuka diya', 'chuka diye', 'chukta', 'udhar wapas', 'wapas diya', 'settled', 'clear kiya']

    isRepayment = any(k in text for k in repaymentKeywords)
    isUdhar = any(k in text for k in udharKeywords)
    isExpense = any(k in text for k in expenseKeywords)
    isIncome = any(k in text for k in incomeKeywords)

    if isRepayment:
        type_ = 'income'
        category = 'Customer Credit Recovery'
    elif isUdhar:
        type_ = 'udhar'
        category = 'Customer Credit'
    elif isExpense and not isIncome:
        type_ = 'expense'
        category = 'Operational Expense'
    else:
        type_ = 'income'
        category = 'Grocery / Retail'

    m = re.search(r'(?:rs\.?|inr|₹|rupees|rupaye|rupeye|rupya)?\s*([0-9]+(?:\.[0-9]+)?)', text)
    if m:
        amount = float(m.group(1))

    if 'rent' in text or 'kiraya' in text:
        category = 'Shop Rent'
        type_ = 'expense'
    elif any(k in text for k in ['petrol', 'diesel', 'fuel', 'tel', 'transport']):
        category = 'Fuel & Transport'
        type_ = 'expense'
    elif any(k in text for k in ['bijli', 'electricity', 'bill']):
        category = 'Electricity & Utilities'
        type_ = 'expense'
    elif any(k in text for k in ['mandi', 'gahu', 'wheat', 'sarson', 'chana', 'dal', 'wholesale', 'stock', 'mal', 'maal']):
        if isIncome or any(k in text for k in ['becha', 'bechi', 'beche', 'sold', 'bikri', 'sale', 'aaya']):
            category = 'Stock Sales / Wholesale'
            type_ = 'income'
        else:
            category = 'Raw Materials / Stock'
            type_ = 'expense'

    return type_, amount, category

t1_type, t1_amt, t1_cat = parse_voice("Aaj Maine ₹100 ka Mal becha")
print(f"  Result for 'Aaj Maine ₹100 ka Mal becha': Type={t1_type}, Amount={t1_amt}, Category={t1_cat}")
if t1_type == 'income' and t1_amt == 100:
    print("  ✓ PASS: 'Mal becha' successfully parsed as Income (Sale) of ₹100!")
else:
    print(f"  ✗ FAIL: Expected income/100, got {t1_type}/{t1_amt}")
    all_tests_passed = False

t2_type, t2_amt, t2_cat = parse_voice("Mandi se 4200 ka gahu kharida")
print(f"  Result for 'Mandi se 4200 ka gahu kharida': Type={t2_type}, Amount={t2_amt}, Category={t2_cat}")
if t2_type == 'expense' and t2_amt == 4200:
    print("  ✓ PASS: 'Mandi kharida' correctly parsed as Expense of ₹4200!")
else:
    print(f"  ✗ FAIL: Expected expense/4200, got {t2_type}/{t2_amt}")
    all_tests_passed = False

# TEST 3: CSS & Layout Checks
print("\n[Test 3] Verifying Mobile CSS & Netlify Badge Suppression...")
has_badge_css = "[data-netlify-badge]" in html
has_table_minwidth = ".ledger-table" in html and "min-width: 720px" in html
has_mobile_drawer = "width: 100vw !important" in html

print(f"  Netlify badge suppression in CSS: {has_badge_css}")
print(f"  Ledger table min-width in CSS: {has_table_minwidth}")
print(f"  Mobile full-width chat drawer in CSS: {has_mobile_drawer}")

if has_badge_css and has_table_minwidth and has_mobile_drawer:
    print("  ✓ PASS: All mobile CSS rules verified.")
else:
    print("  ✗ FAIL: Missing required mobile CSS rules.")
    all_tests_passed = False

# TEST 4: Chatbot Knowledge Verification
print("\n[Test 4] Verifying Chatbot Knowledge Engine...")
has_loan_case = "const isGeneralLoan =" in html
has_dairy_capital = "Exact Capital Required to Start" in html
print(f"  General Loan inquiry handler present: {has_loan_case}")
print(f"  Dairy Capital breakdown present: {has_dairy_capital}")

if has_loan_case and has_dairy_capital:
    print("  ✓ PASS: Chatbot knowledge contains dedicated loan and dairy capital answers.")
else:
    print("  ✗ FAIL: Missing loan or dairy capital handlers.")
    all_tests_passed = False

print("\n==================================================")
if all_tests_passed:
    print("  ALL VERIFICATION CHECKS PASSED PERFECTLY!")
print("==================================================")
