import { useEffect, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Progress } from '@/components/ui/progress';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillBarProps {
  skill: Skill;
  index: number;
}

function SkillBar({ skill, index }: SkillBarProps) {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0.3,
    freezeOnceVisible: true,
  });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!hasIntersected) return;

    const timer = setTimeout(() => {
      setProgress(skill.level);
    }, index * 100);

    return () => clearTimeout(timer);
  }, [hasIntersected, skill.level, index]);

  return (
    <div
      ref={ref}
      className={`space-y-2 ${hasIntersected ? 'animate-slide-in' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="glass rounded-full p-1">
        <Progress value={progress} className="h-2" />
      </div>
    </div>
  );
}

export default function TechStackSection() {
  const skills: Skill[] = [
    // Languages
    { name: 'Java', level: 90, category: 'Languages' },
    { name: 'C', level: 75, category: 'Languages' },
    { name: 'Python', level: 70, category: 'Languages' },
    { name: 'JavaScript', level: 65, category: 'Languages' },
    
    // Backend
    { name: 'Spring Boot', level: 60, category: 'Backend' },
    { name: 'JDBC', level: 80, category: 'Backend' },
    { name: 'MySQL', level: 75, category: 'Backend' },
    
    // DSA
    { name: 'Arrays', level: 85, category: 'DSA' },
    { name: 'HashMaps', level: 80, category: 'DSA' },
    { name: 'Binary Search', level: 85, category: 'DSA' },
    { name: 'Two Pointers', level: 80, category: 'DSA' },
    
    // Tools
    { name: 'Git', level: 85, category: 'Tools' },
    { name: 'IntelliJ', level: 90, category: 'Tools' },
    { name: 'VSCode', level: 85, category: 'Tools' },
    
    // Emerging
    { name: 'GenAI', level: 50, category: 'Emerging' },
    { name: 'Web3/Blockchain', level: 45, category: 'Emerging' },
    { name: 'Cloud', level: 40, category: 'Emerging' },
  ];

  const categories = ['Languages', 'Backend', 'DSA', 'Tools', 'Emerging'];

  return (
    <section id="techstack" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl xl:text-5xl font-bold gradient-text mb-4">
            Tech Stack & Skills
          </h2>
          <p className="text-lg text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div key={category} className="glass-strong rounded-2xl p-6 gradient-border">
              <h3 className="text-2xl font-bold text-primary mb-6">{category}</h3>
              <div className="space-y-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
