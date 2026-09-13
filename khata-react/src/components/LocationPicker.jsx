import React, { useState } from 'react';
import VoiceInput from './VoiceInput';

const POPULAR_INDIAN_LOCATIONS = [
  { name: "Varanasi Old Bazaar, Uttar Pradesh", tier: "Urban", households: "~3,200", distance: "250m", competition: 5 },
  { name: "Meerut Cantt, Uttar Pradesh", tier: "Semi-Urban", households: "~2,100", distance: "450m", competition: 3 },
  { name: "Pune Saswad Road, Maharashtra", tier: "Urban", households: "~2,800", distance: "380m", competition: 4 },
  { name: "Sojat City, Rajasthan", tier: "Semi-Urban", households: "~1,400", distance: "600m", competition: 2 },
  { name: "Madurai Meenakshi Gate, Tamil Nadu", tier: "Urban", households: "~3,500", distance: "300m", competition: 6 },
  { name: "Patna Danapur, Bihar", tier: "Semi-Urban", households: "~2,600", distance: "500m", competition: 3 },
  { name: "Indore Rajwada, Madhya Pradesh", tier: "Urban", households: "~4,000", distance: "200m", competition: 7 },
  { name: "Barmer Rural, Rajasthan", tier: "Rural", households: "~950", distance: "1.2km", competition: 1 },
];

export function LocationPicker({ location, onChange, onMetricsChange, lang = 'en' }) {
  const [isLocating, setIsLocating] = useState(false);
  const [mode, setMode] = useState('manual');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  const handleDetectGPS = () => {
    if (!navigator.geolocation) {
      setStatusMsg(lang === 'hi' ? 'आपके ब्राउज़र में जीपीएस समर्थित नहीं है।' : 'Geolocation is not supported by your browser.');
      return;
    }

    setIsLocating(true);
    setStatusMsg(lang === 'hi' ? 'स्थान खोजा जा रहा है...' : 'Detecting GPS coordinates...');

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        try {
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=14`);
          const data = await res.json();
          const city = data.address.city || data.address.town || data.address.village || data.address.suburb || "Local Area";
          const state = data.address.state || "India";
          const resolved = `${city}, ${state} (GPS Verified)`;
          onChange(resolved);
          setMode('gps');
          setIsLocating(false);
          setStatusMsg(`📍 ${city}, ${state}`);
          if (onMetricsChange) {
            onMetricsChange({
              households: "~2,200",
              distance: "400m",
              competition: 3,
              tier: "Verified Local"
            });
          }
        } catch (e) {
          const coords = `${lat.toFixed(4)}, ${lng.toFixed(4)} (GPS Verified)`;
          onChange(coords);
          setMode('gps');
          setIsLocating(false);
          setStatusMsg(`📍 ${coords}`);
        }
      },
      (err) => {
        console.warn("GPS error:", err);
        setIsLocating(false);
        setStatusMsg(lang === 'hi' ? 'जीपीएस अनुमति नहीं मिली। कृपया हाथ से नाम लिखें।' : 'Location permission denied. Please type city/bazaar name.');
      },
      { timeout: 8000 }
    );
  };

  return (
    <div className="location-picker">
      <div className="location-tabs">
        <button
          type="button"
          className={`loc-tab ${mode === 'gps' ? 'active' : ''}`}
          onClick={handleDetectGPS}
          disabled={isLocating}
        >
          {isLocating ? '⏳ ' : '📍 '}
          {lang === 'hi' ? 'ऑटो GPS स्थान पहचानें' : 'Auto-detect GPS Location'}
        </button>
        <button
          type="button"
          className={`loc-tab ${mode === 'manual' ? 'active' : ''}`}
          onClick={() => setMode('manual')}
        >
          ✍️ {lang === 'hi' ? 'हाथ से दर्ज करें' : 'Manual Entry'}
        </button>
      </div>

      <div className="input-with-icon">
        <input
          type="text"
          value={location}
          onChange={(e) => {
            onChange(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          placeholder={lang === 'hi' ? "शहर, कस्बा या बाजार का नाम लिखें..." : "Enter city, town, or market area..."}
          className="location-input"
        />
        <VoiceInput onTranscript={(text) => onChange(text)} lang={lang} />
      </div>

      {statusMsg && (
        <div style={{ fontSize: '0.78rem', color: 'var(--ink-soft)', marginTop: '4px', fontWeight: 600 }}>
          {statusMsg}
        </div>
      )}

      {showSuggestions && (
        <div className="location-chips">
          <div className="chips-label">
            {lang === 'hi' ? 'त्वरित चयन:' : 'Quick Select:'}
          </div>
          <div className="chips-scroll">
            {POPULAR_INDIAN_LOCATIONS.map((loc, idx) => (
              <button
                key={idx}
                type="button"
                className="loc-chip"
                onClick={() => {
                  onChange(loc.name);
                  if (onMetricsChange) {
                    onMetricsChange({
                      households: loc.households,
                      distance: loc.distance,
                      competition: loc.competition,
                      tier: loc.tier
                    });
                  }
                  setShowSuggestions(false);
                }}
              >
                {loc.name.split(',')[0]}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default LocationPicker;
