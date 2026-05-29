export const site = {
  name: 'Jaya Techno',
  legalName: 'CV. Arshaka Jaya Kreasindo',
  tagline: 'Digital and IoT Solution Parter',
  description:
    'Layanan digital marketing, pengembangan software, IoT dan training IT profesional untuk bisnis dan instansi di Indonesia.',
  url: 'https://jayatechno.net',
  email: 'jayatechno.id@gmail.com',
  phones: ['085155320108', '08985531390'],
  address: 'Jl. Nusadadi, RT.02/RW.02, Penyingkiran, Rejodadi, Kec. Cimanggu, Kabupaten Cilacap, Jawa Tengah 53256',
  whatsapp: '6285155320108',
  social: {
    facebook: 'https://www.facebook.com/share/1WpWCRVuoY/?mibextid=wwXIfr',
    instagram: 'https://instagram.com/jayatechno.id',
  },
} as const;

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/profil', label: 'Profil' },
  {
    label: 'Jasa Digital',
    children: [
      { href: '/jasa/digital-marketing', label: 'Digital Marketing' },
      { href: '/jasa/software-house', label: 'Software House' },
      { href: '/jasa/iot', label: 'Internet of Things (IoT)' },
      { href: '/jasa/training-sertifikasi', label: 'Training & Sertifikasi' },
    ],
  },
  {
    label: 'Produk Digital',
    children: [{ href: '/produk/web-dan-apps', label: 'Web & Apps' }],
  },
  { href: '/portfolio', label: 'Portfolio' },
  // { href: '/#kerjasama', label: 'Blog' },
  { href: '/#kontak', label: 'Hubungi Kami' },
] as const;
