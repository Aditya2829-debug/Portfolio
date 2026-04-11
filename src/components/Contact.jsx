import React from 'react';

export default function Contact() {
  return (
    <footer className="h-screen w-full flex flex-col items-center justify-between bg-surface relative z-10 pt-32 pb-8 overflow-hidden">
      
      <div className="flex-1 flex flex-col items-center justify-center w-full px-6 text-center">
        <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-6">Want to collaborate?</p>
        <a href="mailto:adityareachme1048@gmail.com">
          <h2 className="text-[14vw] leading-none font-display font-black text-transparent text-border cursor-pointer hover:text-white transition-colors duration-500">
            GET IN TOUCH
          </h2>
        </a>
        
        <div className="mt-12 flex gap-8">
          <a href="#" className="font-mono text-lg hover:text-primary transition-colors">LinkedIn</a>
          <a href="#" className="font-mono text-lg hover:text-primary transition-colors">GitHub</a>
          <a href="#" className="font-mono text-lg hover:text-primary transition-colors">LeetCode</a>
        </div>
      </div>

      <div className="w-full px-16 flex justify-between text-white/40 font-mono text-sm border-t border-white/10 pt-8">
        <span>© 2026 Aditya Srivastava</span>
        <span>Kanpur, India 🇮🇳</span>
      </div>
    </footer>
  );
}
