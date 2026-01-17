import { Github, Linkedin, Code2, Trophy, Award, BarChart } from 'lucide-react';

export default function HeroSection() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Aditya2829-debug',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aditya-srivastava-29884a380?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      icon: Linkedin,
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/ArchitectOfSilence/',
      icon: Code2,
    },
    {
      name: 'CodeForces',
      url: 'https://codeforces.com/profile/Not_Aizen',
      icon: Trophy,
    },
    {
      name: 'CodeChef',
      url: 'https://www.codechef.com/',
      icon: Award,
    },
    {
      name: 'HackerRank',
      url: 'https://www.hackerrank.com/',
      icon: BarChart,
    },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-32">
      {/* Decorative circles */}
      <div className="absolute top-20 left-20 w-48 h-48 rounded-full border border-border/30" />
      <div className="absolute bottom-32 right-32 w-32 h-32 rounded-full border border-border/30" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 border border-border/20" style={{ transform: 'rotate(15deg)' }} />

      <div className="container mx-auto max-w-5xl">
        {/* Main card */}
        <div className="glass-bright rounded-3xl p-12 xl:p-16 gradient-border-bright text-center space-y-8">
          <h1 className="text-5xl xl:text-7xl font-bold">
            <span className="gradient-text">Aditya Srivastava</span>
          </h1>

          <p className="text-2xl xl:text-3xl text-foreground font-semibold">
            Competitive Programmer
          </p>

          <p className="text-lg xl:text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
            First-year CSE-AI student at KIET passionate about backend systems & algorithms
          </p>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-6 pt-4">
            {socialLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => window.open(link.url, '_blank')}
                className="p-3 rounded-lg glass-strong hover:glass-bright hover:glow-primary transition-all duration-300"
                aria-label={link.name}
              >
                <link.icon className="w-6 h-6 text-foreground" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

