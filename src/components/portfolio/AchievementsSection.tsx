import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Award, Trophy, Target, Flame, FileCheck } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  icon: React.ReactNode;
  side: 'left' | 'right';
}

function AchievementCard({ achievement, index }: { achievement: Achievement; index: number }) {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0.3,
    freezeOnceVisible: true,
  });

  return (
    <div
      ref={ref}
      className={`flex items-center gap-6 ${
        achievement.side === 'right' ? 'flex-row-reverse' : ''
      } ${hasIntersected ? 'animate-slide-in' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Timeline dot */}
      <div className="flex-shrink-0 w-12 h-12 rounded-full glass-strong border-2 border-primary flex items-center justify-center glow-primary">
        {achievement.icon}
      </div>

      {/* Content */}
      <div className="flex-1 glass-strong rounded-2xl p-6 gradient-border hover:scale-105 transition-all duration-300">
        <h3 className="text-xl font-bold text-foreground mb-2">{achievement.title}</h3>
        <p className="text-muted-foreground">{achievement.description}</p>
      </div>
    </div>
  );
}

export default function AchievementsSection() {
  const achievements: Achievement[] = [
    {
      title: 'Smart India Hackathon 2025',
      description: 'Participated in one of India\'s biggest hackathons, competing with thousands of teams nationwide.',
      icon: <Trophy className="w-6 h-6 text-primary" />,
      side: 'left',
    },
    {
      title: 'InnoTech Hackathon - Green AI',
      description: 'Developed Green AI Analyser for carbon footprint calculation, contributing to Net Zero goals.',
      icon: <Award className="w-6 h-6 text-secondary" />,
      side: 'right',
    },
    {
      title: 'LeetCode 1530 Milestone',
      description: 'Achieved maximum rating of 1530 on LeetCode through consistent problem-solving.',
      icon: <Target className="w-6 h-6 text-primary" />,
      side: 'left',
    },
    {
      title: 'CodeForces 50-Day Streak',
      description: 'Maintained a 50+ day streak on CodeForces, demonstrating dedication and consistency.',
      icon: <Flame className="w-6 h-6 text-secondary" />,
      side: 'right',
    },
    {
      title: 'Certifications',
      description: 'Completed certifications in MongoDB, AI, and Data Science to expand technical knowledge.',
      icon: <FileCheck className="w-6 h-6 text-primary" />,
      side: 'left',
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl xl:text-5xl font-bold gradient-text mb-4">
            Achievements & Milestones
          </h2>
          <p className="text-lg text-muted-foreground">
            Key accomplishments in my journey
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-8">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.title}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
