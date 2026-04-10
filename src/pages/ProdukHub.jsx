import { Link } from 'react-router-dom'
import { BackButton, Footer, SectionLabel } from '../components/SlideShow'
import { IconShield, IconPeople, IconMapPin, IconWater, IconChevron, IconArrowRight } from '../components/Icons'

const products = [
  {
    id: 'spkb',
    name: 'SPKB',
    full: 'Sistem Penguatkuasaan Bersepadu',
    origin: 'MPHS',
    expanded: 'MPKS, MDSB',
    Icon: IconShield,
    gold: false,
  },
  {
    id: 'mymr',
    name: 'MyMR',
    full: 'Sistem MyMR',
    origin: 'MPSp',
    expanded: 'MPS, MPKL, MPHS',
    Icon: IconPeople,
    gold: true,
  },
  {
    id: 'abt',
    name: 'ABT Tracker',
    full: 'Sistem ABT Tracker',
    origin: 'PDT Petaling',
    expanded: 'PDT Klang, Gombak, Hulu Langat',
    Icon: IconMapPin,
    gold: false,
  },
  {
    id: 'ots',
    name: 'OTS',
    full: 'Overflow Tripping System',
    origin: 'SUK Selangor',
    expanded: 'MBSA, MBPJ, MBSJ, MBDK',
    Icon: IconWater,
    gold: true,
  },
]

export default function ProdukHub() {
  return (
    <div className="h-full flex flex-col bg-rstu-strong">
      <div className="h-1 bg-gradient-to-r from-rstu-gold via-rstu-red to-rstu-gold flex-shrink-0" />

      {/* Header */}
      <div className="px-6 pt-5 pb-1 flex-shrink-0">
        <BackButton to="/" />
      </div>
      <div className="px-6 pb-5 flex-shrink-0">
        <SectionLabel>Inisiatif RSTU</SectionLabel>
        <h1 className="text-3xl font-black text-gray-900 mt-2">Produk Inovasi</h1>
        <p className="text-sm text-gray-500 mt-1">4 produk inovasi yang dipersetujui oleh MMKN untuk dikembangkan merentasi agensi Negeri Selangor</p>
      </div>

      {/* Product Cards */}
      <div className="flex-1 overflow-y-auto scroll-hide px-6 pb-6">
        <div className="flex flex-col gap-4 stagger">
          {products.map((p) => (
            <Link
              key={p.id}
              to={`/produk/${p.id}`}
              className="tap block bg-white rounded-2xl no-underline shadow-sm border border-gray-100 overflow-hidden"
            >
              {/* Top section */}
              <div className={`p-5 flex items-center gap-4 ${
                p.gold ? 'bg-gradient-to-r from-rstu-gold/5 to-rstu-yellow/5' : ''
              }`}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md ${
                  p.gold
                    ? 'bg-gradient-to-br from-rstu-gold to-rstu-yellow shadow-rstu-gold/20'
                    : 'bg-gradient-to-br from-rstu-red to-rstu-dark shadow-rstu-red/20'
                }`}>
                  <p.Icon size={26} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-xl font-black ${p.gold ? 'text-rstu-gold' : 'text-rstu-red'}`}>{p.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{p.full}</p>
                </div>
                <IconChevron size={18} className="text-gray-300" />
              </div>

              {/* Flow section */}
              <div className="px-5 pb-4 flex items-center gap-2">
                <div className={`rounded-lg px-3 py-1.5 ${p.gold ? 'bg-rstu-cream' : 'bg-rstu-light'}`}>
                  <p className="text-[9px] text-gray-400 uppercase tracking-wider">Asal</p>
                  <p className={`text-sm font-bold ${p.gold ? 'text-rstu-gold' : 'text-rstu-red'}`}>{p.origin}</p>
                </div>
                <IconArrowRight size={14} className="text-gray-300" />
                <div className="bg-gray-50 rounded-lg px-3 py-1.5 flex-1">
                  <p className="text-[9px] text-gray-400 uppercase tracking-wider">Dikembangkan</p>
                  <p className="text-xs font-semibold text-gray-700">{p.expanded}</p>
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
