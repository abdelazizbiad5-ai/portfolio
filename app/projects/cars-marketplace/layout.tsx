'use client';

import { useAuth } from '@/contexts/auth-context';
import { CarsNavbar } from '@/components/cars/layout/cars-navbar';
import { CarsSidebar } from '@/components/cars/layout/cars-sidebar';
import { useState } from 'react';

export default function CarsMarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <CarsNavbar 
        user={user} 
        onMenuClick={() => setSidebarOpen(!sidebarOpen)} 
      />
      <div className="flex">
        <CarsSidebar 
          user={user} 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)} 
        />
        <main className="flex-1 lg:ml-64 p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}