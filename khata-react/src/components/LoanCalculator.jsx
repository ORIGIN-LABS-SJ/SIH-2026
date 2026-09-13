import React from 'react';

export function LoanCalculator({ 
  capital, 
  onCapitalChange, 
  scheme, 
  cibilScore = 720,
  lang = 'en' 
}) {
  // Parsing scheme margin percentage
  let marginPct = 0.10; // Default 10%
  if (scheme.id === 'pmegp') marginPct = 0.05; // 5% for special categories in PMEGP
  else if (scheme.id === 'mudra') marginPct = 0.15;
  else if (scheme.id === 'standup') marginPct = 0.15;
  else if (scheme.id === 'svanidhi') marginPct = 0.00;

  // Margin rebate for high CIBIL (>750)
  if (cibilScore >= 750 && marginPct > 0.05) {
    marginPct -= 0.02; // 2% relaxation
  }

  // Calculate project economics
  const totalProjectCost = Math.round(capital * 1.35); // Initial stock + machinery/fixtures + 3mo working capital
  const promoterMargin = Math.round(totalProjectCost * marginPct);

  // Government subsidy grant
  let subsidyAmount = 0;
  if (scheme.id === 'pmegp') {
    subsidyAmount = Math.round(totalProjectCost * 0.25); // 25% average rural/urban PMEGP subsidy
  } else if (scheme.id === 'svanidhi') {
    subsidyAmount = 2500; // Digital cashback grant
  }

  const termLoanAmount = Math.max(0, totalProjectCost - promoterMargin - subsidyAmount);
  const workingCapitalAllocation = Math.round(termLoanAmount * 0.40);
  const fixedAssetAllocation = termLoanAmount - workingCapitalAllocation;

  return (
    <div className="loan-calculator-module">
      <div style={{ marginBottom: '24px' }}>
        <h3>{lang === 'hi' ? 'परियोजना ऋण व पूंजी गणना' : 'Project Cost & Term Loan Calculation'}</h3>
        <p style={{ color: 'var(--ink-soft)', fontSize: '0.94rem', marginTop: '4px' }}>
          {lang === 'hi'
            ? 'आपकी शुरुआती पूंजी और चयनित योजना के आधार पर परियोजना लागत, मार्जिन और स्वीकृत ऋण का स्पष्ट विवरण'
            : 'Clear breakdown of total project cost, promoter margin equity, subsidy grant, and net term loan'}
        </p>
      </div>

      <div className="fin-summary">
        <div className="fin-card">
          <div className="lbl">{lang === 'hi' ? 'कुल अनुमानित परियोजना लागत' : 'Total Project Outlay'}</div>
          <div className="val">₹{totalProjectCost.toLocaleString('en-IN')}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--ink-soft)', marginTop: '4px' }}>
            {lang === 'hi' ? 'स्टॉक + दुकान सज्जा + कार्यशील पूंजी' : 'Stock + Fixtures + Working Capital'}
          </div>
        </div>

        <div className="fin-card paddy-accent">
          <div className="lbl">{lang === 'hi' ? 'आपका मार्जिन-मनी योगदान' : 'Your Margin Contribution'}</div>
          <div className="val">₹{promoterMargin.toLocaleString('en-IN')}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--paddy-deep)', marginTop: '4px', fontWeight: '700' }}>
            {Math.round(marginPct * 100)}% {lang === 'hi' ? 'खुद की पूंजी' : 'Promoter Equity'}
          </div>
        </div>

        <div className="fin-card accent">
          <div className="lbl">{lang === 'hi' ? 'बैंक टर्म लोन स्वीकृति' : 'Bank Term Loan Sanction'}</div>
          <div className="val">₹{termLoanAmount.toLocaleString('en-IN')}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--ink)', marginTop: '4px', fontWeight: '700' }}>
            @ {scheme.interestRate} {lang === 'hi' ? 'वार्षिक ब्याज' : 'p.a. Interest'}
          </div>
        </div>
      </div>

      {subsidyAmount > 0 && (
        <div style={{ 
          background: 'var(--paddy-light)', 
          border: '2px solid var(--paddy)', 
          borderRadius: 'var(--radius)', 
          padding: '14px 20px', 
          marginBottom: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          <div>
            <strong style={{ color: 'var(--paddy-deep)', fontSize: '1rem' }}>
              🎁 {lang === 'hi' ? 'सरकारी सब्सिडी अनुदान (Government Grant)' : 'Government Capital Subsidy Grant'}
            </strong>
            <p style={{ fontSize: '0.84rem', color: 'var(--ink-soft)', marginTop: '2px' }}>
              {lang === 'hi' ? 'यह राशि ऋण से स्वतः घटाई जाती है और वापस नहीं करनी होती।' : 'Credit-linked capital subsidy deposited directly to reduce debt obligation.'}
            </p>
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: '800', fontSize: '1.45rem', color: 'var(--paddy-deep)' }}>
            ₹{subsidyAmount.toLocaleString('en-IN')}
          </div>
        </div>
      )}

      {/* Breakdown Details */}
      <div className="panel" style={{ padding: '20px 24px' }}>
        <h4 style={{ marginBottom: '16px' }}>{lang === 'hi' ? 'ऋण उपयोग का विभाजन (Loan Utilization):' : 'Proposed Loan Fund Utilization:'}</h4>
        <div className="scheme-line">
          <span>{lang === 'hi' ? 'दुकान सज्जा, मशीनरी व उपकरण (Fixed Assets):' : 'Machinery, Equipment & Store Fit-out:'}</span>
          <strong>₹{fixedAssetAllocation.toLocaleString('en-IN')}</strong>
        </div>
        <div className="scheme-line">
          <span>{lang === 'hi' ? 'शुरुआती माल व 3-महीने कार्यशील पूंजी (Working Capital):' : 'Initial Inventory & 3-Month Working Capital:'}</span>
          <strong>₹{workingCapitalAllocation.toLocaleString('en-IN')}</strong>
        </div>
        <div className="scheme-line">
          <span>{lang === 'hi' ? 'लागू योजना एवं मोडल:' : 'Financing Scheme & Model:'}</span>
          <strong style={{ color: 'var(--indigo)' }}>{lang === 'hi' ? scheme.nameHi : scheme.name}</strong>
        </div>
      </div>
    </div>
  );
}

export default LoanCalculator;
