"""
Rythu Mitra - FastAPI Mobile REST Backend
Serves mobile applications (Flutter, React Native, Android Kotlin, iOS Swift)
and Swagger UI interactive documentation.
"""

import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import RedirectResponse, JSONResponse

from .routers import schemes, locations, translations, admin

app = FastAPI(
    title="Rythu Mitra Mobile API",
    description="""
# 🌾 Rythu Mitra – Indian Farmers Government Schemes Portal API

A high-performance, mobile-first REST API designed for mobile apps (Flutter, React Native, Android Kotlin, iOS Swift).

### Features:
- **Location Matching**: Nationwide, State, District, and Village level schemes.
- **Landholding Engine**: Evaluates farmer acreage against scheme limits.
- **Multilingual Support**: English, Telugu (తెలుగు), and Hindi (हिन्दी).
- **CORS Enabled**: Configured with `allow_origins=['*']` for seamless cross-platform mobile connectivity.
- **Swagger Documentation**: Interactive live testing directly at `/docs`.
""",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# Enable CORS for all mobile apps and web frontends
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register API Routers
app.include_router(schemes.router)
app.include_router(locations.router)
app.include_router(translations.router)
app.include_router(admin.router)

# Mount the static website frontend for dual web & mobile viewing
STATIC_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
if os.path.exists(os.path.join(STATIC_DIR, "index.html")):
    app.mount("/portal", StaticFiles(directory=STATIC_DIR, html=True), name="portal")

@app.get("/", summary="API Root Health Check & Information")
def root_info():
    return {
        "portal": "Rythu Mitra – Indian Farmers Government Schemes Portal API",
        "version": "1.0.0",
        "status": "online",
        "documentation": "/docs",
        "redoc": "/redoc",
        "web_portal": "/portal/index.html",
        "admin_web_portal": "/portal/admin.html",
        "mobile_endpoints": {
            "states": "/api/locations/states",
            "districts": "/api/locations/districts?state=Andhra%20Pradesh",
            "filter_schemes": "POST /api/schemes/filter",
            "all_schemes": "/api/schemes",
            "translations": "/api/translations?lang=te",
            "admin_stats": "/api/admin/stats"
        }
    }
