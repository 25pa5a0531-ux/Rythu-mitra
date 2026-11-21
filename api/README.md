# 🌾 Rythu Mitra – Mobile REST API & Integration Guide

A high-performance, mobile-first REST API backend built with **Python FastAPI** and **Swagger UI** for the Rythu Mitra Indian Farmers Government Schemes Portal.

---

## 1. Quick Start – Running the API

Open PowerShell or terminal in the project directory:

```powershell
cd "C:\Users\Admin\.gemini\antigravity\scratch\rythu-mitra"
python api/run_server.py
```

The server automatically binds to `0.0.0.0:8000` with **CORS enabled (`*`)** so any mobile device or emulator can communicate with it immediately.

### URLs:
- **Interactive Swagger Documentation**: [`http://localhost:8000/docs`](http://localhost:8000/docs)
- **ReDoc Documentation**: [`http://localhost:8000/redoc`](http://localhost:8000/redoc)
- **API Root**: [`http://localhost:8000/`](http://localhost:8000/)
- **Embedded Web Portal**: [`http://localhost:8000/portal/index.html`](http://localhost:8000/portal/index.html)

---

## 2. Connecting from Mobile Devices

| Environment | Base URL to use in Mobile App |
| :--- | :--- |
| **Android Emulator** | `http://10.0.2.2:8000` |
| **iOS Simulator** | `http://localhost:8000` |
| **Physical Smartphone (Wi-Fi)** | `http://<YOUR_COMPUTER_IP>:8000` *(displayed when running `run_server.py`)* |
| **Production / Cloud Deployment** | `https://your-domain.com` |

---

## 3. API Endpoints Reference

### A. Location Endpoints (States & Districts)
- `GET /api/locations/states`  
  Returns all 28 Indian States and 8 UTs sorted alphabetically.
- `GET /api/locations/districts?state=Andhra%20Pradesh`  
  Returns all districts for the selected state.
- `GET /api/locations/map`  
  Returns the complete State-to-Districts dictionary for offline mobile caching.

### B. Farmer Schemes Discovery Engine
- `POST /api/schemes/filter`  
  **Primary Mobile Endpoint**. Sends the farmer's location, landholding, and desired language.  
  **Request Body:**
  ```json
  {
    "state": "Andhra Pradesh",
    "district": "Ananthapuramu (Anantapur)",
    "village": "Kothapalli",
    "land_acres": 3.5,
    "lang": "te"
  }
  ```
  **Response:**
  - Matched schemes (Nationwide, State, District).
  - Evaluated land criteria indicator (`is_eligible: true`, min/max limits).
  - Clean localized text in English, Telugu, or Hindi.
  - Required documents list.
  - Official application portal URL.

- `GET /api/schemes`  
  Lists all schemes (supports `?category=...&state=...&active_only=true`).

- `GET /api/schemes/{id}?lang=te`  
  Fetches detailed scheme by ID with localized and raw multilingual fields.

### C. Multilingual UI Translations
- `GET /api/translations?lang=te`  
  Fetches key-value UI label dictionaries for native mobile app screens (`en`, `te`, `hi`).

### D. Administrator Management Endpoints
- `POST /api/admin/login`  
  Body: `{"email": "admin@123", "password": "1234567890"}`.
- `GET /api/admin/stats`  
  Returns Total, Active, National, and State scheme counts.
- `POST /api/admin/schemes`  
  Creates a new scheme with multilingual fields.
- `PUT /api/admin/schemes/{id}`  
  Updates an existing scheme.
- `DELETE /api/admin/schemes/{id}`  
  Deletes a scheme from the persistent database.
- `POST /api/admin/restore-defaults`  
  Restores original 8 demonstration schemes.

---

## 4. Mobile Client Code Examples

### 📱 Flutter (Dart) Example

```dart
import 'dart:convert';
import 'package:http/http.dart' as http;

class RythuMitraApi {
  // Use 10.0.2.2 for Android Emulator, or your computer IP for physical device
  static const String baseUrl = "http://10.0.2.2:8000";

  // 1. Fetch States
  static Future<List<String>> fetchStates() async {
    final response = await http.get(Uri.parse('$baseUrl/api/locations/states'));
    if (response.statusCode == 200) {
      return List<String>.from(json.decode(response.body));
    }
    throw Exception('Failed to load states');
  }

  // 2. Fetch Schemes matching Farmer criteria
  static Future<Map<String, dynamic>> searchSchemes({
    required String state,
    required String district,
    required String village,
    required double landAcres,
    String lang = "te", // 'te' for Telugu, 'hi' for Hindi, 'en' for English
  }) async {
    final response = await http.post(
      Uri.parse('$baseUrl/api/schemes/filter'),
      headers: {'Content-Type': 'application/json'},
      body: json.encode({
        'state': state,
        'district': district,
        'village': village,
        'land_acres': landAcres,
        'lang': lang,
      }),
    );

    if (response.statusCode == 200) {
      return json.decode(utf8.decode(response.bodyBytes));
    }
    throw Exception('Failed to search schemes');
  }
}
```

---

### ⚛️ React Native / Expo Example

```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const API_BASE_URL = 'http://10.0.2.2:8000'; // Or your local IP: http://192.168.x.x:8000

export default function FarmerSchemesScreen() {
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchSchemes = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/schemes/filter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          state: 'Andhra Pradesh',
          district: 'Ananthapuramu (Anantapur)',
          village: 'Kothapalli',
          land_acres: 3.5,
          lang: 'te' // Telugu
        }),
      });
      const data = await response.json();
      setSchemes(data.schemes);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Search Schemes (పథకాలు శోధించండి)" onPress={searchSchemes} />
      <FlatList
        data={schemes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.badge}>
              {item.land_evaluation.is_eligible ? '✓ అర్హత సరిపోతుంది' : '⚠ పరిమితి'}
            </Text>
            <Text style={styles.desc}>{item.description}</Text>
            <Text style={styles.benefits}>సాయం: {item.benefits}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f8fafc' },
  card: { backgroundColor: '#fff', padding: 14, borderRadius: 12, marginVertical: 8, elevation: 2 },
  title: { fontSize: 16, fontWeight: 'bold', color: '#14532d' },
  badge: { fontSize: 12, color: '#15803d', fontWeight: 'bold', marginVertical: 4 },
  desc: { fontSize: 13, color: '#475569', marginBottom: 6 },
  benefits: { fontSize: 13, color: '#0f172a', fontWeight: '600' }
});
```

---

### 💻 Testing with cURL

```bash
# 1. Get States
curl -X GET "http://localhost:8000/api/locations/states"

# 2. Filter Schemes for a Farmer with 3.5 Acres in Telugu
curl -X POST "http://localhost:8000/api/schemes/filter" \
     -H "Content-Type: application/json" \
     -d '{
       "state": "Andhra Pradesh",
       "district": "Ananthapuramu (Anantapur)",
       "village": "Kothapalli",
       "land_acres": 3.5,
       "lang": "te"
     }'
```
