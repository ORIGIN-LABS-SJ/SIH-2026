# Sahayak (सहायक) / MicroNiti
### AI-Driven Hyper-Local Business Advisory & Financial Structuring Platform for Rural Micro-Entrepreneurs

[![Smart India Hackathon 2026](https://img.shields.io/badge/SIH-2026_Grand_Finale-orange.svg)](https://sih.gov.in/)
[![Problem Statement ID](https://img.shields.io/badge/PS_ID-SIH26091-blue.svg)](https://sih.gov.in/)
[![Ministry](https://img.shields.io/badge/Ministry-Social_Justice_%26_Empowerment_(MoSJE)-green.svg)](https://socialjustice.gov.in/)
[![Live Production](https://img.shields.io/badge/Live_Demo-sahayakk.netlify.app-emerald.svg)](https://sahayakk.netlify.app/)
[![PWA Ready](https://img.shields.io/badge/Offline_PWA-%3C50KB_Payload-purple.svg)](https://sahayakk.netlify.app/)

---

## 📌 Executive Summary
**Sahayak** is an AI-driven, hyper-local business advisory and financial structuring platform architected specifically for India's 63+ million rural micro-entrepreneurs (small shopkeepers, artisans, weavers, dairy farmers, food processors, and agrarian businesses). It pays special affirmative focus to underprivileged beneficiaries under the **Ministry of Social Justice and Empowerment (MoSJE)**—including Scheduled Castes (SC), Scheduled Tribes (ST), Other Backward Classes (OBC), and rural women entrepreneurs.

Operating as a voice-first, dialect-aware Progressive Web App (PWA) supporting **10 regional Indian dialects**, Sahayak transitions unbanked micro-enterprises from informal predatory moneylenders (charging 36%–120% APR) to formal credit channels (6%–11% APR), slashing borrowing costs by 30%–50% and unlocking up to 35% in direct government capital subsidies.

---

## 🎯 Ground Reality & Problem Definition (PS ID: SIH26091)
* **The ₹14 Lakh Crore Credit Deficit:** As documented by the **RBI UK Sinha Committee on MSMEs**, rural micro-enterprises face a colossal credit gap due to lack of audited books, formal collaterals, and credit scores.
* **Predatory Debt Traps:** Over 85% of rural enterprises rely on local loan sharks charging extortionate interest rates (36% to 120% APR).
* **Scheme Complexity & Information Asymmetry:** Lucrative government credit-linked subsidies (PMEGP, NSFDC, NBCFDC, MUDRA) remain underutilized due to digital illiteracy, English/Hindi text-heavy forms, and confusing paperwork.
* **Rigid Monthly EMIs vs. Cyclical Harvest Cashflow:** Traditional bank repayment schedules mandate rigid monthly installments. For agrarian businesses, crop produce units, and rural artisans, income fluctuates with crop harvests (Kharif/Rabi) and festivals, causing technical default during lean months.

---

## 🏗️ 4-Module Core Architecture

### 📍 Module 1: Hyper-Local Catchment & Mandi Price Intelligence
* **GPS Catchment Analysis:** Evaluates local competition density, supplier proximity, and demand catchment within a 5 km to 25 km radius.
* **APMC Mandi Wholesale Price Index:** Real-time pricing telemetry tracks regional commodity rates to evaluate arbitrage and business viability.
* **Local Competitor Analysis:** Algorithmic viability scoring prevents market oversaturation.

### 🎙️ Module 2: Dialect-First Conversational AI Advisory
* **10 Regional Indian Dialects:** Bi-directional voice support in Hindi, Marwari, Gujarati, Marathi, Tamil, Telugu, Bengali, Kannada, Punjabi, and Odia via the Web Speech API.
* **8 Rural Trade Archetypes:** Fine-tuned business advisory for:
  1. *Farming & Crop-Produce* (Kharif/Rabi seasonal dynamics)
  2. *Food Processing & Value-Add Units*
  3. *Dairy & Livestock*
  4. *Kirana & Rural Micro-Retail*
  5. *Handicrafts & Handlooms*
  6. *Tailoring & Garments*
  7. *Food Cart & Street Vending*
  8. *Mobile & Electronics Repair*
* **Generative Intelligence:** Google Gemini 1.5 Flash contextual trade reasoning paired with static fallback guidance for offline execution.

### ⚖️ Module 3: Deterministic Government Scheme Structuring Engine
* **Zero-Hallucination Decoupled Engine:** Financial calculations are strictly decoupled from LLM text generation. An immutable deterministic engine computes exact eligibility, margin money, and subsidy caps.
* **PMEGP Dynamic Capital Subsidy:** Computes exact subsidies—15% (General Urban), 25% (General Rural / Special Urban), and **up to 35% for Special Categories (SC/ST/OBC/Women)**.
* **NSFDC Dual-Channel Selector (MoSJE):** Directly compares **6.0% p.a. direct apex concessional lending** against **8.5% p.a. through nodal commercial banks** for SC entrepreneurs.
* **NBCFDC & PM MUDRA Integration:** Auto-tiers across MUDRA Shishu (≤₹50k), Kishore (₹50k–₹5L), and Tarun (₹5L–₹10L) with collateral-free guarantees.

### 📊 Module 4: Smart Cashflow Ledger & Bank-Ready DPR Appraisal
* **Offline-First Voice Ledger:** Tracks daily cash inflows, expenses, and customer credit (*Udhar*) with zero internet dependency via LocalStorage and IndexedDB.
* **1-Click WhatsApp Udhar Reminder:** Automated payment reminders with embedded UPI deep-links to recover stuck working capital up to 40% faster.
* **Harvest/Yield-Aware Seasonal Repayment Equalizer:** Replaces rigid monthly EMIs with flexible seasonal repayment schedules. Accommodates harvest windfalls (October/April), festive peaks, and post-sowing lean months with moratorium buffers.
* **Alternative Credit Scoring & DPR Dossier:** Synthesizes cashflow velocity into an alternative non-bureau credit score (300–900), DSCR solvency metrics, and generates an official, bank-ready **Detailed Project Report (DPR)** PDF.

---

## ⚡ 1-Click Evaluation Personas
To facilitate instant evaluation by hackathon juries, the platform includes pre-configured personas in the Hero Console:
1. **Ramesh Sharma (Kirana & Dairy):** Pre-seeded with 10 typical village retail transactions, Udhar records, and working capital expansion needs.
2. **Shivram Singh (Farming & Crop-Produce):** Agri-business profile demonstrating harvest-linked cashflow spikes, Rabi/Kharif seasonal repayment equalizer, and PMEGP 35% rural agro-processing subsidy.

---

## 🛡️ Competitive Advantage Matrix

| Feature / Dimension | ✨ Sahayak (Ours) | myScheme | JanSamarth | PMEGP Portal | e-NAM |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Voice Assistance (10 Dialects)** | **✓ Complete** | Basic Text | ✗ | ✗ | ✗ |
| **Automated Seasonal Repayment** | **✓ Harvest Equalizer** | ✗ | – Static Monthly | ✗ | ✗ |
| **Daily Cashflow Underwriting** | **✓ Voice Khata ML** | ✗ | ✗ | ✗ | ✗ |
| **Smart Ledger + WhatsApp Deep-Link** | **✓ 1-Click Recovery** | ✗ | ✗ | ✗ | ✗ |
| **Hyper-Local Catchment Analysis** | **✓ GPS Geocoded** | ✗ | ✗ | ✗ | ✗ |
| **APMC Mandi Wholesale Index** | **✓ Live Telemetry** | ✗ | ✗ | ✗ | ✓ Agri Only |
| **Bank-Ready Financial DPR Dossier** | **✓ Instant PDF Export** | ✗ | – Generic Form | – Form Only | ✗ |
| **Multi-Scheme Benefit Maximizer** | **✓ Deterministic Ranker** | Static List | Basic Matching | Single Scheme | ✗ |

---

## 💻 Technical Stack

* **Frontend:** HTML5, Modern Vanilla CSS3, ES6+ JavaScript, Responsive Progressive Web App (PWA). Initial asset payload `<50 KB`.
* **Backend Hub:** Python 3.10+, FastAPI (Asynchronous REST API), Uvicorn ASGI.
* **AI & LLM:** Google Gemini 1.5 Flash with custom vernacular rural-trade system instructions.
* **Data & Persistence:** SQLite3, Browser LocalStorage / IndexedDB offline sync queue.
* **Geospatial & Voice:** Leaflet.js, OpenStreetMap Nominatim, Web Speech API (SpeechRecognition & SpeechSynthesis).
* **Deployment:** Netlify Production Edge ([https://sahayakk.netlify.app/](https://sahayakk.netlify.app/)).

---

## 🚀 Quickstart Guide

### 1. Web Application (Frontend)
Run locally using Python's built-in HTTP server:
```bash
python -m http.server 8000
```
Open your browser at `http://localhost:8000` or visit the live deployment at [https://sahayakk.netlify.app/](https://sahayakk.netlify.app/).

### 2. Backend Services (FastAPI API)
```bash
cd khata-backend
pip install -r requirements.txt
python main.py
```
* **Interactive Swagger Documentation:** `http://localhost:5000/docs`
* **Health Check Endpoint:** `http://localhost:5000/api/health`

### 3. Automated Test Verification
Run the 14-test punchlist suite verifying all SIH requirements:
```bash
python verify_punchlist_suite.py
```

---

## 🏆 Smart India Hackathon Registry
* **Problem Statement ID:** `SIH26091`
* **Title:** AI-Driven Hyper-Local Business Advisory and Financial Structuring Assistant for Rural Micro-Entrepreneurs
* **Theme:** Agriculture, FoodTech & Rural Development
* **Category:** Software Edition
* **Target Ministry:** Ministry of Social Justice and Empowerment (MoSJE), Government of India
* **Presentation PDF:** [`SIH_2026_Hackathon_Winning_Presentation.pdf`](SIH_2026_Hackathon_Winning_Presentation.pdf)
