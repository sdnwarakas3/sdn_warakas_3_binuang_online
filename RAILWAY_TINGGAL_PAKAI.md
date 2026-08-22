# SDN WARAKAS 3 — Railway + PostgreSQL

Paket ini sudah disiapkan untuk Railway.

## Yang dilakukan
1. Buat project baru di Railway.
2. Tambahkan PostgreSQL ke project.
3. Deploy folder ini sebagai service aplikasi.
4. Railway akan menyediakan `DATABASE_URL` dari PostgreSQL.
5. Tambahkan domain/public URL pada service aplikasi.
6. Buka URL tersebut di semua HP/laptop. Semua perangkat memakai database pusat yang sama.

## Variabel aplikasi
Tidak perlu menyalin password database secara manual jika memakai PostgreSQL Railway. Gunakan reference variable:

`DATABASE_URL=${{Postgres.DATABASE_URL}}`

Tambahkan juga:

`DATABASE_SSL=true`

`DB_POOL_MAX=10`

## Pemeriksaan
Setelah deploy, buka:

`https://DOMAIN-ANDA/health`

Harus muncul JSON dengan `ok: true` dan `database: "postgresql"`.

## Catatan keamanan
Jangan memasukkan password database ke source code atau Git. Railway sebaiknya membuat kredensial PostgreSQL secara otomatis.
