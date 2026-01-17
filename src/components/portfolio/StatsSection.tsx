import { Trophy, Code, Flame, Star } from 'lucide-react';

interface StatCardProps {
  platform: string;
  rating: string;
  detail: string;
  icon: React.ReactNode;
  color: string;
}

function StatCard({ platform, rating, detail, icon, color }: StatCardProps) {
  return (
    <div className="glass-bright rounded-2xl p-6 gradient-border-bright hover-lift hover-glow transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl glass-strong ${color} group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-semibold glass-strong ${color} group-hover:animate-shimmer`}>
          {platform}
        </div>
      </div>
      <div className="space-y-2">
        <div className="text-3xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">
          {rating}
        </div>
        <p className="text-sm text-white font-medium">{detail}</p>
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
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl xl:text-5xl font-bold gradient-text mb-4">
            Competitive Programming Stats
          </h2>
          <p className="text-lg text-white">
            170+ problems solved across multiple platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={stat.platform} className={`animate-slide-in-up stagger-${index + 1}`}>
              <StatCard {...stat} />
            </div>
          ))}
        </div>

        {/* Total Problems Solved */}
        <div className="mt-8 text-center animate-scale-in stagger-5">
          <div className="glass-bright rounded-2xl p-8 gradient-border-bright inline-block glow-accent hover-tilt group cursor-pointer">
            <div className="text-5xl font-bold gradient-text mb-2 group-hover:scale-125 transition-transform duration-300">170+</div>
            <p className="text-lg text-white font-semibold">Total Problems Solved</p>
          </div>
        </div>
      </div>
    </section>
  );
}
