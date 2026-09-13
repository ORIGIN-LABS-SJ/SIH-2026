@echo off
title GitHub Repository Sync - SIH 2026
cd /d "%~dp0"
echo.
echo ========================================================
echo   MicroNiti / SIH 2026 - Automatic GitHub Sync Engine
echo   Repository: https://github.com/SANYAMJAIN2309/SIH-2026
echo ========================================================
echo.

git status --short
echo.
echo [1/3] Staging all code changes...
git add .

echo [2/3] Committing changes...
set msg=%~1
if "%msg%"=="" set msg=Automated code synchronization (%DATE% %TIME%)
git commit -m "%msg%"

echo [3/3] Pushing to GitHub (origin main)...
git push origin main

echo.
echo ========================================================
echo   SUCCESS! All changes synchronized with GitHub.
echo ========================================================
echo.
if "%~1"=="" timeout /t 3 >nul
