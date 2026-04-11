import React, { useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import Scene from './components/Scene';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Refresh ScrollTrigger after DOM load and components mount
    // using a tiny timeout ensures all images/fonts are loaded
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothTouch: true }}>
      {/* 3D WebGL Canvas Layer (Fixed in background) */}
      <Scene />

      {/* HTML Content Overlay */}
      <main className="relative z-10 w-full overflow-hidden selection:bg-primary selection:text-white">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </ReactLenis>
  );
}
