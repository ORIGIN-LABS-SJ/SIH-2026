import React from 'react';
import { BUSINESS_MODELS, calculateBudgetBreakdown, t } from '../utils/translations';

export function BudgetDistribution({ capital, businessType, lang = 'en' }) {
  // Match business type string to model ID
  const model = BUSINESS_MODELS.find(m => m.value === businessType) || BUSINESS_MODELS[0];
  const breakdown = calculateBudgetBreakdown(capital, model.id);
  const isCapitalEnough = capital >= model.minCapital;
  const fundingGap = model.minCapital - capital;

  return (
    <div className="budget-distribution-module">
      <div style={{ marginBottom: '24px' }}>
        <h3>{t('tabBudget', lang)}</h3>
        <p style={{ color: 'var(--ink-soft)', fontSize: '0.94rem', marginTop: '4px' }}>
          {lang === 'hi'
            ? `₹${capital.toLocaleString('en-IN')} की पूंजी को "${model.labels[lang] || model.labels.en}" व्यापार के लिए सबसे अच्छे ढंग से कैसे खर्च करें — यह खाता का सुझाव है।`
            : `How to optimally distribute ₹${capital.toLocaleString('en-IN')} across your "${model.labels[lang] || model.labels.en}" — Khata's recommendation.`}
        </p>
      </div>

      {/* Capital Adequacy Check */}
      {!isCapitalEnough ? (
        <div className="funding-gap-banner">
          <div className="funding-gap-info">
            <h4>
              ⚠️ {lang === 'hi' 
                ? 'पूंजी कम है — फंडिंग गैप मौजूद' 
                : 'Capital Shortfall — Funding Gap Detected'}
            </h4>
            <p>
              {lang === 'hi'
                ? `"${model.labels.hi || model.labels.en}" के लिए न्यूनतम ₹${model.minCapital.toLocaleString('en-IN')} चाहिए। सरकारी योजना या वैकल्पिक व्यापार नीचे देखें।`
                : `"${model.labels.en}" needs a minimum of ₹${model.minCapital.toLocaleString('en-IN')} to start viably. Check matched govt schemes or alternate business ideas below.`}
            </p>
          </div>
          <div className="funding-gap-amount-box">
            <div className="gap-lbl">{lang === 'hi' ? 'कमी राशि' : 'Shortfall'}</div>
            <div className="gap-val">₹{Math.abs(fundingGap).toLocaleString('en-IN')}</div>
          </div>
        </div>
      ) : (
        <div className="capital-ok-banner">
          <span style={{ fontSize: '1.3rem' }}>✅</span>
          <span>
            {lang === 'hi'
              ? `आपकी पूंजी इस व्यापार के लिए पर्याप्त है (न्यूनतम: ₹${model.minCapital.toLocaleString('en-IN')}, आदर्श: ₹${model.idealCapital.toLocaleString('en-IN')})`
              : `Your capital meets the minimum threshold (Min: ₹${model.minCapital.toLocaleString('en-IN')}, Ideal: ₹${model.idealCapital.toLocaleString('en-IN')})`}
          </span>
        </div>
      )}

      {/* Visual Bar */}
      <div className="budget-dist-bar-wrap">
        <div className="budget-dist-bar">
          {breakdown.categories.map((cat) => (
            <div
              key={cat.id}
              className="budget-dist-seg"
              style={{ width: `${cat.percentage}%`, background: cat.color }}
              title={`${cat.percentage}% — ₹${cat.amount.toLocaleString('en-IN')}`}
            >
              {cat.percentage >= 12 ? `${cat.percentage}%` : ''}
            </div>
          ))}
        </div>
      </div>

      {/* Budget Cards */}
      <div className="budget-grid">
        {breakdown.categories.map((cat) => (
          <div key={cat.id} className="budget-card">
            <div className="budget-card-head">
              <div className="budget-card-title">
                <span>{cat.icon}</span>
                <span>{t(cat.nameKey, lang)}</span>
              </div>
              <span className="budget-card-pct" style={{ borderColor: cat.color, color: cat.color }}>{cat.percentage}%</span>
            </div>
            <div className="budget-card-amount" style={{ color: cat.color }}>
              ₹{cat.amount.toLocaleString('en-IN')}
            </div>
            <div className="budget-card-items">
              {cat.items}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BudgetDistribution;
