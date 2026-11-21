"""
Scheme Discovery & Filtering API Endpoints for Mobile Clients
"""

from typing import List, Optional
from fastapi import APIRouter, HTTPException, Query
from ..models import (
    FarmerFilterRequest,
    FarmerFilterResponse,
    MatchedSchemeItem,
    LandEvaluation,
    SchemeResponse
)
from ..storage import get_all_schemes, get_scheme_by_id, evaluate_farmer_land

router = APIRouter(prefix="/api/schemes", tags=["Schemes Discovery"])

def get_localized_text(field_dict: dict, lang: str = "en") -> str:
    if not isinstance(field_dict, dict):
        return str(field_dict or "")
    if lang in field_dict and field_dict[lang]:
        return field_dict[lang]
    return field_dict.get("en", "")

@router.get("", response_model=List[SchemeResponse], summary="Get All Configured Schemes")
def list_schemes(
    category: Optional[str] = Query(None, description="Filter by category"),
    state: Optional[str] = Query(None, description="Filter by state"),
    active_only: bool = Query(True, description="Return only active schemes")
):
    """
    Returns list of all schemes currently in database.
    Useful for populating mobile cache or offline storage.
    """
    schemes = get_all_schemes(active_only=active_only)
    
    if category:
        schemes = [s for s in schemes if s.get("category", "").lower() == category.lower()]
    if state and state != "All":
        schemes = [s for s in schemes if s.get("state") in (state, "All")]
        
    return schemes

@router.get("/{scheme_id}", summary="Get Detailed Scheme By ID")
def get_scheme(scheme_id: str, lang: str = Query("en", regex="^(en|te|hi)$")):
    """
    Returns full scheme details by ID with both localized representations and raw trilingual text.
    """
    scheme = get_scheme_by_id(scheme_id)
    if not scheme:
        raise HTTPException(status_code=404, detail="Scheme not found")
        
    docs_text = get_localized_text(scheme.get("documents", {}), lang)
    docs_list = [d.strip() for d in docs_text.split(",") if d.strip()]

    return {
        "id": scheme["id"],
        "name": get_localized_text(scheme.get("name", {}), lang),
        "description": get_localized_text(scheme.get("description", {}), lang),
        "benefits": get_localized_text(scheme.get("benefits", {}), lang),
        "eligibility": get_localized_text(scheme.get("eligibility", {}), lang),
        "documents": docs_list,
        "application_process": get_localized_text(scheme.get("applicationProcess", {}), lang),
        "category": scheme.get("category", "General"),
        "state": scheme.get("state", "All"),
        "district": scheme.get("district", "All"),
        "village": scheme.get("village", "All"),
        "min_land": scheme.get("minLand", 0.0),
        "max_land": scheme.get("maxLand", 999.0),
        "official_url": scheme.get("officialUrl", ""),
        "status": scheme.get("status", "active"),
        "date_added": scheme.get("dateAdded", ""),
        "raw_multilingual": {
            "name": scheme.get("name", {}),
            "description": scheme.get("description", {}),
            "benefits": scheme.get("benefits", {}),
            "eligibility": scheme.get("eligibility", {}),
            "documents": scheme.get("documents", {}),
            "applicationProcess": scheme.get("applicationProcess", {})
        }
    }

@router.post("/filter", response_model=FarmerFilterResponse, summary="Filter Schemes For Farmer Profile")
def filter_schemes_for_farmer(filter_req: FarmerFilterRequest):
    """
    Primary endpoint for mobile apps.
    Accepts farmer's State, District, Village, Land in Acres, and Language.
    Returns:
    - Matching Nationwide, State, and District schemes.
    - Evaluated land criteria indicator (eligible / not eligible).
    - Localized descriptions ready for instant mobile card display.
    """
    all_schemes = get_all_schemes(active_only=True)
    lang = filter_req.lang or "en"
    
    state_query = filter_req.state.strip()
    district_query = filter_req.district.strip()
    village_query = (filter_req.village or "").strip().lower()
    farmer_land = filter_req.land_acres
    keyword = (filter_req.keyword or "").strip().lower()

    matched_items: List[MatchedSchemeItem] = []

    for scheme in all_schemes:
        # 1. State matching: must be 'All' (Nationwide) or match selected state
        scheme_state = scheme.get("state", "All")
        if scheme_state != "All" and scheme_state.lower() != state_query.lower():
            continue

        # 2. District matching: must be 'All' or match selected district
        scheme_district = scheme.get("district", "All")
        if scheme_district not in ("All", "All Districts") and district_query not in ("All", "All Districts"):
            if scheme_district.lower() != district_query.lower():
                continue

        # 3. Village matching (if restricted)
        scheme_village = scheme.get("village", "All")
        if scheme_village and scheme_village != "All" and village_query:
            if village_query not in scheme_village.lower() and scheme_village.lower() not in village_query:
                continue

        # 4. Optional keyword matching across languages
        if keyword:
            name_en = scheme.get("name", {}).get("en", "").lower()
            name_te = scheme.get("name", {}).get("te", "").lower()
            name_hi = scheme.get("name", {}).get("hi", "").lower()
            desc_en = scheme.get("description", {}).get("en", "").lower()
            desc_te = scheme.get("description", {}).get("te", "").lower()
            desc_hi = scheme.get("description", {}).get("hi", "").lower()
            cat = scheme.get("category", "").lower()

            if not any(keyword in field for field in (name_en, name_te, name_hi, desc_en, desc_te, desc_hi, cat)):
                continue

        # 5. Evaluate land criteria
        min_land = float(scheme.get("minLand", 0.0))
        max_land = float(scheme.get("maxLand", 999.0))
        land_eval_dict = evaluate_farmer_land(farmer_land, min_land, max_land, lang=lang)
        land_eval = LandEvaluation(**land_eval_dict)

        # 6. Prepare localized representation
        name_str = get_localized_text(scheme.get("name", {}), lang)
        desc_str = get_localized_text(scheme.get("description", {}), lang)
        benefits_str = get_localized_text(scheme.get("benefits", {}), lang)
        elig_str = get_localized_text(scheme.get("eligibility", {}), lang)
        docs_str = get_localized_text(scheme.get("documents", {}), lang)
        docs_list = [d.strip() for d in docs_str.split(",") if d.strip()]
        apply_str = get_localized_text(scheme.get("applicationProcess", {}), lang)

        matched_items.append(
            MatchedSchemeItem(
                id=scheme["id"],
                name=name_str,
                description=desc_str,
                benefits=benefits_str,
                eligibility=elig_str,
                documents=docs_list,
                application_process=apply_str,
                category=scheme.get("category", "General"),
                state=scheme.get("state", "All"),
                district=scheme.get("district", "All"),
                village=scheme.get("village", "All"),
                min_land=min_land,
                max_land=max_land,
                official_url=scheme.get("officialUrl", ""),
                land_evaluation=land_eval,
                raw_multilingual={
                    "name": scheme.get("name", {}),
                    "description": scheme.get("description", {})
                }
            )
        )

    disclaimers = {
        "en": "Rythu Mitra provides information for guidance purposes. Final sanctioning is subject to verification by official government agriculture departments.",
        "te": "రైతు మిత్ర పోర్టల్ కేవలం సమాచార మార్గదర్శకత్వం కోసం మాత్రమే. పథకం మంజూరు సంబంధిత వ్యవసాయ శాఖ మరియు ప్రభుత్వ అధికారిక పోర్టల్‌ల నిబంధనలకు లోబడి ఉంటుంది.",
        "hi": "रैतु मित्र केवल सूचनात्मक मार्गदर्शन प्रदान करता है। सब्सिडी की अंतिम मंजूरी संबंधित कृषि विभाग और सरकारी सत्यापन के अधीन है।"
    }

    return FarmerFilterResponse(
        total_found=len(matched_items),
        farmer_profile={
            "state": state_query,
            "district": district_query,
            "village": filter_req.village or "All",
            "land_acres": farmer_land,
            "language": lang
        },
        disclaimer=disclaimers.get(lang, disclaimers["en"]),
        schemes=matched_items
    )
