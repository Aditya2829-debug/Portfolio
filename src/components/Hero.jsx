import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    // Clear out refs array safely to prevent React strict mode duplication
    const currentRefs = textRefs.current;
    
    const ctx = gsap.context(() => {
      gsap.fromTo(currentRefs, 
        { y: 150, opacity: 0, skewY: 5 },
        { y: 0, opacity: 1, skewY: 0, duration: 1.4, stagger: 0.15, ease: "power4.out", delay: 0.2 }
      );

      gsap.to(containerRef.current, {
        yPercent: 40,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  return (
    <section ref={containerRef} className="h-screen w-full flex flex-col justify-center px-6 md:px-16 pt-20 overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="overflow-hidden mb-2">
          <p ref={addToRefs} className="font-sans text-xl md:text-2xl text-accent mb-4 tracking-wider uppercase font-medium">
            First-Year CSE-AI Student
          </p>
        </div>
        
        <div className="overflow-hidden">
          <h1 ref={addToRefs} className="text-[12vw] leading-[0.85] font-display font-black tracking-tighter">
            ADITYA
          </h1>
        </div>
        
        <div className="overflow-hidden mb-8">
          <h1 ref={addToRefs} className="text-[12vw] leading-[0.85] font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-accent">
            SRIVASTAVA
          </h1>
        </div>

        <div className="overflow-hidden max-w-3xl">
          <p ref={addToRefs} className="font-sans font-light text-xl md:text-3xl leading-relaxed text-white/80">
            India-based Backend Developer, 
            <span className="text-white font-medium"> Java Specialist </span> 
            and <span className="italic text-primary">Competitive Programmer</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
