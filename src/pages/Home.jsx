import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-rstu-strong p-8 gap-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-black text-rstu-red tracking-tight">RSTU</h1>
        <p className="text-lg text-gray-600 mt-2">Semarakkan Inovasi Sektor Awam Negeri Selangor</p>
        <p className="text-sm text-rstu-red font-semibold mt-1 italic">"Reformasi Satu Kemestian"</p>
      </div>

      {/* iPad Selection */}
      <div className="flex flex-col gap-4 w-full max-w-sm">
        <Link
          to="/rstu"
          className="block bg-rstu-red text-white rounded-2xl p-6 text-center shadow-lg active:scale-95 transition-transform no-underline"
        >
          <div className="text-xs uppercase tracking-widest opacity-75 mb-1">iPad 3 & 4</div>
          <div className="text-2xl font-bold">5 Objektif RSTU</div>
          <div className="text-sm opacity-80 mt-1">Reformasi Sistem Tadbir Urus</div>
        </Link>

        <Link
          to="/produk"
          className="block bg-rstu-dark text-white rounded-2xl p-6 text-center shadow-lg active:scale-95 transition-transform no-underline"
        >
          <div className="text-xs uppercase tracking-widest opacity-75 mb-1">iPad 5 & 6</div>
          <div className="text-2xl font-bold">Produk Inovasi</div>
          <div className="text-sm opacity-80 mt-1">SPKB, MyMR, ABT Tracker, OTS</div>
        </Link>
      </div>

      <p className="text-xs text-gray-400 mt-4">14 April 2026 &middot; MBSA</p>
    </div>
  )
}
