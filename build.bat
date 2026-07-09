@echo off
chcp 65001 >nul
echo BizNews JP をビルドしています...
python "%~dp0scripts\bundle-single.py"
if errorlevel 1 exit /b 1
echo.
echo 完了: web\index.html
echo.
echo スマホで使うには GitHub Pages に公開してください:
echo   deploy.bat
echo.
pause
