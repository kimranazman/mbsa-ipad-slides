import { useParams } from 'react-router-dom'
import { BackButton, Footer, SectionLabel } from '../components/SlideShow'
import { IconShield, IconPeople, IconMapPin, IconWater, IconCheck, IconArrowRight, IconStar } from '../components/Icons'

/* ============================================================================
   PRODUCT INFO — sourced from client's /260412 - Innovasi/ pack.
   Never hand-write a field here unless it's traceable to one of those PDFs.
============================================================================ */
const products = {
  spkb: {
    name: 'SPKB',
    full: 'Sistem Penguatkuasaan Bersepadu',
    tagline: 'Data staging & sistem operasi penguatkuasaan harian',
    Icon: IconShield,
    gold: false,
    group: 'ASPIRE',
    tahun: '2024',
    jabatan: 'Jabatan Penguatkuasaan, Majlis Perbandaran Hulu Selangor',
    origin: { name: 'Majlis Perbandaran Hulu Selangor', short: 'MPHS' },
    expanded: [
      { name: 'Majlis Perbandaran Kuala Selangor', short: 'MPKS' },
      { name: 'Majlis Daerah Sabak Bernam', short: 'MDSB' },
    ],
    desc: 'Sistem Penguatkuasaan Bersepadu (SPKB) merupakan inisiatif digital yang dibangunkan oleh Jabatan Penguatkuasaan, MPHS, untuk menyelaras dan menyatukan pelbagai data penguatkuasaan di bawah satu platform utama. Sistem ini berfungsi sebagai sistem operasi penguatkuasaan harian dan data staging platform — perantara bagi pengumpulan, penyimpanan sementara, pembersihan dan penyelarasan data sebelum dihantar ke sistem utama analitik atau pelaporan.',
    masalah: 'Sebelum pelaksanaan SPKB, proses penguatkuasaan banyak bergantung kepada kaedah manual seperti buku notis/kompaun, penyimpanan data secara fizikal, dan penyediaan laporan secara manual yang memakan masa.',
    highlights: [
      'Platform bersepadu untuk data penguatkuasaan',
      'Sistem operasi penguatkuasaan harian',
      'Data staging: pembersihan & penyelarasan',
      'Laporan automatik untuk pengurusan atasan',
    ],
    stats: [
      { value: 'RM 616k', label: 'Kutipan 2023 (tahun pertama)' },
      { value: 'RM 2.17J', label: 'Kutipan 2024' },
    ],
    meta: {
      'Bidang Inovasi': 'Penyampaian Perkhidmatan',
      'Tema': 'Pengurusan Maklumat',
      'Harta Intelek': 'Paten',
      'Kategori Penyertaan': 'AINS',
      'Pengkomersialan': 'Aktif',
      'Syarikat Komersial': 'Elix Solution Sdn. Bhd.',
      'Tahun Komersial': '2025',
    },
    ketua: 'Mohamad Fadil bin Selamat',
    video: 'https://ls.selangor.my/Wa6YNH',
    tags: ['Paten', 'Komersial 2025', 'Kumpulan ASPIRE'],
  },

  mymr: {
    name: 'MyMR',
    full: 'MyMR: Pemudahcara Permit Pengubahsuaian Kepada Komuniti',
    tagline: 'Permohonan Permit Kerja Kecil (Minor Repair) secara online',
    Icon: IconPeople,
    gold: true,
    group: 'FASTER',
    tahun: '2025',
    jabatan: 'Jabatan Kawalan Bangunan, Majlis Perbandaran Sepang',
    origin: { name: 'Majlis Perbandaran Sepang', short: 'MPSp' },
    expanded: [
      { name: 'Majlis Perbandaran Kuala Langat', short: 'MPKL' },
      { name: 'Majlis Perbandaran Selayang', short: 'MPS' },
      { name: 'Majlis Perbandaran Hulu Selangor', short: 'MPHS' },
    ],
    desc: 'MyMR ialah sebuah aplikasi yang membolehkan permohonan Permit Kerja Kecil (Minor Repair — MR) dikemukakan secara online di mana sahaja oleh penduduk Sepang atau pemilik premis menggunakan telefon pintar, komputer riba dan komputer pada bila-bila masa. Tiada lagi alasan pelanggan perlu hadir ke Kompleks Majlis Perbandaran Sepang untuk mengemukakan permohonan.',
    masalah: 'Sebelum MyMR, pelanggan perlu hadir ke Kompleks MP Sepang untuk mengemukakan borang fizikal. Hampir 3,000 permohonan dalam tempoh dua tahun menyebabkan ruang penyimpanan fail tidak dapat menampung dan semakan semula amat menyukarkan disebabkan lambakan dokumen.',
    highlights: [
      'Permohonan online dari mana-mana peranti',
      'Menjimatkan kertas & ruang penyimpanan fail',
      'Menjimatkan masa & kos bahan api pelanggan',
      'Sejajar dengan slogan "Bersih Hijau Sejahtera" MP Sepang',
    ],
    stats: [
      { value: '~3,000', label: 'Permohonan MR dalam 2 tahun' },
      { value: '9', label: 'Ahli kumpulan FASTER' },
    ],
    meta: {
      'Bidang Inovasi': 'Penyampaian Perkhidmatan',
      'Tema': 'Pengurusan Maklumat',
      'Kategori Inovasi': 'Penambahbaikan',
      'Kategori Penyertaan': 'MPIPANS',
      'Pencapaian': 'Naib Johan MPIPANS Kategori Inovasi Penyampaian Perkhidmatan (Penambahbaikan) 2025',
    },
    ketua: 'Aida Noren binti Ibrahim',
    video: 'https://ls.selangor.my/UJEUe7',
    tags: ['MPIPANS 2025', 'Naib Johan', 'Kumpulan FASTER'],
  },

  abt: {
    name: 'ABT Tracker',
    full: 'ABT Tracker',
    tagline: 'Pengesanan Akaun Belum Terima Cukai Tanah secara GIS',
    Icon: IconMapPin,
    gold: false,
    group: 'TAXPERT SQUAD',
    tahun: 'Januari 2025',
    jabatan: 'Unit Hasil, Pejabat Daerah Dan Tanah Petaling',
    origin: { name: 'Pejabat Daerah Dan Tanah Petaling', short: 'PDT Petaling' },
    expanded: [
      { name: 'Pejabat Daerah Dan Tanah Klang', short: 'PDT Klang' },
      { name: 'Pejabat Daerah Dan Tanah Gombak', short: 'PDT Gombak' },
      { name: 'Pejabat Daerah Dan Tanah Hulu Langat', short: 'PDT Hulu Langat' },
    ],
    desc: 'ABT Tracker merupakan satu pangkalan data yang dibangunkan dengan menggunakan kaedah Sistem Maklumat Geografi (GIS) untuk mengesan hakmilik-hakmilik di Daerah Petaling yang mempunyai tunggakan cukai tanah melalui paparan peta secara visual. Ini memudahkan Unit Hasil PDT Petaling menghasilkan notis peringatan/hebahan berdasarkan lokasi tertunggak secara sistematik — menggantikan semakan manual senarai Excel yang memakan masa.',
    masalah: 'Jumlah Akaun Belum Terima (ABT) Cukai Tanah PDT Petaling mencecah RM 195 juta pada tahun 2024 — tertinggi di kalangan daerah-daerah Negeri Selangor. Sebelum ini, pengguna perlu semak manual senarai di Excel yang terbeli dahulu untuk kenal pasti lokasi tertunggak.',
    highlights: [
      'Pengesanan tunggakan cukai tanah melalui peta GIS',
      'Menggantikan semakan manual senarai Excel',
      'Dibangun secara in-house guna Mapinfo / QGIS & MS Excel',
      'Pangkalan data lapisan: hakmilik, sempadan taman, pekan/bandar, tunggakan',
    ],
    stats: [
      { value: 'RM 195J', label: 'ABT Cukai Tanah Petaling 2024' },
      { value: '~5%', label: 'Sasaran pengurangan kutipan' },
    ],
    meta: {
      'Jenis Projek': 'Kumpulan Inovatif dan Kreatif (KIK)',
      'Perisian': 'Mapinfo, QGIS, MS Excel',
      'Lesen perisian': 'RM 10,000 setahun (Mapinfo)',
      'Fasa Pelaksanaan': 'Fasa I (pangkalan data GIS) → Fasa II (perisian GIS di PDT) → Fasa III (aplikasi web)',
      'Impian Kewangan': 'Anggaran ~5% peningkatan kutipan (~RM 8.32 juta)',
    },
    ketua: 'Syafianza Azwan bin Shaiful Bahri',
    tags: ['Akaun Belum Terima', 'GIS', 'Kumpulan TAXPERT SQUAD'],
  },

  ots: {
    name: 'OTS',
    full: 'Overflow Tripping System',
    tagline: 'Sistem perlindungan sekunder limpahan air bangunan',
    Icon: IconWater,
    gold: true,
    group: 'EMC',
    tahun: '2007',
    jabatan: 'Pejabat Setiausaha Kerajaan Negeri Selangor',
    origin: { name: 'Pejabat Setiausaha Kerajaan Negeri Selangor', short: 'PSUK' },
    expanded: [
      { name: 'Majlis Bandaraya Shah Alam', short: 'MBSA' },
      { name: 'Majlis Bandaraya Petaling Jaya', short: 'MBPJ' },
      { name: 'Majlis Bandaraya Subang Jaya', short: 'MBSJ' },
      { name: 'Majlis Bandaraya Diraja Klang', short: 'MBDK' },
    ],
    desc: 'OTS ialah produk yang bertindak sebagai Sistem Perlindungan Sekunder untuk menghentikan limpahan air sekiranya Sistem Pam Air Bangunan, penderia atau pelampung gagal berfungsi, atau disebabkan oleh kesilapan manusia. OTS akan memantau secara automatik (24 jam) dan status boleh disemak melalui aplikasi telefon pintar tanpa perlu ke lokasi pemasangan. OTS juga sesuai diimplementasi pada sistem air domestik, pencegah kebakaran dan pendingin hawa.',
    masalah: 'Limpahan air daripada tangki bangunan kerap berlaku apabila sistem pam/penderia/pelampung gagal berfungsi atau berlaku kesilapan manusia — menyebabkan pembaziran air dan kerosakan harta benda.',
    aplikasi: [
      { label: 'Sistem Air Domestik', desc: 'Tangki air kediaman & premis komersial' },
      { label: 'Pencegah Kebakaran', desc: 'Sistem sprinkler & tangki simpanan air bomba' },
      { label: 'Pendingin Hawa', desc: 'Sistem penyejukan bangunan (cooling tower)' },
    ],
    highlights: [
      'Perlindungan sekunder automatik (failsafe)',
      'Pemantauan 24 jam secara automatik',
      'Status boleh disemak melalui aplikasi telefon pintar',
      'Tidak perlu ke lokasi pemasangan untuk semak status',
      'Sesuai untuk sistem air domestik, pencegah kebakaran & pendingin hawa',
    ],
    stats: [
      { value: '2007', label: 'Tahun penciptaan' },
      { value: '7', label: 'Anugerah antarabangsa & nasional' },
    ],
    meta: {
      'Bidang Inovasi': 'Sosial',
      'Tema': 'Teknologi, Produk & Peralatan',
      'Harta Intelek': 'Inovasi Utiliti (Utility Innovation)',
      'Punca Kewangan': 'Akaun Amanah',
      'Pengkomersialan': 'Aktif',
      'Kategori Penyertaan': 'Produk Inovasi',
    },
    ketua: 'Tc. Norhisham bin Mamat @ Zakaria',
    video: 'https://ls.selangor.my/Tu31cF',
    awards: [
      'Silver Award — 29th ITEX (International Invention, Innovation & Technology Exhibition) 2018',
      'Gold Award — 2nd DIIID Johor (Digitalised International Invention, Innovation & Design) 2019',
      '2nd Place — Selangor R&D And Innovation EXPO 2019',
      'Gold Award — SIRIM Si2Te (Invention, Innovation & Technology Expo) 2019',
      'Best Inventor Award (Professional Category) — SIRIM Si2Te 2019',
      'Best Of The Best Award — SIRIM Si2Te 2019',
      'Innovation Commercialization Pioneer Product — Selangor State Secretary Office',
    ],
    tags: ['Projek SUK Sendiri', 'Paten Utiliti', '7 Anugerah'],
  },
}

export default function ProdukDetail() {
  const { product } = useParams()
  const p = products[product]

  if (!p) return <div className="h-full flex items-center justify-center text-gray-400">Tidak dijumpai</div>

  const accentBg = p.gold ? 'from-rstu-gold to-rstu-yellow' : 'from-rstu-red to-rstu-dark'
  const accentText = p.gold ? 'text-rstu-gold' : 'text-rstu-red'
  const accentLight = p.gold ? 'bg-rstu-cream' : 'bg-rstu-light'
  const accentBorder = p.gold ? 'border-rstu-gold/15' : 'border-rstu-red/10'

  return (
    <div className="h-full flex flex-col bg-rstu-strong">
      <div className={`h-1 flex-shrink-0 bg-gradient-to-r ${accentBg}`} />

      {/* Header */}
      <div className="px-6 pt-5 pb-1 flex items-center justify-between flex-shrink-0">
        <BackButton to="/produk" />
        <SectionLabel>Produk Inovasi</SectionLabel>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto scroll-hide px-6 pb-6 page-enter">
        <div className="stagger flex flex-col gap-4">
          {/* Product Header */}
          <div className={`bg-gradient-to-br ${accentBg} rounded-2xl p-6 text-white text-center shadow-lg relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full" />
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto backdrop-blur-sm">
              <p.Icon size={32} className="text-white" />
            </div>
            <p className="text-3xl font-black mt-3">{p.name}</p>
            <p className="text-sm opacity-80 mt-1 leading-tight">{p.full}</p>
            {p.tagline && <p className="text-[11px] opacity-60 mt-1.5 italic">{p.tagline}</p>}
          </div>

          {/* Quick facts */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-2xl p-3 border border-gray-100 shadow-sm">
              <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Kumpulan</p>
              <p className={`text-sm font-black mt-0.5 ${accentText}`}>{p.group}</p>
            </div>
            <div className="bg-white rounded-2xl p-3 border border-gray-100 shadow-sm">
              <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Tahun</p>
              <p className={`text-sm font-black mt-0.5 ${accentText}`}>{p.tahun}</p>
            </div>
          </div>

          {/* Jabatan / Agensi */}
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${accentBg}`} />
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Jabatan / Agensi Asal</p>
            </div>
            <p className={`text-base font-black ${accentText} leading-tight`}>{p.origin.name}</p>
            <p className="text-[10px] text-gray-400 mt-0.5">{p.jabatan}</p>
          </div>

          {/* Dikembangkan */}
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <IconArrowRight size={14} className={accentText} />
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Agensi Pelaksana</p>
            </div>
            <div className="flex flex-col gap-1.5">
              {p.expanded.map((e) => (
                <div key={e.short} className={`${accentLight} rounded-xl px-3 py-2 border ${accentBorder}`}>
                  <p className={`text-[11px] font-bold ${accentText}`}>{e.short}</p>
                  <p className="text-[10px] text-gray-500 leading-tight">{e.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          {p.stats && (
            <div className="grid grid-cols-2 gap-3">
              {p.stats.map((s, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-4 text-center ${
                    i === 0 && p.gold
                      ? `bg-gradient-to-br ${accentBg} text-white`
                      : 'bg-white border border-gray-100 shadow-sm'
                  }`}
                >
                  <p className={`text-2xl font-black ${i === 0 && p.gold ? '' : accentText}`}>{s.value}</p>
                  <p className={`text-[10px] mt-0.5 ${i === 0 && p.gold ? 'opacity-80' : 'text-gray-500'}`}>{s.label}</p>
                </div>
              ))}
            </div>
          )}

          {/* Description */}
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
            <SectionLabel>Deskripsi Produk</SectionLabel>
            <p className="text-xs text-gray-600 mt-3 leading-relaxed">{p.desc}</p>
          </div>

          {/* Masalah / Latar Belakang */}
          {p.masalah && (
            <div className="bg-rstu-cream/60 rounded-2xl p-4 border border-rstu-gold/15">
              <SectionLabel>Masalah / Latar Belakang</SectionLabel>
              <p className="text-xs text-gray-700 mt-3 leading-relaxed">{p.masalah}</p>
            </div>
          )}

          {/* Aplikasi Meluas (OTS) */}
          {p.aplikasi && (
            <div className={`rounded-2xl p-4 border shadow-sm bg-gradient-to-br ${accentBg} text-white relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-bl-full" />
              <div className="flex items-center gap-2 mb-3">
                <IconStar size={14} className="text-white" />
                <span className="text-[10px] font-black uppercase tracking-widest">Aplikasi Meluas</span>
              </div>
              <p className="text-[11px] opacity-90 leading-relaxed mb-3">
                OTS telah dikomersialkan oleh SUK dan sesuai diimplementasi bukan sahaja pada tangki bangunan — malah merentasi pelbagai sistem bangunan lain:
              </p>
              <div className="flex flex-col gap-2">
                {p.aplikasi.map((a) => (
                  <div key={a.label} className="bg-white/15 backdrop-blur-sm rounded-xl px-3 py-2.5 border border-white/20">
                    <p className="text-xs font-black">{a.label}</p>
                    <p className="text-[10px] opacity-80 mt-0.5 leading-tight">{a.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Highlights */}
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
            <SectionLabel>Ciri-ciri Utama</SectionLabel>
            <div className="flex flex-col gap-2.5 mt-3">
              {p.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${accentBg} flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5`}>
                    <IconCheck size={14} className="text-white" />
                  </div>
                  <p className="text-sm text-gray-700 font-medium leading-snug flex-1">{h}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards (OTS only) */}
          {p.awards && (
            <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <IconStar size={14} className="text-rstu-gold" />
                <SectionLabel>Pencapaian & Pengiktirafan</SectionLabel>
              </div>
              <div className="flex flex-col gap-2">
                {p.awards.map((a, i) => (
                  <div key={i} className="flex items-start gap-2 bg-rstu-cream/40 rounded-lg p-2.5 border border-rstu-gold/10">
                    <IconStar size={11} className="text-rstu-gold flex-shrink-0 mt-0.5" />
                    <p className="text-[11px] text-gray-700 leading-snug">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Metadata */}
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
            <SectionLabel>Maklumat Tambahan</SectionLabel>
            <div className="flex flex-col gap-1.5 mt-3">
              {Object.entries(p.meta).map(([key, value]) => (
                <div key={key} className="flex items-start justify-between gap-3 text-[11px] border-b border-gray-50 pb-1.5 last:border-b-0 last:pb-0">
                  <span className="text-gray-400 font-medium flex-shrink-0">{key}</span>
                  <span className="text-gray-700 font-semibold text-right">{value}</span>
                </div>
              ))}
              {p.ketua && (
                <div className="flex items-start justify-between gap-3 text-[11px] border-b border-gray-50 pb-1.5 last:border-b-0 last:pb-0">
                  <span className="text-gray-400 font-medium flex-shrink-0">Ketua Kumpulan</span>
                  <span className="text-gray-700 font-semibold text-right">{p.ketua}</span>
                </div>
              )}
              {p.video && (
                <div className="flex items-start justify-between gap-3 text-[11px]">
                  <span className="text-gray-400 font-medium flex-shrink-0">Pautan Video</span>
                  <span className={`font-semibold text-right ${accentText} break-all`}>{p.video}</span>
                </div>
              )}
            </div>
          </div>

          {/* Tags */}
          {p.tags && (
            <div className="flex flex-wrap gap-2">
              {p.tags.map((tag, i) => (
                <span
                  key={tag}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                    i % 2 === 0 ? `${accentLight} ${accentText}` : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
