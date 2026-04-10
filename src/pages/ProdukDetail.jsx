import { useParams } from 'react-router-dom'
import { BackButton, Footer, SectionLabel } from '../components/SlideShow'
import { IconShield, IconPeople, IconMapPin, IconWater, IconCheck, IconArrowRight } from '../components/Icons'

const products = {
  spkb: {
    name: 'SPKB',
    full: 'Sistem Penguatkuasaan Bersepadu',
    Icon: IconShield,
    gold: false,
    origin: { name: 'MPHS', full: 'Majlis Perbandaran Hulu Selangor' },
    expanded: [
      { name: 'MPKS', full: 'Majlis Perbandaran Kuala Selangor' },
      { name: 'MDSB', full: 'Majlis Daerah Sabak Bernam' },
    ],
    desc: 'Sistem Penguatkuasaan Bersepadu (SPKB) merupakan platform digital bersepadu yang membolehkan penguatkuasaan undang-undang tempatan dijalankan secara sistematik dan cekap. Sistem ini mengintegrasikan proses aduan, siasatan, kompaun dan pemantauan dalam satu platform.',
    highlights: ['Platform digital bersepadu', 'Penguatkuasaan sistematik', 'Integrasi aduan ke kompaun'],
  },
  mymr: {
    name: 'MyMR',
    full: 'Sistem MyMR',
    Icon: IconPeople,
    gold: true,
    origin: { name: 'MPSp', full: 'Majlis Perbandaran Sepang' },
    expanded: [
      { name: 'MPS', full: 'Majlis Perbandaran Selayang' },
      { name: 'MPKL', full: 'Majlis Perbandaran Kuala Langat' },
      { name: 'MPHS', full: 'Majlis Perbandaran Hulu Selangor' },
    ],
    desc: 'Sistem MyMR merupakan platform pengurusan mesyuarat digital yang membolehkan pengurusan mesyuarat dijalankan secara dalam talian. Sistem ini merangkumi pengurusan agenda, minit mesyuarat, tindakan susulan dan pemantauan keputusan mesyuarat secara bersepadu.',
    highlights: ['Pengurusan mesyuarat digital', 'Pemantauan tindakan susulan', 'Keputusan mesyuarat bersepadu'],
  },
  abt: {
    name: 'ABT Tracker',
    full: 'Sistem ABT Tracker',
    Icon: IconMapPin,
    gold: false,
    origin: { name: 'PDT Petaling', full: 'Pejabat Daerah & Tanah Petaling' },
    expanded: [
      { name: 'PDT Klang', full: 'Pejabat Daerah & Tanah Klang' },
      { name: 'PDT Gombak', full: 'Pejabat Daerah & Tanah Gombak' },
      { name: 'PDT Hulu Langat', full: 'Pejabat Daerah & Tanah Hulu Langat' },
    ],
    desc: 'Sistem ABT Tracker merupakan platform pemantauan dan pengesanan Arahan Bil Tunjuk (ABT) secara digital. Sistem ini membolehkan pemantauan status ABT, pengesanan lokasi, dan pengurusan proses pentadbiran tanah secara sistematik merentasi pejabat daerah.',
    highlights: ['Pemantauan ABT digital', 'Pengesanan lokasi', 'Pentadbiran tanah sistematik'],
  },
  ots: {
    name: 'OTS',
    full: 'Overflow Tripping System',
    Icon: IconWater,
    gold: true,
    origin: { name: 'SUK Selangor', full: 'Pejabat Setiausaha Kerajaan Negeri' },
    expanded: [
      { name: 'MBSA', full: 'Majlis Bandaraya Shah Alam' },
      { name: 'MBPJ', full: 'Majlis Bandaraya Petaling Jaya' },
      { name: 'MBSJ', full: 'Majlis Bandaraya Subang Jaya' },
      { name: 'MBDK', full: 'Majlis Bandaraya Diraja Klang' },
    ],
    desc: 'Overflow Tripping System (OTS) merupakan produk inovatif yang berfungsi sebagai sistem perlindungan sekunder bagi menghentikan limpahan air sekiranya sistem pam air atau penderia bangunan gagal mengesan paras air dalam tangki. Sistem ini beroperasi secara automatik dengan mengesan limpahan air dan secara serentak akan mematikan pam serta memberikan amaran atau pemberitahuan kepada pengguna melalui aplikasi telefon pintar.',
    highlights: [
      'Harta Intelek MY-198326-A (2018)',
      'Produk Rintis Pengkomersilan SRIE 2023',
      'Pemantauan 24 jam via telefon pintar',
      'Perlindungan sekunder automatik',
    ],
    tags: ['Harta Intelek', 'Produk Rintis', 'Pemantauan 24/7', 'Selgem Sdn. Bhd.'],
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
            <p className="text-sm opacity-70 mt-1">{p.full}</p>
          </div>

          {/* Origin */}
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${accentBg}`} />
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Agensi Pelaksana</p>
            </div>
            <p className={`text-xl font-black ${accentText}`}>{p.origin.name}</p>
            <p className="text-xs text-gray-500">{p.origin.full}</p>
          </div>

          {/* Expanded to */}
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <IconArrowRight size={14} className={accentText} />
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Dikembangkan ke</p>
            </div>
            <div className={`grid gap-2 ${p.expanded.length <= 2 ? 'grid-cols-2' : p.expanded.length === 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
              {p.expanded.map(e => (
                <div key={e.name} className={`tap ${accentLight} rounded-xl p-3 text-center border ${accentBorder}`}>
                  <p className={`text-lg font-black ${accentText}`}>{e.name}</p>
                  <p className="text-[9px] text-gray-400 mt-0.5 leading-tight">{e.full}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
            <SectionLabel>Keterangan</SectionLabel>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">{p.desc}</p>
          </div>

          {/* Highlights */}
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
            <SectionLabel>Ciri-ciri Utama</SectionLabel>
            <div className="flex flex-col gap-2.5 mt-3">
              {p.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${accentBg} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                    <IconCheck size={14} className="text-white" />
                  </div>
                  <p className="text-sm text-gray-700 font-medium">{h}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          {p.tags && (
            <div className="flex flex-wrap gap-2">
              {p.tags.map((tag, i) => (
                <span key={tag} className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                  i % 2 === 0 ? `${accentLight} ${accentText}` : 'bg-gray-100 text-gray-600'
                }`}>{tag}</span>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
