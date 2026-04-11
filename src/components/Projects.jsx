import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    title: "Green AI Analyser",
    desc: "An AI-powered carbon footprint calculator developed for the Net Zero initiative as part of the InnoTech Hackathon. Uses predictive models to optimize efficiency.",
    tech: ["Python", "AI/ML", "Data Analytics"],
    color: "#9333EA" // Accent
  },
  {
    title: "College Club Portal",
    desc: "A comprehensive tech club portal featuring real-time event management systems and multi-tier member registration functionalities.",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "#ffc6d9" 
  },
  {
    title: "Bank Mgmt System",
    desc: "A robust Java-based desktop application utilizing Swing and JavaFX for a rich GUI, handling concurrent core banking operations and secured transactions.",
    tech: ["Java", "Swing", "JDBC", "MySQL"],
    color: "#FF4A4A" // Primary
  }
];

export default function Projects() {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    <section ref={sectionRef} className="h-screen w-full relative z-10 bg-base overflow-hidden flex items-center">
      <div className="absolute top-20 left-16 z-20">
        <h2 className="text-4xl md:text-6xl font-display font-bold">Featured Works</h2>
      </div>

      <div ref={wrapperRef} className="flex gap-20 px-16 h-[60vh] items-center absolute left-0 w-max">
        
        {/* Intro space */}
        <div className="w-[30vw] shrink-0 h-full"></div>

        {projectsData.map((proj, idx) => (
          <div key={idx} className="w-[80vw] md:w-[45vw] h-full shrink-0 flex flex-col justify-end group cursor-pointer relative">
            <div className="absolute inset-0 border border-white/5 bg-surface/80 rounded-2xl overflow-hidden backdrop-blur-xl group-hover:bg-white/5 transition-all duration-500">
              {/* Fake WebGL Frame preview box (The actual 3D is behind it) */}
              <div className="h-3/5 w-full border-b border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-gradient-to-tr from-transparent" style={{ '--tw-gradient-to': `${proj.color} 100%`}}></div>
              </div>
              
              <div className="p-8 h-2/5 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-display font-bold mb-2 group-hover:text-primary transition-colors">{proj.title}</h3>
                  <p className="text-white/60 font-sans font-light line-clamp-2 md:line-clamp-3">{proj.desc}</p>
                </div>
                <div className="flex gap-3">
                  {proj.tech.map(t => (
                    <span key={t} className="text-xs font-mono px-3 py-1 bg-white/10 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Outro space */}
        <div className="w-[10vw] shrink-0 h-full"></div>

      </div>
    </section>
  );
}
