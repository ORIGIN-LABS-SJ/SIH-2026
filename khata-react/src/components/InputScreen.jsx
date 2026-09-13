import React from 'react';
import LocationPicker from './LocationPicker';
import VoiceInput from './VoiceInput';
import { BUSINESS_MODELS, SOCIAL_CATEGORIES, GENDER_OPTIONS, t } from '../utils/translations';

export function InputScreen({
  entrepreneurName,
  onNameChange,
  businessType,
  onBusinessChange,
  location,
  onLocationChange,
  capital,
  onCapitalChange,
  onMetricsChange,
  gender,
  onGenderChange,
  category,
  onCategoryChange,
  onSubmit,
  lang = 'en'
}) {
  const selectedCategory = SOCIAL_CATEGORIES.find(c => c.id === category);
  const selectedGender = GENDER_OPTIONS.find(g => g.id === gender);

  return (
    <section className="input-screen">
      <div className="subpage-top-nav" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <button 
          type="button" 
          className="back-btn" 
          onClick={onSubmit ? () => window.history.back() : undefined}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', border: '2px solid var(--ink)', borderRadius: '4px', background: 'var(--paper-card)', fontWeight: '800', cursor: 'pointer' }}
        >
          <span>←</span>
          <span>{lang === 'hi' ? 'वापस' : 'Back'}</span>
        </button>
      </div>

      <div className="input-head">
        <h2>{t('inputHeading', lang)}</h2>
        <p>{t('inputSubhead', lang)}</p>
      </div>

      <div className="input-layout">
        <div className="panel form-panel">

          {/* Entrepreneur Name Field */}
          <div className="field">
            <div className="field-label-row">
              <label htmlFor="f-name">
                {t('labelName', lang)}
              </label>
            </div>
            <div className="input-with-voice">
              <input
                type="text"
                id="f-name"
                value={entrepreneurName}
                onChange={(e) => onNameChange(e.target.value)}
                placeholder={lang === 'hi' ? 'उदा. रमेश शर्मा' : 'e.g. Ramesh Sharma'}
              />
              <VoiceInput
                lang={lang}
                onTranscript={(text) => onNameChange(text)}
              />
            </div>
          </div>

          {/* Gender Selection — Exact Match to Image 1 */}
          <div className="field">
            <label>{t('labelGender', lang)}</label>
            <div className="gender-pill-group" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '8px' }}>
              
              {/* Female */}
              <div 
                className={`gender-radio-pill ${gender === 'female' ? 'active' : ''}`}
                onClick={() => onGenderChange('female')}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  background: gender === 'female' ? 'var(--indigo)' : 'var(--paper-card)',
                  color: gender === 'female' ? '#fff' : 'var(--indigo-deep)',
                  border: '1.5px solid var(--indigo)', borderRadius: '999px',
                  padding: '9px 18px', cursor: 'pointer', fontWeight: '700', fontSize: '0.92rem'
                }}
              >
                <div style={{ width: '18px', height: '18px', borderRadius: '50%', border: `2px solid ${gender === 'female' ? '#fff' : 'var(--indigo)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {gender === 'female' && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fff' }} />}
                </div>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="7" r="4"/>
                  <path d="M5.5 21v-2a6.5 6.5 0 0 1 13 0v2"/>
                  <path d="M8 12c-2 2-2 5-1 8"/>
                  <path d="M16 12c2 2 2 5 1 8"/>
                </svg>
                <span>{lang === 'hi' ? 'महिला (महिला उद्यमी)' : 'Female (Woman-led)'}</span>
              </div>

              {/* Male */}
              <div 
                className={`gender-radio-pill ${gender === 'male' ? 'active' : ''}`}
                onClick={() => onGenderChange('male')}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  background: gender === 'male' ? 'var(--indigo)' : 'var(--paper-card)',
                  color: gender === 'male' ? '#fff' : 'var(--indigo-deep)',
                  border: '1.5px solid var(--indigo)', borderRadius: '999px',
                  padding: '9px 18px', cursor: 'pointer', fontWeight: '700', fontSize: '0.92rem'
                }}
              >
                <div style={{ width: '18px', height: '18px', borderRadius: '50%', border: `2px solid ${gender === 'male' ? '#fff' : 'var(--indigo)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {gender === 'male' && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fff' }} />}
                </div>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="7" r="4"/>
                  <path d="M6 21v-2a6 6 0 0 1 12 0v2"/>
                </svg>
                <span>{lang === 'hi' ? 'पुरुष' : 'Male'}</span>
              </div>

              {/* Other / Prefer not to say — NO ICON */}
              <div 
                className={`gender-radio-pill ${gender === 'other' ? 'active' : ''}`}
                onClick={() => onGenderChange('other')}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  background: gender === 'other' ? 'var(--indigo)' : 'var(--paper-card)',
                  color: gender === 'other' ? '#fff' : 'var(--indigo-deep)',
                  border: '1.5px solid var(--indigo)', borderRadius: '999px',
                  padding: '9px 18px', cursor: 'pointer', fontWeight: '700', fontSize: '0.92rem'
                }}
              >
                <div style={{ width: '18px', height: '18px', borderRadius: '50%', border: `2px solid ${gender === 'other' ? '#fff' : 'var(--indigo)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {gender === 'other' && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fff' }} />}
                </div>
                <span>{lang === 'hi' ? 'अन्य / बताना नहीं चाहते' : 'Other / Prefer not to say'}</span>
              </div>

            </div>
            {gender === 'female' && (
              <div className="category-benefit-box" style={{ marginTop: '10px' }}>
                <span>🎯</span>
                <span>Special PMEGP 35% Capital Subsidy + Stand-Up India priority bank quota</span>
              </div>
            )}
          </div>

          {/* Social Category / Caste Selection — Pill Buttons */}
          <div className="field">
            <label>{t('labelCategory', lang)}</label>
            <div className="pill-group">
              {SOCIAL_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`pill-btn ${category === cat.id ? 'active' : ''}`}
                  onClick={() => onCategoryChange(cat.id)}
                >
                  <span>{cat.labels[lang] || cat.labels.en}</span>
                </button>
              ))}
            </div>
            {selectedCategory && selectedCategory.id !== 'general' && (
              <div className="category-benefit-box">
                <span>🏛️</span>
                <span>{selectedCategory.schemeHighlight}</span>
              </div>
            )}
          </div>

          {/* Business Type */}
          <div className="field">
            <label htmlFor="f-business">
              {t('labelBusiness', lang)}
            </label>
            <select
              id="f-business"
              value={businessType}
              onChange={(e) => onBusinessChange(e.target.value)}
            >
              {BUSINESS_MODELS.map((opt) => (
                <option key={opt.id} value={opt.value}>
                  {opt.labels[lang] || opt.labels.en}
                </option>
              ))}
            </select>
          </div>

          {/* Location Picker with Auto GPS & Manual */}
          <div className="field">
            <label htmlFor="f-location">
              {t('labelLocation', lang)}
            </label>
            <LocationPicker
              location={location}
              onChange={onLocationChange}
              onMetricsChange={onMetricsChange}
              lang={lang}
            />
          </div>

          {/* Capital Input with Synchronized Range Slider */}
          <div className="field">
            <label htmlFor="f-capital">
              {t('labelCapital', lang)}
            </label>
            <div className="capital-row">
              <span className="currency">₹</span>
              <input
                type="number"
                id="f-capital"
                value={capital}
                step="5000"
                min="20000"
                max="500000"
                onChange={(e) => onCapitalChange(Number(e.target.value))}
              />
            </div>
            <div className="range-wrap">
              <input
                type="range"
                id="f-capital-range"
                min="20000"
                max="500000"
                step="5000"
                value={capital}
                onChange={(e) => onCapitalChange(Number(e.target.value))}
              />
              <div className="range-labels">
                <span>₹20,000</span>
                <span>₹2,50,000</span>
                <span>₹5,00,000</span>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="form-submit">
            <button
              id="submit-assessment-btn"
              type="button"
              className="btn"
              onClick={onSubmit}
            >
              <span>{t('btnSubmit', lang)}</span>
              <span style={{ fontSize: '1.1rem' }}>→</span>
            </button>
          </div>

        </div>

        {/* Side Note */}
        <div className="side-note">
          <h3>{lang === 'hi' ? 'खाता क्या जांचता है' : 'What Khata checks'}</h3>
          <p>
            {lang === 'hi'
              ? 'यह कोई सामान्य लोन कैलकुलेटर नहीं है। खाता आंकड़ों से पहले आपके व्यापार और जगह को समझता है।'
              : 'This isn\'t a generic loan calculator. Khata looks at your specific trade and place before touching the numbers.'}
          </p>
          <ul>
            <li>
              {lang === 'hi'
                ? 'आपके स्थान के पास घरों और आवाजाही की मांग'
                : 'Household and footfall demand near your location'}
            </li>
            <li>
              {lang === 'hi'
                ? 'लिंग व जाति वर्ग से विशेष सरकारी योजना पात्रता'
                : 'Gender & social category-specific govt scheme eligibility'}
            </li>
            <li>
              {lang === 'hi'
                ? 'आपकी पूंजी का बुद्धिमान बंटवारा — माल, सज्जा, मार्केटिंग व बफ़र'
                : 'Smart capital split — inventory, setup, marketing & cash buffer'}
            </li>
            <li>
              {lang === 'hi'
                ? 'पूंजी कम हो तो सरकारी लोन/सब्सिडी व वैकल्पिक व्यापार सुझाव'
                : 'If capital falls short — matched govt loans & alternate business ideas'}
            </li>
            <li>
              {lang === 'hi'
                ? 'सिबिल स्कोर व सरकारी सब्सिडी (NSFDC / PMEGP) पात्रता'
                : 'CIBIL score validation & government scheme eligibility'}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default InputScreen;
