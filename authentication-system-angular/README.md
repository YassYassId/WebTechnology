# Angular Authentication Project

## Overview

This project is built using **Angular** and **TailwindCSS**, implementing authentication with a **JSON Server** (`db.json`) as a mock backend. The authentication process is managed using **Angular Services** and **localStorage**.

## Features

- **User Authentication** (Sign In & Sign Up)
- **Route Guards** for protected routes
- **Logout Functionality**
- **Angular Services** for managing authentication state
- **LocalStorage** to persist authentication
- **JSON Server** (`db.json`) as a mock backend
- **Styled with TailwindCSS**

## Technologies Used

- **Angular** (Frontend Framework)
- **Angular Router** (Navigation & Route Protection)
- **TailwindCSS** (Styling)
- **JSON Server** (Mock Backend)
- **Angular Services** (State Management)
- **LocalStorage** (User Session Persistence)
- **RxJS** (Reactive Programming)

## Project Structure

```
/src
 ├── app/
 │   ├── components/     # Shared UI Components
 │   │   ├── auth/       # Authentication Components
 │   │   │   ├── signin/ # SignIn Component
 │   │   │   ├── signup/ # SignUp Component
 │   │   ├── dashboard/  # Dashboard Components
 │   │   ├── sidebar/    # Sidebar Component
 │   ├── guards/         # Route Guards (AuthGuard)
 │   ├── models/         # TypeScript interfaces
 │   ├── services/       # Services (AuthService, ApiService)
 │   ├── assets/         # Static assets
 │   ├── app.component.ts        # Root component
 │   ├── app.component.html      # Root component template
 │   ├── app.component.css       # Root component styles
 │   ├── app.component.spec.ts   # Root component tests
 │   ├── app.config.ts           # App configuration
 │   ├── app.config.server.ts    # Server-side configuration
 │   ├── app.routes.ts           # Client-side routes
 │   ├── app.routes.server.ts    # Server-side routes
 ├── db.json             # JSON Server database
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

4. **Start the Angular App**
   ```sh
   ng serve
   ```

## Usage

- Open `http://localhost:4200/` (default Angular port)
- **Sign Up** for an account (stored in `db.json`)
- **Sign In** using the created credentials
- Access the **Dashboard** (protected route)
- Use **Logout** to end the session

## Authentication Flow

1. **User Sign In / Sign Up** → Credentials stored in `db.json`
2. **AuthService** stores the user session in **localStorage**
3. **Route Guards** restrict access to authenticated users
4. **Logout** clears the session and redirects to Sign In

## Angular-Specific Features

- **Route Guards** (`CanActivate`) to protect routes
- **HTTP Interceptors** for handling API requests and tokens
- **RxJS Observables** for reactive state management
- **Angular Forms** (Reactive approach) for form handling

## Author

- **Yassine IDRISSI**
