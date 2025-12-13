# 🍭 Sweet Shop Management System

A full-stack Sweet Shop Management System built using the MERN stack, following **Test-Driven Development (TDD)** principles and clean coding practices.

---

## 📌 Project Overview

The Sweet Shop Management System allows users to register, log in, view available sweets, search and filter sweets, and purchase them while maintaining accurate inventory levels.  
Admin users can add, update, delete, and restock sweets.

The project demonstrates secure authentication, role-based authorization, RESTful API design, and frontend-backend integration.

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (JSON Web Tokens)
- bcryptjs
- Jest (Testing)

### Frontend
- React (Vite)
- React Router DOM
- Axios

---

## 🔐 Authentication & Authorization

- User registration and login using JWT
- Passwords hashed securely using bcrypt
- Protected API endpoints using authentication middleware
- Role-based access control:
  - **User**: View and purchase sweets
  - **Admin**: Add, update, delete, and restock sweets

---

## 📡 API Endpoints

### Authentication

| Method | Endpoint             | Description         |
|------|----------------------|---------------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login`    | Login user          |

### Sweets (Protected)

| Method | Endpoint             | Description                  |
|------|----------------------|------------------------------|
| POST | `/api/sweets`        | Add a new sweet (Admin only) |
| GET  | `/api/sweets`        | View all sweets              |
| GET  | `/api/sweets/search` | Search sweets                |
| PUT  | `/api/sweets/:id`    | Update sweet                 |
| DELETE | `/api/sweets/:id`  | Delete sweet (Admin only)    |

### Inventory

| Method | Endpoint                   | Description                |
|------|----------------------------|----------------------------|
| POST | `/api/sweets/:id/purchase` | Purchase sweet             |
| POST | `/api/sweets/:id/restock`  | Restock sweet (Admin only) |

---

## 🧪 Test-Driven Development (TDD)

The backend follows Test-Driven Development:

- Tests written before implementing features
- Clear **Red → Green → Refactor** workflow
- Tests cover authentication, authorization, CRUD operations, and inventory logic

Run tests:

```bash
cd backend
npm test
## 🤖 AI Usage Disclosure

AI tools were used responsibly during the development of this project as an assistance mechanism, not as a replacement for understanding or decision-making.

### 🔧 AI Tools Used
- ChatGPT (OpenAI)

### 🛠️ How AI Was Used
- Brainstorming REST API endpoint structures based on project requirements
- Generating initial boilerplate code for controllers, routes, and test files
- Assisting in writing unit and integration tests following Test-Driven Development (TDD)
- Debugging runtime errors, test failures, and configuration issues

### 🧠 Developer Responsibility
- All AI-generated suggestions were reviewed, understood, and modified manually
- Core business logic, validations, and architectural decisions were implemented independently
- Tests were written, executed, and validated to ensure correctness
- AI outputs were used as guidance, not copied blindly

### 📈 Impact on Development Workflow
- Reduced development time by accelerating boilerplate creation
- Helped identify edge cases during testing
- Improved overall code quality and consistency
- Allowed greater focus on problem-solving and system design

## ⚙️ Setup Instructions

### Backend Setup

```bash
cd backend
npm install
npm run dev


MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_secret_key
PORT=5000


### Frontend Setup

```bash
cd frontend
npm install
npm run dev

## 📥 Clone the Repository

Clone this repository to your local machine using:

```bash
git clone https://github.com/Kashni06/sweet-shop-management-system.git

