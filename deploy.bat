@echo off
chcp 65001 >nul
call "%~dp0build.bat" <nul
if errorlevel 1 exit /b 1

cd /d "%~dp0"

if not exist .git (
  git init
  git branch -M main
)

git add web/ scripts/ static/ lib/ .gitignore README.md
git add biznews.html 2>nul

git diff --cached --quiet
if not errorlevel 1 (
  git commit -m "Deploy mobile-friendly BizNews JP site"
)

gh repo view hajunjang0629-ai/biznews-jp >nul 2>&1
if errorlevel 1 (
  gh repo create biznews-jp --public --description "ビジネスニュース和訳サイト" --source=. --remote=origin --push
) else (
  git push -u origin main 2>nul
  git push origin main
)

gh api repos/hajunjang0629-ai/biznews-jp/pages -X POST -f build_type=legacy -f "source[branch]=main" -f "source[path]=/web" 2>nul
gh api repos/hajunjang0629-ai/biznews-jp/pages -X PUT -f build_type=legacy -f "source[branch]=main" -f "source[path]=/web" 2>nul

echo.
echo ========================================
echo スマホで開くURL:
echo https://hajunjang0629-ai.github.io/biznews-jp/
echo ========================================
echo.
pause
