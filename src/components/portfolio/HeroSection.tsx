import { useEffect, useState } from 'react';
import { Github, Linkedin, Code2, Trophy, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Java Backend Developer | DSA Enthusiast | Competitive Programmer';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

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
  ];

  const scrollToNext = () => {
    const statsSection = document.getElementById('stats');
    statsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid xl:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center xl:order-2">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-2xl opacity-60 group-hover:opacity-90 transition duration-500 animate-pulse-glow" />
              <div className="relative glass-bright rounded-full p-3 gradient-border-bright">
                <img
                  src="https://miaoda-conversation-file.s3cdn.medo.dev/user-8zwnaxo7d7uo/20260117/file-8zwo1ojh301u.jpg"
                  alt="Aditya Srivastava"
                  className="w-64 h-64 xl:w-80 xl:h-80 rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center xl:text-left xl:order-1 space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl xl:text-7xl font-bold gradient-text animate-scale-in">
                ADITYA SRIVASTAVA
              </h1>
              <div className="h-16 xl:h-20">
                <p className="text-lg xl:text-xl text-secondary font-medium min-h-[3rem]">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </div>

            <div className="glass-bright rounded-2xl p-6 xl:p-8 gradient-border-bright animate-fade-in">
              <p className="text-base xl:text-lg text-foreground leading-relaxed">
                First-year CSE-AI student at KIET passionate about backend systems & algorithms
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 justify-center xl:justify-start">
              {socialLinks.map((link, index) => (
                <Button
                  key={link.name}
                  variant="outline"
                  size="lg"
                  className="glass-strong hover:glass-bright hover:scale-105 hover:glow-primary transition-all duration-300 border-primary/30 text-primary font-semibold"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => window.open(link.url, '_blank')}
                >
                  <link.icon className="w-5 h-5 mr-2" />
                  {link.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 glass-strong rounded-full p-3 animate-bounce hover:glass-bright hover:glow-primary transition-all cursor-pointer"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-6 h-6 text-primary" />
      </button>
    </section>
  );
}
