
📘 README.md (GITHUB STANDARD – PROFESSIONAL)

# HISBAH DIGITAL REPORTING SYSTEM

A full-stack web application for Hisbah operations,
designed for **real-world use**, with strong security,
role-based access, and scalable architecture.

---

## 🚀 Features

### 👥 User Roles
- **Citizen**
  - Register / Login
  - Submit reports (with media)
  - View own reports & status

- **Officer**
  - View all reports
  - Update report status (pending → in-progress → resolved)

- **Admin**
  - Manage users
  - Manage reports
  - Export reports (PDF / Excel)
  - Full system oversight

---

## 🧱 Tech Stack

### Frontend
- HTML5
- Tailwind CSS
- Vanilla JavaScript
- Mobile-first & human-centered UI

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcrypt Password Hashing
- Multer (File Uploads)
- Nodemailer (OTP / Email)
- Role-Based Access Control (RBAC)

---

## 🔐 Security Highlights

- Encrypted passwords (bcrypt)
- JWT with expiration
- Role-based authorization
- OTP password reset
- File type & size validation
- Environment variables (.env protected)

---

## 📂 Project Structure

hisbah-webapp/ │ ├── index.html ├── register.html ├── forgot-password.html │ ├── citizen/ │   ├── dashboard.html │   ├── new-report.html │   └── my-reports.html │ ├── officer/ │   └── dashboard.html │ ├── admin/ │   └── dashboard.html │ ├── assets/ │   ├── css/ │   ├── js/ │   └── images/ │ ├── backend/ │   ├── server.js │   ├── config/ │   ├── models/ │   ├── routes/ │   ├── controllers/ │   ├── middleware/ │   └── utils/ │ └── README.md

---

## ⚙️ Setup Guide

### 1️⃣ Backend Setup
```bash
cd backend
npm install
node server.js

Create .env file:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/hisbah
JWT_SECRET=your_secret_key
EMAIL=your_email@gmail.com
EMAIL_PASS=app_password


---

2️⃣ Frontend Setup

Open index.html with browser

Or use Live Server (recommended)



---

📡 API Overview

Method	Endpoint	Description

POST	/api/auth/register	Register user
POST	/api/auth/login	Login
POST	/api/auth/forgot-password	Send OTP
POST	/api/auth/reset-password	Reset password
POST	/api/reports	Create report
GET	/api/reports/mine	Citizen reports
GET	/api/reports	Officer/Admin
PUT	/api/reports/:id/status	Update status
GET	/api/users	Admin only



---

🌍 Deployment (Optional)

Backend: Render / Railway

Database: MongoDB Atlas

Frontend: Netlify / GitHub Pages



---

👨‍💻 Author

Abdullahi Umar Muazu
Hisbah Digital System Project
Nigeria 🇳🇬


---

📜 License

MIT License

---

## ✅ Yanzu project ɗinka:
- ✔ Secure `.gitignore`
- ✔ Professional `README.md`
- ✔ GitHub-ready
- ✔ Government-grade structure

### 🔥 Mataki na gaba (idan kana so):
- Deploy live (backend + frontend)
- Add refresh tokens
- Audit logs (Hisbah standard)
- CI/CD with GitHub Actions

Faɗa min **me kake so na gaba**, zan jagorance ka kamar **real senior developer** 💪
