'use client';

import { ReactNode } from 'react';
import { useLoadingState } from '@/hooks/useLoadingState';
import LoadingScreen from '@/components/loading/LoadingScreen';

interface ClientLayoutProps {
  children: ReactNode;
}

/**
 * ClientLayout - Wrapper client pour gérer l'écran de chargement 3D
 * Ce composant est nécessaire car le layout principal est un Server Component
 */
export default function ClientLayout({ children }: ClientLayoutProps) {
  const { isLoading, progress } = useLoadingState(3000);

  return (
    <>
      <LoadingScreen isLoading={isLoading} progress={progress} />
      <div 
        className={`transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {children}
      </div>
    </>
  );
}