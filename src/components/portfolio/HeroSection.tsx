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
      {/* Decorative circles with animations */}
      <div className="absolute top-20 left-20 w-48 h-48 rounded-full border border-border/30 animate-float" />
      <div className="absolute bottom-32 right-32 w-32 h-32 rounded-full border border-border/30 animate-float stagger-2" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 border border-border/20 animate-spin-slow" style={{ transform: 'rotate(15deg)' }} />

      <div className="container mx-auto max-w-6xl">
        <div className="grid xl:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center xl:order-2 animate-scale-in stagger-2">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-2xl opacity-60 group-hover:opacity-90 transition duration-500 animate-pulse-glow" />
              <div className="relative glass-bright rounded-full p-3 gradient-border-bright hover-lift">
                <img
                  src="https://miaoda-conversation-file.s3cdn.medo.dev/user-8zwnaxo7d7uo/20260117/file-8zwo1ojh301u.jpg"
                  alt="Aditya Srivastava"
                  className="w-64 h-64 xl:w-80 xl:h-80 rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center xl:text-left xl:order-1 space-y-6">
            <h1 className="text-5xl xl:text-7xl font-bold animate-slide-in-left">
              <span className="gradient-text">Aditya Srivastava</span>
            </h1>

            <p className="text-2xl xl:text-3xl text-white font-semibold animate-slide-in-left stagger-1">
              Competitive Programmer
            </p>

            <p className="text-lg xl:text-xl text-white max-w-3xl leading-relaxed animate-slide-in-left stagger-2">
              First-year CSE-AI student at KIET passionate about backend systems & algorithms
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap items-center justify-center xl:justify-start gap-4 pt-4">
              {socialLinks.map((link, index) => (
                <button
                  key={link.name}
                  onClick={() => window.open(link.url, '_blank')}
                  className={`p-3 rounded-lg glass-strong hover:glass-bright hover-bounce transition-all duration-300 animate-bounce-in stagger-${index + 1}`}
                  aria-label={link.name}
                >
                  <link.icon className="w-6 h-6 text-white" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

