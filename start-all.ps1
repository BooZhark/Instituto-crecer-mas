Write-Host "Iniciando el Ecosistema Digital..." -ForegroundColor Cyan

Write-Host "1. Iniciando SIGAA (Sistema de Gestión)..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd sigaa-app; npm run dev"
Start-Sleep -Seconds 5

Write-Host "2. Iniciando Campus Virtual (LMS)..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd campus-virtual-app; npm run dev"
Start-Sleep -Seconds 5


Write-Host "3. Iniciando SAT (Alerta Temprana)..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd sat-app; npm run dev"
Start-Sleep -Seconds 5

Write-Host "4. Iniciando CRM Educativo..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd crm-app; npm run dev"

Write-Host "Las aplicaciones se están ejecutando." -ForegroundColor Cyan
Write-Host "SIGAA: http://localhost:5173"
Write-Host "Campus: http://localhost:5174"
Write-Host "SAT:    http://localhost:5175"
Write-Host "CRM:    http://localhost:5176"
