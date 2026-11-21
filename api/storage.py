"""
Data Persistence Layer for Rythu Mitra API using persistent JSON storage
"""

import json
import os
import time
from datetime import datetime
from typing import List, Optional, Dict, Any
from .data import INITIAL_SCHEMES

DB_PATH = os.path.join(os.path.dirname(__file__), "schemes_db.json")

def load_db() -> List[Dict[str, Any]]:
    if not os.path.exists(DB_PATH):
        save_db(INITIAL_SCHEMES)
        return list(INITIAL_SCHEMES)
    try:
        with open(DB_PATH, "r", encoding="utf-8") as f:
            data = json.load(f)
            if isinstance(data, list) and len(data) > 0:
                return data
            save_db(INITIAL_SCHEMES)
            return list(INITIAL_SCHEMES)
    except Exception as e:
        print(f"Error reading schemes database: {e}")
        return list(INITIAL_SCHEMES)

def save_db(schemes: List[Dict[str, Any]]) -> bool:
    try:
        with open(DB_PATH, "w", encoding="utf-8") as f:
            json.dump(schemes, f, ensure_ascii=False, indent=2)
        return True
    except Exception as e:
        print(f"Error saving schemes database: {e}")
        return False

def get_all_schemes(active_only: bool = False) -> List[Dict[str, Any]]:
    schemes = load_db()
    if active_only:
        return [s for s in schemes if s.get("status") == "active"]
    return schemes

def get_scheme_by_id(scheme_id: str) -> Optional[Dict[str, Any]]:
    schemes = load_db()
    for s in schemes:
        if s.get("id") == scheme_id:
            return s
    return None

def create_scheme(data: Dict[str, Any]) -> Dict[str, Any]:
    schemes = load_db()
    new_id = f"scheme-{int(time.time() * 1000)}"
    new_scheme = {
        **data,
        "id": new_id,
        "dateAdded": datetime.now().strftime("%Y-%m-%d"),
        "status": data.get("status", "active")
    }
    schemes.insert(0, new_scheme)
    save_db(schemes)
    return new_scheme

def update_scheme(scheme_id: str, updated_data: Dict[str, Any]) -> Optional[Dict[str, Any]]:
    schemes = load_db()
    for i, s in enumerate(schemes):
        if s.get("id") == scheme_id:
            # Merge fields
            merged = {**s}
            for k, v in updated_data.items():
                if v is not None:
                    merged[k] = v
            merged["id"] = scheme_id  # ensure ID is preserved
            schemes[i] = merged
            save_db(schemes)
            return merged
    return None

def delete_scheme(scheme_id: str) -> bool:
    schemes = load_db()
    initial_count = len(schemes)
    schemes = [s for s in schemes if s.get("id") != scheme_id]
    if len(schemes) < initial_count:
        save_db(schemes)
        return True
    return False

def restore_default_schemes() -> List[Dict[str, Any]]:
    save_db(INITIAL_SCHEMES)
    return list(INITIAL_SCHEMES)

def evaluate_farmer_land(farmer_land: float, min_land: float, max_land: float, lang: str = "en") -> Dict[str, Any]:
    is_eligible = (farmer_land >= min_land and farmer_land <= max_land)
    
    labels = {
        "en": ("Eligible for Scheme", "Land Criteria Mismatch"),
        "te": ("భూమి అర్హత సరిపోతుంది", "భూమి పరిమితికి సరిపోలలేదు"),
        "hi": ("योजना हेतु भूमि पात्र", "भूमि मानदंड भिन्न")
    }
    
    current_labels = labels.get(lang, labels["en"])
    status_label = current_labels[0] if is_eligible else current_labels[1]
    
    if is_eligible:
        explanation = f"Your land ({farmer_land} acres) meets the scheme criteria ({min_land} to {max_land if max_land < 900 else 'Unlimited'} acres)."
    elif farmer_land < min_land:
        explanation = f"Your land ({farmer_land} acres) is below the minimum required ({min_land} acres)."
    else:
        explanation = f"Your land ({farmer_land} acres) exceeds the maximum allowed ({max_land} acres)."

    return {
        "is_evaluated": True,
        "is_eligible": is_eligible,
        "farmer_land": farmer_land,
        "min_land": min_land,
        "max_land": max_land,
        "status_label": status_label,
        "explanation": explanation
    }
