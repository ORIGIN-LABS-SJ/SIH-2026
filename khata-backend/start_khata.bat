@echo off
title Khata Backend Server
cd /d "%~dp0"
echo.
echo  ╔══════════════════════════════════════════╗
echo  ║      KHATA BACKEND - Starting up...      ║
echo  ║      FastAPI running on port 5000        ║
echo  ╚══════════════════════════════════════════╝
echo.
echo  API Docs: http://localhost:5000/docs
echo  Health:   http://localhost:5000/api/health
echo.
python main.py
pause
