VERSI 91 - PERBAIKAN FOTO, RESPONSIVE HP, DDC/LEVEL
====================================================

Perbaikan utama:
1. Daftar anggota sekarang memiliki kolom FOTO.
2. Foto anggota langsung tampil; klik foto membuka foto besar.
3. Foto buku langsung tampil; klik foto membuka foto besar.
4. Jika foto belum ada di perangkat tetapi tersedia di server, aplikasi mencoba mengambilnya otomatis.
5. Tabel buku di HP berubah menjadi kartu/grid sehingga tulisan tidak melebar keluar layar.
6. Judul buku, penulis, penerbit, DDC, nomor klasifikasi, level, rak, jumlah, tersedia, dan dipinjam tetap terlihat.
7. Pencarian buku juga mencakup DDC, nomor klasifikasi, level, dan rak.
8. Header daftar buku diseragamkan dengan data yang ditampilkan.
9. Header daftar anggota ditambah Foto.
10. Patch ditempatkan sebagai lapisan final agar menimpa patch V70-V90 yang sebelumnya saling menimpa fungsi render.
11. Tidak menghapus data lama.

Catatan:
- Foto memakai penyimpanan media yang sudah ada di proyek.
- DDC tetap mengikuti mesin DDC yang sudah tersedia di proyek; patch ini tidak mengganti aturan klasifikasi lama secara paksa.
- Jika suatu data buku memang tidak memiliki field level/tingkat, tampilan akan menunjukkan '-'.
