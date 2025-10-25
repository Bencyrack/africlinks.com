# 🖼️ GUIDE RAPIDE - Ajouter les Images

## 🚨 PROBLÈME ACTUEL

Les images ne s'affichent pas car le dossier `public/images/` est vide.

---

## ✅ SOLUTION RAPIDE (5 minutes)

### Étape 1 : Sauvegarder l'Image de la Ville

**L'image que vous avez uploadée** (ville moderne) doit être sauvegardée ici :

```
E:\africlinks\africlinks-website\public\images\hero-city.jpg
```

**Comment faire** :
1. Clic droit sur l'image dans le chat
2. "Enregistrer l'image sous..."
3. Nom : `hero-city.jpg`
4. Dossier : `E:\africlinks\africlinks-website\public\images\`

### Étape 2 : Optimiser l'Image (Si Trop Grande)

**Si l'image est trop lourde (> 500 KB)**, utilisez un de ces outils :

#### Option A : En Ligne (Gratuit)
- **TinyPNG** : https://tinypng.com/
- **Squoosh** : https://squoosh.app/
- Glissez votre image
- Téléchargez la version compressée
- Renommez en `hero-city.jpg`

#### Option B : Avec Paint (Windows)
1. Ouvrir l'image avec Paint
2. Redimensionner → 1920 x 1080 pixels
3. Enregistrer sous → JPEG → Qualité 85%

#### Option C : PowerShell (Automatique)
```powershell
# Depuis le dossier du projet
# Installer le module si nécessaire
Install-Module -Name ImageResize -Force

# Redimensionner
Resize-Image -InputPath "chemin\vers\image.jpg" -OutputPath "public\images\hero-city.jpg" -Width 1920 -Height 1080
```

---

## 📏 TAILLES RECOMMANDÉES

Pour un chargement rapide :

| Image | Largeur | Hauteur | Poids Max |
|-------|---------|---------|-----------|
| **Hero** (hero-city.jpg) | 1920px | 1080px | 300 KB |
| **News** (stats-finance.jpg) | 800px | 600px | 150 KB |
| **About** (about-team.jpg) | 800px | 600px | 150 KB |
| **Missions** (missions-handshake.jpg) | 800px | 600px | 150 KB |
| **Projects** (projects-tech.jpg) | 800px | 600px | 150 KB |

---

## 🎯 IMAGES NÉCESSAIRES

Le carrousel utilise ces 5 images :

1. ✅ **hero-city.jpg** - Vous l'avez uploadée (ville moderne)
2. ⚠️ **about-team.jpg** - À ajouter (équipe en réunion)
3. ⚠️ **missions-handshake.jpg** - À ajouter (poignée de main)
4. ⚠️ **projects-tech.jpg** - À ajouter (technologie)
5. ⚠️ **stats-finance.jpg** - À ajouter (finance/graphiques)

---

## 🔧 SOLUTION TEMPORAIRE

Si vous n'avez qu'une seule image pour l'instant, je peux modifier le code pour n'utiliser que celle-là.

**Voulez-vous que je fasse ça ?**

---

## 💡 ALTERNATIVE : Images Placeholder

Je peux aussi configurer des images placeholder (couleurs dégradées) en attendant les vraies images.

---

## 🚀 APRÈS AVOIR AJOUTÉ L'IMAGE

1. Sauvegardez `hero-city.jpg` dans `public/images/`
2. Rechargez la page : http://localhost:3000
3. L'image apparaîtra immédiatement !

**Next.js optimisera automatiquement l'image** (compression, lazy loading, responsive).

---

## ❓ BESOIN D'AIDE ?

Dites-moi :
- "J'ai sauvegardé l'image" → Je vérifie
- "L'image est trop grande" → Je modifie le code
- "Je n'ai qu'une image" → Je simplifie le carrousel
- "Utilise des placeholders" → Je crée des dégradés temporaires

---

*Guide créé le 18 octobre 2025*
