import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { GraduationCap, Code, Rocket } from 'lucide-react';

export default function AboutSection() {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0.3,
    freezeOnceVisible: true,
  });

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl xl:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground">
            Passionate developer and problem solver
          </p>
        </div>

        <div
          ref={ref}
          className={`glass-strong rounded-2xl p-8 xl:p-12 gradient-border ${
            hasIntersected ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p className="flex items-start gap-3">
              <GraduationCap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <span>
                First-year <span className="text-foreground font-semibold">CSE-AI student</span> at{' '}
                <span className="text-foreground font-semibold">KIET Group of Institutions</span>, passionate about Java backend development and algorithmic problem-solving.
              </span>
            </p>

            <p className="flex items-start gap-3">
              <Code className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <span>
                Solved <span className="text-foreground font-semibold">172+ problems</span> across platforms, achieved{' '}
                <span className="text-foreground font-semibold">LeetCode 1530 rating</span>. Currently learning{' '}
                <span className="text-foreground font-semibold">Spring Boot</span> and exploring{' '}
                <span className="text-foreground font-semibold">GenAI & Web3</span>.
              </span>
            </p>

            <p className="flex items-start gap-3">
              <Rocket className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <span>
                Active in <span className="text-foreground font-semibold">Google Developers Group</span>,{' '}
                <span className="text-foreground font-semibold">DevUp</span>, and{' '}
                <span className="text-foreground font-semibold">Technocrats</span>. Seeking internship opportunities to apply my skills in real-world projects.
              </span>
            </p>
          </div>

          {/* Decorative elements */}
          <div className="mt-8 flex justify-center gap-4">
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
            <div className="w-16 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full" />
            <div className="w-16 h-1 bg-gradient-to-r from-accent to-transparent rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
