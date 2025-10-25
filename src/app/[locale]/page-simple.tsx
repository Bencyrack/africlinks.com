'use client';

import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('home');
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-linear-to-br from-purple-600 via-purple-700 to-yellow-500">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
            {t('hero.subtitle')}
          </p>
          <button className="btn btn-secondary btn-lg animate-fade-in-up delay-300">
            {t('hero.cta')}
          </button>
        </div>
      </section>

      {/* News Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('sections.news.title')}</h2>
            <p className="section-subtitle">{t('sections.news.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card">
                <div className="card-body">
                  <h3 className="text-xl font-bold mb-2">Actualité {i}</h3>
                  <p className="text-gray-600">Description de l'actualité...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('sections.projects.title')}</h2>
            <p className="section-subtitle">{t('sections.projects.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card">
                <div className="card-body">
                  <h3 className="text-xl font-bold mb-2">Projet {i}</h3>
                  <p className="text-gray-600">Description du projet...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('sections.partners.title')}</h2>
            <p className="section-subtitle">{t('sections.partners.subtitle')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="card text-center">
                <div className="card-body">
                  <p className="text-gray-600">Partenaire {i}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
