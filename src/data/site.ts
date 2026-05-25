export const site = {
  name: 'Jayatechno',
  legalName: 'PT Jaya Techno Digital',
  tagline: 'Partner Digital Untuk Bisnis & Instansi',
  description:
    'Layanan digital marketing, pengembangan software, dan training IT profesional untuk bisnis dan instansi di Indonesia.',
  url: 'https://jayatechno.co.id',
  email: 'info@jayatechno.co.id',
  phones: ['0812-3456-7890', '0813-9876-5432'],
  address: 'Gedung KWU UNNES Lantai 3, Gunungpati, Kota Semarang',
  whatsapp: '6281234567890',
  social: {
    facebook: 'https://facebook.com/jayatechno',
    instagram: 'https://instagram.com/jayatechno',
  },
} as const;

export const navLinks = [
  { href: '#beranda', label: 'Home' },
  { href: '#profil', label: 'Profil' },
  {
    label: 'Jasa Digital',
    children: [
      { href: '#layanan', label: 'Digital Marketing' },
      { href: '#layanan', label: 'Software House' },
      { href: '#layanan', label: 'Training & Sertifikasi' },
    ],
  },
  {
    label: 'Produk Digital',
    children: [
      { href: '#layanan', label: 'SEO' },
      { href: '#layanan', label: 'Web & Apps' },
    ],
  },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#kerjasama', label: 'Blog' },
  { href: '#kontak', label: 'Hubungi Kami' },
] as const;
