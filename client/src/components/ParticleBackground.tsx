import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const meshRef = useRef<THREE.Points>(null);
  
  // Create particle positions - learned this from Three.js documentation
  // Using useMemo so it doesn't recreate on every render
  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const particleCount = 1000; // Seems like a good amount, not too heavy
    const positions = new Float32Array(particleCount * 3);
    
    // Scatter particles randomly in 3D space
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;     // x position
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50; // y position  
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50; // z position
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  // Material for the particles - blue glow effect
  const particlesMaterial = useMemo(() => {
    return new THREE.PointsMaterial({
      color: '#3b82f6', // Nice blue color
      size: 0.1,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending, // Makes them glow nicely
    });
  }, []);

  // Animation loop - rotates the particle cloud slowly
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1; // Slow rotation on X axis
      meshRef.current.rotation.y += delta * 0.05; // Even slower on Y axis
    }
  });

  return (
    <points
      ref={meshRef}
      geometry={particlesGeometry}
      material={particlesMaterial}
    />
  );
}

function FloatingCubes() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Generate some floating cubes for extra visual appeal
  // Pre-calculated so they don't move around randomly each frame
  const cubes = useMemo(() => {
    const cubeData = [];
    for (let i = 0; i < 20; i++) { // 20 cubes should be enough
      cubeData.push({
        position: [
          (Math.random() - 0.5) * 30, // Spread them out
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 30,
        ],
        rotation: [
          Math.random() * Math.PI, // Random initial rotation
          Math.random() * Math.PI,
          Math.random() * Math.PI,
        ],
        scale: 0.2 + Math.random() * 0.5, // Different sizes
      });
    }
    return cubeData;
  }, []);

  // Animate the cubes - each one rotates at slightly different speeds
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1; // Rotate the whole group
      // Make each cube spin individually too
      groupRef.current.children.forEach((child, index) => {
        child.rotation.x += delta * (0.5 + index * 0.1); // Different speeds
        child.rotation.y += delta * (0.3 + index * 0.05);
      });
    }
  });

  return (
    <group ref={groupRef}>
      {cubes.map((cube, index) => (
        <mesh
          key={index}
          position={cube.position as [number, number, number]}
          rotation={cube.rotation as [number, number, number]}
          scale={cube.scale}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial
            color="#3b82f6"
            transparent
            opacity={0.3}
            wireframe
          />
        </mesh>
      ))}
    </group>
  );
}

export function ParticleBackground() {
  return (
    <div className="hero-canvas">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Particles />
        <FloatingCubes />
      </Canvas>
    </div>
  );
}
