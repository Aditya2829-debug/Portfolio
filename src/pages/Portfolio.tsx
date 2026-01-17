import HeroSection from '@/components/portfolio/HeroSection';
import StatsSection from '@/components/portfolio/StatsSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import AchievementsSection from '@/components/portfolio/AchievementsSection';
import AboutSection from '@/components/portfolio/AboutSection';
import TechStackSection from '@/components/portfolio/TechStackSection';
import ContactSection from '@/components/portfolio/ContactSection';
import FloatingNav from '@/components/portfolio/FloatingNav';

export default function Portfolio() {
  return (
    <div className="relative min-h-screen">
      {/* Enhanced animated background particles with brighter colors */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-[400px] h-[400px] bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <StatsSection />
        <ProjectsSection />
        <AchievementsSection />
        <AboutSection />
        <TechStackSection />
        <ContactSection />
      </main>

      {/* Floating navigation */}
      <FloatingNav />
    </div>
  );
}
