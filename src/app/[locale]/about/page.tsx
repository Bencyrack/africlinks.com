'use client';

import { Users, Globe, Award, Heart, Lightbulb, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

// Hook pour détecter si un élément est visible
function useInView(ref: React.RefObject<HTMLDivElement | null>) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return isInView;
}

// Composant pour animer les compteurs
function AnimatedCounter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return <div ref={ref}>{count}{suffix}</div>;
}

export default function AboutPage() {
  const values = [
    {
      icon: Users,
      title: 'Coopération',
      description: 'Favoriser la collaboration entre les nations africaines pour un développement harmonieux et durable.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Lightbulb,
      title: 'Éducation',
      description: 'Promouvoir l\'excellence éducative et la mobilité académique à travers le continent.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Heart,
      title: 'Diversité',
      description: 'Célébrer et valoriser la richesse culturelle et linguistique de l\'Afrique francophone.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Encourager l\'innovation et l\'entrepreneuriat pour stimuler la croissance économique.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const stats = [
    { number: 25, label: 'Années d\'expérience', suffix: '+' },
    { number: 54, label: 'Pays membres', suffix: '' },
    { number: 300, label: 'Millions de francophones', suffix: 'M+' },
    { number: 150, label: 'Projets réalisés', suffix: '+' }
  ];

  const timeline = [
    {
      year: 'Panel 1',
      title: 'Sport, Culture et Diplomâtie',
      description: 'CAN 2025, Coupe du Monde 2030, JOJ Dakar 2026'
    },
    {
      year: 'Panel 2',
      title: 'Immobilier et financement structuré',
      description: 'Quelles solutions pour les métropoles africaines ?'
    },
    {
      year: 'Panel 3',
      title: 'Numérique, Start-ups et intelligence artificielle',
      description: 'Leviers d’intégration et d’innovation industrielle'
    },
    {
      year: 'Panel 4',
      title: 'Chaînes de valeur et investissements en Afrique',
      description: 'Comment capter plus d’investissements productifs'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-linear-to-br from-purple-600 via-purple-700 to-yellow-500 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Fond semi-transparent pour meilleure lisibilité */}
            <div className="bg-black/50 backdrop-blur-md rounded-3xl p-10 md:p-16 text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.9)] leading-tight">
                Forum sur la Diplomatie Économique Interafricaine
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] mx-auto max-w-5xl font-medium">
                THÈME DE CETTE ÉDITION :
 B TO B DANS LE SECTEUR DE LA FINANCE 
À CASABLANCA, UNE DES PLACES 
FINANCIÈRES LES PLUS ATTRACTIVES 
EN AFRIQUE </p>
            </div>
          </div>
        </div>
      </section>
     
      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                PRESENTATION DU FORUM
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
           <strong>Afric Links est un forum stratégique sur la Diplômatie économique 
           interafricaine, organisé par Kalimo Consulting Group. Il vise à catalyser des synergies 
           économiques concrètes entre le Maroc, pays hôte de cette édition, et les pays d’Afrique de l’Ouest, 
           en s’appuyant sur un contexte favorable de mobilisation régionale, à l’occasion de la CAN 2025.</strong>  </p>
           <h1>Objectifs</h1>
           <p className="text-lg text-gray-600 leading-relaxed mb-6">
            <strong>L’objectif central de ce forum est de structurer une plateforme ouest-africaine de coopération économique à fort 
impact avec les pays de la sous-région et le Maroc, en connectant les acteurs publics, privés et 
institutionnels autour de projets concrets. Le forum se positionne comme un levier de convergence 
B to B et B to G dans des domaines stratégiques : intégration économique africaine, attractivité des 
investissements, chaînes de valeur industrielles, innovation et souveraineté productive </strong> </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                <strong>Ce forum se veut une plateforme panafricaine de dialogue et de business, en marge de la CAN 2025, nous œuvrons pour créer des ponts durables entre les nations africaines, </strong> 
                <strong>en favorisant les échanges économiques, culturels et éducatifs qui renforcent notre continent.</strong>
              </p>
              
              {/* Points clés */}
              <div className="space-y-3">
                {[
                  'L’économie du sport (CAN 2025, JOJ 2026, Coupe du Monde 2030)',
                  'L’immobilier et le financement structuré',
                  'Le numérique et l’intelligence artificielle',
                  'Les chaînes de valeur et investissements productifs en Afrique'
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                    <span className="text-gray-700 font-medium">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-full h-96 bg-linear-to-br from-purple-100 to-yellow-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <Globe className="h-32 w-32 text-purple-600/30" />
                </motion.div>
                
                {/* Cercles décoratifs */}
                <motion.div
                  className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-500/20 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos Valeurs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Les principes fondamentaux qui guident notre action quotidienne
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 text-center group"
              >
                <motion.div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-linear-to-r ${value.color} flex items-center justify-center`}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <value.icon className="h-8 w-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-600 transition-colors">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Notre Impact en Chiffres
            </h2>
            <p className="text-xl text-white/90">
              Des résultats concrets au service du développement africain
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Axes thématiques et panels programmés
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-purple-200 transform md:-translate-x-0.5" />
              
              {timeline.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="absolute left-4 md:left-1/2 w-4 h-4 bg-purple-600 rounded-full transform md:-translate-x-2 z-10"
                  >
                    <motion.div
                      className="absolute inset-0 bg-purple-400 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </motion.div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg p-6 transition-shadow duration-300"
                    >
                      <motion.div
                        className="text-2xl font-bold text-purple-600 mb-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                      >
                        {event.year}
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
