import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Users, Globe, TrendingUp, Award, BookOpen } from 'lucide-react';
import HeroSection from '@/components/home/HeroSection';

export default function HomePage() {

    const news = [
    {
      id: 1,
      title: "Sommet Économique Afrique-France 2025",
      date: "15 Mars 2025",
      category: "Événement",
      excerpt: "Plus de 500 dirigeants africains et français se réuniront à Brazzaville pour discuter des opportunités d'investissement.",
      image: "/images/IMG-20251017-WA0104.jpg"
    },
    {
      id: 2,
      title: "Nouveau Programme de Bourses d'Études",
      date: "10 Mars 2025",
      category: "Éducation",
      excerpt: "Lancement d'un programme de 1000 bourses pour les étudiants africains francophones dans les universités partenaires.",
      image: "/images/IMG-20251017-WA0105.jpg"
    },
    {
      id: 3,
      title: "Accord de Coopération Culturelle",
      date: "5 Mars 2025",
      category: "Culture",
      excerpt: "Signature d'un accord historique pour la promotion des arts et de la culture africaine francophone.",
      image: "/images/IMG-20251017-WA0106.jpg"
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
      {/* Hero Section with Slider */}
      <HeroSection />

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
                <div className="text-5xl md:text-6xl font-bold mb-2 animate-count-up">{stat.number}</div>
                <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section - Largeur réduite et centrée */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Décor de fond subtil */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* En-tête de section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4 px-6 py-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full border-2 border-purple-200 shadow-sm">
              <span className="text-3xl">📰</span>
              <span className="text-purple-700 font-bold text-sm uppercase tracking-wider">Actualités</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-3 bg-linear-to-r from-purple-600 via-blue-600 to-yellow-500 bg-clip-text text-transparent leading-tight">
              Dernières Actualités
            </h2>
            {/* Ligne décorative */}
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-yellow-500 mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Découvrez nos dernières initiatives et événements
            </p>
          </div>
          
          {/* Grille d'actualités - Largeur réduite à 75% */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {news.map((item, index) => (
              <article 
                key={item.id} 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-200 hover:border-purple-400 flex flex-col transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image Container - Ratio 16:9 pour format horizontal */}
                <div className="relative w-full aspect-video overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index < 2}
                  />
                  {/* Gradient Overlay pour contraste optimal */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wide shadow-xl backdrop-blur-sm">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                      {item.category}
                    </span>
                  </div>
                  
                  {/* Date Badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white bg-black/40 backdrop-blur-md px-3 py-2 rounded-lg">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-semibold">{item.date}</span>
                    </div>
                  </div>
                </div>

                {/* Content Container */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base mb-5 line-clamp-3 leading-relaxed flex-1">
                    {item.excerpt}
                  </p>
                  
                  {/* Séparateur et CTA */}
                  <div className="border-t-2 border-gray-100 pt-4 mt-auto">
                    <Link 
                      href={`/news/${item.id}`} 
                      className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-bold text-sm hover:gap-3 transition-all group/link"
                    >
                      <span>Lire la suite</span>
                      <ArrowRight className="h-5 w-5 group-hover/link:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA principal */}
          <div className="text-center mt-12">
            <Link 
              href="/news" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-blue-600 to-yellow-500 hover:from-purple-700 hover:via-blue-700 hover:to-yellow-600 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-105 hover:gap-3"
            >
              <span>Voir toutes les actualités</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section - Optimisée */}
      <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          {/* En-tête de section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full border-2 border-yellow-200 shadow-sm">
              <span className="text-3xl">🚀</span>
              <span className="text-orange-700 font-bold text-sm uppercase tracking-wider">Projets</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-linear-to-r from-purple-600 via-blue-600 to-yellow-500 bg-clip-text text-transparent leading-tight">
              Projets Phares
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos initiatives stratégiques pour le développement économique et social de l'Afrique francophone
            </p>
          </div>
          
          {/* Grille de projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-gray-200 hover:border-purple-400 relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Décor de fond */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-purple-100 to-yellow-100 rounded-bl-full opacity-40 group-hover:opacity-70 transition-opacity" />
                
                {/* Icône du projet */}
                <div className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <project.icon className="h-12 w-12 text-white" />
                </div>
                
                {/* Titre */}
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-yellow-500 transition-all leading-tight min-h-[4rem]">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed text-base min-h-[5rem]">
                  {project.description}
                </p>
                
                {/* Séparateur et actions */}
                <div className="border-t-2 border-gray-100 pt-6 mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 bg-gradient-to-r from-green-50 to-blue-50 px-3 py-2 rounded-lg border border-green-100">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm font-bold text-purple-600">{project.impact}</span>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/projects/${project.id}`} 
                    className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-bold text-sm hover:gap-3 transition-all group/link"
                  >
                    <span>Découvrir le projet</span>
                    <ArrowRight className="h-5 w-5 group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-blue-600 to-yellow-500 hover:from-purple-700 hover:via-blue-700 hover:to-yellow-600 text-white font-bold py-5 px-10 rounded-2xl transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 hover:gap-4"
            >
              <span className="text-lg">Voir tous les projets</span>
              <ArrowRight className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section - Optimisée */}
      <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* En-tête de section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border-2 border-blue-200 shadow-sm">
              <span className="text-3xl">🤝</span>
              <span className="text-blue-700 font-bold text-sm uppercase tracking-wider">Partenaires</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-linear-to-r from-purple-600 via-blue-600 to-yellow-500 bg-clip-text text-transparent leading-tight">
              Nos Partenaires
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ensemble pour un développement durable et inclusif de l'Afrique francophone
            </p>
          </div>
          
          {/* Grille de partenaires */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl p-8 flex items-center justify-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border-2 border-gray-200 hover:border-purple-400"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-center">
                  <div className="text-6xl font-bold bg-linear-to-r from-purple-600 via-blue-600 to-yellow-500 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform">
                    {partner.logo}
                  </div>
                  <p className="text-xs text-gray-600 font-semibold leading-tight">{partner.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link 
              href="/partners" 
              className="inline-flex items-center gap-3 text-purple-600 hover:text-purple-700 font-bold text-lg group bg-gradient-to-r from-purple-50 to-blue-50 px-8 py-4 rounded-2xl border-2 border-purple-200 hover:border-purple-400 transition-all hover:shadow-lg"
            >
              <span>Découvrir tous nos partenaires</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-linear-to-br from-purple-600 via-purple-700 to-yellow-500 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="font-semibold text-sm">✨ REJOIGNEZ-NOUS</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">
              Rejoignez-nous dans notre mission
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)] font-medium">
              Ensemble, construisons un avenir prospère, inclusif et durable pour l'Afrique francophone
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="group bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-xl transition-all inline-flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:scale-105">
                <span>Devenir Partenaire</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/about" className="group bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-10 rounded-xl transition-all inline-flex items-center justify-center backdrop-blur-sm">
                <span>En savoir plus</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
