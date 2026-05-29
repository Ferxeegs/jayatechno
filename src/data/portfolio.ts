export const portfolioMeta = {
  title: 'Portfolio',
  description:
    'Kumpulan proyek digital marketing, pengembangan website & aplikasi, serta solusi teknologi Jaya Techno untuk instansi, korporasi, dan UMKM.',
} as const;

export const categories = [
  { id: 'all', label: 'Semua' },
  { id: 'marketing', label: 'Digital Marketing' },
  { id: 'software', label: 'Software & Web' },
  { id: 'instansi', label: 'Instansi & Pemerintah' },
  { id: 'education', label: 'Pendidikan' },
] as const;

export type CategoryId = (typeof categories)[number]['id'];
export type ProjectCategoryId = Exclude<CategoryId, 'all'>;

export const portfolioStats = [
  { value: '50+', label: 'Proyek Selesai' },
  { value: '10+', label: 'Sektor Industri' },
  { value: '85%', label: 'Klien Repeat Order' },
  { value: '4.9', label: 'Rating Kepuasan' },
] as const;

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  categories: ProjectCategoryId[];
  year: string;
  description: string;
  results: string[];
  tags: string[];
  image: string;
  imageAlt?: string;
  featured?: boolean;
}

export const projects: PortfolioProject[] = [
  {
    id: 'projectone',
    title: 'Optimalisasi SEO Website Project One',
    client: 'Perusahaan Project One Jersey',
    categories: ['marketing', 'software'],
    year: '2024',
    description:
      'Optimalisasi SEO website Project One Jersey untuk meningkatkan visibilitas dan traffic organik di mesin pencari.',
    results: ['+62% traffic organik', 'Google Page Rank 8'],
    tags: ['Web Development', 'SEO', 'UI/UX'],
    image: '/images/portfolio/projectone-prt.png',
    imageAlt: 'Tampilan website Project One Jersey',
    featured: true,
  },
  {
    id: 'elaundry-ali-maksum',
    title: 'Sistem eLaundry Pondok Pesantren Ali Maksum',
    client: 'Pondok Pesantren Ali Maksum',
    categories: ['education', 'software'],
    year: '2026',
    description:
      'Aplikasi web eLaundry untuk mengelola layanan cuci pakaian santri—mulai dari pemesanan, tracking status cucian, hingga pencatatan transaksi secara digital.',
    results: ['Operasional laundry lebih teratur', 'Transaksi & status cucian tercatat real-time'],
    tags: ['Web App', 'eLaundry', 'Education'],
    image: '/images/portfolio/elaundry-prt.png',
    imageAlt: 'Tampilan sistem eLaundry Pondok Pesantren Ali Maksum',
  },
  {
    id: 'grand-rohan',
    title: 'Feed Instagram & Konten Sosial Grand Rohan',
    client: 'Grand Rohan Jogja',
    categories: ['marketing'],
    year: '2024',
    description:
      'Perancangan feed Instagram, konten visual, dan kalender posting untuk memperkuat citra hospitality dan promosi properti di Yogyakarta.',
    results: ['Feed Instagram konsisten & estetik', 'Engagement & awareness brand meningkat'],
    tags: ['Instagram', 'Social Media', 'Content Creation'],
    image: '/images/portfolio/grand-prt.png',
    imageAlt: 'Feed Instagram Grand Rohan Jogja',
  },
  {
    id: 'tulip-studio',
    title: 'Manajemen Feed Instagram Tulip Studio',
    client: 'Tulip Studio',
    categories: ['marketing'],
    year: '2024',
    description:
      'Desain feed Instagram dan produksi konten kreatif untuk menampilkan portofolio karya studio desain dan produksi visual.',
    results: ['Visual feed selaras identitas brand', 'Konten kreatif rutin terpublikasi'],
    tags: ['Instagram', 'Creative', 'Social Media'],
    image: '/images/portfolio/tulip-prt.png',
    imageAlt: 'Feed Instagram Tulip Studio',
  },
  {
    id: 'marga-jaya',
    title: 'Website & Sistem Informasi Perusahaan',
    client: 'Marga Jaya',
    categories: ['software'],
    year: '2024',
    description:
      'Website perusahaan dan penataan informasi layanan untuk mendukung operasional dan komunikasi dengan klien.',
    results: ['Profil perusahaan terstruktur', 'Akses informasi lebih mudah'],
    tags: ['Website', 'Corporate', 'Web App'],
    image: '/images/portfolio/marga-prt.png',
    imageAlt: 'Website Marga Jaya',
  },
  {
    id: 'atika-transport',
    title: 'Feed Instagram & Konten Promosi Atika Transport',
    client: 'Atika Transport',
    categories: ['marketing'],
    year: '2024',
    description:
      'Desain feed Instagram dan konten promosi layanan transportasi untuk memperkenalkan armada, rute, dan penawaran kepada calon pelanggan.',
    results: ['Informasi layanan mudah dicerna di IG', 'Jangkauan promosi digital lebih luas'],
    tags: ['Instagram', 'Social Media', 'Transport'],
    image: '/images/portfolio/atika-prt.png',
    imageAlt: 'Feed Instagram Atika Transport',
  },
  {
    id: 'trooking',
    title: 'Website & Ekosistem Digital Trooking',
    client: 'Trooking',
    categories: ['software'],
    year: '2024',
    description:
      'Pengembangan website dan dukungan digital untuk mendukung layanan dan interaksi dengan pengguna.',
    results: ['UX modern & mobile-friendly', 'Integrasi konten dinamis'],
    tags: ['Website', 'UI/UX', 'Development'],
    image: '/images/portfolio/trooking-prt.png',
    imageAlt: 'Website Trooking',
  },
  {
    id: 'mustika',
    title: 'Website Korporat & Digital Presence',
    client: 'Mustika Company',
    categories: ['software'],
    year: '2023',
    description:
      'Pengembangan website perusahaan dengan struktur informasi yang jelas dan tampilan profesional.',
    results: ['Website responsif multi-device', 'Loading cepat & SEO-ready'],
    tags: ['Website', 'Corporate', 'UI/UX'],
    image: '/images/portfolio/mustika-prt.png',
    imageAlt: 'Website Mustika Company',
  },
  {
    id: 'syndrome-ukai',
    title: 'Aplikasi Web CBT (Computer Based Test) Perusahaan',
    client: 'Syndrome Ukai',
    categories: ['software'],
    year: '2023',
    description:
      'Pengembangan platform web CBT untuk pelaksanaan ujian dan asesmen berbasis komputer di lingkungan perusahaan, dengan manajemen soal, peserta, dan laporan hasil.',
    results: ['Ujian online terstruktur & aman', 'Pelaporan hasil ujian otomatis'],
    tags: ['Web App', 'CBT', 'Assessment'],
    image: '/images/portfolio/syndrome-prt.png',
    imageAlt: 'Tampilan aplikasi web CBT Syndrome Ukai',
  },
  {
    id: 'weekn',
    title: 'Feed Instagram & Konten Brand Roti Week N',
    client: 'Roti Week N',
    categories: ['marketing'],
    year: '2023',
    description:
      'Pembuatan feed Instagram dan konten visual produk untuk memperkuat branding F&B serta menarik minat pelanggan di media sosial.',
    results: ['Tampilan feed produk lebih menarik', 'Interaksi audiens di Instagram meningkat'],
    tags: ['Instagram', 'Branding', 'F&B'],
    image: '/images/portfolio/weekn-prt.png',
    imageAlt: 'Feed Instagram Roti Week N',
  },
];

export const processSteps = [
  { step: '01', title: 'Discovery', description: 'Workshop kebutuhan, riset kompetitor, dan definisi KPI.' },
  { step: '02', title: 'Strategy', description: 'Roadmap, wireframe, dan rencana eksekusi terukur.' },
  { step: '03', title: 'Execution', description: 'Development & kampanye agile dengan milestone mingguan.' },
  { step: '04', title: 'Delivery', description: 'QA, peluncuran, pelatihan, dan dokumentasi lengkap.' },
] as const;
