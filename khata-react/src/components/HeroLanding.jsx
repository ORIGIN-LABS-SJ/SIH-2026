import React from 'react';

export function HeroLanding({ onStartAssessment, onViewSample, onOpenChat, lang = 'en' }) {
  return (
    <section className="screen-landing">
      <div className="hero">
        <div className="hero-grid">
          <div>
            <h1>
              {lang === 'hi'
                ? 'एक रुपया लगाने से पहले जान लें कि दुकान चलेगी या नहीं।'
                : 'Before you spend a rupee, know if the shop will work.'}
            </h1>
            <p className="hero-sub">
              {lang === 'hi'
                ? 'आपके व्यापार, आपकी गली, और आपकी पूंजी पर एक नज़र।'
                : 'One look at your business, your street, and your capital.'}
            </p>
            <p className="hero-copy">
              {lang === 'hi'
                ? 'माइक्रोनीति (MicroNiti) को बताएं कि आप क्या शुरू करना चाहते हैं, कहाँ, और कितनी पूंजी से। यह स्थानीय मांग और बाज़ार रुझान जांचता है, कार्यशील पूंजी की संरचना करता है, और आपको उपयुक्त सरकारी सब्सिडी (NSFDC, विश्वकर्मा, PMEGP) से जोड़ता है।'
                : 'Tell MicroNiti what enterprise you run or plan to start, where, and your capital. It checks local demand and market trends, structures a bank-ready cash cushion, and pairs you with high-benefit government subsidies (NSFDC, Vishwakarma, PMEGP).'}
            </p>

            {/* CTA Buttons Row */}
            <div className="hero-cta-row">
              <button 
                id="hero-check-business-btn"
                type="button" 
                className="btn" 
                onClick={onStartAssessment}
              >
                <span>
                  {lang === 'hi' ? 'मेरा उद्यम जांचें' : 'Structure My Rural Business'}
                </span>
                <span style={{ fontSize: '1.2rem', lineHeight: '1' }}>→</span>
              </button>

              <button 
                type="button" 
                className="btn ghost" 
                onClick={onViewSample}
              >
                <span>
                  {lang === 'hi' ? 'नमूना परिणाम देखें' : 'See a sample result'}
                </span>
              </button>

              <button 
                type="button" 
                className="btn secondary" 
                onClick={onOpenChat}
              >
                <span>💬 {lang === 'hi' ? 'AI सलाहकार से पूछें' : 'Ask AI Advisor'}</span>
              </button>
            </div>

            {/* CRITICAL FIX: Generous margin-top and container wrapping preventing any overlap or merging */}
            <div className="hero-note-container">
              <div className="hero-note">
                <span className="hero-note-icon">🏛️</span>
                <span>
                  {lang === 'hi'
                    ? 'SIH26091 · सामाजिक न्याय और अधिकारिता मंत्रालय · NSFDC, NBCFDC, विश्वकर्मा व PMEGP रियायती योजनाएं'
                    : 'SIH26091 · Ministry of Social Justice & Empowerment · Concessional Schemes: NSFDC, NBCFDC, PM Vishwakarma & PMEGP'}
                </span>
              </div>
            </div>

            {/* Feature Badges */}
            
          </div>

          {/* Artisan Shop Stall SVG Illustration */}
          <div>
            <svg className="stall" viewBox="0 0 480 400" xmlns="http://www.w3.org/2000/svg">
              {/* Ground */}
              <rect x="0" y="330" width="480" height="70" fill="#E8E0C4" />
              {/* Shop Main Structure */}
              <rect x="70" y="150" width="300" height="180" fill="#1F3F5C" stroke="#26211B" strokeWidth="4" />
              {/* Front Sales Counter */}
              <rect x="70" y="290" width="300" height="40" fill="#9C3B36" stroke="#26211B" strokeWidth="4" />
              {/* Awning Stripes */}
              <g>
                <polygon points="55,150 385,150 405,95 35,95" fill="#F1ECD8" stroke="#26211B" strokeWidth="4" />
                <polygon points="55,150 105,150 122,95 72,95" fill="#E8A63D" />
                <polygon points="155,150 205,150 219,95 169,95" fill="#E8A63D" />
                <polygon points="255,150 305,150 316,95 266,95" fill="#E8A63D" />
                <polygon points="355,150 385,150 405,95 388,95" fill="#E8A63D" />
              </g>
              {/* Signboard */}
              <rect x="150" y="55" width="180" height="46" rx="4" fill="#E8A63D" stroke="#26211B" strokeWidth="4" />
              <text x="240" y="86" textAnchor="middle" fontFamily="Fraunces, serif" fontWeight="800" fontSize="21" fill="#26211B">
                MICRONITI
              </text>
              {/* Shelves & Inventory */}
              <rect x="95" y="175" width="110" height="90" fill="#F1ECD8" stroke="#26211B" strokeWidth="3" />
              <line x1="95" y1="205" x2="205" y2="205" stroke="#26211B" strokeWidth="3" />
              <line x1="95" y1="235" x2="205" y2="235" stroke="#26211B" strokeWidth="3" />
              <circle cx="112" cy="192" r="7" fill="#4C7A3D" />
              <circle cx="132" cy="192" r="7" fill="#E8A63D" />
              <circle cx="152" cy="192" r="7" fill="#9C3B36" />
              <circle cx="172" cy="192" r="7" fill="#4C7A3D" />
              <circle cx="112" cy="222" r="7" fill="#E8A63D" />
              <circle cx="132" cy="222" r="7" fill="#9C3B36" />
              <circle cx="152" cy="222" r="7" fill="#4C7A3D" />
              <circle cx="172" cy="222" r="7" fill="#E8A63D" />
              {/* Cash Register Box */}
              <rect x="112" y="248" width="80" height="12" fill="#1F3F5C" />
              {/* Shop Doorway */}
              <rect x="235" y="200" width="80" height="90" fill="#152C40" stroke="#26211B" strokeWidth="3" />
              {/* Shopkeeper */}
              <circle cx="275" cy="260" r="14" fill="#F1ECD8" stroke="#26211B" strokeWidth="3" />
              <rect x="262" y="272" width="26" height="34" rx="6" fill="#4C7A3D" stroke="#26211B" strokeWidth="3" />
              {/* Produce Basket */}
              <rect x="330" y="300" width="46" height="30" fill="#E8A63D" stroke="#26211B" strokeWidth="3" />
              <circle cx="340" cy="298" r="8" fill="#4C7A3D" />
              <circle cx="356" cy="296" r="8" fill="#9C3B36" />
              <circle cx="368" cy="300" r="8" fill="#4C7A3D" />
            </svg>
          </div>
        </div>
      </div>

      {/* How Khata Works */}
      <div className="how">
        <div className="how-header">
          <h2>{lang === 'hi' ? 'खाता कैसे काम करता है' : 'How Khata works'}</h2>
          <span style={{ color: 'var(--ink-soft)', fontWeight: '700', fontSize: '0.9rem' }}>
            {lang === 'hi' ? 'सरल, पारदर्शी व तथ्य-आधारित' : 'Simple, transparent & fact-checked'}
          </span>
        </div>
        <div className="how-grid">
          <div className="how-step">
            <div className="num">1</div>
            <h3>{lang === 'hi' ? 'व्यापार व स्थान बताएं' : 'Describe the business'}</h3>
            <p>
              {lang === 'hi'
                ? 'आप क्या बेचना या बनाना चाहते हैं, कहाँ, और कितनी पूंजी से शुरुआत — तीन सवाल, एक मिनट।'
                : 'What you want to sell or make, where, and how much capital you\'re starting with — three questions, one minute.'}
            </p>
          </div>
          <div className="how-step">
            <div className="num">2</div>
            <h3>{lang === 'hi' ? 'स्पष्ट फैसला व व्यवहार्यता' : 'Get a straight verdict'}</h3>
            <p>
              {lang === 'hi'
                ? 'खाता स्थानीय मांग और आसपास की प्रतिस्पर्धा जांचकर साफ़ बताता है: आगे बढ़ें, योजना बदलें, या फिर से सोचें।'
                : 'Khata checks local demand and nearby competition and tells you plainly: go ahead, adjust the plan, or reconsider.'}
            </p>
          </div>
          <div className="how-step">
            <div className="num">3</div>
            <h3>{lang === 'hi' ? 'चुकौती व सब्सिडी योजना' : 'See the repayment plan'}</h3>
            <p>
              {lang === 'hi'
                ? 'तिमाही-दर-तिमाही योजना जिसमें मोहलत अवधि भी शामिल है, ताकि किश्तें आमदनी शुरू होने पर ही शुरू हों।'
                : 'A quarter-by-quarter schedule that accounts for a moratorium period, so repayments start once income actually does.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroLanding;
