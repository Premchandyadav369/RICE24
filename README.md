# RICE - Revolution in Cultivating Excellence

This is a Next.js project for RICE, a platform dedicated to empowering India's small farmers through AI, credit, and community.

## 🌾 RICE Website – Full Structure + Feature Requirements

### 🏠 1. Home Page (Impact + Trust Focus)
**Purpose:** First impression → explain RICE in 20 seconds

**Sections to Include:**
*   **Hero Banner:** “RICE – Revolution in Cultivating Excellence”
*   **Tagline:** Empowering India’s Small Farmers through AI, Credit, and Community.
*   **Quick explainer animation or short video** (showing “From Soil to Sale” journey)
*   **Call-to-Action Buttons:** “Join as Farmer” / “Partner with Us” / “Invest in RICE”
*   **Impact Counters:**
    *   Farmers Reached-10
    *   Crops Predicted-10
    *   Centers Planned-10+
    *   Market Partners Linked-0

### 🧩 2. About Us Page
**Purpose:** Build trust + show mission alignment

**Sections to Include:**
*   **The Story of RICE** – born from student founders witnessing crop waste & price crashes
*   **Mission:** To digitize and democratize agriculture for Bharat
*   **Vision 2028:** 1M+ farmers, 500+ centers, ₹1,000 Cr+ income enabled
*   **Mention recognition:** PW SOS Top 20, Wadhwani Ignite, Google DevFest participant, etc.
*   **Team section** (mini bios + profile photos with LinkedIn links)

### ⚙️ 3. Product Features Page
**Purpose:** Show RICE as a super app ecosystem

**Core Features:**
1.  **AI Smart Crop Planner** – Recommends crops using soil, weather & mandi APIs
2.  **Climate Advisory** – Drought/flood predictions + risk alerts
3.  **Market Access (B2B)** – Connects farmers to verified buyers
4.  **Microcredit System** – In partnership with NBFCs, post-harvest repayment model
5.  **Storage & Logistics** – Locate, book & track cold storage units nearby
6.  **Skill Lab** – WhatsApp & IVR-based training
7.  **Equipment Rental** – Book tractors, drones, or IoT kits
8.  **Franchise Hub Model** – RICE Centers as rural entrepreneurship hubs

**Additional “Wow” Features:**
*   🌐 **Multilingual Interface** (12+ languages)
*   🤖 **WhatsApp Chatbot** (n8n integrated) for crop help, pricing, or support
*   📡 **Satellite Crop Insights** (future) – Monitor stress & yield predictions
*   💸 **RICE Token Rewards** – For sustainable farming & on-time credit repayment
*   🪴 **Hydroponic & Vertical Farming Units** – Future products

### 💰 4. For Investors / Partners
**Purpose:** Impress accelerators, incubators, and agri VCs

**Sections:**
*   **Impact-driven market opportunity** (TAM/SAM/SOM graphic)
*   **Franchise Model Explainer** (Revenue split 65:35)
*   **Future expansion plans**
*   **Downloadable Investor Deck PDF**
*   **“Partner With Us” contact form**

### 🏪 5. Franchise Page
**Purpose:** Attract entrepreneurs in rural India

**Features:**
*   **How the RICE Franchise Model works**
*   **Income opportunities per center** (case example)
*   **Support provided:** Branding, training, tech, and buyer network
*   **Application form:** “Become a RICE Center Partner”

### 📈 6. Farmer Section (Core Audience)
**Purpose:** Build farmer trust + show direct benefits

**Sections:**
*   **“Why Farmers Love RICE”** (3–4 testimonial cards)
*   **Crop success stories** (AI planner → yield → market access)
*   **Real-time mandi price API widget** (dynamic data)
*   **Weather forecast section** (based on region detection)
*   **“Join RICE” button** → WhatsApp signup

### 🧠 7. AI & Research Section
**Purpose:** Highlight tech depth for Google / VC credibility

**Details:**
*   **Model training on AgDex dataset**
*   **AI pipeline using Vertex AI / Gemini / Firebase Cloud**
*   **Crop data analytics dashboard** (live demo or mockup)
*   **Future AI goals** → predictive finance, drought mapping, credit scoring

### 📰 8. Blog / Insight Section
**Purpose:** Thought leadership + SEO

**Suggested Articles:**
*   “Why Bharat Needs Smart Crop Planning”
*   “AI in Agriculture: From Guesswork to Growth”
*   “How Rural Entrepreneurs Can Lead India’s Agri Revolution”

### 🧑‍💼 9. Mentorship & Ecosystem Page
**Purpose:** Build credibility

**Include:**
*   **Mentors:** Karthik Barma (Aura, Soul)
*   **Programs participated in** (Wadhwani, PW SOS, VLaunchpad)
*   **Logos of Google DevFest, PW, Wadhwani, VLaunchpad, etc.**

### 📞 10. Contact & Support Page
*   **Multi-language chatbot assistant** (AI + manual support option)
*   **Email form for partnerships, farmers, franchise:** [rice14062024@gmail.com](mailto:rice14062024@gmail.com)
*   **WhatsApp link for instant help:** +91 9030822369
*   **Office address / HQ info:** Amaravathi, AP, India

### 🔥 Additional Unique Features (Optional but Powerful)
1.  **Farmer Dashboard Demo:** Real-time view of crop planning and income tracking
2.  **Interactive Crop Forecast Map:** State-wise visualization of crop demand and prices
3.  **Live Commodity Price Ticker:** Integrate Agmarknet API or NCDEX feed
4.  **Rural Entrepreneurship Portal:** Info for youth to apply for franchise or startup collab
5.  **Data Transparency Page:** How farmer data is protected and anonymized

## API Key

*   **API Key:** `579b464db66ec23bdd000001fd5bbe1b867f45775f7e86e302c81190`
*   **Description:** Current Daily Price of Various Commodities from Various Markets (Mandi)

## Getting Started

To get started with development:

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    This will typically start the server on `http://localhost:9002` (as per `dev` script in `package.json`).

3.  **Open in Browser**:
    Navigate to `http://localhost:9002` (or the port shown in your terminal) to see the application.
    The main page can be found at `src/app/page.tsx`.

## Building for Production

To create an optimized production build:

```bash
npm run build
```
