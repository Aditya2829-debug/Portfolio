import { Github, Linkedin, Code2 } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl xl:text-5xl font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Let's connect and build something amazing together
          </p>
        </div>

        <div className="glass-bright rounded-3xl p-12 gradient-border-bright text-center space-y-8">
          <p className="text-xl text-foreground">
            <a
              href="mailto:adityareachme1048@gmail.com"
              className="hover:text-primary transition-colors font-semibold"
            >
              adityareachme1048@gmail.com
            </a>
          </p>

          <p className="text-lg text-muted-foreground">
            Kanpur, India
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 pt-4">
            <button
              onClick={() => window.open('https://github.com/Aditya2829-debug', '_blank')}
              className="p-4 rounded-lg glass-strong hover:glass-bright hover:glow-primary transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-7 h-7 text-foreground" />
            </button>
            <button
              onClick={() => window.open('https://www.linkedin.com/in/aditya-srivastava-29884a380', '_blank')}
              className="p-4 rounded-lg glass-strong hover:glass-bright hover:glow-primary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-7 h-7 text-foreground" />
            </button>
            <button
              onClick={() => window.open('https://leetcode.com/u/ArchitectOfSilence/', '_blank')}
              className="p-4 rounded-lg glass-strong hover:glass-bright hover:glow-primary transition-all duration-300"
              aria-label="LeetCode"
            >
              <Code2 className="w-7 h-7 text-foreground" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-muted-foreground text-sm">
          <p>© 2026 Aditya Srivastava. Built with passion.</p>
        </div>
      </div>
    </section>
  );
}
