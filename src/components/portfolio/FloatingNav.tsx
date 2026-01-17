import { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Home, BarChart3, FolderKanban, Award, User, Code, Mail } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export default function FloatingNav() {
  const { scrollY } = useScrollAnimation();
  const [activeSection, setActiveSection] = useState('hero');

  const navItems: NavItem[] = [
    { id: 'hero', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'stats', label: 'Stats', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'projects', label: 'Projects', icon: <FolderKanban className="w-4 h-4" /> },
    { id: 'achievements', label: 'Achievements', icon: <Award className="w-4 h-4" /> },
    { id: 'about', label: 'About', icon: <User className="w-4 h-4" /> },
    { id: 'techstack', label: 'Skills', icon: <Code className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      const currentSection = sections.find((section) => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Hide on very top of page
  if (scrollY < 100) return null;

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden xl:block">
      <div className="glass-bright rounded-full p-3 space-y-2 gradient-border-bright glow-primary">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`group relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
              activeSection === item.id
                ? 'bg-primary text-primary-foreground glow-primary scale-110'
                : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground hover:scale-105'
            }`}
            aria-label={item.label}
          >
            {item.icon}
            
            {/* Tooltip */}
            <span className="absolute right-full mr-3 px-3 py-1 glass-bright text-foreground text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-primary/30 font-semibold">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
