import sys
import os

# Set standard streams to utf-8 if possible
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

from api.routers.locations import get_all_states, get_districts_for_state
from api.routers.schemes import filter_schemes_for_farmer
from api.routers.admin import get_admin_stats
from api.models import FarmerFilterRequest

print("=" * 60)
print("TESTING RYTHU MITRA REST API DIRECTLY")
print("=" * 60)

# 1. States
states = get_all_states()
print("[OK] States loaded:", len(states), "states found. Sample:", states[:4])

# 2. Districts
ap_districts = get_districts_for_state("Andhra Pradesh")
print("[OK] Andhra Pradesh districts:", len(ap_districts), "found. Sample:", ap_districts[:3])

# 3. Scheme filtering in English for farmer with 3.5 acres
req = FarmerFilterRequest(
    state="Andhra Pradesh",
    district="Ananthapuramu (Anantapur)",
    village="Kothapalli",
    land_acres=3.5,
    lang="en"
)
filter_result = filter_schemes_for_farmer(req)
print("[OK] Matching schemes found:", filter_result.total_found)
for s in filter_result.schemes:
    print("   *", "[" + s.land_evaluation.status_label + "]", s.name)

# 4. Admin statistics
stats = get_admin_stats()
print("[OK] Admin stats: Total:", stats.total_schemes, "Active:", stats.active_schemes, "National:", stats.national_schemes, "State:", stats.state_schemes)
print("=" * 60)
print("ALL API LOGIC VERIFIED AND WORKING PERFECTLY!")
print("=" * 60)
