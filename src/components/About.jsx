import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pinning the title while scrolling the content
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: leftColRef.current,
        pinSpacing: false,
      });

      // Fade up stats and skills
      gsap.fromTo(".stat-card", 
        { y: 100, opacity: 0 },
        { 
          y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power3.out",
          scrollTrigger: {
            trigger: rightColRef.current,
            start: "top 70%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[150vh] w-full px-6 md:px-16 pt-32 pb-32 z-10 bg-surface/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 relative h-full">
        
        {/* Pinned Left Column */}
        <div ref={leftColRef} className="w-full md:w-1/2 h-screen flex flex-col justify-center">
          <h2 ref={titleRef} className="text-5xl md:text-8xl font-display font-bold leading-tight mb-8">
            Solving <br/>
            <span className="text-border">Problems.</span>
          </h2>
          <p className="text-xl md:text-2xl font-light font-sans text-white/70 max-w-lg">
            I'm a first-year Computer Science & AI student currently navigating the intersection of algorithmic efficiency and robust backend architecture. 
            Currently active at Google Developers Group, DevUp, and Technocrats.
          </p>
        </div>

        {/* Scrolling Right Column */}
        <div ref={rightColRef} className="w-full md:w-1/2 flex flex-col gap-12 pt-[30vh]">
          
          <div className="stat-card bg-base/80 border border-white/10 p-10 rounded-3xl backdrop-blur-md">
            <h3 className="text-4xl font-display font-bold mb-2">1530</h3>
            <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-4">LeetCode Rating (Knight Track)</p>
            <p className="text-white/60 font-light">172+ problems crunched, specializing in HashMaps, Binary Search, and Two Pointers patterns prioritizing O(N) optimizations.</p>
          </div>

          <div className="stat-card bg-base/80 border border-white/10 p-10 rounded-3xl backdrop-blur-md">
            <h3 className="text-4xl font-display font-bold mb-2">50 Days</h3>
            <p className="text-primary uppercase tracking-widest text-sm font-semibold mb-4">CodeForces Streak</p>
            <p className="text-white/60 font-light">Maintaining consistent competitive programming agility daily. Constant learning is not a phase, it's the core methodology.</p>
          </div>

          <div className="stat-card bg-base/80 border border-primary/20 p-10 rounded-3xl backdrop-blur-md">
            <h3 className="text-2xl font-display font-bold mb-6">Backend Arsenal</h3>
            <div className="flex flex-col gap-4">
              <div className="w-full">
                <div className="flex justify-between mb-1"><span className="font-mono text-sm">Java / Spring Boot</span><span className="font-mono text-sm text-primary">90%</span></div>
                <div className="w-full bg-white/10 h-1 rounded"><div className="bg-primary h-1 rounded" style={{width: '90%'}}></div></div>
              </div>
              <div className="w-full">
                <div className="flex justify-between mb-1"><span className="font-mono text-sm">C / C++</span><span className="font-mono text-sm text-accent">70%</span></div>
                <div className="w-full bg-white/10 h-1 rounded"><div className="bg-accent h-1 rounded" style={{width: '70%'}}></div></div>
              </div>
              <div className="w-full">
                <div className="flex justify-between mb-1"><span className="font-mono text-sm">Python / AI/ML</span><span className="font-mono text-sm text-white/50">65%</span></div>
                <div className="w-full bg-white/10 h-1 rounded"><div className="bg-white/50 h-1 rounded" style={{width: '65%'}}></div></div>
              </div>
              <div className="w-full mt-4 flex gap-4 text-xs font-mono text-white/40 uppercase">
                <span>JDBC</span>/<span>MySQL</span>/<span>MongoDB</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
