'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Menu, Car, Bell, User } from 'lucide-react';
import { User as UserType } from '@/contexts/auth-context';

interface CarsNavbarProps {
  user: UserType | null;
  onMenuClick: () => void;
}

export function CarsNavbar({ user, onMenuClick }: CarsNavbarProps) {
  return (
    <nav className="bg-white border-b shadow-sm h-16 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" onClick={onMenuClick} className="lg:hidden">
          <Menu className="w-5 h-5" />
        </Button>
        <div className="flex items-center space-x-2">
          <Car className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">AutoMarket Pro</span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Bell className="w-5 h-5" />
        </Button>
        {user && (
          <div className="flex items-center space-x-3">
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              {user.role}
            </Badge>
            <div className="flex items-center space-x-2">
              {user.avatar ? (
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="w-8 h-8 rounded-full"
                />
              ) : (
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4" />
                </div>
              )}
              <span className="font-medium text-gray-700">{user.name}</span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}