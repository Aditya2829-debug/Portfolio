import React from 'react';

export default function Contact() {
  return (
    <footer className="min-h-screen md:h-screen w-full flex flex-col items-center justify-between bg-surface relative z-10 pt-24 pb-8 overflow-visible">
      
      <div className="flex-1 flex flex-col items-center justify-center w-full px-6 md:px-16 lg:px-24 text-center max-w-7xl mx-auto">
        <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-6">Want to collaborate?</p>
        <a href="mailto:krishsrivatava999@gmail.com" className="w-full max-w-full overflow-hidden block">
          <h2 className="text-[clamp(2.2rem,7.5vw,9.5rem)] leading-none font-display font-black text-transparent text-border cursor-pointer hover:text-white transition-colors duration-500 whitespace-nowrap tracking-tight py-4 px-2">
            GET IN TOUCH
          </h2>
        </a>
        
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <a href="mailto:krishsrivatava999@gmail.com" className="font-mono text-lg hover:text-primary transition-colors">Email</a>
          <a href="https://www.linkedin.com/in/aditya-srivastava-29884a380/" target="_blank" rel="noopener noreferrer" className="font-mono text-lg hover:text-primary transition-colors">LinkedIn</a>
          <a href="https://github.com/Aditya2829-debug" target="_blank" rel="noopener noreferrer" className="font-mono text-lg hover:text-primary transition-colors">GitHub</a>
        </div>
      </div>

      <div className="w-full px-16 flex justify-between text-white/40 font-mono text-sm border-t border-white/10 pt-8">
        <span>© 2026 Aditya Srivastava</span>
        <span>Kanpur, India 🇮🇳</span>
      </div>
    </footer>
  );
}
