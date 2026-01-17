import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { ExternalLink, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  status?: string;
  link?: string;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0.3,
    freezeOnceVisible: true,
  });

  return (
    <div
      ref={ref}
      className={`flex-shrink-0 w-80 xl:w-96 glass-bright rounded-2xl p-6 gradient-border-bright hover:scale-105 hover:glow-secondary transition-all duration-300 ${
        hasIntersected ? 'animate-scale-in' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-xl glass-strong glow-primary">
          <Code2 className="w-6 h-6 text-primary" />
        </div>
        {project.status && (
          <Badge variant="secondary" className="glass-strong bg-accent/20 text-accent-foreground border-accent/30 font-semibold">
            {project.status}
          </Badge>
        )}
      </div>

      <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech) => (
          <Badge key={tech} variant="outline" className="glass-strong border-primary/30 text-foreground">
            {tech}
          </Badge>
        ))}
      </div>

      {project.link && (
        <Button
          variant="outline"
          size="sm"
          className="glass-strong hover:glass-bright hover:glow-primary w-full border-primary/30 text-primary font-semibold"
          onClick={() => window.open(project.link, '_blank')}
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          View Project
        </Button>
      )}
    </div>
  );
}

export default function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      title: 'Green AI Analyser',
      description: 'AI carbon footprint calculator for Net Zero. InnoTech Hackathon project that analyzes and reduces environmental impact.',
      techStack: ['Python', 'AI/ML', 'Data Analytics'],
    },
    {
      title: 'College Club Website',
      description: 'Tech club portal with comprehensive event management system for organizing and tracking college activities.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Bank Management System',
      description: 'Java desktop application with Swing/JavaFX GUI for complete banking operations and customer management.',
      techStack: ['Java', 'Swing', 'JavaFX', 'JDBC', 'MySQL'],
      status: 'In Progress',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl xl:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Scroll horizontally to explore my work
          </p>
        </div>

        {/* Horizontal Scrolling Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {projects.map((project, index) => (
            <div key={project.title} className="snap-center">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        {/* Scroll Hint */}
        <div className="text-center mt-6 text-sm text-muted-foreground">
          ← Swipe or scroll to see more →
        </div>
      </div>
    </section>
  );
}
