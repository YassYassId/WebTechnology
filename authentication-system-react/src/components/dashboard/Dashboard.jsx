import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardHome from "./DashboardHome";
import Product from "./Product";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
