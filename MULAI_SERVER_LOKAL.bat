@echo off
setlocal
cd /d "%~dp0"
where php >nul 2>nul
if errorlevel 1 (
  echo.
  echo PHP belum ditemukan.
  echo Install PHP 8.x atau gunakan XAMPP, lalu jalankan file ini lagi.
  echo.
  pause
  exit /b 1
)
if not exist data mkdir data
if not exist data\media mkdir data\media
if not exist data\sync.json echo {"version":0,"updated_at":0,"settings":[],"db":{"anggota":[],"buku":[],"pengunjung":[],"transaksi":[]},"tombstones":{"anggota":[],"buku":[],"pengunjung":[],"transaksi":[]}} > data\sync.json
for /f "tokens=2 delims=1: " %%a in ('ipconfig ^| findstr /R /C:"IPv4 Address" /C:"IPv4 Address.*:"') do set IP=%%a
if "%IP%"=="" set IP=localhost
set IP=%IP: =%
echo.
echo ================================================
echo   PERPUSTAKAAN LENTERA HATI - SERVER LOKAL
echo ================================================
echo Laptop : http://localhost:8080
echo HP     : http://%IP%:8080
echo.
echo Pastikan HP dan laptop tersambung Wi-Fi yang sama.
echo Jangan tutup jendela ini selama server digunakan.
echo ================================================
echo.
php -S 0.0.0.0:8080 -t "%~dp0"
endlocal
