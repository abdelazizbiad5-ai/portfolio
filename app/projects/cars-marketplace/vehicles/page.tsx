'use client';

import { useState } from 'react';
import { VehicleCard } from '@/components/cars/vehicles/vehicle-card';
import { VehicleFilters } from '@/components/cars/vehicles/vehicle-filters';
import { SearchBar } from '@/components/cars/vehicles/search-bar';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { vehicles } from '@/data/cars-data';

export default function VehiclesPage() {
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);
  const [searchTerm, setSearchTerm] = useState('');

  const handleFiltersChange = (filters: any) => {
    let filtered = vehicles;

    if (searchTerm) {
      filtered = filtered.filter(vehicle =>
        vehicle.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.model.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filters.make !== 'all') {
      filtered = filtered.filter(vehicle => vehicle.make === filters.make);
    }
    
    if (filters.year !== 'all') {
      filtered = filtered.filter(vehicle => vehicle.year.toString() === filters.year);
    }
    
    if (filters.minPrice) {
      filtered = filtered.filter(vehicle => vehicle.price >= parseInt(filters.minPrice));
    }
    
    if (filters.maxPrice) {
      filtered = filtered.filter(vehicle => vehicle.price <= parseInt(filters.maxPrice));
    }

    setFilteredVehicles(filtered);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    let filtered = vehicles;

    if (term) {
      filtered = filtered.filter(vehicle =>
        vehicle.make.toLowerCase().includes(term.toLowerCase()) ||
        vehicle.model.toLowerCase().includes(term.toLowerCase())
      );
    }

    setFilteredVehicles(filtered);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Vehicle Inventory</h1>
          <p className="text-muted-foreground">Browse and manage vehicle listings</p>
        </div>
        <Link href="/projects/cars-marketplace/vehicles/add">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Vehicle
          </Button>
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <VehicleFilters onFiltersChange={handleFiltersChange} />
        </div>
        
        <div className="lg:w-3/4 space-y-6">
          <SearchBar onSearch={handleSearch} />
          
          <div className="flex justify-between items-center">
            <p className="text-muted-foreground">
              Showing {filteredVehicles.length} of {vehicles.length} vehicles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredVehicles.map((vehicle, index) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
            ))}
          </div>

          {filteredVehicles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No vehicles found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}