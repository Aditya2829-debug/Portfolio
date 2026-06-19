import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

function SceneNotifier({ onLoaded }) {
  useEffect(() => {
    if (onLoaded) {
      const timer = setTimeout(() => {
        onLoaded();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [onLoaded]);
  return null;
}

function AbstractShape({ isMobile }) {
  const mesh = useRef();
  const { width } = useThree((state) => state.viewport);

  useFrame((state, delta) => {
    // Continuous idle rotation
    mesh.current.rotation.x += delta * 0.2;
    mesh.current.rotation.y += delta * 0.15;
    
    // Scroll-linked rotation & scale interaction
    const scrollY = window.scrollY;
    
    // Mouse interactivity
    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    // Smoothly interpolate rotation z based on scroll AND mouse X
    mesh.current.rotation.z = THREE.MathUtils.lerp(
      mesh.current.rotation.z, 
      (scrollY * 0.003) + (mouseX * 0.5), 
      0.05
    );

    // Make the mesh slightly tilt towards the mouse position
    mesh.current.rotation.x = THREE.MathUtils.lerp(
      mesh.current.rotation.x,
      mesh.current.rotation.x + (mouseY * 0.2),
      0.05
    );

    // Subtle scale pulsing based on scroll depth
    const scaleBase = isMobile ? 0.58 : 0.82; // scaled down on mobile, 18% reduction on desktop
    const scaleShift = Math.sin(scrollY * 0.002) * 0.08; 
    const targetScale = scaleBase + scaleShift;
    
    mesh.current.scale.setScalar(
      THREE.MathUtils.lerp(mesh.current.scale.x, targetScale, 0.05)
    );

    // Adjust position to prevent text overlap
    const targetX = isMobile ? 0 : width * 0.16;
    const targetY = isMobile ? -0.8 : 0;

    mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x, targetX, 0.05);
    mesh.current.position.y = THREE.MathUtils.lerp(mesh.current.position.y, targetY, 0.05);
  });

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={3}>
      <mesh ref={mesh}>
        {/* Reduce polygon count significantly on mobile */}
        <torusKnotGeometry args={isMobile ? [1.8, 0.5, 64, 16] : [1.8, 0.5, 256, 64]} />
        
        {/* Swap heavy multi-pass glass shader for lightweight single-pass PhysicalMaterial on mobile */}
        {isMobile ? (
          <meshPhysicalMaterial
            color="#aa77ff"
            roughness={0.05}
            metalness={0.1}
            clearcoat={1.0}
            clearcoatRoughness={0.1}
            transmission={0}
            transparent
            opacity={0.65}
          />
        ) : (
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={0.8}
            chromaticAberration={2}
            anisotropy={0.3}
            distortion={0.5}
            distortionScale={0.3}
            temporalDistortion={0.1}
            iridescence={1}
            iridescenceIOR={1.2}
            iridescenceThicknessRange={[0, 1400]}
            color="#aa77ff"
          />
        )}
      </mesh>
    </Float>
  );
}

export default function Scene({ onLoaded }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id="canvas-container">
      <Canvas 
        camera={{ position: [0, 0, 9], fov: 45 }} 
        dpr={isMobile ? 1 : [1, 2]}
        gl={{ antialias: !isMobile, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.5} />
        {/* Dynamic colored lights matching the dark theme */}
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#9333EA" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#FF4A4A" />
        <directionalLight position={[0, 10, -10]} intensity={0.5} color="#ffffff" />
        <AbstractShape isMobile={isMobile} />
        {/* City environment maps stunning realistic reflections onto the glass */}
        <Environment preset="city" />
        <SceneNotifier onLoaded={onLoaded} />
      </Canvas>
    </div>
  );
}
