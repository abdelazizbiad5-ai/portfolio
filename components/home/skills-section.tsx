import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Angular'],
    color: 'bg-blue-50 border-blue-200 text-blue-800'
  },
  {
    title: 'Backend Development',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'],
    color: 'bg-emerald-50 border-emerald-200 text-emerald-800'
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Nginx'],
    color: 'bg-amber-50 border-amber-200 text-amber-800'
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'Figma', 'Jira', 'Slack', 'Notion', 'Linear'],
    color: 'bg-purple-50 border-purple-200 text-purple-800'
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Skills & Expertise</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern web applications and scalable systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-gray-900">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className={`${category.color} hover:scale-105 transition-transform cursor-default text-xs md:text-sm`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}