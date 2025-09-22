import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ExternalLink, Github, Car, Building } from 'lucide-react';

const featuredProjects = [
  {
    title: 'Cars Marketplace',
    description: 'Multi-role automotive marketplace with vendor dashboards, buyer interfaces, and admin management.',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Authentication'],
    liveUrl: '/projects/cars-marketplace',
    githubUrl: '#',
    icon: Car,
    featured: true
  },
  {
    title: 'Real Estate SaaS',
    description: 'Multi-tenant property management platform with CRM functionality and analytics dashboard.',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Multi-tenant'],
    liveUrl: '/projects/real-estate',
    githubUrl: '#',
    icon: Building,
    featured: true
  }
];

export function ProjectsPreview() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Featured Projects</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore my latest work showcasing full-stack development and modern web technologies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.title}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 bg-white border-0 shadow-lg"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="p-1.5 md:p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                      <project.icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                    </div>
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-4 right-4 bg-blue-600 text-white text-xs">
                      Featured
                    </Badge>
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="text-lg md:text-xl group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm md:text-base text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                      <Link href={project.liveUrl}>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </Link>
                      <Link href={project.githubUrl}>
                        <Button size="sm" variant="outline" className="w-full sm:w-auto">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/projects">
              <Button size="lg" variant="outline" className="group w-full sm:w-auto">
                View All Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}