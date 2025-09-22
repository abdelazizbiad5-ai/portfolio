'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, MessageSquare, Eye, MapPin, Calendar, Fuel } from 'lucide-react';

interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  transmission: string;
  bodyType: string;
  color: string;
  image: string;
  features: string[];
  description: string;
  dealer: string;
  location: string;
  status: string;
}

interface VehicleCardProps {
  vehicle: Vehicle;
  index: number;
}

export function VehicleCard({ vehicle, index }: VehicleCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat('en-US').format(mileage);
  };

  return (
    <Card 
      className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={vehicle.image}
          alt={`${vehicle.make} ${vehicle.model}`}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge 
            className={
              vehicle.status === 'Available' 
                ? 'bg-green-600 text-white' 
                : 'bg-red-600 text-white'
            }
          >
            {vehicle.status}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Button size="icon" variant="secondary" className="rounded-full bg-white/90 hover:bg-white">
            <Heart className="w-4 h-4" />
          </Button>
        </div>
        <div className="absolute bottom-4 left-4">
          <div className="text-white font-bold text-2xl drop-shadow-lg">
            {formatPrice(vehicle.price)}
          </div>
        </div>
      </div>

      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              {vehicle.year} {vehicle.make} {vehicle.model}
            </h3>
            <p className="text-gray-600">{vehicle.color} • {vehicle.bodyType}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {/* Key Details */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span>{formatMileage(vehicle.mileage)} miles</span>
            </div>
            <div className="flex items-center space-x-2">
              <Fuel className="w-4 h-4 text-gray-400" />
              <span>{vehicle.fuel}</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>{vehicle.location}</span>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-2">
            {vehicle.features.slice(0, 2).map((feature) => (
              <Badge key={feature} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
            {vehicle.features.length > 2 && (
              <Badge variant="outline" className="text-xs text-gray-500">
                +{vehicle.features.length - 2} more
              </Badge>
            )}
          </div>

          {/* Actions */}
          <div className="flex space-x-2 pt-4">
            <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
              <Eye className="w-4 h-4 mr-2" />
              View Details
            </Button>
            <Button variant="outline" size="icon">
              <MessageSquare className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}