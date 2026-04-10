import { useParams } from 'react-router-dom'
import { BackButton, Footer, SectionLabel } from '../components/SlideShow'
import { IconChart, IconWarning, IconTarget, IconLayers, IconHeart, IconStar, IconCheck, IconGlobe, IconBuilding, IconShield, IconPeople } from '../components/Icons'

function StatCard({ value, label, gold }) {
  return (
    <div className={`rounded-2xl p-4 text-center ${gold ? 'bg-gradient-to-br from-rstu-gold to-rstu-yellow text-white' : 'bg-white border border-gray-100 shadow-sm'}`}>
      <p className={`text-2xl font-black ${gold ? '' : 'text-rstu-red'}`}>{value}</p>
      <p className={`text-[10px] mt-0.5 ${gold ? 'opacity-80' : 'text-gray-500'}`}>{label}</p>
    </div>
  )
}

function EkonomiPage() {
  return (
    <div className="stagger flex flex-col gap-4">
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
        <SectionLabel>KDNK 2024</SectionLabel>
        <p className="text-7xl font-black text-rstu-gold mt-3 gold-shimmer">26.2%</p>
        <p className="text-sm text-gray-600 mt-2">daripada KDNK keseluruhan Malaysia</p>
        <div className="inline-flex items-center gap-1.5 bg-rstu-cream text-rstu-gold rounded-full px-3 py-1 mt-2 text-xs font-semibold">
          <IconStar size={12} />
          Sumbangan tertinggi dari semua negeri
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <StatCard value="RM 432.1B" label="Nilai Sumbangan KDNK" gold />
        <StatCard value="RM 3B" label="Sasaran Hasil 2025" />
      </div>

      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <IconChart size={16} className="text-rstu-gold" />
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Pertumbuhan Berterusan</p>
        </div>
        <div className="flex items-end justify-between px-1" style={{ height: 128 }}>
          {[
            { year: '2020', h: 38, val: '24.0%' },
            { year: '2021', h: 54, val: '24.8%' },
            { year: '2022', h: 77, val: '25.6%' },
            { year: '2023', h: 100, val: '26.0%' },
            { year: '2024', h: 120, val: '26.2%' },
          ].map(({ year, h, val }, i) => (
            <div key={year} className="flex flex-col items-center gap-1.5 flex-1">
              <span className="text-[9px] font-bold text-rstu-gold">{val}</span>
              <div
                className={`w-8 rounded-t-xl ${i === 4 ? 'bg-gradient-to-t from-rstu-gold to-rstu-yellow' : 'bg-gradient-to-t from-rstu-red/80 to-rstu-red/40'}`}
                style={{ height: h }}
              />
              <span className="text-[10px] text-gray-400 font-medium">{year}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CabaranPage() {
  const cabaran = [
    { icon: IconBuilding, title: 'Organisasi tidak kejat', desc: 'Pertindihan fungsi dan tugas. Banyak lapisan chain of command menyebabkan masalah red tape.' },
    { icon: IconGlobe, title: 'Penyampaian konvensional', desc: 'Penyampaian perkhidmatan masih secara konvensional. Usaha digitalisasi perlu dipertingkatkan.' },
    { icon: IconShield, title: 'Isu integriti & akauntabiliti', desc: 'Menangani isu ini sehingga ke akar umbi. Inisiatif baharu yang lebih berkesan diperlukan.' },
    { icon: IconChart, title: 'Bebanan kewangan kerajaan', desc: 'Sistem saranan yang tidak berasaskan kepada produktiviti. Inisiatif baharu perlu diteroka.' },
    { icon: IconStar, title: 'Modal insan kurang kompeten', desc: 'Kepimpinan organisasi tidak berkesan. Penghasilan tugas tidak memenuhi kehendak pelanggan.' },
    { icon: IconTarget, title: 'Penarikan bakat terbaik', desc: 'Mewujudkan suasana kerja yang lebih fleksibel. Pembangunan kerjaya dari segi upscaling dan reskilling.' },
    { icon: IconLayers, title: 'Jurang kementerian & jabatan', desc: 'Mentaliti bekerja secara silo. Bajet berasaskan program kementerian dan jabatan.' },
  ]

  return (
    <div className="stagger flex flex-col gap-2.5">
      {cabaran.map((c, i) => (
        <div key={i} className="tap bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex items-start gap-3">
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
            i === 0 || i === 3 || i === 6 ? 'bg-rstu-cream text-rstu-gold' : 'bg-rstu-light text-rstu-red'
          }`}>
            <c.icon size={18} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-bold text-sm text-gray-900">{c.title}</p>
            <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{c.desc}</p>
          </div>
          <span className="text-lg font-black text-gray-200 mt-0.5">{i + 1}</span>
        </div>
      ))}
    </div>
  )
}

function ObjektifPage() {
  const objektif = [
    { num: 1, title: 'Reformasi Perkhidmatan Awam', desc: 'Mentransformasi perkhidmatan awam agar lebih cekap, pantas dan berkesan.', Icon: IconGlobe, gold: true },
    { num: 2, title: 'Reformasi Pengurusan Integriti', desc: 'Memperkukuhkan integriti melalui transformasi digital dengan perkongsian data strategik.', Icon: IconShield },
    { num: 3, title: 'Reformasi Modal Insan', desc: 'Melahirkan pemimpin berdaya saing dan berfikir strategik.', Icon: IconPeople, gold: true },
    { num: 4, title: 'Reformasi Dasar & Perkhidmatan', desc: 'Menyampaikan dasar dan perkhidmatan yang difahami, diterima dan dirasai rakyat.', Icon: IconTarget },
    { num: 5, title: 'Reformasi Jentera Akar Umbi', desc: 'Membina sinergi penyampaian dasar kerajaan melalui pemberdayaan pemimpin tempatan.', Icon: IconLayers, gold: true },
  ]

  return (
    <div className="stagger flex flex-col gap-3">
      <div className="bg-rstu-cream rounded-2xl p-4 border border-rstu-gold/15">
        <div className="flex items-center gap-2 mb-1.5">
          <IconTarget size={14} className="text-rstu-gold" />
          <p className="text-[10px] text-rstu-gold font-bold uppercase tracking-widest">Matlamat</p>
        </div>
        <p className="text-sm text-rstu-dark leading-relaxed">
          Menjadi pemacu (enabler) utama kepada pelaksanaan dasar Kerajaan Negeri melalui pembaharuan sistem penyampaian dan tadbir urus yang cekap, telus dan berimpak.
        </p>
      </div>

      {objektif.map((o) => (
        <div key={o.num} className="tap bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex items-start gap-4">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm ${
            o.gold
              ? 'bg-gradient-to-br from-rstu-gold to-rstu-yellow shadow-rstu-gold/20'
              : 'bg-gradient-to-br from-rstu-red to-rstu-dark shadow-rstu-red/20'
          }`}>
            <o.Icon size={22} className="text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className={`text-2xl font-black ${o.gold ? 'text-rstu-gold' : 'text-rstu-red'}`}>{o.num}</span>
              <p className="font-bold text-sm text-gray-900 leading-tight">{o.title}</p>
            </div>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">{o.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function KerangkaPage() {
  const fokus = [
    'Tadbir Urus & Integriti', 'Reformasi Penyampaian',
    'Pemecahan Budaya Silo', 'Reformasi Aduan',
    'Modal Insan Berdaya', 'Pemerkasaan Akar Umbi',
    'Pengukuran & Pemantauan', 'Penilaian Berasaskan Hasil',
  ]

  return (
    <div className="stagger flex flex-col gap-4">
      <div className="bg-gradient-to-br from-rstu-red to-rstu-dark rounded-2xl p-5 text-center text-white shadow-lg shadow-rstu-red/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-rstu-gold/10 rounded-bl-full" />
        <p className="text-[10px] uppercase tracking-[0.2em] opacity-50">Kerangka</p>
        <p className="text-3xl font-black mt-1">RSTU <span className="text-rstu-gold">2025-2027</span></p>
      </div>

      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
        <SectionLabel>Matlamat</SectionLabel>
        <p className="text-xs text-gray-600 mt-2 leading-relaxed">
          Menjadi pemacu (enabler) utama kepada pelaksanaan dasar kerajaan melalui pembaharuan sistem penyampaian dan tadbir urus yang cekap, telus dan berimpak.
        </p>
      </div>

      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
        <SectionLabel>Nilai</SectionLabel>
        <div className="flex flex-wrap gap-2 mt-3">
          {['Empati', 'Holistik', 'Sinergi', 'Akauntabiliti', 'Neutraliti'].map((v, i) => (
            <span key={v} className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
              i % 2 === 0 ? 'bg-rstu-cream text-rstu-gold' : 'bg-rstu-light text-rstu-red'
            }`}>{v}</span>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
        <SectionLabel>8 Fokus Strategik</SectionLabel>
        <div className="grid grid-cols-2 gap-2 mt-3">
          {fokus.map((f, i) => (
            <div key={i} className={`rounded-xl p-3 text-center ${
              i % 3 === 0 ? 'bg-gradient-to-r from-rstu-gold to-rstu-yellow' : 'bg-gradient-to-r from-rstu-red to-rstu-dark'
            }`}>
              <span className="text-[11px] text-white font-semibold">{f}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="border-2 border-rstu-gold rounded-xl p-3 text-center bg-rstu-cream/50">
          <span className="text-xs font-bold text-rstu-gold">Strategi Keberhasilan Reformasi (SKR)</span>
        </div>
        <div className="border-2 border-rstu-red rounded-xl p-3 text-center bg-rstu-light/50">
          <span className="text-xs font-bold text-rstu-red">Program / Inisiatif</span>
        </div>
      </div>
    </div>
  )
}

function EHSANPage() {
  const nilai = [
    { letter: 'E', name: 'Empati', desc: 'Memahami keperluan dan situasi rakyat dengan meletakkan diri dalam keadaan mereka.', gold: true },
    { letter: 'H', name: 'Holistik', desc: 'Mempertimbangkan semua aspek dalam membuat keputusan tanpa mengenepikan sebarang faktor penting.' },
    { letter: 'S', name: 'Sinergi', desc: 'Bekerjasama merentasi agensi dan jabatan untuk mencapai hasil yang lebih baik.', gold: true },
    { letter: 'A', name: 'Akauntabiliti', desc: 'Bertanggungjawab ke atas setiap tindakan dan keputusan serta bersedia menerima maklum balas.' },
    { letter: 'N', name: 'Neutraliti', desc: 'Bersikap adil dan tidak berat sebelah dalam melaksanakan tanggungjawab dan membuat keputusan.', gold: true },
  ]

  return (
    <div className="stagger flex flex-col gap-3">
      <div className="text-center py-2">
        <h2 className="text-5xl font-black tracking-[0.15em] gold-shimmer">E.H.S.A.N</h2>
        <p className="text-xs text-gray-500 mt-2">Nilai Teras Reformasi RSTU</p>
      </div>

      {nilai.map((n) => (
        <div key={n.letter} className={`tap rounded-2xl p-4 flex items-start gap-4 shadow-md ${
          n.gold
            ? 'bg-gradient-to-r from-rstu-gold to-rstu-yellow text-white'
            : 'bg-gradient-to-r from-rstu-red to-rstu-dark text-white'
        }`}>
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
            <span className="text-2xl font-black">{n.letter}</span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-bold text-base">{n.name}</p>
            <p className="text-xs opacity-80 mt-1 leading-relaxed">{n.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function HEMATPage() {
  const hemat = [
    { letter: 'H', name: 'Hijrah Tatakelola', desc: 'Berani berhijrah menurusi kepekaan dengan tuntutan perubahan semasa, menjalankan tugas dengan rapi dan cekap.', gold: false },
    { letter: 'E', name: 'Empati Rakyat', desc: 'Mendengar dan memahami permasalahan rakyat, sentiasa prihatin dan menyayangi rakyat.', gold: true },
    { letter: 'M', name: 'Minda Pekin', desc: 'Sentiasa bersikap cermat dalam membelanjakan dana awam, sentiasa kreatif dan inovatif, minda "value for money".', gold: false },
    { letter: 'A', name: 'Apresiasi Inovasi', desc: 'Sentiasa menyokong dan menghargai perkembangan idea-idea baharu bagi memperkasakan Perkhidmatan Awam.', gold: true },
    { letter: 'T', name: 'Telus Tadbiran', desc: 'Menyematkan nilai-nilai integriti dalam menjalankan tugas seharian, membudayakan amalan sonsang.', gold: false },
  ]

  return (
    <div className="stagger flex flex-col gap-3">
      <div className="text-center py-2">
        <h2 className="text-5xl font-black tracking-[0.12em] text-rstu-red">H.E.M.A.T</h2>
        <p className="text-xs text-gray-500 mt-2">Nilai-Nilai Penjawat Awam</p>
      </div>

      {hemat.map((h) => (
        <div key={h.letter} className="tap bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex items-start gap-3">
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm ${
            h.gold
              ? 'bg-gradient-to-br from-rstu-gold to-rstu-yellow shadow-rstu-gold/20'
              : 'bg-gradient-to-br from-rstu-red to-rstu-dark shadow-rstu-red/20'
          }`}>
            <span className="text-xl font-black text-white">{h.letter}</span>
          </div>
          <div className="min-w-0 flex-1">
            <p className={`font-bold text-sm ${h.gold ? 'text-rstu-gold' : 'text-rstu-red'}`}>{h.name}</p>
            <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{h.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

const pages = {
  ekonomi: { title: 'Ekonomi Selangor', subtitle: 'Sumbangan KDNK Negeri', component: EkonomiPage, Icon: IconChart },
  cabaran: { title: '7 Cabaran Utama', subtitle: 'Perkhidmatan Awam', component: CabaranPage, Icon: IconWarning },
  objektif: { title: '5 Objektif RSTU', subtitle: 'Hala Tuju Reformasi', component: ObjektifPage, Icon: IconTarget },
  kerangka: { title: 'Kerangka RSTU', subtitle: '2025-2027', component: KerangkaPage, Icon: IconLayers },
  ehsan: { title: 'Nilai E.H.S.A.N', subtitle: 'Nilai Teras', component: EHSANPage, Icon: IconHeart },
  hemat: { title: 'Nilai H.E.M.A.T', subtitle: 'Penjawat Awam', component: HEMATPage, Icon: IconStar },
}

export default function RSTUDetail() {
  const { topic } = useParams()
  const page = pages[topic]

  if (!page) return <div className="h-full flex items-center justify-center text-gray-400">Tidak dijumpai</div>

  const Component = page.component

  return (
    <div className="h-full flex flex-col bg-rstu-strong">
      <div className="h-1 bg-gradient-to-r from-rstu-red via-rstu-gold to-rstu-red flex-shrink-0" />

      {/* Header */}
      <div className="px-6 pt-5 pb-1 flex items-center justify-between flex-shrink-0">
        <BackButton to="/rstu" />
        <div className="flex items-center gap-2">
          <page.Icon size={16} className="text-rstu-gold" />
          <span className="text-xs font-bold text-gray-400">{page.subtitle}</span>
        </div>
      </div>
      <div className="px-6 pb-4 flex-shrink-0">
        <h1 className="text-2xl font-black text-gray-900">{page.title}</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto scroll-hide px-6 pb-6 page-enter">
        <Component />
      </div>

      <Footer />
    </div>
  )
}
