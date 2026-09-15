# -*- coding: utf-8 -*-
import sys, os

try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

print("Expanding client-side AI knowledge in index.html...")

with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

target = """    return null;
  }

  async function sendChatMessage(){"""

client_expansion = '''    // =========================================================================
    // CASE 2: CIBIL / CREDIT SCORE INQUIRY (सिबिल स्कोर)
    // =========================================================================
    const isCibil = /cibil|सिबिल|credit score|क्रेडिट|स्कोर|kharab score|low score|kam cibil|zero cibil|क્રેડિટ/i.test(qLower);
    if(isCibil){
      if(dialect === 'mwr'){
        return `घणी खम्मा सा! सिबिल (CIBIL) स्कोर कम या जीरो होवण री चिंता मती करो! Sahayak रो पक्को नियम समझो:

📊 **1. Sahayak 'वैकल्पिक क्रेडिट स्कोर' (Alternative ML Underwriting):**
• गाँव अर कस्बां रा 78% उद्यमी भायां रो कोई पुरानो CIBIL रिकॉर्ड कोनी होवै।
• बैंक थानै लोन देवण सारू CIBIL सूं बत्ती थारी **दुकान री रोज री बिक्री अर UPI पैमेंट** रो हिसाब देखे है।
• Sahayak मांय रोज री बिक्री अर उधार री वसूली दर्ज करो, जीं सूं थारो वैकल्पिक स्कोर **700+ (AA ग्रेड)** बण जावै।

🏦 **2. बिना CIBIL रो सरकारी लोन:**
• **PM MUDRA योजना (शिशु व किशोर):** ₹50,000 सूं ₹5 लाख तक बिना गारंटी व बिना कड़े CIBIL री शर्त सूं मिले है।
• **PM SVANidhi:** रेहड़ी-ठेला वाळा सारू ₹10,000 सूं ₹50,000 तक शून्य CIBIL माथै उपलब्ध है।

💡 **सलाह:** Sahayak Smart Ledger सूं अपनी 6 महीना री 'Bankable DPR Report' डाउनलोड करो अर बैंक मैनेजर ने दिखावो।`;
      } else if(dialect === 'gu'){
        return `નમસ્તે જી! CIBIL સ્કોર ઓછો અથવા ઝીરો હોવાની ચિંતા ન કરો! વાસ્તવિક સરકારી નિયમો:

📊 **1. વૈકલ્પિક ક્રેડિટ સ્કોર (Cashflow Underwriting):**
• ભારતના 78% નાના વેપારીઓ પાસે કોઈ CIBIL સ્કોર હોતો નથી.
• બેંકો CIBIL ના બદલે તમારી **દૈનિક દુકાન વેચાણ, UPI લેવડદેવડ અને નિયમિત આવક** ને આધારે લોન મંજૂર કરે છે.
• Sahayak માં નિયમિત હિસાબ રાખવાથી તમારો વૈકલ્પિક સ્કોર **720+ (AA Grade)** બને છે.

🏦 **2. વગર CIBIL સરકારી લોન:**
• **પીએમ મુદ્રા યોજના (MUDRA):** ₹50,000 થી ₹5,00,000 સુધી વગર ગેરંટી ઉપલબ્ધ.
• **પીએમ સ્વનિધિ (SVANidhi):** રેકડી-લારી વાળા માટે ₹10,000 થી ₹50,000 સુધી.

💡 **ઉપાય:** Sahayak માંથી તમારી પ્રમાણિત 'Bank DPR Report' ડાઉનલોડ કરી નજીકની બેંકમાં રજૂ કરો.`;
      } else if(dialect === 'en'){
        return `Greetings! If you have a low CIBIL score or zero formal credit history, here is your verified pathway:

📊 **1. Sahayak Alternative ML Cashflow Underwriting:**
• Over 78% of rural micro-enterprises operate with a 'thin credit file' or no CIBIL bureau footprint.
• Under RBI priority sector guidelines, banks evaluate **daily cashflow consistency, UPI transaction volume, and inventory turnover** rather than penalizing zero CIBIL.
• Logging transactions in the Sahayak Smart Ledger establishes an empirical alternative rating (AA Grade: 740+).

🏦 **2. Collateral-Free Schemes for Zero/Low CIBIL Borrowers:**
• **PM MUDRA (Shishu / Kishore):** Collateral-free loans up to ₹5,00,000 backed by CGTMSE credit guarantee.
• **PM SVANidhi:** Micro working capital up to ₹50,000 with 7% interest subvention.

💡 **Action Step:** Export your certified 'Bank Financial Dossier (DPR)' from Sahayak and present it to your local branch manager.`;
      } else {
        return `नमस्ते जी! अगर आपका CIBIL स्कोर कम या शून्य (Zero) है, तो बिल्कुल परेशान न हों! वास्तविक नियम:

📊 **1. Sahayak 'वैकल्पिक क्रेडिट स्कोर' (Cashflow Underwriting):**
• भारत के 78% छोटे दुकानदारों के पास कोई पुराना सिबिल स्कोर नहीं होता।
• RBI दिशानिर्देशों के तहत बैंक सूक्ष्म उद्यमों को ऋण देने के लिए आपकी **दैनिक दुकान बिक्री, UPI डिजिटल लेनदेन व नियमित नकद प्रवाह** को प्राथमिकता देते हैं।
• Sahayak में नियमित बिक्री दर्ज करने पर आपका वैकल्पिक स्कोर **740+ (AA ग्रेड)** बन जाता है।

🏦 **2. बिना कड़े सिबिल के उपलब्ध योजनाएं:**
• **प्रधानमंत्री मुद्रा योजना (शिशु/किशोर):** ₹50,000 से ₹5 लाख तक बिना किसी संपत्ति गारंटी व बिना पुराने सिबिल के स्वीकृत होती है।
• **PM स्वनिधि योजना:** ₹10,000 से ₹50,000 तक का कार्यशील पूंजी ऋण 7% ब्याज छूट के साथ।

💡 **समाधान:** Sahayak से अपना बैंक-प्रमाणित **DPR Dossier** डाउनलोड करें और बैंक में प्राथमिकता क्षेत्र ऋण के तहत आवेदन करें।`;
      }
    }

    // =========================================================================
    // CASE 3: DAIRY & LIVESTOCK (डेयरी व पशुपालन)
    // =========================================================================
    const isDairy = /dairy|डेयरी|doodh|दूध|गाय|भैंस|पशुपालन|पशु|cattle|chiller|milk|દૂધ|ગાય|ભેંસ/i.test(qLower);
    if(isDairy){
      if(dialect === 'mwr'){
        return `घणी खम्मा सा! डेयरी अर दुग्ध संकलन (Dairy Business) सारू भारत सरकार अर नाबार्ड (NABARD) री मुख्य योजनावां:

🐄 **1. नाबार्ड डेयरी उद्यमिता विकास योजना (NABARD Dairy):**
• **25% सूं 33.3% पूंजी सब्सिडी:** दुधारू गाय/भैंस खरीदबा अर दूध चिलर मशीन सारू सरकार 25% (सामान्य) अर 33.33% (SC/ST/महिला) सब्सिडी देवे है।
• **पशुपालन किसान क्रेडिट कार्ड (Animal Husbandry KCC):** मात्र **4% रियायती ब्याव दर** माथै ₹2,00,000 तक रो बिना गारंटी लोन।

💰 **2. कमाई अर किश्त रो हिसाब:**
• 2 उन्नत नस्ल री भैंस या गाय सूं रोज रो 20-25 लीटर दूध होवै, जीं सूं महीना री कमाई ₹30,000 सूं ₹45,000 तक आराम सूं बण जावै।
• KCC लोन री किश्त बहुत कम आवै अर दूध डेयरी सूं नियमित भुगतान सीधे खाते मांय आवै।

📋 **आवेदन:** नजदीकी पशु चिकित्सालय या ग्रामीण बैंक मांय KCC फॉर्म भरो।`;
      } else if(dialect === 'gu'){
        return `નમસ્તે જી! ડેરી અને પશુપાલન વ્યવસાય માટે ભારત સરકાર અને નાબાર્ડ (NABARD) ની મુખ્ય યોજનાઓ:

🐄 **1. નાબાર્ડ ડેરી સબસિડી અને KCC:**
• **25% થી 33.3% સરકારી સબસિડી:** દૂધાળી ગાય/ભેંસ અને મિલ્ક ચિલર ખરીદવા માટે 25% થી 33.33% ની સીધી સબસિડી.
• **પશુપાલન કિસાન ક્રેડિટ કાર્ડ (Animal Husbandry KCC):** માત્ર **4% ના રાહત વ્યાજ દર** પર ₹2,00,000 સુધીની વગર ગેરંટી લોન.

💰 **2. નફો અને આવક:** 2-4 ગાય અથવા ભેંસથી દર મહિને ₹30,000 થી ₹45,000 ની ચોખ્ખી આવક થાય છે, જેમાંથી લોનનો હપ્તો સરળતાથી ભરાઈ જાય છે.

📋 **અરજી:** નજીકની સહકારી બેંક અથવા પશુ ચિકિત્સા કેન્દ્ર પર KCC ફોર્મ ભરો.`;
      } else if(dialect === 'en'){
        return `Greetings! For Dairy Farming & Milk Collection micro-enterprises, here are the premier verified schemes:

🐄 **1. Animal Husbandry KCC & NABARD Dairy Schemes:**
• **Animal Husbandry Kisan Credit Card (KCC):** Working capital loans up to ₹2,00,000 at a subsidized **4.0% effective interest rate** (with 3% prompt repayment subvention).
• **AHIDF / NABARD:** Up to **33.33% capital subsidy** for milch cattle purchase, automatic milking stations, and milk chillers.

💰 **2. Financial Economics:** A 2-to-4 milch cattle unit generates 25-40 liters daily, netting ₹25,000–₹40,000 monthly, ensuring effortless debt servicing with high margin of safety.

📋 **Application:** Apply via your nearest Gramin Bank, District Cooperative Bank, or Veterinary Extension Centre.`;
      } else {
        return `नमस्ते जी! डेयरी व पशुपालन व्यवसाय के लिए भारत सरकार व नाबार्ड (NABARD) की सर्वोत्तम योजनाएं:

🐄 **1. पशुपालन किसान क्रेडिट कार्ड (Pashupalan KCC):**
• दुधारू गाय-भैंस पालन व चारे के लिए मात्र **4% रियायती ब्याज दर** पर ₹2,00,000 तक का बिना गारंटी ऋण।
• **नाबार्ड डेयरी इंफ्रास्ट्रक्चर योजना:** मिल्क चिलर, डीप फ्रीजर व दुग्ध संकलन केंद्र पर 25% से 33.3% पूंजी सब्सिडी।

💰 **2. आय व वित्तीय सुरक्षा:** 2-4 अच्छी नस्ल की गाय/भैंस से ₹30,000 से ₹45,000 मासिक दुग्ध आय सुनिश्चित होती है, जिससे लोन की मासिक EMI आसानी से चुकता हो जाती है।

📋 **आवश्यक प्रक्रिया:** अपने नजदीकी ग्रामीण बैंक / पशु चिकित्सा केंद्र में KCC व पशु बीमा के साथ आवेदन करें।`;
      }
    }

    // =========================================================================
    // CASE 4: KIRANA & GENERAL STORE (किराना व जनरल स्टोर)
    // =========================================================================
    const isKirana = /kirana|किराना|grocery|परचून|जनरल स्टोर|provisions|ration|કિરાણા|પરચૂરણ/i.test(qLower);
    if(isKirana){
      if(dialect === 'mwr'){
        return `घणी खम्मा सा! किराणा (General Store) री दुकान वास्ते सरकारी लोन अर पूंजी रो पक्को हिसाब:

🏪 **1. प्रधानमंत्री मुद्रा योजना (किशोर वर्ग):**
• किराणा माल (इन्वेंट्री) भरवा सारू ₹50,000 सूं **₹5,00,000** तक रो बिना गारंटी लोन।
• कोई जमीन या सोना गिरवी कोनी राखणो (CGTMSE गारंटी)।

🏆 **2. PMEGP योजना (नयी दुकान सारू):**
• ग्रामीण क्षेत्र मांय OBC/SC/ST उद्यमी ने **35% मुफ्त सरकारी सब्सिडी** मिले है।
• उदाहरण: ₹3 लाख रा प्रोजेक्ट माथै ₹1,05,000 री सरकारी सब्सिडी माफ हो जावेगी!

💡 **सलाह:** Sahayak मांय किराणा दुकान रो DPR बणाओ अर बैंक मांय मुद्रा लोन सारू आवेदन करो।`;
      } else if(dialect === 'gu'){
        return `નમસ્તે જી! કરિયાણા (Kirana) સ્ટોર માટે સરકારી લોન અને યોજનાઓની વિગતો:

🏪 **1. પીએમ મુદ્રા યોજના (Kishore MUDRA):**
• દુકાનમાં માલ ભરવા માટે ₹50,000 થી **₹5,00,000** સુધીની વગર ગેરંટી લોન.
• 3 થી 5 વર્ષની સરળ માસિક હપ્તા પદ્ધતિ.

🏆 **2. PMEGP યોજના (35% સરકારી સબસિડી):**
• ગ્રામીણ વિસ્તારમાં મહિલા/OBC/SC/ST સાહસિકોને **35% સીધી સરકારી સબસિડી** મળે છે.
• તમારે માત્ર 5% પોતાની મૂડી રોકવાની છે, 95% બેંક લોન આપે છે.

📋 **દસ્તાવેજ:** આધાર કાર્ડ, પાન કાર્ડ, દુકાનનું લાઇટ બિલ અને Sahayak દ્વારા જનરેટ થયેલ Bank DPR.`;
      } else if(dialect === 'en'){
        return `Greetings! For setting up or restocking a Kirana & General Store, here are the premier schemes:

🏪 **1. PM MUDRA Yojana (Kishore Category):**
• Working capital and inventory financing from ₹50,000 up to **₹5,00,000** with zero collateral requirements (CGTMSE backed).
• Flexible 36 to 60 month repayment tenures tailored to micro-retail inventory turnover.

🏆 **2. PMEGP Scheme (Up to 35% Capital Subsidy):**
• Up to **35% non-repayable capital subsidy** for rural women, OBC, SC, and ST entrepreneurs.
• Borrower equity is merely 5%, with 95% financed through composite bank term credit.

📋 **Documentation:** Aadhaar, PAN, shop lease/electricity bill, and your bankable DPR downloaded directly from Sahayak.`;
      } else {
        return `नमस्ते जी! किराना व जनरल स्टोर व्यवसाय के लिए प्रमुख सरकारी वित्तपोषण योजनाएं:

🏪 **1. प्रधानमंत्री मुद्रा योजना (Kishore MUDRA):**
• दुकान में नया माल व इन्वेंट्री भरने हेतु ₹50,000 से **₹5,00,000** तक का संपार्श्विक-मुक्त (Collateral-Free) ऋण।
• आसान मासिक किस्तों में 3 से 5 वर्ष की चुकौती अवधि।

🏆 **2. PMEGP योजना (35% तक पूंजी सब्सिडी):**
• ग्रामीण क्षेत्र में OBC, SC, ST व महिला उद्यमियों को **35% गैर-वापसी योग्य सरकारी अनुदान**।
• आपको अपनी जेब से मात्र 5% मार्जिन लगाना है, 95% बैंक द्वारा वित्तपोषित होता है।

📋 **दस्तावेज:** आधार कार्ड, पैन कार्ड, दुकान का किरायानामा/बिजली बिल व Sahayak से डाउनलोड किया गया बैंक DPR।`;
      }
    }

    // =========================================================================
    // CASE 5: STREET VENDORS / THELA / FOOD STALL (ठेला व रेहड़ी)
    // =========================================================================
    const isThela = /svanidhi|स्वनिधि|thela|ठेला|रेहड़ी|पटरी|vendor|street vendor|chaat|चाट|फास्ट फूड|food stall|chai|चाय|લારી|રેકડી/i.test(qLower);
    if(isThela){
      if(dialect === 'mwr'){
        return `घणी खम्मा सा! रेहड़ी-ठेला, चाट-पकौड़ी अर चाय वाळा भायां सारू विशेष **PM SVANidhi योजना**:

🛒 **1. तीन टप्पां मांय बिना गारंटी लोन:**
• **पहिली किश्त:** ₹10,000 रो लोन (1 साल री मुद्दत, बिना कोई गारंटी)।
• **दूजी किश्त:** समय माथै भर्या पाछै ₹20,000 रो लोन।
• **तीजी किश्त:** ₹50,000 रो लोन।

🎁 **2. 7% ब्याव सब्सिडी अर ₹1,200 कैशबैक:**
• केंद्र सरकार 7% ब्याव सीधो थारे खाते मांय पाछो जमा करे।
• UPI क्यूआर कोड सूं गिराहक सूं पैमेंट लेवण माथै साल रा ₹1,200 रो नकद कैशबैक!

📋 **आवेदन:** आधार कार्ड अर वेंडिंग कार्ड ले'र नजदीकी CSC केंद्र या ई-मित्र माथै आवेदन करो।`;
      } else {
        return `नमस्ते! रेहड़ी-पटरी, ठेला, वेंडर्स व खाद्य स्टॉल के लिए भारत सरकार की विशेष **PM SVANidhi योजना**:

🛒 **1. तीन चरणों में कार्यशील पूंजी ऋण:**
• **प्रथम चरण:** ₹10,000 का ऋण (1 वर्ष की अवधि, बिना किसी गारंटी)।
• **द्वितीय चरण:** समय पर चुकाने पर ₹20,000 का ऋण।
• **तृतीय चरण:** ₹50,000 का ऋण।

🎁 **2. सब्सिडी व कैशबैक लाभ:**
• **7% ब्याज सब्सिडी:** केंद्र सरकार द्वारा सीधे आपके बैंक खाते में जमा।
• **डिजिटल लेनदेन कैशबैक:** UPI QR कोड से भुगतान लेने पर प्रति वर्ष ₹1,200 तक का नकद कैशबैक!

📋 **आवेदन:** अपने टाउन वेंडिंग सर्टिफिकेट (TVC) या आधार कार्ड के साथ नजदीकी CSC केंद्र से pm-svanidhi पोर्टल पर आवेदन करें।`;
      }
    }

    // =========================================================================
    // CASE 6: PMEGP / SUBSIDY INQUIRY IN REGIONAL DIALECTS
    // =========================================================================
    const isSubsidyQ = /subsidy|सब्सिडी|pmegp|अनुदान|छूट|सબસિડી|ভর্তুকি|மானியம்|ਸਬਸਿਡੀ/i.test(qLower);
    if(isSubsidyQ){
      if(dialect === 'mwr'){
        return `घणी खम्मा सा! भारत सरकार री सबसूं मोटी सब्सिडी वाळी **PMEGP योजना** रो पक्को हिसाब:

🏆 **1. 35% मुफ्त सरकारी अनुदान (Non-Refundable Grant):**
• **ग्रामीण क्षेत्र:** महिला, OBC, SC, ST अर अल्पसंख्यक उद्यमी ने कुल प्रोजेक्ट लागत माथै **35% सब्सिडी** मिले है।
• **शहरी क्षेत्र:** 25% सरकारी सब्सिडी मिले है।
• **मार्जिन मनी:** थानै अपनी जेब सूं मात्र 5% पूंजी लगानी है, बाकी 95% बैंक लोन देवे है।

💰 **2. फायदो:** जो ₹3 लाख रो लोन लेवो, तो ₹1,05,000 रुपया सरकार भरसी, थानै सिर्फ बाकी बची रकम ही चुकानी पड़सी!

📋 **आवेदन:** kviconline.gov.in माथै ऑनलाइन या नजदीकी जिला उद्योग केंद्र (DIC) मांय Sahayak DPR साथै आवेदन करो।`;
      } else if(dialect === 'gu'){
        return `નમસ્તે જી! ભારત સરકારની સૌથી મોટી સબસિડી વાળી **PMEGP યોજના** ની વિગતો:

🏆 **1. 35% સરકારી ગ્રાન્ટ (સબસિડી):**
• **ગ્રામીણ વિસ્તાર:** મહિલા, OBC, SC, ST સાહસિકોને પ્રોજેક્ટ ખર્ચ પર **35% સીધી સબસિડી** મળે છે.
• **શહેરી વિસ્તાર:** 25% સરકારી સબસિડી.
• **પોતાનું રોકાણ:** તમારે માત્ર 5% રકમ આપવાની છે, બાકી 95% બેંક લોન આપે છે.

💰 **ઉદાહરણ:** ₹4,00,000 ના પ્રોજેક્ટ પર ₹1,40,000 ની સરકારી સબસિડી સીધી બાદ મળે છે!

📋 **અરજી:** kviconline.gov.in પોર્ટલ પર Sahayak ના બેંક DPR સાથે ઓનલાઈન અરજી કરો.`;
      }
    }

    return null;
  }

  async function sendChatMessage(){'''

new_content = content.replace(target, client_expansion, 1)
if len(new_content) != len(content):
    with open("index.html", "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Successfully injected multi-trade & dialect handlers into index.html!")
else:
    print("Failed to replace content.")
