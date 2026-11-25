V16 - PERPUSTAKAAN LENTERA HATI SD NEGERI WARAKAS 3

PERBAIKAN UTAMA:
- Sinkronisasi antar HP/laptop memakai server pusat yang sama.
- Server memakai lock file + atomic write agar dua perangkat yang menulis bersamaan tidak saling menimpa.
- Perangkat aktif mengecek versi server sangat cepat (±0,5 detik) dan mengambil data terbaru otomatis tanpa refresh.
- Data yang baru dibuat akan dikirim otomatis setelah disimpan.
- Jika pengiriman gagal, aplikasi mencoba lagi otomatis.
- Tombol Instal Aplikasi tetap tampil pada browser/link selama perangkat belum terinstal.
- Setelah benar-benar terinstal, tombol disembunyikan.
- Refresh halaman tidak menampilkan splash lagi; splash hanya pada pembukaan aplikasi awal.

PENTING SAAT UPLOAD:
Upload seluruh isi ZIP ke folder server yang sama. Pastikan api.php, config.php, sw.js, manifest.webmanifest, dan folder data ikut ter-upload.
HP dan laptop harus membuka URL/folder aplikasi yang sama agar menggunakan data/sync.json server yang sama.
