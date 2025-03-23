import React from "react";
import useAuth from "../../hooks/useAuth";

export default function DashboardHome() {
  const { user } = useAuth();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Welcome back, {user?.name}!</h2>
      </div>
    </div>
  );
}
