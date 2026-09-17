import os, sys
import pptx
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE

prs = pptx.Presentation()
prs.slide_width = Inches(13.333)
prs.slide_height = Inches(7.5)
blank_layout = prs.slide_layouts[6]

# Colors
C_BG = RGBColor(10, 17, 31)       # #0A111F
C_CARD = RGBColor(19, 31, 55)     # #131F37
C_CARD_BORDER = RGBColor(40, 56, 88)
C_PRIMARY = RGBColor(56, 189, 248) # #38BDF8
C_EMERALD = RGBColor(16, 185, 129) # #10B981
C_AMBER = RGBColor(245, 158, 11)   # #F59E0B
C_ROSE = RGBColor(244, 63, 94)     # #F43F5E
C_TEXT = RGBColor(248, 250, 252)   # #F8FAFC
C_MUTED = RGBColor(148, 163, 184)  # #94A3B8
C_FAINT = RGBColor(100, 116, 139)  # #64748B

def set_slide_bg(slide):
    bg_shape = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0), Inches(0), Inches(13.333), Inches(7.5))
    bg_shape.fill.solid()
    bg_shape.fill.fore_color.rgb = C_BG
    bg_shape.line.fill.background()
    return bg_shape

def add_header(slide, tag_text, title_text, subtitle_text):
    # Top SIH Tag
    tag_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.4), Inches(11.7), Inches(0.35))
    tf_tag = tag_box.text_frame
    tf_tag.word_wrap = True
    p_tag = tf_tag.paragraphs[0]
    p_tag.text = tag_text.upper()
    p_tag.font.size = Pt(10)
    p_tag.font.bold = True
    p_tag.font.color.rgb = C_PRIMARY

    # Title
    title_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.75), Inches(11.7), Inches(0.65))
    tf_title = title_box.text_frame
    tf_title.word_wrap = True
    p_title = tf_title.paragraphs[0]
    p_title.text = title_text
    p_title.font.size = Pt(22)
    p_title.font.bold = True
    p_title.font.color.rgb = C_TEXT

    # Subtitle
    sub_box = slide.shapes.add_textbox(Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.55))
    tf_sub = sub_box.text_frame
    tf_sub.word_wrap = True
    p_sub = tf_sub.paragraphs[0]
    p_sub.text = subtitle_text
    p_sub.font.size = Pt(12)
    p_sub.font.color.rgb = C_MUTED

def add_card(slide, left, top, width, height, border_color=C_CARD_BORDER):
    card = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, width, height)
    card.fill.solid()
    card.fill.fore_color.rgb = C_CARD
    card.line.color.rgb = border_color
    card.line.width = Pt(1.5)
    return card

# ==================== SLIDE 1: TITLE PAGE ====================
s1 = prs.slides.add_slide(blank_layout)
set_slide_bg(s1)

# Left Column: Brand Hero
left_box = s1.shapes.add_textbox(Inches(0.8), Inches(1.2), Inches(6.8), Inches(5.2))
tf1 = left_box.text_frame
tf1.word_wrap = True

p_sih = tf1.paragraphs[0]
p_sih.text = "🏆 SMART INDIA HACKATHON 2026 // GRAND FINALE"
p_sih.font.size = Pt(11)
p_sih.font.bold = True
p_sih.font.color.rgb = C_AMBER
p_sih.space_after = Pt(12)

p_brand = tf1.add_paragraph()
p_brand.text = "SAHAYAK (सहायक)"
p_brand.font.size = Pt(40)
p_brand.font.bold = True
p_brand.font.color.rgb = C_PRIMARY
p_brand.space_after = Pt(8)

p_sub = tf1.add_paragraph()
p_sub.text = "Business Advisory & Financial Structuring Assistant"
p_sub.font.size = Pt(20)
p_sub.font.bold = True
p_sub.font.color.rgb = C_TEXT
p_sub.space_after = Pt(14)

p_desc = tf1.add_paragraph()
p_desc.text = "Empowering 63+ Million unbanked rural micro-enterprises with dialect-first conversational AI, dynamic scheme optimization, and verifiable bank-ready DPR appraisal dossiers."
p_desc.font.size = Pt(13)
p_desc.font.color.rgb = C_MUTED
p_desc.space_after = Pt(20)

p_badge = tf1.add_paragraph()
p_badge.text = "✓ 100% Offline PWA Ready  |  ✓ 10 Regional Dialects  |  ✓ UIDAI e-KYC Integrated"
p_badge.font.size = Pt(11)
p_badge.font.bold = True
p_badge.font.color.rgb = C_EMERALD

# Right Column: Evaluation Registry Bento
add_card(s1, Inches(8.0), Inches(1.2), Inches(4.5), Inches(5.2), C_PRIMARY)
right_box = s1.shapes.add_textbox(Inches(8.2), Inches(1.4), Inches(4.1), Inches(4.8))
tf_r = right_box.text_frame
tf_r.word_wrap = True

p_rh = tf_r.paragraphs[0]
p_rh.text = "📋 SIH Evaluation Registry"
p_rh.font.size = Pt(16)
p_rh.font.bold = True
p_rh.font.color.rgb = C_TEXT
p_rh.space_after = Pt(14)

items = [
    ("PROBLEM STATEMENT ID", "26091", C_PRIMARY),
    ("THEME", "Agriculture, FoodTech & Rural Development", C_TEXT),
    ("PS CATEGORY", "Software Edition", C_TEXT),
    ("TEAM NAME", "TEAM ALPHA", C_EMERALD),
    ("TARGET MINISTRY", "Ministry of Social Justice & Empowerment", C_AMBER)
]

for label, val, color in items:
    pl = tf_r.add_paragraph()
    pl.text = label
    pl.font.size = Pt(9)
    pl.font.bold = True
    pl.font.color.rgb = C_FAINT
    
    pv = tf_r.add_paragraph()
    pv.text = val
    pv.font.size = Pt(13)
    pv.font.bold = True
    pv.font.color.rgb = color
    pv.space_after = Pt(8)

# ==================== SLIDE 2: TECHNICAL APPROACH ====================
s2 = prs.slides.add_slide(blank_layout)
set_slide_bg(s2)
add_header(s2, "Architecture & Pipeline", "Technical Approach & System Design", 
           "End-to-end pipeline: multilingual voice input → parallel AI & deterministic engines → unified advisory dashboard.")

# 5 Pipeline Steps
steps = [
    ("01 // INGESTION", "🎙️ Voice Input", "Web Speech API + Web Audio. 10 regional dialects (Marwari, Hindi, Gujarati) with <100ms latency.", C_PRIMARY),
    ("02 // TELEMETRY", "📍 Location Data", "HTML5 GPS Geolocation with nearest-city clustering & hyper-local Mandi wholesale price index.", C_PRIMARY),
    ("03 // GATEWAY", "⚡ FastAPI Hub", "High-concurrency async REST gateway. Idempotent offline ledger sync & sub-15ms transaction routing.", C_PRIMARY),
    ("04 // INTELLIGENCE", "⚖️ Scheme Engine", "Deterministic rule-engine evaluating PMEGP, NBCFDC, MUDRA. 0% AI hallucination on financial rules.", C_EMERALD),
    ("05 // APPRAISAL", "📊 Repayment Planner", "Alternative credit scoring (300–900), DSCR solvency check, and verifiable Bank Financial DPR dossier.", C_AMBER)
]

step_w = Inches(2.22)
step_gap = Inches(0.15)
for i, (num, name, desc, col) in enumerate(steps):
    x = Inches(0.8) + i * (step_w + step_gap)
    add_card(s2, x, Inches(2.1), step_w, Inches(3.0), col)
    tb = s2.shapes.add_textbox(x + Inches(0.12), Inches(2.2), step_w - Inches(0.24), Inches(2.7))
    tf = tb.text_frame
    tf.word_wrap = True
    
    p1 = tf.paragraphs[0]
    p1.text = num
    p1.font.size = Pt(9)
    p1.font.bold = True
    p1.font.color.rgb = col
    p1.space_after = Pt(4)
    
    p2 = tf.add_paragraph()
    p2.text = name
    p2.font.size = Pt(13)
    p2.font.bold = True
    p2.font.color.rgb = C_TEXT
    p2.space_after = Pt(8)
    
    p3 = tf.add_paragraph()
    p3.text = desc
    p3.font.size = Pt(10)
    p3.font.color.rgb = C_MUTED

# Technology Stack Ribbon (Bottom)
stack_items = [
    ("FRONTEND", "HTML5 + Modern JS (Offline PWA)"),
    ("VOICE & LOCATION", "Web Speech API + Geolocation"),
    ("BACKEND HUB", "Python FastAPI (Async REST)"),
    ("AI / LLM", "Google Gemini 1.5 Flash"),
    ("DATABASE & AUTH", "SQLite3 + Google GIS + UIDAI")
]

for i, (cat, val) in enumerate(stack_items):
    x = Inches(0.8) + i * (step_w + step_gap)
    add_card(s2, x, Inches(5.35), step_w, Inches(1.4))
    tb = s2.shapes.add_textbox(x + Inches(0.12), Inches(5.42), step_w - Inches(0.24), Inches(1.2))
    tf = tb.text_frame
    tf.word_wrap = True
    p_c = tf.paragraphs[0]
    p_c.text = cat
    p_c.font.size = Pt(8)
    p_c.font.bold = True
    p_c.font.color.rgb = C_FAINT
    p_v = tf.add_paragraph()
    p_v.text = val
    p_v.font.size = Pt(10.5)
    p_v.font.bold = True
    p_v.font.color.rgb = C_TEXT

# ==================== SLIDE 3: FEASIBILITY & VIABILITY ====================
s3 = prs.slides.add_slide(blank_layout)
set_slide_bg(s3)
add_header(s3, "Operational & Engineering Defense", "Feasibility & Strategic Risk Mitigations",
           "Engineered for real-world rural adoption: low-bandwidth, non-bureau underwriting, and zero AI hallucination.")

# 3 Feasibility Pillars
feasi = [
    ("01 // TECHNICAL FEASIBILITY", [
        "• Standard web protocols & lightweight REST APIs",
        "• Pre-seeded static reference tables for rapid deployment",
        "• Zero third-party runtime package overhead (<50 KB payload)"
    ], C_PRIMARY),
    ("02 // OPERATIONAL FEASIBILITY", [
        "• Zero reliance on proprietary private bank APIs",
        "• Works on self-declared turnover & seasonal cashflow spikes",
        "• Non-bureau credit scoring for unbanked micro-enterprises"
    ], C_EMERALD),
    ("03 // ZERO TRAINING COST", [
        "• Voice-guided UI eliminates digital literacy barriers",
        "• Visual color-coded health badges (Green, Yellow, Red)",
        "• Native dialect prompts (Marwari, Gujarati, Hindi)"
    ], C_AMBER)
]

card_w = Inches(3.78)
for i, (title, bullets, col) in enumerate(feasi):
    x = Inches(0.8) + i * (card_w + Inches(0.18))
    add_card(s3, x, Inches(2.1), card_w, Inches(2.2), col)
    tb = s3.shapes.add_textbox(x + Inches(0.18), Inches(2.2), card_w - Inches(0.36), Inches(1.9))
    tf = tb.text_frame
    tf.word_wrap = True
    p_t = tf.paragraphs[0]
    p_t.text = title
    p_t.font.size = Pt(11)
    p_t.font.bold = True
    p_t.font.color.rgb = col
    p_t.space_after = Pt(6)
    for b in bullets:
        pb = tf.add_paragraph()
        pb.text = b
        pb.font.size = Pt(10)
        pb.font.color.rgb = C_MUTED
        pb.space_after = Pt(2)

# 3 Risk Mitigations
risks = [
    ("⚠️ RISK 1: FINANCIAL HALLUCINATION", 
     "Mitigation: Decoupled architecture. LLM handles vernacular explanation; strict deterministic mathematical engine calculates EMI and interest rates.",
     "✓ Outcome: Zero financial calculation errors (100% deterministic accuracy)", C_ROSE),
    ("📶 RISK 2: RURAL INTERNET FLUCTUATIONS",
     "Mitigation: Progressive Web App (PWA) with client-side caching & LocalStorage queues. Low-bandwidth JSON payload (<50 KB).",
     "✓ Outcome: Works seamlessly offline and on 2G / fluctuating networks", C_AMBER),
    ("🤝 RISK 3: RESISTANCE TO DIGITAL ADOPTION",
     "Mitigation: Hyper-local dialect support (Marwari, Marathi, Gujarati) + Common Service Centres (CSCs) and SHG facilitators.",
     "✓ Outcome: Community-verified trust and rapid grassroots adoption", C_PRIMARY)
]

for i, (rtitle, rmit, rout, rcol) in enumerate(risks):
    x = Inches(0.8) + i * (card_w + Inches(0.18))
    add_card(s3, x, Inches(4.5), card_w, Inches(2.4), rcol)
    tb = s3.shapes.add_textbox(x + Inches(0.18), Inches(4.58), card_w - Inches(0.36), Inches(2.2))
    tf = tb.text_frame
    tf.word_wrap = True
    p_rt = tf.paragraphs[0]
    p_rt.text = rtitle
    p_rt.font.size = Pt(11)
    p_rt.font.bold = True
    p_rt.font.color.rgb = rcol
    p_rt.space_after = Pt(4)
    p_rm = tf.add_paragraph()
    p_rm.text = rmit
    p_rm.font.size = Pt(9.5)
    p_rm.font.color.rgb = C_MUTED
    p_rm.space_after = Pt(6)
    p_ro = tf.add_paragraph()
    p_ro.text = rout
    p_ro.font.size = Pt(10)
    p_ro.font.bold = True
    p_ro.font.color.rgb = C_EMERALD

# ==================== SLIDE 4: IMPACT & BENEFITS ====================
s4 = prs.slides.add_slide(blank_layout)
set_slide_bg(s4)
add_header(s4, "Socio-Economic Value Proposition", "Impact & Measurable Benefits",
           "Reaching 63+ Million Rural Businesses: Empowering local artisans, small shopkeepers, and marginalized communities.")

# Top 3 Monumental KPI Cards
stats = [
    ("30% – 50%", "🔻 Cheaper Loans", "Moves borrowers from expensive local moneylenders (36–120% APR) to affordable, safe institutional bank loans (6–11%).", C_PRIMARY),
    ("Up to 35%", "🎁 Extra Savings", "Automatically finds and applies free government grants and margin capital subsidies (PMEGP, NBCFDC) for the entrepreneur.", C_EMERALD),
    ("63M+", "👥 Lives Changed", "Focused entirely on small village shops, rural artisans, tailors, street vendors, and women entrepreneurs across India.", C_AMBER)
]

for i, (num, tag, desc, col) in enumerate(stats):
    x = Inches(0.8) + i * (card_w + Inches(0.18))
    add_card(s4, x, Inches(2.1), card_w, Inches(2.4), col)
    tb = s4.shapes.add_textbox(x + Inches(0.18), Inches(2.2), card_w - Inches(0.36), Inches(2.1))
    tf = tb.text_frame
    tf.word_wrap = True
    p_n = tf.paragraphs[0]
    p_n.text = num
    p_n.font.size = Pt(36)
    p_n.font.bold = True
    p_n.font.color.rgb = col
    p_n.space_after = Pt(2)
    p_tg = tf.add_paragraph()
    p_tg.text = tag
    p_tg.font.size = Pt(13)
    p_tg.font.bold = True
    p_tg.font.color.rgb = C_TEXT
    p_tg.space_after = Pt(4)
    p_d = tf.add_paragraph()
    p_d.text = desc
    p_d.font.size = Pt(10)
    p_d.font.color.rgb = C_MUTED

# Bottom 3-Pillar Real-World Transformation
trans = [
    ("📈 ECONOMIC GROWTH", "Helps rural businesses track daily cashflow so they never miss a loan repayment, build a non-bureau credit profile, and stay debt-free.", C_PRIMARY),
    ("🤝 SOCIAL EMPOWERMENT", "Gives free, expert financial advice to everyone, with a special affirmative focus on uplifting women and marginalized groups (SC/ST/OBC).", C_EMERALD),
    ("🏛️ BETTER GOVERNANCE", "Helps the Government (MoSJE) ensure welfare schemes and Direct Benefit Transfers (DBT) actually reach the right people with zero leakage.", C_AMBER)
]

for i, (head, text, col) in enumerate(trans):
    x = Inches(0.8) + i * (card_w + Inches(0.18))
    add_card(s4, x, Inches(4.7), card_w, Inches(2.1), col)
    tb = s4.shapes.add_textbox(x + Inches(0.18), Inches(4.8), card_w - Inches(0.36), Inches(1.8))
    tf = tb.text_frame
    tf.word_wrap = True
    p_h = tf.paragraphs[0]
    p_h.text = head
    p_h.font.size = Pt(12)
    p_h.font.bold = True
    p_h.font.color.rgb = col
    p_h.space_after = Pt(6)
    p_t = tf.add_paragraph()
    p_t.text = text
    p_t.font.size = Pt(10.5)
    p_t.font.color.rgb = C_MUTED

# ==================== SLIDE 5: PROPOSED SOLUTION & INNOVATION ====================
s5 = prs.slides.add_slide(blank_layout)
set_slide_bg(s5)
add_header(s5, "Innovation Moat & Competitive Matrix", "Proposed Solution & Innovation",
           "An all-in-one voice-first platform empowering rural micro-entrepreneurs to discover schemes, assess credit, and structure loans in 10 regional languages.")

# Table
t_rows, t_cols = 11, 6
tbl_shape = s5.shapes.add_table(t_rows, t_cols, Inches(0.8), Inches(2.1), Inches(11.733), Inches(4.7))
tbl = tbl_shape.table
tbl.columns[0].width = Inches(3.6)
tbl.columns[1].width = Inches(2.0)
tbl.columns[2].width = Inches(1.5)
tbl.columns[3].width = Inches(1.6)
tbl.columns[4].width = Inches(1.5)
tbl.columns[5].width = Inches(1.533)

headers = ["Feature / Capability", "✨ Sahayak (Ours)", "myScheme", "JanSamarth", "PMEGP", "e-NAM"]
for c_idx, h_text in enumerate(headers):
    cell = tbl.cell(0, c_idx)
    cell.fill.solid()
    cell.fill.fore_color.rgb = RGBColor(28, 43, 75) if c_idx == 1 else RGBColor(19, 31, 55)
    p = cell.text_frame.paragraphs[0]
    p.text = h_text
    p.font.size = Pt(10)
    p.font.bold = True
    p.font.color.rgb = C_PRIMARY if c_idx == 1 else C_TEXT
    p.alignment = PP_ALIGN.CENTER if c_idx > 0 else PP_ALIGN.LEFT

table_data = [
    ("Voice-Based Assistance (Dialect-First)", "✓ Complete (10 Dialects)", "✓ Basic", "✗", "✗", "✗"),
    ("EMI & Repayment Planning", "✓ Automated", "✗", "– Static", "✗", "✗"),
    ("Cash-Flow Based Assessment", "✓ Daily Khata ML", "✗", "✗", "✗", "✗"),
    ("Post-Loan Monitoring & Smart Ledger", "✓ Real-time Ledger", "✗", "–", "–", "✗"),
    ("Hyper-Local Business Analysis", "✓ GPS Geocoded", "✗", "✗", "✗", "✗"),
    ("Local Competitor Analysis", "✓ Density Check", "✗", "✗", "✗", "✗"),
    ("Market / Price Intelligence", "✓ Mandi Price Index", "✗", "✗", "✗", "✓ Agri only"),
    ("Financial Structuring & Bank DPR", "✓ Full DPR Dossier", "✗", "– Generic", "– Form only", "✗"),
    ("Scheme Matching", "✓ Max-Benefit Ranked", "✓ Static list", "✓ Basic", "– Single", "✗"),
    ("Business Viability Recommendation", "✓ Algorithmic", "✗", "✗", "✗", "✗")
]

for r_idx, row in enumerate(table_data):
    for c_idx, val in enumerate(row):
        cell = tbl.cell(r_idx + 1, c_idx)
        cell.fill.solid()
        cell.fill.fore_color.rgb = RGBColor(16, 27, 49) if c_idx == 1 else RGBColor(12, 20, 36)
        p = cell.text_frame.paragraphs[0]
        p.text = val
        p.font.size = Pt(9.5)
        p.alignment = PP_ALIGN.CENTER if c_idx > 0 else PP_ALIGN.LEFT
        if c_idx == 1:
            p.font.bold = True
            p.font.color.rgb = C_EMERALD
        elif val == "✗":
            p.font.color.rgb = C_ROSE
        elif val.startswith("✓"):
            p.font.color.rgb = C_EMERALD
        else:
            p.font.color.rgb = C_MUTED

# ==================== SLIDE 6: RESEARCH & REFERENCES ====================
s6 = prs.slides.add_slide(blank_layout)
set_slide_bg(s6)
add_header(s6, "Evidence & Citations", "Research & Institutional References",
           "Grounded in central monetary policy reports, academic multilingual NLP frameworks, and statutory government guidelines.")

ref_cards = [
    ("🏛️ POLICY & INSTITUTIONAL RESEARCH", [
        ("RBI — UK Sinha Committee Report", "Empirical documentation of the ₹14 Lakh Crore structural MSME credit deficit in India."),
        ("World Bank Global Findex Database", "Analysis on informal credit traps, unbanked micro-merchants, and debt traps in South Asia."),
        ("MoMSME Annual Report 2023–24", "Statutory operational guidelines for PMEGP capital subsidies and MUDRA credit guarantee mechanisms.")
    ], C_PRIMARY),
    ("🔬 INDUSTRY & ACADEMIC REFERENCES", [
        ("Journal of Money & Business Studies", "Peer-reviewed impact evaluations: Vernacular Financial Literacy and Credit Repayment Discipline."),
        ("AI4Bharat & Microsoft Research", "Jugalbandi multilingual conversational AI architecture for Indian citizen welfare delivery.")
    ], C_EMERALD),
    ("🌐 OFFICIAL PORTALS & OPEN SOURCE", [
        ("Statutory Scheme Portals", "• udyamregistration.gov.in\n• jansamarth.in\n• myscheme.gov.in"),
        ("Production Open-Source Stack", "• Python FastAPI · High-Performance REST\n• React 18 / HTML5 PWA\n• Google Gemini 1.5 Flash API")
    ], C_AMBER)
]

for i, (rtitle, items, col) in enumerate(ref_cards):
    x = Inches(0.8) + i * (card_w + Inches(0.18))
    add_card(s6, x, Inches(2.1), card_w, Inches(4.7), col)
    tb = s6.shapes.add_textbox(x + Inches(0.18), Inches(2.2), card_w - Inches(0.36), Inches(4.5))
    tf = tb.text_frame
    tf.word_wrap = True
    p_t = tf.paragraphs[0]
    p_t.text = rtitle
    p_t.font.size = Pt(11)
    p_t.font.bold = True
    p_t.font.color.rgb = col
    p_t.space_after = Pt(12)
    for head, sub in items:
        ph = tf.add_paragraph()
        ph.text = head
        ph.font.size = Pt(10.5)
        ph.font.bold = True
        ph.font.color.rgb = C_TEXT
        ph.space_after = Pt(2)
        ps = tf.add_paragraph()
        ps.text = sub
        ps.font.size = Pt(9.5)
        ps.font.color.rgb = C_MUTED
        ps.space_after = Pt(10)

# Save
output_path = "SIH_2026_Winning_Presentation.pptx"
prs.save(output_path)
print(f"Saved {output_path} successfully")
