/**
 * Rythu Mitra - Multilingual Translations (English, Telugu, Hindi)
 * Complete trilingual translation dictionary for all UI components.
 */

const TRANSLATIONS = {
  en: {
    // Navigation & Brand
    brand_name: "Rythu Mitra",
    brand_tagline: "Your Farming Partner, Your Government Benefits",
    nav_home: "Home",
    nav_find_schemes: "Find Schemes",
    nav_explore: "Explore Schemes",
    nav_how_it_works: "How It Works",
    nav_about: "About Us",
    nav_contact: "Contact",
    nav_admin: "Admin Portal",
    nav_language: "Language",
    
    // Hero Section
    hero_badge: "Empowering 140+ Million Indian Farmers",
    hero_title: "Discover Government Schemes Available for You",
    hero_description: "Find government benefits based on your location and agricultural land. Access central and state agricultural subsidies, direct income support, crop insurance, and irrigation assistance in one place.",
    btn_find_schemes: "Find My Schemes",
    btn_explore_all: "Browse All Schemes",
    stat_states: "28 States & 8 UTs",
    stat_states_sub: "Pan-India Coverage",
    stat_schemes: "Demonstration Schemes",
    stat_schemes_sub: "Curated & Verified",
    stat_free: "100% Free",
    stat_free_sub: "For Every Indian Farmer",

    // Farmer Form Section
    form_section_title: "Enter Your Farming Details",
    form_section_subtitle: "Tell us your location and landholding to see tailored government schemes for your farm.",
    label_state: "State / Union Territory",
    select_state_placeholder: "-- Select Your State --",
    label_district: "District",
    select_district_placeholder: "-- Select District --",
    all_districts: "All Districts",
    label_village: "Village / Gram Panchayat",
    placeholder_village: "e.g., Rampur, Kothapalli, Shivajinagar",
    label_land: "Agricultural Land (in Acres)",
    placeholder_land: "e.g., 2.5",
    land_help: "Enter total cultivable land owned or leased in acres.",
    btn_search_schemes: "Search Available Schemes",
    btn_reset_form: "Clear Form",
    validation_state_req: "Please select your State.",
    validation_district_req: "Please select your District.",
    validation_village_req: "Please enter your Village / Gram Panchayat name.",
    validation_land_req: "Please enter a valid agricultural land area (must be greater than 0).",

    // Scheme Results Section
    results_title: "Recommended Government Schemes",
    results_subtitle: "Schemes matching your location and landholding details.",
    filter_all: "All Schemes",
    filter_nationwide: "Nationwide",
    filter_state: "State Specific",
    filter_district: "District Specific",
    search_placeholder: "Search schemes by keyword, benefit, or title...",
    schemes_found: "Found {count} matching schemes",
    schemes_for_farmer: "for your profile: {state}, {district}, {village} ({land} Acres)",
    badge_nationwide: "Nationwide (All States)",
    badge_state_specific: "State Scheme",
    badge_district_specific: "District Scheme",
    badge_village_specific: "Village Scheme",
    badge_land_eligible: "You Meet Land Criteria",
    badge_land_mismatch: "Land Criteria Range: {min} - {max} Acres",
    badge_active: "Active",
    badge_inactive: "Inactive",
    label_min_land: "Min Land:",
    label_max_land: "Max Land:",
    label_land_unlimited: "No upper limit",
    acres: "Acres",
    btn_view_details: "View Full Details",
    btn_apply_official: "Official Scheme Portal",
    no_results_title: "No Matching Schemes Found",
    no_results_desc: "We could not find schemes matching all your exact filter criteria. Try clearing filters or checking nationwide schemes.",
    btn_reset_filters: "View All Available Schemes",

    // Scheme Details Modal
    modal_title: "Scheme Details",
    tab_overview: "Overview",
    tab_eligibility: "Eligibility & Land",
    tab_benefits: "Benefits & Subsidies",
    tab_documents: "Required Documents",
    tab_apply: "How to Apply",
    modal_jurisdiction: "Jurisdiction & Coverage",
    modal_state: "Applicable State:",
    modal_district: "Applicable District:",
    modal_village: "Applicable Village:",
    modal_all_india: "All India (Nationwide)",
    modal_all_districts: "All Districts in State",
    modal_all_villages: "All Villages in District",
    modal_land_req: "Landholding Requirement:",
    modal_benefits_title: "Financial & Material Benefits",
    modal_eligibility_title: "Eligibility Criteria",
    modal_docs_title: "Documents Required for Application",
    modal_process_title: "Application Procedure",
    modal_disclaimer_notice: "Official Verification Required:",
    modal_disclaimer_text: "Rythu Mitra provides information for guidance purposes. Final sanctioning of subsidies or financial assistance is subject to verification by the respective Department of Agriculture and official government portals.",
    btn_visit_official: "Open Official Government Portal",
    btn_close: "Close",

    // Disclaimer Banner
    disclaimer_banner_title: "Official Government Information Disclaimer",
    disclaimer_banner_text: "Rythu Mitra is an independent informational and digital assistance portal built for Indian farmers. We are not a government agency. Schemes, guidelines, and benefits are subject to official government notifications. Always apply and verify details on the official government portals linked in each scheme.",

    // How It Works Section
    hiw_title: "How Rythu Mitra Works for You",
    hiw_subtitle: "Discover and access your rightful agricultural entitlements in three simple steps.",
    hiw_step1_title: "1. Enter Your Land & Location",
    hiw_step1_desc: "Provide your State, District, Village, and agricultural land in acres. No registration or personal Aadhaar required.",
    hiw_step2_title: "2. Instant Intelligent Matching",
    hiw_step2_desc: "Our engine filters central, state, and district schemes, instantly identifying which ones match your landholding.",
    hiw_step3_title: "3. Direct Official Guidance",
    hiw_step3_desc: "Read simplified benefits, required documents checklist, and get one-click direct links to authentic government portals.",

    // About Section
    about_title: "About Rythu Mitra",
    about_subtitle: "Bridging the gap between Indian farmers and government welfare programs.",
    about_p1: "Millions of farmers across India miss out on crucial central and state agricultural subsidies, crop insurance benefits, and input assistance simply due to lack of accessible, localized information.",
    about_p2: "Rythu Mitra (meaning 'Farmer's Friend') was created to provide a simple, clean, and multilingual portal where any farmer—regardless of tech literacy—can discover all benefits they are entitled to in their native language.",
    about_f1_title: "Multilingual First",
    about_f1_desc: "Full support for Telugu, Hindi, and English so farmers can comfortably navigate in their preferred tongue.",
    about_f2_title: "Accurate Land Filtering",
    about_f2_desc: "Differentiates between small & marginal farmers (under 5 acres) and large holdings according to official norms.",
    about_f3_title: "Local & Offline-Ready",
    about_f3_desc: "Runs completely in your browser with LocalStorage. Fast, zero tracking, and lightweight on rural internet.",

    // Contact & Helpline
    contact_title: "Farmer Support & Helplines",
    contact_subtitle: "Need assistance with schemes or government applications? We are here to guide you.",
    kisan_helpline_title: "Kisan Call Center (Government of India)",
    kisan_helpline_desc: "Toll-free agricultural query assistance available in 22 languages, 6:00 AM to 10:00 PM all 7 days.",
    kisan_number: "Toll Free: 1800-180-1551",
    feedback_title: "Send Us a Message",
    label_name: "Your Name",
    placeholder_name: "e.g., Ramesh Kumar / సుబ్బారావు",
    label_phone: "Phone / WhatsApp Number",
    placeholder_phone: "e.g., 9876543210",
    label_query: "Your Question or Scheme Feedback",
    placeholder_query: "Tell us which scheme you are looking for...",
    btn_send_message: "Submit Message",
    contact_success: "Thank you! Your inquiry has been submitted. Our team or local agriculture facilitator will guide you.",

    // Footer
    footer_tagline: "Dedicated to the prosperity of Indian Annadatas (Farmers).",
    footer_quick_links: "Quick Links",
    footer_schemes: "Popular Schemes",
    footer_admin_link: "Admin Management Portal",
    footer_rights: "© 2026 Rythu Mitra Portal. Static Frontend Demonstration Edition. Built for Indian Farmers.",
    footer_gov_note: "Designed with pride for the Indian farming community. No backend servers, external databases, or third-party tracking.",

    // Admin Section
    admin_login_title: "Administrator Portal Login",
    admin_login_subtitle: "Manage, add, update, and publish agricultural schemes.",
    admin_demo_badge: "Demonstration System Credentials",
    admin_demo_info: "Email: admin@123 | Password: 1234567890",
    admin_security_notice: "Notice: This is a static client-side demonstration website. Authentication is simulated using browser JavaScript and LocalStorage. It is not suitable for public production environments.",
    label_admin_email: "Admin Email / Username",
    placeholder_admin_email: "admin@123",
    label_admin_password: "Password",
    placeholder_admin_password: "••••••••••",
    btn_login: "Login to Admin Dashboard",
    btn_fill_demo: "Auto-Fill Demo Credentials",
    btn_back_home: "← Back to Farmer Portal",
    login_invalid: "Invalid credentials! Please use admin@123 and 1234567890.",
    login_success: "Login successful! Welcome to the Admin Dashboard.",
    
    // Admin Dashboard
    admin_dash_title: "Rythu Mitra Schemes Management Dashboard",
    admin_welcome: "Logged in as Admin (admin@123)",
    btn_logout: "Logout",
    btn_add_new: "+ Add New Scheme",
    btn_restore_defaults: "↺ Restore Demonstration Schemes",
    stat_total_schemes: "Total Schemes",
    stat_active_schemes: "Active Schemes",
    stat_national_schemes: "National Schemes",
    stat_state_schemes: "State Schemes",
    admin_table_title: "All Configured Schemes",
    admin_search_placeholder: "Filter schemes by name, state, or district...",
    th_scheme_name: "Scheme Name",
    th_state: "State",
    th_district: "District",
    th_land_criteria: "Land Criteria",
    th_status: "Status",
    th_actions: "Actions",
    btn_edit: "Edit",
    btn_delete: "Delete",
    btn_toggle_status: "Toggle Status",
    confirm_delete: "Are you sure you want to delete this scheme? This will immediately remove it from the farmer portal.",
    confirm_restore: "Are you sure you want to restore all initial demonstration schemes? Any custom added schemes will be reset.",
    scheme_saved_success: "Scheme has been saved successfully in LocalStorage and published to the farmer portal!",
    scheme_deleted_success: "Scheme deleted successfully from LocalStorage.",
    schemes_restored_success: "Demonstration schemes restored successfully!",
    
    // Add / Edit Modal
    modal_add_title: "Add New Government Scheme",
    modal_edit_title: "Edit Government Scheme",
    tab_lang_en: "English Details",
    tab_lang_te: "తెలుగు వివరాలు (Telugu)",
    tab_lang_hi: "हिन्दी विवरण (Hindi)",
    field_scheme_name: "Scheme Name *",
    field_description: "Scheme Description *",
    field_eligibility: "Eligibility Criteria *",
    field_benefits: "Benefits & Financial Assistance *",
    field_documents: "Required Documents *",
    field_apply_process: "Application Procedure *",
    field_state: "Applicable State *",
    field_district: "Applicable District *",
    field_village: "Applicable Village (Leave empty for All)",
    field_min_land: "Minimum Land (Acres)",
    field_max_land: "Maximum Land (Acres - use 999 for unlimited)",
    field_official_url: "Official Application URL *",
    field_category: "Scheme Category *",
    field_status: "Scheme Status *",
    btn_save_scheme: "Save Scheme",
    btn_cancel: "Cancel",
    form_err_req: "Please fill out all required fields marked with * in at least English.",
    form_err_land: "Minimum land must be less than or equal to maximum land."
  },

  te: {
    // Navigation & Brand
    brand_name: "రైతు మిత్ర",
    brand_tagline: "మీ వ్యవసాయ భాగస్వామి, మీ ప్రభుత్వ ప్రయోజనాలు",
    nav_home: "హోమ్",
    nav_find_schemes: "పథకాలు కనుగొనండి",
    nav_explore: "పథకాలు చూడండి",
    nav_how_it_works: "ఇది ఎలా పనిచేస్తుంది",
    nav_about: "మా గురించి",
    nav_contact: "సంప్రదించండి",
    nav_admin: "అడ్మిన్ పోర్టల్",
    nav_language: "భాష",
    
    // Hero Section
    hero_badge: "14+ కోట్ల భారతీయ రైతులకు అండగా",
    hero_title: "మీ కోసం అందుబాటులో ఉన్న ప్రభుత్వ పథకాలను తెలుసుకోండి",
    hero_description: "మీ ప్రాంతం మరియు వ్యవసాయ భూమి ఆధారంగా ప్రభుత్వ ప్రయోజనాలను కనుగొనండి. కేంద్ర, రాష్ట్ర ప్రభుత్వ రాయితీలు, పెట్టుబడి సాయం, పంటల బీమా మరియు బిందు సేద్యం పథకాల వివరాలు ఒకే వేదికపై పొందండి.",
    btn_find_schemes: "నా పథకాలను కనుగొనండి",
    btn_explore_all: "అన్ని పథకాలను బ్రౌజ్ చేయండి",
    stat_states: "28 రాష్ట్రాలు & 8 కేంద్రపాలిత ప్రాంతాలు",
    stat_states_sub: "భారతదేశం అంతటా వర్తింపు",
    stat_schemes: "నమూనా పథకాలు",
    stat_schemes_sub: "సరిచూసిన సమగ్ర సమాచారం",
    stat_free: "100% ఉచితం",
    stat_free_sub: "ప్రతి భారతీయ రైతు కోసం",

    // Farmer Form Section
    form_section_title: "మీ వ్యవసాయ వివరాలను నమోదు చేయండి",
    form_section_subtitle: "మీ భూమికి వర్తించే ప్రభుత్వ పథకాలను చూడటానికి మీ ప్రాంతం మరియు భూమి వివరాలను తెలియజేయండి.",
    label_state: "రాష్ట్రం / కేంద్రపాలిత ప్రాంతం",
    select_state_placeholder: "-- మీ రాష్ట్రాన్ని ఎంచుకోండి --",
    label_district: "జిల్లా",
    select_district_placeholder: "-- జిల్లాను ఎంచుకోండి --",
    all_districts: "అన్ని జిల్లాలు",
    label_village: "గ్రామం / గ్రామ పంచాయితీ",
    placeholder_village: "ఉదాహరణకు: రాంపురం, కొత్తపల్లి, లక్ష్మీపురం",
    label_land: "వ్యవసాయ భూమి (ఎకరాలలో)",
    placeholder_land: "ఉదాహరణకు: 2.5",
    land_help: "మీకు ఉన్న లేదా కౌలుకు తీసుకున్న సాగు భూమిని ఎకరాలలో నమోదు చేయండి.",
    btn_search_schemes: "అందుబాటులోని పథకాలను శోధించండి",
    btn_reset_form: "వివరాలు క్లియర్ చేయండి",
    validation_state_req: "దయచేసి మీ రాష్ట్రాన్ని ఎంచుకోండి.",
    validation_district_req: "దయచేసి మీ జిల్లాను ఎంచుకోండి.",
    validation_village_req: "దయచేసి మీ గ్రామ పేరును నమోదు చేయండి.",
    validation_land_req: "దయచేసి సరైన భూమి విస్తీర్ణాన్ని నమోదు చేయండి (0 కంటే ఎక్కువ ఉండాలి).",

    // Scheme Results Section
    results_title: "సిఫార్సు చేయబడిన ప్రభుత్వ పథకాలు",
    results_subtitle: "మీ ప్రాంతం మరియు భూమి విస్తీర్ణానికి సరిపోయే పథకాలు.",
    filter_all: "అన్ని పథకాలు",
    filter_nationwide: "దేశవ్యాప్త పథకాలు",
    filter_state: "రాష్ట్ర పథకాలు",
    filter_district: "జిల్లా స్థాయి పథకాలు",
    search_placeholder: "పథకం పేరు, ప్రయోజనం లేదా కీవర్డ్ ద్వారా వెతకండి...",
    schemes_found: "{count} అనువైన పథకాలు కనుగొనబడ్డాయి",
    schemes_for_farmer: "మీ వివరాలు: {state}, {district}, {village} ({land} ఎకరాలు)",
    badge_nationwide: "దేశవ్యాప్తం (అన్ని రాష్ట్రాలు)",
    badge_state_specific: "రాష్ట్ర పథకం",
    badge_district_specific: "జిల్లా ప్రత్యేక పథకం",
    badge_village_specific: "గ్రామ స్థాయి పథకం",
    badge_land_eligible: "భూమి అర్హత సరిపోతుంది",
    badge_land_mismatch: "అవసరమైన భూమి పరిధి: {min} - {max} ఎకరాలు",
    badge_active: "ప్రస్తుతం అందుబాటులో ఉంది",
    badge_inactive: "నిష్క్రియం",
    label_min_land: "కనీస భూమి:",
    label_max_land: "గరిష్ట భూమి:",
    label_land_unlimited: "గరిష్ట పరిమితి లేదు",
    acres: "ఎకరాలు",
    btn_view_details: "పూర్తి వివరాలు చూడండి",
    btn_apply_official: "అధికారిక పోర్టల్",
    no_results_title: "సరిపోయే పథకాలు లభించలేదు",
    no_results_desc: "మీరు ఎంచుకున్న వివరాలకు సరిపోయే పథకాలు లేవు. దయచేసి ఫిల్టర్‌లను మార్చి లేదా దేశవ్యాప్త పథకాలను పరిశీలించండి.",
    btn_reset_filters: "అన్ని అందుబాటులోని పథకాలను చూడండి",

    // Scheme Details Modal
    modal_title: "పథకం పూర్తి వివరాలు",
    tab_overview: "స్థూల వివరాలు",
    tab_eligibility: "అర్హతలు & భూమి",
    tab_benefits: "ప్రయోజనాలు & రాయితీలు",
    tab_documents: "కావలసిన పత్రాలు",
    tab_apply: "దరఖాస్తు విధానం",
    modal_jurisdiction: "పరిధి మరియు విస్తృతి",
    modal_state: "వర్తించే రాష్ట్రం:",
    modal_district: "వర్తించే జిల్లా:",
    modal_village: "వర్తించే గ్రామం:",
    modal_all_india: "భారతదేశం అంతటా (దేశవ్యాప్తం)",
    modal_all_districts: "రాష్ట్రంలోని అన్ని జిల్లాలు",
    modal_all_villages: "జిల్లాలోని అన్ని గ్రామాలు",
    modal_land_req: "కావలసిన భూమి అర్హత:",
    modal_benefits_title: "ఆర్థిక మరియు వస్తురూప ప్రయోజనాలు",
    modal_eligibility_title: "అర్హత ప్రమాణాలు",
    modal_docs_title: "దరఖాస్తుకు అవసరమైన పత్రాలు",
    modal_process_title: "దరఖాస్తు చేసుకునే విధానం",
    modal_disclaimer_notice: "అధికారిక ధృవీకరణ అవసరం:",
    modal_disclaimer_text: "రైతు మిత్ర పోర్టల్ కేవలం సమాచార మార్గదర్శకత్వం కోసం మాత్రమే. పథకం మంజూరు మరియు ప్రయోజనాల చెల్లింపు సంబంధిత వ్యవసాయ శాఖ మరియు ప్రభుత్వ అధికారిక పోర్టల్‌ల నిబంధనలకు లోబడి ఉంటుంది.",
    btn_visit_official: "ప్రభుత్వ అధికారిక వెబ్‌సైట్ చూడండి",
    btn_close: "మూసివేయి",

    // Disclaimer Banner
    disclaimer_banner_title: "అధికారిక ప్రభుత్వ సమాచార గమనిక",
    disclaimer_banner_text: "రైతు మిత్ర అనేది భారతీయ రైతులకు సహాయం కోసం రూపొందించబడిన స్వతంత్ర సమాచార వేదిక. ఇది అధికారిక ప్రభుత్వ సంస్థ కాదు. పథకాల వివరాలు, రాయితీలు ప్రభుత్వ అధికారిక ఉత్తర్వులపై ఆధారపడి ఉంటాయి. దయచేసి ఇచ్చిన అధికారిక పోర్టల్ లింక్‌ల ద్వారా దరఖాస్తు చేసుకోవలసిందిగా మనవి.",

    // How It Works Section
    hiw_title: "రైతు మిత్ర ఎలా పనిచేస్తుంది",
    hiw_subtitle: "మూడు సులభమైన దశలలో మీకు రావాల్సిన ప్రభుత్వ సంక్షేమ పథకాలను తెలుసుకోండి.",
    hiw_step1_title: "1. మీ భూమి & ప్రాంతం నమోదు",
    hiw_step1_desc: "మీ రాష్ట్రం, జిల్లా, గ్రామం మరియు ఎకరాలలో సాగు భూమిని నమోదు చేయండి. ఎటువంటి ఆధార్ లేదా వ్యక్తిగత వివరాల నమోదు అవసరం లేదు.",
    hiw_step2_title: "2. తక్షణ సరైన గుర్తింపు",
    hiw_step2_desc: "మా సాఫ్ట్‌వేర్ మీ భూమి విస్తీర్ణం మరియు ప్రాంతానికి తగిన కేంద్ర, రాష్ట్ర, జిల్లా పథకాలను వెనువెంటనే వేరు చేసి చూపుతుంది.",
    hiw_step3_title: "3. అధికారిక దరఖాస్తు మార్గదర్శనం",
    hiw_step3_desc: "స్పష్టమైన ప్రయోజనాలు, కావలసిన పత్రాల జాబితా మరియు ప్రభుత్వ అధికారిక పోర్టల్ లింక్‌లను నేరుగా ఒకే క్లిక్‌తో పొందండి.",

    // About Section
    about_title: "రైతు మిత్ర గురించి",
    about_subtitle: "భారతీయ రైతులకు మరియు ప్రభుత్వ పథకాలకు మధ్య వారధి.",
    about_p1: "భారతదేశంలో లక్షలాది మంది రైతులు సరైన సమాచారం అందుబాటులో లేకపోవడం వల్ల ప్రభుత్వం అందించే రాయితీలు, పెట్టుబడి ప్రోత్సాహకాలు మరియు పంటల బీమా ప్రయోజనాలను కోల్పోతున్నారు.",
    about_p2: "రైతు మిత్ర అనేది ప్రతి రైతుకు సాంకేతిక పరిజ్ఞానంతో సంబంధం లేకుండా తమ స్వభాషలోనే ప్రభుత్వ సంక్షేమ పథకాలను తెలుసుకునేలా రూపొందించబడిన ఒక ఆధునిక డిజిటల్ వేదిక.",
    about_f1_title: "మాతృభాషకు ప్రాధాన్యత",
    about_f1_desc: "తెలుగు, హిందీ మరియు ఆంగ్ల భాషలలో సంపూర్ణ మద్దతు, తద్వారా రైతులు సులభంగా అర్థం చేసుకోగలరు.",
    about_f2_title: "ఖచ్చితమైన భూమి అర్హత",
    about_f2_desc: "చిన్న, సన్నకారు రైతులు (5 ఎకరాల లోపు) మరియు పెద్ద రైతులకు ప్రభుత్వం ఇచ్చే నిబంధనల ప్రకారం వేరు చేసి చూపుతుంది.",
    about_f3_title: "పూర్తిగా స్థానిక భద్రత",
    about_f3_desc: "బ్రౌజర్‌లోనే లోకల్‌స్టోరేజ్ ద్వారా వేగంగా పనిచేస్తుంది. సర్వర్‌ల అవసరం లేదు, నెమ్మదైన గ్రామీణ ఇంటర్నెట్‌లోనూ పనిచేస్తుంది.",

    // Contact & Helpline
    contact_title: "రైతు సహాయ కేంద్రాలు & హెల్ప్‌లైన్",
    contact_subtitle: "పథకాల గురించిన సందేహాలు ఉన్నాయా? మీకు మార్గదర్శనం చేయడానికి మేము సిద్ధంగా ఉన్నాము.",
    kisan_helpline_title: "కిసాన్ కాల్ సెంటర్ (భారత ప్రభుత్వం)",
    kisan_helpline_desc: "22 భాషలలో ఉచిత వ్యవసాయ సలహాలు. ఉదయం 6:00 నుండి రాత్రి 10:00 వరకు వారంలో అన్ని రోజులు అందుబాటులో ఉంటుంది.",
    kisan_number: "టోల్ ఫ్రీ నెంబర్: 1800-180-1551",
    feedback_title: "సందేహం లేదా అభిప్రాయం పంపండి",
    label_name: "మీ పేరు",
    placeholder_name: "ఉదా: రమేష్ బాబు / వెంకటేశ్వర్లు",
    label_phone: "ఫోన్ / వాట్సాప్ నెంబర్",
    placeholder_phone: "ఉదా: 9876543210",
    label_query: "మీ ప్రశ్న లేదా సందేహం",
    placeholder_query: "మీరు ఏ పథకం గురించి తెలుసుకోవాలనుకుంటున్నారు...",
    btn_send_message: "సందేశం పంపండి",
    contact_success: "ధన్యవాదాలు! మీ సందేశం స్వీకరించబడింది. త్వరలోనే మీకు తగిన మార్గదర్శనం అందుతుంది.",

    // Footer
    footer_tagline: "భారతీయ అన్నదాతల శ్రేయస్సు మరియు అభివృద్ధి కోసం అంకితం.",
    footer_quick_links: "ముఖ్యమైన లింకులు",
    footer_schemes: "ప్రముఖ పథకాలు",
    footer_admin_link: "అడ్మిన్ నిర్వహణ పోర్టల్",
    footer_rights: "© 2026 రైతు మిత్ర పోర్టల్. స్టాటిక్ వెబ్‌సైట్ నమూనా. భారతీయ రైతుల సేవలో.",
    footer_gov_note: "భారతీయ వ్యవసాయ రంగం కోసం ప్రత్యేకంగా రూపొందించబడింది. ఎటువంటి బాహ్య సర్వర్లు లేదా డేటాబేస్‌లు అవసరం లేదు.",

    // Admin Section
    admin_login_title: "అడ్మినిస్ట్రేటర్ పోర్టల్ లాగిన్",
    admin_login_subtitle: "వ్యవసాయ పథకాలను జోడించడం, సవరించడం మరియు నిర్వహించడం.",
    admin_demo_badge: "నమూనా లాగిన్ వివరాలు",
    admin_demo_info: "ఈమెయిల్: admin@123 | పాస్‌వర్డ్: 1234567890",
    admin_security_notice: "గమనిక: ఇది క్లయింట్-సైడ్ స్టాటిక్ ప్రదర్శన వెబ్‌సైట్. లాగిన్ భద్రత బ్రౌజర్ జావాస్క్రిప్ట్ మరియు లోకల్‌స్టోరేజ్ ద్వారా నిర్వహించబడుతుంది. ఇది పబ్లిక్ ప్రొడక్షన్ కోసం ఉద్దేశించినది కాదు.",
    label_admin_email: "అడ్మిన్ ఈమెయిల్ / యూజర్‌నేమ్",
    placeholder_admin_email: "admin@123",
    label_admin_password: "పాస్‌వర్డ్",
    placeholder_admin_password: "••••••••••",
    btn_login: "డాష్‌బోర్డ్‌లోకి లాగిన్ అవ్వండి",
    btn_fill_demo: "నమూనా వివరాలను నింపండి",
    btn_back_home: "← రైతు పోర్టల్‌కు తిరిగి వెళ్ళండి",
    login_invalid: "లాగిన్ వివరాలు సరైనవి కావు! దయచేసి admin@123 మరియు 1234567890 ఉపయోగించండి.",
    login_success: "లాగిన్ విజయవంతమైంది! అడ్మిన్ డాష్‌బోర్డ్‌కు స్వాగతం.",

    // Admin Dashboard
    admin_dash_title: "రైతు మిత్ర పథకాల నిర్వహణ డాష్‌బోర్డ్",
    admin_welcome: "అడ్మిన్‌గా లాగిన్ అయ్యారు (admin@123)",
    btn_logout: "లాగౌట్",
    btn_add_new: "+ కొత్త పథకాన్ని జోడించండి",
    btn_restore_defaults: "↺ నమూనా పథకాలను పునరుద్ధరించండి",
    stat_total_schemes: "మొత్తం పథకాలు",
    stat_active_schemes: "క్రియాశీల పథకాలు",
    stat_national_schemes: "జాతీయ పథకాలు",
    stat_state_schemes: "రాష్ట్ర పథకాలు",
    admin_table_title: "అందుబాటులో ఉన్న పథకాల జాబితా",
    admin_search_placeholder: "పథకం పేరు, రాష్ట్రం లేదా జిల్లా ద్వారా వెతకండి...",
    th_scheme_name: "పథకం పేరు",
    th_state: "రాష్ట్రం",
    th_district: "జిల్లా",
    th_land_criteria: "భూమి నిబంధన",
    th_status: "స్థితి",
    th_actions: "చర్యలు",
    btn_edit: "సవరించు",
    btn_delete: "తొలగించు",
    btn_toggle_status: "స్థితి మార్చు",
    confirm_delete: "మీరు నిజంగా ఈ పథకాన్ని తొలగించాలనుకుంటున్నారా? ఇది రైతు పోర్టల్ నుండి వెంటనే తొలగించబడుతుంది.",
    confirm_restore: "మీరు ప్రారంభ నమూనా పథకాలను పునరుద్ధరించాలనుకుంటున్నారా? మీరు జోడించిన కొత్త మార్పులు రీసెట్ అవుతాయి.",
    scheme_saved_success: "పథకం లోకల్‌స్టోరేజ్‌లో విజయవంతంగా భద్రపరచబడింది మరియు రైతు పోర్టల్‌లో అప్‌డేట్ చేయబడింది!",
    scheme_deleted_success: "పథకం విజయవంతంగా తొలగించబడింది.",
    schemes_restored_success: "ప్రారంభ నమూనా పథకాలు విజయవంతంగా పునరుద్ధరించబడ్డాయి!",

    // Add / Edit Modal
    modal_add_title: "కొత్త ప్రభుత్వ పథకాన్ని జోడించండి",
    modal_edit_title: "ప్రభుత్వ పథకాన్ని సవరించండి",
    tab_lang_en: "English Details (ఆంగ్లం)",
    tab_lang_te: "తెలుగు వివరాలు (Telugu)",
    tab_lang_hi: "हिन्दी विवरण (Hindi)",
    field_scheme_name: "పథకం పేరు *",
    field_description: "పథకం వివరణ *",
    field_eligibility: "అర్హత ప్రమాణాలు *",
    field_benefits: "ప్రయోజనాలు & ఆర్థిక సాయం *",
    field_documents: "అవసరమైన పత్రాలు *",
    field_apply_process: "దరఖాస్తు విధానం *",
    field_state: "వర్తించే రాష్ట్రం *",
    field_district: "వర్తించే జిల్లా *",
    field_village: "వర్తించే గ్రామం (అందరికీ వర్తిస్తే ఖాళీగా ఉంచండి)",
    field_min_land: "కనీస భూమి (ఎకరాలు)",
    field_max_land: "గరిష్ట భూమి (ఎకరాలు - పరిమితి లేకపోతే 999)",
    field_official_url: "అధికారిక వెబ్‌సైట్ లింక్ *",
    field_category: "పథకం వర్గం *",
    field_status: "పథకం స్థితి *",
    btn_save_scheme: "పథకాన్ని సేవ్ చేయండి",
    btn_cancel: "రద్దు చేయండి",
    form_err_req: "దయచేసి కనీసం ఆంగ్లంలో లేదా అన్ని భాషలలో తప్పనిసరి ఫీల్డ్‌లను (*) నింపండి.",
    form_err_land: "కనీస భూమి గరిష్ట భూమి కంటే తక్కువగా లేదా సమానంగా ఉండాలి."
  },

  hi: {
    // Navigation & Brand
    brand_name: "रैतु मित्र",
    brand_tagline: "आपका कृषि साथी, आपके सरकारी लाभ",
    nav_home: "होम",
    nav_find_schemes: "योजनाएं खोजें",
    nav_explore: "योजनाएं देखें",
    nav_how_it_works: "यह कैसे काम करता है",
    nav_about: "हमारे बारे में",
    nav_contact: "संपर्क करें",
    nav_admin: "एडमिन पोर्टल",
    nav_language: "भाषा",
    
    // Hero Section
    hero_badge: "14+ करोड़ भारतीय किसानों को सशक्त बनाना",
    hero_title: "अपने लिए उपलब्ध सरकारी योजनाएं खोजें",
    hero_description: "अपने स्थान और कृषि भूमि के आधार पर सरकारी लाभ प्राप्त करें। केंद्र और राज्य सरकार की कृषि सब्सिडी, प्रत्यक्ष आय सहायता, फसल बीमा और सिंचाई योजनाओं की जानकारी एक ही स्थान पर पाएं।",
    btn_find_schemes: "मेरी योजनाएं खोजें",
    btn_explore_all: "सभी योजनाएं देखें",
    stat_states: "28 राज्य और 8 केंद्र शासित प्रदेश",
    stat_states_sub: "अखिल भारतीय कवरेज",
    stat_schemes: "सत्यापित नमूना योजनाएं",
    stat_schemes_sub: "सटीक और अद्यतित जानकारी",
    stat_free: "100% निःशुल्क",
    stat_free_sub: "प्रत्येक भारतीय किसान के लिए",

    // Farmer Form Section
    form_section_title: "अपने कृषि विवरण दर्ज करें",
    form_section_subtitle: "अपने खेत के लिए उपयुक्त सरकारी योजनाएं देखने के लिए अपने स्थान और जोत का विवरण साझा करें।",
    label_state: "राज्य / केंद्र शासित प्रदेश",
    select_state_placeholder: "-- अपना राज्य चुनें --",
    label_district: "ज़िला",
    select_district_placeholder: "-- ज़िला चुनें --",
    all_districts: "सभी ज़िले",
    label_village: "गाँव / ग्राम पंचायत",
    placeholder_village: "उदा. रामपुर, कोटपल्ली, शिवाजीनगर",
    label_land: "कृषि भूमि (एकड़ में)",
    placeholder_land: "उदा. 2.5",
    land_help: "स्वामित्व वाली या पट्टे पर ली गई कुल कृषि योग्य भूमि एकड़ में दर्ज करें।",
    btn_search_schemes: "उपलब्ध योजनाएं खोजें",
    btn_reset_form: "फॉर्म साफ करें",
    validation_state_req: "कृपया अपना राज्य चुनें।",
    validation_district_req: "कृपया अपना ज़िला चुनें।",
    validation_village_req: "कृपया अपने गाँव / ग्राम पंचायत का नाम दर्ज करें।",
    validation_land_req: "कृपया भूमि का वैध क्षेत्रफल दर्ज करें (0 से अधिक होना चाहिए)।",

    // Scheme Results Section
    results_title: "आपके लिए अनुशंसित सरकारी योजनाएं",
    results_subtitle: "आपके स्थान और भूमि जोत के विवरण से मेल खाने वाली योजनाएं।",
    filter_all: "सभी योजनाएं",
    filter_nationwide: "देशव्यापी योजनाएं",
    filter_state: "राज्य स्तरीय योजनाएं",
    filter_district: "ज़िला स्तरीय योजनाएं",
    search_placeholder: "योजना का नाम, लाभ या कीवर्ड द्वारा खोजें...",
    schemes_found: "{count} उपयुक्त योजनाएं मिलीं",
    schemes_for_farmer: "आपके विवरण अनुसार: {state}, {district}, {village} ({land} एकड़)",
    badge_nationwide: "देशव्यापी (सभी राज्य)",
    badge_state_specific: "राज्य योजना",
    badge_district_specific: "ज़िला विशेष योजना",
    badge_village_specific: "ग्राम स्तर योजना",
    badge_land_eligible: "भूमि मानदंड पूरा होता है",
    badge_land_mismatch: "आवश्यक भूमि सीमा: {min} - {max} एकड़",
    badge_active: "सक्रिय",
    badge_inactive: "निष्क्रिय",
    label_min_land: "न्यूनतम भूमि:",
    label_max_land: "अधिकतम भूमि:",
    label_land_unlimited: "कोई ऊपरी सीमा नहीं",
    acres: "एकड़",
    btn_view_details: "पूर्ण विवरण देखें",
    btn_apply_official: "आधिकारिक पोर्टल",
    no_results_title: "कोई मेल खाने वाली योजना नहीं मिली",
    no_results_desc: "आपके चुने गए मानदंडों के अनुसार योजनाएं नहीं मिलीं। कृपया फ़िल्टर बदलें या देशव्यापी योजनाएं देखें।",
    btn_reset_filters: "सभी उपलब्ध योजनाएं देखें",

    // Scheme Details Modal
    modal_title: "योजना का संपूर्ण विवरण",
    tab_overview: "अवलोकन",
    tab_eligibility: "पात्रता और भूमि",
    tab_benefits: "लाभ और सब्सिडी",
    tab_documents: "आवश्यक दस्तावेज़",
    tab_apply: "आवेदन प्रक्रिया",
    modal_jurisdiction: "क्षेत्राधिकार एवं कवरेज",
    modal_state: "लागू राज्य:",
    modal_district: "लागू ज़िला:",
    modal_village: "लागू गाँव:",
    modal_all_india: "संपूर्ण भारत (देशव्यापी)",
    modal_all_districts: "राज्य के सभी ज़िले",
    modal_all_villages: "ज़िले के सभी गाँव",
    modal_land_req: "भूमि जोत की आवश्यकता:",
    modal_benefits_title: "वित्तीय और सामग्री लाभ",
    modal_eligibility_title: "पात्रता मानदंड",
    modal_docs_title: "आवेदन के लिए आवश्यक दस्तावेज़",
    modal_process_title: "आवेदन की प्रक्रिया",
    modal_disclaimer_notice: "आधिकारिक सत्यापन अनिवार्य:",
    modal_disclaimer_text: "रैतु मित्र पोर्टल केवल सूचनात्मक मार्गदर्शन प्रदान करता है। सब्सिडी या वित्तीय सहायता की अंतिम मंजूरी संबंधित कृषि विभाग और आधिकारिक सरकारी पोर्टलों द्वारा सत्यापन के अधीन है।",
    btn_visit_official: "आधिकारिक सरकारी पोर्टल खोलें",
    btn_close: "बंद करें",

    // Disclaimer Banner
    disclaimer_banner_title: "आधिकारिक सरकारी सूचना अस्वीकरण",
    disclaimer_banner_text: "रैतु मित्र भारतीय किसानों की सहायता के लिए बनाया गया एक स्वतंत्र सूचनात्मक डिजिटल पोर्टल है। हम कोई सरकारी एजेंसी नहीं हैं। योजनाओं के नियम, पात्रता और लाभ आधिकारिक सरकारी अधिसूचनाओं पर निर्भर करते हैं। कृपया प्रत्येक योजना में दिए गए आधिकारिक पोर्टल लिंक पर जाकर ही आवेदन करें।",

    // How It Works Section
    hiw_title: "रैतु मित्र आपके लिए कैसे काम करता है",
    hiw_subtitle: "तीन आसान चरणों में अपनी हकदारी और सरकारी लाभों की खोज करें।",
    hiw_step1_title: "1. अपनी भूमि और स्थान दर्ज करें",
    hiw_step1_desc: "अपना राज्य, ज़िला, गाँव और एकड़ में कृषि भूमि दर्ज करें। किसी आधार या व्यक्तिगत पहचान की आवश्यकता नहीं है।",
    hiw_step2_title: "2. तुरंत सटीक मिलान",
    hiw_step2_desc: "हमारा सिस्टम आपकी जोत और स्थान के आधार पर तुरंत उपयुक्त केंद्रीय, राज्य और ज़िला योजनाओं की पहचान करता है।",
    hiw_step3_title: "3. सीधा आधिकारिक मार्गदर्शन",
    hiw_step3_desc: "सरल भाषा में लाभ, आवश्यक दस्तावेजों की सूची और आधिकारिक सरकारी पोर्टलों के सीधे लिंक एक क्लिक में प्राप्त करें।",

    // About Section
    about_title: "रैतु मित्र के बारे में",
    about_subtitle: "भारतीय किसानों और सरकारी कल्याणकारी योजनाओं के बीच की दूरी को मिटाना।",
    about_p1: "भारत भर में लाखों किसान केवल सही और स्थानीयकृत जानकारी के अभाव में सरकार द्वारा प्रदान की जाने वाली सब्सिडी, प्रत्यक्ष आय सहायता और फसल बीमा का लाभ उठाने से वंचित रह जाते हैं।",
    about_p2: "रैतु मित्र (अर्थात् 'किसान का मित्र') को इसलिए बनाया गया है ताकि प्रत्येक किसान—अपनी तकनीकी जानकारी की परवाह किए बिना—अपनी मातृभाषा में अपने सभी अधिकारों और योजनाओं की खोज कर सके।",
    about_f1_title: "मातृभाषा में उपलब्धता",
    about_f1_desc: "तेलुगु, हिन्दी और अंग्रेजी में पूर्ण समर्थन ताकि किसान अपनी भाषा में आसानी से समझ सकें।",
    about_f2_title: "सटीक भूमि पात्रता",
    about_f2_desc: "छोटे और सीमांत किसानों (5 एकड़ से कम) और बड़े जोतधारकों के बीच सरकारी नियमों के अनुसार अंतर करता है।",
    about_f3_title: "स्थानीय और सुरक्षित",
    about_f3_desc: "ब्राउज़र के लोकलस्टोरेज में सीधे काम करता है। कोई बाहरी सर्वर या ट्रैकिंग नहीं, ग्रामीण इंटरनेट पर भी तेज़।",

    // Contact & Helpline
    contact_title: "किसान सहायता केंद्र और हेल्पलाइन",
    contact_subtitle: "योजनाओं से जुड़े कोई प्रश्न हैं? हम आपका मार्गदर्शन करने के लिए तैयार हैं।",
    kisan_helpline_title: "किसान कॉल सेंटर (भारत सरकार)",
    kisan_helpline_desc: "22 भाषाओं में निःशुल्क कृषि सलाह। सुबह 6:00 बजे से रात 10:00 बजे तक सातों दिन उपलब्ध।",
    kisan_number: "टोल फ्री नंबर: 1800-180-1551",
    feedback_title: "हमें संदेश भेजें",
    label_name: "आपका नाम",
    placeholder_name: "उदा. रमेश कुमार / श्याम सुंदर",
    label_phone: "फोन / व्हाट्सएप नंबर",
    placeholder_phone: "उदा. 9876543210",
    label_query: "आपका प्रश्न या योजना संबंधी फीडबैक",
    placeholder_query: "बताएं कि आप किस योजना के बारे में जानना चाहते हैं...",
    btn_send_message: "संदेश भेजें",
    contact_success: "धन्यवाद! आपका संदेश प्राप्त हो गया है। हमारी टीम या स्थानीय कृषि समन्वयक शीघ्र ही आपसे संपर्क करेंगे।",

    // Footer
    footer_tagline: "भारतीय अन्नदाताओं की खुशहाली और समृद्धि को समर्पित।",
    footer_quick_links: "त्वरित लिंक",
    footer_schemes: "प्रमुख योजनाएं",
    footer_admin_link: "एडमिन प्रबंधन पोर्टल",
    footer_rights: "© 2026 रैतु मित्र पोर्टल। स्टैटिक वेबसाइट प्रदर्शन संस्करण। भारतीय किसानों के लिए निर्मित।",
    footer_gov_note: "भारतीय कृषि समुदाय के लिए विशेष रूप से डिज़ाइन किया गया। बिना किसी बैकएंड सर्वर या डेटाबेस के पूरी तरह सुरक्षित।",

    // Admin Section
    admin_login_title: "प्रशासक (एडमिन) पोर्टल लॉगिन",
    admin_login_subtitle: "कृषि योजनाओं को जोड़ें, संपादित करें और प्रबंधित करें।",
    admin_demo_badge: "प्रदर्शन लॉगिन क्रेडेंशियल",
    admin_demo_info: "ईमेल: admin@123 | पासवर्ड: 1234567890",
    admin_security_notice: "सूचना: यह एक स्टैटिक क्लाइंट-साइड प्रदर्शन वेबसाइट है। प्रमाणीकरण ब्राउज़र जावास्क्रिप्ट और लोकलस्टोरेज द्वारा संचालित है। यह सार्वजनिक उत्पादन वातावरण के लिए उपयुक्त नहीं है।",
    label_admin_email: "एडमिन ईमेल / यूज़रनेम",
    placeholder_admin_email: "admin@123",
    label_admin_password: "पासवर्ड",
    placeholder_admin_password: "••••••••••",
    btn_login: "डैशबोर्ड में लॉगिन करें",
    btn_fill_demo: "नमूना विवरण स्वतः भरें",
    btn_back_home: "← किसान पोर्टल पर लौटें",
    login_invalid: "अमान्य क्रेडेंशियल! कृपया admin@123 और 1234567890 का उपयोग करें।",
    login_success: "लॉगिन सफल! एडमिन डैशबोर्ड में आपका स्वागत है।",

    // Admin Dashboard
    admin_dash_title: "रैतु मित्र योजना प्रबंधन डैशबोर्ड",
    admin_welcome: "एडमिन के रूप में लॉग इन हैं (admin@123)",
    btn_logout: "लॉगआउट",
    btn_add_new: "+ नई योजना जोड़ें",
    btn_restore_defaults: "↺ नमूना योजनाएं पुनर्स्थापित करें",
    stat_total_schemes: "कुल योजनाएं",
    stat_active_schemes: "सक्रिय योजनाएं",
    stat_national_schemes: "राष्ट्रीय योजनाएं",
    stat_state_schemes: "राज्य स्तरीय योजनाएं",
    admin_table_title: "कॉन्फ़िगर की गई सभी योजनाएं",
    admin_search_placeholder: "योजना के नाम, राज्य या ज़िले द्वारा खोजें...",
    th_scheme_name: "योजना का नाम",
    th_state: "राज्य",
    th_district: "ज़िला",
    th_land_criteria: "भूमि मानदंड",
    th_status: "स्थिति",
    th_actions: "कार्रवाई",
    btn_edit: "संपादित करें",
    btn_delete: "हटाएं",
    btn_toggle_status: "स्थिति बदलें",
    confirm_delete: "क्या आप वाकई इस योजना को हटाना चाहते हैं? यह किसान पोर्टल से तुरंत हटा दी जाएगी।",
    confirm_restore: "क्या आप प्रारंभिक नमूना योजनाओं को पुनर्स्थापित करना चाहते हैं? आपकी कोई भी नई जोड़ी गई योजना रीसेट हो जाएगी।",
    scheme_saved_success: "योजना लोकलस्टोरेज में सफलतापूर्वक सहेज ली गई है और किसान पोर्टल पर अपडेट हो गई है!",
    scheme_deleted_success: "योजना लोकलस्टोरेज से सफलतापूर्वक हटा दी गई है।",
    schemes_restored_success: "नमूना योजनाएं सफलतापूर्वक पुनर्स्थापित कर दी गई हैं!",

    // Add / Edit Modal
    modal_add_title: "नई सरकारी योजना जोड़ें",
    modal_edit_title: "सरकारी योजना संपादित करें",
    tab_lang_en: "English Details (अंग्रेजी)",
    tab_lang_te: "తెలుగు వివరాలు (Telugu)",
    tab_lang_hi: "हिन्दी विवरण (Hindi)",
    field_scheme_name: "योजना का नाम *",
    field_description: "योजना का विवरण *",
    field_eligibility: "पात्रता मानदंड *",
    field_benefits: "लाभ और वित्तीय सहायता *",
    field_documents: "आवश्यक दस्तावेज़ *",
    field_apply_process: "आवेदन प्रक्रिया *",
    field_state: "लागू राज्य *",
    field_district: "लागू ज़िला *",
    field_village: "लागू गाँव (सभी के लिए रिक्त छोड़ें)",
    field_min_land: "न्यूनतम भूमि (एकड़)",
    field_max_land: "अधिकतम भूमि (एकड़ - असीमित के लिए 999)",
    field_official_url: "आधिकारिक वेबसाइट लिंक *",
    field_category: "योजना की श्रेणी *",
    field_status: "योजना की स्थिति *",
    btn_save_scheme: "योजना सहेजें",
    btn_cancel: "रद्द करें",
    form_err_req: "कृपया कम से कम अंग्रेजी में या सभी भाषाओं में आवश्यक फ़ील्ड (*) भरें।",
    form_err_land: "न्यूनतम भूमि अधिकतम भूमि से कम या उसके बराबर होनी चाहिए।"
  }
};

/**
 * Get translation for given key in given language
 */
function t(key, lang = null) {
  if (!lang) {
    lang = localStorage.getItem('rythu_mitra_lang') || 'en';
  }
  if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key] !== undefined) {
    return TRANSLATIONS[lang][key];
  }
  if (TRANSLATIONS['en'] && TRANSLATIONS['en'][key] !== undefined) {
    return TRANSLATIONS['en'][key];
  }
  return key;
}

/**
 * Update DOM elements with data-i18n and data-i18n-placeholder
 */
function applyTranslations(lang = null) {
  if (!lang) {
    lang = localStorage.getItem('rythu_mitra_lang') || 'en';
  }
  localStorage.setItem('rythu_mitra_lang', lang);

  // Set document lang attribute and update body font class if needed
  document.documentElement.lang = lang;
  document.body.classList.remove('lang-en', 'lang-te', 'lang-hi');
  document.body.classList.add(`lang-${lang}`);

  // Translate innerText / innerHTML for elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = t(key, lang);
    if (text) {
      el.innerHTML = text;
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const text = t(key, lang);
    if (text) {
      el.setAttribute('placeholder', text);
    }
  });

  // Translate titles / aria-labels
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    const text = t(key, lang);
    if (text) {
      el.setAttribute('title', text);
    }
  });

  // Update active state in language selector dropdowns
  document.querySelectorAll('.lang-select-btn, .lang-option').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update language selector label in navbar if exists
  const langLabel = document.getElementById('current-lang-label');
  if (langLabel) {
    const labels = { en: 'English', te: 'తెలుగు', hi: 'हिन्दी' };
    langLabel.textContent = labels[lang] || 'English';
  }

  // Dispatch custom event for dynamic components to re-render
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}
