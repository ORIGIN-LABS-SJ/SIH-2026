# -*- coding: utf-8 -*-
import urllib.request, sys

try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

url = 'https://sahayakk.netlify.app/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

print("========================================================")
print("     LIVE SAHAYAKK.NETLIFY.APP VERIFICATION REPORT      ")
print("========================================================")
print("1. Build Version (2026-09-17-1055-SYNTAX-FIXED):", '2026-09-17-1055-SYNTAX-FIXED' in html)
print("2. Bank Options Modal Count:", html.count('id="modal-bank-options"'))
print("3. Duplicate Leaked Close Button Gone:", html.count('closeBankOptionsModal()') <= 2)
print("4. Voice-to-Ledger Sale Fix (Stock Sales / Wholesale):", 'Stock Sales / Wholesale' in html)
print("5. AI Advisor General Loan Inquiry Roadmap (isGeneralLoan):", 'isGeneralLoan' in html)
print("6. AI Advisor Dairy Capital Breakdown:", 'Exact Capital Required to Start' in html)
print("7. Mobile Chat Drawer Full-Width (100vw):", 'width: 100vw !important' in html)
print("8. Mobile Ledger Table Min-Width (720px):", 'min-width: 720px' in html)
print("9. Netlify Badge Overlap Suppression:", '[data-netlify-badge]' in html)
print("10. Mobile Cache-Control Meta Tags:", 'Cache-Control' in html)
print("========================================================")
