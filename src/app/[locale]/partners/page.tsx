import { Building, Globe2, Users2, Award, ExternalLink, Mail, Phone } from 'lucide-react';

interface Partner {
  id: string;
  name: string;
  type: 'government' | 'international' | 'ngo' | 'private';
  description: string;
  website?: string;
  email?: string;
  phone?: string;
  logo?: string;
  established?: string;
  headquarters: string;
  projects: number;
}

// Données de démonstration
const mockPartners: Partner[] = [
  {
    id: '1',
    name: 'Union Africaine',
    type: 'international',
    description: 'Organisation continentale composée de 55 États membres africains, œuvrant pour l\'intégration politique et économique de l\'Afrique.',
    website: 'https://au.int',
    email: 'info@africa-union.org',
    headquarters: 'Addis-Abeba, Éthiopie',
    established: '2001',
    projects: 25
  },
  {
    id: '2',
    name: 'Organisation Internationale de la Francophonie',
    type: 'international',
    description: 'Institution vouée à promouvoir la langue française et les valeurs qu\'elle véhicule dans le monde.',
    website: 'https://www.francophonie.org',
    email: 'contact@francophonie.org',
    headquarters: 'Paris, France',
    established: '1970',
    projects: 18
  },
  {
    id: '3',
    name: 'Banque Africaine de Développement',
    type: 'international',
    description: 'Institution financière multilatérale de développement dédiée au développement économique et au progrès social en Afrique.',
    website: 'https://www.afdb.org',
    email: 'afdb@afdb.org',
    headquarters: 'Abidjan, Côte d\'Ivoire',
    established: '1964',
    projects: 32
  },
  {
    id: '4',
    name: 'UNESCO',
    type: 'international',
    description: 'Agence spécialisée de l\'ONU pour l\'éducation, la science et la culture, favorisant la coopération internationale.',
    website: 'https://www.unesco.org',
    email: 'bpi@unesco.org',
    headquarters: 'Paris, France',
    established: '1945',
    projects: 15
  },
  {
    id: '5',
    name: 'Gouvernement du Sénégal',
    type: 'government',
    description: 'Partenaire stratégique d\'Afric Links, le Sénégal accueille le siège de l\'organisation et soutient activement ses initiatives.',
    website: 'https://www.gouv.sn',
    email: 'contact@gouv.sn',
    headquarters: 'Dakar, Sénégal',
    established: '1960',
    projects: 28
  },
  {
    id: '6',
    name: 'Fondation Gates',
    type: 'private',
    description: 'Fondation philanthropique privée axée sur l\'amélioration de la santé mondiale et la réduction de l\'extrême pauvreté.',
    website: 'https://www.gatesfoundation.org',
    email: 'info@gatesfoundation.org',
    headquarters: 'Seattle, États-Unis',
    established: '2000',
    projects: 12
  }
];

const partnerTypes = [
  { key: 'government', label: 'Gouvernements', icon: Building, color: 'from-blue-500 to-blue-600' },
  { key: 'international', label: 'Organisations Internationales', icon: Globe2, color: 'from-green-500 to-green-600' },
  { key: 'ngo', label: 'Société Civile', icon: Users2, color: 'from-purple-500 to-purple-600' },
  { key: 'private', label: 'Secteur Privé', icon: Award, color: 'from-orange-500 to-orange-600' }
];

export default function PartnersPage() {
  const getPartnersByType = (type: string) => {
    return mockPartners.filter(partner => partner.type === type);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 bg-linear-to-br from-primary-600 via-secondary-600 to-accent-purple text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-yellow/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Nos Partenaires
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-white/90 mb-8">
              Ensemble pour un développement économique durable de l&apos;Afrique francophone
            </p>
            
            {/* Statistiques des partenariats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {partnerTypes.map((type, _index) => {
                const count = getPartnersByType(type.key).length;
                return (
                  <div key={type.key} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold mb-1">{count}+</div>
                    <div className="text-sm text-white/80">{type.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Types de partenaires */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-purple-600 to-yellow-500 bg-clip-text text-transparent">
              Types de Partenariats
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Afric Links collabore avec différents types d&apos;organisations pour maximiser son impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerTypes.map((type) => {
              const partners = getPartnersByType(type.key);
              const totalProjects = partners.reduce((sum, partner) => sum + partner.projects, 0);
              
              return (
                <div 
                  key={type.key} 
                  className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center group hover:border-purple-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`w-24 h-24 mx-auto mb-6 rounded-2xl bg-linear-to-br ${type.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <type.icon className="h-12 w-12 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{type.label}</h3>
                  
                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4">
                      <div className="text-4xl font-bold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1">
                        {partners.length}
                      </div>
                      <div className="text-sm font-semibold text-gray-600">Partenaires</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-3">
                      <div className="text-2xl font-bold text-orange-600 mb-1">{totalProjects}</div>
                      <div className="text-xs font-medium text-gray-600">projets communs</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Liste des partenaires par catégorie */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {partnerTypes.map((type) => {
            const partners = getPartnersByType(type.key);
            if (partners.length === 0) return null;

            return (
              <div key={type.key} className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-lg bg-linear-to-r ${type.color} text-white`}>
                    <type.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold">{type.label}</h2>
                  <span className="text-muted-foreground">({partners.length})</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {partners.map((partner) => (
                    <div
                      key={partner.id}
                      className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-16 h-16 bg-linear-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center">
                          <Building className="h-8 w-8 text-muted-foreground" />
                        </div>
                        {partner.website && (
                          <a
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-muted-foreground hover:text-primary transition-colors"
                            title="Site web"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>

                      <h3 className="text-lg font-semibold mb-2">{partner.name}</h3>
                      
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {partner.description}
                      </p>

                      <div className="space-y-2 text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Building className="h-3 w-3" />
                          <span>{partner.headquarters}</span>
                        </div>
                        {partner.established && (
                          <div className="flex items-center gap-2">
                            <Award className="h-3 w-3" />
                            <span>Fondé en {partner.established}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <Users2 className="h-3 w-3" />
                          <span>{partner.projects} projets communs</span>
                        </div>
                      </div>

                      {(partner.email || partner.phone) && (
                        <div className="border-t pt-4 space-y-2">
                          {partner.email && (
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Mail className="h-3 w-3" />
                              <a href={`mailto:${partner.email}`} className="hover:text-primary transition-colors">
                                {partner.email}
                              </a>
                            </div>
                          )}
                          {partner.phone && (
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Phone className="h-3 w-3" />
                              <a href={`tel:${partner.phone}`} className="hover:text-primary transition-colors">
                                {partner.phone}
                              </a>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Rejoignez Notre Réseau de Partenaires
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ensemble, nous pouvons créer un impact durable pour le développement de l&apos;Afrique francophone
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors">
              Devenir Partenaire
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors">
              Télécharger la Brochure
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">130+</div>
              <div className="text-white/80">Partenaires actifs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">€50M</div>
              <div className="text-white/80">Investissements conjoints</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">25</div>
              <div className="text-white/80">Pays couverts</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
