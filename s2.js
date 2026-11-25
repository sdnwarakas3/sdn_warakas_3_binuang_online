
const STUDENTS=[]; const STUDENT_FIELDS=[]; const DAFTAR_KELAS=["KELAS 1 A","KELAS 1 B","KELAS 2 A","KELAS 2 B","KELAS 3 A","KELAS 3 B","KELAS 4 A","KELAS 4 B","KELAS 5 A","KELAS 5 B","KELAS 6 A","KELAS 6 B"]; const DATA_ANGGOTA_EXCEL_301=[{"id":"siswa-1968","kode":"SIS-1968","nama":"AFIKA SALSABILA","kelas":"KELAS 1","nis":"1968","nisn":"3200331596","jenis":"Siswa","kelamin":"P","alamat":"KP.SAMBIAYUNAN","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1970","kode":"SIS-1970","nama":"AMELIA PUTRI ASMARANI","kelas":"KELAS 1","nis":"1970","nisn":"3208157975","jenis":"Siswa","kelamin":"P","alamat":"KP.SAMBIAYUNAN","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1971","kode":"SIS-1971","nama":"AQILA RAFANIA HASNA","kelas":"KELAS 1","nis":"1971","nisn":"3203505178","jenis":"Siswa","kelamin":"P","alamat":"KP.SAMBIAYUNAN","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1972","kode":"SIS-1972","nama":"AZKHIYA NUR SYVA","kelas":"KELAS 1","nis":"1972","nisn":"3202382757","jenis":"Siswa","kelamin":"P","alamat":"KP.SAMBIAYUNAN","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1973","kode":"SIS-1973","nama":"AZZAM PUTRA","kelas":"KELAS 1","nis":"1973","nisn":"3209808847","jenis":"Siswa","kelamin":"L","alamat":"KP.SAMBIAYUNAN","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1975","kode":"SIS-1975","nama":"DAFIYA SUHAILA MUIN","kelas":"KELAS 1","nis":"1975","nisn":"3205657338","jenis":"Siswa","kelamin":"P","alamat":"KP.SAMBIAYUNAN","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1976","kode":"SIS-1976","nama":"DERY PRADIPTA HIDAYATULLAH","kelas":"KELAS 1","nis":"1976","nisn":"3208465216","jenis":"Siswa","kelamin":"L","alamat":"KP.SAMBIAYUNAN","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1978","kode":"SIS-1978","nama":"FEBRIYANI","kelas":"KELAS 1","nis":"1978","nisn":"3202694720","jenis":"Siswa","kelamin":"P","alamat":"LANUD GORDA KM.5","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1979","kode":"SIS-1979","nama":"FIKIH SAPUTRA","kelas":"KELAS 1","nis":"1979","nisn":"3206848663","jenis":"Siswa","kelamin":"L","alamat":"KP.SAMBIAYUNAN","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1988","kode":"SIS-1988","nama":"KINANTI FATINA AYU ARDANI","kelas":"KELAS 1","nis":"1988","nisn":"3209313605","jenis":"Siswa","kelamin":"P","alamat":"KP.SAMBIAYUNAN","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1990","kode":"SIS-1990","nama":"MANISA HUMAIRA","kelas":"KELAS 1","nis":"1990","nisn":"3201311696","jenis":"Siswa","kelamin":"P","alamat":"LANUD GORDA","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1991","kode":"SIS-1991","nama":"MAULANA IBRAHIM","kelas":"KELAS 1","nis":"1991","nisn":"3207796084","jenis":"Siswa","kelamin":"L","alamat":"KP.SAMBIAYUNAN","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1993","kode":"SIS-1993","nama":"MUHAMAD DIRGA","kelas":"KELAS 1","nis":"1993","nisn":"3199433636","jenis":"Siswa","kelamin":"L","alamat":"KP. NAGREG","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1994","kode":"SIS-1994","nama":"MUHAMAD FADLAN","kelas":"KELAS 1","nis":"1994","nisn":"3193553396","jenis":"Siswa","kelamin":"L","alamat":"SAMBIAYUNAN","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1997","kode":"SIS-1997","nama":"MUHAMAD KHOTIB","kelas":"KELAS 1","nis":"1997","nisn":"3191712967","jenis":"Siswa","kelamin":"L","alamat":"SAMBIAYUNAN","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1998","kode":"SIS-1998","nama":"MUHAMAD RADEN MALIK","kelas":"KELAS 1","nis":"1998","nisn":"3202945034","jenis":"Siswa","kelamin":"L","alamat":"KP. NAGREG","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1999","kode":"SIS-1999","nama":"MUHAMAD RADIT","kelas":"KELAS 1","nis":"1999","nisn":"3201035618","jenis":"Siswa","kelamin":"L","alamat":"BOJONG CIRUK","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-2000","kode":"SIS-2000","nama":"MUHAMAD RIDWAN","kelas":"KELAS 1","nis":"2000","nisn":"3203053908","jenis":"Siswa","kelamin":"L","alamat":"KP.SAMBIAYUNAN","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-2001","kode":"SIS-2001","nama":"MUHAMAD SAEPUWLOH","kelas":"KELAS 1","nis":"2001","nisn":"3201338315","jenis":"Siswa","kelamin":"L","alamat":"KP.SAMBIAYUNAN","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-2004","kode":"SIS-2004","nama":"MUHAMMAD IHSAN SHIDDIQ","kelas":"KELAS 1","nis":"2004","nisn":"3191347343","jenis":"Siswa","kelamin":"L","alamat":"PASIR NAGREG","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-2005","kode":"SIS-2005","nama":"MUTIA PUTRI","kelas":"KELAS 1","nis":"2005","nisn":"3202711858","jenis":"Siswa","kelamin":"P","alamat":"KP.SAMBIAYUNAN","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-2006","kode":"SIS-2006","nama":"NASHWA NURSYAHIRA","kelas":"KELAS 1","nis":"2006","nisn":"3201580719","jenis":"Siswa","kelamin":"P","alamat":"KP. NAGREG","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-2010","kode":"SIS-2010","nama":"SELIA AMIRA YULIANTI","kelas":"KELAS 1","nis":"2010","nisn":"3208920533","jenis":"Siswa","kelamin":"P","alamat":"KP.SAMBIAYUNAN","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-2012","kode":"SIS-2012","nama":"SITI SUSILAWATI","kelas":"KELAS 1","nis":"2012","nisn":"3193401117","jenis":"Siswa","kelamin":"P","alamat":"KP.SAMBIAYUNAN","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1967","kode":"SIS-1967","nama":"ADITYA","kelas":"KELAS 1","nis":"1967","nisn":"3185349474","jenis":"Siswa","kelamin":"L","alamat":"KP.BOJONG","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1969","kode":"SIS-1969","nama":"AMANDA","kelas":"KELAS 1","nis":"1969","nisn":"3208828098","jenis":"Siswa","kelamin":"P","alamat":"KP BOJONG GEBANG","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1974","kode":"SIS-1974","nama":"CAISYA AULIA","kelas":"KELAS 1","nis":"1974","nisn":"3209376044","jenis":"Siswa","kelamin":"P","alamat":"KP.BOJONG CIRUK","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1977","kode":"SIS-1977","nama":"FAHRI","kelas":"KELAS 1","nis":"1977","nisn":"3204804372","jenis":"Siswa","kelamin":"L","alamat":"KP.BOJONG CIRUK","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1980","kode":"SIS-1980","nama":"FINA ROHMATIKA","kelas":"KELAS 1","nis":"1980","nisn":"3209602641","jenis":"Siswa","kelamin":"P","alamat":"KP.BOJONG","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1981","kode":"SIS-1981","nama":"HASBIRAN","kelas":"KELAS 1","nis":"1981","nisn":"3192714233","jenis":"Siswa","kelamin":"L","alamat":"KP.PASIR JAMBU","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1982","kode":"SIS-1982","nama":"INAYAH","kelas":"KELAS 1","nis":"1982","nisn":"3194807671","jenis":"Siswa","kelamin":"P","alamat":"KP PASIR JAMBU","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1983","kode":"SIS-1983","nama":"IZA ABDUR ROHMAN","kelas":"KELAS 1","nis":"1983","nisn":"3207463640","jenis":"Siswa","kelamin":"L","alamat":"KP.SAMBIAYUNAN","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1984","kode":"SIS-1984","nama":"IZI ABDUR ROHIM","kelas":"KELAS 1","nis":"1984","nisn":"3208777629","jenis":"Siswa","kelamin":"L","alamat":"KP.SAMBIAYUNAN","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1985","kode":"SIS-1985","nama":"JIDAN HIDAYATULLAH","kelas":"KELAS 1","nis":"1985","nisn":"3194471046","jenis":"Siswa","kelamin":"L","alamat":"KP BOJONG GEBANG","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1986","kode":"SIS-1986","nama":"JUHANAH","kelas":"KELAS 1","nis":"1986","nisn":"3208279596","jenis":"Siswa","kelamin":"P","alamat":"KP. NAGREG","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1987","kode":"SIS-1987","nama":"KHAERUNNISA","kelas":"KELAS 1","nis":"1987","nisn":"3206446113","jenis":"Siswa","kelamin":"P","alamat":"KP.BOJONG CIRUK","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1989","kode":"SIS-1989","nama":"M. RIZKI MAULANA","kelas":"KELAS 1","nis":"1989","nisn":"3193345974","jenis":"Siswa","kelamin":"L","alamat":"KP.SAMBIAYUNAN","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1992","kode":"SIS-1992","nama":"MUHAMAD DAFFA","kelas":"KELAS 1","nis":"1992","nisn":"3202805055","jenis":"Siswa","kelamin":"L","alamat":"KP.SA,MBIAYUNAN","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1995","kode":"SIS-1995","nama":"MUHAMAD HABIB SARMAN","kelas":"KELAS 1","nis":"1995","nisn":"3192753597","jenis":"Siswa","kelamin":"L","alamat":"KP.BOJONG CIRUK","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1996","kode":"SIS-1996","nama":"MUHAMAD IHSAN HABIBI","kelas":"KELAS 1","nis":"1996","nisn":"3204323943","jenis":"Siswa","kelamin":"L","alamat":"KP.PASIR JAMBU","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-2002","kode":"SIS-2002","nama":"MUHAMMAD ARKA","kelas":"KELAS 1","nis":"2002","nisn":"3209652720","jenis":"Siswa","kelamin":"L","alamat":"BOJONG CIRUK","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-2003","kode":"SIS-2003","nama":"MUHAMMAD ASHURA","kelas":"KELAS 1","nis":"2003","nisn":"3206501078","jenis":"Siswa","kelamin":"L","alamat":"KP,BOJONG CIRUK","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-2007","kode":"SIS-2007","nama":"NOFITA","kelas":"KELAS 1","nis":"2007","nisn":"3194326741","jenis":"Siswa","kelamin":"P","alamat":"KP.PASIR JAMBU","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-2008","kode":"SIS-2008","nama":"NURJANAH","kelas":"KELAS 1","nis":"2008","nisn":"3204201853","jenis":"Siswa","kelamin":"P","alamat":"KP.BOJONG GEBANG","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-2009","kode":"SIS-2009","nama":"SALSABILA NHADIFA","kelas":"KELAS 1","nis":"2009","nisn":"3197444338","jenis":"Siswa","kelamin":"P","alamat":"KP.BOJONG CIRUK","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-2011","kode":"SIS-2011","nama":"SHIFAN AHMAD SYAKIR","kelas":"KELAS 1","nis":"2011","nisn":"3199281979","jenis":"Siswa","kelamin":"L","alamat":"KP.SAMBIAYUNAN","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-2013","kode":"SIS-2013","nama":"TIARA AMANDA","kelas":"KELAS 1","nis":"2013","nisn":"3201234005","jenis":"Siswa","kelamin":"P","alamat":"KP.SAMBIAYUNAN","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1912","kode":"SIS-1912","nama":"AISYAH NUR AINI","kelas":"KELAS 2","nis":"1912","nisn":"3194571879","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1914","kode":"SIS-1914","nama":"ALULA FARZANA AYUNINDYA","kelas":"KELAS 2","nis":"1914","nisn":"3189502236","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1916","kode":"SIS-1916","nama":"ARSYILA SAFINA","kelas":"KELAS 2","nis":"1916","nisn":"3193172419","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1965","kode":"SIS-1965","nama":"Ary Ibrahim Naran","kelas":"KELAS 2","nis":"1965","nisn":"3193581397","jenis":"Siswa","kelamin":"L","alamat":"Kampung Holtekamp","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1918","kode":"SIS-1918","nama":"DESI","kelas":"KELAS 2","nis":"1918","nisn":"3191909458","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1920","kode":"SIS-1920","nama":"ERWIN ARYANA","kelas":"KELAS 2","nis":"1920","nisn":"3194634078","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1922","kode":"SIS-1922","nama":"FATHIA AZZAHRA","kelas":"KELAS 2","nis":"1922","nisn":"3193742162","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1924","kode":"SIS-1924","nama":"FIKA ANINDA MAGFIROH","kelas":"KELAS 2","nis":"1924","nisn":"3190558344","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiyunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1926","kode":"SIS-1926","nama":"GAMA FAHREZZI","kelas":"KELAS 2","nis":"1926","nisn":"3198249834","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1928","kode":"SIS-1928","nama":"HANI WULANDARI","kelas":"KELAS 2","nis":"1928","nisn":"3197977930","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1930","kode":"SIS-1930","nama":"ISMATULLAH","kelas":"KELAS 2","nis":"1930","nisn":"3195398491","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1932","kode":"SIS-1932","nama":"KAHEEL ABIZAR","kelas":"KELAS 2","nis":"1932","nisn":"3193192357","jenis":"Siswa","kelamin":"L","alamat":"KP. NAGREG","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1934","kode":"SIS-1934","nama":"MUHAMAD ARDI AFRIANSAH","kelas":"KELAS 2","nis":"1934","nisn":"3195086110","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1936","kode":"SIS-1936","nama":"MUHAMAD IKHSAN PRAWIRA","kelas":"KELAS 2","nis":"1936","nisn":"3194742334","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1938","kode":"SIS-1938","nama":"MUHAMAD SANDI","kelas":"KELAS 2","nis":"1938","nisn":"3197338809","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1940","kode":"SIS-1940","nama":"MUHAMMAD NUR ROKHMAN","kelas":"KELAS 2","nis":"1940","nisn":"3196522420","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1944","kode":"SIS-1944","nama":"NUR HAJIJAH","kelas":"KELAS 2","nis":"1944","nisn":"3185555233","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1946","kode":"SIS-1946","nama":"NURUL HIDAYAH","kelas":"KELAS 2","nis":"1946","nisn":"3199080201","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1948","kode":"SIS-1948","nama":"PUTRI ANGGRAINI","kelas":"KELAS 2","nis":"1948","nisn":"3190801446","jenis":"Siswa","kelamin":"P","alamat":"Kp. Pasir Jambu","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1950","kode":"SIS-1950","nama":"RAISSA PUTRI","kelas":"KELAS 2","nis":"1950","nisn":"3196881732","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1952","kode":"SIS-1952","nama":"RIFQI AHMAD","kelas":"KELAS 2","nis":"1952","nisn":"3190557726","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1954","kode":"SIS-1954","nama":"SAHRIL","kelas":"KELAS 2","nis":"1954","nisn":"3195586448","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1958","kode":"SIS-1958","nama":"SARUDIN","kelas":"KELAS 2","nis":"1958","nisn":"3194511876","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1960","kode":"SIS-1960","nama":"SULAIMAN","kelas":"KELAS 2","nis":"1960","nisn":"3195784829","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1962","kode":"SIS-1962","nama":"WILDA","kelas":"KELAS 2","nis":"1962","nisn":"3190793774","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1913","kode":"SIS-1913","nama":"AISYILA ADZRA AIDHA","kelas":"KELAS 2","nis":"1913","nisn":"3183381600","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1915","kode":"SIS-1915","nama":"ARKA MUHAMMAD HAFIZ","kelas":"KELAS 2","nis":"1915","nisn":"3190889658","jenis":"Siswa","kelamin":"L","alamat":"Kp. Nagreg","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1917","kode":"SIS-1917","nama":"DENIS SETIAWAN","kelas":"KELAS 2","nis":"1917","nisn":"3183913971","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1919","kode":"SIS-1919","nama":"DEVINA FEBRIYANTI","kelas":"KELAS 2","nis":"1919","nisn":"3191894568","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1921","kode":"SIS-1921","nama":"FAHMI","kelas":"KELAS 2","nis":"1921","nisn":"3186901515","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1925","kode":"SIS-1925","nama":"FIKRI","kelas":"KELAS 2","nis":"1925","nisn":"3190439661","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1927","kode":"SIS-1927","nama":"HAFIDZ PRATAMA","kelas":"KELAS 2","nis":"1927","nisn":"3194385969","jenis":"Siswa","kelamin":"L","alamat":"Kp. Cogreg","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1929","kode":"SIS-1929","nama":"INTAN NURAINI","kelas":"KELAS 2","nis":"1929","nisn":"3197232574","jenis":"Siswa","kelamin":"P","alamat":"Kp. Pasir Jambu","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1931","kode":"SIS-1931","nama":"JESLIANA JASMIN","kelas":"KELAS 2","nis":"1931","nisn":"3199398797","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1933","kode":"SIS-1933","nama":"MAHENDRA ALFARIZKI","kelas":"KELAS 2","nis":"1933","nisn":"3181502317","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1935","kode":"SIS-1935","nama":"MUHAMAD FURQON","kelas":"KELAS 2","nis":"1935","nisn":"3182210688","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1937","kode":"SIS-1937","nama":"MUHAMAD NAZRIL ILHAM","kelas":"KELAS 2","nis":"1937","nisn":"3180675815","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1939","kode":"SIS-1939","nama":"MUHAMMAD DANISH","kelas":"KELAS 2","nis":"1939","nisn":"3186948559","jenis":"Siswa","kelamin":"L","alamat":"Kp. Citawa","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1941","kode":"SIS-1941","nama":"NABILA KARIMATUN NISA","kelas":"KELAS 2","nis":"1941","nisn":"3195503356","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1943","kode":"SIS-1943","nama":"NAUFAL AKBAR RAMADHAN","kelas":"KELAS 2","nis":"1943","nisn":"3197929537","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1945","kode":"SIS-1945","nama":"NUR HANIFAH","kelas":"KELAS 2","nis":"1945","nisn":"3193703972","jenis":"Siswa","kelamin":"P","alamat":"Kp. Nagreg","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1947","kode":"SIS-1947","nama":"PARHAN","kelas":"KELAS 2","nis":"1947","nisn":"3181043173","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1949","kode":"SIS-1949","nama":"RAFATAR RAMADAN","kelas":"KELAS 2","nis":"1949","nisn":"3193992957","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1951","kode":"SIS-1951","nama":"RESTU WULANDARI","kelas":"KELAS 2","nis":"1951","nisn":"3197357282","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1953","kode":"SIS-1953","nama":"RUDI","kelas":"KELAS 2","nis":"1953","nisn":"3198032812","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1955","kode":"SIS-1955","nama":"SAKILAH","kelas":"KELAS 2","nis":"1955","nisn":"3195869686","jenis":"Siswa","kelamin":"P","alamat":"Kp. Nagreg","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-2014","kode":"SIS-2014","nama":"SAKTI WIYAS PRATAMA","kelas":"KELAS 2","nis":"2014","nisn":"3180376112","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1957","kode":"SIS-1957","nama":"SAPAH OKTAVIA","kelas":"KELAS 2","nis":"1957","nisn":"3195097487","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1959","kode":"SIS-1959","nama":"SITI AISYAH","kelas":"KELAS 2","nis":"1959","nisn":"3193482289","jenis":"Siswa","kelamin":"P","alamat":"Kp. Pasir Jambu","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1961","kode":"SIS-1961","nama":"SYAHRUL KAMIL","kelas":"KELAS 2","nis":"1961","nisn":"3183894518","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1963","kode":"SIS-1963","nama":"WILDAN SOFIAN","kelas":"KELAS 2","nis":"1963","nisn":"3188179545","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1856","kode":"SIS-1856","nama":"ADITYA PUTRA","kelas":"KELAS 3","nis":"1856","nisn":"3175986776","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1858","kode":"SIS-1858","nama":"AFIFAH NASARI","kelas":"KELAS 3","nis":"1858","nisn":"3170273817","jenis":"Siswa","kelamin":"P","alamat":"Kp. Pasir Jambu","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1859","kode":"SIS-1859","nama":"AL HADI","kelas":"KELAS 3","nis":"1859","nisn":"3189277841","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1966","kode":"SIS-1966","nama":"Aldo ibrahim naran","kelas":"KELAS 3","nis":"1966","nisn":"3188111920","jenis":"Siswa","kelamin":"L","alamat":"Kampung holtekamp","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1860","kode":"SIS-1860","nama":"ALI ROHMAN","kelas":"KELAS 3","nis":"1860","nisn":"3183630472","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1861","kode":"SIS-1861","nama":"ALIKA NAILA PUTRI","kelas":"KELAS 3","nis":"1861","nisn":"3188302544","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1862","kode":"SIS-1862","nama":"ANANDA DEA SAFITRI","kelas":"KELAS 3","nis":"1862","nisn":"3184046475","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1863","kode":"SIS-1863","nama":"AULLIYA MISKARA","kelas":"KELAS 3","nis":"1863","nisn":"3183953651","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1864","kode":"SIS-1864","nama":"AZKA KHALIFA","kelas":"KELAS 3","nis":"1864","nisn":"3179325350","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1865","kode":"SIS-1865","nama":"AZKIA SAHIRA","kelas":"KELAS 3","nis":"1865","nisn":"3178800823","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1867","kode":"SIS-1867","nama":"AZWA ZAHWA","kelas":"KELAS 3","nis":"1867","nisn":"3185913613","jenis":"Siswa","kelamin":"P","alamat":"Kp. Pasir Jambu","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1869","kode":"SIS-1869","nama":"FARATUNISA","kelas":"KELAS 3","nis":"1869","nisn":"3185363006","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1870","kode":"SIS-1870","nama":"FEBRI HARYADI","kelas":"KELAS 3","nis":"1870","nisn":"3181868126","jenis":"Siswa","kelamin":"L","alamat":"Kp. Pasir Jambu","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1871","kode":"SIS-1871","nama":"KHAERUL AZWAN","kelas":"KELAS 3","nis":"1871","nisn":"3175522774","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1872","kode":"SIS-1872","nama":"KHUSNIA","kelas":"KELAS 3","nis":"1872","nisn":"3182712291","jenis":"Siswa","kelamin":"P","alamat":"Kp. Pasir Jambu","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1873","kode":"SIS-1873","nama":"MIMBI AFIFAH","kelas":"KELAS 3","nis":"1873","nisn":"3183352878","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1874","kode":"SIS-1874","nama":"MUHAMAD FATUROHMAN","kelas":"KELAS 3","nis":"1874","nisn":"3188495670","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1875","kode":"SIS-1875","nama":"MUHAMAD ILHAM","kelas":"KELAS 3","nis":"1875","nisn":"3185693454","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1876","kode":"SIS-1876","nama":"MUHAMAD IQBAL IBROHIM","kelas":"KELAS 3","nis":"1876","nisn":"3186040284","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1877","kode":"SIS-1877","nama":"MUHAMAD RAFA NURFAIZ","kelas":"KELAS 3","nis":"1877","nisn":"3178513435","jenis":"Siswa","kelamin":"L","alamat":"Kp. Dukuh","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1882","kode":"SIS-1882","nama":"MUHAMMAD AL MATIN","kelas":"KELAS 3","nis":"1882","nisn":"3182366609","jenis":"Siswa","kelamin":"L","alamat":"Kp. Nagreg","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1878","kode":"SIS-1878","nama":"MUHAMMAD AZRIL HISYAM","kelas":"KELAS 3","nis":"1878","nisn":"3187791897","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1879","kode":"SIS-1879","nama":"MUHAMMAD ILHAM","kelas":"KELAS 3","nis":"1879","nisn":"3183577799","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1880","kode":"SIS-1880","nama":"MUHAMMAD INDRA","kelas":"KELAS 3","nis":"1880","nisn":"3174158143","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1881","kode":"SIS-1881","nama":"MUHAMMAD KAKA PRADIPTA","kelas":"KELAS 3","nis":"1881","nisn":"3171271588","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1883","kode":"SIS-1883","nama":"MUHAMMAD RASYA ALFARIZI","kelas":"KELAS 3","nis":"1883","nisn":"3181363286","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1884","kode":"SIS-1884","nama":"MUHAMMAD SHAKIEL DZAKIANDRA","kelas":"KELAS 3","nis":"1884","nisn":"3184614625","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1885","kode":"SIS-1885","nama":"NABIL AUFAN","kelas":"KELAS 3","nis":"1885","nisn":"3189330629","jenis":"Siswa","kelamin":"L","alamat":"Kp. Pasir Jambu","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1886","kode":"SIS-1886","nama":"NUR AINI AGUSTINA","kelas":"KELAS 3","nis":"1886","nisn":"3185018702","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1887","kode":"SIS-1887","nama":"NURLENA","kelas":"KELAS 3","nis":"1887","nisn":"3173540639","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1888","kode":"SIS-1888","nama":"NURLENI","kelas":"KELAS 3","nis":"1888","nisn":"3176074916","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1889","kode":"SIS-1889","nama":"NURMAH","kelas":"KELAS 3","nis":"1889","nisn":"3180678018","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1890","kode":"SIS-1890","nama":"NURSELA","kelas":"KELAS 3","nis":"1890","nisn":"3187235751","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1891","kode":"SIS-1891","nama":"PUTRI AMANDA","kelas":"KELAS 3","nis":"1891","nisn":"3181526746","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1892","kode":"SIS-1892","nama":"RAISA PUTRI","kelas":"KELAS 3","nis":"1892","nisn":"3170504993","jenis":"Siswa","kelamin":"P","alamat":"Kp. Pasir Jambu","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1893","kode":"SIS-1893","nama":"SAFIRAH","kelas":"KELAS 3","nis":"1893","nisn":"3176746897","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1894","kode":"SIS-1894","nama":"SANDI ALPADIL","kelas":"KELAS 3","nis":"1894","nisn":"3186312674","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1895","kode":"SIS-1895","nama":"SATRIA IBRAHIM PRATAMA","kelas":"KELAS 3","nis":"1895","nisn":"3187529701","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1896","kode":"SIS-1896","nama":"SITI ANIQ NURONIYAH","kelas":"KELAS 3","nis":"1896","nisn":"3185413605","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1897","kode":"SIS-1897","nama":"SITI HAFIZDAH","kelas":"KELAS 3","nis":"1897","nisn":"3186078407","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1898","kode":"SIS-1898","nama":"SITI HERNAWATI","kelas":"KELAS 3","nis":"1898","nisn":"3184321611","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1899","kode":"SIS-1899","nama":"SITI MARYAM MINTEN","kelas":"KELAS 3","nis":"1899","nisn":"3177790081","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1900","kode":"SIS-1900","nama":"SOFHIA SALSABILA","kelas":"KELAS 3","nis":"1900","nisn":"3170229717","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1901","kode":"SIS-1901","nama":"SUHI","kelas":"KELAS 3","nis":"1901","nisn":"3186951149","jenis":"Siswa","kelamin":"L","alamat":"Kp. Nagreg","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1902","kode":"SIS-1902","nama":"TITI JULAENI","kelas":"KELAS 3","nis":"1902","nisn":"3187381502","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1903","kode":"SIS-1903","nama":"TONI","kelas":"KELAS 3","nis":"1903","nisn":"3188720874","jenis":"Siswa","kelamin":"L","alamat":"Kp. Pasir Jambu","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1904","kode":"SIS-1904","nama":"VIRZIN AISYAH","kelas":"KELAS 3","nis":"1904","nisn":"3187144559","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1806","kode":"SIS-1806","nama":"ADIT AFRIAN","kelas":"KELAS 4","nis":"1806","nisn":"3176374893","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1807","kode":"SIS-1807","nama":"AHMAD MAHFUDIN","kelas":"KELAS 4","nis":"1807","nisn":"3166178869","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1808","kode":"SIS-1808","nama":"ALBY FAHRY","kelas":"KELAS 4","nis":"1808","nisn":"3160786401","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1809","kode":"SIS-1809","nama":"ALFIN ALMANSYAH","kelas":"KELAS 4","nis":"1809","nisn":"3160837296","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1810","kode":"SIS-1810","nama":"ALGIO RIZKY","kelas":"KELAS 4","nis":"1810","nisn":"3162105031","jenis":"Siswa","kelamin":"L","alamat":"Kp. Nagreg","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1811","kode":"SIS-1811","nama":"ALYA SAHIRA","kelas":"KELAS 4","nis":"1811","nisn":"3173805216","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1812","kode":"SIS-1812","nama":"AMINAH","kelas":"KELAS 4","nis":"1812","nisn":"3163618973","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1813","kode":"SIS-1813","nama":"ASSYFA PUTRI","kelas":"KELAS 4","nis":"1813","nisn":"3175160897","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1814","kode":"SIS-1814","nama":"AWINDA","kelas":"KELAS 4","nis":"1814","nisn":"3171789688","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1815","kode":"SIS-1815","nama":"AYESHA FAROOQ","kelas":"KELAS 4","nis":"1815","nisn":"3163944566","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1816","kode":"SIS-1816","nama":"BILQIS MAULIDA","kelas":"KELAS 4","nis":"1816","nisn":"3177436372","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1906","kode":"SIS-1906","nama":"Daffa Ibnu Hafish","kelas":"KELAS 4","nis":"1906","nisn":"3168654499","jenis":"Siswa","kelamin":"L","alamat":"Kp. Soge","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1818","kode":"SIS-1818","nama":"DAISHA AL KHAIRA","kelas":"KELAS 4","nis":"1818","nisn":"3174251538","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1819","kode":"SIS-1819","nama":"DEFA MAULANA","kelas":"KELAS 4","nis":"1819","nisn":"3170721708","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1820","kode":"SIS-1820","nama":"FAHMI ALFARIZI","kelas":"KELAS 4","nis":"1820","nisn":"3163001030","jenis":"Siswa","kelamin":"L","alamat":"Kp. Nagreg","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1821","kode":"SIS-1821","nama":"FAHRI MAHESA","kelas":"KELAS 4","nis":"1821","nisn":"3171828616","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1822","kode":"SIS-1822","nama":"KARTIKAH","kelas":"KELAS 4","nis":"1822","nisn":"3175615627","jenis":"Siswa","kelamin":"P","alamat":"Kp. Pasir Jambu","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1855","kode":"SIS-1855","nama":"LUZUMY MUSARROFAH","kelas":"KELAS 4","nis":"1855","nisn":"3170409396","jenis":"Siswa","kelamin":"P","alamat":"Kp. Galih","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1823","kode":"SIS-1823","nama":"MAESA CALYA","kelas":"KELAS 4","nis":"1823","nisn":"3166309004","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1824","kode":"SIS-1824","nama":"MASPUPAH","kelas":"KELAS 4","nis":"1824","nisn":"3179134933","jenis":"Siswa","kelamin":"P","alamat":"Kp. Pasir jambu","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1825","kode":"SIS-1825","nama":"MAULANA SODIQIN","kelas":"KELAS 4","nis":"1825","nisn":"3174898205","jenis":"Siswa","kelamin":"L","alamat":"Kp. Pasir Jambu","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1826","kode":"SIS-1826","nama":"MUHAMAD AHSAN PRATAMA","kelas":"KELAS 4","nis":"1826","nisn":"3174092156","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1770","kode":"SIS-1770","nama":"MUHAMAD ALI SAPUTRA","kelas":"KELAS 4","nis":"1770","nisn":"3159165222","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1827","kode":"SIS-1827","nama":"MUHAMAD ASEP","kelas":"KELAS 4","nis":"1827","nisn":"3164157180","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1828","kode":"SIS-1828","nama":"MUHAMAD EVAN APANDI","kelas":"KELAS 4","nis":"1828","nisn":"3173328967","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1829","kode":"SIS-1829","nama":"MUHAMAD FAHREZI","kelas":"KELAS 4","nis":"1829","nisn":"3171268199","jenis":"Siswa","kelamin":"L","alamat":"Kp. Nagreg","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1830","kode":"SIS-1830","nama":"MUHAMAD HANDY SAEFULAAH","kelas":"KELAS 4","nis":"1830","nisn":"3163586361","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1832","kode":"SIS-1832","nama":"MUHAMAD RIPKI","kelas":"KELAS 4","nis":"1832","nisn":"3175576912","jenis":"Siswa","kelamin":"L","alamat":"Kp. Nagreg","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1833","kode":"SIS-1833","nama":"MUHAMAD RIZKI ALFIAN","kelas":"KELAS 4","nis":"1833","nisn":"3171528094","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1834","kode":"SIS-1834","nama":"MUHAMAD SAPUTRA","kelas":"KELAS 4","nis":"1834","nisn":"3160358895","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1907","kode":"SIS-1907","nama":"MUHAMAD ZULFADHLI","kelas":"KELAS 4","nis":"1907","nisn":"3177656427","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1835","kode":"SIS-1835","nama":"MUHAMMAD BARKAH ZAMZAMI","kelas":"KELAS 4","nis":"1835","nisn":"3170079770","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1836","kode":"SIS-1836","nama":"MUHAMMAD FAQIH AZZAM","kelas":"KELAS 4","nis":"1836","nisn":"3173511474","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1837","kode":"SIS-1837","nama":"MUHAMMAD RAYHAN SETIAWAN","kelas":"KELAS 4","nis":"1837","nisn":"3169106517","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1838","kode":"SIS-1838","nama":"MUHAMMAD RIZAL","kelas":"KELAS 4","nis":"1838","nisn":"3177764960","jenis":"Siswa","kelamin":"L","alamat":"Kp. Dukuh","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1839","kode":"SIS-1839","nama":"MUTMAINAH","kelas":"KELAS 4","nis":"1839","nisn":"3178685097","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1840","kode":"SIS-1840","nama":"NABILA AZZAHRA","kelas":"KELAS 4","nis":"1840","nisn":"3161091086","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1841","kode":"SIS-1841","nama":"NAELA ASTHI WINDRIYA","kelas":"KELAS 4","nis":"1841","nisn":"3175646403","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1842","kode":"SIS-1842","nama":"NEVAN FABIAN ARDHANI","kelas":"KELAS 4","nis":"1842","nisn":"3177464278","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1844","kode":"SIS-1844","nama":"NUR ADIZAH","kelas":"KELAS 4","nis":"1844","nisn":"3175433286","jenis":"Siswa","kelamin":"P","alamat":"Kp. Pasir Jambu","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1845","kode":"SIS-1845","nama":"NUR AZIZAH","kelas":"KELAS 4","nis":"1845","nisn":"3179905428","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1847","kode":"SIS-1847","nama":"RISMA NILAWATI","kelas":"KELAS 4","nis":"1847","nisn":"3172570088","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1848","kode":"SIS-1848","nama":"SALSABILA","kelas":"KELAS 4","nis":"1848","nisn":"3173787536","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1849","kode":"SIS-1849","nama":"SEPTYANI KHARISA PUTRI","kelas":"KELAS 4","nis":"1849","nisn":"3167502715","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1850","kode":"SIS-1850","nama":"SITI AULIA AZAHRA","kelas":"KELAS 4","nis":"1850","nisn":"3174376263","jenis":"Siswa","kelamin":"P","alamat":"Kp. Pasir Jambu","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1851","kode":"SIS-1851","nama":"SUCI AMELIA","kelas":"KELAS 4","nis":"1851","nisn":"3178974357","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1852","kode":"SIS-1852","nama":"SUCI KHOERULLISA","kelas":"KELAS 4","nis":"1852","nisn":"3171580524","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1853","kode":"SIS-1853","nama":"YUDI SAPUTRA","kelas":"KELAS 4","nis":"1853","nisn":"3172441422","jenis":"Siswa","kelamin":"L","alamat":"Kp. Pasir Jambu","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1746","kode":"SIS-1746","nama":"ABELIA PUTRI AHMAD","kelas":"KELAS 5","nis":"1746","nisn":"3157588344","jenis":"Siswa","kelamin":"P","alamat":"Kp. Wawuluh","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1747","kode":"SIS-1747","nama":"ABYDZIKRI KURNIAZAKI","kelas":"KELAS 5","nis":"1747","nisn":"3166398018","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1748","kode":"SIS-1748","nama":"ADAM BAKHRONI","kelas":"KELAS 5","nis":"1748","nisn":"3160186204","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1749","kode":"SIS-1749","nama":"ADELIA","kelas":"KELAS 5","nis":"1749","nisn":"3168966075","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1750","kode":"SIS-1750","nama":"ADELIA ZAHRA","kelas":"KELAS 5","nis":"1750","nisn":"3168836537","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1854","kode":"SIS-1854","nama":"AHMAD ZAKI AKARI","kelas":"KELAS 5","nis":"1854","nisn":"3158220213","jenis":"Siswa","kelamin":"L","alamat":"KP. NAGREG","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1751","kode":"SIS-1751","nama":"ALFIAH","kelas":"KELAS 5","nis":"1751","nisn":"3160085355","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1752","kode":"SIS-1752","nama":"ALFIN MAHESA","kelas":"KELAS 5","nis":"1752","nisn":"3155230048","jenis":"Siswa","kelamin":"L","alamat":"Kp. Asem","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1753","kode":"SIS-1753","nama":"ALIF NURI ANSORI","kelas":"KELAS 5","nis":"1753","nisn":"3160014548","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1760","kode":"SIS-1760","nama":"DEDE GUNAWAN","kelas":"KELAS 5","nis":"1760","nisn":"3162694383","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1762","kode":"SIS-1762","nama":"HAFIZAH ANGGRAENI","kelas":"KELAS 5","nis":"1762","nisn":"3159956141","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1764","kode":"SIS-1764","nama":"IRWAN","kelas":"KELAS 5","nis":"1764","nisn":"3163324106","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1766","kode":"SIS-1766","nama":"KHAERUL AZZAM","kelas":"KELAS 5","nis":"1766","nisn":"3164222767","jenis":"Siswa","kelamin":"L","alamat":"Kp. Pasir Jambu","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1767","kode":"SIS-1767","nama":"LUKMAN","kelas":"KELAS 5","nis":"1767","nisn":"3162378466","jenis":"Siswa","kelamin":"L","alamat":"Kp. Karenggan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1768","kode":"SIS-1768","nama":"MASITOH","kelas":"KELAS 5","nis":"1768","nisn":"0163389909","jenis":"Siswa","kelamin":"P","alamat":"Kp. Pasir Jambu","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1769","kode":"SIS-1769","nama":"MUHAMAD AGUSTIAN","kelas":"KELAS 5","nis":"1769","nisn":"3155377008","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1771","kode":"SIS-1771","nama":"MUHAMAD AMIN RIFKI","kelas":"KELAS 5","nis":"1771","nisn":"3150282562","jenis":"Siswa","kelamin":"L","alamat":"Kp. Nagreg","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1772","kode":"SIS-1772","nama":"MUHAMAD ANDIKA","kelas":"KELAS 5","nis":"1772","nisn":"3153340656","jenis":"Siswa","kelamin":"L","alamat":"Kp. Nagreg","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1783","kode":"SIS-1783","nama":"NABILA ZHAFIRA","kelas":"KELAS 5","nis":"1783","nisn":"3168722249","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1786","kode":"SIS-1786","nama":"RAFA FEBRIANSYAH","kelas":"KELAS 5","nis":"1786","nisn":"3164680195","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1787","kode":"SIS-1787","nama":"RAKA PERDIANSYAH","kelas":"KELAS 5","nis":"1787","nisn":"3166772778","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1789","kode":"SIS-1789","nama":"SAFIRA","kelas":"KELAS 5","nis":"1789","nisn":"3168518565","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1790","kode":"SIS-1790","nama":"SAHARI","kelas":"KELAS 5","nis":"1790","nisn":"3164329027","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1791","kode":"SIS-1791","nama":"SAIPUL ANWAR","kelas":"KELAS 5","nis":"1791","nisn":"3165897125","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1792","kode":"SIS-1792","nama":"SIDQIA NAYLA","kelas":"KELAS 5","nis":"1792","nisn":"3157670844","jenis":"Siswa","kelamin":"P","alamat":"Kp. Pasir Jambu","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1799","kode":"SIS-1799","nama":"TRI HADI WIJAYA","kelas":"KELAS 5","nis":"1799","nisn":"3159842388","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1800","kode":"SIS-1800","nama":"URFA AULIA NABILA","kelas":"KELAS 5","nis":"1800","nisn":"3166050575","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1801","kode":"SIS-1801","nama":"WULANDARI","kelas":"KELAS 5","nis":"1801","nisn":"3164044844","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-2015","kode":"SIS-2015","nama":"ANINDITA KEISHA ZAHRA","kelas":"KELAS 5","nis":"2015","nisn":"3164097162","jenis":"Siswa","kelamin":"P","alamat":"Kp. Nagreg","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1754","kode":"SIS-1754","nama":"ANISAH","kelas":"KELAS 5","nis":"1754","nisn":"3151766893","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1755","kode":"SIS-1755","nama":"ARDABILY","kelas":"KELAS 5","nis":"1755","nisn":"3150010995","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1756","kode":"SIS-1756","nama":"ARIS MUNANDAR","kelas":"KELAS 5","nis":"1756","nisn":"3151766534","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1757","kode":"SIS-1757","nama":"ASRUDIN","kelas":"KELAS 5","nis":"1757","nisn":"3158277292","jenis":"Siswa","kelamin":"L","alamat":"Kp. Pasir Jambu","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1758","kode":"SIS-1758","nama":"AYRA MYSHA NAIRA","kelas":"KELAS 5","nis":"1758","nisn":"3162575267","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1759","kode":"SIS-1759","nama":"BILQIS AULIA IFANI","kelas":"KELAS 5","nis":"1759","nisn":"3160003453","jenis":"Siswa","kelamin":"P","alamat":"Kp. Pasir Jambu","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1761","kode":"SIS-1761","nama":"GIYO","kelas":"KELAS 5","nis":"1761","nisn":"3163726473","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1763","kode":"SIS-1763","nama":"HARIRI","kelas":"KELAS 5","nis":"1763","nisn":"0156244968","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1773","kode":"SIS-1773","nama":"MUHAMAD FAJAR PUTRA","kelas":"KELAS 5","nis":"1773","nisn":"3168284893","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1774","kode":"SIS-1774","nama":"MUHAMAD HABIBI","kelas":"KELAS 5","nis":"1774","nisn":"3163009984","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1775","kode":"SIS-1775","nama":"MUHAMAD RIZKI","kelas":"KELAS 5","nis":"1775","nisn":"3152850970","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1776","kode":"SIS-1776","nama":"MUHAMAD RIZKY","kelas":"KELAS 5","nis":"1776","nisn":"3166415690","jenis":"Siswa","kelamin":"L","alamat":"Kp. Pasir Jambu","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1777","kode":"SIS-1777","nama":"MUHAMAD SOFIYAR AL ADIYAT","kelas":"KELAS 5","nis":"1777","nisn":"3164479697","jenis":"Siswa","kelamin":"L","alamat":"Kp. Pasir Jambu","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1778","kode":"SIS-1778","nama":"MUHAMAD YANWAR","kelas":"KELAS 5","nis":"1778","nisn":"3146076587","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1780","kode":"SIS-1780","nama":"MUHAMMAD NURDIN","kelas":"KELAS 5","nis":"1780","nisn":"3166112616","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1779","kode":"SIS-1779","nama":"MUHAMMAD REFANSYAH","kelas":"KELAS 5","nis":"1779","nisn":"3150469582","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1782","kode":"SIS-1782","nama":"MUTI'AH","kelas":"KELAS 5","nis":"1782","nisn":"3167138208","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1781","kode":"SIS-1781","nama":"MUTIARA FIDA ZAHRA","kelas":"KELAS 5","nis":"1781","nisn":"0145262465","jenis":"Siswa","kelamin":"P","alamat":"Kp. Nagreg","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1784","kode":"SIS-1784","nama":"NANDA FAZA EL WAFI","kelas":"KELAS 5","nis":"1784","nisn":"3169228490","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1785","kode":"SIS-1785","nama":"NIRAH RAHAYU","kelas":"KELAS 5","nis":"1785","nisn":"3153346541","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1788","kode":"SIS-1788","nama":"RAMDANI","kelas":"KELAS 5","nis":"1788","nisn":"3159570064","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1793","kode":"SIS-1793","nama":"SILVI ADELIA","kelas":"KELAS 5","nis":"1793","nisn":"3166509461","jenis":"Siswa","kelamin":"P","alamat":"Kp. Pasir Jambu","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1794","kode":"SIS-1794","nama":"SILVIA JAHRA","kelas":"KELAS 5","nis":"1794","nisn":"3165936995","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1795","kode":"SIS-1795","nama":"SITI FITRIYAH","kelas":"KELAS 5","nis":"1795","nisn":"3153662687","jenis":"Siswa","kelamin":"P","alamat":"Kp. Nagreg","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1796","kode":"SIS-1796","nama":"SITI KOTIJAH","kelas":"KELAS 5","nis":"1796","nisn":"3155552089","jenis":"Siswa","kelamin":"P","alamat":"Kp. Reno","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1797","kode":"SIS-1797","nama":"SITI ROHMAH","kelas":"KELAS 5","nis":"1797","nisn":"0169398000","jenis":"Siswa","kelamin":"P","alamat":"Kp. Pasir Jambu","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1798","kode":"SIS-1798","nama":"SYAQILA","kelas":"KELAS 5","nis":"1798","nisn":"3163295900","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1689","kode":"SIS-1689","nama":"ADI MARYADI","kelas":"KELAS 6","nis":"1689","nisn":"3150352214","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1690","kode":"SIS-1690","nama":"AHMAD DANI","kelas":"KELAS 6","nis":"1690","nisn":"3146127984","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1691","kode":"SIS-1691","nama":"AHMAD HAPID","kelas":"KELAS 6","nis":"1691","nisn":"0146346556","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1692","kode":"SIS-1692","nama":"AHMAD MUBAROK","kelas":"KELAS 6","nis":"1692","nisn":"3145343096","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1693","kode":"SIS-1693","nama":"AIDA NABILA","kelas":"KELAS 6","nis":"1693","nisn":"0152427341","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1802","kode":"SIS-1802","nama":"AISYATUS SALAMAH","kelas":"KELAS 6","nis":"1802","nisn":"0141041355","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1694","kode":"SIS-1694","nama":"ALIFAH NURAINI","kelas":"KELAS 6","nis":"1694","nisn":"3158610206","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1695","kode":"SIS-1695","nama":"ALYA DEWINA MARYAM","kelas":"KELAS 6","nis":"1695","nisn":"0159377773","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1696","kode":"SIS-1696","nama":"ALYA ZAZILAH","kelas":"KELAS 6","nis":"1696","nisn":"3155246983","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1697","kode":"SIS-1697","nama":"AMELIA ERNA WIDIA","kelas":"KELAS 6","nis":"1697","nisn":"3159154891","jenis":"Siswa","kelamin":"P","alamat":"Kp. Nagreg","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1698","kode":"SIS-1698","nama":"ANDRI MAULANA","kelas":"KELAS 6","nis":"1698","nisn":"0148041216","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1699","kode":"SIS-1699","nama":"AQILA ADELIA","kelas":"KELAS 6","nis":"1699","nisn":"0142945969","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1700","kode":"SIS-1700","nama":"AQILA WIDYA NINGSIH","kelas":"KELAS 6","nis":"1700","nisn":"3144848527","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1701","kode":"SIS-1701","nama":"ARYANTO","kelas":"KELAS 6","nis":"1701","nisn":"0146629525","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1702","kode":"SIS-1702","nama":"ASNAWATI","kelas":"KELAS 6","nis":"1702","nisn":"0159737488","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1911","kode":"SIS-1911","nama":"AURA SAPITRI","kelas":"KELAS 6","nis":"1911","nisn":"3146589691","jenis":"Siswa","kelamin":"P","alamat":"Teluk Gong","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1703","kode":"SIS-1703","nama":"BANI KUSUMA","kelas":"KELAS 6","nis":"1703","nisn":"0157427881","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1964","kode":"SIS-1964","nama":"DEFIKHA ANWAR","kelas":"KELAS 6","nis":"1964","nisn":"3131905215","jenis":"Siswa","kelamin":"P","alamat":"Jl. Gorda sadang Km.1.8","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1704","kode":"SIS-1704","nama":"DEVI","kelas":"KELAS 6","nis":"1704","nisn":"3152064534","jenis":"Siswa","kelamin":"P","alamat":"Kp. Reno","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1705","kode":"SIS-1705","nama":"DEWI PARWATI","kelas":"KELAS 6","nis":"1705","nisn":"3156086149","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1706","kode":"SIS-1706","nama":"DHAFITA NAHWAH","kelas":"KELAS 6","nis":"1706","nisn":"3158205187","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1707","kode":"SIS-1707","nama":"DIRGA SAPUTRA","kelas":"KELAS 6","nis":"1707","nisn":"3159725811","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1708","kode":"SIS-1708","nama":"ELSA VANIA","kelas":"KELAS 6","nis":"1708","nisn":"3155839120","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1709","kode":"SIS-1709","nama":"ERLANGGA DWI FEBRIYANTO","kelas":"KELAS 6","nis":"1709","nisn":"0155692493","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1712","kode":"SIS-1712","nama":"FIRMANSAH","kelas":"KELAS 6","nis":"1712","nisn":"3156350996","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1713","kode":"SIS-1713","nama":"HAERUL ROHMAN SOBARI","kelas":"KELAS 6","nis":"1713","nisn":"3153236959","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1714","kode":"SIS-1714","nama":"ICAH GUSTIANA","kelas":"KELAS 6","nis":"1714","nisn":"3159754315","jenis":"Siswa","kelamin":"P","alamat":"Kp. Nagreg","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1908","kode":"SIS-1908","nama":"AURA SALSABILA","kelas":"KELAS 6","nis":"1908","nisn":"3143872838","jenis":"Siswa","kelamin":"P","alamat":"Rajeg Mulya Residence Blok 68/2","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1715","kode":"SIS-1715","nama":"JURAEDAH","kelas":"KELAS 6","nis":"1715","nisn":"0148828270","jenis":"Siswa","kelamin":"P","alamat":"Kp. Pasir Jambu","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1716","kode":"SIS-1716","nama":"KAMELIA PUTRI","kelas":"KELAS 6","nis":"1716","nisn":"0153504723","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1717","kode":"SIS-1717","nama":"KASIH KUSUMA","kelas":"KELAS 6","nis":"1717","nisn":"3154209669","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1718","kode":"SIS-1718","nama":"LESA ATATUL JAWAH","kelas":"KELAS 6","nis":"1718","nisn":"0156364256","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1742","kode":"SIS-1742","nama":"M AL FARUQ","kelas":"KELAS 6","nis":"1742","nisn":"3151879270","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1805","kode":"SIS-1805","nama":"M. DZANIN AL ABBASY","kelas":"KELAS 6","nis":"1805","nisn":"0143591590","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1721","kode":"SIS-1721","nama":"MUHAMAD RAFFA AMINUDIN","kelas":"KELAS 6","nis":"1721","nisn":"3146354410","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1722","kode":"SIS-1722","nama":"MUHAMAD RAIHAN AL HUSNA","kelas":"KELAS 6","nis":"1722","nisn":"0158168360","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1723","kode":"SIS-1723","nama":"MUHAMAD WASIUL BASIT","kelas":"KELAS 6","nis":"1723","nisn":"3152715954","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1725","kode":"SIS-1725","nama":"MUHAMMAD SANIP","kelas":"KELAS 6","nis":"1725","nisn":"3150513163","jenis":"Siswa","kelamin":"L","alamat":"Kp. Pasir Jambu","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1726","kode":"SIS-1726","nama":"NAURA AGUSTIN","kelas":"KELAS 6","nis":"1726","nisn":"3145401018","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1727","kode":"SIS-1727","nama":"NURAHIM","kelas":"KELAS 6","nis":"1727","nisn":"3152134984","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Gebang","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1728","kode":"SIS-1728","nama":"REZA PAHLEVI","kelas":"KELAS 6","nis":"1728","nisn":"0145107931","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1729","kode":"SIS-1729","nama":"RINI AHSELA","kelas":"KELAS 6","nis":"1729","nisn":"3140198475","jenis":"Siswa","kelamin":"L","alamat":"Kp. Nargreg","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1731","kode":"SIS-1731","nama":"SAHLIYYAH","kelas":"KELAS 6","nis":"1731","nisn":"0152469455","jenis":"Siswa","kelamin":"P","alamat":"Kp. Pasir Jambu","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1732","kode":"SIS-1732","nama":"SAHRIL AZIS","kelas":"KELAS 6","nis":"1732","nisn":"0143096998","jenis":"Siswa","kelamin":"L","alamat":"Kp. Pasir Jambu","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1733","kode":"SIS-1733","nama":"SAPUTRI","kelas":"KELAS 6","nis":"1733","nisn":"0144799522","jenis":"Siswa","kelamin":"P","alamat":"Kp. Pasir Jambu","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1734","kode":"SIS-1734","nama":"SEKAR AYU NINGSIH","kelas":"KELAS 6","nis":"1734","nisn":"3153582950","jenis":"Siswa","kelamin":"P","alamat":"Kp. Nagreg","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1735","kode":"SIS-1735","nama":"SHAQIA PRISMA KINANTI","kelas":"KELAS 6","nis":"1735","nisn":"0147773819","jenis":"Siswa","kelamin":"P","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1736","kode":"SIS-1736","nama":"SHOFAN SAORI","kelas":"KELAS 6","nis":"1736","nisn":"3152035534","jenis":"Siswa","kelamin":"L","alamat":"Kp. Pasir Jambu","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1738","kode":"SIS-1738","nama":"WAHYU","kelas":"KELAS 6","nis":"1738","nisn":"0147789565","jenis":"Siswa","kelamin":"L","alamat":"Kp. Pasir Jambu","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1739","kode":"SIS-1739","nama":"WAHYU PUTRA","kelas":"KELAS 6","nis":"1739","nisn":"3157677827","jenis":"Siswa","kelamin":"L","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1740","kode":"SIS-1740","nama":"ZAENAL ARIFIN","kelas":"KELAS 6","nis":"1740","nisn":"3152083908","jenis":"Siswa","kelamin":"L","alamat":"Kp. Sambiayunan","source":"excel-daftar-peserta-didik","createdAt":1},{"id":"siswa-1741","kode":"SIS-1741","nama":"ZASQIA DEPANI","kelas":"KELAS 6","nis":"1741","nisn":"3159438013","jenis":"Siswa","kelamin":"P","alamat":"Kp. Bojong Ciruk","source":"excel-daftar-peserta-didik","createdAt":1}]
const $=id=>document.getElementById(id),today=()=>new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Jakarta',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date()),KEY='perpus_lentera_hati_waraks3_v1',SETTINGS='perpus_settings_lentera_hati_waraks3_v1',AUTH_KEY='perpus_auth_v2',CURRENT_KEY='perpus_current_page_v1';
let settings=loadJSON(SETTINGS,{perpus:'PERPUSTAKAAN LENTERA HATI',sekolah:'SD NEGERI WARAKAS 3',alamat:'',kecamatan:'Binuang',kepala:'MURDA, S.Pd',nipKepala:'197009201999031007',petugas:'GUGUN RISNAWAN',nipPetugas:'199708122025211085',tempat:'Binuang',tanggal:'',bulan:'',tahunTanggal:'',tahun:'2026/2027',reportMonth:String(new Date().getMonth()+1).padStart(2,'0'),reportYear:String(new Date().getFullYear()),updatedAt:Date.now(),identityPermanent:false,memberCardTheme:'blue',memberCardFooter:'Pindai untuk melihat identitas anggota',memberCardShowNisn:true,memberCardShowAddress:false,memberCardShowKode:true,memberCardShowKelas:true,memberCardShowKelamin:true,memberCardShowJenis:true,memberCardShowPerpus:true,memberCardShowSekolah:true,memberCardLogo:'',memberCardShape:'rounded',memberCardNameSize:'medium',memberCardPaper:'F4-10',memberCardLogoRight:'',memberCardModelSiswa:'modern',memberCardModelGuru:'formal',memberCardTitleSize:3.8,memberCardManualNameSize:3.6,memberCardDetailSize:2.35,memberCardBackRules:'1. Kartu wajib dibawa saat berkunjung.\n2. Buku dikembalikan tepat waktu.\n3. Jaga kebersihan dan ketenangan perpustakaan.\n4. Kerusakan/kehilangan buku menjadi tanggung jawab peminjam.'});
settings.perpus='PERPUSTAKAAN LENTERA HATI'; settings.sekolah='SD NEGERI WARAKAS 3'; settings.kecamatan='Binuang'; settings.kepala='MURDA, S.Pd'; settings.nipKepala='197009201999031007'; settings.petugas='GUGUN RISNAWAN'; settings.nipPetugas='199708122025211085'; settings.tempat=settings.tempat||'Binuang'; settings.identityPermanent=true;
let db=loadJSON(KEY,{anggota:DATA_ANGGOTA_EXCEL_301,buku:[],pengunjung:[],transaksi:[]});
// V17: kosongkan data aktivitas lama sekali agar pengunjung/peminjaman/pengembalian dimulai dari nol. Anggota dan buku tetap.
if(localStorage.getItem('perpus_activity_reset_v17_local')!=='1'){ db.pengunjung=[]; db.transaksi=[]; localStorage.setItem(KEY,JSON.stringify(db)); localStorage.setItem('perpus_activity_reset_v17_local','1'); }
try{
  const bk=JSON.parse(localStorage.getItem('perpus_local_backup')||'null');
  if(bk&&bk.db&&Number(bk.savedAt||0)>Number(localStorage.getItem('perpus_updated_at')||0)){
    db=bk.db;
    if(bk.settings) settings=bk.settings;
    localStorage.setItem(KEY,JSON.stringify(db));
  }
}catch(_){}

// Migrasi metadata tanggal upload/masuk untuk data lama.
db.anggota=(db.anggota||[]).map(x=>({...x,createdAt:x.createdAt||x.updatedAt||Date.now()}));
db.transaksi=(db.transaksi||[]).map(x=>({...x,createdAt:x.createdAt||x.updatedAt||Date.now()}));
db.buku=(db.buku||[]).map(x=>({...x,createdAt:x.createdAt||x.updatedAt||Date.now()}));
db={anggota:Array.isArray(db.anggota)?db.anggota:[],buku:Array.isArray(db.buku)?db.buku:[],pengunjung:Array.isArray(db.pengunjung)?db.pengunjung:[],transaksi:Array.isArray(db.transaksi)?db.transaksi:[]}; db.anggota=dedupeMembers(db.anggota);
try{localStorage.setItem(KEY,JSON.stringify(db));}catch(_){}
const ROSTER_VERSION='LENTERA-HATI-WARAKAS3-2026-09-07-ROSTER-EXCEL-v2-301';
if(localStorage.getItem('perpus_warakas3_roster_version')!==ROSTER_VERSION){
  const fresh=DATA_ANGGOTA_EXCEL_301.map(x=>({...JSON.parse(JSON.stringify(x)),createdAt:x.createdAt||Date.now()}));
  const oldMembers=Array.isArray(db.anggota)?db.anggota:[];
  const identityToNew=new Map();
  for(const x of fresh){
    for(const v of [x.nis,x.nisn]){const k=String(v??'').trim();if(k)identityToNew.set(k,x.id);}
  }
  const oldToNew=new Map();
  const oldDeleteIds=[];
  for(const x of oldMembers){
    const matches=[];
    for(const v of [x.nis,x.nisn]){const k=String(v??'').trim();if(k&&identityToNew.has(k))matches.push(identityToNew.get(k));}
    const nid=matches[0];
    if(nid) oldToNew.set(x.id,nid);
    else {
      if(x.id) oldDeleteIds.push(String(x.id));
      const n=String(x.nis??x.nisn??'').trim();
      if(n) oldDeleteIds.push('siswa-'+n.replace(/[^A-Za-z0-9_-]/g,'-'));
    }
  }
  for(const listName of ['transaksi','pengunjung']){
    for(const r of db[listName]||[]){if(oldToNew.has(r.anggota))r.anggota=oldToNew.get(r.anggota);}
  }
  db.anggota=fresh;
  localStorage.setItem('perpus_roster_deleted_ids',JSON.stringify([...new Set(oldDeleteIds)]));
  localStorage.setItem('perpus_warakas3_roster_version',ROSTER_VERSION);
  localStorage.setItem('perpus_warakas3_siswa_seeded','1');
  localStorage.setItem(KEY,JSON.stringify(db));
}
// GARANSI DATA ANGGOTA: jika localStorage/backup pernah kosong, selalu pulihkan roster 301 anggota.
// Ini juga memastikan pencarian, pilihan anggota, dan scanner QR memakai sumber data yang sama.
(function ensureMemberRoster(){
  try{
    const seed=Array.isArray(DATA_ANGGOTA_EXCEL_301)?DATA_ANGGOTA_EXCEL_301:[];
    const cur=Array.isArray(db.anggota)?db.anggota:[];
    const byKey=new Map();
    for(const x of cur){ const k=String(x.nis||x.nisn||x.kode||x.id||'').trim().toUpperCase(); if(k)byKey.set(k,x); }
    let changed=false;
    for(const x of seed){
      const k=String(x.nis||x.nisn||x.kode||x.id||'').trim().toUpperCase();
      if(!k)continue;
      const old=byKey.get(k);
      if(!old || old.deleted){
        const y={...JSON.parse(JSON.stringify(x)),deleted:false,createdAt:x.createdAt||1,updatedAt:x.updatedAt||Date.now()};
        db.anggota.push(y); byKey.set(k,y); changed=true;
      }
    }
    db.anggota=dedupeMembers(db.anggota);
    if(changed){
      localStorage.setItem(KEY,JSON.stringify(db));
      localStorage.setItem('perpus_warakas3_roster_version',ROSTER_VERSION);
    }
  }catch(e){}
})();
settings.perpus='PERPUSTAKAAN LENTERA HATI';
settings.sekolah='SD NEGERI WARAKAS 3';
settings.kepala='MURDA, S.Pd';
settings.nipKepala='197009201999031007';
settings.petugas='GUGUN RISNAWAN';
settings.nipPetugas='199708122025211085';
settings.tahun=settings.tahun||'2026/2027';
settings.kecamatan=settings.kecamatan||'Binuang';
settings.reportMonth=settings.reportMonth||String(new Date().getMonth()+1).padStart(2,'0');
settings.reportYear=settings.reportYear||String(new Date().getFullYear());
let localUpdatedAt=Number(localStorage.getItem('perpus_updated_at')||0),syncing=false,current='dashboard';
const ONLINE_APP_URL='';
const APP_VERSION='LENTERA-HATI-WARAKAS3-20260907-V26-CENTRAL-SYNC-GREAT-SITE';
const CENTRAL_SERVER_ROOT='https://perpustakaanlenterahatiwarakas3.66ghz.com/';
const API_ENDPOINTS=[new URL('api.php',CENTRAL_SERVER_ROOT).href];
let activeApiEndpoint=API_ENDPOINTS[0];
localStorage.setItem('perpus_app_version',APP_VERSION);
function loadJSON(k,d){try{return JSON.parse(localStorage.getItem(k)||'null')||d}catch(e){return d}} function uid(){return (crypto.randomUUID?crypto.randomUUID():Date.now()+'-'+Math.random()).replace(/-/g,'').slice(0,24)} const DELETED_KEY='perpus_deleted_tombstones_v2'; let deletedTombstones=loadJSON(DELETED_KEY,{}); function rememberDelete(type,id){if(!deletedTombstones[type])deletedTombstones[type]={};deletedTombstones[type][String(id)]=Date.now();localStorage.setItem(DELETED_KEY,JSON.stringify(deletedTombstones));markDirty(type,id,true)} function applyTombstones(payload){payload=payload||{settings:{},db:{}};payload.db=payload.db||{};const remoteTs=payload.tombstones||{};for(const k of ['anggota','buku','pengunjung','transaksi']){deletedTombstones[k]={...(deletedTombstones[k]||{}),...(remoteTs[k]||{})};const ids=deletedTombstones[k]||{};payload.db[k]=(payload.db[k]||[]).filter(x=>!ids[String(x.id)])}localStorage.setItem(DELETED_KEY,JSON.stringify(deletedTombstones));return payload} function touch(o){o.updatedAt=Date.now();return o} function active(a){return a.filter(x=>!x.deleted)}
// Deduplicate anggota by stable identity so the bundled roster and server roster
// cannot create 2 copies of the same student when their legacy IDs differ.
function memberIdentity(x){
  const norm=v=>String(v??'').trim().toLowerCase().replace(/\s+/g,'');
  const kode=norm(x?.kode); if(kode)return 'kode:'+kode;
  const nis=norm(x?.nis); if(nis)return 'nis:'+nis;
  const nisn=norm(x?.nisn); if(nisn)return 'nisn:'+nisn;
  return 'id:'+norm(x?.id);
}
function dedupeMembers(arr){
  const map=new Map();
  for(const x of (Array.isArray(arr)?arr:[])){
    if(!x)continue;
    const k=memberIdentity(x), old=map.get(k);
    if(!old || Number(x.updatedAt||x.createdAt||0)>=Number(old.updatedAt||old.createdAt||0)){
      map.set(k,x);
    }
  }
  return [...map.values()];
}
function sortOldestFirst(arr,dateFields=[]){return arr.map((item,index)=>({item,index})).sort((a,b)=>{const av=dateFields.map(k=>a.item?.[k]).find(v=>v);const bv=dateFields.map(k=>b.item?.[k]).find(v=>v);const ad=av?String(av):'';const bd=bv?String(bv):'';if(ad&&bd&&ad!==bd)return ad.localeCompare(bd);if(ad&&!bd)return -1;if(!ad&&bd)return 1;const at=Number(a.item?.createdAt||a.item?.updatedAt||0),bt=Number(b.item?.createdAt||b.item?.updatedAt||0);return (at-bt)|| (a.index-b.index)}).map(x=>x.item)} function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
let autoSyncTimer=null,autoSyncBusy=false;
const DIRTY_KEY='perpus_dirty_v35';
let dirty=loadJSON(DIRTY_KEY,{anggota:{},buku:{},pengunjung:{},transaksi:{}});
function markDirty(type,id,deleted=false){if(!dirty[type])dirty[type]={}; dirty[type][String(id)]={deleted:!!deleted,at:Date.now()}; try{localStorage.setItem(DIRTY_KEY,JSON.stringify(dirty));}catch(e){}}
function markAllDirty(){for(const k of ['anggota','buku','pengunjung','transaksi']){dirty[k]={}; for(const x of (db[k]||[])){if(x?.id)dirty[k][String(x.id)]={deleted:false,at:Number(x.updatedAt||Date.now())};} for(const id of Object.keys(deletedTombstones[k]||{})) dirty[k][String(id)]={deleted:true,at:Number(deletedTombstones[k][id]||Date.now())};} try{localStorage.setItem(DIRTY_KEY,JSON.stringify(dirty));}catch(e){}}
function clearDirty(ids){for(const k of Object.keys(ids||{})){for(const id of (ids[k]||[])){if(dirty[k])delete dirty[k][String(id)];}} try{localStorage.setItem(DIRTY_KEY,JSON.stringify(dirty));}catch(e){}}

function reconcileLocalInventory(){
  const activeLoans=new Map();
  for(const t of (db.transaksi||[])){
    if(!t||t.deleted||String(t.status||'')==='Dikembalikan')continue;
    const bid=String(t.buku||''); if(!bid)continue;
    const q=Math.max(0,Number(t.jumlah||0)||0);
    activeLoans.set(bid,(activeLoans.get(bid)||0)+q);
  }
  for(const b of (db.buku||[])){
    if(!b||!b.id)continue;
    const total=Math.max(0,Number(b.jumlah||0)||0);
    b.jumlah=total; b.tersedia=Math.max(0,total-(activeLoans.get(String(b.id))||0));
  }
}

function save(){
  reconcileLocalInventory();
  localUpdatedAt=Date.now();
  try{
    localStorage.setItem(KEY,JSON.stringify(db));
    localStorage.setItem(SETTINGS,JSON.stringify(settings));
    localStorage.setItem('perpus_updated_at',String(localUpdatedAt));
    localStorage.setItem('perpus_local_backup',JSON.stringify({savedAt:localUpdatedAt,db:db,settings:settings}));
    localStorage.setItem('perpus_sync_pending','1');
    // save() is the single write gateway; mark changed records for incremental sync.
    try{for(const k of ['anggota','buku','pengunjung','transaksi']){for(const x of (db[k]||[])){if(x?.id && Number(x.updatedAt||0)>=localUpdatedAt-5) markDirty(k,x.id,false);}}}catch(e){}
  }catch(e){console.warn('Penyimpanan lokal gagal',e);}
  render();
  if(navigator.onLine && isLoggedIn()) scheduleAutoSync(40);
}
function hasLoginCookie(){try{return document.cookie.split(';').some(function(x){return x.trim().indexOf('perpus_logged=1')===0})}catch(e){return false}} function isLoggedIn(){let ls=false;try{ls=localStorage.getItem(AUTH_KEY)==='1'||localStorage.getItem('logged')==='1'}catch(e){} return ls||hasLoginCookie()} function rememberLogin(user='super admin'){try{localStorage.setItem(AUTH_KEY,'1');localStorage.setItem('logged','1');localStorage.setItem('perpus_auth_user',user)}catch(e){} try{document.cookie='perpus_logged=1; Max-Age=31536000; Path=/; SameSite=Lax'+(location.protocol==='https:'?'; Secure':'')}catch(e){}} function scheduleAutoSync(delay=40){clearTimeout(autoSyncTimer);if(!navigator.onLine||!isLoggedIn())return;autoSyncTimer=setTimeout(()=>{if(document.visibilityState==='visible')syncOnline(false,true)},Math.max(30,delay))} function showLoginFields(){const f=$('loginFields');if(f)f.style.display='block';const u=$('lu');if(u)setTimeout(()=>u.focus(),50)}
function login(){const u=($('lu')?.value||'').trim().toLowerCase(),p=$('lp')?.value||'';const msg=$('loginMsg');
const fixed={'super admin':{pass:'superadmingugun',role:'superadmin',name:'Super Admin'},'kepala sekolah':{pass:'murdaspd',role:'kepala sekolah',name:'Kepala Sekolah'}};
let account=fixed[u]||null;try{const custom=JSON.parse(localStorage.getItem('perpus_custom_accounts')||'{}');if(!account&&custom[u])account=custom[u]}catch(e){}
if(!account||account.pass!==p){if(msg)msg.textContent='Username atau kata sandi salah.';return false}
try{localStorage.setItem('perpus_role',account.role);localStorage.setItem('perpus_auth_user',u);localStorage.setItem('perpus_auth_name',account.name||u);if(!localStorage.getItem('perpus_auth_name_'+u))localStorage.setItem('perpus_auth_name_'+u,account.name||u)}catch(e){}
rememberLogin(u);document.documentElement.classList.add('auth-ok');$('login').style.display='none';$('app').style.display='block';setStatus(navigator.onLine?'Online':'Offline',navigator.onLine);reconcileLocalInventory();render();loadSettings();if(typeof applyV27Access==='function')applyV27Access();scheduleAutoSync(40);return false} 
 function go(id){if(typeof stopMemberScanner==='function')stopMemberScanner();current=id;try{localStorage.setItem(CURRENT_KEY,id)}catch(e){} document.querySelectorAll('section').forEach(x=>x.classList.remove('on'));let s=$(id);if(s)s.classList.add('on');render()}
const menus=[['dashboard','🏠 DASHBOARD'],['anggota','👥 Anggota'],['buku','📚 Buku'],['pengunjung','👣 Pengunjung'],['pinjam','📕 Peminjaman'],['kembali','📗 Pengembalian'],['laporan','📊 Laporan'],['pengaturan','⚙️ Pengaturan']];$('nav').innerHTML=menus.map(x=>`<button onclick="go('${x[0]}')">${x[1]}</button>`).join('');
function nextCode(p,a){let n=a.reduce((m,x)=>Math.max(m,parseInt(String(x.kode||'').replace(/\D/g,''))||0),0)+1;return p+'-'+String(n).padStart(4,'0')} function addAnggota(){
  const nama=($('aNama')?.value||'').trim();
  if(!nama){alert('Nama wajib diisi.');$('aNama')?.focus();return false;}
  const obj={id:uid(),kode:nextCode('ANG',db.anggota),nama:nama,createdAt:Date.now(),kelas:($('aKelas')?.value||'').trim(),nisn:($('aNisn')?.value||'').trim(),jenis:$('aJenis')?.value||'Siswa',kelamin:($('aKelamin')?.value||'').trim(),alamat:($('aAlamat')?.value||'').trim()};
  touch(obj);db.anggota.push(obj);save();
  ['aNama','aKelas','aNisn','aAlamat'].forEach(id=>{if($(id))$(id).value=''});if($('aKelamin'))$('aKelamin').value='';
  if($('aKode'))$('aKode').value=nextCode('ANG',db.anggota);return false;
}
function editAnggota(id){
  let a=db.anggota.find(x=>String(x.id)===String(id)); if(!a)return;
  $('aNama').value=a.nama||''; $('aKelas').value=a.kelas||''; $('aNisn').value=a.nisn||'';
  $('aJenis').value=a.jenis||'Siswa'; $('aKelamin').value=a.kelamin||''; $('aAlamat').value=a.alamat||'';
  $('aKode').value=a.kode||'';
  let btn=document.querySelector('#anggota button[onclick^="addAnggota"]');
  if(btn){btn.textContent='💾 Simpan Perubahan';btn.onclick=()=>updateAnggota(id)}
  $('aNama').scrollIntoView({behavior:'smooth',block:'center'}); $('aNama').focus()
}
function updateAnggota(id){
  let a=db.anggota.find(x=>String(x.id)===String(id)); if(!a)return;
  let nama=$('aNama').value.trim(); if(!nama)return alert('Nama wajib');
  Object.assign(a,{nama,kelas:$('aKelas').value.trim(),nisn:$('aNisn').value.trim(),jenis:$('aJenis').value,kelamin:$('aKelamin').value,alamat:$('aAlamat').value.trim()});
  touch(a); resetAnggotaForm(); save()
}
function resetAnggotaForm(){
  ['aNama','aKelas','aNisn','aAlamat'].forEach(x=>$(x).value=''); $('aKelamin').value='';
  $('aKode').value=nextCode('ANG',db.anggota);
  let btn=document.querySelector('#anggota button[onclick^="updateAnggota"]');
  if(btn){btn.textContent='➕ Tambah Anggota';btn.onclick=addAnggota}
}
function del(type,id){
   if(!type||!id)return;
   const list=db[type]; if(!Array.isArray(list))return alert('Data tidak ditemukan.');
   const idx=list.findIndex(x=>String(x.id)===String(id)); if(idx<0)return alert('Data tidak ditemukan.');
   const item=list[idx];
   const label=type==='anggota'?(item.nama||item.kode||'anggota'):type==='buku'?(item.judul||item.kode||'buku'):(type==='transaksi'?'transaksi':(item.nama||item.kode||type));
   if(!confirm('Hapus '+label+'?'))return;
   if(type==='buku'&&Number(item.jumlah||0)!==Number(item.tersedia||0))return alert('Buku sedang dipinjam dan tidak dapat dihapus.');
   if(type==='transaksi'&&item.status!=='Dikembalikan'){const b=db.buku.find(x=>String(x.id)===String(item.buku));if(b){b.tersedia=Math.min(Number(b.jumlah||0),Number(b.tersedia||0)+Number(item.jumlah||0));touch(b)}}
   rememberDelete(type,id); list.splice(idx,1); save();
   if(type==='anggota')renderAnggota(); if(type==='buku')renderBuku(); if(typeof render==='function')render();
 }
window.del=del;

function renderAnggota(){
  let q=($('aCari').value||'').trim().toLowerCase();
  // Daftar Anggota TIDAK dibatasi periode laporan. Semua anggota harus selalu terlihat.
  let arr=sortOldestFirst(dedupeMembers(active(db.anggota)),['createdAt']).filter(a=>!q||JSON.stringify(a).toLowerCase().includes(q)).slice(0,100);
  $('ta').innerHTML=arr.map((a,i)=>`<tr><td>${i+1}</td><td>${esc(a.kode||'')}</td><td>${esc(a.nama||'')}</td><td>${esc(a.kelas||'')}</td><td>${esc(a.nisn||'')}</td><td>${esc(a.jenis||'')}</td><td>${esc(a.kelamin||'')}</td><td>${esc(a.alamat||'')}</td><td><button onclick="printMemberCard('${a.id}')">🪪 Kartu</button> <button onclick="editAnggota('${a.id}')">✏️ Edit</button> <button class="danger" onclick="del('anggota','${a.id}')">Hapus</button></td></tr>`).join('')||sharedPeriodEmpty('anggota');
  let d=$('aCariDetail'); if(d){if(q&&arr.length)d.innerHTML=arr.slice(0,10).map(a=>`<div class="card" style="border-left:4px solid #9b111e">${identitasAnggota(a)}</div>`).join('');else d.innerHTML=''}
}
function showMemberDetail(id){let a=db.anggota.find(x=>String(x.id)===String(id));if(!a)return;let d=$('aCariDetail');if(d)d.innerHTML=`<div class="card">${identitasAnggota(a)}</div>`;d?.scrollIntoView({behavior:'smooth',block:'nearest'})}
function updateBukuCodeHint(){
  const judul=($('bJudul')?.value||'').trim(), penulis=($('bPenulis')?.value||'').trim();
  const norm=v=>String(v||'').trim().toLowerCase().replace(/\s+/g,' ');
  const existing=active(db.buku||[]).find(x=>norm(x.judul)===norm(judul)&&norm(x.penulis)===norm(penulis));
  const el=$('bKode'); if(el) el.value=existing?(existing.kode||''):nextCode('BUKU',db.buku||[]);
}
function addBuku(){
  let judul=$('bJudul').value.trim(),penulis=$('bPenulis').value.trim(),jumlah=Math.max(1,parseInt($('bJumlah').value)||1);
  if(!judul)return alert('Judul wajib');
  const key=x=>String(x||'').trim().toLowerCase().replace(/\s+/g,' ');
  const existing=active(db.buku).find(x=>key(x.judul)===key(judul)&&key(x.penulis)===key(penulis));
  if(existing){
    existing.jumlah=Number(existing.jumlah||0)+jumlah;
    existing.tersedia=Number(existing.tersedia||0)+jumlah;
    existing.updatedAt=Date.now();
  }else{
    db.buku.push(touch({id:uid(),kode:nextCode('BUKU',db.buku),judul,penulis,rak:$('bRak').value.trim(),jumlah,tersedia:jumlah,createdAt:Date.now()}));
  }
  $('bJudul').value='';$('bPenulis').value='';$('bRak').value='';$('bJumlah').value=1;$('bKode').value=nextCode('BUKU',db.buku);save()
}
function uploadBukuData(event){const file=event.target.files?.[0];if(!file)return;const reader=new FileReader();reader.onload=()=>{try{let rows=[];const text=String(reader.result||'').replace(/^\uFEFF/,'');if(/\.json$/i.test(file.name)){const data=JSON.parse(text);rows=Array.isArray(data)?data:(Array.isArray(data.buku)?data.buku:[]);}else{const lines=text.split(/\r?\n/).filter(x=>x.trim());if(!lines.length)throw new Error('CSV kosong');const parseLine=line=>{const out=[];let cur='',q=false;for(let i=0;i<line.length;i++){const c=line[i];if(c==='"'){if(q&&line[i+1]==='"'){cur+='"';i++;}else q=!q}else if(c===','&&!q){out.push(cur.trim());cur=''}else cur+=c}out.push(cur.trim());return out};const head=parseLine(lines[0]).map(x=>x.toLowerCase().replace(/[^a-z0-9]/g,''));rows=lines.slice(1).map(line=>{const v=parseLine(line),o={};head.forEach((h,i)=>o[h]=v[i]||'');return o})}let added=0,merged=0;const key=x=>String(x||'').trim().toLowerCase().replace(/\s+/g,' ');rows.forEach(r=>{const judul=String(r.judul||r.title||r.namabuku||'').trim();if(!judul)return;const penulis=String(r.penulis||r.author||r.pengarang||'').trim();const rak=String(r.rak||r.shelf||'').trim();const jumlah=Math.max(1,parseInt(r.jumlah||r.qty||r.quantity||1)||1);const existing=active(db.buku).find(x=>key(x.judul)===key(judul)&&key(x.penulis)===key(penulis));if(existing){existing.jumlah=Number(existing.jumlah||0)+jumlah;existing.tersedia=Number(existing.tersedia||0)+jumlah;existing.updatedAt=Date.now();merged++}else{db.buku.push(touch({id:uid(),kode:nextCode('BUKU',db.buku),judul,penulis,rak,jumlah,tersedia:jumlah,createdAt:Date.now()}));added++}});save();renderBuku();alert('Upload buku selesai.\nBuku baru: '+added+'\nDigabung: '+merged);event.target.value=''}catch(e){alert('Gagal membaca file. Gunakan CSV/JSON dengan kolom judul, penulis, rak, jumlah.\n'+e.message);event.target.value=''}};reader.readAsText(file)}
function editBuku(id){
  let b=db.buku.find(x=>x.id===id); if(!b)return;
  $('bJudul').value=b.judul||'';$('bPenulis').value=b.penulis||'';$('bRak').value=b.rak||'';$('bJumlah').value=b.jumlah||1;$('bKode').value=b.kode||'';
  let btn=document.querySelector('#buku button[onclick^="addBuku"]');
  if(btn){btn.textContent='💾 Simpan Perubahan';btn.onclick=()=>updateBuku(id)}
}
function updateBuku(id){
  let b=db.buku.find(x=>x.id===id); if(!b)return;
  let judul=$('bJudul').value.trim(); if(!judul)return alert('Judul wajib');
  let jumlah=Math.max(1,parseInt($('bJumlah').value)||1),dipinjam=(Number(b.jumlah)||0)-(Number(b.tersedia)||0);
  if(jumlah<dipinjam)return alert('Jumlah tidak boleh lebih kecil dari buku yang sedang dipinjam.');
  Object.assign(b,{judul,penulis:$('bPenulis').value.trim(),rak:$('bRak').value.trim(),jumlah,tersedia:jumlah-dipinjam});touch(b);
  $('bJudul').value='';$('bPenulis').value='';$('bRak').value='';$('bJumlah').value=1;$('bKode').value=nextCode('BUKU',db.buku);
  let btn=document.querySelector('#buku button[onclick^="updateBuku"]');if(btn){btn.textContent='➕ Tambah Buku';btn.onclick=addBuku} save()
}
function renderBuku(){
  let q=($('bCari')?.value||'').trim().toLowerCase();
  let arr=filterBySharedPeriod('buku',sortOldestFirst(active(db.buku),['createdAt'])).filter(b=>!q||JSON.stringify(b).toLowerCase().includes(q));
  $('tb').innerHTML=arr.map((b,i)=>`<tr><td>${i+1}</td><td>${esc(b.kode)}</td><td>${esc(b.judul)}</td><td>${esc(b.penulis)}</td><td>${esc(b.rak||'')}</td><td>${b.jumlah}</td><td>${b.tersedia}</td><td>${esc(b.createdAt?formatPrintDate(new Date(b.createdAt).toISOString().slice(0,10)):'')}</td><td><button onclick="editBuku('${b.id}')">✏️ Edit</button> <button class="danger" onclick="del('buku','${b.id}')">Hapus</button></td></tr>`).join('')||sharedPeriodEmpty('buku');
  if($('pB'))$('pB').value='';
}
function identitasAnggota(a){if(!a)return '';return `<div class="member-mini"><b>Kode:</b> ${esc(a.kode||'-')} &nbsp; <b>Nama:</b> ${esc(a.nama||'-')} &nbsp; <b>Kelas:</b> ${esc(a.kelas||'-')}</div>`}
function cariAnggota(inp,pil,hid,data){
  const input=$(inp),list=$(pil),hidden=$(hid),detail=$(data);if(!input||!list||!hidden||!detail)return;
  const q=(input.value||'').trim().toLowerCase();hidden.value='';detail.innerHTML='';
  if(!q){list.innerHTML='';return;}
  const a=dedupeMembers(active(db.anggota)).filter(x=>[x.nama,x.kode,x.nisn,x.nis,x.kelas,x.jenis,x.kelamin,x.alamat].some(v=>String(v??'').toLowerCase().includes(q))).slice(0,20);
  if(a.length===1){pickAnggota(a[0].id,hid,data,pil,inp);return;}
  list.innerHTML=a.map(x=>`<button type="button" style="display:block;width:100%;text-align:left;margin:4px 0;background:#f1f1f1;color:#222" onclick="pickAnggota(this.dataset.id,'${hid}','${data}','${pil}','${inp}')" data-id="${esc(x.id)}"><b>Kode: ${esc(x.kode||'-')}</b> — ${esc(x.nama||'-')} — Kelas: ${esc(x.kelas||'-')}</button>`).join('')||'<div class="small">Anggota tidak ditemukan.</div>';
}

function pickAnggota(id,hid,data,pil,inp){
 let a=db.anggota.find(x=>String(x.id)===String(id));
 if(!a)return;
 $(hid).value=id;
 $(data).innerHTML=identitasAnggota(a);
 // Setelah satu anggota dipilih, semua hasil pencarian lain langsung hilang.
 $(pil).innerHTML='';
 if(inp) $(inp).value=a.nama||'';
 // PARAF/TTD DIGITAL LANGSUNG MUNCUL — tanpa menekan tombol.
 const sigId=hid==='vAnggotaId'?'vSig':hid==='pA'?'pSig':'';
 if(sigId){
   // Tampilkan segera setelah pencarian maupun hasil scan QR.
   digitalSignatureForMember(a,sigId);
   requestAnimationFrame(()=>digitalSignatureForMember(a,sigId));
   setTimeout(()=>digitalSignatureForMember(a,sigId),120);
   setTimeout(()=>digitalSignatureForMember(a,sigId),500);
 }
}
function importAnggotaCSV(event){
 const f=event.target.files?.[0]; if(!f)return;
 const r=new FileReader();
 r.onload=()=>{
  try{
   const text=String(r.result||'').replace(/^\\uFEFF/,'');
   const rows=text.split(/\\r?\\n/).filter(x=>x.trim()!=='');
   if(rows.length<2) throw Error('File CSV tidak berisi data anggota.');
   const parseLine=line=>{
    const out=[]; let cur='', quote=false;
    for(let i=0;i<line.length;i++){const c=line[i]; if(c==='"'){if(quote&&line[i+1]==='"'){cur+='"';i++;}else quote=!quote;}else if(c===','&&!quote){out.push(cur.trim());cur='';}else cur+=c;}
    out.push(cur.trim()); return out;
   };
   const h=parseLine(rows[0]).map(x=>x.toLowerCase());
   const idx=(names)=>{for(const n of names){const i=h.findIndex(x=>x===n||x.includes(n));if(i>=0)return i;}return -1};
   const iKode=idx(['kode anggota','kode']), iNama=idx(['nama anggota','nama']), iKelas=idx(['kelas']), iNisn=idx(['nisn']), iJenis=idx(['jenis']), iKelamin=idx(['jenis kelamin','kelamin']), iAlamat=idx(['alamat']);
   if(iNama<0) throw Error('Kolom Nama Anggota/Nama tidak ditemukan.');
   let added=0, updated=0;
   for(let n=1;n<rows.length;n++){
    const c=parseLine(rows[n]), nama=(c[iNama]||'').trim(); if(!nama)continue;
    const nisn=iNisn>=0?(c[iNisn]||'').trim():'';
    const kode=iKode>=0?(c[iKode]||'').trim():'';
    let a=(nisn&&db.anggota.find(x=>x.nisn===nisn))||(kode&&db.anggota.find(x=>x.kode===kode))||db.anggota.find(x=>x.nama.toLowerCase()===nama.toLowerCase()&&x.kelas===(iKelas>=0?(c[iKelas]||'').trim():''));
    const obj={nama,kelas:iKelas>=0?(c[iKelas]||'').trim():'',nisn,jenis:iJenis>=0?(c[iJenis]||'').trim():'Siswa',kelamin:iKelamin>=0?(c[iKelamin]||'').trim():'',alamat:iAlamat>=0?(c[iAlamat]||'').trim():''};
    if(a){Object.assign(a,obj);touch(a);updated++}
    else{db.anggota.push(touch({id:uid(),kode:kode||nextCode('ANG',db.anggota),...obj}));added++}
   }
   save(); alert(`Import anggota selesai. Ditambahkan: ${added} | Diperbarui: ${updated} | Total: ${active(db.anggota).length}`);
  }catch(e){alert('CSV tidak dapat diproses: '+e.message)}
  event.target.value='';
 };
 r.readAsText(f);
}

function setupSignaturePad(id){
  const c=$(id); if(!c||c.dataset.ready==='1')return;
  c.dataset.ready='1';
  const ctx=c.getContext('2d'); ctx.lineWidth=4; ctx.lineCap='round'; ctx.lineJoin='round'; ctx.strokeStyle='#111';
  let drawing=false, has=false;
  const point=e=>{const r=c.getBoundingClientRect(); const src=e.touches?.[0]||e; return {x:(src.clientX-r.left)*(c.width/r.width),y:(src.clientY-r.top)*(c.height/r.height)}};
  const start=e=>{e.preventDefault();drawing=true;has=true;const p=point(e);ctx.beginPath();ctx.moveTo(p.x,p.y)};
  const move=e=>{if(!drawing)return;e.preventDefault();const p=point(e);ctx.lineTo(p.x,p.y);ctx.stroke()};
  const end=e=>{if(drawing)e.preventDefault();drawing=false};
  c.addEventListener('pointerdown',start);c.addEventListener('pointermove',move);c.addEventListener('pointerup',end);c.addEventListener('pointercancel',end);c.addEventListener('pointerleave',end);
  c._hasSignature=()=>has;
  c._clearSignature=()=>{ctx.clearRect(0,0,c.width,c.height);has=false};
  c._getSignature=()=>has?c.toDataURL('image/png'):'';
}
function clearSignature(id){setupSignaturePad(id);$(id)?._clearSignature?.()}
function canvasTrimmedDataURL(c){if(!c)return '';const w=c.width,h=c.height,ctx=c.getContext('2d');if(!ctx)return '';let d;try{d=ctx.getImageData(0,0,w,h).data}catch(e){return c.toDataURL('image/png')};let minX=w,minY=h,maxX=-1,maxY=-1;for(let y=0;y<h;y++){for(let x=0;x<w;x++){if(d[(y*w+x)*4+3]>18){if(x<minX)minX=x;if(y<minY)minY=y;if(x>maxX)maxX=x;if(y>maxY)maxY=y;}}}if(maxX<0)return '';const pad=Math.max(8,Math.round(Math.min(w,h)*0.035));minX=Math.max(0,minX-pad);minY=Math.max(0,minY-pad);maxX=Math.min(w-1,maxX+pad);maxY=Math.min(h-1,maxY+pad);const out=document.createElement('canvas');out.width=maxX-minX+1;out.height=maxY-minY+1;out.getContext('2d').drawImage(c,minX,minY,out.width,out.height,0,0,out.width,out.height);return out.toDataURL('image/png')}
function getSignature(id){setupSignaturePad(id);const c=$(id);if(!c)return '';const raw=c._getSignature?.()||'';if(!raw)return '';return canvasTrimmedDataURL(c)||raw}
function ensureDigitalSignature(member,canvasId){
  if(!member||!canvasId)return '';
  let sig=getSignature(canvasId);
  if(!sig || $(canvasId)?.dataset.digitalSignatureMember!==String(member.id||'')){
    digitalSignatureForMember(member,canvasId);
    sig=getSignature(canvasId);
  }
  return sig||'';
}
function loadSignature(id,data){setupSignaturePad(id);const c=$(id);if(!c||!data)return;const ctx=c.getContext('2d'),img=new Image();img.onload=()=>{ctx.clearRect(0,0,c.width,c.height);ctx.drawImage(img,0,0,c.width,c.height);c._hasSignature=()=>true};img.src=data}
function sigPreview(data){return data?`<img class="sig-preview" src="${esc(data)}" alt="Paraf digital">`:'<span class="small">Belum ada</span>'}
function sigHash(str){let h=2166136261>>>0;for(let i=0;i<String(str||'').length;i++){h^=String(str).charCodeAt(i);h=Math.imul(h,16777619)>>>0}return h>>>0}
const PARAF_ASSET_BASE='paraf-model-';
const PARAF_COUNT=24;
const PARAF_ASSETS=Array.from({length:PARAF_COUNT},(_,i)=>`${PARAF_ASSET_BASE}${String(i+1).padStart(2,'0')}.png`);
const PARAF_CACHE=Array(PARAF_COUNT).fill(null);
function preloadParafModels(){
  PARAF_ASSETS.forEach((src,i)=>{const img=new Image();img.onload=()=>{PARAF_CACHE[i]=img};img.src=src});
}
function parafIndexForMember(member){
  const n=Number(member?.parafStyle);
  if(Number.isInteger(n)&&n>=0&&n<PARAF_COUNT)return n;
  const seed=sigHash(String(member?.id||'')+'|'+String(member?.kode||'')+'|'+String(member?.nisn||''));
  return seed%PARAF_COUNT;
}
function drawReferenceParaf(ctx,modelIndex,variant){
  const idx=((Number(modelIndex)||0)%PARAF_COUNT+PARAF_COUNT)%PARAF_COUNT;
  const img=PARAF_CACHE[idx];
  const cw=ctx.canvas.width,ch=ctx.canvas.height;
  ctx.save();
  // Semua model ditempatkan di pusat kanvas dengan ruang aman agar tidak terpotong.
  const rot=((Number(variant)||0)%5-2)*0.004;
  const sx=0.96+((Number(variant)||0)%5)*0.02;
  const sy=0.96+((Math.floor(Number(variant)||0)/5|0)%5)*0.018;
  ctx.translate(cw/2,ch/2);ctx.rotate(rot);ctx.scale(sx,sy);ctx.translate(-cw/2,-ch/2);
  if(img && img.complete && img.naturalWidth){
    const maxW=cw*0.78,maxH=ch*0.68;
    const ratio=Math.min(maxW/img.naturalWidth,maxH/img.naturalHeight);
    const w=img.naturalWidth*ratio,h=img.naturalHeight*ratio;
    ctx.drawImage(img,(cw-w)/2,(ch-h)/2,w,h);
  }else{
    // Fallback aman: coretan pendek di tengah, tidak pernah menempel tepi.
    ctx.beginPath();
    ctx.moveTo(cw*.20,ch*.58);ctx.bezierCurveTo(cw*.25,ch*.30,cw*.39,ch*.28,cw*.45,ch*.53);
    ctx.bezierCurveTo(cw*.50,ch*.70,cw*.62,ch*.63,cw*.72,ch*.50);ctx.lineTo(cw*.82,ch*.48);ctx.stroke();
  }
  ctx.restore();
}
function digitalSignatureForMember(member,canvasId){
  const c=$(canvasId); if(!c||!member)return; setupSignaturePad(canvasId);
  const ctx=c.getContext('2d'); if(!ctx)return;
  const seed=sigHash(String(member.id||'')+'|'+String(member.kode||'')+'|'+String(member.nisn||''));
  const modelIndex=parafIndexForMember(member);
  const variant=(seed>>>7)%64;
  member.parafStyle=modelIndex; member.parafModel=modelIndex+1; member.parafVariant=variant;
  ctx.clearRect(0,0,c.width,c.height);ctx.save();ctx.strokeStyle='#111';ctx.lineWidth=4.0+(variant%3)*0.25;ctx.lineCap='round';ctx.lineJoin='round';
  drawReferenceParaf(ctx,modelIndex,variant);ctx.restore();
  c._hasSignature=()=>true;c.dataset.digitalSignatureMember=String(member.id||'');c.dataset.digitalSignatureModel=String(modelIndex);
}
function initAutomaticParaf(){
  const VERSION='reference-sheet-24-real-assets-v4-scan-paraf';
  try{
    if(localStorage.getItem('perpus_paraf_auto_version')!==VERSION){
      (db.anggota||[]).forEach(a=>{delete a.signature;delete a.paraf;delete a.parafData;delete a.parafStyle;delete a.parafModel;delete a.parafVariant;delete a.digitalSignature;});
      (db.pengunjung||[]).forEach(x=>{delete x.signature;delete x.paraf;delete x.parafData;});
      (db.transaksi||[]).forEach(x=>{delete x.signature;delete x.signatureReturn;delete x.paraf;delete x.parafData;});
      localStorage.removeItem('perpus_signature_cache');
      localStorage.setItem('perpus_paraf_auto_version',VERSION);
    }
    // Automatic assignment happens only when a member does not already have a chosen model.
    (db.anggota||[]).filter(a=>!a.deleted).forEach(a=>{
      if(!Number.isInteger(Number(a.parafStyle)) || Number(a.parafStyle)<0 || Number(a.parafStyle)>=PARAF_COUNT){
        const seed=sigHash(String(a.id||'')+'|'+String(a.kode||'')+'|'+String(a.nisn||''));
        a.parafStyle=seed%PARAF_COUNT;
        a.parafModel=a.parafStyle+1;
        a.parafVariant=(seed>>>7)%64;
      }
    });
    localStorage.setItem(KEY,JSON.stringify(db));
  }catch(e){console.warn('initAutomaticParaf',e)}
}
function fillDigitalSignature(canvasId,memberId){const a=db.anggota.find(x=>String(x.id)===String(memberId));if(!a){alert('Pilih anggota terlebih dahulu.');return false;}digitalSignatureForMember(a,canvasId);return false}
function fillDigitalSignatureFromReturn(){const tid=($('kT')?.value||'').trim(),t=db.transaksi.find(x=>String(x.id)===String(tid));if(!t){alert('Pilih transaksi terlebih dahulu.');return false;}const a=db.anggota.find(x=>String(x.id)===String(t.anggota));if(!a){alert('Anggota tidak ditemukan.');return false;}digitalSignatureForMember(a,'kSig');return false}
function initSignaturePads(){['vSig','pSig','kSig'].forEach(setupSignaturePad);document.addEventListener('keydown',e=>{if(e.key==='Escape')document.getElementById('parafModal')?.remove()},{once:false})}
const PARAF_STYLES=Array.from({length:PARAF_COUNT},(_,i)=>({name:`Model ${String(i+1).padStart(2,'0')}`,src:PARAF_ASSETS[i]}));
function parafSvg(style,selected){const ps=PARAF_STYLES[style]||PARAF_STYLES[0];return `<img src="${ps.src}" alt="${ps.name}" style="width:100%;height:78px;object-fit:contain;display:block;background:#fff;border-radius:8px">`}
function getParafMember(type){
 let id='';
 if(type==='v') id=$('vAnggotaId')?.value||'';
 else if(type==='p') id=$('pA')?.value||'';
 else if(type==='k'){const tid=$('kT')?.value||'';const t=db.transaksi.find(x=>String(x.id)===String(tid));id=t?.anggota||'';}
 return db.anggota.find(x=>String(x.id)===String(id))||null;
}
function openParafPicker(type){
 const member=getParafMember(type); if(!member)return alert('Pilih atau scan anggota terlebih dahulu.');
 document.getElementById('parafModal')?.remove();
 const current=parafIndexForMember(member);
 const box=document.createElement('div');box.id='parafModal';box.className='paraf-modal';
 box.innerHTML=`<div class="paraf-modal-card"><div class="paraf-modal-head"><div><h3>🎨 PILIH MODEL PARAF</h3><div class="small">${esc(member.nama||'Anggota')} — pilih salah satu dari 24 model pada gambar contoh. Pilihan akan tersimpan untuk anggota ini.</div></div><button type="button" class="paraf-close" onclick="document.getElementById('parafModal')?.remove()">✕ Tutup</button></div><div style="display:flex;gap:8px;flex-wrap:wrap;margin:8px 0 12px"><button type="button" onclick="autoChooseParaf('${type}')">🔄 Otomatis untuk siswa ini</button></div><div class="paraf-grid">${PARAF_STYLES.map((x,i)=>`<button type="button" class="paraf-option ${current===i?'selected':''}" onclick="chooseParafStyle(${i},'${type}')">${parafSvg(i,current===i)}<small>NO. ${String(i+1).padStart(2,'0')}${current===i?' ✓':''}</small></button>`).join('')}</div></div>`;
 document.body.appendChild(box);
}
function chooseParafStyle(style,type){
 const member=getParafMember(type); if(!member)return;
 member.parafStyle=Math.max(0,Math.min(PARAF_COUNT-1,Number(style)||0));
 const seed=sigHash(String(member.id||'')+'|'+String(member.kode||'')+'|'+String(member.nisn||''));member.parafModel=member.parafStyle+1;member.parafVariant=(seed>>>7)%64;
 touch(member);save();
 const canvasId=type==='v'?'vSig':type==='p'?'pSig':'kSig';
 digitalSignatureForMember(member,canvasId);
 document.getElementById('parafModal')?.remove();
}
function autoChooseParaf(type){
 const member=getParafMember(type);if(!member)return;
 const seed=sigHash(String(member.id||'')+'|'+String(member.kode||'')+'|'+String(member.nisn||''));
 member.parafStyle=seed%PARAF_COUNT;member.parafModel=member.parafStyle+1;member.parafVariant=(seed>>>7)%64;touch(member);save();
 const canvasId=type==='v'?'vSig':type==='p'?'pSig':'kSig';digitalSignatureForMember(member,canvasId);document.getElementById('parafModal')?.remove();
}
preloadParafModels();
function addVisit(){
  const aid=($('vAnggotaId')?.value||'').trim(),a=db.anggota.find(x=>String(x.id)===String(aid));
  if(!a){alert('Cari dan pilih anggota terlebih dahulu.');$('vCari')?.focus();return false;}
  const signature=ensureDigitalSignature(a,'vSig');
  if(!signature){alert('Paraf siswa belum dapat dibuat. Silakan pilih anggota kembali.');return false;}
  db.pengunjung.push(touch({id:uid(),anggota:a.id,keperluan:$('vKeperluan')?.value||'Membaca',tanggal:$('vTgl')?.value||today(),signature}));save(); clearSignature('vSig');
  if($('vCari'))$('vCari').value='';if($('vAnggotaId'))$('vAnggotaId').value='';if($('vPilihan'))$('vPilihan').innerHTML='';if($('vData'))$('vData').innerHTML='';return false;
}
function renderVisit(){const all=filterBySharedPeriod('pengunjung',sortOldestFirst(active(db.pengunjung),['tanggal','createdAt']));$('tv').innerHTML=all.map((v,i)=>{let a=db.anggota.find(x=>x.id===v.anggota)||{};return `<tr><td>${i+1}</td><td>${esc(a.kode||'')}</td><td>${esc(a.nama||'')}</td><td>${esc(a.kelas||'')}</td><td>${esc(v.keperluan||'')}</td><td>${esc(formatPrintDate(v.tanggal||''))}</td><td>${sigPreview(v.signature)}</td><td><button onclick="editVisit('${v.id}')">✏️ Edit</button> <button class="danger" onclick="del('pengunjung','${v.id}')">Hapus</button></td></tr>`}).join('')||sharedPeriodEmpty('pengunjung')}
function editVisit(id){const v=db.pengunjung.find(x=>String(x.id)===String(id));if(!v)return;const tanggal=prompt('Tanggal kunjungan (YYYY-MM-DD):',v.tanggal||'');if(tanggal===null)return;const keperluan=prompt('Keperluan:',v.keperluan||'Membaca');if(keperluan===null)return;if(!tanggal.trim()||!keperluan.trim())return alert('Tanggal dan keperluan wajib diisi.');Object.assign(v,{tanggal:tanggal.trim(),keperluan:keperluan.trim()});touch(v);save()}
function cariBukuPinjam(){
  const input=$('pBukuCari'), list=$('pBukuPilihan'), hidden=$('pB'), detail=$('pBukuData');
  if(!input||!list||!hidden||!detail)return;
  const q=(input.value||'').trim().toLowerCase();
  hidden.value=''; detail.innerHTML='';
  if(!q){list.innerHTML='';return;}
  const hasil=active(db.buku).filter(b=>
    [b.judul,b.kode,b.penulis,b.rak,b.kategori]
      .some(v=>String(v??'').toLowerCase().includes(q))
  ).slice(0,20);
  list.innerHTML=hasil.map(b=>`<button type="button" class="bookPick" data-id="${esc(b.id)}"
    style="display:block;width:100%;text-align:left;margin:4px 0;padding:9px;background:#f1f1f1;color:#222;border:1px solid #ddd;border-radius:6px">
    <b>${esc(b.judul||'-')}</b> — Kode: ${esc(b.kode||'-')} — Penulis: ${esc(b.penulis||'-')} — Rak: ${esc(b.rak||'-')} — Tersedia: ${Number(b.tersedia||0)}
  </button>`).join('') || '<div class="small">Buku tidak ditemukan.</div>';
  list.querySelectorAll('.bookPick').forEach(btn=>btn.onclick=()=>pilihBukuPinjam(btn.dataset.id));
}
function pilihBukuPinjam(id){
  const b=active(db.buku).find(x=>String(x.id)===String(id));
  if(!b)return;
  $('pB').value=b.id;
  if($('pBukuCari'))$('pBukuCari').value=b.judul||'';
  if($('pBukuPilihan'))$('pBukuPilihan').innerHTML='';
  if($('pBukuData'))$('pBukuData').innerHTML=`Buku dipilih: <b>${esc(b.judul||'-')}</b> | Kode: ${esc(b.kode||'-')} | Rak: ${esc(b.rak||'-')} | Tersedia: ${Number(b.tersedia||0)}`;
}
function loan(){
  const aid=($('pA')?.value||'').trim();
  let bid=($('pB')?.value||'').trim();
  let a=db.anggota.find(x=>String(x.id)===String(aid));
  let b=db.buku.find(x=>String(x.id)===String(bid));
  // Perbaikan: jika buku sudah diketik/dipilih tetapi hidden id belum terisi,
  // cocokkan otomatis berdasarkan judul/kode/penulis/rak.
  if(!b){
    const q=($('pBukuCari')?.value||'').trim().toLowerCase();
    if(q){
      const matches=active(db.buku).filter(x=>[x.judul,x.kode,x.penulis,x.rak].some(v=>String(v??'').trim().toLowerCase()===q));
      if(matches.length===1){ b=matches[0]; bid=b.id; if($('pB'))$('pB').value=b.id; }
    }
  }
  const j=Math.max(1,parseInt($('pJumlah')?.value)||1);
  if(!a){alert('Cari dan pilih anggota terlebih dahulu.');$('pCari')?.focus();return false;}
  if(!b){alert('Pilih buku terlebih dahulu.');$('pBukuCari')?.focus();return false;}
  if(Number(b.tersedia||0)<j){alert('Stok buku tidak cukup.');return false;}
  const signature=ensureDigitalSignature(a,'pSig'); if(!signature){alert('Paraf siswa belum dapat dibuat. Silakan pilih anggota kembali.');return false;}
  b.tersedia=Number(b.tersedia||0)-j;touch(b);db.transaksi.push(touch({id:uid(),anggota:a.id,buku:b.id,jumlah:j,tgl:$('pT')?.value||today(),tempo:$('pD')?.value||today(),status:'Dipinjam',kembali:'',signature}));save();
  if($('pCari'))$('pCari').value='';if($('pA'))$('pA').value='';if($('pPilihan'))$('pPilihan').innerHTML='';if($('pData'))$('pData').innerHTML='';if($('pBukuCari'))$('pBukuCari').value='';if($('pB'))$('pB').value='';if($('pBukuPilihan'))$('pBukuPilihan').innerHTML='';if($('pBukuData'))$('pBukuData').innerHTML='';clearSignature('pSig');return false;
}
function statusLoan(t){return t.status==='Dikembalikan'?t.status:(t.tempo&&t.tempo<today()?'Terlambat':'Dipinjam')}
function renderLoan(){
  const all=filterBySharedPeriod('pinjam',sortOldestFirst(active(db.transaksi),['tgl','createdAt']));
  $('tl').innerHTML=all.map((t,i)=>{let a=db.anggota.find(x=>String(x.id)===String(t.anggota))||{},b=db.buku.find(x=>String(x.id)===String(t.buku))||{};return `<tr><td>${i+1}</td><td>${esc(a.kode||'')}</td><td>${esc(a.nama||'')}</td><td>${esc(a.kelas||'')}</td><td>${esc(b.judul||'')}</td><td>${t.jumlah||0}</td><td>${esc(formatPrintDate(t.tgl||''))}</td><td>${esc(formatPrintDate(t.tempo||''))}</td><td>${esc(statusLoan(t))}</td><td>${sigPreview(t.signature)}</td><td><button onclick="editLoan('${t.id}')">✏️ Edit</button> <button class="danger" onclick="del('transaksi','${t.id}')">🗑️ Hapus</button></td></tr>`}).join('')||sharedPeriodEmpty('pinjam');
  $('kT').innerHTML=active(db.transaksi).filter(t=>t.status!=='Dikembalikan').map(t=>{let a=db.anggota.find(x=>String(x.id)===String(t.anggota))||{},b=db.buku.find(x=>String(x.id)===String(t.buku))||{};return `<option value="${t.id}">${esc(a.nama||'')} — ${esc(b.judul||'')} — ${t.jumlah||0}</option>`}).join('');
}
function editLoan(id){
  const t=db.transaksi.find(x=>String(x.id)===String(id)); if(!t)return;
  const tgl=prompt('Tanggal pinjam (YYYY-MM-DD):',t.tgl||''); if(tgl===null)return;
  const tempo=prompt('Jatuh tempo (YYYY-MM-DD):',t.tempo||''); if(tempo===null)return;
  const jumlah=parseInt(prompt('Jumlah buku:',String(t.jumlah||1)),10); if(!Number.isFinite(jumlah)||jumlah<1)return alert('Jumlah tidak valid.');
  const b=db.buku.find(x=>String(x.id)===String(t.buku));
  if(t.status!=='Dikembalikan' && b){const old=Number(t.jumlah||0),delta=jumlah-old;if(delta>Number(b.tersedia||0))return alert('Stok buku tidak cukup untuk jumlah baru.');b.tersedia-=delta;touch(b);}
  Object.assign(t,{tgl,tempo,jumlah});touch(t);save();
}
function returnBook(){
  const tid=($('kT')?.value||'').trim(),t=db.transaksi.find(x=>String(x.id)===String(tid));
  if(!t){alert('Pilih transaksi yang akan dikembalikan.');return false;}if(t.status==='Dikembalikan'){alert('Transaksi ini sudah dikembalikan.');return false;}
  const a=db.anggota.find(x=>String(x.id)===String(t.anggota));
  const signature=ensureDigitalSignature(a,'kSig'); if(!signature){alert('Paraf siswa belum dapat dibuat. Silakan pilih transaksi kembali.');return false;}
  const b=db.buku.find(x=>String(x.id)===String(t.buku));if(b){b.tersedia=Math.min(Number(b.jumlah||0),Number(b.tersedia||0)+Number(t.jumlah||0));touch(b);}t.status='Dikembalikan';t.kembali=today();t.signatureReturn=signature;touch(t);save();clearSignature('kSig');alert('Pengembalian berhasil dicatat.');return false;
}
function renderReturn(){
  const all=filterBySharedPeriod('kembali',sortOldestFirst(active(db.transaksi).filter(t=>t.status==='Dikembalikan'),['kembali','createdAt']));
  $('kr').innerHTML=all.map((t,i)=>{let a=db.anggota.find(x=>String(x.id)===String(t.anggota))||{},b=db.buku.find(x=>String(x.id)===String(t.buku))||{};return `<tr><td>${i+1}</td><td>${esc(a.kode||'')}</td><td>${esc(a.nama||'')}</td><td>${esc(b.judul||'')}</td><td>${t.jumlah||0}</td><td>${esc(formatPrintDate(t.tgl||''))}</td><td>${esc(formatPrintDate(t.kembali||''))}</td><td>Dikembalikan</td><td>${sigPreview(t.signatureReturn||t.signature)}</td><td><button onclick="editReturn('${t.id}')">✏️ Edit</button> <button class="danger" onclick="del('transaksi','${t.id}')">🗑️ Hapus</button></td></tr>`}).join('')||sharedPeriodEmpty('kembali');
}
function editReturn(id){
   const t=db.transaksi.find(x=>String(x.id)===String(id));if(!t)return;
   const kembali=prompt('Tanggal kembali (YYYY-MM-DD):',t.kembali||'');if(kembali===null)return;
   const jumlah=parseInt(prompt('Jumlah buku:',String(t.jumlah||1)),10);if(!Number.isFinite(jumlah)||jumlah<1)return alert('Jumlah tidak valid.');
   const b=db.buku.find(x=>String(x.id)===String(t.buku));
   if(b&&t.status==='Dikembalikan'){const old=Number(t.jumlah||0),delta=jumlah-old;if(delta>0&&Number(b.tersedia||0)<delta)return alert('Stok buku tidak cukup untuk koreksi jumlah pengembalian.');b.tersedia=Math.max(0,Math.min(Number(b.jumlah||0),Number(b.tersedia||0)+delta));touch(b)}
   Object.assign(t,{kembali:kembali.trim(),jumlah});touch(t);save();
 }
async function saveSettings(){
  autoReportDate();
  settings={...settings,
    perpus:'PERPUSTAKAAN LENTERA HATI', sekolah:'SD NEGERI WARAKAS 3', kecamatan:'Binuang',
    kepala:'MURDA, S.Pd', nipKepala:'197009201999031007', petugas:'GUGUN RISNAWAN', nipPetugas:'199708122025211085',
    tempat:'Binuang', tahun:settings.tahun||'2026/2027', tanggal:settings.tanggal,bulan:settings.bulan,tahunTanggal:settings.tahunTanggal,
    identityPermanent:true, updatedAt:Date.now()};
  save(); loadSettings();
  if(navigator.onLine)await syncOnline(true,true);
  alert(navigator.onLine?'Setelan tersimpan. Identitas perpustakaan dikunci permanen.':'Setelan tersimpan di perangkat dan identitas tetap terkunci.');
}

function getIndonesiaDateParts(){
  const now=new Date();
  const parts=new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Jakarta',day:'2-digit',month:'2-digit',year:'numeric'}).formatToParts(now);
  const get=k=>parts.find(x=>x.type===k)?.value||'';
  const monthNames=['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
  const month=Number(get('month')||'1');
  return {tanggal:get('day'),bulan:monthNames[month-1],tahun:get('year'),iso:`${get('year')}-${get('month')}-${get('day')}`};
}
function autoReportDate(){
  const d=getIndonesiaDateParts();
  // Tanggal cetak selalu mengikuti tanggal nasional Indonesia (WIB), bukan tanggal terakhir yang disimpan.
  settings.tanggal=d.tanggal; settings.bulan=d.bulan; settings.tahunTanggal=d.tahun;
  if($('sTanggal'))$('sTanggal').value=d.tanggal;
  if($('sBulan'))$('sBulan').value=d.bulan;
  if($('sTahunTanggal'))$('sTahunTanggal').value=d.tahun;
}


let lastIndonesiaDate=today();
setInterval(()=>{const d=today();if(d!==lastIndonesiaDate){lastIndonesiaDate=d;autoReportDate();render();}},60000);
function loadSettings(){
  if(!$('sPerpus'))return;
  autoReportDate();
  settings.perpus='PERPUSTAKAAN LENTERA HATI'; settings.sekolah='SD NEGERI WARAKAS 3'; settings.kecamatan='Binuang'; settings.kepala='MURDA, S.Pd'; settings.nipKepala='197009201999031007'; settings.petugas='GUGUN RISNAWAN'; settings.nipPetugas='199708122025211085'; settings.identityPermanent=true;
  const vals={sPerpus:settings.perpus,sSekolah:settings.sekolah,sKecamatan:settings.kecamatan,sKepala:settings.kepala,sNipKepala:settings.nipKepala,sPetugas:settings.petugas,sNipPetugas:settings.nipPetugas,sTempat:settings.tempat,sTanggal:settings.tanggal,sBulan:settings.bulan,sTahunTanggal:settings.tahunTanggal,sTahun:settings.tahun||'2026/2027'};
  Object.entries(vals).forEach(([id,v])=>{if($(id)){ $(id).value=v||''; if(['sPerpus','sSekolah','sKecamatan','sKepala','sNipKepala','sPetugas','sNipPetugas'].includes(id)) $(id).readOnly=true; }});
  if($('reportMonth'))$('reportMonth').value=settings.reportMonth||String(new Date().getMonth()+1).padStart(2,'0');
  if($('reportYear'))$('reportYear').value=settings.reportYear||String(new Date().getFullYear()); syncPrintPeriodControls(); loadMemberCardSettings();
}
function academicYearOptions(){
  const cur=parseInt(String(settings.tahun||'').match(/\d{4}/)?.[0]||new Date().getFullYear(),10);
  const years=[]; for(let y=cur-2;y<=cur+3;y++)years.push(`${y}/${y+1}`);
  return years;
}
function setPrintMode(mode){
  settings.printMode=mode==='ajaran'?'ajaran':'bulan'; settings.updatedAt=Date.now();
  localStorage.setItem(SETTINGS,JSON.stringify(settings)); syncPrintPeriodControls(); renderReport(); scheduleAutoSync(500);
}
function setPrintAcademicYear(v){
  settings.printAcademicYear=v||settings.tahun||'2026/2027'; settings.updatedAt=Date.now();
  localStorage.setItem(SETTINGS,JSON.stringify(settings)); syncPrintPeriodControls(); renderReport(); scheduleAutoSync(500);
}
function setPrintMember(v){
  settings.printMember=v||''; settings.updatedAt=Date.now(); localStorage.setItem(SETTINGS,JSON.stringify(settings)); syncPrintPeriodControls(); scheduleAutoSync(500);
}
function setPrintBook(v){
  settings.printBook=v||''; settings.updatedAt=Date.now(); localStorage.setItem(SETTINGS,JSON.stringify(settings)); syncPrintPeriodControls(); scheduleAutoSync(500);
}
function syncPrintPeriodControls(){
  const m=String(settings.reportMonth||String(new Date().getMonth()+1).padStart(2,'0')).padStart(2,'0');
  const y=String(settings.reportYear||new Date().getFullYear());
  const ay=settings.printAcademicYear||settings.tahun||`${new Date().getFullYear()}/${new Date().getFullYear()+1}`;
  document.querySelectorAll('.printMonth').forEach(e=>e.value=m);
  document.querySelectorAll('.printYear').forEach(e=>e.value=y);
  document.querySelectorAll('.printMode').forEach(e=>e.value=settings.printMode||'bulan');
  document.querySelectorAll('.printAcademicYear').forEach(e=>{if(!e.options.length)e.innerHTML=academicYearOptions().map(x=>`<option value="${esc(x)}">${esc(x)}</option>`).join(''); if(![...e.options].some(o=>o.value===ay))e.insertAdjacentHTML('beforeend',`<option value="${esc(ay)}">${esc(ay)}</option>`); e.value=ay});
  document.querySelectorAll('.printMember').forEach(e=>{const cur=settings.printMember||'';e.innerHTML='<option value="">Semua Anggota</option>'+active(db.anggota).map(a=>`<option value="${esc(a.id)}">${esc(a.nama||a.kode||'-')}</option>`).join('');e.value=cur});
  document.querySelectorAll('.printBook').forEach(e=>{const cur=settings.printBook||'';e.innerHTML='<option value="">Semua Buku</option>'+active(db.buku).map(b=>`<option value="${esc(b.id)}">${esc(b.judul||b.kode||'-')}</option>`).join('');e.value=cur});
  document.querySelectorAll('.monthWrap,.yearWrap').forEach(e=>e.style.display=(settings.printMode||'bulan')==='ajaran'?'none':'inline-flex');
  document.querySelectorAll('.academicWrap').forEach(e=>e.style.display=(settings.printMode||'bulan')==='ajaran'?'inline-flex':'none');
}
function setAllPrintPeriod(month,year){
  settings.reportMonth=String(month||'01').padStart(2,'0'); settings.reportYear=String(year||new Date().getFullYear()); settings.printMode='bulan';
  settings.updatedAt=Date.now(); localStorage.setItem(SETTINGS,JSON.stringify(settings)); syncPrintPeriodControls(); renderReport(); scheduleAutoSync(500);
}
function setReportPeriod(){
  settings.reportMonth=$('reportMonth')?.value||String(new Date().getMonth()+1).padStart(2,'0');
  settings.reportYear=String($('reportYear')?.value||new Date().getFullYear()); settings.printMode='bulan'; settings.updatedAt=Date.now(); save();
}
function reportPrefix(){
  const m=String(settings.reportMonth||String(new Date().getMonth()+1).padStart(2,'0')).padStart(2,'0');
  const y=String(settings.reportYear||new Date().getFullYear()); return y+'-'+m;
}

/* ===== SINKRONISASI PERIODE SEMUA MENU ===== */
function currentPrintAcademicYear(){return settings.printAcademicYear||settings.tahun||'2026/2027';}
function currentPrintMode(){return settings.printMode==='ajaran'?'ajaran':'bulan';}
function currentPrintPeriod(){return reportPrefix();}
function filterBySharedPeriod(type, rows){
  const mode=currentPrintMode(), ay=currentPrintAcademicYear(), period=currentPrintPeriod();
  const list=Array.isArray(rows)?rows:[];
  if(mode==='ajaran'){
    if(type==='anggota'||type==='buku') return list.filter(x=>inAcademic(x.createdAt?new Date(x.createdAt).toISOString().slice(0,10):'',ay));
    if(type==='pengunjung') return list.filter(x=>inAcademic(x.tanggal,ay));
    if(type==='pinjam') return list.filter(x=>inAcademic(x.tgl,ay));
    if(type==='kembali') return list.filter(x=>x.status==='Dikembalikan'&&inAcademic(x.kembali,ay));
    return list;
  }
  if(type==='anggota'||type==='buku') return list.filter(x=>String(x.createdAt?new Date(x.createdAt).toISOString().slice(0,7):'')===period);
  if(type==='pengunjung') return list.filter(x=>String(x.tanggal||'').slice(0,7)===period);
  if(type==='pinjam') return list.filter(x=>String(x.tgl||'').slice(0,7)===period);
  if(type==='kembali') return list.filter(x=>x.status==='Dikembalikan'&&String(x.kembali||'').slice(0,7)===period);
  return list;
}
function sharedPeriodLabel(){
  if(currentPrintMode()==='ajaran'){const r=academicRange(currentPrintAcademicYear());return `Tahun Ajaran ${currentPrintAcademicYear()} • ${r.label}`;}
  const p=currentPrintPeriod(), m=Number(p.slice(5));
  const names=['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
  return `Bulan ${names[m-1]||p.slice(5)} ${p.slice(0,4)}`;
}
function sharedPeriodEmpty(type){
  const labels={anggota:'anggota',buku:'buku',pengunjung:'pengunjung',pinjam:'peminjaman',kembali:'pengembalian'};
  return `<tr><td colspan="${type==='anggota'?9:type==='buku'?9:type==='pengunjung'?8:type==='pinjam'?11:10}">Tidak ada data ${labels[type]||'data'} pada ${esc(sharedPeriodLabel())}.</td></tr>`;
}

function academicRange(ay){
  const m=String(ay||settings.tahun||'2026/2027').match(/(\d{4})\D+(\d{4})/);
  const start=Number(m?.[1]||new Date().getFullYear()), end=Number(m?.[2]||start+1);
  return {start:`${start}-07-01`,end:`${end}-06-30`,label:`Juli ${start} – Juni ${end}`};
}
function inAcademic(date,ay){
  const d=String(date||'').slice(0,10), r=academicRange(ay); return !!d && d>=r.start && d<=r.end;
}
function selectedMember(){return settings.printMember||''}
function selectedBook(){return settings.printBook||''}

function render(){if($('appTitle'))$('appTitle').textContent=settings.perpus||'PERPUSTAKAAN';if($('appSchool'))$('appSchool').textContent=(settings.sekolah||'SD NEGERI WARAKAS 3').trim();if($('appYear'))$('appYear').textContent='TAHUN PELAJARAN '+(settings.tahun||'2026/2027');let aa=active(db.anggota),bb=active(db.buku),vv=active(db.pengunjung),tt=active(db.transaksi),loaned=tt.filter(x=>x.status!=='Dikembalikan').reduce((n,x)=>n+x.jumlah,0);$('nAng').textContent=aa.length;$('nBook').textContent=bb.length;$('nCopy').textContent=bb.reduce((n,x)=>n+x.jumlah,0);$('nAvail').textContent=bb.reduce((n,x)=>n+x.tersedia,0);$('nLoan').textContent=loaned;$('nLate').textContent=tt.filter(x=>statusLoan(x)==='Terlambat').length;$('nVisit').textContent=vv.length;$('activity').innerHTML=tt.slice(-5).reverse().map(x=>`<div class="small">${x.tgl||''} — ${statusLoan(x)}</div>`).join('')||'<span class="small">Belum ada aktivitas.</span>';renderAnggota();renderBuku();renderVisit();renderLoan();renderReturn();renderReport();syncPrintPeriodControls()}
function renderReport(){
  const period=reportPrefix(), [yy,mm]=period.split('-'), mode=settings.printMode||'bulan', ay=settings.printAcademicYear||settings.tahun||'2026/2027';
  const monthName=['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'][Number(mm)-1];
  const activityVisits=active(db.pengunjung).filter(x=>mode==='ajaran'?inAcademic(x.tanggal,ay):String(x.tanggal||'').slice(0,7)===period);
  const loans=active(db.transaksi).filter(x=>mode==='ajaran'?inAcademic(x.tgl,ay):String(x.tgl||'').slice(0,7)===period);
  const returns=active(db.transaksi).filter(x=>x.status==='Dikembalikan'&&(mode==='ajaran'?inAcademic(x.kembali,ay):String(x.kembali||'').slice(0,7)===period));
  const reportLabel=mode==='ajaran'?`TAHUN AJARAN ${esc(ay)} — Juli ${esc(ay.split('/')[0])} s.d. Juni ${esc(ay.split('/')[1])}`:`PERIODE ${monthName} ${yy}`;
  let kepala=esc(settings.kepala||'................................................');
  let nipKepala=esc(settings.nipKepala||'................................................');
  let petugas=esc(settings.petugas||'................................................');
  let nipPetugas=esc(settings.nipPetugas||'................................................');
  let tempat=esc(settings.tempat||'');
  let tanggal=esc((settings.tanggal&&settings.bulan&&settings.tahunTanggal)?`${settings.tanggal} ${settings.bulan} ${settings.tahunTanggal}`:'');
  $('report').innerHTML=`<h2>${esc(settings.perpus||'PERPUSTAKAAN')}</h2><h3>${esc(settings.sekolah||'SD NEGERI WARAKAS 3')}</h3><p>TAHUN PELAJARAN ${esc(settings.tahun||'2026/2027')} — ${reportLabel}</p><table class="report-table"><tr><th>Keterangan</th><th>Jumlah</th></tr><tr><td>Anggota</td><td>${active(db.anggota).length}</td></tr><tr><td>Judul Buku</td><td>${active(db.buku).length}</td></tr><tr><td>${mode==='ajaran'?'Buku Ditambahkan Tahun Ajaran':'Buku Ditambahkan '+monthName+' '+yy}</td><td>${active(db.buku).filter(b=>mode==='ajaran'?inAcademic(b.createdAt?formatPrintDate(new Date(b.createdAt).toISOString().slice(0,10)):'',ay):String(b.createdAt?new Date(b.createdAt).toISOString().slice(0,7):'')===period).length}</td></tr><tr><td>Eksemplar</td><td>${active(db.buku).reduce((n,x)=>n+x.jumlah,0)}</td></tr><tr><td>Buku Tersedia</td><td>${active(db.buku).reduce((n,x)=>n+x.tersedia,0)}</td></tr><tr><td>${mode==='ajaran'?'Peminjaman Tahun Ajaran':'Peminjaman '+monthName+' '+yy}</td><td>${loans.length}</td></tr><tr><td>${mode==='ajaran'?'Pengembalian Tahun Ajaran':'Pengembalian '+monthName+' '+yy}</td><td>${returns.length}</td></tr><tr><td>${mode==='ajaran'?'Pengunjung Tahun Ajaran':'Pengunjung '+monthName+' '+yy}</td><td>${activityVisits.length}</td></tr></table><div class="report-signature"><div class="report-sign"><div>Mengetahui,</div><b>Kepala Sekolah</b><div class="report-sign-space"></div><b>${kepala}</b><div>NIP. ${nipKepala}</div></div><div class="report-sign"><div>${tempat}${tanggal?', '+tanggal:''}</div><b>Petugas Perpustakaan</b><div class="report-sign-space"></div><b>${petugas}</b><div>NIP. ${nipPetugas}</div></div></div>`;
}
function formatPrintDate(value){
  const s=String(value??'').trim();
  if(!s)return '';
  let m=s.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if(m)return `${m[3]}-${m[2]}-${m[1]}`;
  m=s.match(/^(\d{2})[\/.-](\d{2})[\/.-](\d{4})$/);
  if(m)return `${m[1]}-${m[2]}-${m[3]}`;
  return s;
}

function rowsFor(type){
  let aa=sortOldestFirst(active(db.anggota),['createdAt']),bb=sortOldestFirst(active(db.buku),['createdAt']),vv=sortOldestFirst(active(db.pengunjung),['tanggal','createdAt']),tt=sortOldestFirst(active(db.transaksi),['tgl','createdAt']);
  const member=selectedMember(), book=selectedBook(), mode=settings.printMode||'bulan';
  const period=reportPrefix(), ay=settings.printAcademicYear||settings.tahun||'2026/2027';
  if(mode==='ajaran'){
    // Rekap tahun ajaran menampilkan seluruh anggota dan seluruh katalog buku,
    // sedangkan aktivitas (pengunjung/peminjaman/pengembalian) dibatasi Juli-Juni.
    vv=vv.filter(v=>inAcademic(v.tanggal,ay));
    tt=tt.filter(t=>inAcademic(t.tgl,ay)||inAcademic(t.kembali,ay));
  }else{
    aa=aa.filter(a=>String(a.createdAt?new Date(a.createdAt).toISOString().slice(0,7):'')===period);
    bb=bb.filter(b=>String(b.createdAt?new Date(b.createdAt).toISOString().slice(0,7):'')===period);
    vv=vv.filter(v=>String(v.tanggal||'').slice(0,7)===period);
    tt=tt.filter(t=>String(t.tgl||'').slice(0,7)===period||String(t.kembali||'').slice(0,7)===period);
  }
  if(member){aa=aa.filter(a=>String(a.id)===String(member));vv=vv.filter(v=>String(v.anggota)===String(member));tt=tt.filter(t=>String(t.anggota)===String(member));}
  if(book){bb=bb.filter(b=>String(b.id)===String(book));tt=tt.filter(t=>String(t.buku)===String(book));}
  if(type==='laporan'||type==='dashboard'){
    const visits=vv, loans=tt.filter(t=>String(t.tgl||'').slice(0,10)), returns=tt.filter(t=>t.status==='Dikembalikan' && (mode==='ajaran'?inAcademic(t.kembali,ay):String(t.kembali||'').slice(0,7)===period));
    const label=mode==='ajaran'?`Tahun Ajaran ${ay}`:`${['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'][Number(period.slice(5))-1]} ${period.slice(0,4)}`;
    return [['Keterangan','Jumlah'],['Periode',label],['Anggota',active(db.anggota).length],['Judul Buku',active(db.buku).length],['Eksemplar',active(db.buku).reduce((n,x)=>n+Number(x.jumlah||0),0)],['Buku Tersedia',active(db.buku).reduce((n,x)=>n+Number(x.tersedia||0),0)],['Pengunjung',visits.length],['Peminjaman',loans.filter(t=>mode==='ajaran'?inAcademic(t.tgl,ay):String(t.tgl||'').slice(0,7)===period).length],['Pengembalian',returns.length]];
  }
  if(type==='anggota')return [['No','Kode Anggota','Nama Anggota','Kelas','NIS','NISN','Jenis Kelamin','Alamat','Tanggal Masuk'],...aa.map((a,i)=>[i+1,a.kode,a.nama,a.kelas,a.nis||'',a.nisn||'',a.kelamin||'',a.alamat||'',a.createdAt?formatPrintDate(new Date(a.createdAt).toISOString().slice(0,10)):''])];
  if(type==='buku'||type==='buku_bulanan')return [['No','Kode Buku','Judul Buku','Penulis','RAK','Jumlah','Tersedia','Tanggal Reg'],...bb.map((b,i)=>[i+1,b.kode,b.judul,b.penulis,b.rak||'',b.jumlah,b.tersedia,b.createdAt?formatPrintDate(new Date(b.createdAt).toISOString().slice(0,10)):''])];
  if(type==='pengunjung')return [['No','Kode','Nama','Kelas','Keperluan','Tanggal','Paraf Siswa'],...vv.map((v,i)=>{let a=db.anggota.find(x=>String(x.id)===String(v.anggota))||{};return [i+1,a.kode,a.nama,a.kelas,v.keperluan,formatPrintDate(v.tanggal),v.signature||'']})];
  if(type==='pinjam'){const x=sortOldestFirst(tt.filter(t=>mode==='ajaran' ? inAcademic(t.tgl,ay) : String(t.tgl||'').slice(0,7)===period),['tgl','createdAt']);return [['No','Kode','Nama','Kelas','Judul Buku','Jumlah','Tanggal Pinjam','Jatuh Tempo','Status','Paraf Siswa'],...x.map((t,i)=>{let a=db.anggota.find(x=>x.id===t.anggota)||{},b=db.buku.find(x=>x.id===t.buku)||{};return [i+1,a.kode,a.nama,a.kelas,b.judul,t.jumlah,formatPrintDate(t.tgl),formatPrintDate(t.tempo),statusLoan(t),t.signature||'']})];}
  const x=sortOldestFirst(tt.filter(t=>t.status==='Dikembalikan'&&(mode==='ajaran'?inAcademic(t.kembali,ay):String(t.kembali||'').slice(0,7)===period)),['kembali','createdAt']);
  return [['No','Kode','Nama','Kelas','Judul Buku','Jumlah','Tanggal Pinjam','Tanggal Kembali','Status','Paraf Siswa'],...x.map((t,i)=>{let a=db.anggota.find(x=>x.id===t.anggota)||{},b=db.buku.find(x=>x.id===t.buku)||{};return [i+1,a.kode,a.nama,a.kelas,b.judul,t.jumlah,formatPrintDate(t.tgl),formatPrintDate(t.kembali),'Dikembalikan',t.signatureReturn||t.signature||'']})];
}


async function formatTanggalIndonesia(iso){
 const d=new Date(iso+'T00:00:00');
 const bl=['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
 return d.getDate()+' '+bl[d.getMonth()]+' '+d.getFullYear();
}
function printMenu(type){
  autoReportDate();
  const allowed=['anggota','buku','buku_bulanan','pengunjung','pinjam','kembali','laporan'];
  type=allowed.includes(type)?type:'laporan';
  const titles={
    anggota:'DAFTAR ANGGOTA',buku:'DAFTAR BUKU',buku_bulanan:'DAFTAR BUKU DIUPLOAD PADA PERIODE',
    pengunjung:'DAFTAR PENGUNJUNG',pinjam:'DAFTAR PEMINJAMAN',kembali:'DAFTAR PENGEMBALIAN',laporan:'LAPORAN ADMINISTRASI PERPUSTAKAAN'
  };
  const headers=rowsFor(type);
  const library=(settings.perpus||'PERPUSTAKAAN').trim();
  const school=(settings.sekolah||'SD NEGERI WARAKAS 3').trim();
  const academicYear=(settings.tahun||'2026/2027').trim();
  const kepala=(settings.kepala||'').trim(), nipKepala=(settings.nipKepala||'').trim();
  const petugas=(settings.petugas||'').trim(), nipPetugas=(settings.nipPetugas||'').trim();
  const tempat=(settings.tempat||'Binuang').trim();
  const months=['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
  const printDate=(settings.tanggal&&settings.bulan&&settings.tahunTanggal)
    ? `${String(settings.tanggal).padStart(2,'0')} ${settings.bulan} ${settings.tahunTanggal}`
    : `${String(new Date().getDate()).padStart(2,'0')} ${months[new Date().getMonth()]} ${new Date().getFullYear()}`;
  const [reportY,reportM]=reportPrefix().split('-');
  const reportMonthName=months[Number(reportM)-1]||'';
  const isAjaran=(settings.printMode||'bulan')==='ajaran';
  const periodLabel=isAjaran ? `( ${academicRange(settings.printAcademicYear||settings.tahun).label.replace(' – ',' - ')} )` : `${reportMonthName} ${reportY}`;
  const landscape=type!=='laporan';

  const escPrint=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const headerRow=headers[0]||[];
  const colCount=headerRow.length;
  const lowerHeaders=headerRow.map(h=>String(h||'').toLowerCase());
  const columnClasses=lowerHeaders.map(k=>{
    if(/nama|judul buku/.test(k)) return 'left-col';
    if(/tanggal|pinjam|tempo|kembali/.test(k)) return 'date-col';
    if(/paraf|tanda tangan/.test(k)) return 'signature-col';
    return 'center-col';
  });

  // Lebar kolom benar-benar dihitung dari isi tabel. Nama/Judul diberi ruang terbesar,
  // tanggal diberi ruang minimum agar DD-MM-YYYY selalu satu baris, dan kolom pendek
  // tidak mengambil ruang berlebihan. Sisa lebar dibagikan kembali secara proporsional.
  const maxLen=headerRow.map((h,i)=>{
    const vals=headers.slice(1).map(r=>String(r?.[i]??'').replace(/data:image\/[^;]+;base64,[^\s]+/g,'PARAF'));
    return Math.max(String(h||'').length,...vals.map(v=>v.length),1);
  });
  const weights=headerRow.map((h,i)=>{
    const k=String(h||'').toLowerCase(), len=Math.min(maxLen[i],36);
    if(/^(no)$/.test(k)) return 1.5;
    if(/nama/.test(k)) return 7.5 + Math.min(7,len/8);
    if(/judul buku/.test(k)) return 9 + Math.min(9,len/8);
    if(/kode/.test(k)) return 3.4 + Math.min(2,len/10);
    if(/kelas/.test(k)) return 3.0;
    if(/nisn|nis/.test(k)) return 4.0;
    if(/tanggal|pinjam|tempo|kembali/.test(k)) return 6.2;
    if(/paraf|tanda tangan/.test(k)) return 5.5;
    if(/jumlah|tersedia/.test(k)) return 3.0;
    if(/status/.test(k)) return 4.5 + Math.min(2,len/12);
    if(/keperluan|alamat|penulis/.test(k)) return 5.5 + Math.min(5,len/10);
    return 3.5 + Math.min(3,len/12);
  });
  const totalWeight=weights.reduce((a,b)=>a+b,0)||1;
  const colWidths=weights.map(w=>(w/totalWeight*100).toFixed(3)+'%');
  const colgroup='<colgroup>'+headerRow.map((h,i)=>{const k=String(h||'').toLowerCase(); let extra=''; if(/tanggal|pinjam|tempo|kembali/.test(k)) extra='min-width:25mm'; else if(/paraf|tanda tangan/.test(k)) extra='min-width:20mm'; else if(/nama|judul buku/.test(k)) extra='min-width:28mm'; return `<col style="width:auto;${extra}">`;}).join('')+'</colgroup>';

  try{
    const w=window.open('','_blank');
    if(!w) throw Error('Popup diblokir. Izinkan popup untuk tombol Print/Cetak.');

    const html=`<!doctype html><html lang="id"><head><meta charset="utf-8"><title>${escPrint(titles[type])}</title>
<style>
@page{size:${landscape?'330.2mm 215.9mm':'215.9mm 330.2mm'};margin:9mm}
*{box-sizing:border-box}html,body{margin:0;padding:0;background:#fff;color:#000}
body{font-family:Arial,Helvetica,sans-serif;font-size:9.5pt;line-height:1.2;width:100%}
.page{width:100%;max-width:${landscape?'312mm':'198mm'};margin:0 auto}
.identity{text-align:center;margin:0 0 5mm;line-height:1.12}.identity .library{font-size:15pt;font-weight:700;text-transform:uppercase}.identity .school{font-size:12.5pt;font-weight:700;text-transform:uppercase}.identity .title{font-size:11.5pt;font-weight:700;margin-top:2.5mm}.identity .year{font-size:9.5pt;font-style:italic;margin-top:1mm}
table.data{width:auto;min-width:100%;max-width:100%;border-collapse:collapse;border-spacing:0;table-layout:auto;margin:0 auto}
table.data th,table.data td{border:1px solid #000;padding:2.7px 4px;vertical-align:middle;height:auto;min-width:fit-content}
table.data th{text-align:center;font-weight:700;background:#fff;white-space:nowrap}
table.data td{white-space:nowrap;text-align:center;overflow:visible;text-overflow:clip}
table.data .left-col{text-align:left!important;white-space:normal;overflow-wrap:break-word;word-break:normal}
table.data .date-col{text-align:center!important;white-space:nowrap!important;font-variant-numeric:tabular-nums;min-width:25mm}
table.data .signature-col{text-align:center!important;white-space:nowrap!important;min-width:20mm}
table.data .center-col{text-align:center!important;white-space:nowrap;vertical-align:middle}
table.data td.paraf-cell{padding:1.5mm;text-align:center!important;white-space:nowrap!important}
.paraf-print{display:block;width:auto;height:auto;max-width:20mm;max-height:10mm;object-fit:contain;margin:0 auto}
table.data.long-list th,table.data.long-list td{font-size:${colCount>=11?'7.4pt':'8.4pt'};line-height:1.12}
table.data.long-list th.left-col,table.data.long-list td.left-col{font-size:${colCount>=11?'7.7pt':'8.5pt'}}
table.data.long-list td{min-height:6mm}
table.data.report-data{width:min(100%,170mm);margin:0 auto;table-layout:auto}
table.data.report-data th,table.data.report-data td{font-size:10pt;line-height:1.25;padding:5px 7px}
table.data.report-data th:first-child,table.data.report-data td:first-child{text-align:left;white-space:normal}.empty{text-align:center!important;font-style:italic!important}
.signature{width:100%;border-collapse:collapse;margin-top:14mm;table-layout:fixed}.signature td{width:50%;border:0!important;text-align:center;vertical-align:top;padding:0 10mm}.sign-role{font-weight:700}.sign-space{height:20mm}.sign-name{font-weight:700;min-height:5mm}.sign-nip{margin-top:1mm}
@media print{thead{display:table-header-group}tr{page-break-inside:avoid}table.data.long-list{page-break-inside:auto}}
</style>
<style id="compact-table-font-fix">
/* Safe compact tables: one line, readable, and horizontally scrollable on phones */
.scroll{overflow-x:auto!important;overflow-y:visible!important;-webkit-overflow-scrolling:touch}
table{width:max-content;min-width:100%;table-layout:auto}
th,td{font-size:12px;line-height:1.15;padding:5px 6px;white-space:nowrap!important;vertical-align:middle;box-sizing:border-box}
th{font-size:12px;text-align:center}
td{overflow:hidden;text-overflow:ellipsis}
td:first-child{width:42px;text-align:center}
td.nama,td.name,td.judul,td.title,td.book-title{text-align:left}
td:not(:first-child):not(.nama):not(.name):not(.judul):not(.title):not(.book-title){text-align:center}
@media(max-width:700px){th,td{font-size:11px;padding:4px 5px}.scroll table{min-width:760px}}
@media print{th,td{font-size:9px!important;padding:3px 4px!important;white-space:nowrap!important}.scroll{overflow:visible!important}table{width:100%!important;min-width:0!important;table-layout:auto!important}}
.web-install-btn{}
@media (display-mode: standalone){#installBtn{display:none!important}}
.auth-ok #login{display:none!important}.auth-ok #app{display:block!important}
</style>

<style id="v13-branding-sync">
.startup-splash{position:fixed;inset:0;z-index:100000;display:grid;place-items:center;background:linear-gradient(135deg,#062b61,#0b5dc5);color:#fff}.startup-card{text-align:center;width:min(92vw,520px);padding:24px}.startup-card img{width:min(300px,68vw);height:auto;max-height:300px;object-fit:contain;filter:drop-shadow(0 12px 24px rgba(0,0,0,.28))}.startup-title{font-size:clamp(22px,4vw,32px);font-weight:800;margin:18px 0 16px}.startup-bar{width:min(360px,78vw);height:12px;border-radius:999px;background:rgba(255,255,255,.3);margin:0 auto 22px;overflow:hidden}.startup-bar i{display:block;width:38%;height:100%;border-radius:999px;background:#ffd54a;animation:v13load 1.05s ease-in-out infinite}@keyframes v13load{0%{transform:translateX(-120%)}100%{transform:translateX(330%)}}.startup-copy{font-size:14px;line-height:1.45;color:#ffe36b;font-weight:700}.global-copyright{position:fixed;left:0;right:0;bottom:0;z-index:90;text-align:center;padding:6px 10px;font-size:11px;font-weight:700;color:#fff;background:rgba(3,24,54,.78);backdrop-filter:blur(4px);pointer-events:none}.loginCard{position:relative}.loginCard:after{content:'© Gugun Risnawan SD Negeri Warakas 3 • Hak Cipta Dilindungi';display:block;margin-top:16px;font-size:11px;font-weight:700;color:#ffd84d;text-align:center}.dashboard-heading:before{content:'📚  ';}.member-mini{display:inline-block;padding:8px 10px;border:1px solid #d9e2ec;border-radius:8px;background:#f7fbff;color:#183b63;font-size:13px}.brandArea .headerLogo{filter:drop-shadow(0 2px 4px rgba(0,0,0,.22))}
@media(max-width:700px){.global-copyright{font-size:9px;padding:5px 6px}.startup-title{font-size:22px}.startup-copy{font-size:12px}}
</style>
</head><body><div class="page">
<div class="identity"><div class="library">${escPrint(library)}</div><div class="school">${escPrint(school)}</div><div class="title">${escPrint(titles[type])}</div><div class="year">TAHUN PELAJARAN ${escPrint(academicYear)}${isAjaran?' '+escPrint(periodLabel):((type==='laporan'||type==='pengunjung'||type==='pinjam'||type==='kembali')?' — '+escPrint(periodLabel):'')}</div></div>
<table class="data ${type==='laporan'?'report-data':'long-list'}">${colgroup}<thead><tr>${headerRow.map((h,i)=>`<th class="${columnClasses[i]||''}">${escPrint(h)}</th>`).join('')}</tr></thead><tbody>
${headers.length>1?headers.slice(1).map(row=>`<tr>${row.map((v,i)=>{const sv=String(v??'');if(sv.startsWith('data:image/'))return `<td class="signature-col paraf-cell"><img class="paraf-print" src="${escPrint(sv)}" alt="Paraf siswa"></td>`;const cls=columnClasses[i]||'center-col';return `<td class="${cls}">${escPrint(v)}</td>`}).join('')}</tr>`).join(''):`<tr><td class="empty" colspan="${colCount}">Tidak ada data untuk dicetak</td></tr>`}
</tbody></table>
<table class="signature"><tr><td><div>Mengetahui,</div><div class="sign-role">Kepala Sekolah</div><div class="sign-space"></div><div class="sign-name">${escPrint(kepala||'................................................')}</div><div class="sign-nip">NIP. ${escPrint(nipKepala||'................................................')}</div></td><td><div>${escPrint(tempat)}, ${escPrint(printDate)}</div><div class="sign-role">Petugas Perpustakaan</div><div class="sign-space"></div><div class="sign-name">${escPrint(petugas||'................................................')}</div><div class="sign-nip">NIP. ${escPrint(nipPetugas||'................................................')}</div></td></tr></table>
</div><script id="v49-camera-photo-sync">(function(){
  const CENTRAL='https://perpustakaanlenterahatiwarakas3.66ghz.com/';
  const MEDIA_API=new URL('api.php',CENTRAL).href;
  try{localStorage.setItem('perpus_central_server',CENTRAL)}catch(e){}
  function addCamera(fileId){
    const f=document.getElementById(fileId); if(!f||f.dataset.v49camera)return;
    f.dataset.v49camera='1';
    const cap=document.createElement('input'); cap.type='file'; cap.accept='image/*'; cap.capture='environment'; cap.style.display='none'; cap.id=fileId+'_camera';
    const btn=document.createElement('button'); btn.type='button'; btn.textContent='📷 Kamera'; btn.style.marginLeft='6px';
    btn.onclick=()=>cap.click();
    cap.onchange=()=>{const file=cap.files&&cap.files[0];if(!file)return;try{const dt=new DataTransfer();dt.items.add(file);f.files=dt.files;f.dispatchEvent(new Event('change',{bubbles:true}))}catch(e){alert('Foto kamera sudah dipilih. Silakan simpan.')}};
    f.parentNode.appendChild(cap); f.parentNode.appendChild(btn);
  }
  function setupCameras(){addCamera('aFotoFile');addCamera('bFotoFile')}
  async function remotePut(store,key,file){
    if(!navigator.onLine||!file)return false;
    try{
      const fd=new FormData();fd.append('action','media_put');fd.append('store',store);fd.append('key',String(key));fd.append('file',file,file.name||'foto.jpg');
      const r=await fetch(MEDIA_API,{method:'POST',body:fd,mode:'cors'}); return r.ok;
    }catch(e){return false}
  }
  async function saveRemotePhoto(store,key,file){
    if(typeof mediaPut==='function')await mediaPut(store,String(key),file);
    return await remotePut(store,key,file);
  }
  window.v49UploadMemberPhoto=async function(file,id){if(!file||!id)return;if(!file.type.startsWith('image/'))return alert('Foto anggota harus berupa gambar.');await saveRemotePhoto('anggota',id,file);if(typeof renderAnggota==='function')renderAnggota();if(typeof renderMemberCardPreview==='function')renderMemberCardPreview()}
  window.v49UploadBookPhoto=async function(file,id){if(!file||!id)return;if(!file.type.startsWith('image/'))return alert('Foto buku harus berupa gambar.');await saveRemotePhoto('buku',id,file);if(typeof renderBuku==='function')renderBuku()}
  async function getPhoto(store,key){
    let b=await mediaGet(store,String(key));
    if(b)return b;
    if(!navigator.onLine)return null;
    try{const u=new URL(MEDIA_API);u.searchParams.set('action','media_get');u.searchParams.set('store',store);u.searchParams.set('key',String(key));const r=await fetch(u.href,{mode:'cors'});if(!r.ok)return null;b=await r.blob();if(b&&b.size){await mediaPut(store,String(key),b);return b}}catch(e){} return null;
  }
  window.hydratePhotos=async function(root){if(!root)return;for(const img of root.querySelectorAll('img[data-photo-store]')){const b=await getPhoto(img.dataset.photoStore,img.dataset.photoId);if(b){const u=URL.createObjectURL(b);img.src=u;img.dataset.blobUrl=u;img.style.cursor='pointer';img.onclick=()=>v31ViewPhoto(img.dataset.photoStore,img.dataset.photoId,img.alt)}}}
  function photoInCell(store,id,alt){return typeof photoThumb==='function'?photoThumb(store,id,alt):''}
  const oldAddA=window.addAnggota;
  window.addAnggota=async function(){const f=document.getElementById('aFotoFile')?.files?.[0];const r=await oldAddA?.();if(f){const a=(db.anggota||[]).slice().reverse().find(x=>x.nama===($('aNama')?.value||'').trim());}return r}
  // Replace add/edit with stable wrappers that capture files before reset.
  window.addAnggota=async function(){
    const nama=($('aNama')?.value||'').trim(); if(!nama)return alert('Nama wajib diisi.');
    const jenis=$('aJenis')?.value||'Siswa', student=jenis==='Siswa'; let kode=($('aKode')?.value||'').trim(); if(!kode)kode=nextCode('ANG',db.anggota);
    if(db.anggota.some(x=>String(x.kode||'').toLowerCase()===kode.toLowerCase()))return alert('Kode anggota sudah dipakai.');
    const obj=touch({id:uid(),kode,nama,createdAt:Date.now(),kelas:student?normalizeClass($('aKelas')?.value):'',nisn:student?($('aNisn')?.value||'').trim():'',jenis,kelamin:($('aKelamin')?.value||'').trim(),alamat:($('aAlamat')?.value||'').trim()});
    db.anggota.push(obj);save(); const f=$('aFotoFile')?.files?.[0]; if(f)await v49UploadMemberPhoto(f,obj.id);
    resetAnggotaForm();ensureMemberFields();toggleClass();renderAnggota();return false;
  };
  window.editAnggota=function(id){const a=db.anggota.find(x=>String(x.id)===String(id));if(!a)return;ensureMemberFields();$('aNama').value=a.nama||'';$('aKelas').value=normalizeClass(a.kelas);$('aNisn').value=a.nisn||'';$('aJenis').value=a.jenis||'Siswa';$('aKelamin').value=a.kelamin||'';$('aAlamat').value=a.alamat||'';$('aKode').value=a.kode||'';toggleClass();const btn=document.querySelector('#anggota button[onclick^="addAnggota"]');if(btn){btn.textContent='💾 Simpan Perubahan';btn.onclick=()=>window.v49UpdateAnggota(id)}$('aNama').scrollIntoView({behavior:'smooth',block:'center'});$('aNama').focus()};
  window.v49UpdateAnggota=async function(id){const a=db.anggota.find(x=>String(x.id)===String(id));if(!a)return;const nama=$('aNama').value.trim(),jenis=$('aJenis').value,kode=$('aKode').value.trim();if(!nama)return alert('Nama wajib');if(!kode)return alert('Kode wajib diisi.');if(db.anggota.some(x=>String(x.id)!==String(id)&&String(x.kode||'').toLowerCase()===kode.toLowerCase()))return alert('Kode anggota sudah dipakai.');Object.assign(a,{kode,nama,kelas:jenis==='Siswa'?normalizeClass($('aKelas').value):'',nisn:jenis==='Siswa'?$('aNisn').value.trim():'',jenis,kelamin:$('aKelamin').value,alamat:$('aAlamat').value.trim()});touch(a);save();const f=$('aFotoFile')?.files?.[0];if(f)await v49UploadMemberPhoto(f,id);resetAnggotaForm();ensureMemberFields();toggleClass();renderAnggota()};
  window.addBuku=async function(){let judul=$('bJudul').value.trim(),penulis=$('bPenulis').value.trim(),jumlah=Math.max(1,parseInt($('bJumlah').value)||1);if(!judul)return alert('Judul wajib');const key=x=>String(x||'').trim().toLowerCase().replace(/\s+/g,' ');let existing=active(db.buku).find(x=>key(x.judul)===key(judul)&&key(x.penulis)===key(penulis));const f=$('bFotoFile')?.files?.[0];if(existing){existing.jumlah=Number(existing.jumlah||0)+jumlah;existing.tersedia=Number(existing.tersedia||0)+jumlah;touch(existing);save();if(f)await v49UploadBookPhoto(f,existing.id)}else{const obj=touch({id:uid(),kode:nextCode('BUKU',db.buku),judul,penulis,rak:$('bRak').value.trim(),jumlah,tersedia:jumlah,createdAt:Date.now()});db.buku.push(obj);save();if(f)await v49UploadBookPhoto(f,obj.id)}$('bJudul').value='';$('bPenulis').value='';$('bRak').value='';$('bJumlah').value=1;if($('bFotoFile'))$('bFotoFile').value='';$('bKode').value=nextCode('BUKU',db.buku);renderBuku()};
  window.editBuku=function(id){const b=db.buku.find(x=>String(x.id)===String(id));if(!b)return;$('bKode').value=b.kode||'';$('bJudul').value=b.judul||'';$('bPenulis').value=b.penulis||'';$('bRak').value=b.rak||'';$('bJumlah').value=b.jumlah||1;const btn=document.querySelector('#buku button[onclick^="addBuku"]');if(btn){btn.textContent='💾 Simpan Perubahan';btn.onclick=()=>window.v49UpdateBuku(id)}$('bJudul').scrollIntoView({behavior:'smooth',block:'center'});$('bJudul').focus()};
  window.v49UpdateBuku=async function(id){const b=db.buku.find(x=>String(x.id)===String(id));if(!b)return;const judul=$('bJudul').value.trim(),penulis=$('bPenulis').value.trim();if(!judul)return alert('Judul wajib');Object.assign(b,{judul,penulis,rak:$('bRak').value.trim(),jumlah:Math.max(1,parseInt($('bJumlah').value)||1)});b.tersedia=Math.min(Number(b.tersedia||0),Number(b.jumlah||0));touch(b);save();const f=$('bFotoFile')?.files?.[0];if(f)await v49UploadBookPhoto(f,id);$('bJudul').value='';$('bPenulis').value='';$('bRak').value='';$('bJumlah').value=1;if($('bFotoFile'))$('bFotoFile').value='';$('bKode').value=nextCode('BUKU',db.buku);renderBuku()};
  // Add thumbnails to transaction tables/search without changing their column structure.
  function wrapRender(name,selectors){const old=window[name];if(typeof old!=='function'||old.__v49)return;const fn=function(){const r=old.apply(this,arguments);setTimeout(()=>{selectors.forEach(s=>{const root=$(s);if(root)hydratePhotos(root)});},0);return r};fn.__v49=true;window[name]=fn}
  wrapRender('renderVisit',['tp']);wrapRender('renderLoan',['tl']);wrapRender('renderReturn',['tr']);wrapRender('renderBuku',['tb']);wrapRender('renderAnggota',['ta']);
  async function retryMedia(){if(!navigator.onLine)return;for(const [store,list] of [['anggota',db.anggota||[]],['buku',db.buku||[]]]){for(const x of list){const b=await mediaGet(store,String(x.id));if(b){await remotePut(store,x.id,b)}}}}
  window.addEventListener('online',()=>{setTimeout(retryMedia,500);setTimeout(setupCameras,100)});
  document.addEventListener('DOMContentLoaded',()=>{setupCameras();setTimeout(retryMedia,1200)});
  setupCameras();
})();

/* V55: editable print date + single full-access account + transaction photo placement */
(function(){
  const V55_USER='gugun', V55_PASS='petugasperpustakaan';
  function blank(){return 'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" fill="#f3f4f6"/><rect x="8" y="8" width="64" height="64" fill="none" stroke="#d1d5db" stroke-dasharray="4 3"/></svg>')}
  function img(store,id,alt){return '<img class="v55-photo" data-photo-store="'+esc(String(store))+'" data-photo-id="'+esc(String(id||''))+'" alt="'+esc(alt||'')+'" src="'+blank()+'">'}
  function hydrate(root){if(!root)return; if(typeof hydratePhotos==='function')hydratePhotos(root)}
  function scheduleHydrate(id){setTimeout(()=>hydrate($(id)),0);setTimeout(()=>hydrate($(id)),250);setTimeout(()=>hydrate($(id)),900)}
  // CSS for photo positions: photo first, member name next; book photo immediately before title.
  const st=document.createElement('style');st.textContent='.v55-photo{width:38px;height:38px;object-fit:cover;border:1px solid #ddd;border-radius:5px;display:block;margin:auto;background:#f3f4f6}.v55-photo.v55-search{width:44px;height:44px;display:inline-block;vertical-align:middle;margin-right:8px}.v55-pick-line{display:flex;align-items:center;gap:8px}.v55-pick-line .v55-photo{flex:0 0 44px}.v55-photo-cell{text-align:center!important;width:52px;min-width:52px;padding:4px!important}';document.head.appendChild(st);

  // Editable place/date/month/year. Preserve user values; never force today's date.
  window.loadSettings=function(){
    if(!$('sPerpus'))return;
    const vals={sPerpus:settings.perpus,sSekolah:settings.sekolah,sKecamatan:settings.kecamatan,sKepala:settings.kepala,sNipKepala:settings.nipKepala,sPetugas:settings.petugas,sNipPetugas:settings.nipPetugas,sTempat:settings.tempat||'',sTanggal:settings.tanggal||'',sBulan:settings.bulan||'',sTahunTanggal:settings.tahunTanggal||'',sTahun:settings.tahun||'2026/2027'};
    Object.entries(vals).forEach(([id,v])=>{if($(id))$(id).value=v||''});
    ['sTempat','sTanggal','sBulan','sTahunTanggal'].forEach(id=>{if($(id)){$(id).readOnly=false;$(id).disabled=false}});
    if($('reportMonth'))$('reportMonth').value=settings.reportMonth||String(new Date().getMonth()+1).padStart(2,'0');
    if($('reportYear'))$('reportYear').value=settings.reportYear||String(new Date().getFullYear());
    if(typeof syncPrintPeriodControls==='function')syncPrintPeriodControls();
    if(typeof loadMemberCardSettings==='function')loadMemberCardSettings();
  };
  window.saveSettings=async function(){
    const tanggal=String($('sTanggal')?.value||'').trim(), tahunTanggal=String($('sTahunTanggal')?.value||'').trim(), bulan=String($('sBulan')?.value||'').trim(), tempat=String($('sTempat')?.value||'').trim();
    if(tanggal && (!/^\d{1,2}$/.test(tanggal)||+tanggal<1||+tanggal>31))return alert('Tanggal cetak harus 1 sampai 31.');
    if(tahunTanggal && (!/^\d{4}$/.test(tahunTanggal)||+tahunTanggal<2000||+tahunTanggal>2100))return alert('Tahun cetak tidak valid.');
    settings={...settings,tempat,tanggal,bulan,tahunTanggal,updatedAt:Date.now(),identityPermanent:false};
    save();loadSettings();if(navigator.onLine)await syncOnline(true,true);alert(navigator.onLine?'Setelan tempat dan tanggal cetak tersimpan dan disinkronkan.':'Setelan tersimpan di perangkat. Akan disinkronkan saat online.');
  };
  // Disable the old automatic date writer so user values stay intact.
  window.autoReportDate=function(){
    if($('sTanggal'))$('sTanggal').value=settings.tanggal||'';
    if($('sBulan'))$('sBulan').value=settings.bulan||'';
    if($('sTahunTanggal'))$('sTahunTanggal').value=settings.tahunTanggal||'';
  };

  // Full-access login: only gugun / petugasperpustakaan.
  function clearOldAuth(){try{localStorage.removeItem('perpus_auth_v2');localStorage.removeItem('logged');localStorage.removeItem('perpus_auth_user');localStorage.removeItem('perpus_auth_name');localStorage.removeItem('perpus_role');document.cookie='perpus_logged=; Max-Age=0; Path=/'}catch(e){}}
  const oldUser=(localStorage.getItem('perpus_auth_user')||'').toLowerCase();
  if(oldUser && oldUser!==V55_USER)clearOldAuth();
  window.login=function(){const u=String($('lu')?.value||'').trim().toLowerCase(),p=String($('lp')?.value||'');if(u!==V55_USER||p!==V55_PASS){if($('loginMsg'))$('loginMsg').textContent='Username atau kata sandi salah.';return false}rememberLogin(V55_USER);try{localStorage.setItem('perpus_role','superadmin');localStorage.setItem('perpus_auth_name','Gugun');localStorage.setItem('perpus_auth_user',V55_USER)}catch(e){}document.documentElement.classList.add('auth-ok');if($('login'))$('login').style.display='none';if($('app'))$('app').style.display='block';setStatus(navigator.onLine?'Online':'Offline',navigator.onLine);reconcileLocalInventory();render();loadSettings();if(typeof applyV27Access==='function')applyV27Access();scheduleAutoSync(20);return false};
  // Existing logged-in old account must not bypass the new login.
  window.addEventListener('DOMContentLoaded',()=>{const u=(localStorage.getItem('perpus_auth_user')||'').toLowerCase();if(u!==V55_USER){clearOldAuth();document.documentElement.classList.remove('auth-ok');if($('app'))$('app').style.display='none';if($('login'))$('login').style.display='grid';if($('loginFields'))$('loginFields').style.display='block'}else{try{localStorage.setItem('perpus_role','superadmin')}catch(e){}}});

  // Visitor table: photo first, directly before member code/name.
  window.renderVisit=function(){const all=filterBySharedPeriod('pengunjung',sortOldestFirst(active(db.pengunjung),['tanggal','createdAt']));$('tv').innerHTML=all.map((v,i)=>{let a=db.anggota.find(x=>String(x.id)===String(v.anggota))||{};return '<tr><td>'+(i+1)+'</td><td class="v55-photo-cell">'+img('anggota',a.id,'Foto anggota')+'</td><td>'+esc(a.kode||'')+'</td><td>'+esc(a.nama||'')+'</td><td>'+esc(a.kelas||'')+'</td><td>'+esc(v.keperluan||'')+'</td><td>'+esc(formatPrintDate(v.tanggal||''))+'</td><td>'+sigPreview(v.signature)+'</td><td><button onclick="editVisit(\''+v.id+'\')">✏️ Edit</button> <button class="danger" onclick="del(\'pengunjung\',\''+v.id+'\')">Hapus</button></td></tr>'}).join('')||sharedPeriodEmpty('pengunjung');scheduleHydrate('tv')};
  // Loan table: member photo before member name/code block; book photo immediately before title.
  window.renderLoan=function(){const all=filterBySharedPeriod('pinjam',sortOldestFirst(active(db.transaksi),['tgl','createdAt']));$('tl').innerHTML=all.map((t,i)=>{let a=db.anggota.find(x=>String(x.id)===String(t.anggota))||{},b=db.buku.find(x=>String(x.id)===String(t.buku))||{};return '<tr><td>'+(i+1)+'</td><td class="v55-photo-cell">'+img('anggota',a.id,'Foto anggota')+'</td><td>'+esc(a.kode||'')+'</td><td>'+esc(a.nama||'')+'</td><td>'+esc(a.kelas||'')+'</td><td class="v55-photo-cell">'+img('buku',b.id,'Foto buku')+'</td><td>'+esc(b.judul||'')+'</td><td>'+(t.jumlah||0)+'</td><td>'+esc(formatPrintDate(t.tgl||''))+'</td><td>'+esc(formatPrintDate(t.tempo||''))+'</td><td>'+esc(statusLoan(t))+'</td><td>'+sigPreview(t.signature)+'</td><td><button onclick="editLoan(\''+t.id+'\')">✏️ Edit</button> <button class="danger" onclick="del(\'transaksi\',\''+t.id+'\')">🗑️ Hapus</button></td></tr>'}).join('')||sharedPeriodEmpty('pinjam');$('kT').innerHTML=active(db.transaksi).filter(t=>t.status!=='Dikembalikan').map(t=>{let a=db.anggota.find(x=>String(x.id)===String(t.anggota))||{},b=db.buku.find(x=>String(x.id)===String(t.buku))||{};return '<option value="'+esc(t.id)+'">'+esc(a.nama||'')+' — '+esc(b.judul||'')+' — '+(t.jumlah||0)+'</option>'}).join('');scheduleHydrate('tl');if(typeof renderReturn==='function')setTimeout(renderReturn,20)};
  // Return table: keep its existing photo-first layout and make hydration reliable.
  window.renderReturn=function(){const all=filterBySharedPeriod('kembali',sortOldestFirst(active(db.transaksi).filter(t=>t.status==='Dikembalikan'),['kembali','createdAt']));$('kr').innerHTML=all.map((t,i)=>{let a=db.anggota.find(x=>String(x.id)===String(t.anggota))||{},b=db.buku.find(x=>String(x.id)===String(t.buku))||{};return '<tr><td>'+(i+1)+'</td><td class="v55-photo-cell">'+img('anggota',a.id,'Foto anggota')+'</td><td class="v55-photo-cell">'+img('buku',b.id,'Foto buku')+'</td><td>'+esc(a.kode||'')+'</td><td>'+esc(a.nama||'')+'</td><td>'+esc(b.judul||'')+'</td><td>'+(t.jumlah||0)+'</td><td>'+esc(formatPrintDate(t.tgl||''))+'</td><td>'+esc(formatPrintDate(t.kembali||''))+'</td><td>Dikembalikan</td><td>'+sigPreview(t.signatureReturn||t.signature)+'</td><td><button onclick="editReturn(\''+t.id+'\')">✏️ Edit</button> <button class="danger" onclick="del(\'transaksi\',\''+t.id+'\')">🗑️ Hapus</button></td></tr>'}).join('')||sharedPeriodEmpty('kembali');scheduleHydrate('kr')};

  // Search result layout: member photo first, name immediately beside it; book photo immediately beside title.
  const oldCariAnggota=window.cariAnggota;
  window.cariAnggota=function(inp,pil,hid,data){
    const input=$(inp),list=$(pil),hidden=$(hid),detail=$(data);if(!input||!list||!hidden||!detail)return;const q=(input.value||'').trim().toLowerCase();hidden.value='';detail.innerHTML='';if(!q){list.innerHTML='';return}
    const arr=dedupeMembers(active(db.anggota)).filter(x=>[x.nama,x.kode,x.nisn,x.nis,x.kelas,x.jenis,x.kelamin,x.alamat].some(v=>String(v??'').toLowerCase().includes(q))).slice(0,20);
    list.innerHTML=arr.map(x=>'<button type="button" class="v55-pick-line" style="display:flex;width:100%;text-align:left;margin:4px 0;background:#f1f1f1;color:#222" onclick="pickAnggota(this.dataset.id,\''+hid+'\',\''+data+'\',\''+pil+'\',\''+inp+'\')" data-id="'+esc(x.id)+'">'+img('anggota',x.id,'Foto anggota')+'<span><b>'+esc(x.nama||'-')+'</b><br><small>Kode: '+esc(x.kode||'-')+' — Kelas: '+esc(x.kelas||'-')+'</small></span></button>').join('')||'<div class="small">Anggota tidak ditemukan.</div>';scheduleHydrate(pil);
  };
  window.cariBukuPinjam=function(){const input=$('pBukuCari'),list=$('pBukuPilihan'),hidden=$('pB'),detail=$('pBukuData');if(!input||!list||!hidden||!detail)return;const q=(input.value||'').trim().toLowerCase();hidden.value='';detail.innerHTML='';if(!q){list.innerHTML='';return}const hasil=active(db.buku).filter(b=>[b.judul,b.kode,b.penulis,b.rak,b.kategori].some(v=>String(v??'').toLowerCase().includes(q))).slice(0,20);list.innerHTML=hasil.map(b=>'<button type="button" class="bookPick v55-pick-line" data-id="'+esc(b.id)+'" style="display:flex;width:100%;text-align:left;margin:4px 0;padding:9px;background:#f1f1f1;color:#222;border:1px solid #ddd;border-radius:6px">'+img('buku',b.id,'Foto buku')+'<span><b>'+esc(b.judul||'-')+'</b><br><small>Kode: '+esc(b.kode||'-')+' — Penulis: '+esc(b.penulis||'-')+' — Rak: '+esc(b.rak||'-')+' — Tersedia: '+Number(b.tersedia||0)+'</small></span></button>').join('')||'<div class="small">Buku tidak ditemukan.</div>';list.querySelectorAll('.bookPick').forEach(btn=>btn.onclick=()=>pilihBukuPinjam(btn.dataset.id));scheduleHydrate('pBukuPilihan')};
  const oldPickA=window.pickAnggota;window.pickAnggota=function(id,hid,data,pil,inp){oldPickA(id,hid,data,pil,inp);const a=db.anggota.find(x=>String(x.id)===String(id));if(a&&$(data)){$(data).innerHTML='<div class="v55-pick-line">'+img('anggota',a.id,'Foto anggota')+'<span><b>'+esc(a.nama||'-')+'</b><br>Kode: '+esc(a.kode||'-')+' — Kelas: '+esc(a.kelas||'-')+'</span></div>';scheduleHydrate(data)}};
  const oldPickB=window.pilihBukuPinjam;window.pilihBukuPinjam=function(id){oldPickB(id);const b=active(db.buku).find(x=>String(x.id)===String(id));if(b&&$('pBukuData')){$('pBukuData').innerHTML='<div class="v55-pick-line">'+img('buku',b.id,'Foto buku')+'<span>Buku dipilih: <b>'+esc(b.judul||'-')+'</b><br>Kode: '+esc(b.kode||'-')+' | Rak: '+esc(b.rak||'-')+'</span></div>';scheduleHydrate('pBukuData')}};
})();
