import { Link } from 'react-router-dom'
import { BackButton, Footer } from '../components/SlideShow'

const topics = [
  {
    id: 'ekonomi',
    title: 'Ekonomi Selangor',
    stat: '26.2%',
    desc: 'Sumbangan KDNK tertinggi',
    color: 'bg-gradient-to-br from-rstu-red to-red-700',
  },
  {
    id: 'cabaran',
    title: '7 Cabaran Utama',
    stat: '7',
    desc: 'Perkhidmatan Awam',
    color: 'bg-gradient-to-br from-red-600 to-red-800',
  },
  {
    id: 'objektif',
    title: '5 Objektif RSTU',
    stat: '5',
    desc: 'Hala tuju reformasi',
    color: 'bg-gradient-to-br from-rstu-red to-rstu-dark',
  },
  {
    id: 'kerangka',
    title: 'Kerangka RSTU',
    stat: '2025',
    desc: 'Framework 2025-2027',
    color: 'bg-gradient-to-br from-red-700 to-red-900',
  },
  {
    id: 'ehsan',
    title: 'Nilai E.H.S.A.N',
    stat: '5',
    desc: 'Nilai teras reformasi',
    color: 'bg-gradient-to-br from-rstu-dark to-red-950',
  },
  {
    id: 'hemat',
    title: 'Nilai H.E.M.A.T',
    stat: '5',
    desc: 'Nilai penjawat awam',
    color: 'bg-gradient-to-br from-red-800 to-red-950',
  },
]

export default function RSTUHub() {
  return (
    <div className="h-full flex flex-col bg-rstu-strong">
      {/* Header */}
      <div className="px-6 pt-6 pb-2 flex items-center gap-3">
        <BackButton to="/" />
      </div>
      <div className="px-6 pb-4">
        <h1 className="text-3xl font-black text-gray-900">5 Objektif RSTU</h1>
        <p className="text-sm text-gray-500 mt-1">Reformasi Sistem Penyampaian & Tadbir Urus</p>
      </div>

      {/* Cards Grid */}
      <div className="flex-1 overflow-y-auto scroll-hide px-6 pb-4">
        <div className="grid grid-cols-2 gap-3 stagger">
          {topics.map((t) => (
            <Link
              key={t.id}
              to={`/rstu/${t.id}`}
              className={`tap ${t.color} rounded-2xl p-5 text-white no-underline shadow-md flex flex-col justify-between min-h-[140px]`}
            >
              <div>
                <p className="text-3xl font-black leading-none">{t.stat}</p>
                <p className="text-xs opacity-60 mt-1">{t.desc}</p>
              </div>
              <div className="flex items-center justify-between mt-3">
                <p className="text-sm font-bold leading-tight">{t.title}</p>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="opacity-40 flex-shrink-0">
                  <path d="M6 12L10 8L6 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
