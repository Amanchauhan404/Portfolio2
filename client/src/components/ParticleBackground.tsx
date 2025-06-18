import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const meshRef = useRef<THREE.Points>(null);
  
  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  const particlesMaterial = useMemo(() => {
    return new THREE.PointsMaterial({
      color: '#3b82f6',
      size: 0.1,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.05;
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
  
  const cubes = useMemo(() => {
    const cubeData = [];
    for (let i = 0; i < 20; i++) {
      cubeData.push({
        position: [
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 30,
        ],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI,
        ],
        scale: 0.2 + Math.random() * 0.5,
      });
    }
    return cubeData;
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
      groupRef.current.children.forEach((child, index) => {
        child.rotation.x += delta * (0.5 + index * 0.1);
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
