import { Link } from 'react-router-dom'
import { Footer } from '../components/SlideShow'

export default function Home() {
  return (
    <div className="h-full flex flex-col bg-rstu-strong">
      <div className="flex-1 flex flex-col items-center justify-center px-8 stagger">
        {/* Branding */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-rstu-red/60 font-semibold">Semarakkan Inovasi Sektor Awam</p>
          <h1 className="text-7xl font-black mt-3 bg-gradient-to-b from-rstu-gold to-rstu-red bg-clip-text text-transparent leading-tight">
            RSTU
          </h1>
          <p className="text-sm font-semibold text-rstu-dark mt-2 uppercase tracking-wide leading-relaxed">
            Reformasi Sistem Penyampaian<br />& Tadbir Urus Negeri Selangor
          </p>
          <div className="inline-block mt-4 border border-rstu-red/20 rounded-xl px-5 py-2.5">
            <p className="text-base font-bold italic text-rstu-dark">"Reformasi Satu Kemestian"</p>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="flex flex-col gap-4 w-full max-w-sm mt-10">
          <Link
            to="/rstu"
            className="tap block bg-rstu-red text-white rounded-2xl p-6 no-underline shadow-lg shadow-rstu-red/20"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-widest opacity-60">iPad 3 & 4</div>
                <div className="text-xl font-bold mt-1">5 Objektif RSTU</div>
                <div className="text-xs opacity-70 mt-0.5">Kerangka, nilai & hala tuju reformasi</div>
              </div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="opacity-50">
                <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>

          <Link
            to="/produk"
            className="tap block bg-rstu-dark text-white rounded-2xl p-6 no-underline shadow-lg shadow-rstu-dark/20"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-widest opacity-60">iPad 5 & 6</div>
                <div className="text-xl font-bold mt-1">Produk Inovasi</div>
                <div className="text-xs opacity-70 mt-0.5">SPKB, MyMR, ABT Tracker, OTS</div>
              </div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="opacity-50">
                <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>
        </div>

        <p className="text-[10px] text-gray-400 mt-8">14 April 2026 &middot; MBSA &middot; Negeri Selangor</p>
      </div>
      <Footer />
    </div>
  )
}
