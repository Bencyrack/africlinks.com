'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

export default function NewsSection() {
  const t = useTranslations('home.sections.news');
  const locale = useLocale();

  // Mock news data - in a real app, this would come from an API or CMS
  const news = [
    {
      id: 1,
      title: "Sommet de la Diplomatie Économique Africaine 2025",
      excerpt: "Les dirigeants africains se réunissent pour discuter des nouvelles stratégies de coopération économique et d'intégration régionale.",
      image: "/images/news/summit-2025.jpg",
      date: "2025-01-15",
      category: "Événements",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Nouveau programme de mobilité des enseignants",
      excerpt: "Lancement d'un programme innovant pour faciliter les échanges pédagogiques entre les universités africaines francophones.",
      image: "/images/news/education-program.jpg",
      date: "2025-01-10",
      category: "Éducation",
      readTime: "3 min"
    },
    {
      id: 3,
      title: "Prix littéraire de la Francophonie africaine",
      excerpt: "Découvrez les lauréats du prix littéraire qui célèbre la richesse de la littérature francophone africaine contemporaine.",
      image: "/images/news/literary-prize.jpg",
      date: "2025-01-08",
      category: "Culture",
      readTime: "4 min"
    }
  ];

  return (
    <section className="py-16 bg-background">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-linear-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                  <div className="text-6xl opacity-20">📰</div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                  <Clock className="h-4 w-4 ml-4 mr-2" />
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <Link
                  href={`/${locale}/news/${article.id}`}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Lire la suite
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href={`/${locale}/news`}
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Voir toutes les actualités
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
