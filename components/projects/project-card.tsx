'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  status: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Card 
      className="group h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 bg-white border-0 shadow-lg"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-white/90 text-gray-900 text-xs">
            {project.category}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge 
            className={
              project.status === 'Live Demo' 
                ? 'bg-green-600 text-white' 
                : project.status === 'In Development'
                ? 'bg-amber-600 text-white'
                : 'bg-blue-600 text-white'
            } + ' text-xs'
          >
            {project.status}
          </Badge>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-lg md:text-xl group-hover:text-blue-600 transition-colors">
          {project.title}
        </CardTitle>
        <CardDescription className="text-sm md:text-base text-gray-600 line-clamp-3">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline" className="text-xs text-gray-500">
                +{project.technologies.length - 4} more
              </Badge>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 pt-2">
            <Link href={project.liveUrl} className="flex-1">
              <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-xs md:text-sm">
                <ExternalLink className="w-4 h-4 mr-2" />
                {project.status === 'Live Demo' ? 'Live Demo' : 'View Project'}
              </Button>
            </Link>
            <Link href={project.githubUrl}>
              <Button size="sm" variant="outline" className="w-full sm:w-auto text-xs md:text-sm">
                <Github className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}