'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ProjectFilterProps {
  categories: string[];
  technologies: string[];
  selectedCategory: string;
  selectedTechnology: string;
  onCategoryChange: (category: string) => void;
  onTechnologyChange: (technology: string) => void;
}

export function ProjectFilter({
  categories,
  technologies,
  selectedCategory,
  selectedTechnology,
  onCategoryChange,
  onTechnologyChange,
}: ProjectFilterProps) {
  return (
    <Card className="mb-6 md:mb-8">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">Filter Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs md:text-sm font-medium mb-2 block">Category</label>
            <Select value={selectedCategory} onValueChange={onCategoryChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-xs md:text-sm font-medium mb-2 block">Technology</label>
            <Select value={selectedTechnology} onValueChange={onTechnologyChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select technology" />
              </SelectTrigger>
              <SelectContent>
                {technologies.map((tech) => (
                  <SelectItem key={tech} value={tech}>
                    {tech === 'all' ? 'All Technologies' : tech}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}