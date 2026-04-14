import { Link } from 'react-router-dom'
import { Footer } from '../components/SlideShow'
import { IconChevron } from '../components/Icons'

const pbts = [
  { id: 'mbdk', name: 'MBDK', full: 'Majlis Bandaraya Diraja Klang', gold: false, products: ['Klang Fast Track Industry'] },
  { id: 'mbpj', name: 'MBPJ', full: 'Majlis Bandaraya Petaling Jaya', gold: true, products: ['PJ Eco Recycling Plaza', 'Inisiatif PA24'] },
  { id: 'mbsa', name: 'MBSA', full: 'Majlis Bandaraya Shah Alam', gold: false, products: ['e-EKSA', 'IRIS'] },
  { id: 'mbsj', name: 'MBSJ', full: 'Majlis Bandaraya Subang Jaya', gold: true, products: ['SENSA', 'Sistem i-DATA'] },
  { id: 'mdsb', name: 'MDSB', full: 'Majlis Daerah Sabak Bernam', gold: false, products: ['MYLIA', 'Jom Sabak Bernam'] },
  { id: 'mpaj', name: 'MPAJ', full: 'Majlis Perbandaran Ampang Jaya', gold: true, products: ['BOM-46'] },
  { id: 'mphs', name: 'MPHS', full: 'Majlis Perbandaran Hulu Selangor', gold: false, products: ['SPKB'] },
  { id: 'mpkj', name: 'MPKj', full: 'Majlis Perbandaran Kajang', gold: true, products: ['Sistem e-OKU'] },
  { id: 'mpks', name: 'MPKS', full: 'Majlis Perbandaran Kuala Selangor', gold: false, products: ['Sistem e-Exam'] },
  { id: 'mpsp', name: 'MPSp', full: 'Majlis Perbandaran Sepang', gold: true, products: ['MyMR', 'Sepang Pro-Lifter'] },
]

export default function PbtInovasiHub() {
  return (
    <div className="h-full flex flex-col bg-rstu-strong">
      <div className="h-1 bg-gradient-to-r from-rstu-red via-rstu-gold to-rstu-red flex-shrink-0" />

      {/* Header */}
      <div className="px-6 pt-6 pb-4 flex-shrink-0 text-center">
        <span className="badge-gold text-[10px] tracking-[0.15em]">Semarakkan Inovasi Sektor Awam 2026</span>
        <h1 className="text-3xl font-black text-gray-900 mt-3">PBT Produk Inovasi</h1>
        <p className="text-sm text-gray-500 mt-1">10 Pihak Berkuasa Tempatan Negeri Selangor</p>
      </div>

      {/* Grid */}
      <div className="flex-1 overflow-y-auto scroll-hide px-4 pb-6">
        <div className="grid grid-cols-2 gap-3 stagger-pop">
          {pbts.map((pbt) => {
            const gradient = pbt.gold ? 'from-rstu-gold to-rstu-yellow' : 'from-rstu-red to-rstu-dark'
            return (
              <Link
                key={pbt.id}
                to={`/pbt/${pbt.id}`}
                className="tap block bg-white rounded-2xl no-underline shadow-sm border border-gray-100 overflow-hidden"
              >
                {/* Logo */}
                <div className="flex items-center justify-center pt-5 pb-3">
                  <div className={`w-28 h-28 rounded-2xl overflow-hidden relative shadow-lg`}>
                    {/* Fallback: gradient + abbreviation */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                      <div className="text-center">
                        <span className="text-xl font-black text-white tracking-tight block">{pbt.name}</span>
                        <div className="w-8 h-0.5 bg-white/40 mx-auto mt-1" />
                      </div>
                    </div>
                    {/* Logo image — drop PNGs into public/logos/ to replace fallback */}
                    <img
                      src={`/logos/${pbt.id}.png`}
                      alt=""
                      className="absolute inset-0 w-full h-full object-contain p-3 bg-white z-10"
                      onError={(e) => { e.target.style.display = 'none' }}
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="px-3 pb-4 text-center">
                  <p className="text-sm font-bold text-gray-900 leading-tight">{pbt.full}</p>
                  <div className="mt-2 flex flex-wrap justify-center gap-1">
                    {pbt.products.map((p) => (
                      <span
                        key={p}
                        className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${
                          pbt.gold ? 'bg-rstu-cream text-rstu-gold' : 'bg-rstu-light text-rstu-red'
                        }`}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      <Footer />
    </div>
  )
}
