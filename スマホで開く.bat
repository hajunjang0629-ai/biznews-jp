@echo off
chcp 65001 >nul
echo スマホ用ローカルサーバーを起動します...
echo.
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4"') do (
  set IP=%%a
  goto :found
)
:found
echo スマホのブラウザで次のURLを開いてください:
echo.
echo   http://%IP%:8080
echo.
echo （PCとスマホが同じWi-Fiに接続されている必要があります）
echo.
echo 終了するには Ctrl+C を押してください
echo.
cd /d "%~dp0web"
python -m http.server 8080 --bind 0.0.0.0
