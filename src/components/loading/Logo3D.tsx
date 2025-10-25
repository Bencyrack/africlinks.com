'use client';

import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Composant pour les particules orbitales animées
function ParticleOrbit({ position, color, speed, size }: { position: [number, number, number]; color: string; speed: number; size: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      // Rotation orbitale
      meshRef.current.position.x = position[0] * Math.cos(time * speed);
      meshRef.current.position.z = position[2] * Math.sin(time * speed);
      // Mouvement vertical
      meshRef.current.position.y = position[1] + Math.sin(time * speed * 2) * 0.3;
      // Pulsation
      const scale = 1 + Math.sin(time * speed * 3) * 0.3;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });
  
  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.8}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}

/**
 * Composant Logo3D - Affiche le logo Afric Links réel avec effets 3D
 * Utilise l'image du logo comme texture avec animations
 */
export default function Logo3D() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [logoTexture, setLogoTexture] = useState<THREE.Texture | null>(null);

  // Charger l'image du logo
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      '/afric-links-logo.png',
      (texture) => {
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        setLogoTexture(texture);
      },
      undefined,
      (error) => {
        console.error('Erreur de chargement du logo:', error);
        // Fallback: créer une texture de base
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.fillStyle = '#8B3A8B';
          ctx.fillRect(0, 0, 512, 512);
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 48px Arial';
          ctx.textAlign = 'center';
          ctx.fillText('AFRIC LINKS', 256, 256);
        }
        const fallbackTexture = new THREE.CanvasTexture(canvas);
        setLogoTexture(fallbackTexture);
      }
    );
  }, []);

  // Animation de rotation et pulsation améliorée
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (meshRef.current) {
      // Rotation lente et fluide sur l'axe Y
      meshRef.current.rotation.y = time * 0.5;
      // Oscillation douce sur l'axe X
      meshRef.current.rotation.x = Math.sin(time * 0.4) * 0.2;
      // Légère rotation sur l'axe Z pour plus de dynamisme
      meshRef.current.rotation.z = Math.sin(time * 0.3) * 0.05;
      // Effet de pulsation subtile
      const scale = 1 + Math.sin(time * 1.5) * 0.08;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  if (!logoTexture) {
    return null; // Attendre le chargement de la texture
  }

  return (
    <group>
      {/* Lumières */}
      <ambientLight intensity={0.8} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-5, -5, 5]} intensity={0.6} color="#ffffff" />
      <spotLight
        position={[0, 0, 10]}
        angle={0.5}
        penumbra={1}
        intensity={1.0}
      />

      {/* Plan avec le logo en texture */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <planeGeometry args={[6, 3]} />
        <meshStandardMaterial
          map={logoTexture}
          transparent
          side={THREE.DoubleSide}
          metalness={0.2}
          roughness={0.4}
        />
      </mesh>

      {/* Effet de lueur derrière le logo */}
      <mesh position={[0, 0, -0.5]}>
        <planeGeometry args={[7, 3.5]} />
        <meshBasicMaterial
          color="#8B3A8B"
          transparent
          opacity={0.1}
        />
      </mesh>

      {/* Particules animées autour du logo */}
      {Array.from({ length: 40 }).map((_, i) => {
        const angle = (i / 40) * Math.PI * 2;
        const radius = 4 + (i % 3) * 0.3;
        const height = Math.sin(i) * 1.5;
        const color = ['#8B3A8B', '#4CAF50', '#2196F3', '#FFC107', '#F44336'][i % 5];
        
        return (
          <ParticleOrbit
            key={i}
            position={[
              Math.cos(angle) * radius,
              height,
              Math.sin(angle) * radius - 1,
            ]}
            color={color}
            speed={0.5 + (i % 3) * 0.2}
            size={0.06 + (i % 2) * 0.02}
          />
        );
      })}
    </group>
  );
}