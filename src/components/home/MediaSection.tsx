'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Play, Image as ImageIcon, FileText, ArrowRight, Download } from 'lucide-react';

export default function MediaSection() {
  const t = useTranslations('home.sections.media');
  const locale = useLocale();

  const mediaItems = [
    {
      id: 1,
      type: 'video',
      title: 'Sommet Économique Africain 2024',
      description: 'Highlights du sommet annuel réunissant les leaders économiques africains',
      thumbnail: '/images/media/summit-video.jpg',
      duration: '12:45',
      views: '15.2K'
    },
    {
      id: 2,
      type: 'gallery',
      title: 'Galerie: Échanges Culturels',
      description: 'Photos des événements culturels et échanges entre pays membres',
      thumbnail: '/images/media/cultural-gallery.jpg',
      count: '48 photos'
    },
    {
      id: 3,
      type: 'document',
      title: 'Rapport Annuel 2024',
      description: 'Bilan complet des activités et réalisations de l\'année écoulée',
      thumbnail: '/images/media/annual-report.jpg',
      size: '2.4 MB',
      downloads: '1.8K'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'video':
        return Play;
      case 'gallery':
        return ImageIcon;
      case 'document':
        return FileText;
      default:
        return FileText;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'video':
        return 'Vidéo';
      case 'gallery':
        return 'Galerie';
      case 'document':
        return 'Document';
      default:
        return 'Média';
    }
  };

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
          {mediaItems.map((item, index) => {
            const Icon = getIcon(item.type);
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-48 bg-linear-to-br from-muted to-muted/50 flex items-center justify-center">
                  <Icon className="h-16 w-16 text-muted-foreground/30" />
                  
                  {/* Type badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      {getTypeLabel(item.type)}
                    </span>
                  </div>
                  
                  {/* Play button for videos */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                        <Play className="h-8 w-8 text-white ml-1" />
                      </div>
                    </div>
                  )}
                  
                  {/* Download button for documents */}
                  {item.type === 'document' && (
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                        title="Télécharger le document"
                        aria-label="Télécharger le document"
                      >
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    {item.type === 'video' && (
                      <>
                        <span>{item.duration}</span>
                        <span>{item.views} vues</span>
                      </>
                    )}
                    {item.type === 'gallery' && (
                      <span>{item.count}</span>
                    )}
                    {item.type === 'document' && (
                      <>
                        <span>{item.size}</span>
                        <span>{item.downloads} téléchargements</span>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Media Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {[
            { icon: Play, title: 'Vidéothèque', count: '150+ vidéos', href: '/media/videos' },
            { icon: ImageIcon, title: 'Galeries Photo', count: '50+ galeries', href: '/media/photos' },
            { icon: FileText, title: 'Documents', count: '200+ documents', href: '/resources/documents' }
          ].map((category, index) => (
            <Link
              key={index}
              href={`/${locale}${category.href}`}
              className="flex items-center p-6 bg-muted/50 rounded-lg hover:bg-muted transition-colors group"
            >
              <category.icon className="h-8 w-8 text-primary mr-4" />
              <div>
                <h4 className="font-semibold group-hover:text-primary transition-colors">
                  {category.title}
                </h4>
                <p className="text-sm text-muted-foreground">{category.count}</p>
              </div>
              <ArrowRight className="h-5 w-5 ml-auto text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href={`/${locale}/media`}
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Explorer la médiathèque
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
