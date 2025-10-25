#!/bin/bash

# Script de déploiement Afric Links
# Utilisation: ./deploy.sh [vercel|netlify]

PLATFORM=$1

echo "🚀 Script de déploiement Afric Links"
echo "================================="

# Vérification des prérequis
echo "📋 Vérification des prérequis..."

# Vérifier si npm est installé
if ! command -v npm &> /dev/null; then
    echo "❌ npm n'est pas installé"
    exit 1
fi

# Vérifier si le projet est dans le bon répertoire
if [ ! -f "package.json" ]; then
    echo "❌ package.json non trouvé. Assurez-vous d'être dans le répertoire du projet."
    exit 1
fi

echo "✅ Prérequis validés"

# Build du projet
echo "🔨 Build du projet..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Échec du build"
    exit 1
fi

echo "✅ Build réussi"

# Déploiement selon la plateforme
if [ -z "$PLATFORM" ]; then
    echo "🤔 Quelle plateforme souhaitez-vous utiliser ?"
    echo "1. Vercel (recommandé)"
    echo "2. Netlify"
    echo "3. Build local seulement"
    
    read -p "Votre choix (1-3): " choice
    
    case $choice in
        1) PLATFORM="vercel" ;;
        2) PLATFORM="netlify" ;;
        3) 
            echo "✅ Build terminé. Utilisez 'npm start' pour tester localement."
            exit 0
            ;;
        *)
            echo "❌ Choix invalide"
            exit 1
            ;;
    esac
fi

# Déploiement Vercel
if [ "$PLATFORM" = "vercel" ]; then
    echo "🚀 Déploiement sur Vercel..."
    
    # Vérifier si Vercel CLI est installé
    if ! command -v vercel &> /dev/null; then
        echo "📦 Installation de Vercel CLI..."
        npm install -g vercel
    fi
    
    echo "🌐 Lancement du déploiement Vercel..."
    vercel --prod
    
    if [ $? -eq 0 ]; then
        echo "🎉 Déploiement Vercel réussi !"
        echo "🌍 Votre site est maintenant en ligne !"
    else
        echo "❌ Échec du déploiement Vercel"
        exit 1
    fi
fi

# Déploiement Netlify
if [ "$PLATFORM" = "netlify" ]; then
    echo "🚀 Déploiement sur Netlify..."
    
    # Vérifier si Netlify CLI est installé
    if ! command -v netlify &> /dev/null; then
        echo "📦 Installation de Netlify CLI..."
        npm install -g netlify-cli
    fi
    
    echo "🌐 Lancement du déploiement Netlify..."
    netlify deploy --prod --dir=.next
    
    if [ $? -eq 0 ]; then
        echo "🎉 Déploiement Netlify réussi !"
        echo "🌍 Votre site est maintenant en ligne !"
    else
        echo "❌ Échec du déploiement Netlify"
        exit 1
    fi
fi

echo ""
echo "🎊 Déploiement terminé avec succès !"
echo "🌟 Site Afric Links en ligne et opérationnel !"
echo ""
echo "📋 Prochaines étapes recommandées :"
echo "   1. Configurer un domaine personnalisé"
echo "   2. Mettre en place Google Analytics"
echo "   3. Configurer la surveillance des performances"
echo "   4. Planifier les mises à jour de contenu"
