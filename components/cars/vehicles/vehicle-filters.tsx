'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';

interface VehicleFiltersProps {
  onFiltersChange: (filters: any) => void;
}

export function VehicleFilters({ onFiltersChange }: VehicleFiltersProps) {
  const [filters, setFilters] = useState({
    make: 'all',
    year: 'all',
    minPrice: '',
    maxPrice: '',
    bodyType: 'all',
    fuel: 'all'
  });

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      make: 'all',
      year: 'all',
      minPrice: '',
      maxPrice: '',
      bodyType: 'all',
      fuel: 'all'
    };
    setFilters(clearedFilters);
    onFiltersChange(clearedFilters);
  };

  const makes = ['all', 'Tesla', 'BMW', 'Mercedes', 'Toyota', 'Honda', 'Audi'];
  const years = ['all', '2024', '2023', '2022', '2021', '2020'];
  const bodyTypes = ['all', 'Sedan', 'SUV', 'Coupe', 'Hatchback', 'Truck'];
  const fuelTypes = ['all', 'Gasoline', 'Electric', 'Hybrid', 'Diesel'];

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Filter className="w-5 h-5" />
          <span>Filters</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">Make</label>
          <Select value={filters.make} onValueChange={(value) => handleFilterChange('make', value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {makes.map((make) => (
                <SelectItem key={make} value={make}>
                  {make === 'all' ? 'All Makes' : make}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Year</label>
          <Select value={filters.year} onValueChange={(value) => handleFilterChange('year', value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year}>
                  {year === 'all' ? 'All Years' : year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Body Type</label>
          <Select value={filters.bodyType} onValueChange={(value) => handleFilterChange('bodyType', value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {bodyTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type === 'all' ? 'All Types' : type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Fuel Type</label>
          <Select value={filters.fuel} onValueChange={(value) => handleFilterChange('fuel', value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {fuelTypes.map((fuel) => (
                <SelectItem key={fuel} value={fuel}>
                  {fuel === 'all' ? 'All Fuels' : fuel}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Price Range</label>
          <div className="grid grid-cols-2 gap-2">
            <Input
              placeholder="Min"
              value={filters.minPrice}
              onChange={(e) => handleFilterChange('minPrice', e.target.value)}
            />
            <Input
              placeholder="Max"
              value={filters.maxPrice}
              onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
            />
          </div>
        </div>

        <Button variant="outline" onClick={clearFilters} className="w-full">
          Clear Filters
        </Button>
      </CardContent>
    </Card>
  );
}