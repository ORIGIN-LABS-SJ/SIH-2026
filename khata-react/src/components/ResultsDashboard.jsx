import React, { useState } from 'react';
import SchemeSelector from './SchemeSelector';
import LoanCalculator from './LoanCalculator';
import RepaymentPlanner from './RepaymentPlanner';
import CibilScore from './CibilScore';
import BudgetDistribution from './BudgetDistribution';
import AlternateBusinesses from './AlternateBusinesses';
import { t } from '../utils/translations';

export function ResultsDashboard({
  entrepreneurName,
  businessType,
  location,
  capital,
  selectedScheme,
  onSelectScheme,
  cibilScore,
  onCibilChange,
  metrics,
  gender,
  category,
  onEditAnswers,
  onOpenChat,
  onSwitchBusiness,
  lang = 'en'
}) {
  const [activeTab, setActiveTab] = useState('verdict');

  // Dynamic calculations
  const totalLoan = Math.round(capital * 0.80);
  const marginMoney = Math.round(capital * 0.20);

  return (
    <section className="results-screen">
      <div className="results-head">
        <div>
          <h2>
            {entrepreneurName && <span className="owner-highlight">{entrepreneurName}'s </span>}
            {businessType} — {location}
          </h2>
          <p className="meta">
            {lang === 'hi'
              ? `₹${capital.toLocaleString('en-IN')} शुरुआती पूंजी के आधार पर पूर्ण विश्लेषण`
              : `Assessed against ₹${capital.toLocaleString('en-IN')} starting capital`}
          </p>
        </div>

        <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
          <button type="button" className="btn sm secondary" onClick={onOpenChat}>
            💬 {lang === 'hi' ? 'सलाहकार से चर्चा करें' : 'Discuss with Advisor'}
          </button>
          <button type="button" className="edit-link" onClick={onEditAnswers}>
            ← {lang === 'hi' ? 'जवाब बदलें' : 'Edit answers'}
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabbar" role="tablist">
        <button
          type="button"
          className={`tab ${activeTab === 'verdict' ? 'active' : ''}`}
          onClick={() => setActiveTab('verdict')}
        >
          🏆 {t('tabVerdict', lang)}
        </button>

        <button
          type="button"
          className={`tab ${activeTab === 'budget' ? 'active' : ''}`}
          onClick={() => setActiveTab('budget')}
        >
          💰 {t('tabBudget', lang)}
        </button>

        <button
          type="button"
          className={`tab ${activeTab === 'schemes' ? 'active' : ''}`}
          onClick={() => setActiveTab('schemes')}
        >
          🏛️ {t('tabSchemes', lang)}
        </button>

        <button
          type="button"
          className={`tab ${activeTab === 'alternates' ? 'active' : ''}`}
          onClick={() => setActiveTab('alternates')}
        >
          💡 {t('tabAlternates', lang)}
        </button>

        <button
          type="button"
          className={`tab ${activeTab === 'calculator' ? 'active' : ''}`}
          onClick={() => setActiveTab('calculator')}
        >
          🧮 {t('tabCalculator', lang)}
        </button>

        <button
          type="button"
          className={`tab ${activeTab === 'repayment' ? 'active' : ''}`}
          onClick={() => setActiveTab('repayment')}
        >
          📅 {t('tabRepayment', lang)}
        </button>

        <button
          type="button"
          className={`tab ${activeTab === 'cibil' ? 'active' : ''}`}
          onClick={() => setActiveTab('cibil')}
        >
          📈 {lang === 'hi' ? 'सिबिल स्कोर' : 'CIBIL Score'}
        </button>
      </div>

      <div className="tab-panels">

        {/* Tab: Verdict & Feasibility */}
        {activeTab === 'verdict' && (
          <div className="tab-panel active" id="panel-verdict">
            <div className="verdict-layout">
              <div className="stamp" style={{ '--stamp-color': 'var(--marigold-deep)' }}>
                <div className="stamp-inner">
                  <div className="stamp-word">
                    {lang === 'hi' ? 'बदलाव करें' : 'MODIFY'}
                  </div>
                  <div className="stamp-sub">
                    {lang === 'hi' ? 'खाता आकलन' : 'KHATA ASSESSMENT'}
                  </div>
                </div>
              </div>

              <div className="verdict-text">
                <h3>
                  {lang === 'hi'
                    ? 'योजना ठीक है, बस एक बदलाव ज़रूरी है'
                    : 'Workable, with one change to the plan'}
                </h3>
                <p>
                  {lang === 'hi'
                    ? `इस स्थान पर ${businessType} मांग और प्रतिस्पर्धा जांच में खरा उतरता है। आपकी बताई पूंजी माल और सज्जा के लिए पर्याप्त है, पर पहली दो तिमाहियों के लिए नकद भंडार कम है — इसे अनुशंसित योजना के साथ बढ़ाना बेहतर होगा।`
                    : `A ${businessType.toLowerCase()} in ${location} clears demand and competition checks. The capital you've listed covers stock and fit-out, but leaves a thin cash buffer for the first two quarters — worth widening before you sign anything.`}
                </p>

                <ul className="verdict-factors">
                  <li>
                    <span className="dot" style={{ background: 'var(--paddy)' }}></span>
                    <span>
                      {lang === 'hi'
                        ? `स्थानीय मांग इस व्यापार के अनुकूल है: औसत घनत्व, ${metrics.distance || '600m'} में कोई सीधी दुकान नहीं`
                        : `Local demand supports this trade: moderate household density, no store within ${metrics.distance || '600m'}`}
                    </span>
                  </li>
                  <li>
                    <span className="dot" style={{ background: 'var(--paddy)' }}></span>
                    <span>
                      {lang === 'hi'
                        ? `निकटवर्ती क्षेत्र में केवल ${metrics.competition || 2} समान दुकानें संचालित हैं`
                        : `Only ${metrics.competition || 2} similar stores operating in the immediate catchment area`}
                    </span>
                  </li>
                  <li>
                    <span className="dot" style={{ background: 'var(--marigold-deep)' }}></span>
                    <span>
                      {lang === 'hi'
                        ? 'कार्यशील पूंजी भंडार अनुशंसित 3 महीने के बफ़र से थोड़ा कम है'
                        : 'Working-capital buffer is under the recommended three-month cushion'}
                    </span>
                  </li>
                </ul>

                <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    className="btn sm"
                    onClick={() => setActiveTab('budget')}
                  >
                    {lang === 'hi' ? 'बजट बंटवारा देखें →' : 'View Budget Split →'}
                  </button>
                  <button
                    type="button"
                    className="btn sm secondary"
                    onClick={() => setActiveTab('schemes')}
                  >
                    {lang === 'hi' ? 'योग्य योजनाएं देखें' : 'View Eligible Schemes'}
                  </button>
                </div>
              </div>
            </div>

            {/* Feasibility SWOT */}
            <div className="swot-grid" style={{ marginTop: '36px' }}>
              <div className="swot-card strength">
                <h4>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 20V10M12 10C12 6 15 4 19 4C19 8 17 10 12 10Z" />
                    <path d="M12 14C12 11 9 9 5 9C5 12 7 14 12 14Z" />
                  </svg>
                  <span>{lang === 'hi' ? 'मजबूती (Strengths)' : 'Strengths'}</span>
                </h4>
                <ul>
                  <li>{lang === 'hi' ? 'निकटवर्ती व्यापारिक क्षेत्र में कम प्रतिस्पर्धा' : 'Low existing competition in the catchment area'}</li>
                  <li>{lang === 'hi' ? 'स्थिर दैनिक ज़रूरत की मांग, मौसमी मंदी नहीं' : 'Steady daily-needs demand, not seasonal'}</li>
                  <li>{lang === 'hi' ? 'दुकान स्थल के पास नियमित पैदल आवाजाही' : 'Consistent pedestrian footfall along the chosen strip'}</li>
                </ul>
              </div>

              <div className="swot-card weakness">
                <h4>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M4 3H20L18 13H6L4 3Z" />
                    <path d="M6 13L4 21" />
                    <path d="M18 13L20 21" />
                  </svg>
                  <span>{lang === 'hi' ? 'कमजोरी (Weaknesses)' : 'Weaknesses'}</span>
                </h4>
                <ul>
                  <li>{lang === 'hi' ? 'पहली दो तिमाहियों के लिए पतला नकद भंडार' : 'Thin working-capital buffer for the first two quarters'}</li>
                  <li>{lang === 'hi' ? 'डिजिटल बहीखाता व जीएसटी का पूर्व अनुभव नहीं' : 'No prior digital bookkeeping track record recorded'}</li>
                </ul>
              </div>

              <div className="swot-card opportunity">
                <h4>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="4" y="10" width="16" height="10" rx="1" />
                    <path d="M4 10L12 4L20 10" />
                  </svg>
                  <span>{lang === 'hi' ? 'अवसर (Opportunities)' : 'Opportunities'}</span>
                </h4>
                <ul>
                  <li>{lang === 'hi' ? 'प्रस्तावित स्थान से 400 मीटर दूर नई आवासीय कॉलोनी बन रही है' : 'New residential housing coming up 400m from the proposed site'}</li>
                  <li>{lang === 'hi' ? 'बाद में बिल-भुगतान और पार्सल पिकअप काउंटर जोड़कर अतिरिक्त कमाई' : 'Room to add a bill-payment / micro-ATM counter later for extra footfall'}</li>
                </ul>
              </div>

              <div className="swot-card threat">
                <h4>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 18C4 18 2 16 2 13C2 10.5 4 9 6 9C6.5 6 9 4 12 4C15 4 17 6.5 17.5 9.5C19.5 9.8 21 11.5 21 13.5C21 16 19 18 16 18H7Z" />
                  </svg>
                  <span>{lang === 'hi' ? 'खतरे (Threats)' : 'Threats'}</span>
                </h4>
                <ul>
                  <li>{lang === 'hi' ? '1.2 किमी दूर एक बड़ा मार्ट / थोक स्टोर खुलने की संभावना' : 'A larger regional general store is rumoured to be opening 1.2km away'}</li>
                  <li>{lang === 'hi' ? 'थोक जिंस दरों में हालिया मूल्य वृद्धि' : 'Wholesale rates for daily staples have risen 6% this quarter'}</li>
                </ul>
              </div>
            </div>

            <div className="market-strip" style={{ marginTop: '24px' }}>
              <div className="market-item">
                <div className="val">{metrics.competition || 2}</div>
                <div className="lbl">{lang === 'hi' ? 'आसपास समान दुकानें' : 'similar stores nearby'}</div>
              </div>
              <div className="market-item">
                <div className="val">{metrics.households || '~1,400'}</div>
                <div className="lbl">{lang === 'hi' ? 'प्रभाव क्षेत्र में घर' : 'households in catchment'}</div>
              </div>
              <div className="market-item">
                <div className="val">{metrics.distance || '600m'}</div>
                <div className="lbl">{lang === 'hi' ? 'निकटतम प्रतिस्पर्धी तक दूरी' : 'to nearest competitor'}</div>
              </div>
              <div className="market-item">
                <div className="val" style={{ color: 'var(--paddy-deep)' }}>
                  {metrics.tier || 'Semi-Urban'}
                </div>
                <div className="lbl">{lang === 'hi' ? 'बाज़ार का स्तर' : 'market tier'}</div>
              </div>
            </div>
          </div>
        )}

        {/* Tab: Smart Budget Distribution */}
        {activeTab === 'budget' && (
          <div className="tab-panel active" id="panel-budget">
            <BudgetDistribution
              capital={capital}
              businessType={businessType}
              lang={lang}
            />
          </div>
        )}

        {/* Tab: Personalized Scheme Selection */}
        {activeTab === 'schemes' && (
          <div className="tab-panel active" id="panel-schemes">
            <SchemeSelector
              selectedSchemeId={selectedScheme.id}
              onSelectScheme={(scheme) => onSelectScheme(scheme)}
              gender={gender}
              category={category}
              capital={capital}
              businessType={businessType}
              lang={lang}
            />
          </div>
        )}

        {/* Tab: Alternate Business Ideas */}
        {activeTab === 'alternates' && (
          <div className="tab-panel active" id="panel-alternates">
            <AlternateBusinesses
              capital={capital}
              businessType={businessType}
              onSwitchBusiness={onSwitchBusiness}
              lang={lang}
            />
          </div>
        )}

        {/* Tab: Loan Calculator */}
        {activeTab === 'calculator' && (
          <div className="tab-panel active" id="panel-calculator">
            <LoanCalculator
              capital={capital}
              scheme={selectedScheme}
              cibilScore={cibilScore}
              lang={lang}
            />
          </div>
        )}

        {/* Tab: EMI & Repayment Planner */}
        {activeTab === 'repayment' && (
          <div className="tab-panel active" id="panel-repayment">
            <RepaymentPlanner
              loanAmount={totalLoan}
              annualInterestRate={parseFloat(selectedScheme.interestRate) || 6.0}
              initialMoratoriumQuarters={selectedScheme.id === 'nsfdc' ? 2 : 1}
              lang={lang}
            />
          </div>
        )}

        {/* Tab: CIBIL Score Analysis */}
        {activeTab === 'cibil' && (
          <div className="tab-panel active" id="panel-cibil">
            <CibilScore
              score={cibilScore}
              onScoreChange={onCibilChange}
              lang={lang}
            />
          </div>
        )}

      </div>
    </section>
  );
}

export default ResultsDashboard;
