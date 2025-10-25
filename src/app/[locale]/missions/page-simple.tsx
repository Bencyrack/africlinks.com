import Link from 'next/link';
import { Briefcase, GraduationCap, Palette, Handshake } from 'lucide-react';

export default function MissionsPage() {
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

      {/* Missions Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {missions.map((mission, index) => (
              <div
                key={index}
                className="bg-white border rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Icon and Title */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`shrink-0 w-16 h-16 rounded-xl bg-linear-to-r ${mission.color} flex items-center justify-center`}>
                    <mission.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{mission.title}</h2>
                    <p className="text-gray-600">{mission.description}</p>
                  </div>
                </div>

                {/* Details */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3 text-gray-900">Nos Actions :</h3>
                  <ul className="space-y-2">
                    {mission.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <svg className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                  {Object.entries(mission.stats).map(([key, value], idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-600 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Afric Links aspire à créer un espace économique, éducatif et culturel intégré en Afrique francophone, 
              où les frontières ne sont plus des obstacles mais des ponts vers la prospérité commune.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-4xl font-bold text-purple-600 mb-2">2030</div>
                <p className="text-gray-600">Objectif de développement durable</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-4xl font-bold text-purple-600 mb-2">54</div>
                <p className="text-gray-600">Pays membres de l'OIF</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-4xl font-bold text-purple-600 mb-2">300M+</div>
                <p className="text-gray-600">Francophones dans le monde</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-purple-600 to-yellow-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Rejoignez Notre Mission
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Ensemble, construisons un avenir prospère pour l'Afrique francophone
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Nous Contacter
              </Link>
              <Link
                href="/about"
                className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors"
              >
                En Savoir Plus
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
