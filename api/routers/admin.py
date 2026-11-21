"""
Admin Management Endpoints for Scheme Configuration and Synchronization
"""

from typing import List, Dict, Any
from fastapi import APIRouter, HTTPException, Depends
from ..models import (
    AdminLoginRequest,
    AdminLoginResponse,
    AdminStatsResponse,
    SchemeCreate,
    SchemeUpdate,
    SchemeResponse
)
from ..storage import (
    get_all_schemes,
    get_scheme_by_id,
    create_scheme,
    update_scheme,
    delete_scheme,
    restore_default_schemes
)

router = APIRouter(prefix="/api/admin", tags=["Admin Portal Management"])

ADMIN_CREDENTIALS = {
    "email": "admin@123",
    "password": "1234567890"
}

@router.post("/login", response_model=AdminLoginResponse, summary="Admin Demonstration Login")
def admin_login(creds: AdminLoginRequest):
    """
    Simulated demonstration login for administrators.
    Credentials: admin@123 / 1234567890
    """
    if creds.email == ADMIN_CREDENTIALS["email"] and creds.password == ADMIN_CREDENTIALS["password"]:
        return AdminLoginResponse(
            success=True,
            token="demo-admin-bearer-token-rythu-mitra-2026",
            message="Login successful. Client-side static demonstration session initiated.",
            admin_email=creds.email
        )
    raise HTTPException(
        status_code=401,
        detail="Invalid credentials. Use admin@123 and 1234567890 for demonstration access."
    )

@router.get("/stats", response_model=AdminStatsResponse, summary="Get Schemes Dashboard Statistics")
def get_admin_stats():
    """
    Returns metrics count for admin dashboard screens.
    """
    schemes = get_all_schemes(active_only=False)
    total = len(schemes)
    active = sum(1 for s in schemes if s.get("status") == "active")
    national = sum(1 for s in schemes if s.get("state") == "All")
    state_specific = total - national

    return AdminStatsResponse(
        total_schemes=total,
        active_schemes=active,
        national_schemes=national,
        state_schemes=state_specific
    )

@router.post("/schemes", response_model=SchemeResponse, summary="Create New Government Scheme")
def add_new_scheme(scheme_in: SchemeCreate):
    """
    Creates a new scheme record with multilingual fields.
    Persists to JSON database and immediately reflects on farmer endpoints.
    """
    scheme_dict = scheme_in.dict()
    created = create_scheme(scheme_dict)
    return created

@router.put("/schemes/{scheme_id}", response_model=SchemeResponse, summary="Update Existing Scheme")
def edit_scheme(scheme_id: str, scheme_update: SchemeUpdate):
    """
    Updates an existing scheme by ID.
    """
    existing = get_scheme_by_id(scheme_id)
    if not existing:
        raise HTTPException(status_code=404, detail="Scheme not found")
        
    update_data = {k: v for k, v in scheme_update.dict().items() if v is not None}
    updated = update_scheme(scheme_id, update_data)
    if not updated:
        raise HTTPException(status_code=500, detail="Failed to update scheme")
    return updated

@router.delete("/schemes/{scheme_id}", summary="Delete Scheme")
def remove_scheme(scheme_id: str):
    """
    Permanently deletes a scheme from the database.
    """
    success = delete_scheme(scheme_id)
    if not success:
        raise HTTPException(status_code=404, detail="Scheme not found or already deleted")
    return {"success": True, "message": f"Scheme '{scheme_id}' deleted successfully."}

@router.post("/restore-defaults", summary="Restore Demonstration Schemes")
def restore_defaults():
    """
    Restores the database to initial 8 realistic sample schemes.
    """
    schemes = restore_default_schemes()
    return {
        "success": True,
        "message": "Demonstration schemes restored successfully.",
        "count": len(schemes)
    }
