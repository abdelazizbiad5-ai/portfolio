'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  Car, 
  BarChart3, 
  Users, 
  Settings, 
  Home, 
  Plus,
  Search,
  Heart,
  MessageSquare,
  X
} from 'lucide-react';
import { User } from '@/contexts/auth-context';

interface CarsSidebarProps {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
}

const navigationItems = {
  vendor: [
    { name: 'Dashboard', href: '/projects/cars-marketplace', icon: Home },
    { name: 'My Listings', href: '/projects/cars-marketplace/vehicles', icon: Car },
    { name: 'Add Vehicle', href: '/projects/cars-marketplace/vehicles/add', icon: Plus },
    { name: 'Analytics', href: '/projects/cars-marketplace/analytics', icon: BarChart3 },
    { name: 'Messages', href: '/projects/cars-marketplace/messages', icon: MessageSquare },
    { name: 'Settings', href: '/projects/cars-marketplace/settings', icon: Settings },
  ],
  buyer: [
    { name: 'Dashboard', href: '/projects/cars-marketplace', icon: Home },
    { name: 'Browse Cars', href: '/projects/cars-marketplace/vehicles', icon: Search },
    { name: 'Saved Cars', href: '/projects/cars-marketplace/saved', icon: Heart },
    { name: 'Messages', href: '/projects/cars-marketplace/messages', icon: MessageSquare },
    { name: 'Settings', href: '/projects/cars-marketplace/settings', icon: Settings },
  ],
  admin: [
    { name: 'Dashboard', href: '/projects/cars-marketplace', icon: Home },
    { name: 'All Vehicles', href: '/projects/cars-marketplace/vehicles', icon: Car },
    { name: 'Users', href: '/projects/cars-marketplace/users', icon: Users },
    { name: 'Analytics', href: '/projects/cars-marketplace/analytics', icon: BarChart3 },
    { name: 'Settings', href: '/projects/cars-marketplace/settings', icon: Settings },
  ],
};

export function CarsSidebar({ user, isOpen, onClose }: CarsSidebarProps) {
  const pathname = usePathname();
  const items = user ? navigationItems[user.role as keyof typeof navigationItems] || [] : [];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          'fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r shadow-lg transform transition-transform duration-300 ease-in-out z-50',
          'lg:translate-x-0 lg:static lg:z-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8 lg:hidden">
            <span className="text-lg font-semibold">Navigation</span>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          <nav className="space-y-2">
            {items.map((item) => (
              <Link key={item.name} href={item.href}>
                <div
                  className={cn(
                    'flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors',
                    pathname === item.href
                      ? 'bg-blue-50 text-blue-700 font-medium'
                      : 'text-gray-700 hover:bg-gray-100'
                  )}
                  onClick={() => onClose()}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}