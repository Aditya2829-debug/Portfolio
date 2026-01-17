import { Github, Linkedin, Code2 } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl xl:text-5xl font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-white">
            Let's connect and build something amazing together
          </p>
        </div>

        <div className="glass-bright rounded-3xl p-12 gradient-border-bright text-center space-y-8 hover-lift hover-glow transition-all duration-500 animate-scale-in">
          <p className="text-xl text-white animate-slide-in-up stagger-1">
            <a
              href="mailto:adityareachme1048@gmail.com"
              className="hover:text-primary transition-colors font-semibold hover-slide-right inline-block"
            >
              adityareachme1048@gmail.com
            </a>
          </p>

          <p className="text-lg text-white animate-slide-in-up stagger-2">
            Kanpur, India
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 pt-4">
            {[
              { icon: Github, url: 'https://github.com/Aditya2829-debug', label: 'GitHub' },
              { icon: Linkedin, url: 'https://www.linkedin.com/in/aditya-srivastava-29884a380', label: 'LinkedIn' },
              { icon: Code2, url: 'https://leetcode.com/u/ArchitectOfSilence/', label: 'LeetCode' },
            ].map((link, index) => (
              <button
                key={link.label}
                onClick={() => window.open(link.url, '_blank')}
                className={`p-4 rounded-lg glass-strong hover:glass-bright hover-bounce transition-all duration-300 animate-bounce-in stagger-${index + 3}`}
                aria-label={link.label}
              >
                <link.icon className="w-7 h-7 text-white" />
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-white/60 text-sm animate-fade-in stagger-6">
          <p>© 2026 Aditya Srivastava. Built with passion.</p>
        </div>
      </div>
    </section>
  );
}
