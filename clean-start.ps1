Write-Host "🧹 Nettoyage..." -ForegroundColor Yellow
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
Write-Host "✅ Cache supprimé" -ForegroundColor Green
Write-Host "🚀 Démarrage sur le port 3001..." -ForegroundColor Cyan
$env:PORT=3001
npm run dev
