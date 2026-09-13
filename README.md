# MicroNiti — AI-Driven Hyper-Local Advisory & Financial Structuring Platform

**Smart India Hackathon (SIH 2026)**  
**Problem Statement ID:** SIH26091  
**Ministry:** Ministry of Social Justice and Empowerment, Govt. of India  
**Target Beneficiaries:** Rural micro-entrepreneurs (small shopkeepers, artisans, weavers, local manufacturers, agri-businesses, OBC, SC, ST, and women entrepreneurs).

---

## 📌 Overview
MicroNiti is an AI-driven digital assistant and financial structuring platform designed to empower rural micro-enterprises with localized business decision support, automated working capital structuring, offline-capable micro-accounting, and tailored credit-readiness scoring.

---

## 🏗️ Project Architecture
* **Frontend Web App (`index.html`):** Standalone responsive single-page application with interactive rural entrepreneur carousel, 10 regional Indian dialects, Leaflet geospatial mapping, bank lending guidance modal, and repayment planner.
* **Backend Microservices (`khata-backend/`):** Python FastAPI asynchronous backend with SQLite user persistence, Google OAuth, dynamic Google Gemini AI advisory engine, and Consumer Favorability Scheme Ranker.
* **React Components (`khata-react/`):** Modular React architecture for enterprise dashboards.
* **Visual Assets (`carousel_images/`):** Showcase imagery for rural enterprises (Dairy, Handloom, Agri-Value Add, Micro-Retail).

---

## 🚀 Getting Started

### 1. Run Frontend
Open `index.html` directly in any modern browser, or serve with:
```bash
python -m http.server 8000
```
Then visit: `http://localhost:8000`

### 2. Run Backend API
Navigate to `khata-backend`:
```bash
cd khata-backend
pip install -r requirements.txt
python main.py
```
* **Swagger UI:** `http://localhost:5000/docs`
* **Health Check:** `http://localhost:5000/api/health`
