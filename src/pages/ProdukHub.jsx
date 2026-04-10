import { Link } from 'react-router-dom'
import { BackButton, Footer } from '../components/SlideShow'

const products = [
  {
    id: 'spkb',
    name: 'SPKB',
    full: 'Sistem Penguatkuasaan Bersepadu',
    origin: 'MPHS',
    expanded: ['MPKS', 'MDSB'],
    color: 'from-red-500 to-red-700',
  },
  {
    id: 'mymr',
    name: 'MyMR',
    full: 'Sistem MyMR',
    origin: 'MPSp',
    expanded: ['MPS', 'MPKL', 'MPHS'],
    color: 'from-red-600 to-red-800',
  },
  {
    id: 'abt',
    name: 'ABT Tracker',
    full: 'Sistem ABT Tracker',
    origin: 'PDT Petaling',
    expanded: ['PDT Klang', 'PDT Gombak', 'PDT Hulu Langat'],
    color: 'from-red-700 to-red-900',
  },
  {
    id: 'ots',
    name: 'OTS',
    full: 'Overflow Tripping System',
    origin: 'SUK Selangor',
    expanded: ['MBSA', 'MBPJ', 'MBSJ', 'MBDK'],
    color: 'from-red-800 to-red-950',
  },
]

export default function ProdukHub() {
  return (
    <div className="h-full flex flex-col bg-rstu-strong">
      {/* Header */}
      <div className="px-6 pt-6 pb-2 flex items-center gap-3">
        <BackButton to="/" />
      </div>
      <div className="px-6 pb-4">
        <p className="text-xs uppercase tracking-widest text-rstu-red/60 font-semibold">Inisiatif RSTU</p>
        <h1 className="text-3xl font-black text-gray-900 mt-1">Produk Inovasi</h1>
        <p className="text-sm text-gray-500 mt-1">4 produk inovasi yang dipersetujui oleh MMKN untuk dikembangkan merentasi agensi Negeri Selangor</p>
      </div>

      {/* Product Cards */}
      <div className="flex-1 overflow-y-auto scroll-hide px-6 pb-4">
        <div className="flex flex-col gap-4 stagger">
          {products.map((p) => (
            <Link
              key={p.id}
              to={`/produk/${p.id}`}
              className={`tap bg-gradient-to-r ${p.color} rounded-2xl p-5 text-white no-underline shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-2xl font-black">{p.name}</p>
                  <p className="text-xs opacity-60 mt-0.5">{p.full}</p>
                </div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="opacity-40 mt-1">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div className="flex items-center gap-2 mt-3">
                <div className="bg-white/15 rounded-lg px-3 py-1.5 backdrop-blur-sm">
                  <p className="text-[9px] uppercase tracking-wider opacity-60">Asal</p>
                  <p className="text-sm font-bold">{p.origin}</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="opacity-40">
                  <path d="M4 8H12M12 8L9 5M12 8L9 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="bg-white/15 rounded-lg px-3 py-1.5 backdrop-blur-sm flex-1">
                  <p className="text-[9px] uppercase tracking-wider opacity-60">Dikembangkan ke</p>
                  <p className="text-sm font-bold">{p.expanded.join(', ')}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
