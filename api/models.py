"""
Pydantic Request & Response Data Models for Rythu Mitra Mobile REST API
"""

from typing import Dict, List, Optional
from pydantic import BaseModel, Field

class MultilingualText(BaseModel):
    en: str = Field(..., description="English text")
    te: Optional[str] = Field("", description="Telugu text (తెలుగు)")
    hi: Optional[str] = Field("", description="Hindi text (हिन्दी)")

class SchemeBase(BaseModel):
    name: MultilingualText
    description: MultilingualText
    eligibility: MultilingualText
    benefits: MultilingualText
    documents: MultilingualText
    applicationProcess: MultilingualText
    state: str = Field("All", description="Applicable Indian state or 'All'")
    district: str = Field("All", description="Applicable district or 'All'")
    village: Optional[str] = Field("All", description="Applicable village or 'All'")
    minLand: float = Field(0.0, description="Minimum land requirement in acres")
    maxLand: float = Field(999.0, description="Maximum land requirement in acres")
    category: str = Field("Financial Assistance", description="Scheme category")
    officialUrl: str = Field("", description="Official government application URL")
    status: str = Field("active", description="'active' or 'inactive'")

class SchemeCreate(SchemeBase):
    pass

class SchemeUpdate(BaseModel):
    name: Optional[MultilingualText] = None
    description: Optional[MultilingualText] = None
    eligibility: Optional[MultilingualText] = None
    benefits: Optional[MultilingualText] = None
    documents: Optional[MultilingualText] = None
    applicationProcess: Optional[MultilingualText] = None
    state: Optional[str] = None
    district: Optional[str] = None
    village: Optional[str] = None
    minLand: Optional[float] = None
    maxLand: Optional[float] = None
    category: Optional[str] = None
    officialUrl: Optional[str] = None
    status: Optional[str] = None

class SchemeResponse(SchemeBase):
    id: str
    dateAdded: str

class FarmerFilterRequest(BaseModel):
    state: str = Field(..., example="Andhra Pradesh")
    district: str = Field(..., example="Ananthapuramu (Anantapur)")
    village: Optional[str] = Field("", example="Kothapalli")
    land_acres: float = Field(..., gt=0, example=3.5)
    lang: Optional[str] = Field("en", description="'en', 'te', or 'hi'")
    keyword: Optional[str] = Field("", description="Optional search term")

class LandEvaluation(BaseModel):
    is_evaluated: bool
    is_eligible: bool
    farmer_land: float
    min_land: float
    max_land: float
    status_label: str
    explanation: str

class MatchedSchemeItem(BaseModel):
    id: str
    name: str
    description: str
    benefits: str
    eligibility: str
    documents: List[str]
    application_process: str
    category: str
    state: str
    district: str
    village: str
    min_land: float
    max_land: float
    official_url: str
    land_evaluation: LandEvaluation
    raw_multilingual: Optional[Dict[str, Dict[str, str]]] = None

class FarmerFilterResponse(BaseModel):
    total_found: int
    farmer_profile: Dict[str, object]
    disclaimer: str
    schemes: List[MatchedSchemeItem]

class AdminLoginRequest(BaseModel):
    email: str = Field(..., example="admin@123")
    password: str = Field(..., example="1234567890")

class AdminLoginResponse(BaseModel):
    success: bool
    token: Optional[str] = None
    message: str
    admin_email: Optional[str] = None

class AdminStatsResponse(BaseModel):
    total_schemes: int
    active_schemes: int
    national_schemes: int
    state_schemes: int
