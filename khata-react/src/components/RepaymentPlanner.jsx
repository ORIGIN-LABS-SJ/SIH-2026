import React, { useState } from 'react';

export function RepaymentPlanner({ 
  loanAmount = 144000, 
  annualInterestRate = 6.0, 
  initialMoratoriumQuarters = 2,
  lang = 'en' 
}) {
  const [tenureYears, setTenureYears] = useState(3);
  const [frequency, setFrequency] = useState('quarterly'); // 'quarterly' | 'monthly' | 'seasonal'
  const [moratoriumQuarters, setMoratoriumQuarters] = useState(initialMoratoriumQuarters);

  const totalQuarters = tenureYears * 4;
  const payingQuarters = Math.max(1, totalQuarters - moratoriumQuarters);

  // Interest calculations
  const quarterlyRate = (annualInterestRate / 100) / 4;
  
  // Principal repayment per quarter (Straight line / reducing balance approximation for micro-lending)
  const principalPerQuarter = Math.round(loanAmount / payingQuarters);

  // Generate timeline data
  const schedule = [];
  let remainingPrincipal = loanAmount;
  let totalInterest = 0;

  for (let q = 1; q <= totalQuarters; q++) {
    if (q <= moratoriumQuarters) {
      // During moratorium: No principal repayment. Interest may accrue or be subsidized
      schedule.push({
        label: `Q${q}`,
        type: 'moratorium',
        amount: 0,
        principal: 0,
        interest: 0
      });
    } else {
      const interestForQ = Math.round(remainingPrincipal * quarterlyRate);
      totalInterest += interestForQ;
      const instalment = principalPerQuarter + interestForQ;
      remainingPrincipal = Math.max(0, remainingPrincipal - principalPerQuarter);

      schedule.push({
        label: `Q${q}`,
        type: 'pay',
        amount: instalment,
        principal: principalPerQuarter,
        interest: interestForQ
      });
    }
  }

  const maxInstalment = Math.max(...schedule.map(d => d.amount), 1);
  const totalRepayment = loanAmount + totalInterest;
  const avgMonthlyEq = Math.round(totalRepayment / (totalQuarters * 3));

  return (
    <div className="repayment-planner-module">
      <div style={{ marginBottom: '24px' }}>
        <h3>{lang === 'hi' ? 'ईएमआई व चुकौती योजना (Repayment Planning)' : 'EMI & Cashflow Repayment Planning'}</h3>
        <p style={{ color: 'var(--ink-soft)', fontSize: '0.94rem', marginTop: '4px' }}>
          {lang === 'hi'
            ? 'अपनी दुकान की वास्तविक आमदनी के अनुसार किश्त का समय और मोहलत अवधि तय करें'
            : 'Configure your repayment schedule with grace moratorium so instalments begin only after business income stabilises'}
        </p>
      </div>

      {/* Configuration Controls */}
      <div className="panel" style={{ padding: '22px 24px', marginBottom: '26px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          
          {/* Frequency */}
          <div>
            <label style={{ display: 'block', fontWeight: '700', fontSize: '0.88rem', marginBottom: '8px' }}>
              {lang === 'hi' ? 'किश्त का प्रकार (Frequency):' : 'Repayment Frequency:'}
            </label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                type="button"
                className={`btn sm ${frequency === 'quarterly' ? 'primary-dark' : 'secondary'}`}
                onClick={() => setFrequency('quarterly')}
              >
                {lang === 'hi' ? 'तिमाही (Quarterly)' : 'Quarterly'}
              </button>
              <button
                type="button"
                className={`btn sm ${frequency === 'monthly' ? 'primary-dark' : 'secondary'}`}
                onClick={() => setFrequency('monthly')}
              >
                {lang === 'hi' ? 'मासिक (Monthly)' : 'Monthly'}
              </button>
            </div>
          </div>

          {/* Tenure */}
          <div>
            <label style={{ display: 'block', fontWeight: '700', fontSize: '0.88rem', marginBottom: '8px' }}>
              {lang === 'hi' ? `ऋण अवधि: ${tenureYears} वर्ष (${totalQuarters} तिमाही)` : `Loan Tenure: ${tenureYears} Years (${totalQuarters} Quarters)`}
            </label>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
            />
            <div className="range-labels">
              <span>1 {lang === 'hi' ? 'वर्ष' : 'Yr'}</span>
              <span>3 {lang === 'hi' ? 'वर्ष' : 'Yrs'}</span>
              <span>5 {lang === 'hi' ? 'वर्ष' : 'Yrs'}</span>
            </div>
          </div>

          {/* Moratorium Quarters */}
          <div>
            <label style={{ display: 'block', fontWeight: '700', fontSize: '0.88rem', marginBottom: '8px' }}>
              {lang === 'hi' ? `मोहलत अवधि (Moratorium): ${moratoriumQuarters} तिमाही (${moratoriumQuarters * 3} माह)` : `Moratorium Grace: ${moratoriumQuarters} Quarters (${moratoriumQuarters * 3} Months)`}
            </label>
            <input
              type="range"
              min="0"
              max="4"
              step="1"
              value={moratoriumQuarters}
              onChange={(e) => setMoratoriumQuarters(Number(e.target.value))}
            />
            <div className="range-labels">
              <span>0 ({lang === 'hi' ? 'शून्य' : 'None'})</span>
              <span>2 ({lang === 'hi' ? '6 माह' : '6 Mo'})</span>
              <span>4 ({lang === 'hi' ? '1 वर्ष' : '1 Yr'})</span>
            </div>
          </div>

        </div>
      </div>

      {/* Summary KPI Cards */}
      <div className="fin-summary" style={{ marginBottom: '28px' }}>
        <div className="fin-card">
          <div className="lbl">{lang === 'hi' ? 'औसत मासिक बराबर किश्त' : 'Monthly Equivalent EMI'}</div>
          <div className="val">₹{avgMonthlyEq.toLocaleString('en-IN')}</div>
          <div style={{ fontSize: '0.74rem', color: 'var(--ink-soft)', marginTop: '4px' }}>
            {lang === 'hi' ? 'दुकानदार की सुविधा अनुसार' : 'Calculated on net repayment tenure'}
          </div>
        </div>

        <div className="fin-card">
          <div className="lbl">{lang === 'hi' ? 'कुल देय ब्याज (Total Interest)' : 'Total Interest Payable'}</div>
          <div className="val" style={{ color: 'var(--brick-deep)' }}>₹{totalInterest.toLocaleString('en-IN')}</div>
          <div style={{ fontSize: '0.74rem', color: 'var(--ink-soft)', marginTop: '4px' }}>
            @ {annualInterestRate}% {lang === 'hi' ? 'वार्षिक योजना दर' : 'Scheme Annual Rate'}
          </div>
        </div>

        <div className="fin-card accent">
          <div className="lbl">{lang === 'hi' ? 'कुल चुकौती राशि (मूल + ब्याज)' : 'Total Payable (Principal + Int)'}</div>
          <div className="val">₹{totalRepayment.toLocaleString('en-IN')}</div>
          <div style={{ fontSize: '0.74rem', color: 'var(--ink)', marginTop: '4px', fontWeight: '700' }}>
            {payingQuarters} {lang === 'hi' ? 'किश्तों में विभाजित' : 'Paying instalments'}
          </div>
        </div>
      </div>

      {/* Dynamic Visual Timeline Schedule */}
      <div className="timeline-head">
        <h4>{lang === 'hi' ? 'तिमाही-दर-तिमाही चुकौती अनुसूची (Quarterly Visual Graph)' : 'Quarterly Repayment Schedule Visualizer'}</h4>
        <div className="legend">
          <span>
            <span className="sw" style={{ background: 'var(--paper-alt)', border: '1px solid var(--ink-faint)' }}></span>
            {lang === 'hi' ? 'मोहलत (0 किश्त)' : 'Moratorium (Grace Period)'}
          </span>
          <span>
            <span className="sw" style={{ background: 'var(--indigo)' }}></span>
            {lang === 'hi' ? 'नियमित किश्त' : 'Repayment Instalment'}
          </span>
        </div>
      </div>

      <div className="timeline">
        {schedule.map((d, index) => {
          const heightPct = d.type === 'moratorium' ? 15 : Math.max(22, (d.amount / maxInstalment) * 100);
          return (
            <div key={index} className="tl-bar-wrap">
              <div
                className={`tl-bar ${d.type}`}
                style={{ height: `${heightPct}%` }}
                title={`${d.label}: ${d.type === 'moratorium' ? (lang === 'hi' ? 'मोहलत (₹0)' : 'Moratorium Grace') : '₹' + d.amount.toLocaleString('en-IN')}`}
              ></div>
              <div className="tl-label">{d.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RepaymentPlanner;
