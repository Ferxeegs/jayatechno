export const internshipMeta = {
  title: 'Program Magang Daring',
  description:
    'Program magang online Jaya Techno untuk mahasiswa dan fresh graduate di bidang digital marketing, software development, dan teknologi.',
} as const;

export const privacyMeta = {
  title: 'Kebijakan Privasi',
  description:
    'Kebijakan privasi pengumpulan dan pemrosesan data pribadi pada website Jaya Techno (CV. Arshaka Jaya Kreasindo).',
  lastUpdated: '29 Mei 2026',
} as const;

export const internshipHero = {
  eyebrow: 'Program Magang',
  title: 'Magang Daring',
  highlight: 'Jaya Techno',
  subtitle:
    'Program magang 100% online untuk mahasiswa dan lulusan baru yang ingin mengembangkan kompetensi di digital marketing, pengembangan software, dan solusi teknologi bersama tim profesional.',
  stats: [
    { value: '100%', label: 'Format Daring' },
    { value: '3–6', label: 'Bulan Program' },
    { value: '4+', label: 'Divisi Magang' },
  ],
} as const;

export const internshipOverview = {
  paragraphs: [
    'Jaya Techno membuka kesempatan magang daring bagi talenta muda yang ingin belajar langsung dari proyek nyata di lingkungan digital agency dan software house. Seluruh aktivitas — onboarding, mentoring, task review, hingga presentasi akhir — dilakukan secara virtual.',
    'Peserta magang akan dibimbing oleh praktisi di divisi engineering, creative, marketing, dan project management, dengan target deliverable yang terukur setiap minggu.',
  ],
  benefits: [
    '100% daring — bisa diikuti dari seluruh Indonesia',
    'Mentoring langsung dari tim profesional Jaya Techno',
    'Pengalaman proyek nyata untuk portofolio',
    // 'Sertifikat magang & evaluasi kompetensi',
    'Jam fleksibel dengan core hours terjadwal',
  ],
} as const;

export const internshipTracks = [
  {
    title: 'Digital Marketing',
    description: 'SEO dasar, manajemen konten, social media, dan analitik kampanye digital.',
    tags: ['SEO', 'Content', 'Social Media'],
  },
  {
    title: 'Software Development',
    description: 'Pengembangan web, dokumentasi API, bug fixing, dan praktik version control.',
    tags: ['Web Dev', 'Git', 'API'],
  },
  {
    title: 'UI/UX Design',
    description: 'Wireframe, desain antarmuka, design system, dan handoff ke tim development.',
    tags: ['Figma', 'UI/UX', 'Prototyping'],
  },
  {
    title: 'IoT & Sistem',
    description: 'Dokumentasi teknis, monitoring data, dan dukungan integrasi sistem.',
    tags: ['IoT', 'Dokumentasi', 'Dashboard'],
  },
] as const;

export const internshipFormat = [
  {
    step: '01',
    title: 'Onboarding Daring',
    description: 'Perkenalan tim, tools kerja (Meet, Discord/Slack, task board), dan NDA jika diperlukan.',
  },
  {
    step: '02',
    title: 'Mentoring Mingguan',
    description: 'Sesi 1-on-1 atau kelompok kecil dengan mentor divisi terkait.',
  },
  {
    step: '03',
    title: 'Task & Review',
    description: 'Penugasan bertahap dengan review mingguan dan feedback konstruktif.',
  },
  {
    step: '04',
    title: 'Presentasi Akhir',
    description: 'Demo hasil kerja, laporan magang, dan penerbitan sertifikat.',
  },
] as const;

export const internshipRequirements = [
  'Mahasiswa aktif (D3/S1/D4) atau lulusan baru (maks. 1 tahun)',
  'Minimal semester 5 untuk jurusan terkait (TI, Sistem Info, DKV, Manajemen, dll.)',
  'Koneksi internet stabil dan laptop/PC memadai',
  'Komitmen 3–6 bulan, estimasi 20–30 jam per minggu',
  'Surat pengantar kampus (disarankan untuk magang/PKL resmi)',
] as const;

export const internshipProcess = [
  { step: '01', title: 'Pendaftaran', description: 'Kirim CV, portofolio (jika ada), dan surat pengantar via formulir kontak.' },
  { step: '02', title: 'Seleksi', description: 'Review administrasi dan shortlisting berdasarkan minat & kecocokan divisi.' },
  { step: '03', title: 'Wawancara Online', description: 'Sesi singkat via video call dengan tim HR/mentor.' },
  { step: '04', title: 'Onboarding', description: 'Penempatan divisi, jadwal mentoring, dan kick-off project.' },
] as const;

export const internshipFaqs = [
  {
    question: 'Apakah magang ini benar-benar daring?',
    answer:
      'Ya. Seluruh kegiatan magang dilakukan secara online melalui platform kolaborasi digital. Peserta tidak wajib hadir ke kantor.',
  },
  {
    question: 'Apakah magang dibayar?',
    answer:
      'Program magang bersifat pembelajaran (unpaid). Peserta mendapatkan mentoring, pengalaman proyek, dan sertifikat penyelesaian. Allowance dapat dipertimbangkan untuk kontributor outstanding sesuai kebijakan internal.',
  },
  {
    question: 'Apakah bisa untuk PKL/kuliah?',
    answer:
      'Ya. Kami menerima peserta magang/PKL dengan surat pengantar dari kampus dan dapat menyesuaikan laporan akhir sesuai format institusi.',
  },
  {
    question: 'Dari jurusan apa saja yang bisa mendaftar?',
    answer:
      'Terbuka untuk Teknik Informatika, Sistem Informasi, Desain Komunikasi Visual, Manajemen, dan jurusan relevan lainnya yang berminat di bidang digital & teknologi.',
  },
] as const;

export const privacySections = [
  {
    id: 'pendahuluan',
    title: '1. Pendahuluan',
    paragraphs: [
      'Kebijakan Privasi ini menjelaskan bagaimana CV. Arshaka Jaya Kreasindo (beroperasi sebagai Jaya Techno, selanjutnya disebut "kami") mengumpulkan, menggunakan, menyimpan, dan melindungi data pribadi Anda saat mengakses website jayatechno.net dan layanan terkait.',
      'Dengan menggunakan website ini atau mengirimkan data melalui formulir kontak, Anda menyetujui praktik yang dijelaskan dalam kebijakan ini.',
    ],
  },
  {
    id: 'data-dikumpulkan',
    title: '2. Data yang Kami Kumpulkan',
    paragraphs: [
      'Kami dapat mengumpulkan data berikut:',
    ],
    list: [
      'Identitas: nama lengkap',
      'Kontak: alamat email, nomor telepon/WhatsApp',
      'Isian formulir: deskripsi kebutuhan, pesan konsultasi, atau lamaran magang',
      // 'Data teknis: alamat IP, jenis perangkat, browser, dan log akses (jika diaktifkan untuk keamanan)',
    ],
  },
  {
    id: 'tujuan',
    title: '3. Tujuan Pemrosesan Data',
    paragraphs: ['Data pribadi digunakan untuk:'],
    list: [
      'Menanggapi permintaan konsultasi, penawaran layanan, dan lamaran magang',
      'Komunikasi bisnis dan tindak lanjut proyek',
      'Peningkatan kualitas layanan dan pengalaman pengguna website',
      'Pemenuhan kewajiban hukum yang berlaku',
    ],
  },
  {
    id: 'dasar-hukum',
    title: '4. Dasar Hukum',
    paragraphs: [
      'Pemrosesan data dilakukan berdasarkan persetujuan Anda (saat mengirim formulir), pelaksanaan hubungan bisnis yang diminta, serta kepentingan sah kami dalam mengoperasikan dan mengamankan layanan digital.',
    ],
  },
  {
    id: 'penyimpanan',
    title: '5. Penyimpanan & Keamanan',
    paragraphs: [
      'Kami menerapkan langkah keamanan wajar — termasuk koneksi terenkripsi (HTTPS), akses terbatas, dan penyimpanan data pada layanan yang terpercaya — untuk melindungi data dari akses, perubahan, atau pengungkapan yang tidak sah.',
      'Data disimpan selama diperlukan untuk tujuan pemrosesan atau sesuai ketentuan hukum yang berlaku, kemudian dihapus atau dianonimkan.',
    ],
  },
  {
    id: 'pihak-ketiga',
    title: '6. Pihak Ketiga',
    paragraphs: [
      'Kami dapat membagikan data terbatas kepada penyedia layanan pendukung, antara lain:',
    ],
    list: [
      'Web3Forms — untuk pengiriman formulir kontak ke email resmi kami',
      'Penyedia hosting & infrastruktur website',
    ],
    footer:
      'Pihak ketiga hanya memproses data sesuai instruksi kami dan untuk tujuan yang disebutkan. Kami tidak menjual data pribadi Anda.',
  },
  {
    id: 'hak-anda',
    title: '7. Hak Anda',
    paragraphs: ['Sesuai peraturan perlindungan data yang berlaku, Anda berhak untuk:'],
    list: [
      'Mengakses dan memperoleh salinan data pribadi Anda',
      'Memperbarui atau memperbaiki data yang tidak akurat',
      'Meminta penghapusan data dalam kondisi tertentu',
      'Menarik persetujuan pemrosesan data',
    ],
    footer: 'Permintaan terkait hak data dapat diajukan melalui kontak di bawah.',
  },
  {
    id: 'cookie',
    title: '8. Cookie & Teknologi Pelacakan',
    paragraphs: [
      'Website ini saat ini menggunakan cookie esensial untuk fungsi dasar. Jika di masa mendatang kami menggunakan analitik atau cookie pemasaran, kebijakan ini akan diperbarui dan, jika diwajibkan, permintaan persetujuan akan ditampilkan.',
    ],
  },
  {
    id: 'perubahan',
    title: '9. Perubahan Kebijakan',
    paragraphs: [
      'Kami dapat memperbarui Kebijakan Privasi ini sewaktu-waktu. Perubahan material akan diberitahukan melalui pembaruan tanggal di halaman ini. Penggunaan berkelanjutan setelah perubahan berarti Anda menerima kebijakan yang diperbarui.',
    ],
  },
  {
    id: 'kontak',
    title: '10. Hubungi Kami',
    paragraphs: [
      'Untuk pertanyaan, permintaan akses data, atau keluhan terkait privasi, hubungi:',
    ],
  },
] as const;
