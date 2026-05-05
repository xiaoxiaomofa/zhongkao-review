@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ⚚ 庐江中考特训营 · 手机访问服务
echo.
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /i "IPv4"') do (
  set ip=%%a
  goto :found
)
:found
set ip=%ip: =%
echo 在手机浏览器输入: http://%ip%:8080
echo.
echo 关闭此窗口即停止服务
echo ═══════════════════════════════════
python -m http.server 8080 --bind 0.0.0.0
pause
