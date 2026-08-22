# SDN WARAKAS 3 — Sinkronisasi Otomatis

Aplikasi sudah disiapkan agar data tersimpan di server dan otomatis dikirim ke semua perangkat/browser yang membuka link server yang sama.

## Jalankan di server
1. Install Node.js.
2. Ekstrak folder ini.
3. Buka terminal di folder.
4. Jalankan `npm install`.
5. Jalankan `npm start`.
6. Buka `http://IP-SERVER:8080/` dari HP/laptop guru, operator, dan kepala sekolah.

## Yang disinkronkan
- Data siswa semua kelas
- Absensi
- Nilai semua mata pelajaran
- Jadwal, tugas, remedial, pengayaan, jurnal, karakter, orang tua, kebersihan, inventaris, keuangan, evaluasi, rapor, dan data aplikasi lain yang tersimpan dalam objek kelas
- Pengaturan sekolah
- Perubahan dikirim otomatis saat disimpan dan juga diperiksa berkala.
- Jika koneksi terputus, aplikasi mencoba tersambung kembali otomatis.
- Server menyimpan salinan di `server-data.json` sehingga data tidak hilang ketika server Node direstart.

## Catatan penting
Sinkronisasi antar perangkat membutuhkan satu server yang dapat diakses semua pengguna. File HTML yang dibuka langsung (`file://`) tetap bisa dipakai offline, tetapi tidak dapat melakukan sinkronisasi cloud.

Untuk beberapa server sekaligus (load balancer/multi-instance), `server-data.json` harus diganti database bersama seperti PostgreSQL/Supabase/Firebase agar semua instance memakai sumber data yang sama.
