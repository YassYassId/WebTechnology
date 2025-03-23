# React Authentication Project

## Overview

This project is built using **React.js** and **TailwindCSS**, implementing authentication with a **JSON Server** (`db.json`) as a mock backend. The authentication process is managed using **React Context** and **localStorage**.

## Features

- **User Authentication** (Sign In & Sign Up)
- **Protected Routes** for authenticated users
- **Logout Functionality**
- **React Context API** for managing authentication state
- **LocalStorage** to persist authentication
- **JSON Server** (`db.json`) as a mock backend
- **Styled with TailwindCSS**

## Technologies Used

- **React.js** (Frontend)
- **React Router** (Navigation & Route Protection)
- **TailwindCSS** (Styling)
- **JSON Server** (Mock Backend)
- **Context API** (State Management)
- **LocalStorage** (User Session Persistence)

## Project Structure

```
/src
 ├── assets/          # Static assets
 ├── components/      # UI Components
 │   ├── auth/        # Authentication Components (SignIn, SignUp)
 │   ├── dashboard/   # Dashboard Components (Sidebar, Product, Home)
 ├── context/         # AuthContext for state management
 ├── hooks/           # Custom hooks (useAuth)
 ├── pages/           # Page components (Dashboard, SignIn, SignUp)
 ├── App.jsx          # Main Application component
 ├── main.jsx         # Entry point
 ├── db.json          # JSON Server database
 ├── index.html       # Root HTML file
```

## Installation & Setup

1. **Clone the Repository**

   ```sh
   git clone <repo-url>
   cd <project-folder>
   ```

2. **Install Dependencies**

   ```sh
   npm install
   ```

3. **Start the JSON Server** (Mock API)

   ```sh
   npx json-server --watch db.json --port 3001
   ```

4. **Start the React App**
   ```sh
   npm run dev
   ```

## Usage

- Open `http://localhost:5173/` (default Vite port)
- **Sign Up** for an account (stored in `db.json`)
- **Sign In** using the created credentials
- Access the **Dashboard** (protected route)
- Use **Logout** to end the session

## Authentication Flow

1. **User Sign In / Sign Up** → Credentials stored in `db.json`
2. **AuthContext** stores the user session in **localStorage**
3. **Protected Routes** restrict access to authenticated users
4. **Logout** clears the session and redirects to Sign In

## Author

- **Yassine IDRISSI**
