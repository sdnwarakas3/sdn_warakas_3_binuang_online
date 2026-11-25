#!/bin/sh
cd "$(dirname "$0")" || exit 1
command -v php >/dev/null 2>&1 || { echo "PHP belum ditemukan. Install PHP 8.x terlebih dahulu."; exit 1; }
mkdir -p data/media
if [ ! -f data/sync.json ]; then
cat > data/sync.json <<'JSON'
{"version":0,"updated_at":0,"settings":[],"db":{"anggota":[],"buku":[],"pengunjung":[],"transaksi":[]},"tombstones":{"anggota":[],"buku":[],"pengunjung":[],"transaksi":[]}}
JSON
fi
IP=$(hostname -I 2>/dev/null | awk '{print $1}')
[ -z "$IP" ] && IP="IP-LAPTOP"
echo "========================================"
echo "PERPUSTAKAAN - SERVER LOKAL"
echo "Laptop: http://localhost:8080"
echo "HP    : http://$IP:8080"
echo "HP dan laptop harus satu Wi-Fi."
echo "Jangan tutup terminal ini."
echo "========================================"
php -S 0.0.0.0:8080 -t "$(pwd)"
