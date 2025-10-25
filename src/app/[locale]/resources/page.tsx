'use client';

import { useState, useMemo } from 'react';
// Imports supprimés car non utilisés dans cette version
import { Search, Filter, Download, FileText, Calendar, Tag, Eye, ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface Document {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  fileSize: string;
  downloadCount: number;
  publishedAt: string;
  fileType: 'pdf' | 'doc' | 'xls' | 'ppt';
  language: string;
}

// Données de démonstration
const mockDocuments: Document[] = [
  {
    id: '1',
    title: 'Rapport Annuel 2024 - Diplomatie Économique Africaine',
    description: 'Bilan complet des activités et réalisations de l\'année 2024 en matière de diplomatie économique.',
    category: 'Rapports',
    tags: ['rapport', 'économie', '2024', 'bilan'],
    fileSize: '2.4 MB',
    downloadCount: 1847,
    publishedAt: '2024-12-15',
    fileType: 'pdf',
    language: 'fr'
  },
  {
    id: '2',
    title: 'Guide des Investissements en Afrique Francophone',
    description: 'Guide pratique pour les investisseurs souhaitant développer leurs activités en Afrique francophone.',
    category: 'Guides',
    tags: ['investissement', 'guide', 'afrique', 'francophonie'],
    fileSize: '1.8 MB',
    downloadCount: 2156,
    publishedAt: '2024-11-20',
    fileType: 'pdf',
    language: 'fr'
  },
  {
    id: '3',
    title: 'Étude sur la Mobilité Étudiante Transfrontalière',
    description: 'Analyse approfondie des flux de mobilité étudiante entre les pays membres d\'Afric Links.',
    category: 'Études',
    tags: ['éducation', 'mobilité', 'étudiants', 'recherche'],
    fileSize: '3.1 MB',
    downloadCount: 892,
    publishedAt: '2024-10-05',
    fileType: 'pdf',
    language: 'fr'
  },
  {
    id: '4',
    title: 'Protocole de Coopération Culturelle 2025-2030',
    description: 'Nouveau protocole définissant les axes de coopération culturelle pour les cinq prochaines années.',
    category: 'Protocoles',
    tags: ['culture', 'coopération', 'protocole', '2025'],
    fileSize: '956 KB',
    downloadCount: 654,
    publishedAt: '2024-09-12',
    fileType: 'pdf',
    language: 'fr'
  },
  {
    id: '5',
    title: 'Statistiques du Commerce Intra-Africain 2024',
    description: 'Données statistiques détaillées sur les échanges commerciaux entre pays africains francophones.',
    category: 'Statistiques',
    tags: ['commerce', 'statistiques', 'données', 'échanges'],
    fileSize: '1.2 MB',
    downloadCount: 1234,
    publishedAt: '2024-08-30',
    fileType: 'xls',
    language: 'fr'
  },
  {
    id: '6',
    title: 'Présentation des Jeux de la Francophonie 2025',
    description: 'Présentation officielle de l\'organisation des Jeux de la Francophonie africaine 2025.',
    category: 'Présentations',
    tags: ['jeux', 'francophonie', 'sport', 'culture'],
    fileSize: '4.7 MB',
    downloadCount: 567,
    publishedAt: '2024-07-18',
    fileType: 'ppt',
    language: 'fr'
  }
];

const categories = ['Tous', 'Rapports', 'Guides', 'Études', 'Protocoles', 'Statistiques', 'Présentations'];
const sortOptions = [
  { value: 'date-desc', label: 'Plus récent' },
  { value: 'date-asc', label: 'Plus ancien' },
  { value: 'downloads-desc', label: 'Plus téléchargé' },
  { value: 'title-asc', label: 'Titre A-Z' }
];

export default function ResourcesPage() {
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [sortBy, setSortBy] = useState('date-desc');
  const [showFilters, setShowFilters] = useState(false);

  const filteredAndSortedDocuments = useMemo(() => {
    const filtered = mockDocuments.filter(doc => {
      const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'Tous' || doc.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });

    // Tri
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date-desc':
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        case 'date-asc':
          return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
        case 'downloads-desc':
          return b.downloadCount - a.downloadCount;
        case 'title-asc':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  const getFileTypeIcon = (_fileType: string) => {
    return <FileText className="h-5 w-5" />;
  };

  const getFileTypeColor = (fileType: string) => {
    switch (fileType) {
      case 'pdf': return 'bg-red-100 text-red-700';
      case 'doc': return 'bg-blue-100 text-blue-700';
      case 'xls': return 'bg-green-100 text-green-700';
      case 'ppt': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-purple text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-yellow/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Centre de Ressources
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-white/90 mb-8">
              Accédez à notre bibliothèque complète de documents, rapports et ressources sur la diplomatie économique africaine
            </p>
            
            {/* Statistiques */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1">200+</div>
                <div className="text-sm text-white/80">Documents</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1">50K+</div>
                <div className="text-sm text-white/80">Téléchargements</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1">15</div>
                <div className="text-sm text-white/80">Catégories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1">4</div>
                <div className="text-sm text-white/80">Langues</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recherche et Filtres */}
      <section className="py-8 bg-muted/30 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Barre de recherche */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Rechercher dans les documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background text-lg"
              />
            </div>

            {/* Filtres et tri */}
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={showFilters ? "default" : "outline"}
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filtres
                </Button>
                
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 text-sm rounded-full transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-input rounded-md bg-background text-sm"
                  title="Trier les documents"
                  aria-label="Trier les documents"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Résultats */}
            <div className="mt-4 text-sm text-muted-foreground">
              {filteredAndSortedDocuments.length} document(s) trouvé(s)
              {searchQuery && ` pour "${searchQuery}"`}
            </div>
          </div>
        </div>
      </section>

      {/* Liste des documents */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredAndSortedDocuments.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Aucun document trouvé</h3>
                <p className="text-muted-foreground">
                  Essayez de modifier vos critères de recherche ou vos filtres.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredAndSortedDocuments.map((document) => (
                  <div
                    key={document.id}
                    className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-start gap-4">
                          <div className={`p-2 rounded-lg ${getFileTypeColor(document.fileType)}`}>
                            {getFileTypeIcon(document.fileType)}
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors cursor-pointer">
                              {document.title}
                            </h3>
                            
                            <p className="text-muted-foreground mb-3 leading-relaxed">
                              {document.description}
                            </p>
                            
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {new Date(document.publishedAt).toLocaleDateString('fr-FR')}
                              </div>
                              <div className="flex items-center gap-1">
                                <Download className="h-4 w-4" />
                                {document.downloadCount.toLocaleString()} téléchargements
                              </div>
                              <div className="flex items-center gap-1">
                                <FileText className="h-4 w-4" />
                                {document.fileSize}
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                                {document.category}
                              </span>
                              {document.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                                >
                                  <Tag className="h-3 w-3 inline mr-1" />
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2 ml-4">
                        <Button size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Télécharger
                        </Button>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          Aperçu
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
