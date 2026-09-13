import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroLanding from './components/HeroLanding';
import InputScreen from './components/InputScreen';
import ResultsDashboard from './components/ResultsDashboard';
import Chatbot from './components/Chatbot';
import { SCHEMES_DATA } from './components/SchemeSelector';
import { t } from './utils/translations';

export function App() {
  const [lang, setLang] = useState('en');
  const [activeScreen, setActiveScreen] = useState('landing'); // 'landing' | 'input' | 'results'
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Business state - Blank by default for real users
  const [entrepreneurName, setEntrepreneurName] = useState('');
  const [businessType, setBusinessType] = useState('Grocery & provisions store');
  const [location, setLocation] = useState('');
  const [capital, setCapital] = useState(100000);
  const [gender, setGender] = useState('');
  const [category, setCategory] = useState('');
  const [cibilScore, setCibilScore] = useState(720);
  const [hasCompletedAssessment, setHasCompletedAssessment] = useState(false);
  const [selectedScheme, setSelectedScheme] = useState(SCHEMES_DATA[0]);
  
  // Demographic & Scheme targeting state
  const [gender, setGender] = useState('female');
  const [category, setCategory] = useState('obc');

  const [metrics, setMetrics] = useState({
    households: '~1,400',
    distance: '600m',
    competition: 2,
    tier: 'Semi-Urban'
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.className = `lang-${lang}`;
  }, [lang]);

  const handleNavigate = (screen) => {
    setActiveScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSwitchBusiness = (newBusinessType) => {
    setBusinessType(newBusinessType);
    setActiveScreen('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`khata-app lang-${lang}`}>
      <Header
        lang={lang}
        onLangChange={setLang}
        entrepreneurName={hasCompletedAssessment ? entrepreneurName : ''}
        businessData={{
          sector: hasCompletedAssessment ? businessType : '',
          location: hasCompletedAssessment ? location : '',
          investment: hasCompletedAssessment ? capital : 0,
          category: hasCompletedAssessment ? category : '',
          gender: hasCompletedAssessment ? gender : '',
          cibil: cibilScore
        }}
        onOpenChat={() => setIsChatOpen(true)}
        onNavigate={handleNavigate}
        activeScreen={activeScreen}
      />

      <main className="wrap">
        {activeScreen === 'landing' && (
          <HeroLanding
            onStartAssessment={() => {
              setEntrepreneurName('');
              setLocation('');
              setCapital(100000);
              setGender('');
              setCategory('');
              setHasCompletedAssessment(false);
              handleNavigate('input');
            }}
            onViewSample={() => {
              setEntrepreneurName('Ramesh Sharma');
              setBusinessType('Grocery & provisions store');
              setLocation('Sojat City, Rajasthan');
              setCapital(180000);
              setGender('female');
              setCategory('OBC');
              setHasCompletedAssessment(true);
              handleNavigate('results');
            }}
            onOpenChat={() => setIsChatOpen(true)}
            lang={lang}
          />
        )}

        {activeScreen === 'input' && (
          <InputScreen
            entrepreneurName={hasCompletedAssessment ? entrepreneurName : ''}
        businessData={{
          sector: hasCompletedAssessment ? businessType : '',
          location: hasCompletedAssessment ? location : '',
          investment: hasCompletedAssessment ? capital : 0,
          category: hasCompletedAssessment ? category : '',
          gender: hasCompletedAssessment ? gender : '',
          cibil: cibilScore
        }}
            onNameChange={setEntrepreneurName}
            businessType={businessType}
            onBusinessChange={setBusinessType}
            location={location}
            onLocationChange={setLocation}
            capital={capital}
            onCapitalChange={setCapital}
            onMetricsChange={setMetrics}
            gender={gender}
            onGenderChange={setGender}
            category={category}
            onCategoryChange={setCategory}
            onSubmit={() => handleNavigate('results')}
            lang={lang}
          />
        )}

        {activeScreen === 'results' && (
          <ResultsDashboard
            entrepreneurName={hasCompletedAssessment ? entrepreneurName : ''}
        businessData={{
          sector: hasCompletedAssessment ? businessType : '',
          location: hasCompletedAssessment ? location : '',
          investment: hasCompletedAssessment ? capital : 0,
          category: hasCompletedAssessment ? category : '',
          gender: hasCompletedAssessment ? gender : '',
          cibil: cibilScore
        }}
            businessType={businessType}
            location={location}
            capital={capital}
            selectedScheme={selectedScheme}
            onSelectScheme={setSelectedScheme}
            cibilScore={cibilScore}
            onCibilChange={setCibilScore}
            metrics={metrics}
            gender={gender}
            category={category}
            onSwitchBusiness={handleSwitchBusiness}
            onEditAnswers={() => handleNavigate('input')}
            onOpenChat={() => setIsChatOpen(true)}
            lang={lang}
          />
        )}
      </main>

      {/* Floating Chat Trigger */}
      <button
        type="button"
        className="chatbot-floating-trigger"
        onClick={() => setIsChatOpen(true)}
        aria-label="Open Khata Saathi Chatbot"
      >
        <span style={{ fontSize: '1.2rem' }}>💬</span>
        <span>{t('navAdvisor', lang)}</span>
      </button>

      {/* AI Advisory Chatbot Drawer */}
      <Chatbot
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        lang={lang}
        entrepreneurName={hasCompletedAssessment ? entrepreneurName : ''}
        businessData={{
          sector: hasCompletedAssessment ? businessType : '',
          location: hasCompletedAssessment ? location : '',
          investment: hasCompletedAssessment ? capital : 0,
          category: hasCompletedAssessment ? category : '',
          gender: hasCompletedAssessment ? gender : '',
          cibil: cibilScore
        }}
        businessType={businessType}
        location={location}
        capital={capital}
        gender={gender}
        category={category}
        cibilScore={cibilScore}
      />

      <footer>
        <div className="footer-inner">
          <div>
            <strong>Khata React Edition</strong> · {lang === 'hi' ? 'सूक्ष्म उद्यमियों के लिए व्यावसायिक और वित्तीय सलाहकार' : 'Business and Financial Advisory for Hyperlocal Entrepreneurs'}
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--ink-soft)' }}>
            {lang === 'hi'
              ? 'NSFDC, PMEGP, मुद्रा व सरकारी योजनाओं के मार्गदर्शन हेतु प्रोटोटाइप'
              : 'Prototype for SIH26091 — Built with React, Web Speech API & Government Micro-credit Schemes'}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
