'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Calendar, MapPin, Users, DollarSign, Clock, Search, ArrowRight, CheckCircle, AlertCircle, Play } from 'lucide-react';
import '@/styles/progress-bars.css';

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  status: 'planning' | 'active' | 'completed' | 'suspended';
  category: string;
  startDate: string;
  endDate?: string;
  budget: number;
  countries: string[];
  beneficiaries: number;
  progress: number;
  featured: boolean;
  images: string[];
  partners: string[];
}

// Données de démonstration
const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Programme de Mobilité Éducative Transfrontalière',
    description: 'Faciliter les échanges d\'enseignants et d\'étudiants entre les universités africaines francophones pour renforcer la coopération académique.',
    fullDescription: 'Ce programme ambitieux vise à créer un réseau d\'excellence académique entre les universités africaines francophones...',
    status: 'active',
    category: 'Éducation',
    startDate: '2023-09-01',
    endDate: '2026-08-31',
    budget: 2500000,
    countries: ['Sénégal', 'Côte d\'Ivoire', 'Mali', 'Burkina Faso', 'Niger'],
    beneficiaries: 15000,
    progress: 65,
    featured: true,
    images: ['/images/projects/education-1.jpg', '/images/projects/education-2.jpg'],
    partners: ['UNESCO', 'AUF', 'Banque Mondiale']
  },
  {
    id: '2',
    title: 'Initiative Égalité Femmes-Hommes en Afrique',
    description: 'Promouvoir l\'égalité des genres dans les secteurs économiques et éducatifs à travers des programmes de formation et de mentorat.',
    fullDescription: 'Cette initiative révolutionnaire met l\'accent sur l\'autonomisation des femmes africaines...',
    status: 'active',
    category: 'Égalité des genres',
    startDate: '2024-01-15',
    endDate: '2027-01-14',
    budget: 1800000,
    countries: ['Cameroun', 'Gabon', 'Tchad', 'RCA', 'Congo'],
    beneficiaries: 8500,
    progress: 40,
    featured: true,
    images: ['/images/projects/gender-1.jpg', '/images/projects/gender-2.jpg'],
    partners: ['ONU Femmes', 'BAD', 'USAID']
  },
  {
    id: '3',
    title: 'Missions Économiques Transfrontalières',
    description: 'Développer les relations commerciales et les investissements entre les pays membres pour stimuler la croissance économique régionale.',
    fullDescription: 'Ces missions économiques stratégiques visent à créer des ponts commerciaux durables...',
    status: 'active',
    category: 'Économie',
    startDate: '2023-03-01',
    endDate: '2025-12-31',
    budget: 3200000,
    countries: ['Maroc', 'Tunisie', 'Algérie', 'Mauritanie'],
    beneficiaries: 25000,
    progress: 78,
    featured: false,
    images: ['/images/projects/economy-1.jpg', '/images/projects/economy-2.jpg'],
    partners: ['CEDEAO', 'Union Africaine', 'FMI']
  },
  {
    id: '4',
    title: 'Jeux de la Francophonie Africaine 2025',
    description: 'Organiser des événements culturels et sportifs pour célébrer la diversité et renforcer les liens entre les communautés francophones.',
    fullDescription: 'Les Jeux de la Francophonie Africaine représentent le plus grand événement culturel et sportif...',
    status: 'planning',
    category: 'Culture & Sport',
    startDate: '2025-07-01',
    endDate: '2025-07-15',
    budget: 5000000,
    countries: ['Sénégal', 'Mali', 'Guinée', 'Mauritanie'],
    beneficiaries: 50000,
    progress: 25,
    featured: true,
    images: ['/images/projects/games-1.jpg', '/images/projects/games-2.jpg'],
    partners: ['OIF', 'CIO', 'Gouvernement du Sénégal']
  },
  {
    id: '5',
    title: 'Préservation du Patrimoine Culturel Africain',
    description: 'Initiative de sauvegarde et de valorisation du patrimoine culturel matériel et immatériel des pays africains francophones.',
    fullDescription: 'Ce projet de préservation culturelle vise à documenter, protéger et promouvoir...',
    status: 'completed',
    category: 'Culture',
    startDate: '2021-01-01',
    endDate: '2023-12-31',
    budget: 1200000,
    countries: ['Bénin', 'Togo', 'Burkina Faso', 'Mali'],
    beneficiaries: 12000,
    progress: 100,
    featured: false,
    images: ['/images/projects/heritage-1.jpg', '/images/projects/heritage-2.jpg'],
    partners: ['UNESCO', 'Union Africaine', 'Fondation Ford']
  },
  {
    id: '6',
    title: 'Innovation Numérique pour l\'Agriculture',
    description: 'Développement de solutions technologiques innovantes pour moderniser l\'agriculture africaine et améliorer la sécurité alimentaire.',
    fullDescription: 'Ce projet révolutionnaire combine technologie de pointe et savoir-faire agricole traditionnel...',
    status: 'active',
    category: 'Innovation',
    startDate: '2024-06-01',
    endDate: '2026-05-31',
    budget: 2800000,
    countries: ['Rwanda', 'Burundi', 'RDC', 'Madagascar'],
    beneficiaries: 35000,
    progress: 30,
    featured: false,
    images: ['/images/projects/agritech-1.jpg', '/images/projects/agritech-2.jpg'],
    partners: ['FAO', 'Banque Mondiale', 'Gates Foundation']
  }
];

const categories = ['Tous', 'Éducation', 'Égalité des genres', 'Économie', 'Culture & Sport', 'Culture', 'Innovation'];
const statusOptions = ['Tous', 'En planification', 'Actif', 'Terminé', 'Suspendu'];

export default function ProjectsPage() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'fr'; // Extraire le locale du pathname
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedStatus, setSelectedStatus] = useState('Tous');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'planning': return 'En planification';
      case 'active': return 'Actif';
      case 'completed': return 'Terminé';
      case 'suspended': return 'Suspendu';
      default: return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'planning': return 'bg-yellow-100 text-yellow-700';
      case 'active': return 'bg-green-100 text-green-700';
      case 'completed': return 'bg-blue-100 text-blue-700';
      case 'suspended': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'planning': return <Clock className="h-4 w-4" />;
      case 'active': return <Play className="h-4 w-4" />;
      case 'completed': return <CheckCircle className="h-4 w-4" />;
      case 'suspended': return <AlertCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const filteredProjects = mockProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.countries.some(country => country.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'Tous' || project.category === selectedCategory;
    const matchesStatus = selectedStatus === 'Tous' || getStatusLabel(project.status) === selectedStatus;
    const matchesFeatured = !showFeaturedOnly || project.featured;
    
    return matchesSearch && matchesCategory && matchesStatus && matchesFeatured;
  });

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const regularProjects = filteredProjects.filter(project => !project.featured);

  const formatBudget = (amount: number) => {
    if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(1)}M €`;
    }
    return `${(amount / 1000).toFixed(0)}K €`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long'
    });
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
              Nos Projets
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-white/90 mb-8">
              Découvrez nos initiatives pour le développement économique, culturel et éducatif de l&apos;Afrique francophone
            </p>
            
            {/* Statistiques globales */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1">150+</div>
                <div className="text-sm text-white/80">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1">25</div>
                <div className="text-sm text-white/80">Pays bénéficiaires</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1">2M+</div>
                <div className="text-sm text-white/80">Bénéficiaires</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1">€50M</div>
                <div className="text-sm text-white/80">Budget total</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recherche et Filtres */}
      <section className="py-10 bg-white border-b-2 border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Barre de recherche */}
            <div className="relative mb-8">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              <input
                type="text"
                placeholder="🔍 Rechercher par nom, description ou pays..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-5 border-2 border-gray-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-purple-500 bg-white text-lg shadow-sm transition-all"
              />
            </div>

            {/* Filtres */}
            <div className="bg-linear-to-r from-gray-50 to-gray-100 rounded-2xl p-6 shadow-sm">
              {/* Catégories */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-900 mb-3">
                  🎯 Catégorie
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 ${
                        selectedCategory === category
                          ? 'bg-linear-to-r from-purple-600 to-blue-600 text-white shadow-lg scale-105'
                          : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200 hover:border-purple-300'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Statut et Options */}
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                <div className="flex items-center gap-3">
                  <label className="text-sm font-bold text-gray-900">
                    📈 Statut:
                  </label>
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="px-4 py-2.5 border-2 border-gray-300 rounded-xl bg-white text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                    title="Filtrer par statut de projet"
                    aria-label="Filtrer par statut de projet"
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>

                <label className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl border-2 border-gray-200 hover:border-purple-300 cursor-pointer transition-all">
                  <input
                    type="checkbox"
                    checked={showFeaturedOnly}
                    onChange={(e) => setShowFeaturedOnly(e.target.checked)}
                    className="w-5 h-5 rounded border-gray-300 text-purple-600 focus:ring-2 focus:ring-purple-500"
                  />
                  <span className="text-sm font-semibold text-gray-700">
                    ⭐ Projets phares uniquement
                  </span>
                </label>
              </div>
            </div>

            {/* Résultats */}
            <div className="mt-6 flex items-center justify-between bg-linear-to-r from-purple-50 to-blue-50 rounded-xl p-4 border-2 border-purple-100">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-gray-900">
                  {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} trouvé{filteredProjects.length > 1 ? 's' : ''}
                </span>
                {searchQuery && (
                  <span className="text-sm text-gray-600">
                    pour <span className="font-semibold text-purple-600">"{searchQuery}"</span>
                  </span>
                )}
              </div>
              {(searchQuery || selectedCategory !== 'Tous' || selectedStatus !== 'Tous' || showFeaturedOnly) && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('Tous');
                    setSelectedStatus('Tous');
                    setShowFeaturedOnly(false);
                  }}
                  className="text-sm font-semibold text-purple-600 hover:text-purple-700 underline"
                >
                  Réinitialiser les filtres
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Projets phares */}
      {featuredProjects.length > 0 && !showFeaturedOnly && (
        <section className="py-20 bg-linear-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-purple-600 to-yellow-500 bg-clip-text text-transparent">
                Projets Phares
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nos initiatives les plus impactantes pour le développement de l'Afrique
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {featuredProjects.slice(0, 3).map((project) => (
                <Link
                  key={project.id}
                  href={`/${locale}/projects/${project.id}`}
                  className="group"
                >
                  <article className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-purple-400 transition-all duration-300 transform hover:-translate-y-2">
                    <div className="h-56 bg-linear-to-br from-purple-100 via-blue-100 to-yellow-100 flex items-center justify-center relative overflow-hidden">
                      <div className="text-8xl opacity-10 group-hover:scale-110 transition-transform duration-500">🚀</div>
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1.5 text-xs font-bold rounded-xl shadow-md ${getStatusColor(project.status)} flex items-center gap-1.5`}>
                          {getStatusIcon(project.status)}
                          {getStatusLabel(project.status)}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 bg-linear-to-r from-yellow-400 to-orange-500 text-white px-3 py-1.5 text-xs font-bold rounded-xl shadow-lg">
                        ⭐ PHARE
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors line-clamp-2 min-h-[3.5rem]">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-5 text-sm line-clamp-3 leading-relaxed min-h-[4rem]">
                        {project.description}
                      </p>
                      
                      {/* Barre de progression */}
                      <div className="mb-5">
                        <div className="flex justify-between text-xs font-semibold text-gray-700 mb-2">
                          <span>Progression</span>
                          <span className="text-purple-600">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div 
                            className="h-full bg-linear-to-r from-purple-500 via-blue-500 to-green-500 rounded-full transition-all duration-1000 ease-out"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between bg-linear-to-r from-purple-50 to-blue-50 rounded-lg p-3">
                          <div className="flex items-center gap-2 text-gray-700">
                            <DollarSign className="h-4 w-4 text-purple-600" />
                            <span className="text-sm font-semibold">Budget</span>
                          </div>
                          <span className="text-sm font-bold text-purple-600">{formatBudget(project.budget)}</span>
                        </div>
                        
                        <div className="flex items-center justify-between bg-linear-to-r from-green-50 to-blue-50 rounded-lg p-3">
                          <div className="flex items-center gap-2 text-gray-700">
                            <Users className="h-4 w-4 text-green-600" />
                            <span className="text-sm font-semibold">Bénéficiaires</span>
                          </div>
                          <span className="text-sm font-bold text-green-600">{project.beneficiaries.toLocaleString()}</span>
                        </div>
                        
                        <div className="flex items-center justify-between bg-linear-to-r from-orange-50 to-yellow-50 rounded-lg p-3">
                          <div className="flex items-center gap-2 text-gray-700">
                            <MapPin className="h-4 w-4 text-orange-600" />
                            <span className="text-sm font-semibold">Pays</span>
                          </div>
                          <span className="text-sm font-bold text-orange-600">{project.countries.length}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tous les projets */}
      <section className="py-16 bg-linear-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {!showFeaturedOnly && (
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Tous les projets
                </h2>
                <p className="text-gray-600">Parcourez l'ensemble de nos initiatives</p>
              </div>
            )}
            
            {filteredProjects.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border-2 border-gray-200 shadow-sm">
                <div className="text-8xl mb-6 opacity-20">🚀</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Aucun projet trouvé</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Essayez de modifier vos critères de recherche ou vos filtres.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('Tous');
                    setSelectedStatus('Tous');
                    setShowFeaturedOnly(false);
                  }}
                  className="px-6 py-3 bg-linear-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {(showFeaturedOnly ? featuredProjects : regularProjects).map((project) => (
                  <Link
                    key={project.id}
                    href={`/${locale}/projects/${project.id}`}
                    className="group block"
                  >
                    <article className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:border-purple-400 transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex flex-col md:flex-row gap-8">
                        {/* Image du projet */}
                        <div className="w-full md:w-48 h-48 bg-linear-to-br from-purple-100 via-blue-100 to-yellow-100 rounded-2xl flex items-center justify-center shrink-0 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                          <div className="text-6xl opacity-20">🚀</div>
                          {project.featured && (
                            <div className="absolute top-3 right-3 bg-linear-to-r from-yellow-400 to-orange-500 text-white px-3 py-1.5 text-xs font-bold rounded-xl shadow-lg">
                              ⭐ PHARE
                            </div>
                          )}
                        </div>
                        
                        {/* Contenu du projet */}
                        <div className="flex-1 space-y-5">
                          {/* En-tête avec badges */}
                          <div className="flex items-start justify-between">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className={`px-4 py-2 text-xs font-bold rounded-xl shadow-sm ${getStatusColor(project.status)} flex items-center gap-1.5`}>
                                {getStatusIcon(project.status)}
                                {getStatusLabel(project.status)}
                              </span>
                              <span className="px-4 py-2 bg-linear-to-r from-gray-100 to-gray-200 text-gray-700 text-xs font-semibold rounded-xl">
                                {project.category}
                              </span>
                            </div>
                            <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-2 transition-all" />
                          </div>
                          
                          {/* Titre */}
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors leading-tight">
                            {project.title}
                          </h3>
                          
                          {/* Description */}
                          <p className="text-gray-600 leading-relaxed">
                            {project.description}
                          </p>
                          
                          {/* Barre de progression */}
                          <div className="bg-linear-to-r from-gray-50 to-gray-100 rounded-xl p-4">
                            <div className="flex justify-between text-sm font-bold text-gray-900 mb-3">
                              <span>📈 Progression du projet</span>
                              <span className="text-purple-600">{project.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                              <div 
                                className="h-full bg-linear-to-r from-purple-500 via-blue-500 to-green-500 rounded-full transition-all duration-1000"
                              />
                            </div>
                          </div>
                          
                          {/* Statistiques */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            <div className="bg-linear-to-br from-purple-50 to-blue-50 rounded-xl p-3 border border-purple-100">
                              <div className="flex items-center gap-2 mb-1">
                                <DollarSign className="h-4 w-4 text-purple-600" />
                                <span className="text-xs font-semibold text-gray-600">Budget</span>
                              </div>
                              <span className="text-sm font-bold text-purple-600">{formatBudget(project.budget)}</span>
                            </div>
                            
                            <div className="bg-linear-to-br from-green-50 to-blue-50 rounded-xl p-3 border border-green-100">
                              <div className="flex items-center gap-2 mb-1">
                                <Users className="h-4 w-4 text-green-600" />
                                <span className="text-xs font-semibold text-gray-600">Bénéficiaires</span>
                              </div>
                              <span className="text-sm font-bold text-green-600">{project.beneficiaries.toLocaleString()}</span>
                            </div>
                            
                            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-3 border border-orange-100">
                              <div className="flex items-center gap-2 mb-1">
                                <MapPin className="h-4 w-4 text-orange-600" />
                                <span className="text-xs font-semibold text-gray-600">Pays</span>
                              </div>
                              <span className="text-sm font-bold text-orange-600">{project.countries.length}</span>
                            </div>
                            
                            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-3 border border-blue-100">
                              <div className="flex items-center gap-2 mb-1">
                                <Calendar className="h-4 w-4 text-blue-600" />
                                <span className="text-xs font-semibold text-gray-600">Début</span>
                              </div>
                              <span className="text-xs font-bold text-blue-600">{formatDate(project.startDate)}</span>
                            </div>
                          </div>
                          
                          {/* Pays */}
                          <div className="flex items-start gap-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-3 border border-gray-200">
                            <span className="text-xs font-bold text-gray-700">🌍 Pays concernés:</span>
                            <span className="text-xs text-gray-600 font-medium">
                              {project.countries.slice(0, 4).join(', ')}
                              {project.countries.length > 4 && (
                                <span className="ml-1 px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full font-bold">
                                  +{project.countries.length - 4}
                                </span>
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
