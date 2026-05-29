export type OfferingType = 'jasa' | 'produk';

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceNote?: string;
  featured?: boolean;
  features: string[];
  ctaLabel: string;
}

export interface OfferingFeature {
  title: string;
  description: string;
}

export interface OfferingFAQ {
  question: string;
  answer: string;
}

export interface Offering {
  slug: string;
  type: OfferingType;
  navLabel: string;
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    stats?: { value: string; label: string }[];
  };
  overview: {
    paragraphs: string[];
    benefits: string[];
  };
  deliverables: OfferingFeature[];
  pricingIntro: string;
  pricing: PricingTier[];
  process: { step: string; title: string; description: string }[];
  faqs: OfferingFAQ[];
}

export const offerings: Offering[] = [
  {
    slug: 'digital-marketing',
    type: 'jasa',
    navLabel: 'Digital Marketing',
    meta: {
      title: 'Digital Marketing',
      description:
        'Layanan SEO, iklan digital, social media management, dan strategi konten untuk pertumbuhan brand dan lead berkualitas.',
    },
    hero: {
      eyebrow: 'Jasa Digital',
      title: 'Digital Marketing yang',
      highlight: 'Terukur',
      subtitle:
        'Kami membantu brand tumbuh melalui strategi berbasis data—dari visibilitas organik hingga kampanye berbayar yang efisien.',
      stats: [
        { value: '20+', label: 'Klien Terlayani' },
        { value: '2x', label: 'ROI Kampanye Rata-rata' },
        { value: '5+', label: 'Tahun Pengalaman' },
      ],
    },
    overview: {
      paragraphs: [
        'Tim digital marketing Jaya Techno merancang strategi end-to-end: riset audiens, perencanaan kanal, produksi konten, optimasi iklan, dan pelaporan KPI bulanan.',
        'Cocok untuk UMKM, korporasi, instansi, dan lembaga pendidikan yang ingin memperkuat presence online tanpa mengorbankan kualitas brand.',
      ],
      benefits: [
        'Strategi disesuaikan tujuan bisnis & anggaran',
        'Laporan performa transparan setiap bulan',
        'Tim multidisiplin: SEO, ads, creative, analitik',
        'Fleksibel: retainer bulanan atau proyek terbatas',
      ],
    },
    deliverables: [
      { title: 'SEO & Konten', description: 'Audit teknis, riset keyword, optimasi on-page, dan content plan.' },
      { title: 'Iklan Digital', description: 'Google Ads, Meta Ads, retargeting, dan optimasi anggaran.' },
      { title: 'Social Media', description: 'Manajemen kanal, kalender konten, desain feed, dan engagement.' },
      { title: 'Analitik & Laporan', description: 'Dashboard KPI, insight bulanan, dan rekomendasi perbaikan.' },
    ],
    pricingIntro: 'Paket retainer bulanan. Harga dapat disesuaikan setelah konsultasi kebutuhan dan skala kanal.',
    pricing: [
      {
        id: 'dm-starter',
        name: 'Starter',
        tagline: 'UMKM & brand yang baru mulai',
        price: 'Rp 3.500.000',
        priceNote: '/ bulan',
        features: [
          'Manajemen 2 kanal sosial media',
          '12 konten desain + caption / bulan',
          'Kalender konten & scheduling',
          'Laporan performa bulanan',
          '1x revisi per konten',
        ],
        ctaLabel: 'Mulai Starter',
      },
      {
        id: 'dm-growth',
        name: 'Growth',
        tagline: 'Pertumbuhan terukur multi-kanal',
        price: 'Rp 7.500.000',
        priceNote: '/ bulan',
        featured: true,
        features: [
          'Semua fitur Starter',
          'SEO on-page & 4 artikel blog / bulan',
          'Manajemen Google Ads atau Meta Ads',
          'Riset kompetitor & audiens',
          'Dashboard KPI & call review bulanan',
        ],
        ctaLabel: 'Pilih Growth',
      },
      {
        id: 'dm-enterprise',
        name: 'Enterprise',
        tagline: 'Skala instansi & korporasi',
        price: 'Kustom',
        priceNote: 'penawaran khusus',
        features: [
          'Strategi omnichannel lengkap',
          'Tim dedicated & SLA respons',
          'Integrasi CRM / analytics lanjutan',
          'Kampanye seasonal & activations',
          'Workshop alignment dengan stakeholder',
        ],
        ctaLabel: 'Minta Penawaran',
      },
    ],
    process: [
      { step: '01', title: 'Audit & Discovery', description: 'Analisis kanal existing, kompetitor, dan baseline KPI.' },
      { step: '02', title: 'Strategy', description: 'Roadmap kanal, anggaran, dan kalender 90 hari.' },
      { step: '03', title: 'Eksekusi', description: 'Produksi konten, optimasi ads, dan monitoring harian.' },
      { step: '04', title: 'Optimasi', description: 'Review data, A/B test, dan iterasi strategi.' },
    ],
    faqs: [
      {
        question: 'Apakah kontrak minimal 3 bulan?',
        answer:
          'Disarankan minimal 3 bulan agar strategi dan optimasi berjalan optimal. Paket proyek pendek juga tersedia untuk kampanye khusus.',
      },
      {
        question: 'Apakah biaya iklan termasuk dalam paket?',
        answer: 'Biaya media (ad spend) ditanggung klien terpisah. Kami mengelola setup, optimasi, dan pelaporan performa iklan.',
      },
      {
        question: 'Bisakah hanya SEO atau hanya social media?',
        answer: 'Ya. Modul dapat disesuaikan; hubungi tim kami untuk paket à la carte.',
      },
    ],
  },
  {
    slug: 'software-house',
    type: 'jasa',
    navLabel: 'Software House',
    meta: {
      title: 'Software House',
      description:
        'Pengembangan website, aplikasi web, sistem informasi, dan integrasi API untuk operasional bisnis yang lebih efisien.',
    },
    hero: {
      eyebrow: 'Jasa Digital',
      title: 'Software House',
      highlight: 'Profesional',
      subtitle:
        'Dari website perusahaan hingga sistem internal—dibangun dengan arsitektur rapi, keamanan terjaga, dan dokumentasi lengkap.',
      stats: [
        { value: '15+', label: 'Proyek Delivered' },
        { value: 'Agile', label: 'Metodologi Kerja' },
        { value: '12 bln', label: 'Garansi Maintenance*' },
      ],
    },
    overview: {
      paragraphs: [
        'Kami mengembangkan solusi custom sesuai alur bisnis Anda—bukan template generik. Setiap proyek meliputi analisis kebutuhan, UI/UX, development, testing, deployment, dan handover.',
        'Stack modern (responsive web, REST API, database terstruktur) dengan opsi maintenance dan pengembangan lanjutan.',
      ],
      benefits: [
        'Source code & dokumentasi menjadi milik klien',
        'Milestone jelas dengan demo berkala',
        'Desain UI selaras identitas brand',
        'Dukungan pasca-launch & maintenance',
      ],
    },
    deliverables: [
      { title: 'Website & Landing', description: 'Company profile, campaign page, dan portal informasi.' },
      { title: 'Aplikasi Web', description: 'Dashboard, ERP ringan, CRM, dan sistem operasional.' },
      { title: 'Integrasi', description: 'Payment gateway, WhatsApp API, Google Workspace, dan third-party.' },
      { title: 'Maintenance', description: 'Update keamanan, backup, monitoring, dan enhancement berkala.' },
    ],
    pricingIntro: 'Harga proyek berdasarkan kompleksitas fitur. Estimasi final setelah sesi discovery gratis.',
    pricing: [
      {
        id: 'sh-website',
        name: 'Company Website',
        tagline: 'Website perusahaan profesional',
        price: 'Rp 12.000.000',
        priceNote: 'mulai dari',
        features: [
          'Hingga 12 halaman responsif',
          'Desain UI custom',
          'Form kontak & integrasi WhatsApp',
          'SEO dasar & kecepatan optimal',
          'Training admin & 1 bulan support',
        ],
        ctaLabel: 'Konsultasi Website',
      },
      {
        id: 'sh-webapp',
        name: 'Web Application',
        tagline: 'Sistem & dashboard operasional',
        price: 'Rp 35.000.000',
        priceNote: 'mulai dari',
        featured: true,
        features: [
          'Analisis kebutuhan & wireframe',
          'Role-based access & database',
          'Modul sesuai scope (CRUD, laporan, export)',
          'API & integrasi pihak ketiga',
          'UAT, deployment & dokumentasi teknis',
        ],
        ctaLabel: 'Diskusikan Sistem',
      },
      {
        id: 'sh-enterprise',
        name: 'Enterprise',
        tagline: 'Skala besar & multi-modul',
        price: 'Kustom',
        priceNote: 'penawaran khusus',
        features: [
          'Arsitektur scalable & high availability',
          'Integrasi legacy / ERP existing',
          'SLA, dedicated support & DevOps',
          'Tim extended & roadmap jangka panjang',
          'Compliance & keamanan lanjutan',
        ],
        ctaLabel: 'Minta Penawaran',
      },
    ],
    process: [
      { step: '01', title: 'Discovery', description: 'Workshop kebutuhan, user flow, dan definisi scope.' },
      { step: '02', title: 'Design', description: 'Wireframe, UI mockup, dan approval desain.' },
      { step: '03', title: 'Development', description: 'Sprint agile, demo mingguan, dan QA berkala.' },
      { step: '04', title: 'Launch', description: 'Deployment, training, dan serah terima dokumentasi.' },
    ],
    faqs: [
      {
        question: 'Berapa lama pengerjaan website company?',
        answer: 'Umumnya 4–8 minggu tergantung jumlah halaman, konten, dan revisi desain.',
      },
      {
        question: 'Apakah source code diserahkan?',
        answer: 'Ya, setelah pelunasan proyek sesuai kesepakatan kontrak.',
      },
      {
        question: 'Apakah bisa maintenance setelah launch?',
        answer: 'Tersedia paket maintenance bulanan mulai Rp 2.500.000/bulan.',
      },
    ],
  },
  {
    slug: 'iot',
    type: 'jasa',
    navLabel: 'Internet of Things (IoT)',
    meta: {
      title: 'Internet of Things (IoT)',
      description:
        'Solusi IoT untuk monitoring real-time, otomasi perangkat, dan dashboard data untuk industri, pertanian, dan fasilitas.',
    },
    hero: {
      eyebrow: 'Jasa Digital',
      title: 'Solusi IoT untuk',
      highlight: 'Operasional Cerdas',
      subtitle:
        'Hubungkan sensor, perangkat, dan cloud dalam satu ekosistem—pantau, kendalikan, dan ambil keputusan berbasis data real-time.',
      stats: [
        { value: '24/7', label: 'Monitoring' },
        { value: 'Edge', label: '& Cloud Ready' },
        { value: 'Custom', label: 'Hardware Integration' },
      ],
    },
    overview: {
      paragraphs: [
        'Jaya Techno merancang sistem IoT end-to-end: pemilihan sensor/node, konektivitas (WiFi, LoRa, cellular), backend, dashboard, dan alerting.',
        'Ideal untuk smart agriculture, monitoring aset, utilitas gedung, dan otomasi fasilitas pendidikan atau industri.',
      ],
      benefits: [
        'Arsitektur disesuaikan kondisi lapangan',
        'Dashboard web & notifikasi real-time',
        'Skalabel dari pilot ke production',
        'Dokumentasi teknis & pelatihan operator',
      ],
    },
    deliverables: [
      { title: 'Sensor & Node', description: 'Integrasi sensor suhu, kelembapan, level, energi, dan custom.' },
      { title: 'Connectivity', description: 'MQTT, API gateway, dan protokol sesuai infrastruktur site.' },
      { title: 'Dashboard', description: 'Visualisasi data, histori, export, dan multi-user access.' },
      { title: 'Alerting', description: 'Notifikasi WhatsApp, email, atau SMS saat threshold terlampaui.' },
    ],
    pricingIntro: 'Investasi bergantung pada jumlah node, jenis sensor, dan infrastruktur site. Pilot project tersedia.',
    pricing: [
      {
        id: 'iot-pilot',
        name: 'Pilot',
        tagline: 'Proof of concept 1 lokasi',
        price: 'Rp 25.000.000',
        priceNote: 'mulai dari',
        features: [
          'Hingga 10 node/sensor',
          '1 dashboard monitoring',
          'Alert dasar (email/WA)',
          'Instalasi & uji 30 hari',
          'Laporan feasibility & rekomendasi scale-up',
        ],
        ctaLabel: 'Mulai Pilot',
      },
      {
        id: 'iot-production',
        name: 'Production',
        tagline: 'Deployment skala penuh',
        price: 'Rp 75.000.000',
        priceNote: 'mulai dari',
        featured: true,
        features: [
          'Multi-site & ratusan node',
          'High availability backend',
          'Role admin & audit log',
          'Integrasi ERP / sistem existing',
          'SLA support & maintenance 12 bulan',
        ],
        ctaLabel: 'Diskusikan Deployment',
      },
      {
        id: 'iot-maintain',
        name: 'Maintenance',
        tagline: 'Dukungan berkelanjutan',
        price: 'Rp 3.500.000',
        priceNote: '/ bulan',
        features: [
          'Monitoring infrastruktur IoT',
          'Update firmware & patch keamanan',
          'Backup data & health check',
          'Support teknis (jam kerja)',
          'Laporan bulanan uptime',
        ],
        ctaLabel: 'Berlangganan Support',
      },
    ],
    process: [
      { step: '01', title: 'Site Survey', description: 'Assessment lokasi, konektivitas, dan kebutuhan sensor.' },
      { step: '02', title: 'Prototype', description: 'Proof of concept dan validasi data di lapangan.' },
      { step: '03', title: 'Deploy', description: 'Instalasi hardware, konfigurasi cloud, dan UAT.' },
      { step: '04', title: 'Operate', description: 'Handover, pelatihan operator, dan maintenance plan.' },
    ],
    faqs: [
      {
        question: 'Apakah hardware disediakan Jaya Techno?',
        answer:
          'Kami dapat mengprocure hardware atau bekerja dengan perangkat yang sudah dimiliki klien, tergantung spesifikasi proyek.',
      },
      {
        question: 'Apakah bisa tanpa internet stabil?',
        answer: 'Solusi offline-first atau LoRa gateway dapat dirancang untuk area dengan konektivitas terbatas.',
      },
      {
        question: 'Berapa lama pilot project?',
        answer: 'Umumnya 6–10 minggu dari survey hingga dashboard live.',
      },
    ],
  },
  {
    slug: 'training-sertifikasi',
    type: 'jasa',
    navLabel: 'Training & Sertifikasi',
    meta: {
      title: 'Training & Sertifikasi',
      description:
        'Pelatihan IT, digital literacy, dan program sertifikasi kompetensi untuk instansi, korporasi, dan UMKM.',
    },
    hero: {
      eyebrow: 'Jasa Digital',
      title: 'Training &',
      highlight: 'Sertifikasi',
      subtitle:
        'Tingkatkan kompetensi tim melalui kurikulum terstruktur, instruktur berpengalaman, dan sertifikat resmi untuk peserta.',
      stats: [
        { value: '500+', label: 'Alumni Terlatih' },
        { value: '20+', label: 'Materi Modul' },
        { value: 'B2B', label: '& Instansi' },
      ],
    },
    overview: {
      paragraphs: [
        'Program kami mencakup literasi digital, pengembangan web, digital marketing, keamanan informasi dasar, dan uji kompetensi sesuai kebutuhan organisasi.',
        'Format fleksibel: in-house di kantor klien, online live, atau hybrid dengan modul e-learning pendukung.',
      ],
      benefits: [
        'Kurikulum dapat dikustomisasi',
        'Instruktur praktisi industri',
        'Sertifikat kelulusan Jaya Techno',
        'Pre & post assessment peserta',
      ],
    },
    deliverables: [
      { title: 'In-House Training', description: 'Workshop di lokasi klien dengan studi kasus relevan.' },
      { title: 'Program Berseri', description: 'Multi-batch untuk transformasi digital skala instansi.' },
      { title: 'Uji Kompetensi', description: 'Asesmen terstruktur dan sertifikasi kelulusan.' },
      { title: 'Materi & LMS', description: 'Slide, modul praktik, dan akses materi pasca-training.' },
    ],
    pricingIntro: 'Harga per batch / per peserta. Diskon untuk kontrak multi-batch instansi.',
    pricing: [
      {
        id: 'tr-workshop',
        name: 'Workshop',
        tagline: '1 hari intensif',
        price: 'Rp 8.000.000',
        priceNote: '/ batch (max 25 pax)',
        features: [
          '1 hari (8 jam) sesi tatap muka/online',
          '1 topik utama (pilih dari katalog)',
          'Modul PDF & sertifikat peserta',
          'Pre-test & post-test sederhana',
          '1 instruktur utama',
        ],
        ctaLabel: 'Booking Workshop',
      },
      {
        id: 'tr-program',
        name: 'Program',
        tagline: '5 hari komprehensif',
        price: 'Rp 25.000.000',
        priceNote: '/ batch (max 25 pax)',
        featured: true,
        features: [
          '5 hari materi terstruktur',
          'Kombinasi teori & praktik',
          'Studi kasus industri',
          'Sertifikat kompetensi',
          'Evaluasi & laporan untuk HRD',
        ],
        ctaLabel: 'Rencanakan Program',
      },
      {
        id: 'tr-cert',
        name: 'Sertifikasi',
        tagline: 'Instansi & skala besar',
        price: 'Kustom',
        priceNote: 'penawaran khusus',
        features: [
          'Desain kurikulum dedicated',
          'Multi-batch & ribuan peserta',
          'Platform ujian / CBT opsional',
          'Koordinasi dengan stakeholder',
          'Reporting & dokumentasi audit-ready',
        ],
        ctaLabel: 'Minta Proposal',
      },
    ],
    process: [
      { step: '01', title: 'Kebutuhan', description: 'Mapping kompetensi, jumlah peserta, dan tujuan organisasi.' },
      { step: '02', title: 'Kurikulum', description: 'Penyusunan silabus, modul, dan jadwal pelaksanaan.' },
      { step: '03', title: 'Pelaksanaan', description: 'Training, mentoring, dan asesmen peserta.' },
      { step: '04', title: 'Evaluasi', description: 'Laporan hasil, sertifikat, dan rekomendasi lanjutan.' },
    ],
    faqs: [
      {
        question: 'Topik apa saja yang tersedia?',
        answer:
          'Digital marketing, web development dasar, office digital, cybersecurity awareness, dan topik custom sesuai permintaan.',
      },
      {
        question: 'Apakah bisa online?',
        answer: 'Ya, via Zoom/Google Meet dengan breakout room dan praktik terarah.',
      },
      {
        question: 'Apakah sertifikat diakui?',
        answer: 'Sertifikat kelulusan diterbitkan Jaya Techno; untuk sertifikasi nasional disesuaikan mitra kompetensi.',
      },
    ],
  },
  {
    slug: 'web-dan-apps',
    type: 'produk',
    navLabel: 'Web & Apps',
    meta: {
      title: 'Web & Apps',
      description:
        'Paket produk digital siap kembangkan: website, landing page, dan aplikasi mobile untuk go-to-market lebih cepat.',
    },
    hero: {
      eyebrow: 'Produk Digital',
      title: 'Web & Apps',
      highlight: 'Siap Scale',
      subtitle:
        'Paket pengembangan terstruktur dengan scope jelas, timeline transparan, dan harga kompetitif—ideal untuk launch produk digital Anda.',
      stats: [
        { value: '4–12', label: 'Minggu Delivery' },
        { value: 'Mobile', label: '+ Web Ready' },
        { value: 'MVP', label: 'Friendly' },
      ],
    },
    overview: {
      paragraphs: [
        'Produk Web & Apps adalah paket fixed-scope dari tim software house kami—dirancang agar Anda cepat go-live tanpa biaya discovery yang panjang.',
        'Setiap paket mencakup desain UI, development, testing, deployment, dan periode support awal.',
      ],
      benefits: [
        'Scope & harga jelas di awal',
        'Timeline terjadwal dengan milestone',
        'Desain modern & mobile-first',
        'Opsi upgrade fitur bertahap',
      ],
    },
    deliverables: [
      { title: 'Landing Page', description: 'Halaman kampanye single-page dengan CTA kuat.' },
      { title: 'Company Profile', description: 'Website multi-halaman untuk credibilitas brand.' },
      { title: 'Progressive Web App', description: 'Web app yang berperilaku seperti aplikasi mobile.' },
      { title: 'Mobile App', description: 'Aplikasi Android (iOS opsional) untuk layanan langsung ke user.' },
    ],
    pricingIntro: 'Harga paket produk. Add-on fitur dan integrasi dihitung terpisah setelah konsultasi.',
    pricing: [
      {
        id: 'wa-landing',
        name: 'Landing Pro',
        tagline: 'Go-live dalam 3–4 minggu',
        price: 'Rp 5.000.000',
        priceNote: 'paket tetap',
        features: [
          '1 halaman responsif (hingga 6 section)',
          'Desain UI premium',
          'Form lead & WhatsApp click',
          'Integrasi Google Analytics',
          '2 minggu support pasca-launch',
        ],
        ctaLabel: 'Pesan Landing Pro',
      },
      {
        id: 'wa-company',
        name: 'Company Suite',
        tagline: 'Website perusahaan lengkap',
        price: 'Rp 12.000.000',
        priceNote: 'paket tetap',
        featured: true,
        features: [
          'Hingga 10 halaman + blog dasar',
          'CMS admin sederhana',
          'SEO on-page & sitemap',
          'Multi-bahasa (opsional +biaya)',
          '1 bulan maintenance included',
        ],
        ctaLabel: 'Pilih Company Suite',
      },
      {
        id: 'wa-mobile',
        name: 'App Launch',
        tagline: 'MVP aplikasi mobile',
        price: 'Rp 45.000.000',
        priceNote: 'mulai dari',
        features: [
          'Android native / cross-platform',
          'Hingga 8 layar utama',
          'Backend API & database',
          'Push notification dasar',
          'Publish ke Play Store (pendampingan)',
        ],
        ctaLabel: 'Diskusikan Aplikasi',
      },
    ],
    process: [
      { step: '01', title: 'Briefing', description: 'Kick-off, konten, dan konfirmasi paket.' },
      { step: '02', title: 'Design', description: 'Mockup UI dan approval 2 putaran revisi.' },
      { step: '03', title: 'Build', description: 'Development, QA, dan staging preview.' },
      { step: '04', title: 'Go Live', description: 'Deployment production dan handover admin.' },
    ],
    faqs: [
      {
        question: 'Apa bedanya Produk Digital vs Software House?',
        answer:
          'Produk Digital = paket scope tetap & harga transparan. Software House = proyek custom skala besar dengan analisis mendalam.',
      },
      {
        question: 'Apakah konten copywriting termasuk?',
        answer: 'Placeholder & struktur disediakan; konten final dari klien atau add-on copywriting.',
      },
      {
        question: 'Bisakah upgrade paket setelah mulai?',
        answer: 'Ya, upgrade scope dapat dinegosiasikan dengan penyesuaian timeline dan biaya.',
      },
    ],
  },
];

export function getOfferingBySlug(slug: string): Offering | undefined {
  return offerings.find((o) => o.slug === slug);
}

export function getJasaOfferings(): Offering[] {
  return offerings.filter((o) => o.type === 'jasa');
}

export function getProdukOfferings(): Offering[] {
  return offerings.filter((o) => o.type === 'produk');
}

export function getOfferingPath(offering: Offering): string {
  return offering.type === 'jasa' ? `/jasa/${offering.slug}` : `/produk/${offering.slug}`;
}

export const contactHref = '/#kontak';
