'use client';

import { useState, useMemo } from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ProjectCard } from '@/components/projects/project-card';
import { ProjectFilter } from '@/components/projects/project-filter';
import { projects } from '@/data/projects';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTechnology, setSelectedTechnology] = useState<string>('all');

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
      const techMatch = selectedTechnology === 'all' || project.technologies.includes(selectedTechnology);
      return categoryMatch && techMatch;
    });
  }, [selectedCategory, selectedTechnology]);

  const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))];
  const technologies = ['all', ...Array.from(new Set(projects.flatMap(p => p.technologies)))];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A curated collection of applications and solutions I've built, showcasing various technologies and approaches.
          </p>
        </div>

        <ProjectFilter
          categories={categories}
          technologies={technologies}
          selectedCategory={selectedCategory}
          selectedTechnology={selectedTechnology}
          onCategoryChange={setSelectedCategory}
          onTechnologyChange={setSelectedTechnology}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No projects found with the selected filters.
            </p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}