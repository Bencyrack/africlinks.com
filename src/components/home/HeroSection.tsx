'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const heroImages = [
  '/images/IMG-20251017-WA0098.jpg',
  '/images/IMG-20251017-WA0099.jpg',
  '/images/IMG-20251017-WA0100.jpg',
  '/images/IMG-20251017-WA0101.jpg',
  '/images/IMG-20251017-WA0104.jpg',
  '/images/IMG-20251017-WA0105.jpg',
  '/images/IMG-20251017-WA0106.jpg',
  '/images/IMG-20251017-WA0107.jpg',
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image Slider Background */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Afric Links - Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              quality={95}
              sizes="100vw"
            />
          </div>
        ))}
        {/* Overlay léger pour lisibilité du texte */}
        <div className="absolute inset-0 bg-linear-to-br from-purple-900/20 via-purple-800/15 to-transparent z-10" />
      </div>

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 md:p-4 rounded-full transition-all hover:scale-110"
        aria-label="Image précédente"
      >
        <ChevronLeft className="h-6 w-6 md:h-8 md:w-8 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 md:p-4 rounded-full transition-all hover:scale-110"
        aria-label="Image suivante"
      >
        <ChevronRight className="h-6 w-6 md:h-8 md:w-8 text-white" />
      </button>

      {/* Slider Indicators */}
      <div className="absolute bottom-24 md:bottom-32 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 md:h-3 rounded-full transition-all ${
              index === currentImageIndex
                ? 'bg-white w-8 md:w-12'
                : 'bg-white/50 hover:bg-white/75 w-2 md:w-3'
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute bottom-8 right-8 z-20 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
        {currentImageIndex + 1} / {heroImages.length}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Fond semi-transparent pour meilleure lisibilité */}
          <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-10 md:p-16 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 leading-tight text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.9)]"
            >
              <strong>Forum sur la Diplomatie Économique Interafricaine</strong>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            >
              <Link
                href="/missions"
                className="inline-flex items-center px-10 py-5 font-semibold rounded-full transition-all duration-300 group transform hover:scale-105"
                style={{
                  backgroundColor: '#FFC400',
                  color: '#1C355E'
                }}
              >
                <span className="text-lg">Découvrir nos missions</span>
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button 
                className="inline-flex items-center px-10 py-5 font-semibold rounded-full transition-all duration-300 group"
                style={{
                  border: '2px solid #1C355E',
                  color: '#1C355E',
                  backgroundColor: 'transparent'
                }}
              >
                <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="text-lg">Voir la vidéo</span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
