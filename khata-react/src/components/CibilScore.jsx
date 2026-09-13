import React from 'react';

export function CibilScore({ score, onScoreChange, lang = 'en' }) {
  // Score interpretation
  let category = 'Fair';
  let categoryHi = 'औसत (Fair)';
  let color = 'var(--marigold-deep)';
  let badgeClass = 'fair';
  let approvalOdds = '65%';
  let interestImpact = 'Standard rack rate';
  let interestImpactHi = 'मानक ब्याज दर लागू';
  let marginReq = '15%';

  if (score >= 750) {
    category = 'Excellent';
    categoryHi = 'उत्कृष्ट (Excellent)';
    color = 'var(--paddy)';
    badgeClass = 'excellent';
    approvalOdds = '94%';
    interestImpact = '-0.50% concessional rebate';
    interestImpactHi = '0.50% ब्याज में विशेष छूट';
    marginReq = '10% (Lowest)';
  } else if (score >= 700) {
    category = 'Good';
    categoryHi = 'अच्छा (Good)';
    color = 'var(--indigo)';
    badgeClass = 'good';
    approvalOdds = '85%';
    interestImpact = 'Priority sanction';
    interestImpactHi = 'त्वरित ऋण स्वीकृति';
    marginReq = '10% - 15%';
  } else if (score >= 600) {
    category = 'Fair';
    categoryHi = 'औसत (Fair)';
    color = 'var(--marigold-deep)';
    badgeClass = 'fair';
    approvalOdds = '65%';
    interestImpact = 'Standard scheme rate';
    interestImpactHi = 'मानक ब्याज दर लागू';
    marginReq = '15% - 20%';
  } else {
    category = 'Needs Attention';
    categoryHi = 'सुधार आवश्यक (Poor)';
    color = 'var(--brick)';
    badgeClass = 'poor';
    approvalOdds = '40% (Guarantor needed)';
    interestImpact = '+1.00% risk premium';
    interestImpactHi = '+1.00% अतिरिक्त जोखिम प्रीमियम';
    marginReq = '25% margin required';
  }

  // Calculate needle rotation: 300 score is -90deg, 900 score is +90deg
  const percentage = (score - 300) / 600;
  const rotationDeg = -90 + percentage * 180;

  return (
    <div className="cibil-card">
      <div className="cibil-layout">
        <div className="cibil-gauge-wrap">
          <svg className="cibil-dial-svg" viewBox="0 0 200 120">
            {/* Background arc */}
            <path
              d="M 20 110 A 80 80 0 0 1 180 110"
              fill="none"
              stroke="var(--paper-alt)"
              strokeWidth="18"
              strokeLinecap="round"
            />
            {/* Colored arc segments */}
            {/* Red: 300 - 599 */}
            <path
              d="M 20 110 A 80 80 0 0 1 65 37"
              fill="none"
              stroke="var(--brick)"
              strokeWidth="18"
            />
            {/* Orange: 600 - 699 */}
            <path
              d="M 65 37 A 80 80 0 0 1 100 30"
              fill="none"
              stroke="var(--marigold)"
              strokeWidth="18"
            />
            {/* Blue: 700 - 749 */}
            <path
              d="M 100 30 A 80 80 0 0 1 135 37"
              fill="none"
              stroke="var(--indigo)"
              strokeWidth="18"
            />
            {/* Green: 750 - 900 */}
            <path
              d="M 135 37 A 80 80 0 0 1 180 110"
              fill="none"
              stroke="var(--paddy)"
              strokeWidth="18"
              strokeLinecap="round"
            />
            {/* Center needle pivot */}
            <circle cx="100" cy="110" r="10" fill="var(--ink)" />
            {/* Needle */}
            <line
              x1="100"
              y1="110"
              x2="100"
              y2="42"
              stroke="var(--ink)"
              strokeWidth="4"
              strokeLinecap="round"
              transform={`rotate(${rotationDeg} 100 110)`}
              style={{ transition: 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1.2)' }}
            />
          </svg>

          <div className="cibil-score-number">{score}</div>
          <span className={`cibil-badge ${badgeClass}`}>
            {lang === 'hi' ? categoryHi : category}
          </span>

          <div className="cibil-slider-wrap">
            <input
              type="range"
              min="300"
              max="900"
              step="5"
              value={score}
              onChange={(e) => onScoreChange(Number(e.target.value))}
              aria-label="CIBIL Score Slider"
            />
            <div className="range-labels">
              <span>300 (Poor)</span>
              <span>750+ (Ideal)</span>
              <span>900 (Max)</span>
            </div>
          </div>
        </div>

        <div className="cibil-details">
          <h3>{lang === 'hi' ? 'सिबिल / क्रेडिट स्कोर प्रभाव' : 'CIBIL & Credit Assessment'}</h3>
          <p style={{ color: 'var(--ink-soft)', fontSize: '0.94rem', marginTop: '6px', lineHeight: '1.55' }}>
            {lang === 'hi'
              ? 'आपका क्रेडिट स्कोर बैंक लोन स्वीकृति, ब्याज दर और आवश्यक मार्जिन-मनी राशि को सीधे प्रभावित करता है।'
              : 'Your credit score directly dictates bank appraisal velocity, concession on interest rates, and promoter margin requirement.'}
          </p>

          <div className="cibil-impact-list">
            <div className="cibil-impact-item">
              <span>{lang === 'hi' ? 'ऋण स्वीकृति संभावना (Sanction Probability):' : 'Bank Approval Odds:'}</span>
              <strong style={{ color: color, fontSize: '1.05rem' }}>{approvalOdds}</strong>
            </div>
            <div className="cibil-impact-item">
              <span>{lang === 'hi' ? 'ब्याज दर प्रभाव (Rate Impact):' : 'Interest Rate Concession:'}</span>
              <strong>{lang === 'hi' ? interestImpactHi : interestImpact}</strong>
            </div>
            <div className="cibil-impact-item">
              <span>{lang === 'hi' ? 'प्रवर्तक मार्जिन आवश्यकता:' : 'Required Margin Money:'}</span>
              <strong>{marginReq}</strong>
            </div>
          </div>

          <div style={{ marginTop: '18px', padding: '12px 16px', background: 'var(--paper-alt)', borderRadius: '6px', fontSize: '0.86rem' }}>
            <strong>💡 {lang === 'hi' ? 'छोटे व्यापारियों के लिए सिबिल सुधार सुझाव:' : 'Hyperlocal Merchant Credit Tip:'}</strong>
            <p style={{ marginTop: '4px', color: 'var(--ink-soft)' }}>
              {score < 700 
                ? (lang === 'hi' 
                    ? 'दुकान का बैंक खाता नियमित रखें, UPI क्यूआर से पेमेंट स्वीकारें, और स्वयं सहायता समूह (SHG) या मुद्रा कार्ड का समय पर भुगतान कर स्कोर 750+ पहुंचाएं।' 
                    : 'Maintain daily UPI QR transactions into your business current account and clear micro-overdrafts on time to reach 750+ score.')
                : (lang === 'hi'
                    ? 'उत्कृष्ट स्कोर! आप बिना किसी बंधक (Collateral-Free) के NSFDC, PMEGP या मुद्रा के तहत न्यूनतम ब्याज पर ऋण पाने के पात्र हैं।'
                    : 'Excellent standing! You qualify for collateral-free sanction under NSFDC & PMEGP with top-bracket interest concessions.')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CibilScore;
