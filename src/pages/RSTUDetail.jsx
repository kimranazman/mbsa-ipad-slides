import { useParams } from 'react-router-dom'
import { BackButton, Footer } from '../components/SlideShow'

function EkonomiPage() {
  return (
    <div className="stagger flex flex-col gap-4">
      {/* Hero stat */}
      <div className="bg-rstu-red rounded-2xl p-6 text-white text-center shadow-lg shadow-rstu-red/20">
        <p className="text-xs opacity-60 uppercase tracking-widest">Sumbangan KDNK Selangor 2024</p>
        <p className="text-7xl font-black mt-2 count-in">26.2%</p>
        <p className="text-sm opacity-80 mt-1">daripada KDNK keseluruhan Malaysia</p>
        <p className="text-[10px] opacity-50 mt-2 italic">*Sumbangan tertinggi dari semua negeri</p>
      </div>

      {/* Secondary stats */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white rounded-2xl p-5 border border-rstu-red/10 shadow-sm text-center">
          <p className="text-xs text-gray-500">Nilai Sumbangan</p>
          <p className="text-2xl font-black text-rstu-red mt-1">RM 432.1B</p>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-rstu-red/10 shadow-sm text-center">
          <p className="text-xs text-gray-500">Sasaran 2025</p>
          <p className="text-2xl font-black text-rstu-red mt-1">RM 3B</p>
        </div>
      </div>

      {/* Growth chart */}
      <div className="bg-white rounded-2xl p-5 border border-rstu-red/10 shadow-sm">
        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-4">Pertumbuhan Berterusan</p>
        <div className="flex items-end justify-between h-28 px-2">
          {[
            { year: '2020', pct: 35, val: '24.0%' },
            { year: '2021', pct: 45, val: '24.8%' },
            { year: '2022', pct: 65, val: '25.6%' },
            { year: '2023', pct: 80, val: '26.0%' },
            { year: '2024', pct: 95, val: '26.2%' },
          ].map(({ year, pct, val }, i) => (
            <div key={year} className="flex flex-col items-center gap-1 flex-1" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
              <span className="text-[9px] font-bold text-rstu-red">{val}</span>
              <div
                className="w-8 bg-gradient-to-t from-rstu-red to-rstu-gold rounded-t-lg transition-all duration-700"
                style={{ height: `${pct}%` }}
              />
              <span className="text-[10px] text-gray-400">{year}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CabaranPage() {
  const cabaran = [
    { icon: '\uD83C\uDFE2', title: 'Organisasi tidak kejat', desc: 'Pertindihan fungsi dan tugas. Banyak lapisan chain of command menyebabkan masalah red tape.' },
    { icon: '\uD83D\uDCBB', title: 'Penyampaian konvensional', desc: 'Penyampaian perkhidmatan masih lagi secara konvensional. Usaha digitalisasi perlu dipertingkatkan.' },
    { icon: '\u2696\uFE0F', title: 'Isu integriti & akauntabiliti', desc: 'Menangani isu ini sehingga ke akar umbi. Inisiatif-inisiatif baharu yang lebih berkesan diperlukan.' },
    { icon: '\uD83D\uDCB0', title: 'Bebanan kewangan kerajaan', desc: 'Sistem saranan yang tidak berasaskan kepada produktiviti. Inisiatif baharu perlu diteroka.' },
    { icon: '\uD83C\uDF93', title: 'Modal insan kurang kompeten', desc: 'Kepimpinan organisasi tidak berkesan. Penghasilan tugas tidak memenuhi kehendak pelanggan.' },
    { icon: '\uD83C\uDFAF', title: 'Penarikan bakat terbaik', desc: 'Mewujudkan suasana kerja yang lebih fleksibel. Pembangunan kerjaya dari segi upscaling dan reskilling.' },
    { icon: '\uD83D\uDD17', title: 'Jurang kementerian & jabatan', desc: 'Mentaliti bekerja secara silo. Bajet berasaskan program kementerian dan jabatan.' },
  ]

  return (
    <div className="stagger flex flex-col gap-2.5">
      {cabaran.map((c, i) => (
        <div key={i} className="tap bg-white rounded-xl p-4 border border-rstu-red/10 shadow-sm flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-rstu-red/10 flex items-center justify-center flex-shrink-0">
            <span className="text-lg">{c.icon}</span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-bold text-sm text-gray-900">{c.title}</p>
            <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{c.desc}</p>
          </div>
          <span className="text-xs font-bold text-rstu-red/40 mt-0.5">{i + 1}</span>
        </div>
      ))}
    </div>
  )
}

function ObjektifPage() {
  const objektif = [
    { num: 1, title: 'Reformasi Perkhidmatan Awam', desc: 'Mentransformasi perkhidmatan awam agar lebih cekap, pantas dan berkesan.', icon: '\u23F1' },
    { num: 2, title: 'Reformasi Pengurusan Integriti', desc: 'Memperkukuhkan integriti melalui transformasi digital dengan perkongsian data strategik.', icon: '\u2696\uFE0F' },
    { num: 3, title: 'Reformasi Modal Insan', desc: 'Melahirkan pemimpin berdaya saing dan berfikir strategik.', icon: '\uD83D\uDC64' },
    { num: 4, title: 'Reformasi Dasar & Perkhidmatan', desc: 'Menyampaikan dasar dan perkhidmatan yang difahami, diterima dan dirasai rakyat.', icon: '\uD83D\uDCCB' },
    { num: 5, title: 'Reformasi Jentera Akar Umbi', desc: 'Membina sinergi keterangkuman penyampaian dasar kerajaan melalui pemberdayaan pemimpin tempatan.', icon: '\uD83C\uDFDB\uFE0F' },
  ]

  return (
    <div className="stagger flex flex-col gap-3">
      {/* Mission statement */}
      <div className="bg-rstu-light rounded-2xl p-4 border border-rstu-red/10">
        <p className="text-xs text-rstu-red font-bold uppercase tracking-wider mb-1">Matlamat</p>
        <p className="text-sm text-rstu-dark leading-relaxed">
          Menjadi pemacu (enabler) utama kepada pelaksanaan dasar Kerajaan Negeri melalui pembaharuan sistem penyampaian dan tadbir urus yang cekap, telus dan berimpak.
        </p>
      </div>

      {objektif.map((o) => (
        <div key={o.num} className="tap bg-white rounded-2xl p-4 border border-rstu-red/10 shadow-sm flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rstu-red to-rstu-dark flex items-center justify-center flex-shrink-0 shadow-md shadow-rstu-red/20">
            <span className="text-2xl">{o.icon}</span>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-rstu-red">{o.num}</span>
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
    'Tadbir Urus & Integriti',
    'Reformasi Penyampaian',
    'Pemecahan Budaya Silo',
    'Reformasi Aduan',
    'Modal Insan Berdaya',
    'Pemerkasaan Akar Umbi',
    'Pengukuran & Pemantauan',
    'Penilaian Berasaskan Hasil',
  ]

  return (
    <div className="stagger flex flex-col gap-4">
      {/* Framework header */}
      <div className="bg-rstu-red rounded-2xl p-5 text-center text-white shadow-lg shadow-rstu-red/20">
        <p className="text-xs uppercase tracking-widest opacity-60">Kerangka</p>
        <p className="text-3xl font-black mt-1">RSTU 2025-2027</p>
      </div>

      {/* Matlamat */}
      <div className="bg-white rounded-xl p-4 border border-rstu-red/10 shadow-sm">
        <span className="inline-block bg-rstu-red text-white text-[10px] font-bold px-2.5 py-1 rounded-full">Matlamat</span>
        <p className="text-xs text-gray-600 mt-2 leading-relaxed">
          Menjadi pemacu (enabler) utama kepada pelaksanaan dasar kerajaan melalui pembaharuan sistem penyampaian dan tadbir urus yang cekap, telus dan berimpak.
        </p>
      </div>

      {/* Nilai */}
      <div className="bg-white rounded-xl p-4 border border-rstu-red/10 shadow-sm">
        <span className="inline-block bg-rstu-red text-white text-[10px] font-bold px-2.5 py-1 rounded-full">Nilai</span>
        <div className="flex flex-wrap gap-2 mt-2">
          {['Empati', 'Holistik', 'Sinergi', 'Akauntabiliti', 'Neutraliti'].map(v => (
            <span key={v} className="text-xs bg-rstu-light text-rstu-red font-semibold px-3 py-1.5 rounded-full">{v}</span>
          ))}
        </div>
      </div>

      {/* 8 Fokus Strategik */}
      <div className="bg-white rounded-xl p-4 border border-rstu-red/10 shadow-sm">
        <span className="inline-block bg-rstu-red text-white text-[10px] font-bold px-2.5 py-1 rounded-full">8 Fokus Strategik</span>
        <div className="grid grid-cols-2 gap-2 mt-3">
          {fokus.map((f, i) => (
            <div key={i} className="bg-gradient-to-r from-rstu-red to-rstu-dark rounded-xl p-3 text-center">
              <span className="text-[11px] text-white font-semibold">{f}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col gap-2">
        <div className="border-2 border-rstu-red rounded-xl p-3 text-center">
          <span className="text-xs font-bold text-rstu-red">Strategi Keberhasilan Reformasi (SKR)</span>
        </div>
        <div className="border-2 border-rstu-red rounded-xl p-3 text-center">
          <span className="text-xs font-bold text-rstu-red">Program / Inisiatif</span>
        </div>
      </div>
    </div>
  )
}

function EHSANPage() {
  const nilai = [
    { letter: 'E', name: 'Empati', desc: 'Memahami keperluan dan situasi rakyat dengan meletakkan diri dalam keadaan mereka.', color: 'from-red-500 to-red-600' },
    { letter: 'H', name: 'Holistik', desc: 'Mempertimbangkan semua aspek dalam membuat keputusan tanpa mengenepikan sebarang faktor penting.', color: 'from-red-600 to-red-700' },
    { letter: 'S', name: 'Sinergi', desc: 'Bekerjasama merentasi agensi dan jabatan untuk mencapai hasil yang lebih baik.', color: 'from-red-700 to-red-800' },
    { letter: 'A', name: 'Akauntabiliti', desc: 'Bertanggungjawab ke atas setiap tindakan dan keputusan serta bersedia menerima maklum balas.', color: 'from-red-800 to-red-900' },
    { letter: 'N', name: 'Neutraliti', desc: 'Bersikap adil dan tidak berat sebelah dalam melaksanakan tanggungjawab dan membuat keputusan.', color: 'from-red-900 to-red-950' },
  ]

  return (
    <div className="stagger flex flex-col gap-3">
      <div className="text-center py-2">
        <h2 className="text-4xl font-black tracking-[0.2em] text-gray-900">E.H.S.A.N</h2>
        <p className="text-xs text-gray-500 mt-1">Nilai Teras Reformasi RSTU</p>
      </div>

      {nilai.map((n) => (
        <div key={n.letter} className={`tap bg-gradient-to-r ${n.color} rounded-2xl p-4 text-white flex items-start gap-4 shadow-md`}>
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
    { letter: 'H', name: 'Hijrah Tatakelola', desc: 'Berani berhijrah menurusi kepekaan dengan tuntutan perubahan semasa, menjalankan tugas dengan rapi dan cekap.' },
    { letter: 'E', name: 'Empati Rakyat', desc: 'Mendengar dan memahami permasalahan rakyat, sentiasa prihatin dan menyayangi rakyat.' },
    { letter: 'M', name: 'Minda Pekin', desc: 'Sentiasa bersikap cermat dalam membelanjakan dana awam, sentiasa kreatif dan inovatif, minda "value for money".' },
    { letter: 'A', name: 'Apresiasi Inovasi', desc: 'Sentiasa menyokong dan menghargai perkembangan idea-idea baharu bagi memperkasakan Perkhidmatan Awam.' },
    { letter: 'T', name: 'Telus Tadbiran', desc: 'Menyematkan nilai-nilai integriti dalam menjalankan tugas seharian, membudayakan amalan sonsang.' },
  ]

  return (
    <div className="stagger flex flex-col gap-3">
      <div className="text-center py-2">
        <h2 className="text-4xl font-black tracking-[0.15em] text-gray-900">H.E.M.A.T</h2>
        <p className="text-xs text-gray-500 mt-1">Nilai-Nilai Penjawat Awam</p>
      </div>

      {hemat.map((h) => (
        <div key={h.letter} className="tap bg-white rounded-2xl p-4 border-2 border-rstu-red/10 shadow-sm flex items-start gap-3">
          <div className="w-11 h-11 bg-rstu-red rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm shadow-rstu-red/20">
            <span className="text-xl font-black text-white">{h.letter}</span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-bold text-sm text-rstu-red">{h.name}</p>
            <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{h.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

const pages = {
  ekonomi: { title: 'Ekonomi Selangor', component: EkonomiPage },
  cabaran: { title: '7 Cabaran Utama', component: CabaranPage },
  objektif: { title: '5 Objektif RSTU', component: ObjektifPage },
  kerangka: { title: 'Kerangka RSTU', component: KerangkaPage },
  ehsan: { title: 'Nilai E.H.S.A.N', component: EHSANPage },
  hemat: { title: 'Nilai H.E.M.A.T', component: HEMATPage },
}

export default function RSTUDetail() {
  const { topic } = useParams()
  const page = pages[topic]

  if (!page) return <div className="h-full flex items-center justify-center">Not found</div>

  const Component = page.component

  return (
    <div className="h-full flex flex-col bg-rstu-strong">
      {/* Header */}
      <div className="px-6 pt-6 pb-2 flex items-center justify-between flex-shrink-0">
        <BackButton to="/rstu" />
        <h2 className="text-sm font-bold text-gray-900">{page.title}</h2>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto scroll-hide px-6 pb-4 page-enter">
        <Component />
      </div>

      <Footer />
    </div>
  )
}
