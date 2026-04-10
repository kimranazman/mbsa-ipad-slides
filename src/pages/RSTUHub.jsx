import { Link } from 'react-router-dom'
import { BackButton, Footer } from '../components/SlideShow'
import { IconChart, IconWarning, IconTarget, IconLayers, IconHeart, IconStar, IconChevron } from '../components/Icons'

const topics = [
  {
    id: 'ekonomi',
    title: 'Ekonomi Selangor',
    highlight: '26.2%',
    desc: 'Sumbangan KDNK tertinggi',
    Icon: IconChart,
    accent: true,
  },
  {
    id: 'cabaran',
    title: '7 Cabaran Utama',
    highlight: '7',
    desc: 'Perkhidmatan Awam',
    Icon: IconWarning,
  },
  {
    id: 'objektif',
    title: '5 Objektif RSTU',
    highlight: '5',
    desc: 'Hala tuju reformasi',
    Icon: IconTarget,
    accent: true,
  },
  {
    id: 'kerangka',
    title: 'Kerangka RSTU',
    highlight: '2025',
    desc: 'Framework 2025-2027',
    Icon: IconLayers,
  },
  {
    id: 'ehsan',
    title: 'Nilai E.H.S.A.N',
    highlight: '5',
    desc: 'Nilai teras reformasi',
    Icon: IconHeart,
  },
  {
    id: 'hemat',
    title: 'Nilai H.E.M.A.T',
    highlight: '5',
    desc: 'Nilai penjawat awam',
    Icon: IconStar,
    accent: true,
  },
]

export default function RSTUHub() {
  return (
    <div className="h-full flex flex-col bg-rstu-strong">
      {/* Gold top accent */}
      <div className="h-1 bg-gradient-to-r from-rstu-red via-rstu-gold to-rstu-red flex-shrink-0" />

      {/* Header */}
      <div className="px-6 pt-5 pb-1 flex-shrink-0">
        <BackButton to="/" />
      </div>
      <div className="px-6 pb-5 flex-shrink-0">
        <span className="badge-gold">Reformasi</span>
        <h1 className="text-3xl font-black text-gray-900 mt-2">5 Objektif RSTU</h1>
        <p className="text-sm text-gray-500 mt-1">Reformasi Sistem Penyampaian & Tadbir Urus</p>
      </div>

      {/* Cards Grid */}
      <div className="flex-1 overflow-y-auto scroll-hide px-6 pb-6">
        <div className="grid grid-cols-2 gap-3 stagger-pop">
          {topics.map((t) => (
            <Link
              key={t.id}
              to={`/rstu/${t.id}`}
              className="tap block bg-white rounded-2xl no-underline shadow-sm border border-gray-100 flex flex-col min-h-[160px] relative overflow-hidden"
            >
              {/* Right edge accent strip */}
              <div className={`absolute top-0 right-0 w-1 h-full rounded-r-2xl ${
                t.accent ? 'bg-gradient-to-b from-rstu-gold to-rstu-yellow' : 'bg-gradient-to-b from-rstu-red to-rstu-dark'
              }`} />

              <div className="p-4 flex flex-col flex-1">
                {/* Icon */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                  t.accent
                    ? 'bg-gradient-to-br from-rstu-gold to-rstu-yellow shadow-sm shadow-rstu-gold/20'
                    : 'bg-gradient-to-br from-rstu-red to-rstu-dark shadow-sm shadow-rstu-red/20'
                }`}>
                  <t.Icon size={20} className="text-white" />
                </div>

                {/* Stat */}
                <p className={`text-3xl font-black leading-none ${t.accent ? 'text-rstu-gold' : 'text-rstu-red'}`}>
                  {t.highlight}
                </p>
                <p className="text-[10px] text-gray-400 mt-0.5">{t.desc}</p>

                {/* Title + chevron pill */}
                <div className="flex items-center justify-between mt-auto pt-3">
                  <p className="text-sm font-bold text-gray-900 leading-tight pr-1">{t.title}</p>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                    t.accent ? 'bg-rstu-gold/10' : 'bg-rstu-red/8'
                  }`}>
                    <IconChevron size={12} className={`chevron-hint ${t.accent ? 'text-rstu-gold' : 'text-rstu-red/60'}`} />
                  </div>
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
