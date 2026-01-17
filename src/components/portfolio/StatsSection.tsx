import { useEffect, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Trophy, Code, Flame, Star } from 'lucide-react';

interface StatCardProps {
  platform: string;
  rating: string;
  detail: string;
  icon: React.ReactNode;
  color: string;
  delay: number;
}

function StatCard({ platform, rating, detail, icon, color, delay }: StatCardProps) {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0.3,
    freezeOnceVisible: true,
  });

  const [count, setCount] = useState(0);
  const targetNumber = Number.parseInt(rating.replace(/\D/g, ''));

  useEffect(() => {
    if (!hasIntersected || !targetNumber) return;

    let start = 0;
    const duration = 2000;
    const increment = targetNumber / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasIntersected, targetNumber]);

  return (
    <div
      ref={ref}
      className={`glass-bright rounded-2xl p-6 gradient-border-bright hover:scale-105 hover:glow-primary transition-all duration-300 ${
        hasIntersected ? 'animate-slide-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl glass-strong ${color}`}>
          {icon}
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-semibold glass-strong ${color}`}>
          {platform}
        </div>
      </div>
      <div className="space-y-2">
        <div className="text-3xl font-bold gradient-text">
          {targetNumber ? count : rating}
        </div>
        <p className="text-sm text-muted-foreground font-medium">{detail}</p>
      </div>
    </div>
  );
}

export default function StatsSection() {
  const stats = [
    {
      platform: 'LeetCode',
      rating: '1530',
      detail: 'Max Rating',
      icon: <Code className="w-6 h-6 text-platform-leetcode" />,
      color: 'glow-primary',
    },
    {
      platform: 'CodeChef',
      rating: '1207',
      detail: 'Current Rating',
      icon: <Trophy className="w-6 h-6 text-platform-codechef" />,
      color: 'glow-secondary',
    },
    {
      platform: 'CodeForces',
      rating: '50+',
      detail: 'Day Streak',
      icon: <Flame className="w-6 h-6 text-platform-codeforces" />,
      color: 'glow-primary',
    },
    {
      platform: 'HackerRank',
      rating: '5⭐',
      detail: 'Java Badge',
      icon: <Star className="w-6 h-6 text-platform-hackerrank" />,
      color: 'glow-secondary',
    },
  ];

  return (
    <section id="stats" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl xl:text-5xl font-bold gradient-text mb-4">
            Competitive Programming Stats
          </h2>
          <p className="text-lg text-muted-foreground">
            170+ problems solved across multiple platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.platform}
              {...stat}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Total Problems Solved */}
        <div className="mt-8 text-center">
          <div className="glass-bright rounded-2xl p-8 gradient-border-bright inline-block glow-accent">
            <div className="text-5xl font-bold gradient-text mb-2">170+</div>
            <p className="text-lg text-foreground font-semibold">Total Problems Solved</p>
          </div>
        </div>
      </div>
    </section>
  );
}
