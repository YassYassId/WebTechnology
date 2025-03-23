import React from "react";

export default function AuthCard({ children, title }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md w-full max-w-md overflow-hidden">
        <div className="p-6">
          <div className="flex justify-center mb-6">
            <img
              src="/src/assets/ensetLogo.png"
              alt="ENSET Logo"
              className="h-16"
            />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </div>
  );
}
