import React, { useEffect, useState, Suspense } from 'react';
import { ReactLenis } from 'lenis/react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Lazy load the heavy 3D WebGL Scene
const Scene = React.lazy(() => import('./components/Scene'));

export default function App() {
  const [isSceneLoaded, setIsSceneLoaded] = useState(false);

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
      {/* Visual Loading Overlay until 3D shaders and Environment map are loaded */}
      <LoadingScreen active={!isSceneLoaded} />

      {/* 3D WebGL Canvas Layer (Fixed in background) */}
      <Suspense fallback={null}>
        <Scene onLoaded={() => setIsSceneLoaded(true)} />
      </Suspense>

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
