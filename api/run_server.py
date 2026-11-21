"""
Rythu Mitra API Server Launcher
Automatically detects local IP and runs Uvicorn on 0.0.0.0:8000
so mobile phones on the same Wi-Fi network can connect directly!
"""

import socket
import uvicorn
import sys
import os

# Ensure project root is on sys.path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return "127.0.0.1"

if __name__ == "__main__":
    local_ip = get_local_ip()
    port = 8000

    print("=" * 70)
    print("🌾 RYTHU MITRA – MOBILE REST API SERVER")
    print("=" * 70)
    print(f"📡 Localhost URL:         http://localhost:{port}")
    print(f"📑 Swagger Docs:          http://localhost:{port}/docs")
    print(f"🌐 Static Web Portal:     http://localhost:{port}/portal/index.html")
    print("-" * 70)
    print("📱 CONNECTING FROM A MOBILE PHONE OR EMULATOR:")
    print(f"   • Real Mobile Phone (Same Wi-Fi): http://{local_ip}:{port}/docs")
    print(f"   • Android Emulator:                http://10.0.2.2:{port}/docs")
    print(f"   • iOS Simulator:                   http://localhost:{port}/docs")
    print("=" * 70)
    print("Starting server on 0.0.0.0:8000 with CORS enabled for mobile apps...\n")

    uvicorn.run("api.main:app", host="0.0.0.0", port=port, reload=False)
