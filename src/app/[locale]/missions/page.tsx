'use client';

import { Briefcase, GraduationCap, Palette, Handshake, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function MissionsPage() {
  const [expandedMission, setExpandedMission] = useState<number | null>(0);

  const missions = [
    {
      icon: Briefcase,
      title: 'Diplomatie Économique',
      description: 'Promouvoir les échanges économiques et les investissements entre les pays membres.',
      color: 'from-blue-500 to-blue-600',
      details: [
        'Facilitation des échanges commerciaux transfrontaliers',
        'Promotion des investissements directs étrangers',
        'Développement de zones économiques spéciales',
        'Harmonisation des politiques économiques régionales'
      ],
      stats: { projects: '45+', countries: '18', investment: '€2.5M' }
    },
    {
      icon: GraduationCap,
      title: 'Éducation et Formation',
      description: 'Développer l\'excellence éducative et la mobilité académique à travers le continent.',
      color: 'from-green-500 to-green-600',
      details: [
        'Programmes d\'échange d\'enseignants et d\'étudiants',
        'Harmonisation des cursus universitaires',
        'Formation professionnelle transfrontalière',
        'Bourses d\'études et de recherche'
      ],
      stats: { exchanges: '150+', universities: '25', scholarships: '500+' }
    },
    {
      icon: Palette,
      title: 'Culture et Diversité',
      description: 'Valoriser la richesse culturelle et linguistique de l\'Afrique francophone.',
      color: 'from-purple-500 to-purple-600',
      details: [
        'Organisation de festivals culturels régionaux',
        'Préservation du patrimoine francophone africain',
        'Promotion des arts et de la littérature',
        'Échanges culturels entre communautés'
      ],
      stats: { events: '30+', artists: '200+', heritage: '50+' }
    },
    {
      icon: Handshake,
      title: 'Coopération Internationale',
      description: 'Faciliter les partenariats stratégiques et la coopération entre nations.',
      color: 'from-orange-500 to-orange-600',
      details: [
        'Médiation dans les conflits économiques',
        'Négociation d\'accords commerciaux',
        'Coordination des politiques régionales',
        'Partenariats public-privé'
      ],
      stats: { agreements: '60+', partners: '100+', projects: '75+' }
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
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nos Missions
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-white/90">
              Quatre piliers fondamentaux pour le développement de l'Afrique francophone
            </p>
          </div>
        </div>
      </section>

      {/* Main Missions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-6">
            {missions.map((mission, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
              >
                {/* Header - Cliquable */}
                <motion.button
                  onClick={() => setExpandedMission(expandedMission === index ? null : index)}
                  className="w-full p-6 md:p-8 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className={`p-4 rounded-xl bg-linear-to-r ${mission.color} text-white`}
                      animate={{
                        rotate: expandedMission === index ? 360 : 0,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <mission.icon className="h-8 w-8" />
                    </motion.div>
                    <div className="text-left">
                      <h2 className="text-2xl md:text-3xl font-bold mb-1">
                        {mission.title}
                      </h2>
                      <p className="text-gray-600">{mission.description}</p>
                    </div>
                  </div>
                  
                  <motion.div
                    animate={{
                      rotate: expandedMission === index ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-6 w-6 text-gray-400" />
                  </motion.div>
                </motion.button>
                
                {/* Content - Accordéon */}
                <AnimatePresence>
                  {expandedMission === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 md:p-8 pt-0 border-t border-gray-100">
                        {/* Détails */}
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold mb-4">Actions clés :</h3>
                          <div className="space-y-3">
                            {mission.details.map((detail, detailIndex) => (
                              <motion.div
                                key={detailIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: detailIndex * 0.1 }}
                                className="flex items-start"
                              >
                                <div className={`w-2 h-2 rounded-full mt-2 mr-3 shrink-0 bg-linear-to-r ${mission.color}`} />
                                <span className="text-gray-700">{detail}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Statistics */}
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Impact en chiffres :</h3>
                          <div className="grid grid-cols-3 gap-4">
                            {Object.entries(mission.stats).map(([key, value], statIndex) => (
                              <motion.div
                                key={key}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: statIndex * 0.1 }}
                                className="text-center p-4 bg-linear-to-br from-gray-50 to-gray-100 rounded-xl hover:shadow-md transition-shadow"
                              >
                                <div className={`text-2xl md:text-3xl font-bold mb-1 bg-linear-to-r ${mission.color} bg-clip-text text-transparent`}>
                                  {value}
                                </div>
                                <div className="text-xs md:text-sm text-gray-600 font-medium capitalize">
                                  {key}
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}