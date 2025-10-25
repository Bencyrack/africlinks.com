'use client';

import { useState, useEffect } from 'react';

/**
 * Hook personnalisé pour gérer l'état de chargement avec progression
 * @param minDuration - Durée minimale d'affichage du loading screen en ms (par défaut 2000ms)
 * @returns Object contenant isLoading (boolean) et progress (number 0-100)
 */
export function useLoadingState(minDuration = 2000) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simuler la progression du chargement
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Incrémentation aléatoire pour un effet plus naturel
        return prev + Math.random() * 15;
      });
    }, 200);

    // Timer pour la durée minimale
    const minTimer = setTimeout(() => {
      if (progress >= 100) {
        setIsLoading(false);
      }
    }, minDuration);

    // Gérer l'événement de chargement complet de la page
    const handleLoad = () => {
      setProgress(100);
      setTimeout(() => setIsLoading(false), 500);
    };

    // Vérifier si la page est déjà chargée
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Nettoyage
    return () => {
      clearInterval(progressInterval);
      clearTimeout(minTimer);
      window.removeEventListener('load', handleLoad);
    };
  }, [minDuration, progress]);

  return { isLoading, progress };
}