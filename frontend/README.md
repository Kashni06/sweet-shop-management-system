# 🍭 Sweet Shop Management System

A full-stack Sweet Shop Management System built using modern web technologies and Test-Driven Development (TDD) principles.  
This project demonstrates secure authentication, inventory management, and clean RESTful API design.

---

## 📌 Project Overview

The Sweet Shop Management System allows users to register, log in, view available sweets, search and filter sweets, and purchase them while maintaining accurate inventory levels.  
Admin users can add, update, delete, and restock sweets.

The application follows best practices in backend development, authentication, authorization, and frontend integration.

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
- Passwords are securely hashed using bcrypt
- Protected API endpoints using authentication middleware
- Role-based access control:
  - **User**: View and purchase sweets
  - **Admin**: Add, update, delete, and restock sweets

---

## 📡 API Endpoints

### Authentication

| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login`    | Login user          |

### Sweets (Protected)

| Method | Endpoint             | Description                  |
| ------ | -------------------- | ---------------------------- |
| POST   | `/api/sweets`        | Add a new sweet (Admin only) |
| GET    | `/api/sweets`        | View all sweets              |
| GET    | `/api/sweets/search` | Search sweets                |
| PUT    | `/api/sweets/:id`    | Update sweet                 |
| DELETE | `/api/sweets/:id`    | Delete sweet (Admin only)    |

### Inventory

| Method | Endpoint                   | Description                |
| ------ | -------------------------- | -------------------------- |
| POST   | `/api/sweets/:id/purchase` | Purchase sweet             |
| POST   | `/api/sweets/:id/restock`  | Restock sweet (Admin only) |

---

## 🧪 Test-Driven Development (TDD)

The backend follows Test-Driven Development:

- Tests written before implementing features
- Clear Red → Green → Refactor approach
- Tests cover authentication, authorization, CRUD operations, and inventory logic

Run tests:

```bash
npm test
```

---

## 🧹 Clean Coding Practices

- Modular folder structure for controllers, routes, models, and middleware
- Clear separation of concerns (MVC-style architecture)
- Meaningful variable and function naming
- Reusable middleware for authentication and authorization
- Proper error handling with HTTP status codes

---

## 🔐 Security Measures

- Password hashing using bcrypt
- JWT-based authentication
- Protected API routes using middleware
- Role-based access control for admin-only operations
- Sensitive credentials stored securely using environment variables

---

## 🧩 Folder Structure (Backend)

```text
backend/
│
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── tests/
│   ├── app.js
│   ├── server.js
│
├── .env
├── package.json


## 🤖 My AI Usage

AI tools were used responsibly during the development of this project as an assistance mechanism, not as a replacement for understanding or decision-making.

### 🔧 AI Tools Used
- ChatGPT (OpenAI)

### 🛠️ How AI Was Used
- To brainstorm REST API endpoint structures based on the assignment requirements
- To generate initial boilerplate code for controllers, routes, and test files
- To assist in writing unit and integration tests following a Test-Driven Development (TDD) approach
- To debug runtime errors, test failures, and configuration issues

### 🧠 How I Worked With AI
- All AI-generated code was carefully reviewed, understood, and modified manually
- Business logic, validations, and architectural decisions were implemented and verified by me
- Tests were written and validated to ensure correctness
- AI suggestions were used as guidance, not copied blindly

### 📈 Impact on My Workflow
- Reduced development time by speeding up boilerplate creation
- Helped identify edge cases during testing
- Improved overall code quality and consistency
- Allowed me to focus more on problem-solving and system design
```
