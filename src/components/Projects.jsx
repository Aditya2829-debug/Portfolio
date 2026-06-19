import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    title: "Green AI Analyser",
    desc: "An AI-powered carbon footprint calculator developed for the Net Zero initiative as part of the InnoTech Hackathon. Uses predictive models to optimize efficiency.",
    tech: ["Python", "AI/ML", "Data Analytics"],
    color: "#9333EA",
    image: "/assets/projects/green-ai-analyser.jpg",
    link: "https://github.com/Aditya2829-debug"
  },
  {
    title: "College Club Portal",
    desc: "A comprehensive tech club portal featuring real-time event management systems and multi-tier member registration functionalities.",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "#ffc6d9",
    image: "/assets/projects/college-club-portal.jpg"
  },
  {
    title: "Bank Mgmt System",
    desc: "A robust Java-based desktop application utilizing Swing and JavaFX for a rich GUI, handling concurrent core banking operations and secured transactions.",
    tech: ["Java", "Swing", "JDBC", "MySQL"],
    color: "#FF4A4A",
    image: "/assets/projects/bank-mgmt-system.jpg"
  },
  {
    title: "NyxLegal",
    desc: "An AI-powered legal assistance web app simplifying access to legal information for non-expert users, with conversational AI for document summarization and contextual legal guidance.",
    tech: ["JavaScript", "Firebase", "AI Integration"],
    color: "#4F46E5",
    image: "/assets/projects/nyxlegal.jpg",
    link: "https://github.com/Aditya2829-debug/NyxLegal"
  },
  {
    title: "Cyborg Landing Page",
    desc: "A cyborg-themed interactive landing page built for Techfest IIT Bombay, featuring 3D elements and smooth animations.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Spline"],
    color: "#06B6D4",
    image: "/assets/projects/cyborg-landing-page.jpg"
  }
];

export default function Projects() {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Apply horizontal scroll pin only on desktop screens
      if (window.innerWidth < 768) return;

      const scrollAmount = wrapperRef.current.offsetWidth - window.innerWidth;

      gsap.to(wrapperRef.current, {
        x: -scrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: `+=${scrollAmount}`,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      className="min-h-screen md:h-screen w-full relative z-10 bg-base py-20 md:py-0 overflow-visible md:overflow-hidden flex flex-col justify-center"
    >
      <div className="px-6 md:px-0 md:absolute md:top-20 md:left-16 z-20 mb-12 md:mb-0">
        <h2 className="text-4xl md:text-6xl font-display font-bold">Featured Works</h2>
      </div>

      <div 
        ref={wrapperRef} 
        className="flex flex-col md:flex-row gap-8 md:gap-20 px-6 md:px-16 w-full md:w-max h-auto md:h-[60vh] md:items-center md:absolute md:left-0"
      >
        {/* Intro space for horizontal scroll spacing on desktop */}
        <div className="hidden md:block w-[30vw] shrink-0 h-full"></div>

        {projectsData.map((proj, idx) => (
          <a 
            key={idx}
            href={proj.link || "#"}
            target={proj.link ? "_blank" : undefined}
            rel={proj.link ? "noopener noreferrer" : undefined}
            className="w-full md:w-[45vw] h-[450px] md:h-full shrink-0 flex flex-col justify-end group cursor-pointer relative no-underline block"
          >
            <div className="absolute inset-0 border border-white/5 bg-surface/80 rounded-2xl overflow-hidden backdrop-blur-xl group-hover:bg-white/5 transition-all duration-500">
              {/* Project preview image with premium zoom/brightness hover effect */}
              <div className="h-3/5 w-full border-b border-white/10 relative overflow-hidden bg-zinc-950">
                <img 
                  src={proj.image} 
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
                />
                <div 
                  className="absolute inset-0 opacity-20 mix-blend-overlay bg-gradient-to-tr from-transparent" 
                  style={{ '--tw-gradient-to': `${proj.color} 100%` }}
                ></div>
              </div>
              
              <div className="p-6 md:p-8 h-2/5 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                    {proj.title}
                    {proj.link && (
                      <svg className="w-4 h-4 text-white/50 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    )}
                  </h3>
                  <p className="text-white/60 font-sans font-light text-sm md:text-base line-clamp-2 md:line-clamp-3">
                    {proj.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {proj.tech.map(t => (
                    <span key={t} className="text-[10px] md:text-xs font-mono px-3 py-1 bg-white/10 rounded-full text-white/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
        
        {/* Outro space for horizontal scroll spacing on desktop */}
        <div className="hidden md:block w-[10vw] shrink-0 h-full"></div>

      </div>
    </section>
  );
}
