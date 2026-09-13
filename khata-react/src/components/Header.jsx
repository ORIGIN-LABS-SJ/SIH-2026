import React, { useState, useRef, useEffect } from 'react';
import { LANGUAGES, t } from '../utils/translations';

export function Header({ 
  lang, 
  onLangChange, 
  entrepreneurName, 
  onOpenChat,
  onNavigate,
  activeScreen
}) {
  const [langOpen, setLangOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = LANGUAGES.find(l => l.code === lang) || LANGUAGES[0];

  return (
    <>
      <div className="sih-accreditation-banner" style={{ background: 'linear-gradient(90deg, #152C40 0%, #1F3F5C 50%, #2B5278 100%)', color: '#FAF7EE', padding: '6px 20px', borderBottom: '1.5px solid var(--ink)', fontSize: '0.78rem', fontWeight: 700 }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ background: 'var(--marigold)', color: 'var(--ink)', padding: '2px 8px', borderRadius: '4px', fontWeight: 900, fontSize: '0.72rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>SIH 2026</span>
            <span><strong>Problem Statement ID: SIH26091</strong> · Ministry of Social Justice and Empowerment</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', opacity: 0.92, fontSize: '0.74rem' }}>
            <span>🏛️ Priority Beneficiaries: OBC · SC · ST · Rural Artisans &amp; Women</span>
            <span style={{ background: 'rgba(255,255,255,0.18)', padding: '2px 7px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.3)' }}>Govt. of India</span>
          </div>
        </div>
      </div>
      <header className="site">
        <div className="site-inner">
          <div className="brand" onClick={() => onNavigate('landing')}>
            <span className="brand-mark">MicroNiti</span>
            <span className="brand-tag">
              {t('brandTag', lang)}
            </span>
          </div>

        <div className="header-right">
          {entrepreneurName && (
            <div className="entrepreneur-badge">
              <span className="entrepreneur-dot"></span>
              <span>{entrepreneurName}</span>
            </div>
          )}

          {activeScreen !== 'landing' && (
            <button 
              type="button" 
              className="nav-pill-btn"
              onClick={() => onNavigate('landing')}
            >
              {t('navHome', lang)}
            </button>
          )}

          <button 
            type="button" 
            className="nav-pill-btn"
            onClick={onOpenChat}
            style={{ background: 'var(--marigold-light)', borderColor: 'var(--marigold-deep)' }}
          >
            <span>💬</span>
            <span>{t('navAdvisor', lang)}</span>
          </button>

          {/* Multilingual Dropdown */}
          <div className="lang-select-wrap" ref={dropdownRef}>
            <button
              type="button"
              className="lang-dropdown-btn"
              onClick={() => setLangOpen(!langOpen)}
              aria-label="Select Language"
            >
              <span className="globe-icon">🌐</span>
              <span>{currentLang.native}</span>
              <span style={{ fontSize: '0.7rem' }}>{langOpen ? '▲' : '▼'}</span>
            </button>

            {langOpen && (
              <div className="lang-dropdown-menu">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    className={`lang-menu-item ${lang === l.code ? 'active' : ''}`}
                    onClick={() => { onLangChange(l.code); setLangOpen(false); }}
                  >
                    <span>{l.label}</span>
                    <span className="lang-native">{l.native}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
    </>
  );
}

export default Header;
