# Rythu Mitra – Indian Farmers Government Schemes Portal
> **"Your Farming Partner, Your Government Benefits"**  
> *"మీ వ్యవసాయ భాగస్వామి, మీ ప్రభుత్వ ప్రయోజనాలు"*  
> *"आपका कृषि साथी, आपके सरकारी लाभ"*

---

## 1. Project Overview

**Rythu Mitra** (meaning *"Farmer's Friend"*) is a modern, responsive, static web application designed specifically to empower Indian farmers (*Annadatas*). It enables farmers across all Indian States and Union Territories to discover government agricultural schemes, subsidies, direct investment support, crop insurance, and irrigation assistance tailored to their specific **State**, **District**, **Village**, and **Agricultural Landholding in Acres**.

### Pure Static Frontend Architecture
- **Strictly Frontend-Only**: Developed using standard HTML5, CSS3, modern Vanilla JavaScript, and Bootstrap 5.
- **Zero Backend / Zero External Databases**: **No** Node.js, Express, PHP, Python, MongoDB, MySQL, Firebase, or Supabase.
- **Browser LocalStorage**: Scheme records, admin demonstration sessions, and language preferences persist reliably directly in the client browser.
- **Offline / Low-Bandwidth Friendly**: Highly optimized for rural mobile devices with fast loading times and zero third-party tracking.

---

## 2. Key Features

### 🌾 1. Multilingual Support (English, Telugu, Hindi)
- Seamless one-click switching between **English**, **తెలుగు (Telugu)**, and **हिन्दी (Hindi)**.
- Full UI translation covering navigation, hero texts, search forms, scheme titles, descriptions, benefits, required documents, eligibility criteria, administrative consoles, and alerts.
- Dedicated Unicode typography (`Noto Sans Telugu` and `Noto Sans Devanagari`) ensuring clean rendering of regional scripts.
- Remembers user's language preference across page refreshes via `LocalStorage`.

### 📍 2. Intelligent Location & Landholding Matcher
- **State Selection**: Covers all 28 Indian States and 8 Union Territories.
- **Dynamic District Loading**: Selecting any state automatically populates its respective districts.
- **Village Text Input**: Supports Unicode input for native village names (Telugu, Hindi, English).
- **Landholding Criteria Evaluation**:
  - Automatically compares the farmer's entered acreage against minimum and maximum scheme limits.
  - Displays a prominent green badge (`✓ You Meet Land Criteria`) when eligible.
  - Highlights specific land limits (`⚠ Land Range: X to Y Acres`) if landholding falls outside the configuration, ensuring full transparency.

### 📜 3. Rich Demonstration Schemes Data
Comes pre-loaded with curated, authentic agricultural schemes:
1. **Nationwide Agricultural Scheme**: *PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)* – Direct income transfer of ₹6,000/year.
2. **Andhra Pradesh Scheme**: *YSR Rythu Bharosa / Annadata Sukhibhava* – Seasonal crop investment support of up to ₹20,000/year.
3. **Telangana Scheme**: *Rythu Bandhu / Rythu Bharosa* – Direct investment grant of ₹5,000 - ₹7,500 per acre per season.
4. **District-Specific Scheme**: *Special Micro-Irrigation & Drip Subsidy Scheme (Anantapur District)* – Up to 90% subsidy on drip systems in drought-prone zones.
5. **Land Eligibility-Specific Scheme**: *Sub-Mission on Agricultural Mechanization (SMAM)* – 40% to 50% subsidy on farm implements strictly for small & marginal farmers holding up to 5 acres.
6. **Crop Insurance**: *Pradhan Mantri Fasal Bima Yojana (PMFBY)* – 1.5% to 2% premium comprehensive crop protection.
7. **Clean Energy & Power**: *Telangana Free Agriculture Power & Solar Feeder Pump Subsidy (PM-KUSUM Component B)*.
8. **Concessional Credit**: *Kisan Credit Card (KCC) Crop Loan Scheme* – 4% prompt repayment interest rate up to ₹3 Lakhs.

### 🛡️ 4. Administrator Portal & Scheme Management
- Dedicated Admin Console (`admin.html`).
- Client-side demo credential validation:
  - **Email**: `admin@123`
  - **Password**: `1234567890`
- **Dashboard Metrics**: Real-time counter of Total Schemes, Active Schemes, National Schemes, and State Schemes.
- **Add New Scheme**: Multilingual tabs to create schemes with custom English, Telugu, and Hindi titles, descriptions, and criteria.
- **Edit & Update**: Immediate synchronization with `LocalStorage` and instant reflection on the farmer portal.
- **Delete Confirmation**: Safe deletion modal preventing accidental loss.
- **Status Toggle**: Instant 1-click toggle between Active (publicly visible) and Inactive (hidden).
- **Restore Default Schemes**: Reset button to quickly restore initial demonstration schemes at any time.

### ℹ️ 5. Official Government Verification Disclaimer
- Prominent banners throughout the portal emphasize that Rythu Mitra is an independent informational guide.
- Official direct portal links (e.g., `pmkisan.gov.in`, `pmfby.gov.in`, `ysrrythubharosa.ap.gov.in`) are provided for authentic registration and statutory verification.
- Direct link to the national **Kisan Call Center (1800-180-1551)** for toll-free agricultural guidance.

---

## 3. Project File Structure

```text
rythu-mitra/
│
├── index.html              # Farmer Portal (Hero, Search Form, Schemes Grid, Details Modal, About, Contact)
├── admin.html              # Admin Management Portal (Login, Metrics, Scheme CRUD, Multilingual Form)
│
├── css/
│   └── style.css           # Agricultural Theme (Green, White, Sunshine Yellow), Typography, Components
│
├── js/
│   ├── translations.js     # Trilingual dictionary (EN, TE, HI) & dynamic DOM translation engine
│   ├── schemes.js          # Indian States & Districts map, initial scheme records, LocalStorage CRUD APIs
│   ├── main.js             # Farmer form validation, dynamic filtering, card rendering, details modal
│   └── admin.js            # Admin authentication, dashboard metrics, modal tabs, delete & restore logic
│
├── assets/
│   └── images/
│       └── farmer-hero.svg # High-definition vector illustration of Indian farmer, fields, and solar pump
│
└── README.md               # Complete Project Documentation & User Guide
```

---

## 4. Branding & Visual Design System

- **Primary Color**: Agricultural Forest Green (`#15803d` / `#14532d` / `#22c55e`) representing lush fertility and prosperity.
- **Secondary Color**: Clean White (`#ffffff` / `#f8fafc`) providing high contrast and readability.
- **Accent Color**: Sunshine Yellow / Harvest Gold (`#fef08a` / `#eab308` / `#ca8a04`) symbolizing ripe crops and sunlight.
- **Typography**: Inter for modern numbers and English prose, combined with Google Unicode fonts `Noto Sans Telugu` and `Noto Sans Devanagari`.
- **Accessibility**: High contrast text, clear form labels with asterisk indicators, and descriptive icons.

---

## 5. Step-by-Step Testing Guide

### A. Testing the Farmer Workflow (`index.html`)

1. **Launch the Portal**:
   - Open `index.html` directly in any modern web browser (Chrome, Edge, Firefox, Safari).
2. **Switch Language**:
   - In the navigation bar or top group, click **తెలుగు** or **हिन्दी**.
   - Notice how all headers, navigation links, form labels, buttons, and scheme cards instantly translate into the selected language.
   - Refresh the browser; verify that the selected language persists via `LocalStorage`.
3. **Execute Search**:
   - Under **State**, select `Andhra Pradesh`.
   - Observe that the **District** dropdown activates dynamically.
   - Select `Ananthapuramu (Anantapur)`.
   - In **Village**, enter `Kothapalli` (or any village name).
   - In **Agricultural Land (in Acres)**, enter `3.5`.
   - Click **Search Available Schemes**.
4. **Analyze Results**:
   - The page smoothly scrolls to the results section.
   - The active profile pill displays: *"for your profile: Andhra Pradesh, Ananthapuramu (Anantapur), Kothapalli (3.5 Acres)"*.
   - View matching schemes:
     - *PM-KISAN* (Nationwide)
     - *YSR Rythu Bharosa* (Andhra Pradesh State Scheme)
     - *Special Micro-Irrigation & Drip Subsidy Scheme* (District-specific to Anantapur)
     - *SMAM Equipment Subsidy* (Small farmer scheme matching 3.5 acres)
   - Observe the green badge: **"✓ You Meet Land Criteria (3.5 Acres)"**.
5. **Inspect Scheme Details**:
   - Click **View Full Details** on any scheme card.
   - The interactive popup modal opens, showing detailed tabs: Overview, Landholding Requirements, Benefits, Documents Checklist, Application Procedure, and the official government website button.

---

### B. Testing the Admin Management Workflow (`admin.html`)

1. **Access Admin Portal**:
   - Click **Admin Portal** in the navigation bar, or navigate to `admin.html`.
2. **Log In**:
   - Click the **Auto-Fill** button (or type `admin@123` and `1234567890`).
   - Click **Login to Admin Dashboard**.
   - A success notification confirms login, and the dashboard reveals real-time metrics.
3. **Add a New Scheme**:
   - Click **+ Add New Scheme**.
   - In the **English** tab, fill in the title, description, benefits, and required documents.
   - Switch to the **తెలుగు** or **हिन्दी** tab to input regional language details (or leave them for auto-fallback).
   - Set the State (e.g., `Karnataka`), District, Min Land (`0`), Max Land (`10`), and Official URL.
   - Click **Save Scheme**.
   - A confirmation toast appears, and the new scheme displays immediately in the table.
4. **Verify Immediate Farmer Portal Sync**:
   - Return to `index.html`.
   - The newly added scheme appears immediately in the schemes list!
5. **Delete / Edit a Scheme**:
   - In `admin.html`, click the **Delete** button next to any scheme.
   - Confirm deletion in the safety modal.
   - The scheme disappears from both the admin table and the farmer portal.
6. **Restore Demonstration Data**:
   - Click **↺ Restore Demonstration Schemes** and confirm.
   - All standard sample schemes are restored to their pristine state.

---

## 6. Security & Architectural Notice

> [!NOTE]
> **Static Demonstration Portal**:
> As specified in the project guidelines, this website is implemented entirely on the client side using HTML5, CSS3, JavaScript, and browser `LocalStorage`. Administrative authentication and storage operations take place directly in the user's browser for demonstration, educational, and evaluation purposes.
