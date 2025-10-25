# Script de déploiement Afric Links
# Utilisation: .\deploy.ps1 [vercel|netlify]

param(
    [Parameter(Mandatory=$false)]
    [ValidateSet("vercel", "netlify", "")]
    [string]$Platform = ""
)

Write-Host "🚀 Script de déploiement Afric Links" -ForegroundColor Green
Write-Host "=================================" -ForegroundColor Green

# Vérification des prérequis
Write-Host "📋 Vérification des prérequis..." -ForegroundColor Yellow

# Vérifier si npm est installé
if (!(Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Host "❌ npm n'est pas installé" -ForegroundColor Red
    exit 1
}

# Vérifier si le projet est dans le bon répertoire
if (!(Test-Path "package.json")) {
    Write-Host "❌ package.json non trouvé. Assurez-vous d'être dans le répertoire du projet." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Prérequis validés" -ForegroundColor Green

# Build du projet
Write-Host "🔨 Build du projet..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Échec du build" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build réussi" -ForegroundColor Green

# Déploiement selon la plateforme
if ($Platform -eq "") {
    Write-Host "🤔 Quelle plateforme souhaitez-vous utiliser ?" -ForegroundColor Cyan
    Write-Host "1. Vercel (recommandé)" -ForegroundColor White
    Write-Host "2. Netlify" -ForegroundColor White
    Write-Host "3. Build local seulement" -ForegroundColor White
    
    $choice = Read-Host "Votre choix (1-3)"
    
    switch ($choice) {
        "1" { $Platform = "vercel" }
        "2" { $Platform = "netlify" }
        "3" { 
            Write-Host "✅ Build terminé. Utilisez 'npm start' pour tester localement." -ForegroundColor Green
            exit 0
        }
        default {
            Write-Host "❌ Choix invalide" -ForegroundColor Red
            exit 1
        }
    }
}

# Déploiement Vercel
if ($Platform -eq "vercel") {
    Write-Host "🚀 Déploiement sur Vercel..." -ForegroundColor Yellow
    
    # Vérifier si Vercel CLI est installé
    if (!(Get-Command vercel -ErrorAction SilentlyContinue)) {
        Write-Host "📦 Installation de Vercel CLI..." -ForegroundColor Yellow
        npm install -g vercel
    }
    
    Write-Host "🌐 Lancement du déploiement Vercel..." -ForegroundColor Yellow
    vercel --prod
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "🎉 Déploiement Vercel réussi !" -ForegroundColor Green
        Write-Host "🌍 Votre site est maintenant en ligne !" -ForegroundColor Green
    } else {
        Write-Host "❌ Échec du déploiement Vercel" -ForegroundColor Red
        exit 1
    }
}

# Déploiement Netlify
if ($Platform -eq "netlify") {
    Write-Host "🚀 Déploiement sur Netlify..." -ForegroundColor Yellow
    
    # Vérifier si Netlify CLI est installé
    if (!(Get-Command netlify -ErrorAction SilentlyContinue)) {
        Write-Host "📦 Installation de Netlify CLI..." -ForegroundColor Yellow
        npm install -g netlify-cli
    }
    
    Write-Host "🌐 Lancement du déploiement Netlify..." -ForegroundColor Yellow
    netlify deploy --prod --dir=.next
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "🎉 Déploiement Netlify réussi !" -ForegroundColor Green
        Write-Host "🌍 Votre site est maintenant en ligne !" -ForegroundColor Green
    } else {
        Write-Host "❌ Échec du déploiement Netlify" -ForegroundColor Red
        exit 1
    }
}

Write-Host ""
Write-Host "🎊 Déploiement terminé avec succès !" -ForegroundColor Green
Write-Host "🌟 Site Afric Links en ligne et opérationnel !" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Prochaines étapes recommandées :" -ForegroundColor Cyan
Write-Host "   1. Configurer un domaine personnalisé" -ForegroundColor White
Write-Host "   2. Mettre en place Google Analytics" -ForegroundColor White
Write-Host "   3. Configurer la surveillance des performances" -ForegroundColor White
Write-Host "   4. Planifier les mises à jour de contenu" -ForegroundColor White
