import React from 'react';
import { BUSINESS_MODELS, getAlternateBusinesses, t } from '../utils/translations';

export function AlternateBusinesses({ capital, businessType, onSwitchBusiness, lang = 'en' }) {
  const currentModel = BUSINESS_MODELS.find(m => m.value === businessType) || BUSINESS_MODELS[0];
  const alternates = getAlternateBusinesses(capital, currentModel.id);

  if (alternates.length === 0) return null;

  return (
    <div style={{ marginTop: '10px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h3>{t('tabAlternates', lang)}</h3>
        <p style={{ color: 'var(--ink-soft)', fontSize: '0.94rem', marginTop: '4px' }}>
          {lang === 'hi'
            ? `₹${capital.toLocaleString('en-IN')} की पूंजी और आपके स्थान के हिसाब से ये व्यापार भी बढ़िया चल सकते हैं — एक क्लिक में स्विच करें।`
            : `Based on ₹${capital.toLocaleString('en-IN')} capital and your location, these trades also have strong viability — switch with one click.`}
        </p>
      </div>

      <div className="alt-biz-grid">
        {alternates.map((biz) => (
          <div key={biz.id} className="alt-biz-card">
            <div>
              <h4>{lang === 'hi' ? (biz.titleHi || biz.title) : biz.title}</h4>
              <p style={{ color: 'var(--ink-soft)', fontSize: '0.88rem', marginBottom: '12px' }}>
                {biz.whySuggested}
              </p>

              <div className="alt-biz-specs">
                <div>
                  <span style={{ color: 'var(--ink-soft)' }}>
                    {lang === 'hi' ? 'न्यूनतम पूंजी' : 'Min Capital'}
                  </span>
                  <strong>₹{biz.minCap.toLocaleString('en-IN')}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--ink-soft)' }}>
                    {lang === 'hi' ? 'आदर्श पूंजी' : 'Ideal Capital'}
                  </span>
                  <strong>₹{biz.idealCap.toLocaleString('en-IN')}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--ink-soft)' }}>
                    {lang === 'hi' ? 'दैनिक आय' : 'Daily Income'}
                  </span>
                  <strong>{biz.dailyIncome}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--ink-soft)' }}>
                    {lang === 'hi' ? 'ब्रेक-ईवन' : 'Break-even'}
                  </span>
                  <strong>{biz.breakeven}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--ink-soft)' }}>
                    {lang === 'hi' ? 'जोखिम स्तर' : 'Risk Level'}
                  </span>
                  <strong style={{ color: biz.riskLevel === 'Low' ? 'var(--paddy)' : 'var(--marigold-deep)' }}>
                    {biz.riskLevel}
                  </strong>
                </div>
                <div>
                  <span style={{ color: 'var(--ink-soft)' }}>
                    {lang === 'hi' ? 'उपयुक्त स्थान' : 'Best Location'}
                  </span>
                  <strong style={{ fontSize: '0.82rem' }}>{biz.locationSuitability}</strong>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="btn-switch-biz"
              onClick={() => {
                // Find matching BUSINESS_MODELS entry
                const matchedModel = BUSINESS_MODELS.find(m => m.id === biz.id);
                if (matchedModel && onSwitchBusiness) {
                  onSwitchBusiness(matchedModel.value);
                }
              }}
            >
              <span>🔄</span>
              <span>
                {lang === 'hi' 
                  ? 'इस व्यापार पर स्विच करें व पुनः गणना करें' 
                  : 'Switch to This Business & Recalculate'}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlternateBusinesses;
