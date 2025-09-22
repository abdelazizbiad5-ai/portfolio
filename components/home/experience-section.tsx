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
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
            <p className="text-xl text-muted-foreground">
              My professional journey building innovative solutions
            </p>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 pb-12 border-l-2 border-gray-200 last:pb-0"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {exp.position}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Building2 className="w-4 h-4 mr-2" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="bg-blue-50 border-blue-200 text-blue-800"
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