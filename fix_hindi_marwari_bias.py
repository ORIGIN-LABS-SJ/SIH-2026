# -*- coding: utf-8 -*-
import sys, os, re

try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

print("Updating index.html and ai_service.py to fix Hindi -> Marwari bias...")

# =========================================================================
# 1. UPDATE index.html
# =========================================================================
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

old_dialect_fn_regex = r"function detectClientDialect\(text, fallbackLang\)\{[\s\S]*?return fallbackLang \|\| 'hi';\s*\}"

new_dialect_fn = """function detectClientDialect(text, fallbackLang){
    if(!text) return fallbackLang || 'hi';
    const tLower = text.toLowerCase().trim();

    // 1. English detection: purely English queries
    const engWords = /\\b(i have|my shop|i earn|want to buy|how to get|loan scheme|subsidy|business|capital|bank|interest|which scheme|cibil score|need loan|can i get|what is the)\\b/i;
    if(engWords.test(tLower) && !/\\b(dukan|silai|yojana|yojna|karo|batao|chahiye|hai|kitti|kiti|meri|mhari)\\b/i.test(tLower)){
      return 'en';
    }

    // 2. Strict Marwari / Rajasthani markers (Devanagari & authentic Romanized)
    // NOTE: Common Hindi words like 'mari', 'meri', 'kamai', 'kamau', 'saahab' are excluded!
    const mwrDev = ["म्हारी", "म्हारो", "म्हाने", "थारी", "थारो", "थाने", "घणी खम्मा", "खम्मा घणी", "लेणी", "लेणो", "लेवणी", "कोनी", "पड़सी", "आवसी", "दुकान री", "महीना रो", "दुकान रो", "काईं"];
    const mwrRom = ["mhari", "mharo", "mhare", "thari", "tharo", "thare", "ghani khamma", "khamma ghani", "koni", "hukum", "padsi", "aavasi", "ri dukan", "ro kaam", "mahina ro", "mahina ri", "leno hai", "levani", "mhari dukan", "thari dukan"];
    if(mwrDev.some(w => text.includes(w)) || mwrRom.some(w => new RegExp('\\\\b' + w + '\\\\b', 'i').test(tLower))){
      return 'mwr';
    }

    // 3. Gujarati (Unicode or distinctive Gujarati words)
    if(/[\\u0A80-\\u0AFF]/.test(text) || /\\b(mari dukan chhe|tamari dukan|kamau chhu|levi chhe|karvu chhe|chhe|nathi|ketla rupiya)\\b/i.test(tLower)){
      return 'gu';
    }

    // 4. Punjabi (Gurmukhi or distinctive phrases)
    if(/[\\u0A00-\\u0A7F]/.test(text) || /\\b(kamanda haan|laini hai|karni hai|navi machine|chahida hai|veera)\\b/i.test(tLower)){
      return 'pa';
    }

    // 5. Bengali
    if(/[\\u0980-\\u09FF]/.test(text) || /\\b(amar dokan|notun machine|kinte chai|korte chai|taka kamai)\\b/i.test(tLower)){
      return 'bn';
    }

    // 6. Marathi
    if(/\\b(माझी दुकान|माझ्या दुकाना|घ्यायची|करायचे|दुकान आहे|नाही|majhi dukan|kamavto|ghyaychi ahe)\\b/i.test(tLower)){
      return 'mr';
    }

    // 7. South Indian (Tamil, Telugu, Kannada)
    if(/[\\u0B80-\\u0BFF]/.test(text) || /\\b(ennoda kadai|venum)\\b/i.test(tLower)) return 'ta';
    if(/[\\u0C00-\\u0C7F]/.test(text) || /\\b(naa shop|kaavali)\\b/i.test(tLower)) return 'te';
    if(/[\\u0C80-\\u0CFF]/.test(text)) return 'kn';

    // 8. Hindi / Hinglish (Devanagari script or standard Hindi words)
    if(/[\\u0900-\\u097F]/.test(text) || /\\b(meri|mari|dukan|dukaan|kamata|kamati|kamai|nayi|nai|machine|chahiye|kholna|yojana|yojna|banao|mujhe|leni|lena|kaise|kharidna|batao|karna|loan|subsidy|darji|silai|kirana|thela)\\b/i.test(tLower)){
      return 'hi';
    }

    return fallbackLang || 'hi';
  }"""

match1 = re.search(old_dialect_fn_regex, html)
if match1:
    html = html[:match1.start()] + new_dialect_fn + html[match1.end():]
    print("✓ Updated detectClientDialect in index.html")
else:
    print("✗ Could not find detectClientDialect regex in index.html")

# Replace Gemini call block in index.html
old_gemini_block_regex = r"if\(savedKey && savedKey\.length > 10\)\{[\s\S]*?sourceTag = `✨ Google Gemini \(\$\{mName\}\)`;[\s\S]*?break;[\s\S]*?\}\s*\}\s*\} catch\(gErr\)\{[\s\S]*?\}\s*\}\s*\}"

new_gemini_block = """if(savedKey && savedKey.length > 10){
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
                text: `[Target Response Language: ${targetLangName}]\\n[User UI Language: ${currentLang}]\\nUser Question: ${msg}\\n\\nStrict Rule: Answer in ${targetLangName}. If the user asked in Hindi or Hinglish, reply ONLY in Hindi (Devanagari script), DO NOT use Marwari or 'घणी खम्मा सा'.`
              }]
            }],
            generationConfig: {
              temperature: 0.4,
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
    }"""

match2 = re.search(old_gemini_block_regex, html)
if match2:
    html = html[:match2.start()] + new_gemini_block + html[match2.end():]
    print("✓ Updated Gemini prompt and instructions in index.html")
else:
    print("✗ Could not find Gemini block regex in index.html")

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)


# =========================================================================
# 2. UPDATE khata-backend/ai_service.py
# =========================================================================
with open("khata-backend/ai_service.py", "r", encoding="utf-8") as f:
    backend_code = f.read()

old_py_dialect_regex = r"def detect_dialect_and_language\(text: str, fallback_lang: str = \"hi\"\)[^:]*:[\s\S]*?return \(\"en\", \"English\"\)"

new_py_dialect = '''def detect_dialect_and_language(text: str, fallback_lang: str = "hi") -> tuple[str, str]:
    """
    Intelligently detects regional Indian language and dialect from query text.
    Strictly distinguishes Hindi/Hinglish from Marwari, Gujarati, Punjabi, etc.
    """
    if not text:
        return (fallback_lang, LANGUAGE_MAP.get(fallback_lang, {}).get("name", "Hindi"))

    t_lower = text.lower().strip()

    # 1. Purely English queries
    eng_words = ["i have", "my shop", "i earn", "want to buy", "how to get", "loan scheme", "subsidy", "business", "capital", "bank", "interest", "which scheme", "cibil score", "need loan", "can i get", "what is the"]
    if any(re.search(rf"\\b{re.escape(w)}\\b", t_lower) for w in eng_words) and not any(w in t_lower for w in ["dukan", "silai", "yojana", "chahiye", "hai", "meri", "mhari"]):
        return ("en", "English")

    # 2. Strict Marwari / Rajasthani markers (Devanagari & authentic Romanized)
    # Common Hindi words like 'mari', 'kamai', 'kamau' are explicitly excluded!
    marwari_devanagari = ["म्हारी", "म्हारो", "म्हाने", "थारी", "थारो", "थाने", "घणी खम्मा", "खम्मा घणी", "लेणी", "लेणो", "लेवणी", "कोनी", "पड़सी", "आवसी", "दुकान री", "महीना रो", "दुकान रो", "काईं"]
    marwari_roman = [
        "mhari", "mharo", "mhare", "thari", "tharo", "thare", "ghani khamma", "khamma ghani", "koni",
        "hukum", "padsi", "aavasi", "ri dukan", "ro kaam", "mahina ro", "mahina ri", "leno hai", "levani", "mhari dukan", "thari dukan"
    ]
    if any(w in text for w in marwari_devanagari) or any(re.search(rf"\\b{re.escape(w)}\\b", t_lower) for w in marwari_roman):
        return ("mwr", "Marwari (राजस्थानी)")

    # 3. Gujarati detection
    if re.search(r'[\\u0A80-\\u0AFF]', text):
        return ("gu", "Gujarati")
    gujarati_roman = ["mari dukan chhe", "tamari dukan", "kamau chhu", "kamie chhiye", "levi chhe", "karvu chhe", "chhe", "chhu", "nathi", "ketla"]
    if any(re.search(rf"\\b{re.escape(w)}\\b", t_lower) for w in gujarati_roman):
        return ("gu", "Gujarati")

    # 4. Marathi detection
    marathi_words = ["माझी दुकान", "माझ्या दुकाना", "तुझ्या", "घ्यायची", "करायचे", "दुकान आहे", "नाही"]
    marathi_roman = ["majhi dukan", "majhya", "tujhya", "kamavto", "ghyaychi ahe", "karaycha ahe", "kiti rupaye"]
    if any(w in text for w in marathi_words) or any(re.search(rf"\\b{re.escape(w)}\\b", t_lower) for w in marathi_roman):
        return ("mr", "Marathi")

    # 5. Bengali detection
    if re.search(r'[\\u0980-\\u09FF]', text):
        return ("bn", "Bengali")
    bengali_roman = ["amar dokan", "notun machine", "kinte chai", "korte chai", "taka kamai"]
    if any(re.search(rf"\\b{re.escape(w)}\\b", t_lower) for w in bengali_roman):
        return ("bn", "Bengali")

    # 6. Punjabi detection
    if re.search(r'[\\u0A00-\\u0A7F]', text):
        return ("pa", "Punjabi")
    punjabi_roman = ["kamanda haan", "laini hai", "karni hai", "navi machine", "chahida hai", "veera"]
    if any(re.search(rf"\\b{re.escape(w)}\\b", t_lower) for w in punjabi_roman):
        return ("pa", "Punjabi")

    # 7. South Indian Scripts
    if re.search(r'[\\u0B80-\\u0BFF]', text):
        return ("ta", "Tamil")
    if re.search(r'[\\u0C00-\\u0C7F]', text):
        return ("te", "Telugu")
    if re.search(r'[\\u0C80-\\u0CFF]', text):
        return ("kn", "Kannada")

    # 8. Hindi (Devanagari script or Romanized Hinglish)
    if re.search(r'[\\u0900-\\u097F]', text):
        return ("hi", "Hindi")
    hindi_roman = [
        "meri dukan", "mari dukan", "kamata hu", "kamati hu", "kamai", "nayi machine", "chahiye", "kholna hai", "kitna loan", "kaise milega",
        "darji", "darzi", "silai", "silayi", "dukaan", "dukan", "mujhe", "leni", "lenny", "yojana", "yojna",
        "banao", "kaise", "batao", "karna", "kharidna", "kirana", "kapda", "silai machine"
    ]
    if any(re.search(rf"\\b{re.escape(w)}\\b", t_lower) for w in hindi_roman):
        return ("hi", "Hindi")

    return ("en", "English")'''

match3 = re.search(old_py_dialect_regex, backend_code)
if match3:
    backend_code = backend_code[:match3.start()] + new_py_dialect + backend_code[match3.end():]
    print("✓ Updated detect_dialect_and_language in ai_service.py")
else:
    print("✗ Could not find detect_dialect_and_language in ai_service.py")

old_py_sys_prompt_regex = r"sys_prompt = f\"\"\"You are Sahayak AI Advisor[\s\S]*?3\. Structure with friendly tone, clean bullet points, and high practical utility\.\"\"\""

new_py_sys_prompt = '''sys_prompt = f"""You are Sahayak AI Advisor (सहायक साथी), the official conversational AI Business & Financial Structuring Advisor for rural Indian micro-entrepreneurs.

STRICT LANGUAGE & DIALECT MATCHING RULES:
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
- Format with clean bullet points, polite tone, and actionable steps (CSC / Jan Seva Kendra / Bank)."""'''

match4 = re.search(old_py_sys_prompt_regex, backend_code)
if match4:
    backend_code = backend_code[:match4.start()] + new_py_sys_prompt + backend_code[match4.end():]
    print("✓ Updated Gemini sys_prompt in ai_service.py")
else:
    print("✗ Could not find Gemini sys_prompt in ai_service.py")

with open("khata-backend/ai_service.py", "w", encoding="utf-8") as f:
    f.write(backend_code)

print("Done updating files!")
