# Script para iniciar todo el ecosistema "Instituto Crecer Más"
# Este script abrirá 4 ventanas de terminal, una para cada proyecto.

Write-Host "Iniciando el Ecosistema Digital..." -ForegroundColor Cyan

# 1. Iniciar SIGAA (Puerto esperado: 5173)
Write-Host "1. Iniciando SIGAA (Sistema de Gestión)..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd sigaa-app; npm run dev"
Start-Sleep -Seconds 5

# 2. Iniciar Campus Virtual (Puerto esperado: 5174)
Write-Host "2. Iniciando Campus Virtual (LMS)..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd campus-virtual-app; npm run dev"
Start-Sleep -Seconds 5

# 3. Iniciar SAT (Puerto esperado: 5175)
Write-Host "3. Iniciando SAT (Alerta Temprana)..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd sat-app; npm run dev"
Start-Sleep -Seconds 5

# 4. Iniciar CRM (Puerto esperado: 5176)
Write-Host "4. Iniciando CRM Educativo..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd crm-app; npm run dev"

Write-Host "¡Todo listo! Las aplicaciones se están ejecutando." -ForegroundColor Cyan
Write-Host "SIGAA: http://localhost:5173"
Write-Host "Campus: http://localhost:5174"
Write-Host "SAT:    http://localhost:5175"
Write-Host "CRM:    http://localhost:5176"
