# POC Astro Homepage

Bukti konsep penerapan arsitektur modular Astro pada homepage studi kasus. Sumber konten berasal dari `homepage/home.html` tanpa perubahan isi.

## Struktur

```
src/
  components/   : 11 komponen, satu per blok halaman
                  (BackTopButton, Banner, About, Grow, LifeAs,
                   Looking, TestSkill, Danamoners, Info,
                   Synergize, SiteFooter)
  layouts/      : HomeLayout.astro (kerangka head, CSS, slot konten, script)
  pages/        : index.astro (menyusun seluruh komponen sesuai urutan asli)
  scripts/      : home.js (logika inisialisasi slider, tab, modal, tombol kembali)
  styles/       : home.css (salinan dari homepage/css/home.css)
```

## Menjalankan

```bash
npm install
npm run dev
npm run build
```

## Catatan

1. Section newsletter tidak disertakan karena pada berkas asli berstatus komentar nonaktif.
2. Berkas `styles/home.css` merupakan salinan dari `homepage/css/home.css`. Pada tahap lanjutan, kedua berkas ini perlu disatukan agar menjadi satu sumber tunggal.
3. Skrip jQuery dan Slick Carousel tetap dimuat dari CDN sesuai berkas asli.
