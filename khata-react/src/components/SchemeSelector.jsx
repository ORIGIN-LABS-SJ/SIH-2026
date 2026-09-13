import React, { useState } from 'react';

export const SCHEMES_DATA = [
  {
    id: 'pmegp',
    name: "PMEGP (Prime Minister's Employment Generation Programme)",
    nameHi: 'पीएमईजीपी (प्रधानमंत्री रोजगार सृजन कार्यक्रम)',
    tag: 'Up to 35% Govt Subsidy',
    tagHi: '35% तक सरकारी सब्सिडी',
    badgeType: 'subsidy',
    maxLoan: '₹20,00,000 (Services) / ₹50L (Mfg)',
    marginReq: '5% (Special) / 10% (Gen)',
    interestRate: '8.5%',
    moratorium: '2 Quarters (6 months)',
    moratoriumHi: '2 तिमाही (6 महीने)',
    subsidy: '15% to 35% Capital Grant',
    subsidyHi: '15% से 35% पूंजी अनुदान',
    description: 'Prime credit-linked capital subsidy programme offering up to 35% direct non-repayable government capital grant for new micro-enterprises with only 5% promoter equity.',
    descriptionHi: 'नए सूक्ष्म उद्यमों के लिए 15-35% तक प्रत्यक्ष गैर-वापसी योग्य सरकारी पूंजीगत अनुदान/सब्सिडी, मात्र 5% अपनी पूंजी।'
  },
  {
    id: 'pm_vishwakarma',
    name: 'PM Vishwakarma Yojana (Artisans & Trades)',
    nameHi: 'पीएम विश्वकर्मा योजना (कारीगर व शिल्पकार)',
    tag: '5% Subsidized Interest + Free Toolkit',
    tagHi: '5% ब्याज + ₹15,000 टूलकिट अनुदान',
    badgeType: 'subsidy',
    maxLoan: '₹3,00,000 (Tranche 1 & 2)',
    marginReq: '0%',
    interestRate: '5.0%',
    moratorium: '1 Quarter (3 months)',
    moratoriumHi: '1 तिमाही (3 महीने)',
    subsidy: '₹15,000 Toolkit Grant + 8% Subvention',
    subsidyHi: '₹15,000 टूलकिट वाउचर + 8% ब्याज छूट',
    description: 'Central flagship credit support for craftspeople, tailoring, and repair shops at ultra-low 5% interest with a ₹15,000 modern toolkit grant and zero collateral.',
    descriptionHi: 'पारंपरिक कारीगरों व सिलाई/शिल्पकारों के लिए मात्र 5% रियायती ब्याज पर ₹3 लाख का ऋण तथा ₹15,000 का निःशुल्क टूलकिट अनुदान।'
  },
  {
    id: 'nsfdc',
    name: 'NSFDC / NBCFDC Concessional Term Loan',
    nameHi: 'एनएसएफडीसी / एनबीसीएफडीसी रियायती ऋण योजना',
    tag: 'Concessional 6% Interest',
    tagHi: 'रियायती 6% ब्याज दर',
    badgeType: 'recommended',
    maxLoan: '₹15,00,000',
    marginReq: '10%',
    interestRate: '6.0%',
    moratorium: '2 Quarters (6 months)',
    moratoriumHi: '2 तिमाही (6 महीने)',
    subsidy: 'Concessional Margin & Interest',
    subsidyHi: 'रियायती ब्याज व मार्जिन मनी',
    description: 'Targeted concessional term loans for backward and marginalized entrepreneurs with fixed 6% low interest and generous 6-month repayment grace.',
    descriptionHi: 'कम ब्याज दर और रियायती मोहलत अवधि के साथ लक्षित पिछड़े वर्ग के उद्यमियों के लिए टर्म लोन।'
  },
  {
    id: 'standup',
    name: 'Stand-Up India Scheme',
    nameHi: 'स्टैंड-अप इंडिया योजना',
    tag: 'SC/ST & Women Priority Branch Quota',
    tagHi: 'महिला व एससी/एसटी समर्पित कोटा',
    badgeType: 'subsidy',
    maxLoan: '₹10,00,000 - ₹1 Cr',
    marginReq: '15%',
    interestRate: 'Base Rate + 3%',
    moratorium: 'Up to 18 months',
    moratoriumHi: '18 महीने तक मोहलत',
    subsidy: 'Composite Term & Working Capital',
    subsidyHi: 'मिश्रित टर्म व कार्यशील पूंजी',
    description: 'Mandated bank branch quota for greenfield micro-enterprises led by Women, SC, and ST entrepreneurs in services, retail, or manufacturing.',
    descriptionHi: 'महिला और एससी/एसटी उद्यमियों के नए व्यापार के लिए बैंक शाखा स्तर पर समर्पित ऋण योजना।'
  },
  {
    id: 'svanidhi',
    name: 'PM SVANidhi (Street Vendors & Food Carts)',
    nameHi: 'पीएम स्वनिधि योजना (ठेला व विक्रेता)',
    tag: '0% Margin + 7% Interest Cashback',
    tagHi: '0% मार्जिन + 7% ब्याज कैशबैक',
    badgeType: 'collateral-free',
    maxLoan: '₹50,000 (Tranche 1 to 3)',
    marginReq: '0%',
    interestRate: '7% Interest Subsidy',
    moratorium: 'Nil (12 month cycle)',
    moratoriumHi: 'शून्य (12 महीने की किश्त)',
    subsidy: '7% Interest Cashback + ₹1200 Digital Rewards',
    subsidyHi: '7% ब्याज कैशबैक + ₹1200 डिजिटल इनाम',
    description: 'Zero-margin micro-working capital for street food carts, roadside kiosks, and vendors with direct 7% interest cashback credited to your account.',
    descriptionHi: 'ठेले व रेहड़ी-पटरी संचालकों के लिए डिजिटल लेनदेन पर 7% ब्याज सब्सिडी युक्त सूक्ष्म ऋण।'
  },
  {
    id: 'mudra',
    name: 'PM MUDRA Yojana (Kishore)',
    nameHi: 'पीएम मुद्रा योजना (किशोर)',
    tag: 'Collateral-Free Loan',
    tagHi: 'बिना गारंटी लोन',
    badgeType: 'collateral-free',
    maxLoan: '₹5,00,000',
    marginReq: '10% - 15%',
    interestRate: '8.2%',
    moratorium: '1 Quarter (3 months)',
    moratoriumHi: '1 तिमाही (3 महीने)',
    subsidy: '100% Collateral-Free (CGTMSE)',
    subsidyHi: 'बिना किसी गारंटी/बंधक के',
    description: 'Direct bank credit without collateral or third-party guarantor for growing retail stores, grocery shops, and repair units.',
    descriptionHi: 'दुकानदारों व खुदरा व्यापारियों के लिए बिना किसी अतिरिक्त गारंटी के आसान बैंक लोन।'
  },
  {
    id: 'mudra_tarun_plus',
    name: 'PM MUDRA Yojana (Tarun Plus — 2024 Enhanced)',
    nameHi: 'पीएम मुद्रा योजना (तरुण प्लस — ₹20 लाख तक)',
    tag: 'Up to ₹20 Lakhs Scaling Credit',
    tagHi: '₹20 लाख तक उच्च ऋण सीमा',
    badgeType: 'collateral-free',
    maxLoan: 'Up to ₹20,00,000',
    marginReq: '15%',
    interestRate: '8.9%',
    moratorium: '2 Quarters (6 months)',
    moratoriumHi: '2 तिमाही (6 महीने)',
    subsidy: 'Zero Collateral, Enhanced Ceiling',
    subsidyHi: 'बढ़ी हुई ऋण सीमा, गारंटी-मुक्त',
    description: 'Enhanced loan limit announced in Union Budget for established micro-enterprises with good credit track record to scale up infrastructure.',
    descriptionHi: 'अच्छे क्रेडिट रिकॉर्ड वाले उद्यमियों के लिए केंद्रीय बजट में बढ़ाई गई ₹20 लाख तक की संपार्श्विक-मुक्त ऋण सीमा।'
  }
];

export function SchemeSelector({
  selectedSchemeId,
  onSelectScheme,
  gender = 'female',
  category = 'obc',
  capital = 180000,
  businessType = 'grocery',
  lang = 'en'
}) {
  const [filterMode, setFilterMode] = useState('favorable'); // 'favorable' | 'interest' | 'subsidy' | 'collateral'

  // Calculate consumer favorability for each scheme
  const scoredSchemes = SCHEMES_DATA.map((scheme) => {
    let score = 50;
    let favorableReason = '';
    let favorableReasonHi = '';
    let savingsAmount = 0;
    let isDemographicMatch = false;

    if (scheme.id === 'pmegp') {
      const isSpecial = (gender === 'female' || category !== 'general');
      const subsidyPct = isSpecial ? 35 : 25;
      const marginPct = isSpecial ? 5 : 10;
      savingsAmount = Math.round(capital * (subsidyPct / 100));
      score += 55 + (subsidyPct * 0.8);
      if (isSpecial) {
        score += 25;
        isDemographicMatch = true;
      }
      favorableReason = `Saves ₹${savingsAmount.toLocaleString('en-IN')} via ${subsidyPct}% direct non-repayable grant with only ${marginPct}% own margin required.`;
      favorableReasonHi = `${subsidyPct}% प्रत्यक्ष सरकारी अनुदान से ₹${savingsAmount.toLocaleString('en-IN')} की बचत, मात्र ${marginPct}% अपनी पूंजी आवश्यक।`;
    } else if (scheme.id === 'pm_vishwakarma') {
      const isArtisan = ['tailoring', 'handicraft', 'mobile_repair'].some((t) => businessType.toLowerCase().includes(t));
      if (isArtisan || capital <= 200000) {
        score += 70;
        savingsAmount = 15000;
        favorableReason = 'Ultra-low 5.0% subsidized interest (Govt pays 8% subvention) + ₹15,000 free modern toolkit grant + 0% promoter margin.';
        favorableReasonHi = 'मात्र 5% रियायती ब्याज दर + ₹15,000 का निःशुल्क टूलकिट अनुदान + 0% मार्जिन मनी।';
      } else {
        score += 25;
        favorableReason = '5.0% fixed subsidized interest with zero collateral.';
        favorableReasonHi = '5.0% निश्चित रियायती ब्याज दर, बिना किसी गारंटी के।';
      }
    } else if (scheme.id === 'nsfdc') {
      if (category === 'sc' || category === 'st' || category === 'obc' || category === 'minority') {
        score += 52;
        isDemographicMatch = true;
        favorableReason = '6.0% fixed concessional interest and 6-month repayment grace period for backward class entrepreneurs.';
        favorableReasonHi = 'पिछड़े व वंचित वर्ग के उद्यमियों हेतु 6% निश्चित रियायती ब्याज व 6 महीने की किश्त मोहलत।';
      } else {
        score += 15;
        favorableReason = 'Concessional 6.0% fixed interest with 10% margin requirement.';
        favorableReasonHi = '10% मार्जिन मनी के साथ 6.0% रियायती ब्याज दर।';
      }
    } else if (scheme.id === 'standup') {
      if (gender === 'female' || category === 'sc' || category === 'st') {
        score += (capital >= 400000 ? 55 : 35);
        isDemographicMatch = true;
        favorableReason = 'Dedicated priority bank branch quota for Women and SC/ST greenfield ventures with up to 18 months moratorium.';
        favorableReasonHi = 'महिला एवं एससी/एसटी उद्यमियों हेतु बैंक शाखा स्तर पर समर्पित प्राथमिकता कोटा।';
      } else {
        score = 12;
        favorableReason = 'High-ticket greenfield enterprise credit.';
        favorableReasonHi = 'उच्च पूंजी वाले नए उद्यमों हेतु समर्पित ऋण।';
      }
    } else if (scheme.id === 'svanidhi') {
      if (capital <= 60000 || businessType.includes('food_cart')) {
        score += 72;
        favorableReason = '0% margin money required + 7% direct interest cashback credited directly to bank account.';
        favorableReasonHi = '0% मार्जिन मनी + बैंक खाते में सीधे 7% ब्याज कैशबैक सब्सिडी।';
      } else {
        score += 15;
        favorableReason = 'Micro-working capital with 7% interest cashback.';
        favorableReasonHi = '7% ब्याज कैशबैक युक्त सूक्ष्म कार्यशील पूंजी।';
      }
    } else if (scheme.id === 'mudra') {
      score += 35;
      favorableReason = '100% collateral-free credit backed by CGTMSE credit guarantee up to ₹5 Lakhs.';
      favorableReasonHi = '₹5 लाख तक बिना किसी गारंटी या संपत्ति गिरवी रखे बैंक ऋण।';
    } else if (scheme.id === 'mudra_tarun_plus') {
      score += (capital >= 500000 ? 40 : 25);
      favorableReason = 'High credit ceiling up to ₹20 Lakhs for established enterprises.';
      favorableReasonHi = 'विस्तार हेतु ₹20 लाख तक की संपार्श्विक-मुक्त ऋण सीमा।';
    }

    return {
      ...scheme,
      score,
      favorableReason: lang === 'hi' ? favorableReasonHi : favorableReason,
      savingsAmount,
      isDemographicMatch
    };
  });

  // Apply sorting filter
  const sortedSchemes = [...scoredSchemes].sort((a, b) => {
    if (filterMode === 'favorable') return b.score - a.score;
    if (filterMode === 'interest') return parseFloat(a.interestRate) - parseFloat(b.interestRate);
    if (filterMode === 'subsidy') return b.savingsAmount - a.savingsAmount;
    if (filterMode === 'collateral') return (b.badgeType === 'collateral-free' ? 1 : 0) - (a.badgeType === 'collateral-free' ? 1 : 0);
    return 0;
  });

  return (
    <div className="schemes-section">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h3>{lang === 'hi' ? 'व्यक्तिगत सरकारी योजना चयन' : 'Personalized Government Scheme Selection'}</h3>
          <p style={{ color: 'var(--ink-soft)', fontSize: '0.92rem', marginTop: '4px' }}>
            {lang === 'hi' 
              ? 'उपभोक्ता के लिए सर्वाधिक बचत कराने वाली योजना को स्वतः प्रथम स्थान पर अनुशंसित किया गया है।' 
              : 'Ranked by consumer favorability — the scheme saving you the most money is prioritized first.'}
          </p>
        </div>
      </div>

      {/* Filter / Sort Buttons */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', margin: '14px 0 16px' }}>
        <button
          type="button"
          className={`btn sm ${filterMode === 'favorable' ? '' : 'secondary'}`}
          style={filterMode === 'favorable' ? { background: 'var(--paddy)', color: '#fff' } : {}}
          onClick={() => setFilterMode('favorable')}
        >
          🏆 {lang === 'hi' ? 'सर्वाधिक लाभकारी पहले (अनुशंसित)' : 'Most Favorable First (Recommended)'}
        </button>
        <button
          type="button"
          className={`btn sm ${filterMode === 'interest' ? '' : 'secondary'}`}
          style={filterMode === 'interest' ? { background: 'var(--indigo)', color: '#fff' } : {}}
          onClick={() => setFilterMode('interest')}
        >
          💰 {lang === 'hi' ? 'न्यूनतम ब्याज दर' : 'Lowest Interest Rate'}
        </button>
        <button
          type="button"
          className={`btn sm ${filterMode === 'subsidy' ? '' : 'secondary'}`}
          style={filterMode === 'subsidy' ? { background: 'var(--indigo)', color: '#fff' } : {}}
          onClick={() => setFilterMode('subsidy')}
        >
          🎁 {lang === 'hi' ? 'अधिकतम सरकारी सब्सिडी' : 'Highest Govt Grant / Subsidy'}
        </button>
        <button
          type="button"
          className={`btn sm ${filterMode === 'collateral' ? '' : 'secondary'}`}
          style={filterMode === 'collateral' ? { background: 'var(--indigo)', color: '#fff' } : {}}
          onClick={() => setFilterMode('collateral')}
        >
          🛡️ {lang === 'hi' ? '100% बिना गारंटी' : '100% Collateral-Free'}
        </button>
      </div>

      <div className="scheme-grid">
        {sortedSchemes.map((scheme, idx) => {
          const isSelected = scheme.id === selectedSchemeId;
          const isTopFavorable = (idx === 0 && filterMode === 'favorable');

          return (
            <div
              key={scheme.id}
              className={`scheme-card ${isSelected ? 'selected' : ''}`}
              style={{
                cursor: 'pointer',
                ...(isTopFavorable ? {
                  borderColor: '#D97706',
                  borderWidth: '3px',
                  background: 'linear-gradient(180deg, #FFFCF2 0%, var(--paper-card) 100%)',
                  boxShadow: '6px 6px 0 #D97706'
                } : {})
              }}
              onClick={() => onSelectScheme(scheme)}
            >
              <div>
                {isTopFavorable && (
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'linear-gradient(135deg, #D97706, #B45309)',
                    color: '#fff',
                    fontSize: '0.76rem',
                    fontWeight: 900,
                    padding: '4px 12px',
                    borderRadius: '999px',
                    border: '1.5px solid var(--ink)',
                    marginBottom: '8px',
                    boxShadow: '2px 2px 0 var(--ink)'
                  }}>
                    <span>🏆</span>
                    <span>{lang === 'hi' ? 'आपके लिए सबसे अनुकूल योजना (रैंक #1)' : 'Most Favorable Scheme for You (Rank #1)'}</span>
                  </div>
                )}

                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '8px' }}>
                  <span className={`scheme-badge ${scheme.badgeType}`}>
                    {lang === 'hi' ? scheme.tagHi : scheme.tag}
                  </span>
                  {scheme.isDemographicMatch && (
                    <span className="scheme-badge" style={{ background: 'var(--paddy)', color: '#fff' }}>
                      {lang === 'hi' ? 'वर्ग प्राथमिकता' : 'Demographic Match'}
                    </span>
                  )}
                  {scheme.interestRate.includes('5.0') && (
                    <span className="scheme-badge" style={{ background: '#152C40', color: '#fff' }}>
                      {lang === 'hi' ? 'न्यूनतम ब्याज' : 'Lowest Interest'}
                    </span>
                  )}
                </div>

                <h4 style={{ fontSize: '1.1rem', marginBottom: '6px' }}>{lang === 'hi' ? scheme.nameHi : scheme.name}</h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--ink-soft)', lineHeight: 1.5 }}>
                  {lang === 'hi' ? scheme.descriptionHi : scheme.description}
                </p>

                {scheme.favorableReason && (
                  <div style={{
                    marginTop: '10px',
                    padding: '9px 12px',
                    background: 'rgba(217, 119, 6, 0.12)',
                    borderLeft: '4px solid #D97706',
                    borderRadius: '4px',
                    fontSize: '0.84rem',
                    lineHeight: 1.5,
                    color: '#78350F',
                    fontWeight: 700
                  }}>
                    <span style={{ fontSize: '0.95rem' }}>💡 </span>
                    <span>{scheme.favorableReason}</span>
                  </div>
                )}
              </div>

              <div style={{ marginTop: '14px' }}>
                <div className="scheme-specs" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', padding: '8px 0', borderTop: '1px dashed var(--ink-faint)', borderBottom: '1px dashed var(--ink-faint)', marginBottom: '12px' }}>
                  <div className="scheme-spec-item">
                    <div className="spec-label" style={{ fontSize: '0.72rem', color: 'var(--ink-soft)' }}>
                      {lang === 'hi' ? 'आवश्यक मार्जिन:' : 'Margin Required:'}
                    </div>
                    <div className="spec-val" style={{ fontWeight: 800, fontSize: '0.92rem', color: 'var(--paddy-deep)' }}>
                      {scheme.marginReq}
                    </div>
                  </div>
                  <div className="scheme-spec-item">
                    <div className="spec-label" style={{ fontSize: '0.72rem', color: 'var(--ink-soft)' }}>
                      {lang === 'hi' ? 'ब्याज दर:' : 'Interest Rate:'}
                    </div>
                    <div className="spec-val" style={{ fontWeight: 800, fontSize: '0.92rem', color: 'var(--indigo)' }}>
                      {scheme.interestRate}
                    </div>
                  </div>
                  <div className="scheme-spec-item" style={{ gridColumn: 'span 2', paddingTop: '4px' }}>
                    <div className="spec-label" style={{ fontSize: '0.72rem', color: 'var(--ink-soft)' }}>
                      {lang === 'hi' ? 'अधिकतम ऋण सीमा:' : 'Max Sanction Limit:'}
                    </div>
                    <div className="spec-val" style={{ fontWeight: 800, fontSize: '0.92rem', color: 'var(--ink)' }}>
                      {scheme.maxLoan}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className={`btn sm ${isSelected ? 'primary-dark' : 'secondary'}`}
                  style={{ width: '100%', marginTop: '8px' }}
                >
                  {isSelected 
                    ? (lang === 'hi' ? '✓ चयनित योजना' : '✓ Active Scheme Selected') 
                    : (lang === 'hi' ? 'यह योजना चुनें' : 'Select This Scheme')}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SchemeSelector;
