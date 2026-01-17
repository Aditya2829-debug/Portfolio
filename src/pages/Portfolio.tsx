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
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
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
