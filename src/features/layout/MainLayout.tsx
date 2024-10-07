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
        <main className='flex-1 bg-[#f5f6fa] dark:bg-[#1b2431] overflow-y-auto'>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

//1b2431
