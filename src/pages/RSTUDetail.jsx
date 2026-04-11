import { useParams } from 'react-router-dom'
import { BackButton, Footer, SectionLabel } from '../components/SlideShow'
import {
  IconChart,
  IconWarning,
  IconTarget,
  IconLayers,
  IconHeart,
  IconStar,
  IconCheck,
  IconGlobe,
  IconBuilding,
  IconShield,
  IconPeople,
  IconCompass,
  IconGrid,
  IconFlag,
  IconClipboard,
  IconHierarchy,
} from '../components/Icons'
import acronymsData from '../data/acronyms.json'

/* Acronym lookup — single source of truth is src/data/acronyms.json */
const ACRONYM_MAP = Object.fromEntries(
  acronymsData.acronyms.map((a) => [a.acronym, a.longForm])
)
const expandAcronym = (short) => ACRONYM_MAP[short] || null

function StatCard({ value, label, gold }) {
  return (
    <div className={`rounded-2xl p-4 text-center ${gold ? 'bg-gradient-to-br from-rstu-gold to-rstu-yellow text-white' : 'bg-white border border-gray-100 shadow-sm'}`}>
      <p className={`text-2xl font-black ${gold ? '' : 'text-rstu-red'}`}>{value}</p>
      <p className={`text-[10px] mt-0.5 ${gold ? 'opacity-80' : 'text-gray-500'}`}>{label}</p>
    </div>
  )
}

/* =========================================================
   EKONOMI PAGE — Selangor KDNK + Sasaran Hasil
   Source: SLAID RSTU SS.pdf pages 2-3
   ========================================================= */
function EkonomiPage() {
  return (
    <div className="stagger flex flex-col gap-4">
      <div className="bg-gradient-to-br from-rstu-red to-rstu-dark rounded-2xl p-5 text-center text-white shadow-lg shadow-rstu-red/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-rstu-gold/10 rounded-bl-full" />
        <p className="text-[10px] uppercase tracking-[0.2em] opacity-50">Memacu Kemakmuran</p>
        <p className="text-2xl font-black mt-1">Ekonomi <span className="text-rstu-gold">Selangor</span></p>
        <p className="text-[11px] mt-2 opacity-75">Memacu Kemakmuran Ekonomi Negara</p>
      </div>

      {/* KDNK hero */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
        <SectionLabel>Sumbangan KDNK 2024</SectionLabel>
        <p className="text-7xl font-black text-rstu-gold mt-3 gold-shimmer">26.2%</p>
        <p className="text-sm text-gray-600 mt-2">daripada KDNK keseluruhan Malaysia</p>
        <div className="inline-flex items-center gap-1.5 bg-rstu-cream text-rstu-gold rounded-full px-3 py-1 mt-3 text-xs font-semibold">
          <IconStar size={12} />
          Sumbangan tertinggi dari semua negeri
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3">
        <StatCard value="RM 432.1B" label="Nilai Sumbangan KDNK 2024" gold />
        <StatCard value="RM 3B" label="Sasaran Hasil Negeri 2025" />
      </div>

      {/* Pertumbuhan Berterusan */}
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

      {/* Sasaran Hasil */}
      <div className="bg-rstu-cream rounded-2xl p-4 border border-rstu-gold/15">
        <div className="flex items-center gap-2 mb-1.5">
          <IconTarget size={14} className="text-rstu-gold" />
          <p className="text-[10px] text-rstu-gold font-bold uppercase tracking-widest">Sasaran Hasil Negeri Selangor</p>
        </div>
        <p className="text-sm text-rstu-dark leading-relaxed">
          Prestasi hasil Negeri Selangor disasarkan mencapai <span className="font-bold text-rstu-gold">RM 3 Bilion</span> pada tahun 2025, kesinambungan pertumbuhan sejak 2016.
        </p>
      </div>

      <div className="bg-white border border-gray-100 rounded-xl px-3 py-2 text-center">
        <p className="text-[10px] text-gray-400 italic">Sumber: SLAID RSTU SS (halaman 2-3)</p>
      </div>
    </div>
  )
}

/* =========================================================
   KERANGKA PAGE — Framework overview + Punca Kuasa
   ========================================================= */
function KerangkaPage() {
  const fokus = [
    'Tadbir Urus & Integriti', 'Reformasi Penyampaian',
    'Pemecahan Budaya Silo', 'Reformasi Aduan',
    'Modal Insan Berdaya', 'Pemerkasaan Akar Umbi',
    'Pengukuran & Pemantauan', 'Penilaian Berasaskan Hasil',
  ]

  const asItem = (short, longOverride) => ({
    short,
    long: longOverride ?? expandAcronym(short),
  })

  const puncaKuasa = [
    {
      level: 'Peringkat Persekutuan',
      items: [asItem('PACU'), asItem('MPC'), asItem('JPA')],
      gold: true,
    },
    {
      level: 'Pelaksana Pusat',
      items: [asItem('KSN'), asItem('KPPA'), asItem('JPA')],
      gold: false,
    },
    {
      level: 'Peringkat Negeri Selangor',
      items: [
        asItem('SUK Selangor'),
        { short: 'Unit RSTU', long: 'Cawangan Pengurusan Strategik' },
      ],
      gold: true,
    },
    {
      level: 'Produk Reformasi',
      items: [
        asItem('ARPA'),
        asItem('RKB'),
        asItem('ILTIZAM'),
        asItem('H.E.M.A.T'),
        asItem('RSTU'),
      ],
      gold: false,
    },
  ]

  return (
    <div className="stagger flex flex-col gap-4">
      <div className="bg-gradient-to-br from-rstu-red to-rstu-dark rounded-2xl p-5 text-center text-white shadow-lg shadow-rstu-red/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-rstu-gold/10 rounded-bl-full" />
        <p className="text-[10px] uppercase tracking-[0.2em] opacity-50">Kerangka</p>
        <p className="text-3xl font-black mt-1">RSTU <span className="text-rstu-gold">2025-2027</span></p>
        <p className="text-[11px] mt-2 opacity-75 italic">"Reformasi Satu Kemestian"</p>
      </div>

      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
        <SectionLabel>Matlamat</SectionLabel>
        <p className="text-xs text-gray-600 mt-2 leading-relaxed">
          Menjadi pemacu (<span className="italic text-rstu-gold font-semibold">enabler</span>) utama kepada pelaksanaan dasar Kerajaan Negeri dan penyelarasan dasar Kerajaan Persekutuan melalui pembaharuan sistem penyampaian dan tadbir urus yang cekap, telus dan berimpak.
        </p>
      </div>

      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
        <SectionLabel>Nilai E.H.S.A.N</SectionLabel>
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
            <div key={i} className={`rounded-xl p-2.5 text-center ${
              i % 3 === 0 ? 'bg-gradient-to-r from-rstu-gold to-rstu-yellow' : 'bg-gradient-to-r from-rstu-red to-rstu-dark'
            }`}>
              <span className="text-[10px] text-white font-semibold leading-tight">{f}</span>
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

      {/* Punca Kuasa */}
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <IconHierarchy size={16} className="text-rstu-gold" />
          <SectionLabel>Punca Kuasa Pelaksanaan</SectionLabel>
        </div>
        <div className="flex flex-col gap-2 mt-1">
          {puncaKuasa.map((lvl, i) => (
            <div key={i} className="flex flex-col">
              <p className={`text-[10px] font-bold uppercase tracking-wider mb-1.5 ${lvl.gold ? 'text-rstu-gold' : 'text-rstu-red'}`}>
                {lvl.level}
              </p>
              <div className="flex flex-col gap-1.5">
                {lvl.items.map((item) => (
                  <div key={item.short} className={`text-[11px] px-2.5 py-1 rounded-lg ${
                    lvl.gold
                      ? 'bg-rstu-cream border border-rstu-gold/20'
                      : 'bg-rstu-light border border-rstu-red/20'
                  }`}>
                    <span className={`font-bold ${lvl.gold ? 'text-rstu-gold' : 'text-rstu-red'}`}>{item.short}</span>
                    {item.long && <span className="text-gray-500 ml-1.5">— {item.long}</span>}
                  </div>
                ))}
              </div>
              {i < puncaKuasa.length - 1 && (
                <div className="flex justify-center my-1.5">
                  <div className="w-px h-3 bg-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* =========================================================
   CABARAN PAGE — Cabaran Selangor (AS-IS) + Kenapa RSTU?
   ========================================================= */
function CabaranPage() {
  const cabaran = [
    { icon: IconShield, title: 'Tadbir Urus', desc: 'Kelemahan tadbir urus dan kesedaran integriti yang perlu dipertingkatkan.' },
    { icon: IconGlobe, title: 'Digitalisasi', desc: 'Transformasi digital yang perlahan dengan perkongsian data yang terbatas.' },
    { icon: IconLayers, title: 'Budaya "Silo"', desc: 'Budaya kerja silo dengan koordinasi antara jabatan yang terhad.' },
    { icon: IconChart, title: 'Output vs Outcome', desc: 'Pengurusan dan penilaian projek berasaskan output, bukan outcome.' },
    { icon: IconPeople, title: 'Aduan Rakyat', desc: 'Aduan rakyat dan pemegang taruh yang berulang.' },
    { icon: IconStar, title: 'Imej & Kepercayaan', desc: 'Imej perkhidmatan awam dan kepimpinan tempatan yang kurang berkesan.' },
  ]

  const kenapa = [
    'Meningkatkan mutu penyampaian perkhidmatan Kerajaan kepada rakyat dengan efisien dan berkesan.',
    'Menyelaras amalan terbaik di antara Jabatan / Agensi bagi meningkatkan keberhasilan.',
    'Meningkatkan kecekapan proses sedia ada melalui tindakan proaktif dan inovatif (tindakan penambahbaikan).',
    'Mengoptimumkan penggunaan sumber sedia ada (dari segi sumber manusia, kewangan dll).',
  ]

  return (
    <div className="stagger flex flex-col gap-4">
      <div className="bg-gradient-to-br from-rstu-red to-rstu-dark rounded-2xl p-5 text-center text-white shadow-lg shadow-rstu-red/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-rstu-gold/10 rounded-bl-full" />
        <p className="text-[10px] uppercase tracking-[0.2em] opacity-50">Status Semasa (AS-IS)</p>
        <p className="text-2xl font-black mt-1">Cabaran Selangor</p>
        <p className="text-[11px] mt-2 opacity-75">Aspirasi & Hala Tuju Kerajaan</p>
      </div>

      {/* 6 Cabaran */}
      {cabaran.map((c, i) => (
        <div key={i} className="tap bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex items-start gap-3">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
            i % 2 === 0 ? 'bg-rstu-cream text-rstu-gold' : 'bg-rstu-light text-rstu-red'
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

      {/* Kenapa RSTU? — Slide 14 */}
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <IconTarget size={16} className="text-rstu-gold" />
          <SectionLabel>Kenapa RSTU?</SectionLabel>
        </div>
        <div className="flex flex-col gap-2.5">
          {kenapa.map((k, i) => (
            <div key={i} className={`flex items-start gap-2.5 rounded-xl p-3 border ${
              i % 2 === 0 ? 'bg-rstu-cream/40 border-rstu-gold/15' : 'bg-rstu-light/40 border-rstu-red/10'
            }`}>
              <span className={`text-sm font-black flex-shrink-0 ${
                i % 2 === 0 ? 'text-rstu-gold' : 'text-rstu-red'
              }`}>
                {i + 1}.
              </span>
              <p className="text-xs text-gray-700 leading-relaxed">{k}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* =========================================================
   OBJEKTIF PAGE — 5 Objektif Reformasi
   ========================================================= */
function ObjektifPage() {
  const objektif = [
    { num: 1, title: 'Reformasi Perkhidmatan Awam', desc: 'Mentransformasi perkhidmatan awam agar lebih cekap, pantas dan berkesan.', Icon: IconGlobe, gold: true },
    { num: 2, title: 'Reformasi Pengurusan Integriti', desc: 'Transformasi digital yang perlahan dengan perkongsian data terbatas.', Icon: IconShield },
    { num: 3, title: 'Reformasi Modal Insan', desc: 'Melahirkan pemimpin berdaya saing dan berfikir strategik.', Icon: IconPeople, gold: true },
    { num: 4, title: 'Reformasi Dasar & Perkhidmatan', desc: 'Menyampaikan dasar dan perkhidmatan yang difahami, diterima dan dirasai rakyat.', Icon: IconTarget },
    { num: 5, title: 'Reformasi Jentera Akar Umbi', desc: 'Membina sinergi keterangkuman penyampaian dasar kerajaan melalui pemberdayaan pemimpin tempatan.', Icon: IconLayers, gold: true },
  ]

  return (
    <div className="stagger flex flex-col gap-3">
      <div className="bg-rstu-cream rounded-2xl p-4 border border-rstu-gold/15">
        <div className="flex items-center gap-2 mb-1.5">
          <IconTarget size={14} className="text-rstu-gold" />
          <p className="text-[10px] text-rstu-gold font-bold uppercase tracking-widest">Matlamat</p>
        </div>
        <p className="text-sm text-rstu-dark leading-relaxed">
          Menjadi pemacu (<span className="italic font-semibold">enabler</span>) utama kepada pelaksanaan dasar Kerajaan Negeri dan penyelarasan dasar Kerajaan Persekutuan melalui pembaharuan sistem penyampaian dan tadbir urus yang cekap, telus dan berimpak.
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

/* =========================================================
   FOKUS PAGE — 8 Fokus Strategik (detailed FS 1-8)
   ========================================================= */
function FokusPage() {
  const fokus = [
    {
      num: 'FS 1',
      title: 'Reformasi Sistem Penyampaian Perkhidmatan',
      tujuan: 'Melalui pembangunan strategi komunikasi dasar bersepadu dan berkesan. Memastikan dasar kerajaan difahami dan dirasai impaknya oleh rakyat serta meningkatkan kecekapan dan keberkesanan perkhidmatan awam secara keseluruhan.',
      inisiatif: ['Strategi komunikasi dasar bersepadu', 'Indeks kualiti penyampaian perkhidmatan', 'Pusat sehenti khidmat kerajaan', 'Ease of Doing Business'],
      gold: true,
    },
    {
      num: 'FS 2',
      title: 'Pengukuhan Tadbir Urus & Integriti',
      tujuan: 'Membudayakan integriti dalam pentadbiran dan mengurangkan risiko penyelewengan dan salah laku.',
      inisiatif: ['Sistem Pengurusan Risiko Rasuah', 'Pensijilan ISO 37001:2025', 'Pelan Anti-Rasuah Organisasi', 'Liabiliti Korporat (S.17A SPRM)', 'Indeks Integriti Negeri'],
    },
    {
      num: 'FS 3',
      title: 'Pemecahan Budaya "Silo" & Koordinasi',
      tujuan: 'Menggalakkan kerjasama erat antara jabatan dan agensi bagi meningkatkan kecekapan penggunaan sumber.',
      inisiatif: ['Jawatankuasa koordinasi antara agensi', 'Platform perkongsian data merentas agensi', 'Projek kerjasama merentas jabatan'],
      gold: true,
    },
    {
      num: 'FS 4',
      title: 'Reformasi Pengurusan Aduan',
      tujuan: 'Menangani setiap isu dengan lebih strategik menggunakan kaedah design-thinking secara holistik dan empati.',
      inisiatif: ['Complaint Analysis Lab', 'Analisis sentimen & sensitiviti aduan', 'Pendekatan design-thinking'],
    },
    {
      num: 'FS 5',
      title: 'Pemerkasaan Gaya Pemikiran Kritikal & Kepimpinan',
      tujuan: 'Fokus kepada penerapan gaya pemikiran kritikal (critical thinking) dalam kalangan Ketua Jabatan dan penjawat awam. Membolehkan pemimpin perkhidmatan awam mengenal pasti masalah dengan lebih mendalam, menilai pelbagai sudut pandang, dan merangka penyelesaian yang berimpak tinggi.',
      inisiatif: [],
      gold: true,
    },
    {
      num: 'FS 6',
      title: 'Pemerkasaan Kepimpinan Pentadbiran Tempatan',
      tujuan: 'Memperkukuh keupayaan kepimpinan Penghulu, Ahli Majlis, Ketua Kampung dan pemimpin komuniti setempat.',
      inisiatif: ['Semakan fungsi & tanggungjawab', 'Latihan berstruktur komunikasi dasar', 'Sistem sokongan pentadbiran efisien'],
    },
    {
      num: 'FS 7',
      title: 'Pengukuran & Pemantauan Keberkesanan',
      tujuan: 'Membina Indeks Penyampaian Kerajaan Negeri Selangor (diterajui oleh SIAP) untuk pemantauan berterusan.',
      inisiatif: ['Papan pemuka digital', 'Sistem amaran awal & pengurusan risiko', 'KPI berimpak', 'Panel pemantau bebas'],
      gold: true,
    },
    {
      num: 'FS 8',
      title: 'Penilaian Berasaskan Hasil (Outcome-Based)',
      tujuan: 'Memastikan setiap program memberi nilai tambah yang jelas kepada rakyat berasaskan output, outcome dan impak.',
      inisiatif: ['Outcome-based evaluation', 'Penilaian sistematik program', 'Penyelarasan keutamaan strategik negeri'],
    },
  ]

  return (
    <div className="stagger flex flex-col gap-3">
      <div className="bg-rstu-cream rounded-2xl p-4 border border-rstu-gold/15">
        <div className="flex items-center gap-2 mb-1.5">
          <IconCompass size={14} className="text-rstu-gold" />
          <p className="text-[10px] text-rstu-gold font-bold uppercase tracking-widest">8 Fokus Strategik RSTU</p>
        </div>
        <p className="text-sm text-rstu-dark leading-relaxed">
          Lapan fokus strategik yang menjadi tunjang pelaksanaan reformasi sistem penyampaian dan tadbir urus di Negeri Selangor.
        </p>
      </div>

      {fokus.map((f) => (
        <div key={f.num} className="tap bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
          <div className="flex items-start gap-3 mb-2">
            <div className={`px-2.5 py-1 rounded-lg flex-shrink-0 ${
              f.gold
                ? 'bg-gradient-to-br from-rstu-gold to-rstu-yellow shadow-sm shadow-rstu-gold/20'
                : 'bg-gradient-to-br from-rstu-red to-rstu-dark shadow-sm shadow-rstu-red/20'
            }`}>
              <span className="text-[11px] font-black text-white tracking-wide">{f.num}</span>
            </div>
            <p className={`font-bold text-sm leading-tight flex-1 ${f.gold ? 'text-rstu-gold' : 'text-rstu-red'}`}>
              {f.title}
            </p>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed mb-2.5">{f.tujuan}</p>
          {f.inisiatif.length > 0 && (
            <div className="border-t border-gray-100 pt-2.5">
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-1.5">Inisiatif</p>
              <div className="flex flex-wrap gap-1.5">
                {f.inisiatif.map((item, idx) => (
                  <span key={idx} className={`text-[10px] font-semibold px-2 py-0.5 rounded-md ${
                    f.gold ? 'bg-rstu-cream text-rstu-gold' : 'bg-rstu-light text-rstu-red'
                  }`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

/* =========================================================
   ELEMEN PAGE — 4 Dimensi Reformasi
   ========================================================= */
function ElemenPage() {
  const dimensi = [
    {
      num: 1,
      title: 'Struktur & Institusi',
      Icon: IconBuilding,
      gold: true,
      elements: [
        { label: 'A', name: 'Penstrukturan Semula Organisasi', desc: 'Menyelaraskan, menggabungkan, atau mewujudkan agensi untuk mengelakkan pertindihan dan meningkatkan sinergi (whole-of-government approach).' },
        { label: 'B', name: 'Penggubalan Dasar & Perundangan', desc: 'Meminda undang-undang, peraturan, dan dasar untuk menyokong amalan tadbir urus yang lebih baik dan telus.' },
      ],
    },
    {
      num: 2,
      title: 'Proses & Prosedur',
      Icon: IconGlobe,
      gold: false,
      elements: [
        { label: 'A', name: 'Digitalisasi & Pendigitalan', desc: 'Menggunakan teknologi (e-kerajaan, AI, data raya) untuk mengautomasikan perkhidmatan dan memudahkan interaksi rakyat-kerajaan.' },
        { label: 'B', name: 'Pengurusan Prestasi & Kualiti', desc: 'Melaksanakan metrik prestasi yang jelas (KPI), pemantauan, dan mekanisme maklum balas.' },
        { label: 'C', name: 'Memudahkan Proses', desc: 'Mengkaji dan menyelaraskan prosedur kerja (SOP) untuk mengurangkan birokrasi, masa menunggu, dan keperluan dokumentasi.' },
      ],
    },
    {
      num: 3,
      title: 'Sumber Manusia',
      subtitle: 'Modal Insan',
      Icon: IconPeople,
      gold: true,
      elements: [
        { label: 'A', name: 'Pembangunan Kompetensi & Kemahiran', desc: 'Latihan berterusan, peningkatan kemahiran, dan pembangunan kepimpinan untuk memastikan kakitangan awam relevan dengan cabaran semasa.' },
        { label: 'B', name: 'Sistem Pengambilan & Ganjaran Berasaskan Merit', desc: 'Memastikan pengambilan, kenaikan pangkat, dan ganjaran adalah berdasarkan prestasi dan meritokrasi untuk menarik dan mengekalkan bakat.' },
      ],
    },
    {
      num: 4,
      title: 'Budaya & Nilai',
      Icon: IconHeart,
      gold: false,
      elements: [
        { label: 'A', name: 'Ketelusan & Kebertanggungjawaban', desc: 'Meningkatkan keterbukaan maklumat, pelaporan yang jujur, dan mekanisme mempertanggungjawabkan pegawai terhadap keputusan dan tindakan.' },
        { label: 'B', name: 'Anti-Rasuah & Integriti', desc: 'Penguatkuasaan etika kerja yang tinggi, pengisytiharan aset, dan tindakan tegas terhadap salah laku dan rasuah.' },
      ],
    },
  ]

  return (
    <div className="stagger flex flex-col gap-4">
      <div className="bg-rstu-cream rounded-2xl p-4 border border-rstu-gold/15">
        <div className="flex items-center gap-2 mb-1.5">
          <IconGrid size={14} className="text-rstu-gold" />
          <p className="text-[10px] text-rstu-gold font-bold uppercase tracking-widest">4 Elemen RSTU</p>
        </div>
        <p className="text-sm text-rstu-dark leading-relaxed">
          Reformasi yang berkesan biasanya berpusat pada empat dimensi utama yang saling berkaitan.
        </p>
      </div>

      {dimensi.map((d) => (
        <div key={d.num} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
          <div className="flex items-start gap-3 mb-3">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm ${
              d.gold
                ? 'bg-gradient-to-br from-rstu-gold to-rstu-yellow shadow-rstu-gold/20'
                : 'bg-gradient-to-br from-rstu-red to-rstu-dark shadow-rstu-red/20'
            }`}>
              <d.Icon size={22} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2">
                <span className={`text-xl font-black ${d.gold ? 'text-rstu-gold' : 'text-rstu-red'}`}>{d.num}.</span>
                <p className="font-bold text-sm text-gray-900 leading-tight">{d.title}</p>
              </div>
              {d.subtitle && <p className="text-[10px] text-gray-400 italic">({d.subtitle})</p>}
            </div>
          </div>
          <div className="flex flex-col gap-2 pl-1">
            {d.elements.map((e) => (
              <div key={e.label} className={`rounded-xl p-3 border ${
                d.gold ? 'bg-rstu-cream/40 border-rstu-gold/15' : 'bg-rstu-light/40 border-rstu-red/10'
              }`}>
                <div className="flex items-start gap-2">
                  <span className={`text-[10px] font-black px-1.5 py-0.5 rounded flex-shrink-0 ${
                    d.gold ? 'bg-rstu-gold text-white' : 'bg-rstu-red text-white'
                  }`}>
                    {e.label}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className={`font-bold text-xs ${d.gold ? 'text-rstu-gold' : 'text-rstu-red'}`}>{e.name}</p>
                    <p className="text-[11px] text-gray-600 mt-1 leading-relaxed">{e.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

/* =========================================================
   EHSAN PAGE — Nilai Teras Reformasi
   ========================================================= */
function EHSANPage() {
  const nilai = [
    { letter: 'E', name: 'Empati', desc: 'Memahami keperluan dan situasi rakyat dengan meletakkan diri dalam keadaan mereka.', gold: true },
    { letter: 'H', name: 'Holistik', desc: 'Mempertimbangkan semua aspek dalam membuat keputusan tanpa mengenepikan sebarang faktor penting.' },
    { letter: 'S', name: 'Sinergi', desc: 'Bekerjasama merentasi agensi dan jabatan untuk mencapai hasil yang lebih baik daripada bekerja secara bersendirian.', gold: true },
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

/* =========================================================
   HEMAT PAGE — Nilai-Nilai Penjawat Awam
   Source: SLAID RSTU SS.pdf page 9 (Sumber: KPPA)
   ========================================================= */
function HEMATPage() {
  const hemat = [
    {
      letter: 'H',
      name: 'Hijrah Tatakelola',
      desc: 'Berani berhijrah menerusi kepekaan dengan tuntutan perubahan semasa, menjalankan tugas dengan rapi, cekap dalam pelaksanaan tugas, dan mengamalkan komunikasi secara efisien.',
      gold: false,
    },
    {
      letter: 'E',
      name: 'Empati Rakyat',
      desc: 'Mendengar dan memahami permasalahan rakyat, sentiasa prihatin dan menyayangi rakyat, serta menumpukan kepada pelaksanaan pelbagai inisiatif yang dapat memberikan kesejahteraan kepada rakyat.',
      gold: true,
    },
    {
      letter: 'M',
      name: 'Minda Pekin',
      desc: 'Sentiasa bersikap cermat dalam membelanjakan dana awam, sentiasa kreatif dan inovatif dalam memanfaatkan sumber-sumber sedia ada, mempunyai minda "value for money", dan menjalankan tugas secara kerjasama strategik antara organisasi.',
      gold: false,
    },
    {
      letter: 'A',
      name: 'Apresiasi Inovasi',
      desc: 'Sentiasa menyokong dan menghargai perkembangan idea-idea baharu bagi memperkasakan Perkhidmatan Awam, meneroka pelbagai inisiatif baharu yang bersesuaian dengan kehendak semasa, dan berusaha untuk memartabatkan inisiatif digital baharu yang efisien.',
      gold: true,
    },
    {
      letter: 'T',
      name: 'Telus Tadbiran',
      desc: 'Menyematkan nilai-nilai integriti dalam menjalankan tugas seharian, sentiasa membudayakan amalan semak dan imbang bagi melancarkan pelaksanaan tugas, dan meraikan pandangan luar yang dapat memantapkan lagi kualiti kerja yang dijalankan.',
      gold: false,
    },
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

      <div className="bg-rstu-cream border border-rstu-gold/15 rounded-xl px-3 py-2 mt-1 text-center">
        <p className="text-[10px] text-rstu-dark italic">Sumber: Ketua Pengarah Perkhidmatan Awam (KPPA)</p>
      </div>
    </div>
  )
}

/* =========================================================
   IKRAR PAGE — Hala Tuju, 5 Ikrar, Budaya Kerja Baharu
   ========================================================= */
function IkrarPage() {
  const halaTuju = [
    { text: 'Adaptasi teknologi baharu dalam kerja komunikasi', tag: 'Beating the Curve' },
    { text: 'Continuous learning dan peningkatan kemahiran', tag: 'Solution Based' },
    { text: 'Bekerja sebagai satu pasukan tanpa budaya silo', tag: 'People Centered' },
    { text: 'Embrace change dan jadilah agen perubahan', tag: 'Sustainability Driven' },
    { text: 'Kekalkan integriti dalam semua tindakan', tag: 'Integrity Anchored' },
  ]

  const ikrar = [
    { num: 1, word: 'Menyelesai', tag: 'Solution Based', gold: true },
    { num: 2, word: 'Mendahului', tag: 'Beating the Curve' },
    { num: 3, word: 'Membumi', tag: 'People Centered', gold: true },
    { num: 4, word: 'Beramanah', tag: 'Integrity Anchored' },
    { num: 5, word: 'Berkekalan', tag: 'Sustainability Driven', gold: true },
  ]

  const budaya = [
    { word: 'Transparency', desc: 'dalam semua komunikasi', Icon: IconGlobe },
    { word: 'Accountability', desc: 'untuk setiap tindakan dan keputusan', Icon: IconShield },
    { word: 'Responsiveness', desc: 'kepada keperluan dan keluhan rakyat', Icon: IconHeart },
    { word: 'Innovation', desc: 'dalam pendekatan dan kaedah kerja', Icon: IconStar },
  ]

  return (
    <div className="stagger flex flex-col gap-4">
      {/* Hala Tuju & Reformasi */}
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <IconCompass size={16} className="text-rstu-gold" />
          <SectionLabel>Hala Tuju & Reformasi</SectionLabel>
        </div>
        <div className="flex flex-col gap-2">
          {halaTuju.map((h, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                i % 2 === 0 ? 'bg-rstu-gold/15 text-rstu-gold' : 'bg-rstu-red/10 text-rstu-red'
              }`}>
                <IconCheck size={12} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-700 leading-snug">
                  {h.text} <span className={`italic font-semibold ${i % 2 === 0 ? 'text-rstu-gold' : 'text-rstu-red'}`}>({h.tag})</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className="bg-gradient-to-r from-rstu-red to-rstu-dark rounded-full px-5 py-3 text-center shadow-md shadow-rstu-red/20">
        <p className="text-xs text-white font-semibold italic leading-relaxed">
          "Perubahan sebenar lahir daripada perubahan sikap"
        </p>
      </div>

      {/* 5 Ikrar */}
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <IconFlag size={16} className="text-rstu-gold" />
          <SectionLabel>5 Ikrar RSTU</SectionLabel>
        </div>
        <div className="flex flex-col gap-2">
          {ikrar.map((k) => (
            <div key={k.num} className={`tap rounded-xl p-3 flex items-center gap-3 shadow-sm ${
              k.gold
                ? 'bg-gradient-to-r from-rstu-gold to-rstu-yellow text-white'
                : 'bg-gradient-to-r from-rstu-red to-rstu-dark text-white'
            }`}>
              <span className="text-2xl font-black opacity-80">{k.num}</span>
              <div className="flex-1 min-w-0">
                <p className="font-black text-base leading-tight">{k.word}</p>
                <p className="text-[10px] italic opacity-80">{k.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-rstu-cream border border-rstu-gold/20 rounded-2xl px-4 py-3 text-center">
        <p className="text-[11px] text-rstu-dark italic leading-relaxed">
          "Perkhidmatan awam yang berwibawa tidak boleh berdiri atas sandiwara"
        </p>
      </div>

      {/* Budaya Kerja Baharu */}
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <IconStar size={16} className="text-rstu-gold" />
          <SectionLabel>Budaya Kerja Baharu</SectionLabel>
        </div>
        <p className="text-[11px] text-gray-500 mb-3">Mari bersama kita membina budaya kerja baharu</p>
        <div className="flex flex-col gap-2">
          {budaya.map((b, i) => (
            <div key={i} className="flex items-center gap-3 bg-rstu-cream/40 rounded-xl p-2.5 border border-rstu-gold/10">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rstu-gold to-rstu-yellow flex items-center justify-center flex-shrink-0">
                <b.Icon size={16} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-bold text-rstu-gold">{b.word}</span>
                <span className="text-xs text-gray-600"> {b.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-rstu-red to-rstu-dark rounded-2xl px-5 py-3.5 text-center shadow-md shadow-rstu-red/20">
        <p className="text-[11px] text-white font-semibold italic leading-relaxed">
          "Perubahan sebenar lahir daripada perubahan sikap. Jika kita tidak ubah cara bekerja, kita tidak akan dapat memenuhi ekspektasi pelanggan"
        </p>
      </div>
    </div>
  )
}

/* =========================================================
   INDEKS PAGE — 4 Indeks Pengukuran Utama
   ========================================================= */
function IndeksPage() {
  const indeks = [
    {
      num: 1,
      title: 'Indeks Kualiti Perkhidmatan',
      desc: 'Pengukuran keberkesanan sistem penyampaian perkhidmatan kepada rakyat.',
      Icon: IconTarget,
      gold: true,
    },
    {
      num: 2,
      title: 'Indeks Integriti',
      desc: 'Tahap amanah, kejujuran dan keberkesanan dalam pentadbiran.',
      Icon: IconShield,
      gold: false,
    },
    {
      num: 3,
      title: 'Indeks Kepercayaan',
      desc: 'Kepercayaan rakyat terhadap perkhidmatan kerajaan.',
      Icon: IconHeart,
      gold: true,
    },
    {
      num: 4,
      title: 'Indeks Governan',
      desc: 'Kualiti tadbir urus dan pembuatan keputusan.',
      Icon: IconLayers,
      gold: false,
    },
  ]

  return (
    <div className="stagger flex flex-col gap-4">
      <div className="bg-gradient-to-br from-rstu-red to-rstu-dark rounded-2xl p-5 text-center text-white shadow-lg shadow-rstu-red/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-rstu-gold/10 rounded-bl-full" />
        <p className="text-[10px] uppercase tracking-[0.2em] opacity-50">Empat Indeks Pengukuran</p>
        <p className="text-2xl font-black mt-1">Pengukuran <span className="text-rstu-gold">Utama</span></p>
        <p className="text-[11px] mt-2 opacity-75 italic">"Setiap tindakan kita diukur melalui empat indeks utama"</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {indeks.map((idx) => (
          <div key={idx.num} className={`tap rounded-2xl p-4 shadow-md flex flex-col ${
            idx.gold
              ? 'bg-gradient-to-br from-rstu-gold to-rstu-yellow text-white shadow-rstu-gold/20'
              : 'bg-gradient-to-br from-rstu-red to-rstu-dark text-white shadow-rstu-red/20'
          }`}>
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-3 backdrop-blur-sm">
              <idx.Icon size={20} className="text-white" />
            </div>
            <p className="text-3xl font-black opacity-80 leading-none">{idx.num}</p>
            <p className="font-bold text-sm mt-2 leading-tight">{idx.title}</p>
            <p className="text-[10px] opacity-80 mt-1.5 leading-relaxed">{idx.desc}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

/* =========================================================
   STATUS PAGE — ARPA 2025, 2026, Projek & Cadangan
   ========================================================= */
function StatusPage() {
  const projek2026 = [
    {
      num: 1,
      code: 'SPKB',
      name: 'Sistem Penguatkuasaan Bersepadu (SPKB)',
      utama: 'Majlis Perbandaran Hulu Selangor',
      pelaksana: ['Majlis Perbandaran Kuala Selangor', 'Majlis Daerah Sabak Bernam'],
      tier: 'PBT',
      gold: true,
    },
    {
      num: 2,
      code: 'MyMR',
      name: 'MyMR',
      utama: 'Majlis Perbandaran Sepang',
      pelaksana: ['Majlis Perbandaran Kuala Langat', 'Majlis Perbandaran Selayang', 'Majlis Perbandaran Hulu Selangor'],
      tier: 'PBT',
    },
    {
      num: 3,
      code: 'ABT',
      name: 'ABT Tracker',
      utama: 'Pejabat Daerah Dan Tanah Petaling',
      pelaksana: ['Pejabat Daerah Dan Tanah Klang', 'Pejabat Daerah Dan Tanah Gombak', 'Pejabat Daerah Dan Tanah Hulu Langat'],
      tier: 'PDT',
      gold: true,
    },
    {
      num: 4,
      code: 'OTS',
      name: 'Overflow Tripping System (OTS)',
      utama: 'Pejabat Setiausaha Kerajaan Negeri Selangor',
      pelaksana: ['Majlis Bandaraya Shah Alam', 'Majlis Bandaraya Petaling Jaya', 'Majlis Bandaraya Subang Jaya', 'Majlis Bandaraya Diraja Klang'],
      tier: 'PSUK',
      highlight: true,
    },
  ]

  const tierBreakdown = [
    { tier: 'PSUK', count: 1, note: 'Projek SUK sendiri', gold: true },
    { tier: 'PBT', count: 2 },
    { tier: 'PDT', count: 1, label: expandAcronym('PDT') },
  ]

  const cadangan = [
    { agensi: 'PBT', count: 21 },
    { agensi: 'PDT', count: 43 },
    { agensi: 'PSUK', count: 40 },
  ]

  return (
    <div className="stagger flex flex-col gap-4">
      <div className="bg-gradient-to-br from-rstu-red to-rstu-dark rounded-2xl p-5 text-center text-white shadow-lg shadow-rstu-red/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-rstu-gold/10 rounded-bl-full" />
        <p className="text-[10px] uppercase tracking-[0.2em] opacity-50">Status Semasa</p>
        <p className="text-2xl font-black mt-1">Pelaksanaan <span className="text-rstu-gold">ARPA</span></p>
      </div>

      {/* ARPA 2025 */}
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <SectionLabel>ARPA 2025</SectionLabel>
          <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">SELESAI</span>
        </div>
        <p className="text-xs text-gray-600 leading-relaxed mb-3">
          Kesemua projek RKB (Reformasi Kerenah Birokrasi) Tahun 2025 telah berjaya disiapkan sepenuhnya.
        </p>
        <div className="grid grid-cols-3 gap-2">
          <StatCard value="15" label="Projek RKB" gold />
          <StatCard value="RM 17.2J" label="Penjimatan Kos" />
          <StatCard value="25" label="Pekerja" />
        </div>
        <p className="text-[10px] text-gray-400 mt-2 italic leading-relaxed">
          Penjimatan meliputi kos operasi, kos cetakan, kos bayar gaji pekerja dan lain-lain.
        </p>
      </div>

      {/* ARPA 2026 */}
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <SectionLabel>ARPA 2026</SectionLabel>
          <span className="text-[10px] font-bold text-rstu-gold bg-rstu-cream px-2 py-0.5 rounded-full">DIMUKTAMADKAN</span>
        </div>
        <p className="text-xs text-gray-600 leading-relaxed mb-3">
          Terdapat 15 Projek RKB Negeri Selangor tahun 2026 yang sedang dimuktamadkan. Fokus produk/program RKB adalah mengenai <span className="font-bold text-rstu-red">pelesenan dan AI</span>.
        </p>
        <div className="grid grid-cols-2 gap-2">
          <StatCard value="15" label="Projek RKB" gold />
          <StatCard value="4" label="Diluluskan MMKN" />
        </div>
      </div>

      {/* Pembahagian Pengasal — tier breakdown */}
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <IconHierarchy size={14} className="text-rstu-gold" />
          <SectionLabel>Pembahagian Jabatan / Agensi</SectionLabel>
        </div>
        <p className="text-[11px] text-gray-500 mb-3 leading-relaxed">
          Daripada 4 projek inovasi yang diluluskan, <span className="font-bold text-rstu-gold">SUK sendiri menyumbang 1 projek</span> (OTS) — sementara 3 lagi dihasilkan oleh PBT dan PDT.
        </p>
        <div className="grid grid-cols-3 gap-2">
          {tierBreakdown.map((t) => (
            <div
              key={t.tier}
              className={`rounded-xl p-3 text-center relative overflow-hidden ${
                t.gold
                  ? 'bg-gradient-to-br from-rstu-gold to-rstu-yellow text-white shadow-sm shadow-rstu-gold/20'
                  : 'bg-white border border-gray-100'
              }`}
            >
              {t.gold && (
                <div className="absolute top-1 right-1.5">
                  <IconStar size={10} className="text-white opacity-70" />
                </div>
              )}
              <p className={`text-3xl font-black leading-none ${t.gold ? '' : 'text-rstu-red'}`}>{t.count}</p>
              <p className={`text-[10px] font-bold mt-1 ${t.gold ? 'opacity-95' : 'text-rstu-red'}`}>{t.tier}</p>
              {t.note && (
                <p className="text-[9px] mt-0.5 leading-tight opacity-80">{t.note}</p>
              )}
              {t.label && (
                <p className="text-[9px] mt-0.5 leading-tight text-gray-400">{t.label}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 4 Projek Diluluskan */}
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <IconCheck size={14} className="text-rstu-gold" />
          <SectionLabel>4 Projek Diluluskan MMKN Ke 34/2025</SectionLabel>
        </div>
        <div className="flex flex-col gap-3">
          {projek2026.map((p) => {
            const accentGold = p.gold || p.highlight
            return (
              <div
                key={p.num}
                className={`rounded-xl p-3 border relative ${
                  p.highlight
                    ? 'bg-gradient-to-br from-rstu-cream to-rstu-cream/60 border-rstu-gold shadow-sm shadow-rstu-gold/20 ring-1 ring-rstu-gold/40'
                    : accentGold
                      ? 'bg-rstu-cream/40 border-rstu-gold/20'
                      : 'bg-rstu-light/40 border-rstu-red/15'
                }`}
              >
                {p.highlight && (
                  <div className="absolute -top-2 right-3 bg-gradient-to-r from-rstu-gold to-rstu-yellow text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm shadow-rstu-gold/30 flex items-center gap-1">
                    <IconStar size={9} /> Projek SUK Sendiri
                  </div>
                )}
                <div className="flex items-start gap-2.5 mb-2">
                  <div className={`px-2 py-1 rounded-lg flex-shrink-0 ${
                    accentGold ? 'bg-gradient-to-br from-rstu-gold to-rstu-yellow' : 'bg-gradient-to-br from-rstu-red to-rstu-dark'
                  }`}>
                    <span className="text-[10px] font-black text-white">{p.num}</span>
                  </div>
                  <p className={`font-bold text-xs leading-tight pt-0.5 flex-1 ${accentGold ? 'text-rstu-gold' : 'text-rstu-red'}`}>
                    {p.name}
                  </p>
                  <span className={`text-[9px] font-black px-1.5 py-0.5 rounded flex-shrink-0 ${
                    p.tier === 'PSUK'
                      ? 'bg-rstu-gold text-white'
                      : p.tier === 'PBT'
                        ? 'bg-rstu-red/10 text-rstu-red border border-rstu-red/20'
                        : 'bg-rstu-dark/10 text-rstu-dark border border-rstu-dark/20'
                  }`}>
                    {p.tier}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5 pl-1">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">Jabatan / Agensi</p>
                    <p className="text-[11px] text-gray-700 leading-snug">{p.utama}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">Agensi Pelaksana</p>
                    <ul className="flex flex-col gap-0.5">
                      {p.pelaksana.map((agency) => (
                        <li key={agency} className="text-[11px] text-gray-700 leading-snug flex items-start gap-1">
                          <span className={`${accentGold ? 'text-rstu-gold' : 'text-rstu-red'}`}>•</span>
                          <span>{agency}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Cadangan RSTU 2026 */}
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <IconClipboard size={14} className="text-rstu-gold" />
          <SectionLabel>Cadangan Aktiviti RSTU 2026</SectionLabel>
        </div>
        <p className="text-[11px] text-gray-500 mb-3 leading-relaxed">
          Fokus aktiviti/program RSTU adalah yang melibatkan penyampaian perkhidmatan kepada rakyat dan tadbir urus.
        </p>
        <div className="grid grid-cols-3 gap-2">
          {cadangan.map((c, i) => (
            <div key={c.agensi} className={`rounded-2xl p-4 text-center ${
              i === 1
                ? 'bg-gradient-to-br from-rstu-gold to-rstu-yellow text-white'
                : 'bg-white border border-gray-100 shadow-sm'
            }`}>
              <p className={`text-3xl font-black ${i === 1 ? '' : 'text-rstu-red'}`}>{c.count}</p>
              <p className={`text-xs font-bold mt-1 ${i === 1 ? 'opacity-90' : 'text-rstu-red'}`}>{c.agensi}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* =========================================================
   ROUTING
   ========================================================= */
const pages = {
  ekonomi: { title: 'Ekonomi Selangor', subtitle: 'Sumbangan KDNK Negeri', component: EkonomiPage, Icon: IconChart },
  kerangka: { title: 'Kerangka RSTU', subtitle: '2025-2027', component: KerangkaPage, Icon: IconLayers },
  cabaran: { title: 'Cabaran Selangor', subtitle: 'Status Semasa (AS-IS)', component: CabaranPage, Icon: IconWarning },
  objektif: { title: '5 Objektif RSTU', subtitle: 'Hala Tuju Reformasi', component: ObjektifPage, Icon: IconTarget },
  fokus: { title: '8 Fokus Strategik', subtitle: 'FS 1 hingga FS 8', component: FokusPage, Icon: IconCompass },
  elemen: { title: '4 Elemen RSTU', subtitle: 'Dimensi Pembaharuan', component: ElemenPage, Icon: IconGrid },
  ehsan: { title: 'Nilai E.H.S.A.N', subtitle: 'Nilai Teras', component: EHSANPage, Icon: IconHeart },
  hemat: { title: 'Nilai H.E.M.A.T', subtitle: 'Penjawat Awam', component: HEMATPage, Icon: IconStar },
  ikrar: { title: 'Hala Tuju & Ikrar', subtitle: 'Budaya Kerja Baharu', component: IkrarPage, Icon: IconFlag },
  indeks: { title: '4 Indeks Utama', subtitle: 'Pengukuran Reformasi', component: IndeksPage, Icon: IconChart },
  status: { title: 'Status Pelaksanaan', subtitle: 'ARPA 2025 & 2026', component: StatusPage, Icon: IconClipboard },
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
