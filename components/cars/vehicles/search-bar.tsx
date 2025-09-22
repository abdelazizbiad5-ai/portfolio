'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (term: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex space-x-4 bg-white p-4 rounded-lg shadow-sm border">
      <div className="flex-1">
        <Input
          placeholder="Search by make, model, or keyword..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          className="text-lg"
        />
      </div>
      <Button onClick={handleSearch} className="bg-blue-600 hover:bg-blue-700 px-8">
        <Search className="w-5 h-5 mr-2" />
        Search
      </Button>
    </div>
  );
}