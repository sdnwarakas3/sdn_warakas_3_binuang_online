PERPUSTAKAAN LENTERA HATI WARAKAS 3 – V42 HOTFIX

Perbaikan utama:
1. Foto anggota pribadi sekarang dipakai langsung pada kartu anggota dan hasil cetak.
2. Foto dicari berdasarkan beberapa identitas stabil: ID, NISN/NIS, dan Kode Anggota.
3. Ini memperbaiki kasus ID siswa yang dinormalisasi server menjadi siswa-NIS sehingga foto tidak lagi hilang setelah sinkronisasi.
4. Saat upload foto, file disimpan lokal dan langsung dikirim ke server pusat pada identitas stabil anggota.
5. Preview kartu dan cetak kartu menunggu foto asli sebelum kartu dibuat, bukan memakai ilustrasi default bila foto pribadi tersedia.
6. Sinkronisasi data dipercepat: retry pending lebih rapat dan polling perubahan server lebih cepat.
7. Service Worker/cache dinaikkan ke V42 dan perbaikan JavaScript yang membuat tombol Aksi tidak berfungsi. agar update tidak tertahan versi lama.

Domain server pusat:
https://lenterahatiwarakas3.great-site.net/

Catatan:
- Semua HP/laptop/browser yang memakai domain pusat mengambil data dari server pusat yang sama.
- Foto memakai endpoint media server terpisah dari sync.json, sehingga V41 juga memperbaiki sinkronisasi foto.
