export const profileMeta = {
  title: 'Profil Perusahaan',
  description:
    'Kenali Jaya Techno — perusahaan digital marketing dan software house berpengalaman 7+ tahun melayani instansi, korporasi, dan UMKM di Indonesia.',
} as const;

export const companyFacts = [
  { label: 'Didirikan', value: '2021' },
  { label: 'Kantor Pusat', value: 'Cilacap, Indonesia' },
  { label: 'Klien Terlayani', value: '50+' },
  { label: 'Tim Profesional', value: '10+' },
] as const;

export const visionMission = {
  vision:
    'Menjadi perusahaan teknologi dan digital terpercaya di Indonesia yang mampu membantu bisnis dan instansi berkembang lebih cepat melalui solusi digital, sistem informasi, dan teknologi IoT yang inovatif dan berkelanjutan.',
  mission:
    'Membantu bisnis bertransformasi secara digital melalui solusi website, aplikasi, IoT, digital marketing, dan sistem otomatisasi untuk meningkatkan efisiensi serta mendukung pertumbuhan bisnis klien.',
  values: [
    {
      title: 'Growth',
      description: 'Mendorong pertumbuhan bisnis melalui inovasi dan teknologi digital.',
    },
    {
      title: 'Collaboration',
      description: 'Membangun kerja sama yang profesional dan saling berkembang.',
    },
    {
      title: 'Integrity',
      description: 'Menjunjung tinggi kepercayaan, tanggung jawab, dan profesionalitas.',
    },
    {
      title: 'Social Impact',
      description: 'Menghadirkan solusi digital yang memberi manfaat bagi masyarakat dan UMKM.',
    },

  ],
} as const;

export const milestones = [
  { year: '2021', title: 'Pendirian Perusahaan', description: 'Jaya Techno didirikan sebagai startup digital di Semarang.' },
  { year: '2022', title: 'Ekspansi Layanan', description: 'Menambah divisi Software House dan pelatihan IT.' },
  { year: '2023', title: 'Kerjasama Instansi', description: 'Bermitra dengan pemerintah daerah dan kementerian.' },
  { year: '2024', title: 'Sertifikasi & Skala', description: 'Tim bertumbuh 45+ orang dengan portofolio 150+ proyek.' },
  { year: '2025', title: 'Transformasi Digital', description: 'Fokus solusi AI-ready, data analytics, dan enterprise system.' },
] as const;

export const businessUnits = [
  {
    title: 'Digital Marketing',
    description: 'SEO, iklan digital, social media, dan content strategy untuk pertumbuhan brand.',
    icon: 'marketing',
  },
  {
    title: 'Software House',
    description: 'Website, aplikasi mobile, ERP, dan integrasi sistem untuk operasional bisnis.',
    icon: 'software',
  },
  {
    title: 'Training & Sertifikasi',
    description: 'Pelatihan IT, digital literacy, dan uji kompetensi untuk instansi & korporasi.',
    icon: 'training',
  },
  {
    title: 'Internet of Things (IoT)',
    description: 'Pengembangan sistem IoT untuk monitoring, otomasi, dan manajemen data secara real-time.',
    icon: 'consulting',
  },
] as const;

export const leadership = [
  { name: 'Aris Kusnandar, S.Kom., M.Kom.', role: 'Founder', focus: 'Strategi & Pengembangan Bisnis' },
  { name: 'Imam Syafi\'i, S.Kom., M.Kom.', role: 'Direktur Operasional', focus: 'Manajemen Proyek & Software' },
  { name: 'Fajar Hari P, S.Kom., M.Kom.', role: 'Direktur Operasional', focus: 'Brand Strategy & Digital Marketing' },
  { name: 'Fadlil Ferdiansyah, S.T.', role: 'Direktur Operasional', focus: 'Arsitektur Software & Inovasi' },
] as const;

export const differentiators = [
  'Tim multidisiplin: strategi, desain, engineering, dan analitik',
  'Metodologi agile dengan milestone dan reporting terjadwal',
  'Pengalaman 5+ tahun di sektor pemerintahan, pendidikan, dan korporat',
  'Dukungan purna-jual dan maintenance berkelanjutan',
  'Keamanan data dan kepatuhan standar industri',
] as const;

export const certifications = [
  'Microsoft Partner Network',
  'Google Partner — Ads & Analytics',
  'Kominfo — Penyelenggara Sistem Elektronik (PSE)',
  'ISO 9001:2015 — Quality Management (dalam proses)',
] as const;

export const stats = [
  { value: '5+', label: 'Tahun Pengalaman' },
  { value: '50+', label: 'Klien & Proyek' },
  { value: '10+', label: 'Tenaga Ahli' },
  { value: '99%', label: 'Kepuasan Klien' },
] as const;
