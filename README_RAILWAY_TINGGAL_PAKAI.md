# SDN WARAKAS 3 — Railway + PostgreSQL

## Struktur siap deploy
- `server.js` — HTTP + WebSocket + PostgreSQL.
- `APLIKASI_ADMINISTRASI_GURU_SDN_WARAKAS_3.html` — aplikasi utama.
- `Dockerfile` — image Node.js untuk Railway.
- `railway.toml` — health check dan start command.
- `schema.sql` — struktur database referensi.
- `package.json` — dependensi `pg` dan `ws`.

## Deploy
1. Buat project baru di Railway.
2. Tambahkan service PostgreSQL.
3. Deploy folder/repository ini sebagai service aplikasi.
4. Pastikan variable `DATABASE_URL` direferensikan dari service PostgreSQL.
5. Generate public domain HTTPS.
6. Buka domain tersebut di semua HP/laptop. WebSocket otomatis memakai `wss://`.

## Verifikasi
Buka `/health`. Respons harus menunjukkan `database: postgresql`.

## Catatan sinkronisasi
Database PostgreSQL adalah sumber data bersama. Browser tetap menyimpan cache lokal untuk kondisi offline. Perubahan lokal yang belum terkirim ditandai `syncDirty` dan baru dihapus setelah server mengirim konfirmasi sinkronisasi. Jika perangkat offline lebih lama dan versinya lebih lama dari server, server akan menang sebagai versi terbaru.
