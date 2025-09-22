'use client';

import { useAuth } from '@/contexts/auth-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Home, Users, TrendingUp, DollarSign, ArrowRight, LogIn, Building } from 'lucide-react';
import Link from 'next/link';

export default function RealEstatePage() {
  const { user, signIn } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="w-8 h-8 text-emerald-600" />
            </div>
            <CardTitle className="text-2xl">Real Estate SaaS</CardTitle>
            <CardDescription>
              Please sign in to access the real estate management platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => signIn('demo-agent')} 
              className="w-full mb-3 bg-emerald-600 hover:bg-emerald-700"
              size="lg"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Demo as Agent
            </Button>
            <Button 
              onClick={() => signIn('demo-manager')} 
              variant="outline" 
              className="w-full mb-3"
              size="lg"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Demo as Manager
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
    { label: 'Active Properties', value: '1,247', icon: Home, trend: '+18%', color: 'emerald' },
    { label: 'Total Clients', value: '892', icon: Users, trend: '+12%', color: 'blue' },
    { label: 'Monthly Revenue', value: '$124K', icon: DollarSign, trend: '+25%', color: 'amber' },
    { label: 'Properties Sold', value: '89', icon: TrendingUp, trend: '+8%', color: 'purple' },
  ];

  const quickActions = [
    { title: 'Property Listings', href: '/projects/real-estate/properties', description: 'Manage properties', icon: Home },
    { title: 'Client Management', href: '/projects/real-estate/clients', description: 'Manage client relationships', icon: Users },
    { title: 'Analytics Dashboard', href: '/projects/real-estate/analytics', description: 'View performance metrics', icon: TrendingUp },
    { title: 'Lead Generation', href: '/projects/real-estate/leads', description: 'Track and convert leads', icon: DollarSign },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Building className="w-8 h-8 text-emerald-600" />
              <span className="text-xl font-bold text-gray-900">RealEstate Pro</span>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                {user.role}
              </Badge>
              <span className="text-gray-700">{user.name}</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">
                  Welcome back, {user.name}!
                </h1>
                <p className="text-emerald-100 text-lg mb-4">
                  Ready to close more deals today?
                </p>
                <div className="flex items-center space-x-4">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    {user.role}
                  </Badge>
                  <span className="text-emerald-100">•</span>
                  <span className="text-emerald-100">Multi-tenant SaaS Platform</span>
                </div>
              </div>
              <div className="hidden md:block">
                <Building className="w-24 h-24 text-emerald-200" />
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                      <p className="text-sm text-green-600 mt-1">{stat.trend} from last month</p>
                    </div>
                    <div className={`h-12 w-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                      <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
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
                  <Card className="h-full hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer group">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <action.icon className="w-8 h-8 text-emerald-600 group-hover:text-emerald-700 transition-colors" />
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-emerald-600 transition-colors" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-emerald-700 transition-colors">
                        {action.title}
                      </CardTitle>
                      <CardDescription>{action.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Activity & Notifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest property management activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-emerald-50 rounded-lg">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium">New property listing created</p>
                      <p className="text-sm text-muted-foreground">Luxury Condo Downtown - 2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium">New client inquiry</p>
                      <p className="text-sm text-muted-foreground">Sarah Johnson - Family Home - 4 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-amber-50 rounded-lg">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium">Showing scheduled</p>
                      <p className="text-sm text-muted-foreground">Modern Townhouse - Tomorrow 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Tasks</CardTitle>
                <CardDescription>Important tasks and deadlines</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <div>
                      <p className="font-medium text-red-900">Contract Review Due</p>
                      <p className="text-sm text-red-700">Maple Street Property</p>
                    </div>
                    <Badge variant="destructive">Today</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                    <div>
                      <p className="font-medium text-amber-900">Client Meeting</p>
                      <p className="text-sm text-amber-700">Property Walkthrough</p>
                    </div>
                    <Badge variant="secondary">Tomorrow</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <div>
                      <p className="font-medium text-blue-900">Market Analysis</p>
                      <p className="text-sm text-blue-700">Quarterly Report Prep</p>
                    </div>
                    <Badge variant="outline">This Week</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}