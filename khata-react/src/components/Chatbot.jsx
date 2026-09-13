import React, { useState, useRef, useEffect } from 'react';
import VoiceInput from './VoiceInput';

const INITIAL_MESSAGES = {
  en: [
    {
      sender: 'bot',
      text: "Namaste! I am Khata Saathi, your AI Business Advisor. Powered by FastAPI & Google Gemini 1.5 Flash. Ask me about shop feasibility, NSFDC margin-money loans, 35% PMEGP subsidies, or CIBIL requirements."
    }
  ],
  hi: [
    {
      sender: 'bot',
      text: "नमस्ते! मैं खाता साथी हूँ, आपका AI व्यावसायिक सलाहकार। मुझसे दुकान की योजना, 35% PMEGP सब्सिडी, 5% विश्वकर्मा लोन या बैंक दस्तावेजों के बारे में कुछ भी पूछें।"
    }
  ]
};

export default function Chatbot({ isOpen, onClose, lang = 'en', entrepreneurName = '', businessData = {} }) {
  const [messages, setMessages] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [geminiKey, setGeminiKey] = useState(localStorage.getItem('khata_gemini_key') || '');
  const [showKeyModal, setShowKeyModal] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    const list = INITIAL_MESSAGES[lang] || INITIAL_MESSAGES.en;
    setMessages([...list]);
  }, [lang]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = async (textToSend) => {
    const text = textToSend || inputVal;
    if (!text.trim()) return;

    const newMsgs = [...messages, { sender: 'user', text: text.trim() }];
    setMessages(newMsgs);
    setInputVal('');
    setIsTyping(true);

    let botReply = '';

    try {
      const res = await fetch('http://localhost:5000/api/ai-advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text.trim(),
          language: lang,
          geminiApiKey: geminiKey,
          entrepreneurName: entrepreneurName || 'Entrepreneur',
          businessType: businessData.sector || 'Retail Store',
          location: businessData.location || 'India',
          capital: businessData.investment || 150000,
          category: businessData.category || 'OBC',
          gender: businessData.gender || 'Female',
          cibilScore: businessData.cibil || 720
        })
      });

      if (res.ok) {
        const data = await res.json();
        botReply = data.reply || data.response;
      }
    } catch (err) {
      console.warn('[FastAPI AI Backend Offline]', err);
    }

    // Fallback if backend offline
    if (!botReply) {
      botReply = lang === 'hi'
        ? `नमस्ते ${entrepreneurName ? entrepreneurName + ' जी' : ''}! PMEGP योजना में आपको 35% सरकारी पूंजी सब्सिडी (गैर-वापसी योग्य) मिल सकती है। बैंक में आधार, पैन, और निःशुल्क उद्यम रजिस्ट्रेशन प्रस्तुत करें।`
        : `Greetings ${entrepreneurName || ''}! Under the PMEGP scheme, you can qualify for up to 35% non-repayable capital subsidy with zero collateral up to ₹10-20 Lakhs.`;
    }

    setIsTyping(false);
    setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
  };

  const handleSaveKey = () => {
    localStorage.setItem('khata_gemini_key', geminiKey.trim());
    setShowKeyModal(false);
    alert('Google Gemini API Key saved! Live AI generation is now active.');
  };

  const chips = lang === 'hi' 
    ? ["क्या 650 सिबिल पर लोन मिलेगा?", "35% PMEGP सब्सिडी कैसे प्राप्त करें?", "किराना दुकान के लिए आवश्यक लाइसेंस", "विश्वकर्मा 5% लोन की पात्रता"]
    : ["Can I get loan with 650 CIBIL?", "How to get 35% PMEGP subsidy?", "Licenses needed for grocery shop?", "PM Vishwakarma 5% loan eligibility"];

  if (!isOpen) return null;

  return (
    <div className="chatbot-drawer-overlay" onClick={onClose}>
      <div className="chatbot-drawer" onClick={e => e.stopPropagation()}>
        <div className="chatbot-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '1.4rem' }}>💬</span>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800 }}>Khata Saathi (AI)</h3>
              <span style={{ fontSize: '0.72rem', color: 'var(--marigold)' }}>
                ⚡ FastAPI & Gemini 1.5 Flash
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button 
              type="button" 
              onClick={() => setShowKeyModal(true)}
              style={{
                background: 'rgba(255,255,255,0.15)',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: '999px',
                padding: '3px 9px',
                fontSize: '0.72rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
              title="Configure free Google Gemini API Key"
            >
              ⚙️ AI Key
            </button>
            <button type="button" className="close-btn" onClick={onClose} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
          </div>
        </div>

        {/* Modal for setting API key */}
        {showKeyModal && (
          <div style={{ padding: '16px', background: 'var(--paper-alt)', borderBottom: '2px solid var(--ink)' }}>
            <h4 style={{ margin: '0 0 8px', fontSize: '0.92rem' }}>Configure Google Gemini Key</h4>
            <p style={{ fontSize: '0.78rem', color: 'var(--ink-soft)', margin: '0 0 10px' }}>
              Enter your free key from <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" style={{ color: 'var(--indigo)', fontWeight: 700 }}>Google AI Studio ↗</a>
            </p>
            <div style={{ display: 'flex', gap: '6px' }}>
              <input 
                type="password" 
                value={geminiKey} 
                onChange={e => setGeminiKey(e.target.value)} 
                placeholder="AIzaSy..." 
                style={{ flex: 1, padding: '6px 8px', fontSize: '0.85rem', border: '1.5px solid var(--ink)', borderRadius: '4px' }}
              />
              <button type="button" onClick={handleSaveKey} style={{ background: 'var(--indigo)', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', fontWeight: 700, cursor: 'pointer' }}>Save</button>
              <button type="button" onClick={() => setShowKeyModal(false)} style={{ background: 'none', border: '1px solid var(--ink)', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer' }}>Cancel</button>
            </div>
          </div>
        )}

        <div className="chatbot-chips">
          {chips.map((c, i) => (
            <button key={i} type="button" className="chip-btn" onClick={() => handleSend(c)}>
              {c}
            </button>
          ))}
        </div>

        <div className="chatbot-messages">
          {messages.map((m, i) => (
            <div key={i} className={`msg-bubble ${m.sender}`}>
              <div style={{ whiteSpace: 'pre-wrap', lineHeight: 1.5 }}>{m.text}</div>
            </div>
          ))}
          {isTyping && (
            <div className="msg-bubble bot typing">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span style={{ fontSize: '0.75rem', marginLeft: '6px', color: 'var(--ink-soft)' }}>
                {lang === 'hi' ? 'खाता साथी उत्तर तैयार कर रहा है...' : 'Khata Saathi is analyzing...'}
              </span>
            </div>
          )}
          <div ref={endRef} />
        </div>

        <div className="chatbot-input-bar">
          <input
            type="text"
            placeholder={lang === 'hi' ? "व्यवसाय, लोन या सब्सिडी के बारे में पूछें..." : "Ask about schemes, subsidies, licenses..."}
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
          />
          <VoiceInput onTranscript={text => setInputVal(text)} />
          <button type="button" className="send-btn" onClick={() => handleSend()} disabled={isTyping}>
            {isTyping ? '⏳' : '➤'}
          </button>
        </div>
      </div>
    </div>
  );
}
