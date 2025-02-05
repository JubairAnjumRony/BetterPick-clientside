# Product Recommendation Site

## Purpose
The **Product Recommendation Site** is a user-centric platform where individuals can share queries about products, find alternative product recommendations, and contribute to community-driven discussions.

## Live URL:https://assignment-11-b34c0.web.app/
[**Visit the Live Website**](#)

## Key Features
- **Query Management**:
  - Users can add, update, and delete their own product-related queries.
  - View detailed information and recommendations for queries from other users.
- **Recommendation System**:
  - Add recommendations for specific products.
  - Delete personal recommendations.
- **Commenting System**:
  - Modify or delete comments on product recommendations.

## NPM Packages Used
The project leverages several npm packages to deliver a seamless and interactive experience:

| **Package Name**          | **Purpose**                                                  |
|----------------------------|-------------------------------------------------------------|
| `axios`                   | For HTTP requests to communicate with the backend.          |
| `swiper`                  | Adds responsive sliders and carousels for UI enhancement.   |
| `react-icons`             | Provides an extensive collection of icons.                  |
| `@emotion/react`          | CSS-in-JS styling for dynamic components.                   |
| `firebase`                | Manages user authentication and database interactions.      |
| `localforage`             | Enables offline data storage.                               |
| `match-sorter`            | Simplifies search and filtering functionality.              |
| `react` & `react-dom`     | Core libraries for building the UI.                         |
| `react-awesome-reveal`    | Adds smooth animations for UI elements.                     |
| `react-router-dom`        | Implements routing for seamless navigation.                 |
| `react-toastify`          | Provides customizable toast notifications.                  |
| `react-tooltip`           | Displays user-friendly tooltips.                            |
| `sort-by`                 | Simplifies array sorting operations.                        |
| `sweetalert2`             | Elegant alert pop-ups for user feedback.                   |

## 🛠 Installation & Setup  

### **Prerequisites**  
- Node.js (>= 18)  
- MongoDB Database  
- Firebase Authentication  
- Stripe Account  

### **Steps**  

#### 1️⃣ Clone the repository  
```sh
git clone https://github.com/your-repo/parcel-management-system.git
cd parcel-management-system
```

#### 2️⃣ Install dependencies  
```sh
npm install
```

#### 3️⃣ Set up environment variables (see `.env.example` below)  

#### 4️⃣ Start the development server  
```sh
npm run dev
```

---

## ⚙️ Configuration (`.env`)  
Create a `.env` file in the root directory and configure the following:

```env
# Firebase Authentication
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
FIREBASE_APP_ID=your_firebase_app_id

# MongoDB Configuration
MONGODB_URI=your_mongodb_connection_url


# Server Configuration
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

🚨 **Important:** Never expose your `.env` file in public repositories. Add it to `.gitignore` to keep it secure.

---

## 🚀 Future Improvements  

🔹 **Real-time Chat** – Enable chat between users and delivery personnel.  
🔹 **AI-Driven Route Optimization** – Optimize parcel delivery routes with AI.  
🔹 **Parcel Insurance** – Introduce insurance options for parcel security.  
🔹 **Advanced Tracking** – Improve live tracking accuracy and analytics.  

---

## 📜 Dependencies  
```json
"dependencies": {
  "@stripe/react-stripe-js": "^3.1.1",
  "@tanstack/react-query": "^5.64.1",
  "axios": "^1.7.9",
  "firebase": "^11.2.0",
  "localforage": "^1.10.0",
  "match-sorter": "^8.0.0",
  "moment": "^2.30.1",
  "react": "^18.3.1",
  "react-apexcharts": "^1.7.0",
  "react-confetti": "^6.2.2",
  "react-dom": "^18.3.1",
  "react-helmet-async": "^2.0.5",
  "react-hook-form": "^7.54.2",
  "react-icons": "^5.4.0",
  "react-moment": "^1.1.3",
  "react-router-dom": "^7.1.2",
  "react-toastify": "^11.0.3",
  "sort-by": "^0.0.2",
  "sweetalert2": "^11.15.10"
}
```

---
## Live URL:https://assignment-11-b34c0.web.app/
[**Visit the Live Website**](#)

## 🤝 Contributing  
Feel free to contribute by creating pull requests or reporting issues. Happy coding! 🚀  

---
🚀 **Enjoy seamless parcel booking and tracking with Parcel Management System!** 📦📍
