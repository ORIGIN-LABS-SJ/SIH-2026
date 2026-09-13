// ==========================================================================
// Khata Multilingual Translations & Enterprise Intelligence Data
// Supports: English, Hindi, Gujarati, Marathi, Marwari, Bengali, Tamil, Telugu, Punjabi, Kannada
// ==========================================================================

export const LANGUAGES = [
  { code: 'en', label: 'English', native: 'English', flag: '🇬🇧' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी', flag: '🇮🇳' },
  { code: 'gu', label: 'Gujarati', native: 'ગુજરાતી', flag: '🇮🇳' },
  { code: 'mr', label: 'Marathi', native: 'मराठी', flag: '🇮🇳' },
  { code: 'mwr', label: 'Marwari', native: 'मारवाड़ी', flag: '🇮🇳' },
  { code: 'bn', label: 'Bengali', native: 'বাংলা', flag: '🇮🇳' },
  { code: 'ta', label: 'Tamil', native: 'தமிழ்', flag: '🇮🇳' },
  { code: 'te', label: 'Telugu', native: 'తెలుగు', flag: '🇮🇳' },
  { code: 'pa', label: 'Punjabi', native: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
  { code: 'kn', label: 'Kannada', native: 'ಕನ್ನಡ', flag: '🇮🇳' },
];

export const SOCIAL_CATEGORIES = [
  {
    id: 'general',
    labels: {
      en: 'General / Open',
      hi: 'सामान्य (General)',
      gu: 'જનરલ / સામાન્ય',
      mr: 'खुला प्रवर्ग (General)',
      mwr: 'सामान्य (General)',
      bn: 'সাধারণ (General)',
      ta: 'பொதுப் பிரிவு (General)',
      te: 'జనరల్ / ఓపెన్',
      pa: 'ਜਨਰਲ / ਓਪਨ',
      kn: 'ಸಾಮಾನ್ಯ (General)'
    },
    schemeHighlight: 'Standard PMEGP (15-25% subsidy), MUDRA & SVANidhi'
  },
  {
    id: 'obc',
    labels: {
      en: 'OBC (Other Backward Class)',
      hi: 'अन्य पिछड़ा वर्ग (OBC)',
      gu: 'ઓબીસી (OBC)',
      mr: 'इतर मागासवर्ग (OBC)',
      mwr: 'ओबीसी (OBC)',
      bn: 'অন্যান্য অনগ্রসর শ্রেণী (OBC)',
      ta: 'இதர பிற்படுத்தப்பட்டோர் (OBC)',
      te: 'ఇతర వెనుకబడిన తరగతులు (OBC)',
      pa: 'ਪੱਛੜੀਆਂ ਸ਼੍ਰੇਣੀਆਂ (OBC)',
      kn: 'ಇತರೆ ಹಿಂದುಳಿದ ವರ್ಗ (OBC)'
    },
    schemeHighlight: 'NBCFDC concessional finance & PMEGP Special Category (up to 35% subsidy)'
  },
  {
    id: 'sc',
    labels: {
      en: 'SC (Scheduled Caste)',
      hi: 'अनुसूचित जाति (SC)',
      gu: 'અનુસૂચિત જાતિ (SC)',
      mr: 'अनुसूचित जाती (SC)',
      mwr: 'अनुसूचित जाति (SC)',
      bn: 'তফসিলি জাতি (SC)',
      ta: 'பட்டியலினத்தவர் (SC)',
      te: 'షెడ్యూల్డ్ కులాలు (SC)',
      pa: 'ਅਨੁਸੂਚਿਤ ਜਾਤੀ (SC)',
      kn: 'ಪರಿಶಿಷ್ಟ ಜಾತಿ (SC)'
    },
    schemeHighlight: 'NSFDC 6% Term Loans & Stand-Up India up to ₹1 Crore'
  },
  {
    id: 'st',
    labels: {
      en: 'ST (Scheduled Tribe)',
      hi: 'अनुसूचित जनजाति (ST)',
      gu: 'અનુસૂચિત જનજાતિ (ST)',
      mr: 'अनुसूचित जमाती (ST)',
      mwr: 'अनुसूचित जनजाति (ST)',
      bn: 'তফসিলি উপজাতি (ST)',
      ta: 'பழங்குடியினர் (ST)',
      te: 'షెడ్యూల్డ్ తెగలు (ST)',
      pa: 'ਅਨੁਸੂਚਿਤ ਜਨਜਾਤੀ (ST)',
      kn: 'ಪರಿಶಿಷ್ಟ ಪಂಗಡ (ST)'
    },
    schemeHighlight: 'NSTFDC Tribal schemes & Stand-Up India up to ₹1 Crore'
  },
  {
    id: 'minority',
    labels: {
      en: 'Minority / Specially-Abled / Ex-Servicemen',
      hi: 'अल्पसंख्यक / दिव्यांग / विशेष वर्ग',
      gu: 'લઘુમતી / દિવ્યાંગ વર્ગ',
      mr: 'अल्पसंख्याक / दिव्यांग प्रवर्ग',
      mwr: 'अल्पसंख्यक / दिव्यांग वर्ग',
      bn: 'সংখ্যালঘু / বিশেষ ভাবে সক্ষম',
      ta: 'சிறுபான்மையினர் / மாற்றுத்திறனாளிகள்',
      te: 'మైనారిటీ / దివ్యాంగులు',
      pa: 'ਘੱਟ ਗਿਣਤੀ / ਦਿਵਿਆਂਗ',
      kn: 'ಅಲ್ಪಸಂಖ್ಯಾತರು / ವಿಶೇಷ ಚೇತನರು'
    },
    schemeHighlight: 'NMDFC Concessional loans & 35% Rural PMEGP Subsidy'
  }
];

export const GENDER_OPTIONS = [
  {
    id: 'female',
    icon: '👩',
    labels: {
      en: 'Woman Entrepreneur',
      hi: 'महिला उद्यमी',
      gu: 'મહિલા ઉદ્યોગસાહસિક',
      mr: 'महिला उद्योजक',
      mwr: 'महिला उद्यमी',
      bn: 'মহিলা উদ্যোক্তা',
      ta: 'பெண் தொழில்முனைவோர்',
      te: 'మహిళా వ్యవస్థాపకురాలు',
      pa: 'ਮਹਿਲਾ ਉਦਮੀ',
      kn: 'ಮಹಿಳಾ ಉದ್ಯಮಿ'
    },
    benefitBadge: 'Special 35% Subsidy & Stand-Up India Eligible'
  },
  {
    id: 'male',
    icon: '👨',
    labels: {
      en: 'Male Entrepreneur',
      hi: 'पुरुष उद्यमी',
      gu: 'પુરુષ ઉદ્યોગસાહસિક',
      mr: 'पुरुष उद्योजक',
      mwr: 'पुरुष उद्यमी',
      bn: 'পুরুষ উদ্যোক্তা',
      ta: 'ஆண் தொழில்முனைவோர்',
      te: 'పురుష వ్యవస్థాపకుడు',
      pa: 'ਪੁਰਸ਼ ਉਦਮੀ',
      kn: 'ಪುರುಷ ಉದ್ಯಮಿ'
    },
    benefitBadge: 'Standard Govt Credit & Scheme Norms'
  },
  {
    id: 'other',
    icon: '🧑',
    labels: {
      en: 'Other / Joint Entity',
      hi: 'अन्य / संयुक्त इकाई',
      gu: 'અન્ય / સંયુક્ત સાહસ',
      mr: 'इतर / संयुक्त संस्था',
      mwr: 'अन्य / संयुक्त उद्यम',
      bn: 'অন্যান্য / যৌথ উদ্যোগ',
      ta: 'இதர / கூட்டு நிறுவனம்',
      te: 'ఇతర / ఉమ్మడి సంస్థ',
      pa: 'ਹੋਰ / ਸਾਂਝਾ ਉੱਦਮ',
      kn: 'ಇತರೆ / ಜಂಟಿ ಸಂಸ್ಥೆ'
    },
    benefitBadge: 'Special Category Inclusivity Benefits'
  }
];

// Business Models with Minimum Viable Capital, Budget Allocation %, and Default Profiles
export const BUSINESS_MODELS = [
  {
    id: 'grocery',
    value: 'Grocery & provisions store',
    labels: {
      en: 'Grocery & provisions store',
      hi: 'किराना व जनरल स्टोर',
      gu: 'કરિયાણા અને જનરલ સ્ટોર',
      mr: 'किराणा व जनरल स्टोअर',
      mwr: 'किराणा अर जनरल दुकान',
      bn: 'মুদিখানা ও সাধারণ ভাণ্ডার',
      ta: 'மளிகை & அன்றாடப் பொருட்கள் கடை',
      te: 'కిరాణా & నిత్యావసర సరుకుల దుకాణం',
      pa: 'ਕਿਰਿਆਨਾ ਅਤੇ ਜਨਰਲ ਸਟੋਰ',
      kn: 'ಕಿರಾಣಿ ಮತ್ತು ಜನರಲ್ ಸ್ಟೋರ್'
    },
    minCapital: 120000,
    idealCapital: 200000,
    budgetSplit: {
      inventory: 45,   // Raw Materials & Fast Moving Stock
      fixtures: 25,    // Furniture, Racks, Counter & Glass Display
      marketing: 8,    // Signboard, Pamphlets, QR standee & WhatsApp Catalog
      workingCap: 22   // 3 Months Rent, Electricity & Cash Cushion
    },
    alternates: ['food_cart', 'tailoring', 'dairy']
  },
  {
    id: 'tailoring',
    value: 'Tailoring & garment repair',
    labels: {
      en: 'Tailoring & garment repair',
      hi: 'सिलाई व कपड़ों की मरम्मत',
      gu: 'ટેલરિંગ અને કપડાં સમારકામ',
      mr: 'टेलरिंग व कपडे दुरुस्ती',
      mwr: 'सिलाई अर कपड़ा काम',
      bn: 'দর্জি ও পোশাক মেরামতি',
      ta: 'தையல் & ஆடை பழுதுபார்த்தல்',
      te: 'టైలరింగ్ & దుస్తుల మరమ్మత్తు',
      pa: 'ਦਰਜ਼ੀ ਅਤੇ ਕੱਪੜੇ ਸਿਲਾਈ',
      kn: 'ಟೈಲರಿಂಗ್ ಮತ್ತು ಬಟ್ಟೆ ದುರಸ್ತಿ'
    },
    minCapital: 40000,
    idealCapital: 90000,
    budgetSplit: {
      inventory: 35,   // Fabrics, Threads, Linings, Zippers & Accessories
      fixtures: 35,    // Commercial Sewing Machine, Interlock, Cutting Table & Iron
      marketing: 10,   // Sample board, Local WhatsApp promo, Signage
      workingCap: 20   // Rent buffer & electricity advance
    },
    alternates: ['handicraft', 'food_cart', 'mobile_repair']
  },
  {
    id: 'dairy',
    value: 'Dairy & milk collection',
    labels: {
      en: 'Dairy & milk collection',
      hi: 'डेयरी व दूध संग्रह',
      gu: 'ડેરી અને દૂધ સંગ્રહ કેન્દ્ર',
      mr: 'डेअरी व दूध संकलन केंद्र',
      mwr: 'डेयरी अर दूध संकलन',
      bn: 'দুগ্ধ খামার ও দুধ সংগ্রহ কেন্দ্র',
      ta: 'பால் பண்ணை & பால் சேகரிப்பு',
      te: 'డైరీ & పాల సేకరణ కేంద్రం',
      pa: 'ਡੇਅਰੀ ਅਤੇ ਦੁੱਧ ਇਕੱਠਾ ਕੇਂਦਰ',
      kn: 'ಡೈರಿ ಮತ್ತು ಹಾಲು ಸಂಗ್ರಹಣೆ'
    },
    minCapital: 100000,
    idealCapital: 180000,
    budgetSplit: {
      inventory: 40,   // Cattle feed, Fresh milk intake capital, Testing chemicals
      fixtures: 30,    // Deep chiller / Bulk Cooler, Fat tester analyzer, Cans
      marketing: 5,    // Farmer tie-up camp, Rate display board
      workingCap: 25   // Daily farmer payout settlement buffer
    },
    alternates: ['grocery', 'food_cart', 'flour_mill']
  },
  {
    id: 'handicraft',
    value: 'Handicraft & weaving',
    labels: {
      en: 'Handicraft & weaving',
      hi: 'हस्तशिल्प व बुनाई',
      gu: 'હસ્તકલા અને વણાટકામ',
      mr: 'हस्तकला व विणकाम',
      mwr: 'हस्तशिल्प अर बुनाई',
      bn: 'হস্তশিল্প ও বয়নশিল্প',
      ta: 'கைவினை & நெசவுத் தொழில்',
      te: 'హస్తకళలు & నేత పని',
      pa: 'ਹਸਤਕਲਾ ਅਤੇ ਬੁਣਾਈ',
      kn: 'ಕರಕುಶಲ ಮತ್ತು ನೇಯ್ಗೆ'
    },
    minCapital: 35000,
    idealCapital: 80000,
    budgetSplit: {
      inventory: 50,   // Raw yarn, Dyes, Wood/Clay/Fabrics, Packaging
      fixtures: 20,    // Handloom/Frame, Carving/Stitching tools, Work table
      marketing: 15,   // Digital catalog, Exhibition stall fee, Online marketplace listing
      workingCap: 15   // Raw material buffer between production cycles
    },
    alternates: ['tailoring', 'food_cart', 'mobile_repair']
  },
  {
    id: 'food_cart',
    value: 'Mobile food cart',
    labels: {
      en: 'Mobile food cart & snacks',
      hi: 'चलता-फिरता खाद्य ठेला व नाश्ता',
      gu: 'મોબાઇલ ફૂડ લારી અને નાસ્તા કેન્દ્ર',
      mr: 'फिरती खाद्य गाडी व अल्पोपहार',
      mwr: 'खाद्य ठेलो अर चाय नाश्तो',
      bn: 'ভ্রাম্যমাণ খাবারের ঠেলাগাড়ি ও স্ন্যাক্স',
      ta: 'நடமாடும் உணவு வண்டி & சிற்றுண்டி',
      te: 'సంచార ఫుడ్ కార్ట్ & స్నాక్స్',
      pa: 'ਮੋਬਾਈਲ ਫੂਡ ਰੇਹੜੀ ਅਤੇ ਸਨੈਕਸ',
      kn: 'ಮೊಬೈಲ್ ಆಹಾರ ಬಂಡಿ ಮತ್ತು ತಿಂಡಿ ಕೇಂದ್ರ'
    },
    minCapital: 30000,
    idealCapital: 60000,
    budgetSplit: {
      inventory: 40,   // Daily raw ingredients, Cooking oil, Spices, Disposables
      fixtures: 35,    // Custom Stainless Steel Cart, Gas Burner, Utensils, Umbrella
      marketing: 5,    // Menu board, QR Code standee, Location signage
      workingCap: 20   // Daily fuel, Gas cylinders, FSSAI registration & reserve
    },
    alternates: ['tailoring', 'dairy', 'handicraft']
  },
  {
    id: 'mobile_repair',
    value: 'Mobile repair & digital services',
    labels: {
      en: 'Mobile repair & digital services',
      hi: 'मोबाइल रिपेयरिंग व डिजिटल सेवा',
      gu: 'મોબાઇલ રિપેરિંગ અને ડિજિટલ સેવાઓ',
      mr: 'मोबाइल दुरुस्ती व डिजिटल सेवा केंद्र',
      mwr: 'मोबाइल रिपेयरिंग अर डिजिटल सेवा',
      bn: 'মোবাইল মেরামত ও ডিজিটাল সেবা',
      ta: 'மொபைல் பழுதுபார்த்தல் & டிஜிட்டல் சேவைகள்',
      te: 'మొబైల్ రిపేరింగ్ & డిజిటల్ సేవలు',
      pa: 'ਮੋਬਾਈਲ ਰਿਪੇਅਰ ਅਤੇ ਡਿਜੀਟਲ ਸੇਵਾਵਾਂ',
      kn: 'ಮೊಬೈಲ್ ದುರಸ್ತಿ ಮತ್ತು ಡಿಜಿಟಲ್ ಸೇವೆಗಳು'
    },
    minCapital: 50000,
    idealCapital: 100000,
    budgetSplit: {
      inventory: 35,   // Spare screens, Batteries, Cables, Chargers, Cases
      fixtures: 35,    // SMD Rework station, Microscope, Multimeter, Tool kit, Counter
      marketing: 10,   // Local board, Google Maps listing, UPI QR standee
      workingCap: 20   // 2 months rent buffer & software subscription reserve
    },
    alternates: ['food_cart', 'tailoring', 'grocery']
  }
];

// UI Dictionary for 10 Regional Languages
export const UI_TEXT = {
  // Brand & Nav
  brandTag: {
    en: 'business advisory',
    hi: 'व्यापार सलाहकार',
    gu: 'વ્યાપાર સલાહકાર',
    mr: 'व्यवसाय सल्लागार',
    mwr: 'व्यापार सलाहकार',
    bn: 'ব্যবসা উপদেষ্টা',
    ta: 'வணிக ஆலோசகர்',
    te: 'వ్యాపార సలహాదారు',
    pa: 'ਕਾਰੋਬਾਰੀ ਸਲਾਹਕਾਰ',
    kn: 'ವ್ಯವಹಾರ ಸಲಹೆಗಾರ'
  },
  navHome: {
    en: 'Home',
    hi: 'होम',
    gu: 'હોમ',
    mr: 'मुख्यपृष्ठ',
    mwr: 'होम',
    bn: 'হোম',
    ta: 'முகப்பு',
    te: 'హోమ్',
    pa: 'ਮੁੱਖ ਪੰਨਾ',
    kn: 'ಮುಖಪುಟ'
  },
  navAdvisor: {
    en: 'Khata Saathi (AI)',
    hi: 'खाता साथी (AI)',
    gu: 'ખાતા સાથી (AI)',
    mr: 'खाता साथी (AI)',
    mwr: 'खाता साथी (AI)',
    bn: 'খাতা সাথী (AI)',
    ta: 'காதா சாதி (AI)',
    te: 'ఖాతా సాథీ (AI)',
    pa: 'ਖਾਤਾ ਸਾਥੀ (AI)',
    kn: 'ಖಾತಾ ಸಾಥಿ (AI)'
  },
  
  // Input Screen
  inputHeading: {
    en: 'Tell Khata about your business vision',
    hi: 'खाता को अपने व्यापार के बारे में बताएं',
    gu: 'ખાતાને તમારા વ્યવસાય વિશે જણાવો',
    mr: 'खाताला आपल्या व्यवसायाबद्दल माहिती द्या',
    mwr: 'खाता ने आपरे व्यापार री बात बताओ',
    bn: 'খাতাকে আপনার ব্যবসা সম্পর্কে জানান',
    ta: 'உங்கள் வணிகத்தைப் பற்றி காதாவிடம் கூறுங்கள்',
    te: 'మీ వ్యాపారం గురించి ఖాతాకు తెలియజేయండి',
    pa: 'ਖਾਤਾ ਨੂੰ ਆਪਣੇ ਕਾਰੋਬਾਰ ਬਾਰੇ ਦੱਸੋ',
    kn: 'ನಿಮ್ಮ ವ್ಯವಹಾರದ ಬಗ್ಗೆ ಖಾತಾಗೆ ತಿಳಿಸಿ'
  },
  inputSubhead: {
    en: 'Your demographic background, trade choice, and capital unlock targeted subsidies (PMEGP, NSFDC, Stand-Up India) and smart budget distribution.',
    hi: 'आपकी सामाजिक श्रेणी, लिंग और पूंजी से विशेष सरकारी सब्सिडी (PMEGP, NSFDC, Stand-Up India) और सटीक बजट वितरण तय होता है।',
    gu: 'તમારી શ્રેણી, લિંગ અને મૂડી અનુસાર વિશેષ સરકારી સબસિડી અને સ્માર્ટ બજેટ ફાળવણી નક્કી થશે.',
    mr: 'तुमची जात प्रवर्ग, लिंग व भांडवलानुसार सरकारी अनुदान आणि अचूक बजेट वाटप निश्चित होईल.',
    mwr: 'आपरी सामाजिक श्रेणी, लिंग अर पूंजी रे हिसाब सूं सरकारी सब्सिडी अर बजट रो सही बंटवारो होवैला।',
    bn: 'আপনার শ্রেণী, লিঙ্গ এবং মূলধন অনুযায়ী সরকারি ভর্তুকি এবং সঠিক বাজেট বিভাজন নির্ধারিত হবে।',
    ta: 'உங்கள் சமூகப் பிரிவு, பாலினம் மற்றும் மூலதனத்திற்கு ஏற்ப அரசு மானியங்கள் மற்றும் பட்ஜெட் பங்கீடு கணக்கிடப்படும்.',
    te: 'మీ సామాజిక వర్గం, లింగం మరియు పెట్టుబడి ఆధారంగా ప్రభుత్వ సబ్సిడీలు మరియు బడ్జెట్ కేటాయింపులు నిర్ణయించబడతాయి.',
    pa: 'ਤੁਹਾਡੀ ਸ਼੍ਰੇਣੀ, ਲਿੰਗ ਅਤੇ ਪੂੰਜੀ ਅਨੁਸਾਰ ਸਰਕਾਰੀ ਸਬਸਿਡੀ ਅਤੇ ਬਜਟ ਵੰਡ ਤੈਅ ਹੋਵੇਗੀ।',
    kn: 'ನಿಮ್ಮ ವರ್ಗ, ಲಿಂಗ ಮತ್ತು ಬಂಡವಾಳಕ್ಕೆ ಅನುಗುಣವಾಗಿ ಸರ್ಕಾರದ ಸಬ್ಸಿಡಿ ಮತ್ತು ಬಜೆಟ್ ಹಂಚಿಕೆ ನಿರ್ಧರಿಸಲಾಗುತ್ತದೆ.'
  },
  labelName: {
    en: 'Entrepreneur / Business Owner Name',
    hi: 'उद्यमी / व्यापारी का नाम',
    gu: 'ઉદ્યોગસાહસિક / વેપારીનું નામ',
    mr: 'उद्योजक / मालकाचे नाव',
    mwr: 'व्यापारी रो नाम',
    bn: 'উদ্যোক্তা / ব্যবসায়ীর নাম',
    ta: 'தொழில்முனைவோர் / உரிமையாளர் பெயர்',
    te: 'వ్యాపారవేత్త / యజమాని పేరు',
    pa: 'ਉਦਮੀ / ਵਪਾਰੀ ਦਾ ਨਾਮ',
    kn: 'ಉದ್ಯಮಿ / ಮಾಲೀಕರ ಹೆಸರು'
  },
  labelGender: {
    en: 'Gender (Unlocks Special Govt Subsidies)',
    hi: 'लिंग (विशेष सरकारी सब्सिडी पात्रता)',
    gu: 'લિંગ (વિશેષ સરકારી સબસિડી લાભ)',
    mr: 'लिंग (विशेष सरकारी अनुदान पात्रता)',
    mwr: 'लिंग (सरकारी योजना लाभ खातर)',
    bn: 'লিঙ্গ (বিশেষ সরকারি ভর্তুকি সুবিধা)',
    ta: 'பாலினம் (சிறப்பு அரசு மானியத் தகுதி)',
    te: 'లింగం (ప్రత్యేక ప్రభుత్వ సబ్సిడీ అర్హత)',
    pa: 'ਲਿੰਗ (ਵਿਸ਼ੇਸ਼ ਸਰਕਾਰੀ ਸਬਸਿਡੀ)',
    kn: 'ಲಿಂಗ (ವಿಶೇಷ ಸರ್ಕಾರಿ ಸಬ್ಸಿಡಿ ಅರ್ಹತೆ)'
  },
  labelCategory: {
    en: 'Social Category / Caste (For Concessional Schemes)',
    hi: 'सामाजिक श्रेणी / वर्ग (रियायती योजना पात्रता)',
    gu: 'સામાજિક શ્રેણી / જાતિ (રિયાયતી યોજનાઓ)',
    mr: 'सामाजिक प्रवर्ग / जात (सवलतींच्या योजनांसाठी)',
    mwr: 'सामाजिक वर्ग (योजना सब्सिडी खातर)',
    bn: 'সামাজিক শ্রেণী / বর্ণ (সুবিধাজনক প্রকল্প)',
    ta: 'சமூகப் பிரிவு / சாதி (சலுகை திட்டங்களுக்கு)',
    te: 'సామాజిక వర్గం (రాయితీ పథకాల కోసం)',
    pa: 'ਸਮਾਜਿਕ ਸ਼੍ਰੇਣੀ / ਜਾਤ (ਸਰਕਾਰੀ ਸਕੀਮਾਂ)',
    kn: 'ಸಾಮಾಜಿಕ ವರ್ಗ / ಜಾತಿ (ರಿಯಾಯಿತಿ ಯೋಜನೆಗಳಿಗಾಗಿ)'
  },
  labelBusiness: {
    en: 'Select Business / Trade to Start',
    hi: 'प्रस्तावित व्यापार / कार्य का चयन करें',
    gu: 'શરૂ કરવા માંગતા વ્યવસાયની પસંદગી કરો',
    mr: 'सुरू करावयाचा व्यवसाय निवडा',
    mwr: 'कुणसो काम शुरू करणो चाहवो?',
    bn: 'ব্যবসায়ের ধরন নির্বাচন করুন',
    ta: 'தொடங்க விரும்பும் வணிகத்தைத் தேர்வுசெய்க',
    te: 'ప్రారంభించాలనుకుంటున్న వ్యాపారాన్ని ఎంచుకోండి',
    pa: 'ਸ਼ੁਰੂ ਕਰਨ ਵਾਲਾ ਕਾਰੋਬਾਰ ਚੁਣੋ',
    kn: 'ಪ್ರಾರಂಭಿಸಲಿರುವ ವ್ಯವಹಾರವನ್ನು ಆಯ್ಕೆಮಾಡಿ'
  },
  labelLocation: {
    en: 'Operating Location (GPS Auto-Detect or Manual)',
    hi: 'दुकान / कार्य स्थल (GPS या मैनुअल चयन)',
    gu: 'વ્યવસાય સ્થળ (GPS અથવા મેન્યુઅલ)',
    mr: 'व्यवसायाचे ठिकाण (GPS किंवा मॅन्युअल)',
    mwr: 'दुकान रो ठिकानो (GPS या खुद चुणो)',
    bn: 'ব্যবসার স্থান (GPS বা ম্যানুয়াল)',
    ta: 'தொழில் இடம் (GPS அல்லது தேர்வு செய்க)',
    te: 'వ్యాపార స్థలం (GPS లేదా మాన్యువల్)',
    pa: 'ਕੰਮ ਦਾ ਸਥਾਨ (GPS ਜਾਂ ਚੋਣ)',
    kn: 'ವ್ಯವಹಾರದ ಸ್ಥಳ (GPS ಅಥವಾ ಆಯ್ಕೆಮಾಡಿ)'
  },
  labelCapital: {
    en: 'Starting Capital you have right now (₹)',
    hi: 'वर्तमान में आपके पास उपलब्ध शुरुआती पूंजी (₹)',
    gu: 'હાલમાં તમારી પાસે ઉપલબ્ધ પ્રારંભિક મૂડી (₹)',
    mr: 'सध्या तुमच्याकडे उपलब्ध असलेले भांडवल (₹)',
    mwr: 'अबे आपरे कने कितनी पूंजी है (₹)',
    bn: 'বর্তমানে আপনার কাছে উপলব্ধ মূলধন (₹)',
    ta: 'தற்போது உங்களிடம் உள்ள ஆரம்ப மூலதனம் (₹)',
    te: 'ప్రస్తుతం మీ వద్ద ఉన్న ప్రారంభ పెట్టుబడి (₹)',
    pa: 'ਮੌਜੂਦਾ ਉਪਲਬਧ ਸ਼ੁਰੂਆਤੀ ਪੂੰਜੀ (₹)',
    kn: 'ಪ್ರಸ್ತುತ ನಿಮ್ಮಲ್ಲಿರುವ ಆರಂಭಿಕ ಬಂಡವಾಳ (₹)'
  },
  btnSubmit: {
    en: 'Generate Khata Advisory & Budget Split',
    hi: 'खाता विश्लेषण व बजट आवंटन देखें',
    gu: 'ખાતા વિશ્લેષણ અને બજેટ ફાળવણી જુઓ',
    mr: 'खाता विश्लेषण व बजेट वाटप पहा',
    mwr: 'खाता रो फैचलो अर बजट बंटवारो देखो',
    bn: 'খাতা বিশ্লেষণ ও বাজেট বিভাজন দেখুন',
    ta: 'காதா ஆலோசனை & பட்ஜெட் பங்கீடு காண்க',
    te: 'ఖాతా విశ్లేషణ & బడ్జెట్ కేటాయింపు చూడండి',
    pa: 'ਖਾਤਾ ਵਿਸ਼ਲੇਸ਼ਣ ਅਤੇ ਬਜਟ ਵੰਡ ਵੇਖੋ',
    kn: 'ಖಾತಾ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಬಜೆಟ್ ಹಂಚಿಕೆ ವೀಕ್ಷಿಸಿ'
  },

  // Dashboard Tabs & Modules
  tabVerdict: {
    en: 'Verdict & Feasibility',
    hi: 'फैसला व व्यवहार्यता',
    gu: 'નિર્ણય અને શક્યતા',
    mr: 'निकाल व व्यवहार्यता',
    mwr: 'फैचलो अर पड़ताल',
    bn: 'সিদ্ধান্ত ও সম্ভাব্যতা',
    ta: 'தீர்ப்பு & சாத்தியக்கூறு',
    te: 'తీర్పు & సాధ్యత',
    pa: 'ਫੈਸਲਾ ਅਤੇ ਸੰਭਾਵਨਾ',
    kn: 'ತೀರ್ಪು ಮತ್ತು ಕಾರ್ಯಸಾಧ್ಯತೆ'
  },
  tabBudget: {
    en: 'Smart Budget Distribution',
    hi: 'स्मार्ट पूंजी बजट वितरण',
    gu: 'સ્માર્ટ મૂડી બજેટ ફાળવણી',
    mr: 'स्मार्ट भांडवल बजेट वाटप',
    mwr: 'पूंजी रो सही बंटवारो',
    bn: 'স্মার্ট বাজেট বিভাজন',
    ta: 'ஸ்மார்ட் பட்ஜெட் பங்கீடு',
    te: 'స్మార్ట్ బడ్జెట్ కేటాయింపు',
    pa: 'ਸਮਾਰਟ ਬਜਟ ਵੰਡ',
    kn: 'ಸ್ಮಾರ್ಟ್ ಬಜೆಟ್ ಹಂಚಿಕೆ'
  },
  tabSchemes: {
    en: 'Matched Govt Schemes',
    hi: 'योग्य सरकारी योजनाएं',
    gu: 'યોગ્ય સરકારી યોજનાઓ',
    mr: 'पात्र सरकारी योजना',
    mwr: 'सरकारी योजनावां',
    bn: 'योग्य সরকারি প্রকল্প',
    ta: 'பொருத்தமான அரசு திட்டங்கள்',
    te: 'సరిపోయే ప్రభుత్వ పథకాలు',
    pa: 'ਯੋਗ ਸਰਕਾਰੀ ਸਕੀਮਾਂ',
    kn: 'ಅರ್ಹ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು'
  },
  tabAlternates: {
    en: 'Alternate Business Ideas',
    hi: 'वैकल्पिक व्यापार सुझाव',
    gu: 'વૈકલ્પિક વ્યવસાય સૂચનો',
    mr: 'पर्यायी व्यवसाय पर्याय',
    mwr: 'दूसरा बढ़िया व्यापार',
    bn: 'বিকল্প ব্যবসার ধারণা',
    ta: 'மாற்று வணிக யோசனைகள்',
    te: 'ప్రత్యామ్నాయ వ్యాపార ఆలోచనలు',
    pa: 'ਬਦਲਵੇਂ ਕਾਰੋਬਾਰ ਦੇ ਸੁਝਾਅ',
    kn: 'ಪರ್ಯಾಯ ವ್ಯವಹಾರ ಕಲ್ಪನೆಗಳು'
  },
  tabCalculator: {
    en: 'Loan & Subsidy Outlay',
    hi: 'ऋण व सब्सिडी गणना',
    gu: 'લોન અને સબસિડી ગણતરી',
    mr: 'कर्ज व अनुदान हिशोब',
    mwr: 'लोन अर सब्सिडी हिसोब',
    bn: 'ঋণ ও ভর্তুকি হিসেব',
    ta: 'கடன் & மானியக் கணக்கீடு',
    te: 'రుణం & సబ్సిడీ లెక్కింపు',
    pa: 'ਕਰਜ਼ਾ ਅਤੇ ਸਬਸਿਡੀ ਗਣਨਾ',
    kn: 'ಸಾಲ ಮತ್ತು ಸಬ್ಸಿಡಿ ಲೆಕ್ಕಾಚಾರ'
  },
  tabRepayment: {
    en: 'EMI & Cashflow Planner',
    hi: 'किश्त व नकदी योजना',
    gu: 'હપ્તા અને કેશફ્લો આયોજન',
    mr: 'हप्ते व कॅशफ्लो नियोजन',
    mwr: 'किस्त अर बहीखातो',
    bn: 'কিস্তি ও ক্যাশফ্লো প্ল্যান',
    ta: 'இஎம்ஐ & பணப்புழக்கத் திட்டம்',
    te: 'ఈఎంఐ & నగదు ప్రవాహ ప్రణాళిక',
    pa: 'ਕਿਸ਼ਤ ਅਤੇ ਕੈਸ਼ਫਲੋ ਯੋਜਨਾ',
    kn: 'ಇಎಂಐ ಮತ್ತು ನಗದು ಹರಿವು ಯೋಜನೆ'
  },

  // Budget Category Labels
  budgetRaw: {
    en: 'Raw Materials & Initial Stock',
    hi: 'कच्चा माल व शुरुआती स्टॉक',
    gu: 'કાચો માલ અને પ્રારંભિક સ્ટોક',
    mr: 'कच्चा माल व सुरुवातीचा साठा',
    mwr: 'कच्चो माल अर दुकान रो सामान',
    bn: 'কাঁচামাল ও প্রাথমিক স্টক',
    ta: 'மூலப்பொருட்கள் & ஆரம்ப இருப்பு',
    te: 'ముడి సరుకులు & ప్రారంభ స్టాక్',
    pa: 'ਕੱਚਾ ਮਾਲ ਅਤੇ ਸ਼ੁਰੂਆਤੀ ਸਟਾਕ',
    kn: 'ಕಚ್ಚಾ ವಸ್ತುಗಳು ಮತ್ತು ಆರಂಭಿಕ ದಾಸ್ತಾನು'
  },
  budgetFixtures: {
    en: 'Furniture, Tools & Store Setup',
    hi: 'फर्नीचर, उपकरण व दुकान सज्जा',
    gu: 'ફર્નિચર, સાધનો અને દુકાન સજાવટ',
    mr: 'फर्निचर, उपकरणे व दुकानाची रचना',
    mwr: 'फर्नीचर, मशीन अर दुकान सेटअप',
    bn: 'আসবাবপত্র, যন্ত্রপাতি ও দোকান সাজসজ্জা',
    ta: 'மரச்சாமான்கள், கருவிகள் & கடை அமைப்பு',
    te: 'ఫర్నిచర్, పరికరాలు & దుకాణ ఏర్పాటు',
    pa: 'ਫਰਨੀਚਰ, ਸੰਦ ਅਤੇ ਦੁਕਾਨ ਦੀ ਸਜਾਵਟ',
    kn: 'ಪೀಠೋಪಕರಣಗಳು, ಉಪಕರಣಗಳು ಮತ್ತು ಅಂಗಡಿ ಸೆಟಪ್'
  },
  budgetMarketing: {
    en: 'Signboard, Pamphlets & Digital QR',
    hi: 'साइनबोर्ड, प्रचार व डिजिटल QR',
    gu: 'સાઇનબોર્ડ, માર્કેટિંગ અને ડિજિટલ QR',
    mr: 'पाटी, जाहिरात व डिजिटल QR कोड',
    mwr: 'बोर्ड, परचा अर डिजिटल QR कोड',
    bn: 'বোর্ড, প্রচারপত্র ও ডিজিটাল QR',
    ta: 'பெயர்ப்பலகை, விளம்பரம் & டிஜிட்டல் QR',
    te: 'సైన్‌బోర్డ్, ప్రచారం & డిజిటల్ QR',
    pa: 'ਬੋਰਡ, ਇਸ਼ਤਿਹਾਰ ਅਤੇ ਡਿਜੀਟਲ QR',
    kn: 'ನೇಮ್ ಬೋರ್ಡ್, ಪ್ರಚಾರ ಮತ್ತು ಡಿಜಿಟಲ್ QR'
  },
  budgetWorkingCap: {
    en: '3-Month Cashflow & Working Capital Cushion',
    hi: '3 महीने की कार्यशील पूंजी व नकद बफ़र',
    gu: '3 મહિનાનું કાર્યકારી મૂડી રિઝર્વ',
    mr: '3 महिन्यांचे खेळते भांडवल व रोख राखीव',
    mwr: '3 महीनां रो खर्चो अर नकद रिज़र्व',
    bn: '৩ মাসের কার্যকরী মূলধন ও নগদ রিজার্ভ',
    ta: '3 மாத செயல்பாட்டு மூலதனம் & பண இருப்பு',
    te: '3 నెలల వర్కింగ్ క్యాపిటల్ & రిజర్వ్',
    pa: '3 ਮਹੀਨਿਆਂ ਦਾ ਵਰਕਿੰਗ ਕੈਪੀਟਲ ਬਫਰ',
    kn: '3 ತಿಂಗಳ ಕಾರ್ಯನಿರತ ಬಂಡವಾಳ ಮತ್ತು ನಗದು ಬಫರ್'
  }
};

// Alternate Business Database Matched to Capital Ranges
export const ALTERNATE_BUSINESSES = [
  {
    id: 'food_cart',
    title: 'Mobile Food Cart & Snacks',
    titleHi: 'चलता-फिरता खाद्य ठेला व नाश्ता',
    titleGu: 'મોબાઇલ ફૂડ લારી અને નાસ્તો',
    titleMr: 'फिरती खाद्य गाडी व अल्पोपहार',
    titleMwr: 'खाद्य ठेलो अर चाय नाश्तो',
    minCap: 30000,
    idealCap: 60000,
    dailyIncome: '₹1,200 - ₹2,500',
    breakeven: '1.5 - 2 Months',
    riskLevel: 'Low',
    locationSuitability: 'Near Bus Stand, Bazaar, School / Hospital',
    whySuggested: 'High daily cash velocity, zero shop rent, minimal gestation period.'
  },
  {
    id: 'tailoring',
    title: 'Boutique & Garment Alteration Unit',
    titleHi: 'बुटीक व वस्त्र सिलाई मरम्मत केंद्र',
    titleGu: 'બુટીક અને કપડાં ટેલરિંગ યુનિટ',
    titleMr: 'बुटीक व कपडे शिलाई केंद्र',
    titleMwr: 'सिलाई अर बुटीक दुकान',
    minCap: 40000,
    idealCap: 80000,
    dailyIncome: '₹900 - ₹1,800',
    breakeven: '2 - 3 Months',
    riskLevel: 'Low',
    locationSuitability: 'Residential Colonies, Market Alleys, Home-based',
    whySuggested: 'Can be started right from home; near 80% profit margin on labor services.'
  },
  {
    id: 'mobile_repair',
    title: 'Mobile Repair & Digital Seva Counter',
    titleHi: 'मोबाइल रिपेयरिंग व डिजिटल सेवा केंद्र',
    titleGu: 'મોબાઇલ રિપેરિંગ અને સીએસસી ડિજિટલ કાઉન્ટર',
    titleMr: 'मोबाइल दुरुस्ती व ग्राहक सेवा केंद्र',
    titleMwr: 'मोबाइल रिपेयर अर डिजिटल काम',
    minCap: 50000,
    idealCap: 100000,
    dailyIncome: '₹1,500 - ₹3,000',
    breakeven: '2 Months',
    riskLevel: 'Moderate',
    locationSuitability: 'Town Center, Tehsil Office, College vicinity',
    whySuggested: 'Combines hardware repairs with online government document/bill payments for steady footfall.'
  },
  {
    id: 'dairy_kiosk',
    title: 'Micro Dairy Parlour & Morning Milk Collection',
    titleHi: 'माइक्रो डेयरी पार्लर व दूध संग्रह',
    titleGu: 'માઇક્રો ડેરી પાર્લર અને દૂધ વિતરણ',
    titleMr: 'डेअरी पार्लर व दुग्ध व्यवसाय',
    titleMwr: 'डेयरी पार्लर अर दूध काम',
    minCap: 60000,
    idealCap: 120000,
    dailyIncome: '₹1,400 - ₹2,800',
    breakeven: '3 Months',
    riskLevel: 'Low',
    locationSuitability: 'Semi-Urban crossroads, Dense residential neighborhoods',
    whySuggested: 'Essential commodity with 100% daily repeat customers and prompt cash turnover.'
  },
  {
    id: 'spices_grinding',
    title: 'Mini Spices & Flour Grinding Unit (Atta Chakki)',
    titleHi: 'मिनी मसाला व आटा पिसाई चक्की',
    titleGu: 'મસાલા અને લોટ દળવાની ઘંટી',
    titleMr: 'मसाले व धान्य दळण चक्की',
    titleMwr: 'मसाला अर आटा पिसाई चक्की',
    minCap: 70000,
    idealCap: 130000,
    dailyIncome: '₹1,200 - ₹2,400',
    breakeven: '2.5 Months',
    riskLevel: 'Low',
    locationSuitability: 'Village Hub, Town Main Road, Residential Sector',
    whySuggested: 'Recession-proof utility business backed by local agricultural harvest.'
  }
];

// Helper to get text in requested language with fallback to English
export function t(key, lang = 'en') {
  if (UI_TEXT[key] && UI_TEXT[key][lang]) {
    return UI_TEXT[key][lang];
  }
  if (UI_TEXT[key] && UI_TEXT[key]['en']) {
    return UI_TEXT[key]['en'];
  }
  return key;
}

// Calculate smart budget breakdown based on capital and trade
export function calculateBudgetBreakdown(capital, businessModelId = 'grocery') {
  const model = BUSINESS_MODELS.find(m => m.id === businessModelId) || BUSINESS_MODELS[0];
  const split = model.budgetSplit;

  const inventoryAmt = Math.round(capital * (split.inventory / 100));
  const fixturesAmt = Math.round(capital * (split.fixtures / 100));
  const marketingAmt = Math.round(capital * (split.marketing / 100));
  const workingCapAmt = capital - (inventoryAmt + fixturesAmt + marketingAmt);

  return {
    total: capital,
    model,
    categories: [
      {
        id: 'inventory',
        nameKey: 'budgetRaw',
        percentage: split.inventory,
        amount: inventoryAmt,
        color: 'var(--indigo)',
        colorLight: 'var(--indigo-light)',
        icon: '📦',
        items: businessModelId === 'grocery' 
          ? 'Fast-moving daily staples, grains, oil, packaged items' 
          : (businessModelId === 'tailoring' ? 'Fabrics, threads, linings, lace, buttons' : 'Raw materials & initial operational stock')
      },
      {
        id: 'fixtures',
        nameKey: 'budgetFixtures',
        percentage: split.fixtures,
        amount: fixturesAmt,
        color: 'var(--marigold-deep)',
        colorLight: 'var(--marigold-light)',
        icon: '🛠️',
        items: businessModelId === 'grocery' 
          ? 'Storage racks, billing counter, digital weighing scale, crates' 
          : (businessModelId === 'tailoring' ? 'Commercial sewing machine, iron, cutting table' : 'Tools, essential equipment & store front')
      },
      {
        id: 'marketing',
        nameKey: 'budgetMarketing',
        percentage: split.marketing,
        amount: marketingAmt,
        color: 'var(--brick)',
        colorLight: 'var(--brick-light)',
        icon: '📢',
        items: 'Front signboard, opening pamphlets, UPI QR standee, WhatsApp catalog'
      },
      {
        id: 'workingCap',
        nameKey: 'budgetWorkingCap',
        percentage: split.workingCap,
        amount: workingCapAmt,
        color: 'var(--paddy)',
        colorLight: 'var(--paddy-light)',
        icon: '🛡️',
        items: '3-Month rent cushion, electricity deposit, emergency cash reserve'
      }
    ]
  };
}

// Find matched alternate businesses based on capital
export function getAlternateBusinesses(capital, currentBusinessId) {
  return ALTERNATE_BUSINESSES.filter(b => b.id !== currentBusinessId && b.minCap <= Math.max(capital * 1.25, 40000)).slice(0, 3);
}
