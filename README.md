# Saraha API

> A robust, secure backend API for an anonymous messaging platform (Saraha clone).

## 🚀 Overview

The Saraha API is designed to handle user registration, authentication, and the core functionality of sending and receiving messages anonymously. It leverages modern web development practices to ensure data security, efficient file handling, and fast response times.

**Status:** 🚧 *Under Construction*

## 🛠️ Technology Stack

- **Runtime Environment:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB & Mongoose
- **Caching:** Redis
- **Authentication:** JWT (JSON Web Tokens)
- **Security & Cryptography:** bcrypt, Argon2
- **Data Validation:** Joi
- **File Uploads:** Multer & Cloudinary
- **Emails:** Nodemailer

## ✨ Features

- **User Authentication:** Secure registration and login flows using JWT with password hashing (Argon2 / bcrypt).
- **Anonymous Messaging:** Core logic to allow users to receive anonymous messages safely.
- **Profile Image Management:** Seamless profile picture upload and storage powered by Cloudinary.
- **Email Workflows:** Automated email sending for account verification and password resets via Nodemailer.
- **Performance Optimization:** Redis integration for fast data retrieval and session management.
- **Data Validation:** Strict payload validation using Joi to protect the database from malformed requests.
- **Error Handling:** Global error handling middleware for consistent API responses.

## 📂 Project Structure

```text
src/
├── config/         # Environment variables and configuration files
├── DB/             # MongoDB and Redis connection setups
├── middlewares/    # Custom Express middlewares (Global Error Handler, Authentication, etc.)
├── modules/        # Feature modules containing Routes and Controllers
│   ├── user/       # User module (Profile, Auth)
│   └── message/    # Message module (Send, Receive, Delete)
├── utils/          # Helper functions (Cryptography, Email configuration, etc.)
├── app.bootstrap.js # Application setup and routing entry point
└── main.js         # Server initialization
```

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB](https://www.mongodb.com/)
- [Redis](https://redis.io/)
- A [Cloudinary](https://cloudinary.com/) account (for image uploads)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd Saraha
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Configuration:**
   Create a `.env` file in the root directory and configure the following variables:
   ```env
   PORT=3000
   NODE_ENV=development

   # Database
   MONGO_URI=your_mongodb_connection_string
   REDIS_URL=your_redis_connection_string

   # Authentication
   JWT_SECRET=your_jwt_secret

   # Cloudinary Keys
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret

   # Email Setup
   EMAIL_USER=your_email@example.com
   EMAIL_PASS=your_email_password
   ```

4. **Start the Development Server:**
   ```bash
   npm run start:dev
   ```

## 📜 Available Scripts

- `npm run start:dev`: Starts the server in development mode using Nodemon.
- `npm run start:prod`: Starts the server in production mode.

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you'd like to improve the API or add new features.

## 📄 License

This project is licensed under the ISC License.
