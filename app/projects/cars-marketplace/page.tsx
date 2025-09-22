'use client';

import { useAuth } from '@/contexts/auth-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Car, Users, TrendingUp, Star, ArrowRight, LogIn } from 'lucide-react';
import Link from 'next/link';

export default function CarsMarketplacePage() {
  const { user, signIn } = useAuth();

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-[80vh]">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Car className="w-8 h-8 text-blue-600" />
            </div>
            <CardTitle className="text-2xl">Cars Marketplace</CardTitle>
            <CardDescription>
              Please sign in to access the cars marketplace application
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => signIn('demo-vendor')} 
              className="w-full mb-3"
              size="lg"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Demo as Vendor
            </Button>
            <Button 
              onClick={() => signIn('demo-buyer')} 
              variant="outline" 
              className="w-full mb-3"
              size="lg"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Demo as Buyer
            </Button>
            <Button 
              onClick={() => signIn('demo-admin')} 
              variant="secondary" 
              className="w-full"
              size="lg"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Demo as Admin
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const stats = [
    { label: 'Total Listings', value: '2,847', icon: Car, trend: '+12%' },
    { label: 'Active Users', value: '1,234', icon: Users, trend: '+8%' },
    { label: 'This Month Sales', value: '$847K', icon: TrendingUp, trend: '+15%' },
    { label: 'Average Rating', value: '4.8', icon: Star, trend: '+0.3' },
  ];

  const quickActions = [
    { title: 'Browse Vehicles', href: '/projects/cars-marketplace/vehicles', description: 'Explore our inventory' },
    { title: 'My Dashboard', href: '/projects/cars-marketplace/dashboard', description: 'View your account' },
    { title: 'Add Listing', href: '/projects/cars-marketplace/vehicles/add', description: 'List a new vehicle' },
    { title: 'Analytics', href: '/projects/cars-marketplace/analytics', description: 'View performance' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Welcome back, {user.name}!
            </h1>
            <p className="text-blue-100 text-lg">
              Role: <Badge variant="secondary" className="ml-2">{user.role}</Badge>
            </p>
            <p className="text-blue-100 mt-2">
              Manage your automotive marketplace experience from this dashboard.
            </p>
          </div>
          <div className="hidden md:block">
            <Car className="w-24 h-24 text-blue-200" />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-sm text-green-600 mt-1">{stat.trend} from last month</p>
                </div>
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <Link key={index} href={action.href}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg flex items-center justify-between">
                    {action.title}
                    <ArrowRight className="w-4 h-4" />
                  </CardTitle>
                  <CardDescription>{action.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest marketplace activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="font-medium">New vehicle listing created</p>
                <p className="text-sm text-muted-foreground">2024 Toyota Camry - 2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="font-medium">Inquiry received</p>
                <p className="text-sm text-muted-foreground">BMW X5 2023 - 4 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <div className="flex-1">
                <p className="font-medium">Profile updated</p>
                <p className="text-sm text-muted-foreground">Contact information - Yesterday</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}