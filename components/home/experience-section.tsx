import { Badge } from '@/components/ui/badge';
import { Building2, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'TechCorp Solutions',
    position: 'Senior Full-Stack Engineer',
    period: '2022 - Present',
    description: 'Lead development of enterprise SaaS applications serving 100K+ users. Architected microservices using Node.js and implemented CI/CD pipelines.',
    technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
    achievements: [
      'Reduced application load time by 40%',
      'Led team of 5 developers',
      'Implemented real-time features using WebSockets'
    ]
  },
  {
    company: 'StartupXYZ',
    position: 'Full-Stack Developer',
    period: '2020 - 2022',
    description: 'Built MVP from ground up for fintech startup. Developed both frontend and backend systems, implemented payment processing and user authentication.',
    technologies: ['Vue.js', 'Python', 'MongoDB', 'Stripe API'],
    achievements: [
      'Delivered MVP in 6 months',
      'Achieved 99.9% uptime',
      'Processed $2M+ in transactions'
    ]
  },
  {
    company: 'Digital Agency Pro',
    position: 'Frontend Developer',
    period: '2019 - 2020',
    description: 'Developed responsive websites and web applications for various clients. Collaborated with design team to create pixel-perfect implementations.',
    technologies: ['React', 'JavaScript', 'SASS', 'WordPress'],
    achievements: [
      'Delivered 25+ client projects',
      'Improved client satisfaction by 30%',
      'Mentored 3 junior developers'
    ]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Experience</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              My professional journey building innovative solutions
            </p>
          </div>

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-6 md:pl-8 pb-8 md:pb-12 border-l-2 border-gray-200 last:pb-0"
              >
                <div className="absolute -left-2 md:-left-3 top-0 w-4 h-4 md:w-6 md:h-6 bg-blue-600 rounded-full border-2 md:border-4 border-white shadow"></div>
                
                <div className="bg-gray-50 rounded-2xl p-4 md:p-8 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                        {exp.position}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-2 lg:mb-0">
                        <Building2 className="w-4 h-4 mr-2" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm md:text-base">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm md:text-base font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm md:text-base font-semibold text-gray-900 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="bg-blue-50 border-blue-200 text-blue-800 text-xs md:text-sm"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}