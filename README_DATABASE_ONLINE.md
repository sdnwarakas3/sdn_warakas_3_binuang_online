# SDN WARAKAS 3 - DATABASE ONLINE BERSAMA

Versi ini memakai PostgreSQL sebagai sumber data utama. `server-data.json` bukan database utama lagi.

## Deploy cepat dengan Supabase + Render
1. Buat project PostgreSQL di Supabase.
2. Salin connection string PostgreSQL dari Supabase (gunakan URI/password database, bukan anon key).
3. Buat Web Service baru di Render dari folder/repository ini.
4. Render membaca `render.yaml` dan meminta `DATABASE_URL`.
5. Isi `DATABASE_URL` dengan connection string PostgreSQL.
6. Deploy. Buka URL HTTPS Render.
7. Semua HP/laptop membuka URL yang sama. WebSocket akan memakai `wss://` otomatis.

## Alternatif
Bisa memakai Neon, Railway PostgreSQL, atau PostgreSQL VPS. Cukup set `DATABASE_URL`.

## Keamanan
- DATABASE_URL hanya berada di server, jangan dimasukkan ke HTML.
- Aktifkan HTTPS pada hosting.
- Backup database secara berkala.
- Aplikasi tetap menyimpan cache lokal di browser agar bisa dipakai sementara saat internet terputus, lalu sinkron kembali saat koneksi tersedia.

## Health check
Buka `/health`. Jika berhasil akan terlihat `database: postgresql`.
