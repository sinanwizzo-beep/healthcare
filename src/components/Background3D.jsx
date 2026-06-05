import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ScrollControls, Scroll, useScroll, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const PremiumWellnessOrb = () => {
  const meshRef = useRef();
  const materialRef = useRef();
  const scroll = useScroll();

  // Slate grey for Illness (stressed, dull)
  const colorIllness = useMemo(() => new THREE.Color('#94a3b8'), []);
  // Emerald for Wellness (calm, vibrant)
  const colorWellness = useMemo(() => new THREE.Color('#10b981'), []);
  const tempColor = useMemo(() => new THREE.Color(), []);

  useFrame((state) => {
    if (!meshRef.current || !materialRef.current) return;

    const time = state.clock.getElapsedTime();
    const offset = scroll.offset; // 0 to 1

    // Morphing logic:
    // Offset 0 (Illness): Highly distorted, pulsating, stressed shape.
    // Offset 1 (Wellness): Perfectly smooth, calming, elegant sphere.
    const targetDistort = THREE.MathUtils.lerp(0.6, 0.0, offset);
    const targetSpeed = THREE.MathUtils.lerp(4, 0.5, offset);

    materialRef.current.distort = THREE.MathUtils.lerp(materialRef.current.distort, targetDistort, 0.05);
    materialRef.current.speed = THREE.MathUtils.lerp(materialRef.current.speed, targetSpeed, 0.05);

    // Color transition
    tempColor.lerpColors(colorIllness, colorWellness, offset);
    materialRef.current.color.lerp(tempColor, 0.05);

    // Gentle premium rotation
    meshRef.current.rotation.x = time * 0.1;
    meshRef.current.rotation.y = time * 0.15;

    // Movement based on scroll
    // Hide completely during Page 1 and Page 2 (offset < 0.25)
    let targetScale = 0.001;
    let targetY = -15;
    let targetX = 0;
    let targetZ = -4;

    if (offset >= 0.25) {
      // Normalize offset from 0.25 to 1.0
      const localOffset = Math.min(1, Math.max(0, (offset - 0.25) / 0.75));
      targetScale = 1;
      targetY = THREE.MathUtils.lerp(-5, 2, localOffset); // Rise up smoothly
      targetZ = THREE.MathUtils.lerp(-8, -4, localOffset);
    }

    // Smoothly animate to the targets
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05);
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.05);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.05);
    meshRef.current.position.z = THREE.MathUtils.lerp(meshRef.current.position.z, targetZ, 0.05);

    // Subtle parallax
    meshRef.current.position.x += (state.pointer.x * 0.5 - meshRef.current.position.x) * 0.05;
  });

  return (
    <Sphere ref={meshRef} args={[7, 128, 128]} position={[-8, 0, -8]}>
      <MeshDistortMaterial
        ref={materialRef}
        color="#94a3b8"
        envMapIntensity={2.5}
        clearcoat={1}
        clearcoatRoughness={0.1}
        metalness={0.1}
        roughness={0.2}
        distort={0.6}
        speed={4}
        // Transmission makes it look like gorgeous, thick frosted glass or liquid
        transmission={0.8}
        thickness={2}
        ior={1.5}
      />
    </Sphere>
  );
};

export default PremiumWellnessOrb;
