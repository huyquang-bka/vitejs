import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar';
import { Drawer } from './Drawer';

export function DashboardLayout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <AppBar onMenuClick={() => setIsDrawerOpen(true)} />
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      
      <main className="lg:ml-64 min-h-[calc(100vh-4rem)]">
        <div className="container mx-auto px-4 py-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}