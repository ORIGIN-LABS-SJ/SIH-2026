# MicroNiti — AI-Driven Hyper-Local Advisory & Financial Structuring Platform

**SIH Problem Statement:** SIH26091  
**Ministry:** Ministry of Social Justice and Empowerment, Govt. of India  
**Target Beneficiaries:** Rural micro-entrepreneurs (small shopkeepers, artisans, weavers, local manufacturers, agri-businesses, OBC, SC, ST, and women entrepreneurs).

MicroNiti is an AI-driven digital assistant and financial structuring platform designed to empower rural micro-enterprises with localized business decision support, automated working capital structuring, offline-capable micro-accounting, and tailored credit-readiness scoring.

---

## 🌟 Key Features Added

1. **Converted to Full React Architecture**
   - Built with component-driven state architecture (`App.jsx`, `Header.jsx`, `HeroLanding.jsx`, `InputScreen.jsx`, `ResultsDashboard.jsx`, etc.).
   - Multi-language engine (English & Hindi) covering every assessment factor, scheme, and calculation.

2. **Entrepreneur Name Personalization**
   - Form field capturing the entrepreneur's full name.
   - Dynamic header badge ("Ramesh Sharma") and personalized assessment report headers.

3. **AI Advisory Chatbot — "Khata Saathi"**
   - Floating interactive assistant accessible from any screen.
   - Comprehensive knowledge base on NSFDC margin-money loans, PMEGP capital subsidies, CIBIL eligibility, FSSAI permits, and shop cashflow.
   - Quick question chips and voice dictation.

4. **Auto & Manual Location Feature**
   - **Auto GPS Detection**: Integrated with the browser Geolocation API to auto-detect the user's city/district with catchment tier metrics.
   - **Manual Search**: Quick-select chips for popular Indian commercial districts (Sojat City, Varanasi, Meerut, Pune, Madurai, Patna, etc.).
   - Live badge indicator: `✓ GPS Verified` or `✍️ Manual Entry`.

5. **Personalized Scheme Selection**
   - Dynamic scheme matcher for 5 prominent lending programs:
     - **NSFDC Term Loan Scheme**: 90% loan, 10% promoter margin, 6% p.a. interest, 2 quarters moratorium.
     - **PMEGP Scheme**: 15% to 35% capital subsidy grant, 5% to 10% own equity.
     - **PM MUDRA Yojana (Kishore)**: 100% collateral-free credit up to ₹5,00,000.
     - **Stand-Up India Scheme**: Focused on SC/ST & Women entrepreneurs up to ₹1 Crore.
     - **PM SVANidhi**: Working capital micro-loans with 7% interest cashback for street vendors.

6. **Voice-to-Text Dictation (Speech Recognition)**
   - Integrated Web Speech API microphone buttons across inputs (Entrepreneur Name, Location, and Chatbot).
   - Animated pulse effect when active, supporting both English and Hindi audio.

7. **EMI & Repayment Planning Option**
   - Configurable repayment frequencies: **Quarterly instalments** (ideal for rural cashflow) vs **Monthly EMI**.
   - Adjustable moratorium grace periods (0 to 12 months / 0 to 4 quarters).
   - Dynamic quarter-by-quarter bar graph with striped moratorium bars and solid indigo repayment bars.
   - Calculations for Monthly Equivalent EMI, Total Interest, and Total Payable.

8. **Loan Calculation & Subsidy Breakdown**
   - Total Project Outlay (fixtures, inventory, working capital).
   - Promoter Margin Money required (₹ and %).
   - Government Subsidy / Grant (e.g. 25% for PMEGP).
   - Net Term Loan disbursement and proposed fund utilization.

9. **CIBIL Score Checker & Simulator**
   - Radial dial gauge needle reflecting scores between 300 and 900.
   - Live category tiers: Poor (<600), Fair (600-699), Good (700-749), Excellent (750+).
   - Bank approval probability (e.g. 94% odds) and interest rate concessions (-0.50%).
   - Actionable credit-building advice for shopkeepers (UPI QR history, SHG linkage).

10. **UI Bug Correction (Button Merging Solved)**
    - Resolved the visual merging between the **"Check my business"** button and the note line below (`Built for NSFDC-style margin-money lending...`).
    - Added dedicated vertical rhythm (`margin-top: 36px` on CTA row, `margin-top: 28px` container for the note) and a stylish dashed pill-card border, preventing any overlap with the button drop-shadow.

---

## 🚀 How to Run

### Option 1: Direct in Browser (Zero Installation)
Simply double-click:
`C:\Users\Sanyam\.gemini\antigravity-ide\scratch\khata-react\index.html`
or open it in Google Chrome, Microsoft Edge, or Firefox.

### Option 2: Local Python Server
Run in PowerShell:
```powershell
python -m http.server 3000 --directory "C:\Users\Sanyam\.gemini\antigravity-ide\scratch\khata-react"
```
Then visit: `http://localhost:3000`
