export default function ProjectsSection() {
  const projects = [
    {
      title: 'Green AI Analyser',
      description: 'AI carbon footprint calculator for Net Zero. InnoTech Hackathon project.',
      techStack: ['Python', 'AI/ML', 'Data Analytics'],
    },
    {
      title: 'College Club Website',
      description: 'Tech club portal with event management and member registration.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Bank Management System',
      description: 'Java desktop app with Swing/JavaFX GUI for banking operations.',
      techStack: ['Java', 'Swing', 'JavaFX', 'JDBC', 'MySQL'],
      status: 'In Progress',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-20 w-48 h-48 rounded-full border border-border/30" />
      <div className="absolute bottom-20 right-20 w-96 h-32 border border-border/20" style={{ transform: 'rotate(-10deg)' }} />

      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl xl:text-5xl font-bold gradient-text mb-4">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass-bright rounded-2xl p-8 gradient-border-bright hover:glow-secondary transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full glass-strong text-sm text-foreground font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.status && (
                <div className="mt-4 inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-semibold">
                  {project.status}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
