export const profileMeta = {
  title: 'Profil Perusahaan',
  description:
    'Kenali Jayatechno — perusahaan digital marketing dan software house berpengalaman 7+ tahun melayani instansi, korporasi, dan UMKM di Indonesia.',
} as const;

export const companyFacts = [
  { label: 'Didirikan', value: '2018' },
  { label: 'Kantor Pusat', value: 'Semarang, Indonesia' },
  { label: 'Klien Terlayani', value: '200+' },
  { label: 'Tim Profesional', value: '45+' },
] as const;

export const visionMission = {
  vision:
    'Menjadi mitra transformasi digital terdepan yang memberdayakan bisnis dan instansi Indonesia melalui teknologi dan strategi berbasis data.',
  mission:
    'Menghadirkan solusi digital marketing, pengembangan software, dan pelatihan IT yang terukur, berkelanjutan, dan selaras dengan tujuan organisasi klien.',
  values: [
    {
      title: 'Integritas',
      description: 'Transparansi dalam setiap proyek, laporan, dan komunikasi dengan klien.',
    },
    {
      title: 'Inovasi',
      description: 'Terus mengadopsi metode dan teknologi terkini untuk hasil optimal.',
    },
    {
      title: 'Kolaborasi',
      description: 'Bekerja sebagai mitra strategis, bukan sekadar vendor layanan.',
    },
    {
      title: 'Keunggulan',
      description: 'Standar kualitas tinggi dalam delivery, dukungan, dan kepuasan klien.',
    },
  ],
} as const;

export const milestones = [
  { year: '2018', title: 'Pendirian Perusahaan', description: 'Jayatechno didirikan sebagai startup digital di Semarang.' },
  { year: '2019', title: 'Ekspansi Layanan', description: 'Menambah divisi Software House dan pelatihan IT.' },
  { year: '2021', title: 'Kerjasama Instansi', description: 'Bermitra dengan pemerintah daerah dan kementerian.' },
  { year: '2023', title: 'Sertifikasi & Skala', description: 'Tim bertumbuh 45+ orang dengan portofolio 150+ proyek.' },
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
    title: 'Konsultasi & Advisory',
    description: 'Audit digital, roadmap teknologi, dan strategi transformasi organisasi.',
    icon: 'consulting',
  },
] as const;

export const leadership = [
  { name: 'Dr. Ahmad Wijaya', role: 'Direktur Utama', focus: 'Strategi & pengembangan bisnis' },
  { name: 'Siti Rahmawati, S.Kom', role: 'Direktur Operasional', focus: 'Delivery & manajemen proyek' },
  { name: 'Budi Santoso, M.T.', role: 'Head of Technology', focus: 'Arsitektur software & inovasi' },
  { name: 'Dewi Lestari, M.M.', role: 'Head of Marketing', focus: 'Brand strategy & growth' },
] as const;

export const differentiators = [
  'Tim multidisiplin: strategi, desain, engineering, dan analitik',
  'Metodologi agile dengan milestone dan reporting terjadwal',
  'Pengalaman 7+ tahun di sektor pemerintahan, pendidikan, dan korporat',
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
  { value: '7+', label: 'Tahun Pengalaman' },
  { value: '200+', label: 'Klien & Proyek' },
  { value: '45+', label: 'Tenaga Ahli' },
  { value: '98%', label: 'Kepuasan Klien' },
] as const;
