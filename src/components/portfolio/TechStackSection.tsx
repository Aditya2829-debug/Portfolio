import { Code } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export default function TechStackSection() {
  const languages = [
    { name: 'Java', level: 90 },
    { name: 'C', level: 70 },
    { name: 'Python', level: 65 },
    { name: 'JavaScript', level: 55 },
  ];

  const dsaSkills = [
    { name: 'Arrays & Strings', level: 85 },
    { name: 'HashMaps', level: 80 },
    { name: 'Binary Search', level: 75 },
    { name: 'Two Pointers', level: 75 },
  ];

  return (
    <section id="techstack" className="py-20 px-4">
      {/* Decorative shapes */}
      <div className="absolute top-40 left-10 w-64 h-64 rounded-full border border-border/30" />
      <div className="absolute bottom-40 right-10 w-48 h-96 border border-border/20" style={{ transform: 'rotate(20deg)' }} />

      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl xl:text-5xl font-bold gradient-text mb-4">
            Tech Stack
          </h2>
        </div>

        <div className="grid xl:grid-cols-2 gap-12">
          {/* Languages */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-bold text-foreground">Languages</h3>
            </div>

            {languages.map((skill) => (
              <div key={skill.name} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground font-semibold">{skill.level}%</span>
                </div>
                <div className="glass-strong rounded-full p-1 border border-primary/20">
                  <Progress value={skill.level} className="h-3" />
                </div>
              </div>
            ))}
          </div>

          {/* DSA */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-8 h-8 text-secondary" />
              <h3 className="text-3xl font-bold text-foreground">DSA</h3>
            </div>

            {dsaSkills.map((skill) => (
              <div key={skill.name} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground font-semibold">{skill.level}%</span>
                </div>
                <div className="glass-strong rounded-full p-1 border border-secondary/20">
                  <Progress value={skill.level} className="h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
