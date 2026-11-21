"""
Locations API - States and Districts for Mobile UI Dropdowns & Spinners
"""

from typing import List, Dict, Optional
from fastapi import APIRouter, Query, HTTPException
from ..data import INDIAN_STATES_DISTRICTS

router = APIRouter(prefix="/api/locations", tags=["Locations (States & Districts)"])

@router.get("/states", response_model=List[str], summary="Get List of All Indian States and UTs")
def get_all_states():
    """
    Returns sorted list of all 28 States and 8 Union Territories for mobile picker/dropdown.
    """
    return sorted(list(INDIAN_STATES_DISTRICTS.keys()))

@router.get("/districts", response_model=List[str], summary="Get Districts for Selected State")
def get_districts_for_state(state: str = Query(..., description="Name of the Indian State, e.g. 'Andhra Pradesh'")):
    """
    Returns list of districts for the specified state.
    Mobile apps call this when user selects a state.
    """
    # Case-insensitive lookup
    matched_key = None
    for k in INDIAN_STATES_DISTRICTS.keys():
        if k.lower() == state.lower():
            matched_key = k
            break
            
    if not matched_key:
        raise HTTPException(
            status_code=404,
            detail=f"State '{state}' not found. Valid states can be fetched from /api/locations/states."
        )
        
    return INDIAN_STATES_DISTRICTS[matched_key]

@router.get("/map", response_model=Dict[str, List[str]], summary="Get Full State-to-Districts Map")
def get_full_location_map():
    """
    Returns the complete dictionary of States and their Districts.
    Useful for mobile apps to cache offline and perform local offline picker selection.
    """
    return INDIAN_STATES_DISTRICTS
