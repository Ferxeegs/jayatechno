export const portfolioMeta = {
  title: 'Portfolio',
  description:
    'Kumpulan proyek digital marketing, pengembangan website & aplikasi, serta solusi teknologi Jayatechno untuk instansi, korporasi, dan UMKM.',
} as const;

export const categories = [
  { id: 'all', label: 'Semua' },
  { id: 'marketing', label: 'Digital Marketing' },
  { id: 'software', label: 'Software & Web' },
  { id: 'instansi', label: 'Instansi & Pemerintah' },
  { id: 'education', label: 'Pendidikan' },
] as const;

export type CategoryId = (typeof categories)[number]['id'];

export const portfolioStats = [
  { value: '150+', label: 'Proyek Selesai' },
  { value: '12', label: 'Sektor Industri' },
  { value: '85%', label: 'Klien Repeat Order' },
  { value: '4.9', label: 'Rating Kepuasan' },
] as const;

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: Exclude<CategoryId, 'all'>;
  year: string;
  description: string;
  results: string[];
  tags: string[];
  gradient: string;
  featured?: boolean;
}

export const projects: PortfolioProject[] = [
  {
    id: 'dpmptsp-jateng',
    title: 'Portal Informasi & Layanan DPMPTSP Jawa Tengah',
    client: 'DPMPTSP Provinsi Jawa Tengah',
    category: 'instansi',
    year: '2024',
    description:
      'Redesign portal layanan perizinan dengan UX yang intuitif, integrasi tracking permohonan, dan optimasi SEO regional.',
    results: ['+62% traffic organik', 'Waktu proses informasi turun 40%'],
    tags: ['Web Development', 'SEO', 'UI/UX'],
    gradient: 'from-teal/90 to-teal-light/70',
    featured: true,
  },
  {
    id: 'kemenag-digital',
    title: 'Kampanye Digital & Media Sosial Kementerian Agama',
    client: 'Kementerian Agama RI',
    category: 'instansi',
    year: '2023',
    description:
      'Manajemen konten multichannel, iklan digital terarah, dan laporan analitik bulanan untuk program nasional.',
    results: ['Reach 2.4M+ per kuartal', 'Engagement naik 78%'],
    tags: ['Social Media', 'Ads', 'Content'],
    gradient: 'from-navy/90 to-teal/80',
  },
  {
    id: 'unnes-erp',
    title: 'Sistem Manajemen KWU & Dashboard UNNES',
    client: 'Universitas Negeri Semarang',
    category: 'education',
    year: '2024',
    description:
      'Aplikasi web internal untuk monitoring unit usaha, laporan keuangan real-time, dan role-based access control.',
    results: ['Otomasi 70% laporan manual', 'Integrasi 3 modul bisnis'],
    tags: ['ERP', 'Dashboard', 'Web App'],
    gradient: 'from-teal-light/80 to-mint-accent',
  },
  {
    id: 'smk-moenadi',
    title: 'Website & Kurikulum Digital SMKN H. Moenadi',
    client: 'SMKN H. Moenadi Ungaran',
    category: 'education',
    year: '2023',
    description:
      'Website sekolah modern, portal showcase karya DKV, dan sinkronisasi kurikulum dengan kebutuhan industri kreatif.',
    results: ['300+ karya siswa dipublikasikan', 'Mitra industri 15+ perusahaan'],
    tags: ['Website', 'Education', 'Branding'],
    gradient: 'from-yellow/60 to-teal-light/60',
  },
  {
    id: 'umkm-marketplace',
    title: 'Marketplace UMKM Jawa Tengah',
    client: 'Kolaborasi Multi-UMKM',
    category: 'marketing',
    year: '2024',
    description:
      'Platform e-commerce aggregasi produk lokal dengan manajemen inventori, payment gateway, dan kampanye seasonal.',
    results: ['500+ merchant aktif', 'GMV tumbuh 120% YoY'],
    tags: ['E-commerce', 'Marketplace', 'Growth'],
    gradient: 'from-teal/70 to-navy/80',
  },
  {
    id: 'corp-seo',
    title: 'SEO Enterprise — Manufaktur Nasional',
    client: 'Perusahaan Manufaktur (NDA)',
    category: 'marketing',
    year: '2024',
    description:
      'Audit teknis SEO, content cluster strategy, dan link building untuk meningkatkan visibilitas produk B2B.',
    results: ['Keyword top 10: +340%', 'Lead organik naik 95%'],
    tags: ['SEO', 'Content Strategy', 'B2B'],
    gradient: 'from-navy/85 to-teal-light/50',
  },
  {
    id: 'hospital-app',
    title: 'Aplikasi Antrian & Telekonsultasi Klinik',
    client: 'Jaringan Klinik Swasta',
    category: 'software',
    year: '2023',
    description:
      'Aplikasi mobile untuk booking, antrian digital, notifikasi rekam medis ringkas, dan integrasi payment.',
    results: ['15.000+ pengguna aktif', 'Rating 4.8 di app store'],
    tags: ['Mobile App', 'Healthcare', 'API'],
    gradient: 'from-teal-light/70 to-mint',
  },
  {
    id: 'training-batch',
    title: 'Program Pelatihan Digital 500+ ASN',
    client: 'Instansi Pemerintah Daerah',
    category: 'instansi',
    year: '2022',
    description:
      'Pelatihan literasi digital, sertifikasi kompetensi, dan workshop hands-on untuk aparatur sipil negara.',
    results: ['500+ peserta certified', 'NPS program 92'],
    tags: ['Training', 'Certification', 'Government'],
    gradient: 'from-teal/80 to-yellow/40',
  },
  {
    id: 'resto-brand',
    title: 'Rebranding & Social Commerce F&B',
    client: 'Grup Restoran Regional',
    category: 'marketing',
    year: '2023',
    description:
      'Identitas visual baru, konten Instagram & TikTok, dan funnel iklan untuk peningkatan delivery order.',
    results: ['Followers 3x dalam 6 bulan', 'ROAS iklan 4.2x'],
    tags: ['Branding', 'Social Media', 'Ads'],
    gradient: 'from-yellow/50 to-teal/70',
  },
];

export const processSteps = [
  { step: '01', title: 'Discovery', description: 'Workshop kebutuhan, riset kompetitor, dan definisi KPI.' },
  { step: '02', title: 'Strategy', description: 'Roadmap, wireframe, dan rencana eksekusi terukur.' },
  { step: '03', title: 'Execution', description: 'Development & kampanye agile dengan milestone mingguan.' },
  { step: '04', title: 'Delivery', description: 'QA, peluncuran, pelatihan, dan dokumentasi lengkap.' },
] as const;
