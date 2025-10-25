'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Building, Globe2, Users2, Award } from 'lucide-react';

export default function PartnersSection() {
  const t = useTranslations('home.sections.partners');
  const locale = useLocale();

  const partnerCategories = [
    {
      icon: Building,
      title: 'Gouvernements',
      count: '25+',
      description: 'Partenariats avec les gouvernements africains francophones',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Globe2,
      title: 'Organisations Internationales',
      count: '15+',
      description: 'Collaboration avec les institutions internationales',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Users2,
      title: 'Société Civile',
      count: '50+',
      description: 'Partenariats avec les ONG et associations',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Award,
      title: 'Secteur Privé',
      count: '30+',
      description: 'Collaborations avec les entreprises et fondations',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const featuredPartners = [
    {
      name: 'Union Africaine',
      type: 'Organisation Internationale',
      description: 'Partenariat stratégique pour le développement continental'
    },
    {
      name: 'Organisation Internationale de la Francophonie',
      type: 'Organisation Internationale',
      description: 'Coopération pour la promotion de la langue française'
    },
    {
      name: 'Banque Africaine de Développement',
      type: 'Institution Financière',
      description: 'Financement des projets de développement économique'
    },
    {
      name: 'UNESCO',
      type: 'Organisation Internationale',
      description: 'Programmes éducatifs et culturels conjoints'
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

        {/* Partner Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {partnerCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="h-8 w-8 text-white" />
              </div>
              
              <div className="text-2xl font-bold mb-2">{category.count}</div>
              <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Featured Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-heading font-bold text-center mb-8">
            Partenaires Stratégiques
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {partner.name}
                  </h4>
                  <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
                
                <div className="text-sm text-primary font-medium mb-2">
                  {partner.type}
                </div>
                
                <p className="text-muted-foreground text-sm">
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Pourquoi Devenir Partenaire ?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Rejoignez notre réseau de partenaires et contribuez au développement économique de l'Afrique francophone
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Impact Régional',
                description: 'Participez à des projets qui transforment les communautés africaines'
              },
              {
                title: 'Réseau Étendu',
                description: 'Accédez à un vaste réseau de contacts professionnels et institutionnels'
              },
              {
                title: 'Visibilité Internationale',
                description: 'Bénéficiez d\'une reconnaissance à l\'échelle continentale et internationale'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href={`/${locale}/partners`}
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors mr-4"
          >
            Découvrir nos partenaires
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Devenir partenaire
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
