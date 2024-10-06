"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom"; // Import Outlet

export default function Layout() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  const handleSidebarExpanded = (value: boolean) => {
    setSidebarExpanded(value);
  };

  return (
    <div className='flex h-screen'>
      <Sidebar sidebarExpanded={sidebarExpanded} />
      {/* Main content */}
      <div className='flex flex-1 flex-col overflow-hidden'>
        {/* Top navbar */}
        <Header handleSidebarExpanded={handleSidebarExpanded} sidebarExpanded={sidebarExpanded} />
        {/* Page content */}
        <main className='flex-1 overflow-y-auto p-4 bg-red-400'>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
