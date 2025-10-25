import { Users, Globe, Award, Heart, Lightbulb } from 'lucide-react';

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
    { number: '25+', label: 'Années d\'expérience' },
    { number: '54', label: 'Pays membres' },
    { number: '300M+', label: 'Francophones touchés' },
    { number: '150+', label: 'Projets réalisés' }
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
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              À propos d'Afric Links
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-white/90">
              FORUM SUR LA DIPLÔMATIE 
ÉCONOMIQUE INTER-AFRICAINE
ÉCONOMIQUE INTER-AFRICAINE
ÉCONOMIQUE INTER-AFRICAINE
CONOMIQUE INTER-AFRICAINE
CONOMIQUE INTER-AFRICAINE
CONOMIQUE INTER-AFRICAINE
ÉCONOMIQUE INTER-AFRICAINE - Promouvoir l'économie, la diversité culturelle, l'éducation et la coopération économique à l'échelle africaine.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Présentation
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Afric Links est un forum international dédié à la promotion de la diplomatie économique en Afrique. 
                Nous œuvrons pour renforcer les liens économiques, culturels et éducatifs entre les nations africaines.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Depuis notre création, nous œuvrons pour créer des ponts durables entre les nations africaines, 
                en favorisant les échanges économiques, culturels et éducatifs qui renforcent notre continent.
              </p>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-linear-to-br from-purple-100 to-yellow-100 rounded-2xl flex items-center justify-center">
                <Globe className="h-32 w-32 text-purple-600/30" />
              </div>
            </div>
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
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-linear-to-r ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
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
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
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
              Axes thématiques et panels programmés
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-purple-200 transform md:-translate-x-0.5" />
              
              {timeline.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-purple-600 rounded-full transform md:-translate-x-2 z-10" />
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className="bg-white border rounded-lg shadow-sm p-6">
                      <div className="text-2xl font-bold text-purple-600 mb-2">{event.year}</div>
                      <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
