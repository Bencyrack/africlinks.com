# 🖼️ Guide d'Intégration des Images avec Animations

## 📁 Images Fournies

Vous avez 5 images professionnelles à intégrer :

1. **finances-infographic.jpg** - Infographie financière (écran avec graphiques)
2. **business-handshake.jpg** - Poignée de main professionnelle
3. **conference-team.jpg** - Équipe en conférence/discours
4. **vr-technology.jpg** - Homme avec casque VR et données
5. **modern-city.jpg** - Vue de ville moderne africaine

---

## 📂 Étape 1 : Placer les Images

### Renommer et placer les images dans `public/images/` :

```
public/
└── images/
    ├── hero-city.jpg           (Image 5 - ville moderne)
    ├── about-team.jpg          (Image 3 - équipe conférence)
    ├── missions-handshake.jpg  (Image 2 - poignée de main)
    ├── projects-tech.jpg       (Image 4 - VR technology)
    └── stats-finance.jpg       (Image 1 - infographie)
```

**Commandes PowerShell** :
```powershell
# Depuis le dossier où vous avez téléchargé les images
Copy-Item "image1.jpg" "public\images\stats-finance.jpg"
Copy-Item "image2.jpg" "public\images\missions-handshake.jpg"
Copy-Item "image3.jpg" "public\images\about-team.jpg"
Copy-Item "image4.jpg" "public\images\projects-tech.jpg"
Copy-Item "image5.jpg" "public\images\hero-city.jpg"
```

---

## 🎨 Étape 2 : Intégrer dans les Pages

### 1. Page d'Accueil - Hero avec Ville Moderne

**Fichier** : `src/app/[locale]/page.tsx`

```typescript
import Image from 'next/image';

// Dans la section Hero, remplacer par :
<section className="relative h-screen flex items-center justify-center overflow-hidden">
  {/* Image de fond avec overlay */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/hero-city.jpg"
      alt="Ville moderne africaine"
      fill
      className="object-cover"
      priority
      quality={90}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-800/80 to-yellow-600/70" />
  </div>
  
  {/* Contenu par-dessus */}
  <div className="container mx-auto px-4 text-center text-white relative z-10">
    <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
      FORUM SUR LA DIPLÔMATIE 
ÉCONOMIQUE INTER-AFRICAINE
    </h1>
    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
      Promouvoir l'économie, la diversité culturelle, l'éducation...
    </p>
    <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition-all animate-fade-in-up animation-delay-400 hover:scale-105 transform">
      Découvrir nos missions
    </button>
  </div>
</section>
```

### 2. Page À Propos - Section Équipe

**Fichier** : `src/app/[locale]/about/page.tsx`

Ajouter après la section Mission :

```typescript
{/* Team Section with Image */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="relative h-96 rounded-2xl overflow-hidden group">
        <Image
          src="/images/about-team.jpg"
          alt="Équipe Afric Links"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
      </div>
      
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Une Équipe Dédiée
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Notre équipe d'experts travaille sans relâche pour promouvoir
          la coopération économique et culturelle en Afrique francophone.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-purple-600">50+</div>
            <div className="text-sm text-gray-600">Experts</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-purple-600">25</div>
            <div className="text-sm text-gray-600">Pays</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### 3. Page Missions - Partenariat

**Fichier** : `src/app/[locale]/missions/page.tsx`

Ajouter avant le Call to Action :

```typescript
{/* Partnership Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Construisons Ensemble
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Nos partenariats stratégiques renforcent la coopération
          entre les nations africaines et créent des opportunités
          de développement durable.
        </p>
        <ul className="space-y-3">
          <li className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Partenariats publics-privés</span>
          </li>
          <li className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Coopération internationale</span>
          </li>
          <li className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Échanges culturels</span>
          </li>
        </ul>
      </div>
      
      <div className="relative h-96 rounded-2xl overflow-hidden group">
        <Image
          src="/images/missions-handshake.jpg"
          alt="Partenariat Afric Links"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    </div>
  </div>
</section>
```

### 4. Page d'Accueil - Section Statistiques

**Fichier** : `src/app/[locale]/page.tsx`

Ajouter une nouvelle section après les actualités :

```typescript
{/* Statistics Section with Image */}
<section className="py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white relative overflow-hidden">
  {/* Image de fond avec overlay */}
  <div className="absolute inset-0 opacity-20">
    <Image
      src="/images/stats-finance.jpg"
      alt="Statistiques"
      fill
      className="object-cover"
    />
  </div>
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Notre Impact en Chiffres
      </h2>
      <p className="text-xl text-white/90">
        Des résultats concrets au service du développement africain
      </p>
    </div>
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div className="text-center transform hover:scale-110 transition-transform duration-300">
        <div className="text-5xl md:text-6xl font-bold mb-2 animate-count-up">54</div>
        <div className="text-white/80">Pays Membres</div>
      </div>
      <div className="text-center transform hover:scale-110 transition-transform duration-300">
        <div className="text-5xl md:text-6xl font-bold mb-2 animate-count-up">300M+</div>
        <div className="text-white/80">Francophones</div>
      </div>
      <div className="text-5xl md:text-6xl font-bold mb-2 animate-count-up">150+</div>
        <div className="text-white/80">Projets</div>
      </div>
      <div className="text-center transform hover:scale-110 transition-transform duration-300">
        <div className="text-5xl md:text-6xl font-bold mb-2 animate-count-up">25+</div>
        <div className="text-white/80">Années</div>
      </div>
    </div>
  </div>
</section>
```

---

## 🎬 Étape 3 : Ajouter les Animations CSS

**Fichier** : `src/app/globals.css`

Ajouter à la fin du fichier :

```css
/* ============================================
   ANIMATIONS PERSONNALISÉES
   ============================================ */

/* Fade in up animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

/* Animation delays */
.animation-delay-200 {
  animation-delay: 0.2s;
  opacity: 0;
}

.animation-delay-400 {
  animation-delay: 0.4s;
  opacity: 0;
}

.animation-delay-600 {
  animation-delay: 0.6s;
  opacity: 0;
}

/* Count up animation */
@keyframes countUp {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-count-up {
  animation: countUp 1s ease-out forwards;
}

/* Parallax hover effect */
.parallax-hover {
  transition: transform 0.3s ease;
}

.parallax-hover:hover {
  transform: translateY(-10px);
}

/* Image zoom on hover */
.image-zoom-hover {
  overflow: hidden;
}

.image-zoom-hover img {
  transition: transform 0.5s ease;
}

.image-zoom-hover:hover img {
  transform: scale(1.1);
}

/* Pulse animation */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

.animate-pulse-slow {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Slide in from left */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in-left {
  animation: slideInLeft 0.8s ease-out forwards;
}

/* Slide in from right */
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in-right {
  animation: slideInRight 0.8s ease-out forwards;
}

/* Float animation */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Glow effect */
@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
  }
  50% {
    box-shadow: 0 0 40px rgba(139, 92, 246, 0.8);
  }
}

.animate-glow {
  animation: glow 2s ease-in-out infinite;
}
```

---

## 🎯 Étape 4 : Utilisation Avancée avec Framer Motion (Optionnel)

Si vous voulez des animations encore plus fluides, installez Framer Motion :

```bash
npm install framer-motion
```

Exemple d'utilisation :

```typescript
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AnimatedSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative h-96"
    >
      <Image
        src="/images/about-team.jpg"
        alt="Team"
        fill
        className="object-cover"
      />
    </motion.div>
  );
}
```

---

## 📋 Checklist d'Intégration

- [ ] Créer le dossier `public/images/`
- [ ] Copier les 5 images avec les bons noms
- [ ] Ajouter les animations CSS dans `globals.css`
- [ ] Intégrer l'image ville dans le Hero de la page d'accueil
- [ ] Intégrer l'image équipe dans la page À propos
- [ ] Intégrer l'image poignée de main dans la page Missions
- [ ] Intégrer l'image infographie dans la section statistiques
- [ ] Tester toutes les animations
- [ ] Vérifier la performance (images optimisées)

---

## 🎨 Résultat Attendu

Après intégration, vous aurez :
- ✅ Hero avec image de fond animée
- ✅ Sections avec images qui zooment au hover
- ✅ Animations de fade-in au scroll
- ✅ Statistiques animées
- ✅ Transitions fluides partout
- ✅ Site professionnel et dynamique

---

## 🚀 Commande Rapide

Pour tout intégrer rapidement, suivez ces étapes :

1. **Placer les images** dans `public/images/`
2. **Copier les animations CSS** dans `globals.css`
3. **Modifier les pages** selon les exemples ci-dessus
4. **Tester** sur http://localhost:5000

**Temps estimé** : 30-45 minutes

---

*Guide créé le 17 octobre 2025*  
*Version : 1.0*
