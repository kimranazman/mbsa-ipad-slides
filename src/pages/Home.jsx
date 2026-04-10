import { Link } from 'react-router-dom'
import { Footer } from '../components/SlideShow'
import { IconTarget, IconShield, IconChevron } from '../components/Icons'

export default function Home() {
  return (
    <div className="h-full flex flex-col bg-rstu-strong">
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        {/* Decorative top accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rstu-red via-rstu-gold to-rstu-red" />

        <div className="stagger flex flex-col items-center gap-6 w-full max-w-sm">
          {/* Badge */}
          <span className="badge-gold text-[10px] tracking-[0.15em]">Semarakkan Inovasi Sektor Awam 2026</span>

          {/* Main Title */}
          <div className="text-center">
            <h1 className="text-8xl font-black gold-shimmer leading-none">
              RSTU
            </h1>
            <div className="mt-3 space-y-0.5">
              <p className="text-sm font-bold text-rstu-dark uppercase tracking-wider">
                Reformasi Sistem Penyampaian
              </p>
              <p className="text-sm font-bold text-rstu-dark uppercase tracking-wider">
                & Tadbir Urus Negeri Selangor
              </p>
            </div>
          </div>

          {/* Tagline */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-rstu-gold/20 via-rstu-yellow/30 to-rstu-gold/20 rounded-2xl blur-sm" />
            <div className="relative bg-white border border-rstu-gold/30 rounded-xl px-6 py-3 shadow-sm">
              <p className="text-lg font-bold italic text-rstu-dark">"Reformasi Satu Kemestian"</p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-rstu-gold to-transparent" />

          {/* Navigation Cards */}
          <div className="flex flex-col gap-3.5 w-full">
            <Link
              to="/rstu"
              className="tap group block bg-white rounded-2xl no-underline shadow-md border border-gray-100 overflow-hidden"
            >
              <div className="flex items-center gap-4 p-5 pr-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rstu-red to-rstu-dark flex items-center justify-center flex-shrink-0 shadow-md shadow-rstu-red/20">
                  <IconTarget size={26} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-lg font-bold text-gray-900">5 Objektif RSTU</p>
                  <p className="text-xs text-gray-500 mt-0.5">Kerangka, nilai & hala tuju reformasi</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-rstu-red/5 flex items-center justify-center flex-shrink-0">
                  <IconChevron size={16} className="text-rstu-red chevron-hint" />
                </div>
              </div>
            </Link>

            <Link
              to="/produk"
              className="tap group block bg-white rounded-2xl no-underline shadow-md border border-gray-100 overflow-hidden"
            >
              <div className="flex items-center gap-4 p-5 pr-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rstu-gold to-rstu-yellow flex items-center justify-center flex-shrink-0 shadow-md shadow-rstu-gold/20">
                  <IconShield size={26} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-lg font-bold text-gray-900">Produk Inovasi</p>
                  <p className="text-xs text-gray-500 mt-0.5">SPKB, MyMR, ABT Tracker, OTS</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-rstu-gold/10 flex items-center justify-center flex-shrink-0">
                  <IconChevron size={16} className="text-rstu-gold chevron-hint" />
                </div>
              </div>
            </Link>
          </div>

          {/* Event info */}
          <p className="text-[10px] text-gray-400 tracking-wide">14 April 2026 &middot; MBSA &middot; Negeri Selangor</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
