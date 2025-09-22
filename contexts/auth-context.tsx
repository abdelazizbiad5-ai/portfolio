'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  signIn: (role: string) => void;
  signOut: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored auth state
    const storedUser = localStorage.getItem('auth-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const signIn = (demoRole: string) => {
    const demoUsers = {
      'demo-vendor': {
        id: '1',
        name: 'John Dealer',
        email: 'john@dealership.com',
        role: 'vendor',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      },
      'demo-buyer': {
        id: '2',
        name: 'Sarah Wilson',
        email: 'sarah@email.com',
        role: 'buyer',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      },
      'demo-admin': {
        id: '3',
        name: 'Admin User',
        email: 'admin@platform.com',
        role: 'admin',
        avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
      },
      'demo-agent': {
        id: '4',
        name: 'Mike Rodriguez',
        email: 'mike@realestate.com',
        role: 'agent',
        avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
      },
      'demo-manager': {
        id: '5',
        name: 'Lisa Chen',
        email: 'lisa@realestate.com',
        role: 'manager',
        avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      },
    };

    const selectedUser = demoUsers[demoRole as keyof typeof demoUsers];
    if (selectedUser) {
      setUser(selectedUser);
      localStorage.setItem('auth-user', JSON.stringify(selectedUser));
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('auth-user');
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};