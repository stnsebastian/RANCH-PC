@echo off
title Iniciar Ranchillo-Pc
cd /d "%~dp0"

echo =======================================================
echo              INICIANDO RANCHILLO-PC                     
echo =======================================================
echo.
echo Abriendo aplicacion en modo ventana independiente...
echo.

:: Intentar abrir con Google Chrome en modo App (Ventana sin barra de navegador)
start chrome --app="file:///%cd%\index.html"

:: Si no se tiene Chrome, intentar con Microsoft Edge en modo App
if errorlevel 1 (
    start msedge --app="file:///%cd%\index.html"
)

exit
