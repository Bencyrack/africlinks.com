'use client';

import Link from 'next/link';
import { ArrowRight, Calendar, Users, Globe, TrendingUp, Award, BookOpen } from 'lucide-react';

export default function HomePage() {
  const news = [
    {
      id: 1,
      title: "Sommet Économique Afrique-France 2025",
      date: "15 Mars 2025",
      category: "Événement",
      excerpt: "Plus de 500 dirigeants africains et français se réuniront à Brazzaville pour discuter des opportunités d'investissement.",
      image: "/images/stats-finance.jpg"
    },
    {
      id: 2,
      title: "Nouveau Programme de Bourses d'Études",
      date: "10 Mars 2025",
      category: "Éducation",
      excerpt: "Lancement d'un programme de 1000 bourses pour les étudiants africains francophones dans les universités partenaires.",
      image: "/images/about-team.jpg"
    },
    {
      id: 3,
      title: "Accord de Coopération Culturelle",
      date: "5 Mars 2025",
      category: "Culture",
      excerpt: "Signature d'un accord historique pour la promotion des arts et de la culture africaine francophone.",
      image: "/images/missions-handshake.jpg"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Zone de Libre-Échange Continentale",
      description: "Facilitation des échanges commerciaux entre 25 pays africains francophones",
      impact: "€2.5M d'investissements",
      icon: Globe,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Programme d'Excellence Académique",
      description: "Formation de 10,000 étudiants dans les domaines stratégiques",
      impact: "500+ bourses",
      icon: BookOpen,
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "Initiative Entrepreneuriat Jeunesse",
      description: "Soutien aux jeunes entrepreneurs avec mentorat et financement",
      impact: "150+ startups",
      icon: TrendingUp,
      color: "from-purple-500 to-purple-600"
    }
  ];

  const stats = [
    { number: "54", label: "Pays Membres", icon: Globe },
    { number: "300M+", label: "Francophones", icon: Users },
    { number: "150+", label: "Projets Réalisés", icon: Award },
    { number: "25+", label: "Années d'Expérience", icon: Calendar }
  ];

  const partners = [
    { name: "Organisation Internationale de la Francophonie", logo: "OIF" },
    { name: "Union Africaine", logo: "UA" },
    { name: "Banque Africaine de Développement", logo: "BAD" },
    { name: "UNESCO", logo: "UNESCO" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-purple-900/95 via-purple-800/90 to-yellow-600/85 z-10" />
        <div className="absolute inset-0 bg-[url('/images/hero-city.jpg')] bg-cover bg-center" />
        
        {/* Content */}
        <div className="container mx-auto px-4 text-center text-white relative z-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Forum International sur la<br />Diplomatie Économique
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Promouvoir l'économie, la diversité culturelle, l'éducation et la coopération économique à l'échelle africaine
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Link href="/missions" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all hover:scale-105 transform inline-flex items-center justify-center">
              Découvrir nos missions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded-lg transition-all inline-flex items-center justify-center">
              Nous contacter
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-linear-to-br from-purple-600 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-12 w-12 mx-auto mb-4 opacity-80" />
                <div className="text-5xl md:text-6xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Dernières Actualités</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Restez informé de nos dernières initiatives et événements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, _index) => (
              <article key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-48 bg-linear-to-br from-purple-400 to-yellow-400 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-purple-600">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {item.date}
                  </div>
                  <h3 className="text-xl font-bold mb-3 hover:text-purple-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <Link href={`/news/${item.id}`} className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700">
                    Lire la suite
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/news" className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all">
              Voir toutes les actualités
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Projets Phares</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez nos initiatives pour le développement économique africain
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, _index) => (
              <div key={project.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-xl bg-linear-to-r ${project.color} flex items-center justify-center mb-6`}>
                  <project.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div className="flex items-center justify-between pt-6 border-t">
                  <span className="text-sm font-semibold text-purple-600">{project.impact}</span>
                  <Link href={`/projects/${project.id}`} className="text-purple-600 hover:text-purple-700 font-semibold inline-flex items-center">
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects" className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all">
              Voir tous les projets
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nos Partenaires</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ensemble pour un développement durable de l'Afrique francophone
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">{partner.logo}</div>
                  <p className="text-sm text-gray-600">{partner.name}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/partners" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold text-lg">
              Découvrir tous nos partenaires
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-purple-600 to-yellow-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Rejoignez-nous dans notre mission
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Ensemble, construisons un avenir prospère pour l'Afrique francophone
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all inline-flex items-center justify-center">
              Devenir Partenaire
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/about" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded-lg transition-all inline-flex items-center justify-center">
              En savoir plus
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
