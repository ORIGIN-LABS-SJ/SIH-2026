# -*- coding: utf-8 -*-
import sys, os

try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

print("Updating Gemini client prompt in index.html...")

with open("index.html", "r", encoding="utf-8") as f:
    text = f.read()

start_str = "    // 1. If user configured Gemini API Key, query Google Gemini directly with dialect matching"
end_str = "    // 2. If Gemini direct didn't reply, query FastAPI backend ONLY if IS_LOCAL"

idx_start = text.find(start_str)
idx_end = text.find(end_str)

new_gemini_section = '''    // 1. If user configured Gemini API Key, query Google Gemini directly with dialect matching
    if(savedKey && savedKey.length > 10){
      const langNames = {
        hi: "Standard Hindi (हिन्दी)",
        mwr: "Marwari / Rajasthani (मारवाड़ी)",
        gu: "Gujarati (ગુજરાતી)",
        mr: "Marathi (मराठी)",
        bn: "Bengali (বাংলা)",
        pa: "Punjabi (ਪੰਜਾਬੀ)",
        ta: "Tamil (தமிழ்)",
        te: "Telugu (తెలుగు)",
        kn: "Kannada (ಕನ್ನಡ)",
        en: "English"
      };
      const targetLangName = langNames[detectedDialect] || "Standard Hindi (हिन्दी)";

      const candidateModels = ['gemini-2.0-flash', 'gemini-2.5-flash', 'gemini-1.5-flash-latest', 'gemini-1.5-pro', 'gemini-2.0-flash-exp'];
      for(const mName of candidateModels){
        try {
          const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${mName}:generateContent?key=${savedKey.trim()}`;
          const gPayload = {
            system_instruction: {
              parts: [{
                text: `You are Sahayak AI Advisor (सहायक साथी), India's premier conversational AI Business and Financial Advisor for micro-entrepreneurs.

STRICT LANGUAGE & DIALECT MATCHING RULES (CRITICAL):
1. IF THE USER ASKS IN HINDI OR HINGLISH (e.g. 'मेरी दुकान है', 'लोन कैसे मिलेगा', 'meri dukan hai', 'kitna loan mil sakta hai', 'nayi machine leni hai'):
   - You MUST respond in pure, polite, natural HINDI in Devanagari script ('नमस्ते जी! आपके व्यवसाय के लिए...').
   - ABSOLUTE PROHIBITION: DO NOT use Marwari or Rajasthani phrases (NEVER say 'घणी खम्मा सा', 'थारी', 'म्हारी', 'कोनी', 'पड़सी') when the user asks in Hindi!
2. IF AND ONLY IF THE USER WRITES IN AUTHENTIC MARWARI / RAJASTHANI DIALECT (e.g. 'म्हारी दुकान', 'घणी खम्मा', 'mhari dukan', 'thari', 'mahina ro'):
   - Respond in warm, respectful Marwari ('घणी खम्मा सा! थारी दुकान वास्ते...').
3. IF THE USER WRITES IN GUJARATI:
   - Respond in GUJARATI ('નમસ્તે જી! તમારી દુકાન માટે...').
4. IF THE USER WRITES IN ENGLISH:
   - Respond in clear, professional ENGLISH ('Greetings! For your business...').
5. FOR ANY OTHER REGIONAL LANGUAGE (Marathi, Bengali, Punjabi, Tamil, Telugu, Kannada):
   - Respond in that respective language.

DOMAIN ACCURACY & FINANCIAL CALCULATIONS:
- Extract user's exact trade (tailor, kirana, dairy, food cart, mobile repair, artisan, etc.), income, and capital.
- Tailoring Trade: PM Vishwakarma Yojana (₹15,000 FREE e-RUPI toolkit voucher + 5% subsidized loan + training stipend). Calculate exact EMI.
- Dairy & Livestock: Animal Husbandry KCC at 4% subsidized interest + NABARD/AHIDF 25%-33.3% capital subsidy.
- Kirana & Stores: PM MUDRA Kishore (up to ₹5L collateral-free) + PMEGP 35% subsidy.
- Street Vendors: PM SVANidhi (₹10k, ₹20k, ₹50k) + 7% interest subvention + ₹1,200/yr UPI cashback.
- Thin-File / Low CIBIL: Explain Sahayak Alternative ML Underwriting & priority sector lending.
- Format with clean bullet points, polite tone, and actionable steps (CSC / Jan Seva Kendra / Bank).`
              }]
            },
            contents: [{
              parts: [{
                text: `[Target Response Language: ${targetLangName}]\\n[User Selected Interface Language: ${currentLang}]\\nUser Question: ${msg}\\n\\nStrict Rule: Answer in ${targetLangName}. If the question is in Hindi or Hinglish, reply ONLY in Hindi (Devanagari script), DO NOT use Marwari or 'घणी खम्मा सा'.`
              }]
            }],
            generationConfig: {
              temperature: 0.35,
              maxOutputTokens: 1000
            }
          };

          const gRes = await fetch(geminiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(gPayload)
          });

          if(gRes.ok){
            const gData = await gRes.json();
            const gText = gData?.candidates?.[0]?.content?.parts?.[0]?.text;
            if(gText && gText.trim().length > 20){
              replyText = gText;
              sourceTag = `✨ Google Gemini (${mName})`;
              break;
            }
          }
        } catch(gErr) {
          console.warn(`[Client Gemini ${mName} error]:`, gErr);
        }
      }
    }

'''

if idx_start != -1 and idx_end != -1:
    new_text = text[:idx_start] + new_gemini_section + text[idx_end:]
    with open("index.html", "w", encoding="utf-8") as f:
        f.write(new_text)
    print("Successfully replaced Gemini client section in index.html!")
else:
    print("Error: Could not locate markers in index.html.")
