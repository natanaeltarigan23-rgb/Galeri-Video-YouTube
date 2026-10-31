# Tonton — React + Material UI

Dashboard video sederhana yang terinspirasi dari tata letak YouTube. Dibuat untuk tugas penerapan komponen Material UI dan kustomisasi tema pada React.js.

## Menjalankan aplikasi

Pastikan Node.js sudah terpasang. Buka terminal pada folder `Tonton-MUI`, lalu jalankan:

```bash
npm install
npm run dev
```

Buka alamat lokal yang muncul di terminal (biasanya `http://localhost:5173`).

## Build

```bash
npm run build
```

## Halaman

- Beranda (`/`): daftar video, pencarian, filter kategori, detail video, dan tombol simpan.
- Disimpan (`/saved`): daftar video yang sudah disimpan, pencarian, dan hapus simpanan.

## Komponen MUI

AppBar, Toolbar, Drawer, BottomNavigation, TextField, InputAdornment, Container, Grid, Card, CardActionArea, CardMedia, Chip, Avatar, Typography, IconButton, Button, Dialog, Paper, dan Tooltip.

## Kustomisasi tema

File `src/theme.js` menggunakan `createTheme` untuk mengatur warna utama merah, warna dasar putih, tipografi Arial, serta bentuk tombol dan komponen. `ThemeProvider` digunakan pada `src/main.jsx`.

## Catatan

- Tidak ada backend, API, database, maupun autentikasi.
- Video menggunakan data tiruan dari `src/data/videos.js`.
- Gambar thumbnail disimpan secara lokal di `public/thumbnails`.
- Video tidak benar-benar diputar karena fokus tugas adalah antarmuka React + MUI.
- Simpanan video menggunakan `localStorage` browser agar tidak hilang setelah halaman dimuat ulang.
- Aplikasi menyesuaikan tata letak desktop, tablet, dan ponsel.
- Seluruh kode sumber dibuat tanpa komentar.
