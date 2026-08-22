SDN WARAKAS 3 - SINKRONISASI ONLINE

Versi ini menggunakan PostgreSQL Railway sebagai sumber data bersama.
- Semua HP/laptop membuka link aplikasi yang sama.
- Sinkronisasi utama menggunakan HTTP API /api/state setiap 2 detik.
- WebSocket tetap aktif sebagai percepatan realtime bila tersedia.
- Perubahan kelas dikirim per-kelas agar perubahan di Kelas 1 tidak menimpa Kelas 2.
- Import Excel dan restore backup menggunakan sinkronisasi seluruh sekolah.
- Database kosong akan otomatis diisi oleh perangkat pertama yang tersambung.
- Jangan membuka file HTML langsung dari File Manager; gunakan link Railway HTTPS.
- Pastikan service aplikasi Railway dan PostgreSQL sama-sama Online serta DATABASE_URL sudah direferensikan.
