/**
 * Rythu Mitra - Indian Farmers Government Schemes Portal
 * Comprehensive Data Store, Indian States & Districts, Demonstration Schemes & LocalStorage APIs
 */

// Comprehensive list of Indian States, UTs and their respective districts
const INDIAN_STATES_DISTRICTS = {
  "Andhra Pradesh": [
    "All Districts",
    "Anakapalli",
    "Ananthapuramu (Anantapur)",
    "Annamayya",
    "Bapatla",
    "Chittoor",
    "Dr. B.R. Ambedkar Konaseema",
    "East Godavari",
    "Eluru",
    "Guntur",
    "Kakinada",
    "Krishna",
    "Kurnool",
    "Nandyal",
    "NTR",
    "Palnadu",
    "Parvathipuram Manyam",
    "Prakasam",
    "Sri Potti Sriramulu Nellore",
    "Sri Sathya Sai",
    "Srikakulam",
    "Tirupati",
    "Visakhapatnam",
    "Vizianagaram",
    "West Godavari",
    "YSR Kadapa"
  ],
  "Telangana": [
    "All Districts",
    "Adilabad",
    "Bhadradri Kothagudem",
    "Hanamkonda",
    "Hyderabad",
    "Jagtial",
    "Jangaon",
    "Jayashankar Bhupalpally",
    "Jogulamba Gadwal",
    "Kamareddy",
    "Karimnagar",
    "Khammam",
    "Kumuram Bheem Asifabad",
    "Mahabubabad",
    "Mahabubnagar",
    "Mancherial",
    "Medak",
    "Medchal-Malkajgiri",
    "Mulugu",
    "Nagarkurnool",
    "Nalgonda",
    "Narayanpet",
    "Nirmal",
    "Nizamabad",
    "Peddapalli",
    "Rajanna Sircilla",
    "Ranga Reddy",
    "Sangareddy",
    "Siddipet",
    "Suryapet",
    "Vikarabad",
    "Wanaparthy",
    "Warangal",
    "Yadadri Bhuvanagiri"
  ],
  "Karnataka": [
    "All Districts",
    "Bagalkot",
    "Ballari (Bellary)",
    "Belagavi (Belgaum)",
    "Bengaluru Rural",
    "Bengaluru Urban",
    "Bidar",
    "Chamarajanagar",
    "Chikkaballapur",
    "Chikkamagaluru",
    "Chitradurga",
    "Dakshina Kannada",
    "Davanagere",
    "Dharwad",
    "Gadag",
    "Hassan",
    "Haveri",
    "Kalaburagi (Gulbarga)",
    "Kodagu",
    "Kolar",
    "Koppal",
    "Mandya",
    "Mysuru (Mysore)",
    "Raichur",
    "Ramanagara",
    "Shivamogga (Shimoga)",
    "Tumakuru (Tumkur)",
    "Udupi",
    "Uttara Kannada",
    "Vijayapura (Bijapur)",
    "Vijayanagara",
    "Yadgir"
  ],
  "Tamil Nadu": [
    "All Districts",
    "Ariyalur",
    "Chengalpattu",
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kallakurichi",
    "Kanchipuram",
    "Kanyakumari",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Mayiladuthurai",
    "Nagapattinam",
    "Namakkal",
    "Nilgiris",
    "Perambalur",
    "Pudukkottai",
    "Ramanathapuram",
    "Ranipet",
    "Salem",
    "Sivaganga",
    "Tenkasi",
    "Thanjavur",
    "Theni",
    "Thoothukudi",
    "Tiruchirappalli",
    "Tirunelveli",
    "Tirupathur",
    "Tiruppur",
    "Tiruvallur",
    "Tiruvannamalai",
    "Tiruvarur",
    "Vellore",
    "Viluppuram",
    "Virudhunagar"
  ],
  "Maharashtra": [
    "All Districts",
    "Ahmednagar",
    "Akola",
    "Amravati",
    "Aurangabad (Chhatrapati Sambhajinagar)",
    "Beed",
    "Bhandara",
    "Buldhana",
    "Chandrapur",
    "Dhule",
    "Gadchiroli",
    "Gondia",
    "Hingoli",
    "Jalgaon",
    "Jalna",
    "Kolhapur",
    "Latur",
    "Mumbai City",
    "Mumbai Suburban",
    "Nagpur",
    "Nanded",
    "Nandurbar",
    "Nashik",
    "Osmanabad (Dharashiv)",
    "Palghar",
    "Parbhani",
    "Pune",
    "Raigad",
    "Ratnagiri",
    "Sangli",
    "Satara",
    "Sindhudurg",
    "Solapur",
    "Thane",
    "Wardha",
    "Washim",
    "Yavatmal"
  ],
  "Uttar Pradesh": [
    "All Districts",
    "Agra",
    "Aligarh",
    "Ayodhya",
    "Bareilly",
    "Basti",
    "Gorakhpur",
    "Jhansi",
    "Kanpur Nagar",
    "Lucknow",
    "Mathura",
    "Meerut",
    "Mirzapur",
    "Moradabad",
    "Prayagraj (Allahabad)",
    "Varanasi"
  ],
  "Punjab": [
    "All Districts",
    "Amritsar",
    "Bathinda",
    "Faridkot",
    "Fatehgarh Sahib",
    "Firozpur",
    "Gurdaspur",
    "Hoshiarpur",
    "Jalandhar",
    "Ludhiana",
    "Mansa",
    "Moga",
    "Patiala",
    "Sangrur"
  ],
  "Haryana": [
    "All Districts",
    "Ambala",
    "Bhiwani",
    "Faridabad",
    "Fatehabad",
    "Gurugram",
    "Hisar",
    "Jhajjar",
    "Jind",
    "Kaithal",
    "Karnal",
    "Kurukshetra",
    "Panipat",
    "Rohtak",
    "Sirsa",
    "Sonipat"
  ],
  "Rajasthan": [
    "All Districts",
    "Ajmer",
    "Alwar",
    "Bikaner",
    "Barmer",
    "Bharatpur",
    "Bhilwara",
    "Chittorgarh",
    "Jaipur",
    "Jodhpur",
    "Kota",
    "Nagaur",
    "Sikar",
    "Sri Ganganagar",
    "Udaipur"
  ],
  "Madhya Pradesh": [
    "All Districts",
    "Bhopal",
    "Chhindwara",
    "Dewas",
    "Gwalior",
    "Hoshangabad (Narmadapuram)",
    "Indore",
    "Jabalpur",
    "Khargone",
    "Rewa",
    "Sagar",
    "Satna",
    "Sehore",
    "Ujjain"
  ],
  "Bihar": [
    "All Districts",
    "Bhagalpur",
    "Darbhanga",
    "Gaya",
    "Muzaffarpur",
    "Nalanda",
    "Patna",
    "Purnia",
    "Rohtas",
    "Samastipur",
    "Vaishali"
  ],
  "Gujarat": [
    "All Districts",
    "Ahmedabad",
    "Amreli",
    "Anand",
    "Banaskantha",
    "Bharuch",
    "Bhavnagar",
    "Junagadh",
    "Kutch",
    "Mehsana",
    "Rajkot",
    "Surat",
    "Vadodara"
  ],
  "West Bengal": [
    "All Districts",
    "Bankura",
    "Birbhum",
    "Hooghly",
    "Howrah",
    "Jalpaiguri",
    "Murshidabad",
    "Nadia",
    "North 24 Parganas",
    "Purba Bardhaman",
    "South 24 Parganas"
  ],
  "Odisha": [
    "All Districts",
    "Balasore",
    "Bhadrak",
    "Cuttack",
    "Ganjam",
    "Kalahandi",
    "Khordha",
    "Koraput",
    "Mayurbhanj",
    "Puri",
    "Sambalpur"
  ],
  "Kerala": [
    "All Districts",
    "Alappuzha",
    "Ernakulam",
    "Idukki",
    "Kannur",
    "Kasaragod",
    "Kollam",
    "Kottayam",
    "Kozhikode",
    "Malappuram",
    "Palakkad",
    "Pathanamthitta",
    "Thiruvananthapuram",
    "Thrissur",
    "Wayanad"
  ],
  "Assam": [
    "All Districts",
    "Barpeta",
    "Cachar",
    "Darrang",
    "Dibrugarh",
    "Kamrup Metropolitan",
    "Nagaon",
    "Sonitpur",
    "Tinsukia"
  ],
  "Himachal Pradesh": [
    "All Districts",
    "Bilaspur",
    "Chamba",
    "Hamirpur",
    "Kangra",
    "Kullu",
    "Mandi",
    "Shimla",
    "Solan",
    "Una"
  ],
  "Uttarakhand": [
    "All Districts",
    "Almora",
    "Chamoli",
    "Dehradun",
    "Haridwar",
    "Nainital",
    "Pauri Garhwal",
    "Tehri Garhwal",
    "Udham Singh Nagar"
  ],
  "Chhattisgarh": [
    "All Districts",
    "Bilaspur",
    "Durg",
    "Janjgir-Champa",
    "Korba",
    "Raigarh",
    "Raipur",
    "Rajnandgaon"
  ],
  "Jharkhand": [
    "All Districts",
    "Bokaro",
    "Deoghar",
    "Dhanbad",
    "East Singhbhum",
    "Hazaribagh",
    "Ranchi",
    "West Singhbhum"
  ],
  "Goa": [
    "All Districts",
    "North Goa",
    "South Goa"
  ]
};

// Initial Realistic Demonstration Schemes (Curated Trilingual Records)
const INITIAL_SCHEMES = [
  // 1. Nationwide Agricultural Scheme: PM-KISAN
  {
    id: "scheme-001",
    name: {
      en: "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
      te: "పీఎం-కిసాన్ (ప్రధాన మంత్రి కిసాన్ సమ్మాన్ నిధి)",
      hi: "पीएम-किसान (प्रधानमंत्री किसान सम्मान निधि)"
    },
    description: {
      en: "A central sector scheme providing guaranteed annual direct income support to all landholding farmer families across India to meet farm input and domestic requirements.",
      te: "దేశవ్యాప్తంగా సాగుభూమి ఉన్న ప్రతి రైతు కుటుంబానికి పెట్టుబడి మరియు కుటుంబ ఖర్చుల నిమిత్తం కేంద్ర ప్రభుత్వం అందించే ప్రత్యక్ష వార్షిక నగదు ప్రోత్సాహక పథకం.",
      hi: "भारत भर के सभी भूमिधारक किसान परिवारों को कृषि इनपुट और घरेलू आवश्यकताओं को पूरा करने के लिए केंद्र सरकार द्वारा दी जाने वाली प्रत्यक्ष वार्षिक आय सहायता योजना।"
    },
    eligibility: {
      en: "All landholding farmer families having cultivable land in their names. Institutional landholders, serving/retired government employees, and income tax payees are excluded.",
      te: "తమ పేరిట సాగు భూమి ఉన్న రైతు కుటుంబాలన్నీ అర్హులు. సంస్థాగత భూ యజమానులు, ప్రభుత్వ ఉద్యోగులు, ఆదాయపు పన్ను చెల్లించే వారు మినహాయింపు.",
      hi: "अपने नाम पर कृषि योग्य भूमि रखने वाले सभी किसान परिवार। संस्थागत भूमिधारक, सरकारी कर्मचारी और आयकरदाता इसमें शामिल नहीं हैं।"
    },
    benefits: {
      en: "₹6,000 per year transferred directly into Aadhaar-seeded bank accounts in three equal 4-monthly installments of ₹2,000 each.",
      te: "ఏడాదికి ₹6,000 చొప్పున 3 విడతల్లో (ప్రతి 4 నెలలకు ₹2,000) నేరుగా ఆధార్ అనుసంధాన బ్యాంక్ ఖాతాలో జమ చేయబడుతుంది.",
      hi: "प्रति वर्ष ₹6,000 की राशि तीन समान किस्तों में (प्रत्येक 4 माह में ₹2,000) सीधे आधार से जुड़े बैंक खातों में हस्तांतरित की जाती है।"
    },
    documents: {
      en: "Aadhaar Card, Land ownership record (RoR 1B / Pattadar Passbook / Khasra-Khatauni), Active Bank Passbook with IFSC, Mobile number linked to Aadhaar.",
      te: "ఆధార్ కార్డు, పట్టాదార్ పాస్‌బుక్ / వెబ్‌ల్యాండ్ 1B రికార్డు, ఐఎఫ్‌ఎస్‌సీ కోడ్‌తో కూడిన బ్యాంక్ పాస్‌బుక్, ఆధార్ లింక్ అయిన మొబైల్ నంబర్.",
      hi: "आधार कार्ड, भूमि स्वामित्व रिकॉर्ड (खसरा-खतौनी / पट्टादार पासबुक), बैंक पासबुक एवं आईएफएससी, आधार से जुड़ा मोबाइल नंबर।"
    },
    applicationProcess: {
      en: "Self-register on pmkisan.gov.in using 'New Farmer Registration' module, or apply through nearest CSC (Common Service Center) or Village Nodal Officer.",
      te: "pmkisan.gov.in వెబ్‌సైట్‌లో 'న్యూ ఫార్మర్ రిజిస్ట్రేషన్' ద్వారా స్వయంగా లేదా సమీప మీ-సేవా/CSC కేంద్రం ద్వారా దరఖాస్తు చేసుకోవచ్చు.",
      hi: "pmkisan.gov.in पर 'न्यू फार्मर रजिस्ट्रेशन' द्वारा स्वयं या निकटतम सीएससी (कॉमन सर्विस सेंटर) अथवा कृषि अधिकारी के माध्यम से पंजीकरण करें।"
    },
    state: "All",
    district: "All",
    village: "All",
    minLand: 0.01,
    maxLand: 999,
    category: "Financial Assistance",
    officialUrl: "https://pmkisan.gov.in",
    status: "active",
    dateAdded: "2026-01-10"
  },

  // 2. Andhra Pradesh-Specific Scheme: YSR Rythu Bharosa / Annadata Sukhibhava
  {
    id: "scheme-002",
    name: {
      en: "YSR Rythu Bharosa - Annadata Sukhibhava (Andhra Pradesh)",
      te: "వైఎస్సార్ రైతు భరోసా - అన్నదాత సుఖీభవ (ఆంధ్రప్రదేశ్)",
      hi: "वाईएसआर रायथु भरोसा - अन्नदाता सुखीभव (आंध्र प्रदेश)"
    },
    description: {
      en: "Comprehensive crop investment and welfare support scheme implemented by the Government of Andhra Pradesh for landowning and tenant farmers prior to sowing seasons.",
      te: "విత్తనాలు, ఎరువుల పెట్టుబడి కోసం పంటల సాగుకు ముందే ఆంధ్రప్రదేశ్ ప్రభుత్వం భూయజమానులకు మరియు కౌలు రైతులకు అందించే సమగ్ర పెట్టుబడి సాయం పథకం.",
      hi: "आंध्र प्रदेश सरकार द्वारा बुवाई से पूर्व भूस्वामी और काश्तकार किसानों को खाद, बीज व कृषि निवेश के लिए दी जाने वाली व्यापक सहायता योजना।"
    },
    eligibility: {
      en: "Resident farmers of Andhra Pradesh cultivating own land up to 25 acres, including SC/ST/BC/Minority tenant farmers with valid CCRC (Crop Cultivator Rights Card).",
      te: "ఆంధ్రప్రదేశ్ రాష్ట్రంలో 25 ఎకరాల లోపు సొంత సాగుభూమి ఉన్న రైతులు మరియు చెల్లుబాటు అయ్యే CCRC కార్డు కలిగిన ఎస్సీ/ఎస్టీ/బీసీ/మైనారిటీ కౌలు రైతులు అర్హులు.",
      hi: "आंध्र प्रदेश के निवासी किसान जिनके पास 25 एकड़ तक कृषि भूमि है, साथ ही वैध सीसीआरसी कार्ड धारक अनुसूचित जाति/जनजाति/पिछड़ा वर्ग के काश्तकार किसान।"
    },
    benefits: {
      en: "₹13,500 to ₹20,000 per year per eligible farmer family provided in seasonal installments (Kharif, Rabi, and Sankranti festival harvest).",
      te: "అర్హులైన ప్రతి రైతు కుటుంబానికి ఏడాదికి ₹13,500 నుండి ₹20,000 వరకు ఖరీఫ్, రబీ మరియు సంక్రాంతి సీజన్లలో విడతల వారీగా ఖాతాలో జమ.",
      hi: "प्रति पात्र किसान परिवार को प्रति वर्ष ₹13,500 से ₹20,000 तक की वित्तीय सहायता मौसमी किस्तों (खरीफ, रबी और फसल कटाई) में सीधे बैंक खाते में।"
    },
    documents: {
      en: "Pattadar Passbook / Webland RoR 1-B, CCRC Card (for Tenant Farmers), Aadhaar Card, Rice Card / Ration Card, Bank Passbook copy.",
      te: "పట్టాదారు పాసుపుస్తకం / వెబ్‌ల్యాండ్ 1-B, కౌలుదారులకు CCRC కార్డ్, ఆధార్ కార్డు, రైస్ కార్డు / రేషన్ కార్డు, బ్యాంక్ ఖాతా వివరాలు.",
      hi: "पट्टादार पासबुक / वेबलैंड 1-बी, काश्तकारों हेतु सीसीआरसी कार्ड, आधार कार्ड, राशन कार्ड, बैंक पासबुक प्रति।"
    },
    applicationProcess: {
      en: "Verified on ground by Village Agriculture Assistant (VAA) at local Rythu Bharosa Kendras (RBK) with social audit list display.",
      te: "స్థానిక గ్రామ రైతు భరోసా కేంద్రం (RBK) వద్ద గ్రామ వ్యవసాయ సహాయకుడు (VAA) ద్వారా పరిశీలన మరియు సోషల్ ఆడిట్ జాబితా ద్వారా ఎంపిక.",
      hi: "स्थानीय रायथु भरोसा केंद्र (आरबीके) पर ग्राम कृषि सहायक (वीएए) द्वारा सत्यापन और सामाजिक अंकेक्षण सूची प्रदर्शन द्वारा।"
    },
    state: "Andhra Pradesh",
    district: "All",
    village: "All",
    minLand: 0.1,
    maxLand: 25,
    category: "Financial Assistance",
    officialUrl: "https://ysrrythubharosa.ap.gov.in",
    status: "active",
    dateAdded: "2026-01-15"
  },

  // 3. Telangana-Specific Scheme: Rythu Bandhu / Rythu Bharosa Investment Support
  {
    id: "scheme-003",
    name: {
      en: "Rythu Bandhu - Rythu Bharosa Agriculture Investment Scheme (Telangana)",
      te: "రైతు బంధు - రైతు భరోసా వ్యవసాయ పెట్టుబడి పథకం (తెలంగాణ)",
      hi: "रायथु बंधु - रायथु भरोसा कृषि निवेश सहायता योजना (तेलंगाना)"
    },
    description: {
      en: "First-of-its-kind direct investment support initiative by Telangana Government to liberate farmers from debt traps and purchase agricultural inputs every season.",
      te: "రైతులను వడ్డీ వ్యాపారుల రుణ ఊబి నుండి కాపాడటానికి మరియు ప్రతి పంట కాలానికి నాణ్యమైన విత్తనాలు, ఎరువులు కొనుగోలు చేయడానికి తెలంగాణ ప్రభుత్వం అందించే నేరుగా పెట్టుబడి సాయం.",
      hi: "किसानों को साहूकारों के कर्ज के जाल से मुक्त कराने तथा प्रत्येक फसल सत्र में उच्च गुणवत्ता वाले बीज व उर्वरक खरीदने हेतु तेलंगाना सरकार की प्रत्यक्ष निवेश सहायता।"
    },
    eligibility: {
      en: "All resident farmers in Telangana possessing computerized Pattadar passbooks registered on the state Dharani land portal.",
      te: "తెలంగాణ రాష్ట్రంలో ధరణి పోర్టల్‌లో నమోదైన డిజిటల్ పట్టాదారు పాస్‌పుస్తకం కలిగిన ప్రతి సాగు రైతు అర్హులు.",
      hi: "तेलंगाना के सभी किसान जिनके पास धरणी भूमि पोर्टल पर पंजीकृत कम्प्यूटरीकृत पट्टादार पासबुक उपलब्ध है।"
    },
    benefits: {
      en: "Financial grant of ₹5,000 to ₹7,500 per acre per season (total ₹10,000 to ₹15,000 per acre per year for two seasons) directly into bank accounts.",
      te: "ఎకరానికి ప్రతి సీజన్‌కు ₹5,000 నుండి ₹7,500 (రెండు పంటలకు కలిపి ఎకరానికి ₹10,000 నుండి ₹15,000) నేరుగా బ్యాంకు ఖాతాలో చెల్లింపు.",
      hi: "प्रति एकड़ प्रति सत्र ₹5,000 से ₹7,500 की दर से (दो सत्रों के लिए प्रति वर्ष ₹10,000 से ₹15,000 प्रति एकड़) सीधा बैंक हस्तांतरण।"
    },
    documents: {
      en: "Dharani Pattadar Passbook, Aadhaar card, Active bank savings account details with IFSC code.",
      te: "ధరణి పట్టాదారు పాస్‌పుస్తకం, ఆధార్ కార్డు, ఐఎఫ్‌ఎస్‌సీతో కూడిన బ్యాంకు పొదుపు ఖాతా పాస్‌బుక్.",
      hi: "धरणी पट्टादार पासबुक, आधार कार्ड, बैंक बचत खाता विवरण व आईएफएससी कोड।"
    },
    applicationProcess: {
      en: "Automated direct credit for existing Dharani registered farmers. New patta owners submit passbook copy to Agriculture Extension Officer (AEO).",
      te: "ధరణిలో నమోదైన రైతులకు ఆటోమేటిక్ జమ. కొత్తగా భూమి రిజిస్ట్రేషన్ చేసుకున్న వారు వ్యవసాయ విస్తరణాధికారి (AEO) కి పత్రాలు సమర్పించాలి.",
      hi: "धरणी पोर्टल पर पंजीकृत किसानों को स्वतः भुगतान। नए किसान अपनी पासबुक प्रति स्थानीय कृषि विस्तार अधिकारी (एईओ) को जमा करें।"
    },
    state: "Telangana",
    district: "All",
    village: "All",
    minLand: 0.1,
    maxLand: 50,
    category: "Financial Assistance",
    officialUrl: "https://rythubandhu.telangana.gov.in",
    status: "active",
    dateAdded: "2026-02-01"
  },

  // 4. District-Specific Scheme: Special Micro-Irrigation & Drip Subsidy (Anantapur District)
  {
    id: "scheme-004",
    name: {
      en: "Special Micro-Irrigation & Drip Subsidy Scheme (Anantapur District Drought Relief)",
      te: "ప్రత్యేక సూక్ష్మ సేద్యం & బిందు సేద్య రాయితీ పథకం (అనంతపురం జిల్లా కరువు ఉపశమనం)",
      hi: "विशेष सूक्ष्म सिंचाई एवं ड्रिप सब्सिडी योजना (अनंतपुर ज़िला सूखा राहत)"
    },
    description: {
      en: "Targeted drought-proofing horticulture irrigation initiative providing up to 90% subsidy on Drip and Micro-Sprinkler systems in rain-shadow districts like Ananthapuramu and Sri Sathya Sai.",
      te: "అనంతపురం మరియు శ్రీ సత్యసాయి వంటి తీవ్ర వర్షాభావ జిల్లాలలో ఉద్యాన పంటలను కాపాడటానికి 90% వరకు భారీ సబ్సిడీతో డ్రిప్ మరియు స్ప్రింక్లర్ పరికరాలు అందించే ప్రత్యేక పథకం.",
      hi: "अनंतपुर व श्री सत्य साई जैसे गंभीर सूखा प्रभावित क्षेत्रों में बागवानी और नकदी फसलों के संरक्षण हेतु ड्रिप और स्प्रिंकलर सिस्टम पर 90% तक की विशेष सब्सिडी योजना।"
    },
    eligibility: {
      en: "Farmers with cultivable land in Ananthapuramu (Anantapur) or Sri Sathya Sai district having an assured borewell or open well water source.",
      te: "అనంతపురం లేదా శ్రీ సత్యసాయి జిల్లాలో సాగు భూమి ఉండి, బోరు బావి లేదా ఓపెన్ బావి నీటి వనరు కలిగిన రైతులు.",
      hi: "अनंतपुर अथवा श्री सत्य साई ज़िले में कृषि योग्य भूमि रखने वाले किसान जिनके पास बोरवेल या कुएं का सुनिश्चित जल स्रोत उपलब्ध है।"
    },
    benefits: {
      en: "90% subsidy for Small & Marginal farmers (up to 5 acres) and 70% subsidy for other farmers on branded BIS approved drip irrigation installation, including free 3-year maintenance warranty.",
      te: "చిన్న, సన్నకారు రైతులకు (5 ఎకరాల లోపు) 90% రాయితీ, ఇతర రైతులకు 70% రాయితీతో నాణ్యమైన డ్రిప్ పరికరాల అమరిక మరియు 3 సంవత్సరాల ఉచిత సర్వీస్.",
      hi: "छोटे एवं सीमांत किसानों (5 एकड़ तक) के लिए 90% सब्सिडी तथा अन्य किसानों के लिए 70% सब्सिडी पर बीआईएस प्रमाणित ड्रिप प्रणाली और 3 साल की वारंटी।"
    },
    documents: {
      en: "Land Patta Passbook (Pahani / 1-B), Electricity service connection certificate for water source, Aadhaar card, Soil/Water suitability test report.",
      te: "భూమి పట్టాదారు పాసుపుస్తకం (పహానీ / 1-B), విద్యుత్ సర్వీస్ కనెక్షన్ రసీదు, ఆధార్ కార్డు, నేల మరియు నీటి పరీక్ష రిపోర్టు.",
      hi: "भूमि पट्टा पासबुक (पाहानी / 1-बी), सिंचाई स्रोत हेतु बिजली कनेक्शन प्रमाणपत्र, आधार कार्ड, मृदा एवं जल परीक्षण रिपोर्ट।"
    },
    applicationProcess: {
      en: "Apply through Andhra Pradesh Micro Irrigation Project (APMIP) portal or visit the Assistant Director of Horticulture (ADH) at District Collectorate / RBK.",
      te: "ఆంధ్రప్రదేశ్ సూక్ష్మ సేద్య ప్రాజెక్ట్ (APMIP) పోర్టల్ ద్వారా లేదా మండల వ్యవసాయ/ఉద్యాన అధికారి, రైతు భరోసా కేంద్రంలో దరఖాస్తు చేయాలి.",
      hi: "आंध्र प्रदेश माइक्रो इरीगेशन प्रोजेक्ट (APMIP) पोर्टल पर आवेदन करें अथवा ज़िला बागवानी अधिकारी / आरबीके से संपर्क करें।"
    },
    state: "Andhra Pradesh",
    district: "Ananthapuramu (Anantapur)",
    village: "All",
    minLand: 0.5,
    maxLand: 12.5,
    category: "Irrigation & Water",
    officialUrl: "https://apmip.ap.gov.in",
    status: "active",
    dateAdded: "2026-02-12"
  },

  // 5. Land Eligibility-Specific Scheme: Sub-Mission on Agricultural Mechanization (SMAM - Up to 5 Acres)
  {
    id: "scheme-005",
    name: {
      en: "Sub-Mission on Agricultural Mechanization (SMAM) - Farm Equipment Subsidy for Small & Marginal Farmers",
      te: "వ్యవసాయ యాంత్రీకరణ ఉప-మిషన్ (SMAM) - చిన్న & సన్నకారు రైతులకు వ్యవసాయ యంత్రాల రాయితీ",
      hi: "कृषि यंत्रीकरण उप-मिशन (एसएमएएम) - छोटे और सीमांत किसानों के लिए कृषि यंत्र सब्सिडी"
    },
    description: {
      en: "A centrally sponsored scheme dedicated specifically to small and marginal farmers with up to 5 acres to facilitate affordable farm mechanization such as power tillers, seed drills, and brush cutters.",
      te: "కూలీల కొరతను అధిగమించడానికి 5 ఎకరాల లోపు చిన్న మరియు సన్నకారు రైతులకు పవర్ టిల్లర్లు, విత్తనాలు నాటే యంత్రాలు, బ్రష్ కట్టర్ల కొనుగోలుపై కేంద్ర ప్రభుత్వం అందించే రాయితీ పథకం.",
      hi: "5 एकड़ तक की जोत वाले छोटे और सीमांत किसानों के लिए श्रम लागत घटाने हेतु पावर टिलर, रोटावेटर और सीड ड्रिल जैसे आधुनिक कृषि उपकरणों पर भारी सब्सिडी योजना।"
    },
    eligibility: {
      en: "Strictly for Small and Marginal farmers having landholding equal to or less than 5.0 Acres (2.0 Hectares). SC/ST and women farmers receive highest subsidy priority.",
      te: "ఖచ్చితంగా 5 ఎకరాల లోపు (2 హెక్టార్లు) సాగు భూమి ఉన్న చిన్న, సన్నకారు రైతులు మాత్రమే అర్హులు. ఎస్సీ/ఎస్టీ మరియు మహిళా రైతులకు గరిష్ట ప్రాధాన్యత.",
      hi: "कड़ाई से केवल 5 एकड़ (2 हेक्टेयर) या उससे कम कृषि भूमि रखने वाले छोटे और सीमांत किसान ही पात्र हैं। महिला व एससी/एसटी किसानों को विशेष प्राथमिकता।"
    },
    benefits: {
      en: "40% to 50% capital subsidy (up to ₹1,25,000 depending on implement) on approved farm machinery, power weeders, multi-crop threshers, and sprayers.",
      te: "రాయితీ పద్ధతిలో వ్యవసాయ పరికరాలు, పవర్ వీడర్లు, స్ప్రేయర్లు మరియు ట్రాక్టర్ పరికరాలపై 40% నుండి 50% వరకు (గరిష్టంగా ₹1,25,000 వరకు) ఆర్థిక రాయితీ.",
      hi: "स्वीकृत कृषि यंत्रों, रोटावेटर, रीपर, कल्टीवेटर और स्प्रेयर पर 40% से 50% तक (अधिकतम ₹1,25,000 तक) की पूंजीगत वित्तीय सब्सिडी।"
    },
    documents: {
      en: "Land holding certificate clearly showing total land under 5.0 acres, Caste certificate (if claiming SC/ST priority), Aadhaar Card, Bank passbook, Passport photograph.",
      te: "5 ఎకరాలలోపు భూమి ఉన్నట్లు తహసీల్దార్ ధృవీకరణ / తాజా 1-B పహానీ, కుల ధృవీకరణ పత్రం (ఎస్సీ/ఎస్టీ అయితే), ఆధార్, బ్యాంక్ పాస్‌బుక్ కాపీ.",
      hi: "5 एकड़ से कम भूमि होने का राजस्व प्रमाणपत्र/खतौनी, जाति प्रमाणपत्र (एससी/एसटी हेतु), आधार कार्ड, बैंक पासबुक की प्रति।"
    },
    applicationProcess: {
      en: "Apply directly through Agricoop DBT Agriculture Machinery Portal (agrimachinery.nic.in) or District Agriculture Officer.",
      te: "కేంద్ర వ్యవసాయ శాఖ agrimachinery.nic.in పోర్టల్‌లో రిజిస్ట్రేషన్ చేసుకొని స్థానిక వ్యవసాయ కార్యాలయంలో దరఖాస్తు చేసుకోవాలి.",
      hi: "केंद्रीय कृषि मंत्रालय के डीबीटी पोर्टल agrimachinery.nic.in पर ऑनलाइन आवेदन करें अथवा ज़िला कृषि अधिकारी के पास जमा करें।"
    },
    state: "All",
    district: "All",
    village: "All",
    minLand: 0.1,
    maxLand: 5.0,
    category: "Farm Machinery",
    officialUrl: "https://agrimachinery.nic.in",
    status: "active",
    dateAdded: "2026-02-18"
  },

  // 6. Pradhan Mantri Fasal Bima Yojana (PMFBY - Comprehensive Crop Insurance)
  {
    id: "scheme-006",
    name: {
      en: "Pradhan Mantri Fasal Bima Yojana (PMFBY - Crop Insurance)",
      te: "ప్రధాన మంత్రి ఫసల్ బీమా యోజన (PMFBY - పంటల బీమా)",
      hi: "प्रधानमंत्री फसल बीमा योजना (पीएमएफबीवाई - फसल सुरक्षा)"
    },
    description: {
      en: "A robust national crop risk management safety net offering financial protection to farmers against non-preventable natural risks like drought, floods, pest attack, and hailstorms.",
      te: "కరువు, అధిక వర్షాలు, తుఫానులు, తెగుళ్లు వంటి ప్రకృతి వైపరీత్యాల వల్ల పంట నష్టపోయినప్పుడు రైతులకు పూర్తి ఆర్థిక పరిహారం అందించే జాతీయ పంటల బీమా రక్షణ కవచం.",
      hi: "सूखा, बाढ़, ओलावृष्टि व कीट प्रकोप जैसे प्राकृतिक आपदाओं से फसल नुकसान की स्थिति में किसानों को संपूर्ण वित्तीय सुरक्षा कवच प्रदान करने वाली राष्ट्रीय योजना।"
    },
    eligibility: {
      en: "All farmers growing notified crops in notified areas including loanee and non-loanee farmers, sharecroppers, and tenant cultivators.",
      te: "ప్రభుత్వం గుర్తించిన నోటిఫైడ్ పంటలను సాగుచేస్తున్న ప్రతి రైతు (రుణం తీసుకున్నవారు, రుణం లేనివారు మరియు కౌలు రైతులు అందరూ) అర్హులు.",
      hi: "अधिसूचित क्षेत्रों में अधिसूचित फसल उगाने वाले सभी किसान—ऋणी व गैर-ऋणी किसान, बटाईदार और काश्तकार किसान।"
    },
    benefits: {
      en: "Lowest uniform premium: Only 2% for Kharif crops, 1.5% for Rabi food and oilseeds, and 5% for annual commercial/horticultural crops. Balance premium paid 100% by Government.",
      te: "రైతులు చెల్లించాల్సిన నామమాత్రపు ప్రీమియం: ఖరీఫ్ ఆహార పంటలకు 2%, రబీ పంటలకు 1.5%, వాణిజ్య పంటలకు 5% మాత్రమే. మిగిలిన మొత్తం ఖర్చు ప్రభుత్వమే భరిస్తుంది.",
      hi: "अत्यंत कम प्रीमियम: खरीफ फसलों के लिए मात्र 2%, रबी फसलों के लिए 1.5% तथा बागवानी फसलों के लिए 5%। शेष प्रीमियम का पूर्ण भुगतान सरकार करती है।"
    },
    documents: {
      en: "Land Ownership Record (Pahani / Khasra-Khatauni), Sowing Certificate from Village Revenue/Agriculture Officer, Bank Passbook, Aadhaar Card.",
      te: "భూమి యాజమాన్య రికార్డు (పహానీ / అడంగల్), విత్తినట్లు గ్రామ రెవెన్యూ/వ్యవసాయ అధికారి ఇచ్చిన ధృవీకరణ పత్రం, బ్యాంక్ పాస్‌బుక్, ఆధార్ కార్డు.",
      hi: "भूमि स्वामित्व रिकॉर्ड (खसरा-खतौनी / पाहानी), बुवाई प्रमाणपत्र, बैंक पासबुक और आधार कार्ड।"
    },
    applicationProcess: {
      en: "Enroll through PMFBY portal (pmfby.gov.in), local commercial/cooperative banks, Primary Agricultural Credit Societies (PACS), or CSCs before seasonal cut-off date.",
      te: "pmfby.gov.in పోర్టల్ ద్వారా లేదా బ్యాంక్ బ్రాంచ్, పీఏసీఎస్ (PACS), మీ-సేవా/CSC కేంద్రాల ద్వారా కటాఫ్ తేదీ లోపు ప్రీమియం చెల్లించి చేరవచ్చు.",
      hi: "pmfby.gov.in पोर्टल, बैंक शाखा, प्राथमिक कृषि सहकारी समिति (पीएसीएस) या सीएससी केंद्र के माध्यम से निर्धारित तिथि से पूर्व पंजीकरण कराएं।"
    },
    state: "All",
    district: "All",
    village: "All",
    minLand: 0.1,
    maxLand: 100,
    category: "Crop Insurance",
    officialUrl: "https://pmfby.gov.in",
    status: "active",
    dateAdded: "2026-02-25"
  },

  // 7. Telangana Free Power & Solar Pump Subsidy (PM-KUSUM Component B)
  {
    id: "scheme-007",
    name: {
      en: "Telangana 24x7 Free Agriculture Power & Solar Feeder Pump Subsidy",
      te: "తెలంగాణ 24 గంటల ఉచిత వ్యవసాయ విద్యుత్ & సోలార్ పంపుల రాయితీ",
      hi: "तेलंगाना 24x7 मुफ्त कृषि बिजली और सौर पंप सब्सिडी योजना"
    },
    description: {
      en: "Flagship clean energy initiative providing 24-hour free high-tension agricultural power and up to 60% capital subsidy on standalone solar agriculture pumpsets in off-grid farmlands.",
      te: "వ్యవసాయ మోటార్లకు నాణ్యమైన 24 గంటల ఉచిత విద్యుత్ మరియు విద్యుత్ లైన్లు లేని సుదూర వ్యవసాయ భూములలో సోలార్ పంపుల ఏర్పాటుకు 60% సబ్సిడీ అందించే పథకం.",
      hi: "खेतों के लिए 24 घंटे निर्बाध मुफ्त कृषि बिजली तथा बिजली ग्रिड से दूर खेतों में सोलर पंप लगाने हेतु 60% तक की भारी वित्तीय सब्सिडी योजना।"
    },
    eligibility: {
      en: "Farmers holding active agricultural land in Telangana with sanctioned agriculture electricity service or dryland with borewell lacking grid connectivity.",
      te: "తెలంగాణలో వ్యవసాయ భూమి ఉండి విద్యుత్ సర్వీస్ కలిగిన లేదా కరెంట్ సదుపాయం లేని బోరుబావి కలిగిన రైతులు అర్హులు.",
      hi: "तेलंगाना में कृषि भूमि रखने वाले किसान जिनके पास वैध कृषि बिजली कनेक्शन है अथवा ग्रिड रहित बोरवेल उपलब्ध है।"
    },
    benefits: {
      en: "100% free electricity supply for agricultural pumping, plus 60% composite government subsidy (30% Central PM-KUSUM + 30% State) for installing 3HP to 7.5HP Solar pumps.",
      te: "వ్యవసాయానికి 100% ఉచిత విద్యుత్, అలాగే 3HP నుండి 7.5HP సోలార్ పంపుల ఏర్పాటు కోసం 60% ప్రభుత్వ రాయితీ (30% కేంద్రం + 30% రాష్ట్రం).",
      hi: "कृषि सिंचाई हेतु 100% मुफ्त बिजली, साथ ही 3 एचपी से 7.5 एचपी तक के सौर कृषि पंप सेट पर 60% संयुक्त सरकारी सब्सिडी (30% केंद्र + 30% राज्य)।"
    },
    documents: {
      en: "Dharani Patta Passbook, Electricity connection consumer number (if existing), Borewell yield certificate, Aadhaar card, Bank details.",
      te: "ధరణి పట్టాదారు పాస్‌బుక్, ప్రస్తుత విద్యుత్ మీటర్ లేదా సర్వీస్ నంబర్, బోరుబావి నీటి లభ్యత సర్టిఫికెట్, ఆధార్, బ్యాంక్ వివరాలు.",
      hi: "धरणी पट्टा पासबुक, मौजूदा बिजली उपभोक्ता संख्या, बोरवेल जल प्रमाणन, आधार कार्ड और बैंक खाता विवरण।"
    },
    applicationProcess: {
      en: "Apply via Telangana State Renewable Energy Development Corporation (TSREDCO) portal or local TSSPDCL / TSNPDCL divisional office.",
      te: "tsredco.telangana.gov.in వెబ్‌సైట్ ద్వారా లేదా స్థానిక విద్యుత్ శాఖ (TSSPDCL / TSNPDCL) డివిజనల్ కార్యాలయంలో దరఖాస్తు చేసుకోవాలి.",
      hi: "टीसरेडको (TSREDCO) की आधिकारिक वेबसाइट tsredco.telangana.gov.in पर अथवा स्थानीय विद्युत निगम कार्यालय में संपर्क करें।"
    },
    state: "Telangana",
    district: "All",
    village: "All",
    minLand: 0.5,
    maxLand: 25,
    category: "Irrigation & Water",
    officialUrl: "https://tsredco.telangana.gov.in",
    status: "active",
    dateAdded: "2026-03-01"
  },

  // 8. Kisan Credit Card (KCC) Concessional Crop Loan Scheme (Nationwide)
  {
    id: "scheme-008",
    name: {
      en: "Kisan Credit Card (KCC) Concessional Low-Interest Crop Loan Scheme",
      te: "కిసాన్ క్రెడిట్ కార్డ్ (KCC) రాయితీ తక్కువ వడ్డీ పంట రుణం పథకం",
      hi: "किसान क्रेडिट कार्ड (केसीसी) रियायती ब्याज दर फसल ऋण योजना"
    },
    description: {
      en: "Nationwide institutional credit facility ensuring hassle-free, timely, and low-interest operational credit up to ₹3 Lakhs for cultivation expenses and allied agricultural activities.",
      te: "విత్తనాలు, పురుగుమందులు మరియు సాగు ఖర్చుల కోసం బ్యాంకులలో రైతులు సులభంగా ₹3 లక్షల వరకు అతి తక్కువ వడ్డీకి పంట రుణాలు పొందే జాతీయ పథకం.",
      hi: "खेती की लागत, बीज, खाद व उपकरणों के लिए बैंकों से ₹3 लाख तक का समय पर और बेहद कम ब्याज दर पर संस्थागत फसल ऋण दिलाने की राष्ट्रीय सुविधा।"
    },
    eligibility: {
      en: "All individual or joint landowning farmers, tenant cultivators, oral lessees, sharecroppers, and Self-Help Groups (SHGs) of farmers.",
      te: "సొంత సాగుభూమి ఉన్న రైతులు, ఉమ్మడి భూ యజమానులు, కౌలు రైతులు మరియు రైతు ఉత్పత్తిదారుల సంఘాలు (FPOలు).",
      hi: "सभी व्यक्तिगत अथवा संयुक्त भूमिधारक किसान, काश्तकार किसान, बटाईदार और किसानों के स्वयं सहायता समूह।"
    },
    benefits: {
      en: "Effective nominal interest rate of only 4% per annum (standard 7% minus 3% prompt repayment incentive) for loans up to ₹3,00,000 without collateral up to ₹1.6 Lakhs.",
      te: "ఏటా కేవలం 4% నామమాత్రపు వడ్డీ రేటు (సకాలంలో చెల్లిస్తే 3% ప్రత్యేక రాయితీ). ₹1.60 లక్షల వరకు ఎటువంటి హామీ (సెక్యూరిటీ) లేకుండా రుణం లభిస్తుంది.",
      hi: "समय पर पुनर्भुगतान पर मात्र 4% वार्षिक की प्रभावी ब्याज दर (7% में से 3% शीघ्र अदायगी छूट)। ₹1.60 लाख तक बिना किसी गिरवी (बंधक) के ऋण।"
    },
    documents: {
      en: "Land Records (RoR / Pahani / 7/12 extract), Filled one-page simplified KCC application form, Aadhaar Card, PAN Card or Form 60, Passport photo.",
      te: "తాజా భూమి రికార్డులు (పహానీ / అడంగల్ / 1-B), ఒక పేజీ సరళీకృత KCC దరఖాస్తు ఫారమ్, ఆధార్ కార్డ్, పాన్ కార్డ్, పాస్‌పోర్ట్ సైజ్ ఫోటోలు.",
      hi: "भूमि रिकॉर्ड (खतौनी / पाहानी), एक पेज का सरल केसीसी आवेदन पत्र, आधार कार्ड, पैन कार्ड और पासपोर्ट फोटो।"
    },
    applicationProcess: {
      en: "Apply at any rural, commercial, or cooperative bank branch, or online via public sector bank portals within 14 days statutory disposal period.",
      te: "ఏదైనా గ్రామీణ బ్యాంక్, సహకార బ్యాంక్ లేదా వాణిజ్య బ్యాంకు శాఖలో సరళీకృత దరఖాస్తును సమర్పించవచ్చు. 14 రోజుల్లో మంజూరు చేయబడుతుంది.",
      hi: "निकटतम ग्रामीण, सहकारी अथवा राष्ट्रीयकृत बैंक शाखा में आवेदन करें। 14 दिनों के भीतर वैधानिक निस्तारण की सुविधा।"
    },
    state: "All",
    district: "All",
    village: "All",
    minLand: 0.1,
    maxLand: 999,
    category: "Financial Assistance",
    officialUrl: "https://myscheme.gov.in/schemes/kcc",
    status: "active",
    dateAdded: "2026-03-05"
  }
];

const LOCAL_STORAGE_KEY = 'rythu_mitra_schemes';

/**
 * Load schemes from browser LocalStorage.
 * If not present, initializes with INITIAL_SCHEMES and persists them.
 */
function loadSchemes() {
  try {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!stored) {
      saveSchemes(INITIAL_SCHEMES);
      return INITIAL_SCHEMES;
    }
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      saveSchemes(INITIAL_SCHEMES);
      return INITIAL_SCHEMES;
    }
    return parsed;
  } catch (err) {
    console.error("Error loading schemes from LocalStorage:", err);
    return INITIAL_SCHEMES;
  }
}

/**
 * Save schemes array to LocalStorage
 */
function saveSchemes(schemes) {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(schemes));
    // Trigger custom event so open views update immediately
    window.dispatchEvent(new CustomEvent('schemesUpdated', { detail: { count: schemes.length } }));
    return true;
  } catch (err) {
    console.error("Error saving schemes to LocalStorage:", err);
    return false;
  }
}

/**
 * Add a new scheme
 */
function addScheme(newSchemeData) {
  const schemes = loadSchemes();
  const id = 'scheme-' + Date.now();
  const scheme = {
    id,
    dateAdded: new Date().toISOString().split('T')[0],
    status: newSchemeData.status || 'active',
    ...newSchemeData
  };
  schemes.unshift(scheme);
  saveSchemes(schemes);
  return scheme;
}

/**
 * Update an existing scheme
 */
function updateScheme(id, updatedData) {
  const schemes = loadSchemes();
  const index = schemes.findIndex(s => s.id === id);
  if (index === -1) return false;

  schemes[index] = {
    ...schemes[index],
    ...updatedData,
    id // keep original ID
  };

  saveSchemes(schemes);
  return schemes[index];
}

/**
 * Delete a scheme by id
 */
function deleteScheme(id) {
  let schemes = loadSchemes();
  const initialLength = schemes.length;
  schemes = schemes.filter(s => s.id !== id);
  if (schemes.length !== initialLength) {
    saveSchemes(schemes);
    return true;
  }
  return false;
}

/**
 * Restore default demonstration schemes
 */
function restoreDefaultSchemes() {
  saveSchemes(INITIAL_SCHEMES);
  return INITIAL_SCHEMES;
}

/**
 * Get scheme by ID
 */
function getSchemeById(id) {
  const schemes = loadSchemes();
  return schemes.find(s => s.id === id) || null;
}

/**
 * Filter schemes according to farmer criteria:
 * - Location: state, district, village
 * - Land: acres
 * - Search keyword
 * - Filter type (all, nationwide, state, district)
 */
function filterSchemes({ state = '', district = '', village = '', land = null, keyword = '', filterType = 'all' }) {
  const allSchemes = loadSchemes();

  return allSchemes.filter(scheme => {
    // Only show active schemes in public search
    if (scheme.status !== 'active') {
      return false;
    }

    // Keyword filter (searches across all 3 languages)
    if (keyword && keyword.trim() !== '') {
      const q = keyword.toLowerCase().trim();
      const matchName = (scheme.name.en && scheme.name.en.toLowerCase().includes(q)) ||
                        (scheme.name.te && scheme.name.te.toLowerCase().includes(q)) ||
                        (scheme.name.hi && scheme.name.hi.toLowerCase().includes(q));
      const matchDesc = (scheme.description.en && scheme.description.en.toLowerCase().includes(q)) ||
                        (scheme.description.te && scheme.description.te.toLowerCase().includes(q)) ||
                        (scheme.description.hi && scheme.description.hi.toLowerCase().includes(q));
      const matchBenefits = (scheme.benefits.en && scheme.benefits.en.toLowerCase().includes(q)) ||
                            (scheme.benefits.te && scheme.benefits.te.toLowerCase().includes(q)) ||
                            (scheme.benefits.hi && scheme.benefits.hi.toLowerCase().includes(q));
      const matchCategory = scheme.category && scheme.category.toLowerCase().includes(q);

      if (!matchName && !matchDesc && !matchBenefits && !matchCategory) {
        return false;
      }
    }

    // Filter type tabs (Nationwide, State, District)
    if (filterType === 'nationwide') {
      if (scheme.state !== 'All') return false;
    } else if (filterType === 'state') {
      if (scheme.state === 'All') return false;
    } else if (filterType === 'district') {
      if (scheme.district === 'All') return false;
    }

    // Location Matching Logic
    if (state && state !== 'All') {
      // Scheme must either be Nationwide ('All') or match the farmer's State
      if (scheme.state !== 'All' && scheme.state.toLowerCase() !== state.toLowerCase()) {
        return false;
      }
    }

    if (district && district !== 'All' && district !== 'All Districts') {
      // If scheme is specific to a district, it must match farmer's district
      if (scheme.district !== 'All' && scheme.district !== 'All Districts' &&
          scheme.district.toLowerCase() !== district.toLowerCase()) {
        return false;
      }
    }

    if (village && village.trim() !== '') {
      // If scheme is restricted to a village, match it
      if (scheme.village && scheme.village !== 'All' && scheme.village.trim() !== '') {
        const schemeVillage = scheme.village.toLowerCase().trim();
        const farmerVillage = village.toLowerCase().trim();
        if (!schemeVillage.includes(farmerVillage) && !farmerVillage.includes(schemeVillage)) {
          return false;
        }
      }
    }

    return true;
  });
}

/**
 * Check if farmer's land meets scheme land requirements
 * Returns object { isEligible, minLand, maxLand, difference }
 */
function evaluateLandCriteria(farmerLand, scheme) {
  if (farmerLand === null || farmerLand === undefined || isNaN(farmerLand) || farmerLand <= 0) {
    return { isEvaluated: false, isEligible: true, minLand: scheme.minLand, maxLand: scheme.maxLand };
  }

  const land = parseFloat(farmerLand);
  const min = parseFloat(scheme.minLand || 0);
  const max = parseFloat(scheme.maxLand || 9999);

  const isEligible = land >= min && land <= max;
  return {
    isEvaluated: true,
    isEligible,
    farmerLand: land,
    minLand: min,
    maxLand: max,
    belowMin: land < min,
    aboveMax: land > max
  };
}
