'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Globe, BookOpen, Briefcase } from 'lucide-react';

export default function ProjectsSection() {
  const t = useTranslations('home.sections.projects');
  const locale = useLocale();

  const projects = [
    {
      id: 1,
      title: "Programme de Mobilité Éducative",
      description: "Faciliter les échanges d'enseignants et d'étudiants entre les universités africaines francophones pour renforcer la coopération académique.",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600",
      stats: "150+ échanges",
      countries: 12
    },
    {
      id: 2,
      title: "Initiative Égalité Femmes-Hommes",
      description: "Promouvoir l'égalité des genres dans les secteurs économiques et éducatifs à travers des programmes de formation et de mentorat.",
      icon: Users,
      color: "from-purple-500 to-purple-600",
      stats: "5000+ bénéficiaires",
      countries: 8
    },
    {
      id: 3,
      title: "Missions Économiques Transfrontalières",
      description: "Développer les relations commerciales et les investissements entre les pays membres pour stimuler la croissance économique régionale.",
      icon: Briefcase,
      color: "from-green-500 to-green-600",
      stats: "€2.5M investis",
      countries: 15
    },
    {
      id: 4,
      title: "Jeux de la Francophonie Africaine",
      description: "Organiser des événements culturels et sportifs pour célébrer la diversité et renforcer les liens entre les communautés francophones.",
      icon: Globe,
      color: "from-orange-500 to-orange-600",
      stats: "20+ événements",
      countries: 10
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} text-white`}>
                  <project.icon className="h-6 w-6" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="font-medium">{project.stats}</span>
                      <span>•</span>
                      <span>{project.countries} pays</span>
                    </div>
                    
                    <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Découvrir tous nos projets
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
