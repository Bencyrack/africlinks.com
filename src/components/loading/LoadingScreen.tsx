'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import Logo3D from './Logo3D';
import ProgressBar from './ProgressBar';

interface LoadingScreenProps {
  isLoading: boolean;
  progress: number;
}

export default function LoadingScreen({ isLoading, progress }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-linear-to-br from-purple-900 via-purple-800 to-blue-900 overflow-hidden"
        >
          {/* Gradient animé en arrière-plan */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(139, 58, 139, 0.4) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(76, 175, 80, 0.4) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 80%, rgba(33, 150, 243, 0.4) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(139, 58, 139, 0.4) 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          />

          {/* Particules flottantes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => {
              const colors = ['#8B3A8B', '#4CAF50', '#2196F3', '#FFC107', '#F44336'];
              const color = colors[i % 5];
              // Positions fixes pour éviter l'erreur d'hydratation
              const positions = [
                { left: 10, top: 20 }, { left: 85, top: 15 }, { left: 30, top: 70 }, { left: 75, top: 80 },
                { left: 50, top: 30 }, { left: 20, top: 60 }, { left: 90, top: 50 }, { left: 15, top: 85 },
                { left: 60, top: 10 }, { left: 40, top: 90 }, { left: 70, top: 40 }, { left: 25, top: 45 },
                { left: 80, top: 65 }, { left: 35, top: 25 }, { left: 55, top: 75 }, { left: 45, top: 55 },
                { left: 65, top: 35 }, { left: 95, top: 70 }, { left: 5, top: 50 }, { left: 50, top: 5 }
              ];
              const pos = positions[i];
              
              return (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: color,
                    left: `${pos.left}%`,
                    top: `${pos.top}%`,
                    boxShadow: `0 0 10px ${color}`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, (i % 3 - 1) * 10, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3 + (i % 3),
                    repeat: Infinity,
                    delay: (i % 5) * 0.4,
                    ease: 'easeInOut',
                  }}
                />
              );
            })}
          </div>

          {/* Canvas 3D */}
          <div className="w-full h-2/3 relative z-10">
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 0, 8]} />
              <Suspense fallback={null}>
                <Logo3D />
              </Suspense>
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate={false}
              />
            </Canvas>
          </div>

          {/* Barre de progression */}
          <div className="w-full px-8 z-10">
            <ProgressBar progress={progress} />
          </div>

          {/* Texte de chargement avec animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 text-center z-10"
          >
            <motion.h2
              className="text-white text-3xl font-bold mb-2"
              animate={{
                textShadow: [
                  '0 0 20px rgba(139, 58, 139, 0.5)',
                  '0 0 30px rgba(76, 175, 80, 0.5)',
                  '0 0 20px rgba(139, 58, 139, 0.5)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              Afric Links
            </motion.h2>
            <motion.p
              className="text-white/80 text-base font-medium"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              Connecter l'Afrique au monde
            </motion.p>
          </motion.div>

          {/* Cercles décoratifs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-blue-500/10 blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-green-500/5 blur-3xl"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />
          </div>
          <noscript>
            <div className="absolute inset-0 flex items-center justify-center bg-purple-900">
              <div className="text-center text-white">
                <h1 className="text-4xl font-bold mb-4">AFRIC LINKS</h1>
                <p>Chargement en cours...</p>
              </div>
            </div>
          </noscript>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
