import { useParams } from 'react-router-dom'
import { BackButton, Footer, SectionLabel } from '../components/SlideShow'
import { IconCheck } from '../components/Icons'

/* ============================================================================
   PBT PRODUCT DATA — sourced from /260412 - Produk Inovasi/ pack.
   Products with only video files have minimal descriptions.
============================================================================ */
const pbtData = {
  mbdk: {
    name: 'MBDK',
    full: 'Majlis Bandaraya Diraja Klang',
    gold: false,
    products: [
      {
        name: 'Klang Fast Track Industry',
        tagline: 'Revolutionising Industrial Planning Approval Towards A Business-Friendly Future',
        desc: 'Inisiatif Fast Track untuk mempercepatkan proses permohonan Kebenaran Merancang kawasan perindustrian yang mempunyai Pelan Induk (Master Plan) serta kilang tanpa kebenaran (KTK) yang dibina sebelum 28 Ogos 2019. Proses permohonan menjadi mudah, pantas, telus dan cekap — menyokong agenda "Ease of Doing Business".',
        group: 'E FASTRIES',
        highlights: [
          'Fast-track permohonan Kebenaran Merancang industri',
          '2 kategori: Kawasan Perindustrian dengan Pelan Induk & Kilang Tanpa Kebenaran (KTK)',
          'Semua ulasan teknikal diselesaikan di peringkat Pelan Induk',
          'Menyokong agenda "Ease of Doing Business"',
        ],
      },
    ],
  },

  mbpj: {
    name: 'MBPJ',
    full: 'Majlis Bandaraya Petaling Jaya',
    gold: true,
    products: [
      {
        name: 'PJ Eco Recycling Plaza',
        tagline: 'Centre of Excellence For Sustainable Environment',
        desc: 'Pusat Kecemerlangan Ekonomi Kitaran pertama di Malaysia, terletak di Jalan SS8/39, Petaling Jaya. Bangunan bekas pasar basah yang ditukar menjadi pusat 5R (Reduce, Reuse, Recycle, Repurpose, Recover) tiga tingkat — menyediakan pendidikan, bengkel upcycle, galeri, dan hab pengumpulan barangan terpakai.',
        highlights: [
          'Pusat Kecemerlangan Ekonomi Kitaran pertama di Malaysia',
          'Konsep 5R: Reduce, Reuse, Recycle, Repurpose, Recover',
          'Perkongsian awam-swasta dan berasaskan pusat komuniti',
          '3 tingkat: Eco Lounge, Galeri, Bengkel, Studio Upcycling & lain-lain',
        ],
      },
      {
        name: 'Inisiatif PA24',
        tagline: 'Planning Approval within 24 Hours',
        desc: 'Kelulusan Kebenaran Merancang dalam tempoh 24 jam bagi permohonan pembangunan berskala kecil (binaan baru, roboh & bina semula, pindaan dan tambahan) satu unit rumah sesebuah di Petaling Jaya. Kerjasama bersama MIP, PAM, dan MPC.',
        group: 'KIK (ditubuhkan 23 Dis 2024)',
        highlights: [
          'Kelulusan KM dalam 24 jam untuk pembangunan kecil',
          'Untuk satu unit rumah sesebuah di Petaling Jaya',
          'Kerjasama dengan MIP, PAM & MPC',
          'Motto: Cepat, Mudah, Jimat dan Cekap',
        ],
      },
    ],
  },

  mbsa: {
    name: 'MBSA',
    full: 'Majlis Bandaraya Shah Alam',
    gold: false,
    products: [
      {
        name: 'e-EKSA',
        tagline: 'Sistem Digital Ekosistem Kondusif Sektor Awam',
      },
      {
        name: 'IRIS',
        tagline: 'Sistem Maklumat Bersepadu MBSA',
      },
    ],
  },

  mbsj: {
    name: 'MBSJ',
    full: 'Majlis Bandaraya Subang Jaya',
    gold: true,
    products: [
      {
        name: 'SENSA',
        tagline: 'Smart Sensor Awareness',
        desc: 'Sistem pengesanan dan amaran pejalan kaki pintar berteraskan Kecerdasan Buatan (AI) untuk zon lintasan pejalan kaki. Mengesan kehadiran pejalan kaki secara automatik dan memberi amaran awal melalui isyarat audio dan visual secara masa nyata. Beroperasi 100% tenaga solar.',
        highlights: [
          'Teknologi pengesanan AI dengan amaran visual & audio',
          'Mencegah kemalangan di zon sekolah & lintasan zebra',
          'Pemantauan real-time melalui SJVCC & telefon pintar',
          '100% tenaga solar — menyokong inisiatif hijau',
          'RM25,000 per unit pemasangan',
        ],
      },
      {
        name: 'Sistem i-DATA',
        tagline: 'Sistem Pengurusan Data Bersepadu MBSJ',
      },
    ],
  },

  mdsb: {
    name: 'MDSB',
    full: 'Majlis Daerah Sabak Bernam',
    gold: false,
    products: [
      {
        name: 'MYLIA',
        tagline: 'Mobile Licensing Integrated Information Apps',
        desc: 'Revolusi digital maklumat pelesenan MDSB yang mengintegrasikan pangkalan data status lesen dan premis secara berpusat. Menghubungkan 4 jabatan — Pelesenan, Kesihatan, Penguatkuasaan & Perundangan — untuk pemantauan pematuhan secara telus dan real-time di lapangan.',
        highlights: [
          'Penyatuan data berpusat dari 4 jabatan',
          'Aksesibiliti tanpa batasan — capaian di lapangan',
          'Kecekapan operasi: hapus birokrasi fail fizikal',
          'Verifikasi segera di hujung jari',
        ],
      },
      {
        name: 'Jom Sabak Bernam',
        tagline: 'Portal Promosi Daerah Sabak Bernam',
      },
    ],
  },

  mpaj: {
    name: 'MPAJ',
    full: 'Majlis Perbandaran Ampang Jaya',
    gold: true,
    products: [
      {
        name: 'BOM-46',
        tagline: 'Projek Inovasi Sosial — Penciptaan',
        desc: 'Projek inovasi dalam bidang sosial oleh Kumpulan KHP Revolusi 3.0, Jabatan Khidmat Pengurusan, Majlis Perbandaran Ampang Jaya.',
        group: 'KHP Revolusi 3.0',
        highlights: [
          'Bidang Inovasi: Sosial',
          'Kategori Inovasi: Penciptaan',
          'Jabatan Khidmat Pengurusan, MPAJ',
        ],
      },
    ],
  },

  mphs: {
    name: 'MPHS',
    full: 'Majlis Perbandaran Hulu Selangor',
    gold: false,
    products: [
      {
        name: 'SPKB',
        tagline: 'Sistem Penguatkuasaan Bersepadu',
        desc: 'Platform digital bersepadu untuk pengurusan data penguatkuasaan — berfungsi sebagai sistem operasi harian dan data staging platform untuk pengumpulan, penyimpanan sementara, pembersihan dan penyelarasan data sebelum dihantar ke sistem utama.',
        group: 'ASPIRE',
        highlights: [
          'Platform bersepadu untuk data penguatkuasaan',
          'Sistem operasi penguatkuasaan harian',
          'Data staging: pembersihan & penyelarasan',
          'Laporan automatik untuk pengurusan atasan',
        ],
      },
    ],
  },

  mpkj: {
    name: 'MPKj',
    full: 'Majlis Perbandaran Kajang',
    gold: true,
    products: [
      {
        name: 'Sistem e-OKU',
        tagline: 'Permohonan Pelekat Kenderaan Orang Kurang Upaya',
        desc: 'Transformasi permohonan pelekat kenderaan OKU secara manual ke dalam talian. Memudahkan golongan kurang upaya untuk memohon dari mana-mana tanpa perlu hadir ke MPKj — selaras dengan objektif Dasar Orang Kelainan Upaya iaitu memastikan hak, peluang dan akses secara saksama.',
        highlights: [
          'Permohonan pelekat kenderaan OKU secara dalam talian',
          'Menjimatkan masa perjalanan & kos pengangkutan OKU',
          'Sistem mesra pengguna dan interaktif',
          'Selaras dengan Dasar Orang Kelainan Upaya',
        ],
      },
    ],
  },

  mpkl: {
    name: 'MPKL',
    full: 'Majlis Perbandaran Kuala Langat',
    gold: false,
    products: [],
  },

  mpks: {
    name: 'MPKS',
    full: 'Majlis Perbandaran Kuala Selangor',
    gold: false,
    products: [
      {
        name: 'Sistem e-Exam',
        tagline: 'Sistem Peperiksaan Digital MPKS',
      },
    ],
  },

  mps: {
    name: 'MPS',
    full: 'Majlis Perbandaran Selayang',
    gold: false,
    products: [
      {
        name: 'TEDUH',
        tagline: 'Tempat Elok Dikhaskan Untuk Hentian',
        desc: 'Inisiatif penyediaan kemudahan rehat untuk penghantar makanan (food delivery riders) di kawasan Majlis Perbandaran Selayang. Fasa 1 merangkumi 5 PBT di Negeri Selangor.',
        video: '/videos/teduh-selayang.mp4',
        highlights: [
          'Kemudahan rehat untuk penghantar makanan',
          'TEDUH Fasa 1 — salah satu daripada 5 PBT perintis',
        ],
      },
    ],
  },

  mpsp: {
    name: 'MPSp',
    full: 'Majlis Perbandaran Sepang',
    gold: true,
    products: [
      {
        name: 'MyMR',
        tagline: 'My Minor Renovation — Pemudahcara Permit Pengubahsuaian',
        desc: 'Aplikasi yang membolehkan permohonan Permit Kerja Kecil (Minor Repair) dikemukakan secara online dari mana-mana sahaja menggunakan telefon pintar atau komputer. Masa proses dikurangkan daripada 30 minit ke kurang dari 10 minit.',
        group: 'FASTER',
        highlights: [
          'Permohonan online dari mana-mana peranti',
          'Masa proses: 30 minit \u2192 10 minit',
          'Menjimatkan kertas & ruang penyimpanan',
          'RM100 setiap permohonan',
        ],
      },
      {
        name: 'Sepang Pro-Lifter',
        tagline: 'Alat Penguatkuasaan Mengangkat Halangan Berat',
        desc: 'Alat yang direka untuk memudahkan anggota penguatkuasaan mengangkat, menolak atau mengalihkan halangan berat seperti stall, mesin RO Water dan lain-lain di tempat awam. Ringan, cepat dan mesra pengguna.',
        group: 'CYBERCREW',
        highlights: [
          'Kapasiti angkatan sehingga 1 tan',
          'Penjimatan anggota: dari 8 ke 4 orang',
          'Penjimatan masa: dari 20 ke 10 minit',
          'Sesuai untuk pelbagai permukaan & cuaca',
        ],
      },
    ],
  },
}

export default function PbtInovasiDetail() {
  const { pbtId } = useParams()
  const pbt = pbtData[pbtId]

  if (!pbt) return <div className="h-full flex items-center justify-center text-gray-400">Tidak dijumpai</div>

  const accentBg = pbt.gold ? 'from-rstu-gold to-rstu-yellow' : 'from-rstu-red to-rstu-dark'
  const accentText = pbt.gold ? 'text-rstu-gold' : 'text-rstu-red'
  const accentLight = pbt.gold ? 'bg-rstu-cream' : 'bg-rstu-light'

  return (
    <div className="h-full flex flex-col bg-rstu-strong">
      <div className={`h-1 flex-shrink-0 bg-gradient-to-r ${accentBg}`} />

      {/* Header */}
      <div className="px-6 pt-5 pb-1 flex items-center justify-between flex-shrink-0">
        <BackButton to="/pbt" />
        <SectionLabel>Produk Inovasi PBT</SectionLabel>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto scroll-hide px-6 pb-6 page-enter">
        <div className="stagger flex flex-col gap-4">
          {/* PBT Header */}
          <div className={`bg-gradient-to-br ${accentBg} rounded-2xl p-6 text-white text-center shadow-lg relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full" />
            {/* Logo */}
            <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden relative shadow-lg">
              <div className="absolute inset-0 bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <span className="text-3xl font-black text-white">{pbt.name}</span>
              </div>
              <img
                src={`/logos/${pbtId}.png`}
                alt=""
                className="absolute inset-0 w-full h-full object-contain p-3 bg-white z-10"
                onError={(e) => { e.target.style.display = 'none' }}
              />
            </div>
            <p className="text-lg font-bold mt-4 leading-tight">{pbt.full}</p>
            <p className="text-[11px] opacity-60 mt-1">{pbt.products.length} produk inovasi</p>
          </div>

          {/* Empty state */}
          {pbt.products.length === 0 && (
            <div className={`${accentLight} rounded-2xl p-6 text-center border ${pbt.gold ? 'border-rstu-gold/15' : 'border-rstu-red/10'}`}>
              <p className="text-sm text-gray-500">Tiada produk inovasi didaftarkan</p>
            </div>
          )}

          {/* Products */}
          {pbt.products.map((product, pi) => (
            <div key={pi} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              {/* Product name bar */}
              <div className={`px-4 py-3 ${pi % 2 === 0 ? accentLight : 'bg-gray-50'}`}>
                <p className={`text-lg font-black ${accentText}`}>{product.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{product.tagline}</p>
                {product.group && (
                  <span className={`inline-block text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mt-2 ${
                    pbt.gold ? 'bg-rstu-gold/15 text-rstu-gold' : 'bg-rstu-red/10 text-rstu-red'
                  }`}>
                    Kumpulan {product.group}
                  </span>
                )}
              </div>

              {/* Description */}
              {product.desc && (
                <div className="px-4 py-3 border-t border-gray-50">
                  <p className="text-xs text-gray-600 leading-relaxed">{product.desc}</p>
                </div>
              )}

              {/* Video */}
              {product.video && (
                <div className="px-4 py-3 border-t border-gray-50">
                  <video
                    src={product.video}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full rounded-xl"
                  />
                </div>
              )}

              {/* Highlights */}
              {product.highlights && (
                <div className="px-4 py-3 border-t border-gray-50">
                  <div className="flex flex-col gap-2">
                    {product.highlights.map((h, hi) => (
                      <div key={hi} className="flex items-start gap-2.5">
                        <div className={`w-5 h-5 rounded-md bg-gradient-to-br ${accentBg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <IconCheck size={11} className="text-white" />
                        </div>
                        <p className="text-[11px] text-gray-700 font-medium leading-snug flex-1">{h}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
