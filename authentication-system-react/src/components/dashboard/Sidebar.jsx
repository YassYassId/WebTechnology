import React from "react";
import useAuth from "../../hooks/useAuth";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const { logout } = useAuth();
  const navLinks = [
    { name: "Dashboard", path: "/dashboard", icon: "home" },
    { name: "Products", path: "/dashboard/product", icon: "products" },
    { name: "Upload Files", path: "/dashboard/upload", icon: "upload" },
  ];

  // Simple icon renderer (you might want to use a proper icon library)
  const renderIcon = (iconName) => {
    switch (iconName) {
      case "home":
        return (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            ></path>
          </svg>
        );
      case "products":
        return (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 11h14l1 9H4l1-9z"
            ></path>
          </svg>
        );

      case "upload":
        return (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M16 7l-4-4m0 0L8 7m4-4v12"
            ></path>
          </svg>
        );
      default:
        return null;
    }
  };
  return (
    <div className="w-64 bg-indigo-800 text-white flex flex-col">
      <div className="p-4 border-b border-indigo-700">
        <div className="flex items-center">
          <img
            src="/src/assets/ensetLogo.png"
            alt="Logo"
            className="h-8 w-auto"
          />
          <span className="ml-2 text-lg font-bold">Authentication System</span>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto">
        <ul className="py-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center px-6 py-3 hover:bg-indigo-700 ${
                    isActive ? "bg-indigo-700" : ""
                  }`
                }
                end={link.path === "/dashboard"}
              >
                <span className="mr-3">{renderIcon(link.icon)}</span>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-indigo-700">
        <button
          onClick={logout}
          className="flex items-center w-full px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          <svg
            className="w-5 h-5 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            ></path>
          </svg>
          Sign Out
        </button>
      </div>
    </div>
  );
}
