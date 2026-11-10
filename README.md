# Prodexa 📦

Prodexa is a full-stack product management application that allows users to manage their product inventory with an intuitive interface. It supports complete CRUD operations, allowing users to create, view, update, and delete products.

## 🚀 Features

- **Product Management:** Create, view, update, and delete products.
- **Product Listing:** Display products in a responsive card-based layout.
- **Theme Customization:** Choose from multiple UI themes.
- **Database Integration:** Store product information using PostgreSQL.
- **API Integration:** Connect frontend and backend using REST APIs.
- **Rate Limiting:** Protect API endpoints using Arcjet.
- **Security:** Includes bot detection and security protection.
- **Responsive UI:** Built with Tailwind CSS and DaisyUI.

## 🛠️ Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS
- DaisyUI
- Zustand
- React Router
- Axios
- Lucide React
- React Hot Toast

### Backend
- Node.js
- Express.js
- PostgreSQL
- Neon Serverless
- Arcjet
- Helmet
- Morgan
- CORS

## 📁 Project Structure

```text
Prodexa/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── lib/
│   ├── routes/
│   ├── seeds/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── constants/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   └── package.json
│
└── README.md
````

## ⚙️ Installation & Setup

### 1. Clone the Repository

bash

```bash
git clone <your-repository-url>
cd Prodexa
```

### 2. Backend Setup

bash

```bash
cd backend
npm install
```

Create a `.env` file inside the backend directory:

env

```env
PORT=3000

PGHOST=your_neon_host
PGDATABASE=your_database_name
PGUSER=your_database_user
PGPASSWORD=your_database_password

ARCJET_KEY=your_arcjet_key
```

Start the backend server:

bash

```bash
npm run dev
```

Backend URL: `http://localhost:3000`

### 3. Frontend Setup

Open a new terminal:

bash

```bash
cd frontend
npm install
npm run dev
```

Frontend URL: `http://localhost:5173`

## 🔗 API Endpoints

Base URL: `/api/products`

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/` | Get all products |
| GET | `/:id` | Get a single product |
| POST | `/` | Create a new product |
| PUT | `/:id` | Update a product |
| DELETE | `/:id` | Delete a product |

## 🗄️ Database

Prodexa uses Neon Serverless PostgreSQL to store product information.

| Column | Description |
| --- | --- |
| id | Unique product ID |
| name | Product name |
| image | Product image URL |
| price | Product price |
| created\_at | Product creation timestamp |

## 🔐 Security

- Helmet for HTTP security headers.
- Arcjet Shield for protection against common attacks.
- Arcjet Bot Detection to identify unwanted bot traffic.
- Token Bucket rate limiting to control API requests.
- CORS for cross-origin resource sharing.


⭐ If you find this project useful, consider giving it a star\!
