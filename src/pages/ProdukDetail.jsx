import { useParams } from 'react-router-dom'
import { BackButton, Footer } from '../components/SlideShow'

const products = {
  spkb: {
    name: 'SPKB',
    full: 'Sistem Penguatkuasaan Bersepadu',
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
    tags: ['Harta Intelek', 'Produk Rintis', 'Pemantauan 24/7', 'Pengkomersilan'],
  },
}

export default function ProdukDetail() {
  const { product } = useParams()
  const p = products[product]

  if (!p) return <div className="h-full flex items-center justify-center">Not found</div>

  return (
    <div className="h-full flex flex-col bg-rstu-strong">
      {/* Header */}
      <div className="px-6 pt-6 pb-2 flex items-center justify-between flex-shrink-0">
        <BackButton to="/produk" />
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Produk Inovasi</span>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto scroll-hide px-6 pb-4 page-enter">
        <div className="stagger flex flex-col gap-4">
          {/* Product Header */}
          <div className="bg-rstu-red rounded-2xl p-6 text-white text-center shadow-lg shadow-rstu-red/20">
            <p className="text-4xl font-black">{p.name}</p>
            <p className="text-sm opacity-70 mt-1">{p.full}</p>
          </div>

          {/* Origin */}
          <div className="bg-white rounded-2xl p-4 border border-rstu-red/10 shadow-sm">
            <p className="text-[10px] text-rstu-red font-bold uppercase tracking-widest">Agensi Pelaksana</p>
            <p className="text-xl font-black text-gray-900 mt-1">{p.origin.name}</p>
            <p className="text-xs text-gray-500">{p.origin.full}</p>
          </div>

          {/* Expanded to */}
          <div className="bg-white rounded-2xl p-4 border border-rstu-red/10 shadow-sm">
            <p className="text-[10px] text-rstu-red font-bold uppercase tracking-widest mb-3">Dikembangkan ke</p>
            <div className={`grid gap-2 ${p.expanded.length <= 2 ? 'grid-cols-2' : p.expanded.length === 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
              {p.expanded.map(e => (
                <div key={e.name} className="tap bg-rstu-light rounded-xl p-3 text-center">
                  <p className="text-lg font-black text-rstu-red">{e.name}</p>
                  <p className="text-[9px] text-rstu-dark/60 mt-0.5">{e.full}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-2xl p-4 border border-rstu-red/10 shadow-sm">
            <p className="text-[10px] text-rstu-red font-bold uppercase tracking-widest">Mengenai {p.name}</p>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">{p.desc}</p>
          </div>

          {/* Highlights */}
          <div className="bg-white rounded-2xl p-4 border border-rstu-red/10 shadow-sm">
            <p className="text-[10px] text-rstu-red font-bold uppercase tracking-widest mb-2">Ciri-ciri Utama</p>
            <div className="flex flex-col gap-2">
              {p.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-rstu-red/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-rstu-red" />
                  </div>
                  <p className="text-sm text-gray-700 font-medium">{h}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tags (for OTS) */}
          {p.tags && (
            <div className="flex flex-wrap gap-2">
              {p.tags.map(tag => (
                <span key={tag} className="text-xs bg-rstu-light text-rstu-red font-semibold px-3 py-1.5 rounded-full">{tag}</span>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
