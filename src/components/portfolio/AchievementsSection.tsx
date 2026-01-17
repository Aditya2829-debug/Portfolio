import { Trophy, Award, Flame, GraduationCap } from 'lucide-react';

export default function AchievementsSection() {
  const achievements = [
    {
      title: 'Smart India Hackathon 2025',
      description: 'Participated in national-level hackathon',
      icon: <Trophy className="w-6 h-6 text-primary" />,
    },
    {
      title: 'InnoTech Hackathon',
      description: 'Developed Green AI carbon footprint project',
      icon: <Trophy className="w-6 h-6 text-secondary" />,
    },
    {
      title: 'LeetCode 1530 Rating',
      description: 'Achieved Knight badge milestone',
      icon: <Award className="w-6 h-6 text-primary" />,
    },
    {
      title: 'CodeForces 50-Day Streak',
      description: 'Consistent daily problem-solving',
      icon: <Flame className="w-6 h-6 text-accent" />,
    },
    {
      title: 'MongoDB Certification',
      description: 'Database fundamentals certification',
      icon: <GraduationCap className="w-6 h-6 text-secondary" />,
    },
    {
      title: 'AI & Data Science Certifications',
      description: 'Foundation in AI and data science',
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-32 w-64 h-64 rounded-full border border-border/30" />
      <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full border border-border/30" />

      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl xl:text-5xl font-bold gradient-text mb-4">
            Achievements
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="flex items-start gap-6 glass-bright rounded-2xl p-8 gradient-border-bright hover:glow-primary transition-all duration-300"
            >
              <div className="flex-shrink-0 p-3 rounded-xl glass-strong">
                {achievement.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-white/80">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
