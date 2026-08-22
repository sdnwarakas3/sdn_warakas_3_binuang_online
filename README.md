# SDN WARAKAS 3 - Online Railway

Aplikasi administrasi guru SDN Warakas 3 dengan PostgreSQL online dan sinkronisasi realtime.

## Deploy Railway

1. Upload seluruh isi folder ini ke repository GitHub. File `package.json` harus berada di root repository.
2. Di Railway pilih **New Project -> Deploy from GitHub Repo** lalu pilih repository ini.
3. Tambahkan **PostgreSQL** melalui **New -> Database -> PostgreSQL**.
4. Pada service aplikasi, buat variable:
   `DATABASE_URL=${{Postgres.DATABASE_URL}}`
5. Deploy. Railway menggunakan `Dockerfile` dan `railway.toml` yang sudah disertakan.
6. Setelah deployment sukses, buka **Settings -> Networking -> Generate Domain**.
7. Gunakan domain tersebut pada semua HP dan laptop. Semua perangkat memakai database PostgreSQL yang sama.

## Pemeriksaan

- Health check: `/health`
- Aplikasi: `/`
- WebSocket otomatis memakai `wss://` saat domain menggunakan HTTPS.

Jangan menyimpan password database di GitHub. Gunakan Variables/Secrets Railway.
