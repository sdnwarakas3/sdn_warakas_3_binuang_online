VERSI LAPTOP LOCAL HOST + HP CLIENT
====================================

1. INSTALL PHP 8.x di laptop, atau gunakan XAMPP yang sudah memiliki PHP.
2. Ekstrak ZIP ini ke folder yang mudah ditemukan.
3. Windows: klik dua kali MULAI_SERVER_LOKAL.bat.
   Linux/macOS: jalankan ./mulai-server-lokal.sh
4. Biarkan jendela server tetap terbuka.
5. Di laptop buka: http://localhost:8080
6. Lihat alamat IP laptop yang ditampilkan oleh server, contoh:
   http://192.168.1.10:8080
7. Hubungkan HP ke Wi-Fi yang sama dengan laptop.
8. Di browser HP buka alamat IP laptop tersebut, contoh:
   http://192.168.1.10:8080
9. Login menggunakan:
   Username: gugun
   Password: gugunpetugasperpustakaan

CARA KERJA
----------
- Laptop adalah server/data utama.
- HP adalah client.
- Keduanya menggunakan api.php yang ada di laptop.
- Data dan foto yang dikirim HP disimpan di laptop/data/.
- Foto anggota dan buku disimpan di laptop/data/media/.
- Tidak perlu internet untuk mode lokal; cukup jaringan Wi-Fi lokal.
- Jika Windows Firewall bertanya, izinkan PHP pada jaringan Private.

PENTING
-------
- Jangan menutup jendela MULAI_SERVER_LOKAL.bat selama aplikasi dipakai.
- Jika IP laptop berubah, gunakan IP baru yang ditampilkan server.
- Untuk akses internet/hosting Kesug, aplikasi tetap mempertahankan mode server internet.
- Sebelum migrasi penuh, buat backup dari menu Pengaturan.

PEMINDAHAN DATA DARI SERVER INTERNET
-------------------------------------
Versi lokal ini tidak otomatis mengambil seluruh data Kesug saat pertama kali
server lokal dinyalakan. Untuk mencegah data lokal tertimpa, pindahkan data
lama melalui backup/pulihkan terlebih dahulu. Setelah data berada di laptop,
HP cukup memakai alamat IP laptop.
