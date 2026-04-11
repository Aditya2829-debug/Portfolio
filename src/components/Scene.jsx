import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AbstractShape() {
  const mesh = useRef();

  useFrame((state, delta) => {
    // Continuous idle rotation
    mesh.current.rotation.x += delta * 0.2;
    mesh.current.rotation.y += delta * 0.15;
    
    // Scroll-linked rotation & scale interaction
    const scrollY = window.scrollY;
    
    // Mouse interactivity (ActiveTheory / Igloo style)
    // state.pointer ranges from -1 to 1 on X and Y
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
    const scaleBase = 1;
    const scaleShift = Math.sin(scrollY * 0.002) * 0.1; // breathes as you scroll
    const targetScale = scaleBase + scaleShift;
    
    mesh.current.scale.setScalar(
      THREE.MathUtils.lerp(mesh.current.scale.x, targetScale, 0.05)
    );
  });

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={3}>
      <mesh ref={mesh}>
        <torusKnotGeometry args={[1.8, 0.5, 256, 64]} />
        {/* Elite Glassmorphism crystal material */}
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
      </mesh>
    </Float>
  );
}

export default function Scene() {
  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [0, 0, 9], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        {/* Dynamic colored lights matching the dark theme */}
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#9333EA" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#FF4A4A" />
        <directionalLight position={[0, 10, -10]} intensity={0.5} color="#ffffff" />
        <AbstractShape />
        {/* City environment maps stunning realistic reflections onto the glass */}
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
