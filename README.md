# 🌍 Afric Links - FORUM SUR LA DIPLÔMATIE 
ÉCONOMIQUE INTER-AFRICAINE
ÉCONOMIQUE INTER-AFRICAINE

[![Next.js](https://img.shields.io/badge/Next.js-15.1.4-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red)]()

Site web institutionnel moderne pour promouvoir l'économie, la diversité culturelle, l'éducation, la coopération économique et les initiatives de la Francophonie à l'échelle Africaine.

## 🚀 Démarrage Rapide

```bash
# Installation des dépendances
npm install

# Démarrer le serveur de développement (port 5000)
powershell -ExecutionPolicy Bypass -File start-dev.ps1

# Ou directement
npm run dev
```

**Accéder au site :** http://localhost:5000

## ✨ Fonctionnalités Actuelles

### ✅ 100% COMPLÈTES
- 🏠 **Page d'accueil** - Hero dynamique + Actualités (2 colonnes) + Projets + Partenaires
- 🧭 **Navigation** - Header avec espacement optimisé, menu mobile, sélecteur de langue (FR/EN/PT)
- 📱 **Responsive** - 100% compatible mobile, tablet, desktop
- 🎨 **Design** - Charte graphique violet et or, animations fluides
- 🌍 **Multilingue** - 3 langues complètes (FR, EN, PT) - 43 pages générées
- 🔗 **Footer** - Liens, contact, réseaux sociaux, newsletter
- 📄 **Pages institutionnelles** - À propos, Missions, Contact, Ressources
- 📰 **Actualités** - Design moderne avec 2 grandes cards, filtres, recherche
- 🎯 **Projets** - Grille de projets avec filtres et catégories
- 🤝 **Partenaires** - Liste complète avec logos et descriptions
- 🔍 **SEO** - Métadonnées, Open Graph, Twitter Cards, Sitemap ready
- ♿ **Accessibilité** - ARIA labels, navigation clavier, WCAG 2.1 AA
- ⚡ **Performance** - Build optimisé, code splitting, images optimisées

### 🔐 Sécurité et Performance
- HTTPS strict, anti-DDoS, anti-XSS/CSRF
- Hébergement distribué (edge computing)
- Surveillance en temps réel des performances

## 🛠️ Technologies Utilisées

| Composant | Technologie | Version |
|-----------|-------------|---------|
| **Framework** | Next.js | 15+ |
| **Langage** | TypeScript | 5.5+ |
| **Style** | Tailwind CSS | 4.0 |
| **Animations** | Framer Motion | Latest |
| **Icons** | Lucide React | Latest |
| **Internationalisation** | next-intl | Latest |
| **Fonts** | Inter, Roboto | Google Fonts |

## 🚀 Installation et Développement

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone <repository-url>
cd africlinks-website

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

### Scripts Disponibles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Démarrer en production
npm start

# Linting
npm run lint

# Type checking
npm run type-check
```

## 🌍 Internationalisation

Le site supporte 4 langues :
- 🇫🇷 Français (par défaut)
- 🇬🇧 Anglais
- 🇸🇦 Arabe
- 🇵🇹 Portugais

### Ajouter une nouvelle langue

1. Créer le fichier de traduction dans `messages/[locale].json`
2. Ajouter la langue dans `src/middleware.ts`
3. Mettre à jour `LANGUAGES` dans `src/lib/constants.ts`

## 📁 Structure du Projet

```
src/
├── app/
│   ├── [locale]/          # Pages internationalisées
│   ├── globals.css        # Styles globaux
│   └── layout.tsx         # Layout racine
├── components/
│   ├── home/              # Composants page d'accueil
│   ├── layout/            # Header, Footer
│   └── ui/                # Composants UI réutilisables
├── lib/
│   ├── constants.ts       # Constantes globales
│   └── utils.ts           # Utilitaires
├── types/
│   └── index.ts           # Types TypeScript
└── i18n/
    └── request.ts         # Configuration i18n
```

## 🎨 Design System

### Couleurs Principales
- **Bleu** : #1E40AF (Primaire)
- **Vert** : #059669 (Secondaire)
- **Rouge** : #DC2626 (Accent)
- **Jaune** : #D97706 (Accent)
- **Violet** : #7C3AED (Accent)

### Typographie
- **Headings** : Roboto (300, 400, 500, 700)
- **Body** : Inter (300, 400, 500, 600, 700)

## 🚀 Déploiement

### Vercel (Recommandé)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Variables d'Environnement

```env
NEXT_PUBLIC_SITE_URL=https://africlinks.com
NEXT_PUBLIC_API_URL=https://api.africlinks.com
```

## 📱 Responsive Design

- **Mobile First** : Design optimisé pour mobile
- **Breakpoints** : sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly** : Éléments tactiles optimisés

## ♿ Accessibilité

- **WCAG 2.2** : Conformité niveau AA
- **Keyboard Navigation** : Navigation complète au clavier
- **Screen Readers** : Support des lecteurs d'écran
- **Focus Management** : Gestion appropriée du focus

## 🔍 SEO

- **Meta Tags** : Optimisation complète
- **Open Graph** : Partage social optimisé
- **Structured Data** : Données structurées
- **Sitemap** : Génération automatique

## 🧪 Tests

```bash
# Tests unitaires
npm run test

# Tests E2E
npm run test:e2e

# Coverage
npm run test:coverage
```

## 📈 Performance

- **Core Web Vitals** : Optimisation LCP, FID, CLS
- **Image Optimization** : Next.js Image component
- **Code Splitting** : Chargement optimisé
- **Caching** : Stratégies de cache avancées

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

- **Email** : contact@africlinks.com
- **Documentation** : [docs.africlinks.com](https://docs.africlinks.com)
- **Issues** : [GitHub Issues](https://github.com/africlinks/website/issues)

---

**Développé avec ❤️ pour l'Afrique francophone**
