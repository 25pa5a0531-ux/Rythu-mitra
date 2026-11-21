"""
Multilingual Translations API for Mobile Applications
"""

from typing import Dict
from fastapi import APIRouter, Query

router = APIRouter(prefix="/api/translations", tags=["Multilingual Translations"])

API_TRANSLATIONS = {
    "en": {
        "brand_name": "Rythu Mitra",
        "brand_tagline": "Your Farming Partner, Your Government Benefits",
        "hero_title": "Discover Government Schemes Available for You",
        "label_state": "State / Union Territory",
        "label_district": "District",
        "label_village": "Village / Gram Panchayat",
        "label_land": "Agricultural Land (in Acres)",
        "btn_search": "Search Available Schemes",
        "btn_view_details": "View Full Details",
        "btn_apply_official": "Official Scheme Portal",
        "badge_land_eligible": "You Meet Land Criteria",
        "badge_land_mismatch": "Land Criteria Mismatch",
        "kisan_helpline": "Kisan Call Center: 1800-180-1551 (Toll-Free)"
    },
    "te": {
        "brand_name": "రైతు మిత్ర",
        "brand_tagline": "మీ వ్యవసాయ భాగస్వామి, మీ ప్రభుత్వ ప్రయోజనాలు",
        "hero_title": "మీ కోసం అందుబాటులో ఉన్న ప్రభుత్వ పథకాలను తెలుసుకోండి",
        "label_state": "రాష్ట్రం / కేంద్రపాలిత ప్రాంతం",
        "label_district": "జిల్లా",
        "label_village": "గ్రామం / గ్రామ పంచాయితీ",
        "label_land": "వ్యవసాయ భూమి (ఎకరాలలో)",
        "btn_search": "అందుబాటులోని పథకాలను శోధించండి",
        "btn_view_details": "పూర్తి వివరాలు చూడండి",
        "btn_apply_official": "అధికారిక పోర్టల్",
        "badge_land_eligible": "భూమి అర్హత సరిపోతుంది",
        "badge_land_mismatch": "భూమి పరిమితికి సరిపోలలేదు",
        "kisan_helpline": "కిసాన్ కాల్ సెంటర్: 1800-180-1551 (ఉచిత హెల్ప్‌లైన్)"
    },
    "hi": {
        "brand_name": "रैतु मित्र",
        "brand_tagline": "आपका कृषि साथी, आपके सरकारी लाभ",
        "hero_title": "अपने लिए उपलब्ध सरकारी योजनाएं खोजें",
        "label_state": "राज्य / केंद्र शासित प्रदेश",
        "label_district": "ज़िला",
        "label_village": "गाँव / ग्राम पंचायत",
        "label_land": "कृषि भूमि (एकड़ में)",
        "btn_search": "उपलब्ध योजनाएं खोजें",
        "btn_view_details": "पूर्ण विवरण देखें",
        "btn_apply_official": "आधिकारिक पोर्टल",
        "badge_land_eligible": "भूमि मानदंड पूरा होता है",
        "badge_land_mismatch": "भूमि मानदंड भिन्न",
        "kisan_helpline": "किसान कॉल सेंटर: 1800-180-1551 (टोल-फ्री)"
    }
}

@router.get("", summary="Get UI Translation Strings")
def get_translations(lang: str = Query("en", regex="^(en|te|hi)$")):
    """
    Returns key-value string dictionary for mobile UI localized rendering.
    """
    return {
        "language": lang,
        "strings": API_TRANSLATIONS.get(lang, API_TRANSLATIONS["en"])
    }

@router.get("/all", summary="Get All Languages Dictionaries")
def get_all_translations():
    """
    Returns full multilingual bundle for offline mobile storage.
    """
    return API_TRANSLATIONS
