# SDN WARAKAS 3 — VERSI ONLINE & SINKRON OTOMATIS

Versi ini memakai **1 server pusat**. HP, laptop, guru, operator, dan kepala sekolah cukup membuka **link yang sama**. Semua perubahan disimpan di server dan dikirim otomatis ke perangkat lain melalui WebSocket.

## Cara paling mudah membuat link online
1. Upload folder `warakas` ke GitHub sebagai repository.
2. Di Render pilih **New Web Service** → hubungkan repository tersebut.
3. Render akan membaca `render.yaml`/`Dockerfile` dan menjalankan aplikasi.
4. Setelah selesai, buka alamat HTTPS yang diberikan Render.
5. Bagikan **alamat HTTPS yang sama** ke semua HP dan laptop.
6. Jangan membuka file HTML langsung dari WhatsApp/File Manager (`file://`) jika ingin sinkron.

## Penting
- Semua perangkat harus memakai link server pusat yang sama.
- Tidak perlu membuat server berbeda di setiap HP/laptop.
- Ikon status aplikasi akan menunjukkan ONLINE saat WebSocket tersambung.
- Jika internet terputus, aplikasi tetap menyimpan data lokal dan akan mencoba tersambung kembali.
- Data server berada di `server-data.json`. Pada hosting yang penyimpanannya sementara, gunakan VPS/hosting dengan persistent disk atau pindahkan penyimpanan ke database bersama.
- Untuk penggunaan sekolah jangka panjang dan banyak pengguna, database bersama (PostgreSQL/Supabase/Firebase) lebih aman daripada file JSON.

## Jalankan sendiri di laptop/server
Node.js 18+:
```bash
npm install
npm start
```
Kemudian buka `http://IP-SERVER:8080/` dari perangkat lain pada jaringan/internet yang dapat mengakses server.

## Fitur sinkron
- Data siswa seluruh kelas
- Absensi
- Nilai semua mata pelajaran
- Jadwal, tugas/PR, remedial, pengayaan
- Jurnal, karakter, komunikasi orang tua
- Kebersihan, inventaris, keuangan
- Evaluasi, rapor, persiapan rapor
- Pengaturan sekolah
- Reconnect otomatis ketika koneksi terputus

## Catatan keamanan
Sebelum dipakai secara resmi, ubah akun admin bawaan di aplikasi dan gunakan HTTPS. Jangan membagikan password admin kepada pengguna umum.
