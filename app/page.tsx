import { Navbar } from '@/components/layout/navbar';
import { HeroSection } from '@/components/home/hero-section';
import { AboutSection } from '@/components/home/about-section';
import { SkillsSection } from '@/components/home/skills-section';
import { ExperienceSection } from '@/components/home/experience-section';
import { ProjectsPreview } from '@/components/home/projects-preview';
import { ContactSection } from '@/components/home/contact-section';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsPreview />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}