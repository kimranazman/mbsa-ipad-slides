import SlideShow from '../components/SlideShow'

function Footer() {
  return (
    <div className="absolute bottom-12 left-0 right-0 flex items-center justify-between px-6 text-[10px] text-gray-400">
      <span>www.selangor.gov.my</span>
      <div className="flex items-center gap-2">
        <span className="font-semibold text-gray-500">MALAYSIA MADANI</span>
        <span className="text-gray-300">|</span>
        <span className="font-bold text-rstu-red">KITA SELANGOR</span>
      </div>
    </div>
  )
}

function CoverSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-rstu-strong relative px-8">
      <div className="animate-in flex flex-col items-center gap-4">
        {/* Selangor crest placeholder */}
        <div className="w-16 h-16 bg-rstu-gold/20 rounded-full flex items-center justify-center">
          <span className="text-2xl">&#128081;</span>
        </div>
        <h1 className="text-7xl font-black bg-gradient-to-b from-rstu-gold to-rstu-red bg-clip-text text-transparent leading-tight">
          RSTU
        </h1>
        <p className="text-base font-bold text-rstu-red text-center uppercase tracking-wide leading-relaxed">
          Reformasi Sistem Penyampaian<br />& Tadbir Urus Negeri Selangor
        </p>
        <div className="mt-4 border-2 border-rstu-red/30 rounded-lg px-6 py-3">
          <p className="text-xl font-bold italic text-rstu-dark">
            "Reformasi Satu Kemestian"
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

function EkonomiSlide() {
  return (
    <div className="h-full flex flex-col bg-rstu-strong relative px-6 pt-10">
      <div className="animate-in flex flex-col flex-1">
        <h2 className="text-2xl font-black text-gray-900 text-center leading-snug">
          SELANGOR MEMACU<br />KEMAKMURAN EKONOMI NEGARA
        </h2>

        <div className="mt-6 flex flex-col gap-4 flex-1">
          {/* KDNK Card */}
          <div className="bg-rstu-red rounded-2xl p-6 text-white">
            <p className="text-sm opacity-80">Sumbangan KDNK Selangor pada Negara tahun 2024</p>
            <p className="text-6xl font-black mt-2">26.2%</p>
            <p className="text-sm mt-1">daripada KDNK keseluruhan Malaysia</p>
            <p className="text-xs mt-2 opacity-70 italic">*Sumbangan tertinggi dari semua negeri</p>
          </div>

          {/* Revenue Card */}
          <div className="bg-white border-2 border-rstu-red/20 rounded-2xl p-6">
            <p className="text-sm text-gray-500">Nilai Sumbangan KDNK</p>
            <p className="text-4xl font-black text-rstu-red mt-1">RM 432.1 Bilion</p>
            <p className="text-sm text-gray-500 mt-1">Pertumbuhan Berterusan</p>

            {/* Simple chart representation */}
            <div className="flex items-end justify-between mt-4 h-20 px-2">
              {[
                { year: '2020', h: '40%' },
                { year: '2021', h: '50%' },
                { year: '2022', h: '65%' },
                { year: '2023', h: '80%' },
                { year: '2024', h: '95%' },
              ].map(({ year, h }) => (
                <div key={year} className="flex flex-col items-center gap-1 flex-1">
                  <div className="w-4 bg-gradient-to-t from-rstu-red to-rstu-gold rounded-t" style={{ height: h }} />
                  <span className="text-[10px] text-gray-400">{year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue Target */}
          <div className="bg-white border-2 border-rstu-red/20 rounded-2xl p-5 text-center">
            <p className="text-sm text-gray-500">Sasaran Hasil Negeri Selangor 2025</p>
            <p className="text-3xl font-black text-rstu-red">RM 3 Bilion</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

function CabaranSlide() {
  const cabaran = [
    { title: 'Organisasi tidak kejat', desc: 'Pertindihan fungsi & tugas, banyak lapisan chain of command' },
    { title: 'Penyampaian konvensional', desc: 'Penyampaian masih lagi secara konvensional, perlu digitalisasi' },
    { title: 'Isu integriti & akauntabiliti', desc: 'Menangani isu sehingga ke akar umbi dengan inisiatif baharu' },
    { title: 'Bebanan kewangan', desc: 'Sistem saraan tidak berasaskan produktiviti' },
    { title: 'Modal insan kurang kompeten', desc: 'Kepimpinan organisasi tidak berkesan' },
    { title: 'Penarikan bakat terbaik', desc: 'Mewujudkan suasana kerja yang lebih fleksibel' },
    { title: 'Jurang kementerian & jabatan', desc: 'Mentaliti bekerja secara silo' },
  ]

  return (
    <div className="h-full flex flex-col bg-rstu-strong relative px-6 pt-10">
      <div className="animate-in flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-5xl font-black text-rstu-red">7</span>
          <div>
            <h2 className="text-lg font-bold text-gray-900 leading-tight">CABARAN UTAMA</h2>
            <p className="text-sm text-gray-500">Perkhidmatan Awam</p>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 flex-1">
          {cabaran.map((c, i) => (
            <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-3.5 border border-rstu-red/10 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-rstu-red flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold">{i + 1}</span>
              </div>
              <div className="min-w-0">
                <p className="font-bold text-sm text-gray-900">{c.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

function CabaranSelangorSlide() {
  const items = [
    { title: 'Tadbir Urus', desc: 'Kelemahan tadbir urus & kesedaran integriti yang perlu dipertingkatkan' },
    { title: 'Output vs Outcome', desc: 'Pengurusan projek berasaskan output, bukan outcome' },
    { title: 'Digitalisasi', desc: 'Transformasi digital yang perlahan dengan perkongsian data terbatas' },
    { title: 'Aduan Rakyat', desc: 'Aduan rakyat & pemegang taruh berulang' },
    { title: 'Budaya "Silo"', desc: 'Koordinasi antara jabatan yang terhad' },
    { title: 'Imej & Kepercayaan', desc: 'Imej perkhidmatan awam dan kepimpinan tempatan kurang berkesan' },
  ]

  return (
    <div className="h-full flex flex-col bg-rstu-strong relative px-6 pt-10">
      <div className="animate-in flex flex-col flex-1">
        <h2 className="text-xl font-black text-gray-900 text-center">STATUS SEMASA (AS-IS)</h2>
        <p className="text-sm text-rstu-red font-semibold text-center mb-5">Cabaran Selangor</p>

        {/* Center circle */}
        <div className="relative flex-1 flex flex-col items-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-rstu-red to-rstu-dark flex items-center justify-center mb-6">
            <div className="text-center text-white">
              <p className="text-xs font-medium opacity-80">Aspirasi &</p>
              <p className="text-sm font-bold">Hala Tuju</p>
              <p className="text-xs font-medium opacity-80">Kerajaan</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 w-full">
            {items.map((item, i) => (
              <div key={i} className="bg-rstu-red rounded-xl p-3.5 text-white">
                <p className="font-bold text-xs">{item.title}</p>
                <p className="text-[10px] opacity-80 mt-1 leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

function ObjektifSlide() {
  const objektif = [
    { num: 1, title: 'Reformasi Perkhidmatan Awam', desc: 'Mentransformasi perkhidmatan awam agar lebih cekap, pantas dan berkesan', icon: '\u23F1' },
    { num: 2, title: 'Reformasi Pengurusan Integriti', desc: 'Transformasi digital yang perlahan dengan perkongsian data terbatas', icon: '\u2696' },
    { num: 3, title: 'Reformasi Modal Insan', desc: 'Melahirkan pemimpin berdaya saing dan berfikir strategik', icon: '\uD83D\uDC64' },
    { num: 4, title: 'Reformasi Dasar & Perkhidmatan', desc: 'Menyampaikan dasar dan perkhidmatan yang difahami, diterima dan dirasai rakyat', icon: '\uD83D\uDCCB' },
    { num: 5, title: 'Reformasi Jentera Akar Umbi', desc: 'Membina sinergi penyampaian dasar kerajaan melalui pemberdayaan pemimpin tempatan', icon: '\uD83C\uDFDB' },
  ]

  return (
    <div className="h-full flex flex-col bg-rstu-strong relative px-6 pt-10">
      <div className="animate-in flex flex-col flex-1">
        <h2 className="text-2xl font-black text-gray-900 text-center mb-2">OBJEKTIF RSTU</h2>
        <p className="text-xs text-gray-500 text-center mb-6 leading-relaxed max-w-sm mx-auto">
          Menjadi pemacu (enabler) utama kepada pelaksanaan dasar Kerajaan Negeri melalui pembaharuan sistem penyampaian dan tadbir urus yang cekap, telus dan berimpak.
        </p>

        <div className="flex flex-col gap-3 flex-1">
          {objektif.map((o) => (
            <div key={o.num} className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-rstu-red/10 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rstu-red to-rstu-dark flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">{o.icon}</span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black text-rstu-red">{o.num}</span>
                  <p className="font-bold text-sm text-gray-900 leading-tight">{o.title}</p>
                </div>
                <p className="text-xs text-gray-500 mt-1">{o.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

function KerangkaSlide() {
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
    <div className="h-full flex flex-col bg-rstu-strong relative px-6 pt-10">
      <div className="animate-in flex flex-col flex-1">
        <div className="bg-rstu-red rounded-t-2xl p-4 text-center">
          <p className="text-sm text-white/80 font-medium">KERANGKA</p>
          <h2 className="text-3xl font-black text-white">RSTU 2025-2027</h2>
        </div>

        <div className="bg-white border-2 border-rstu-red/20 rounded-b-2xl p-5 flex-1 flex flex-col gap-4">
          {/* Matlamat */}
          <div>
            <span className="inline-block bg-rstu-red text-white text-xs font-bold px-3 py-1 rounded-full">Matlamat</span>
            <p className="text-xs text-gray-600 mt-2 leading-relaxed">
              Menjadi pemacu (enabler) utama kepada pelaksanaan dasar kerajaan melalui pembaharuan sistem penyampaian dan tadbir urus yang cekap, telus dan berimpak.
            </p>
          </div>

          {/* Nilai */}
          <div>
            <span className="inline-block bg-rstu-red text-white text-xs font-bold px-3 py-1 rounded-full">Nilai</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {['Empati', 'Holistik', 'Sinergi', 'Akauntabiliti', 'Neutraliti'].map(v => (
                <span key={v} className="text-xs bg-rstu-light text-rstu-red font-semibold px-3 py-1.5 rounded-full">{v}</span>
              ))}
            </div>
          </div>

          {/* Fokus Strategik */}
          <div>
            <span className="inline-block bg-rstu-red text-white text-xs font-bold px-3 py-1 rounded-full">8 Fokus Strategik Reformasi</span>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {fokus.map((f, i) => (
                <div key={i} className="bg-rstu-red/90 rounded-lg p-2.5 text-center">
                  <span className="text-[11px] text-white font-medium leading-tight">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom sections */}
          <div className="flex flex-col gap-2 mt-auto">
            <div className="border-2 border-rstu-red rounded-lg p-2 text-center">
              <span className="text-xs font-bold text-rstu-red">Strategi Keberhasilan Reformasi (SKR)</span>
            </div>
            <div className="border-2 border-rstu-red rounded-lg p-2 text-center">
              <span className="text-xs font-bold text-rstu-red">Program / Inisiatif</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

function EHSANSlide() {
  const nilai = [
    { letter: 'E', name: 'Empati', desc: 'Memahami keperluan dan situasi rakyat dengan meletakkan diri dalam keadaan mereka.' },
    { letter: 'H', name: 'Holistik', desc: 'Mempertimbangkan semua aspek dalam membuat keputusan tanpa mengenepikan sebarang faktor penting.' },
    { letter: 'S', name: 'Sinergi', desc: 'Bekerjasama merentasi agensi dan jabatan untuk mencapai hasil yang lebih baik.' },
    { letter: 'A', name: 'Akauntabiliti', desc: 'Bertanggungjawab ke atas setiap tindakan dan keputusan serta bersedia menerima maklum balas.' },
    { letter: 'N', name: 'Neutraliti', desc: 'Bersikap adil dan tidak berat sebelah dalam melaksanakan tanggungjawab dan membuat keputusan.' },
  ]

  return (
    <div className="h-full flex flex-col bg-rstu-strong relative px-6 pt-10">
      <div className="animate-in flex flex-col flex-1">
        <h2 className="text-lg font-bold text-gray-500 text-center">NILAI</h2>
        <h1 className="text-5xl font-black text-gray-900 text-center tracking-wide mb-6">E.H.S.A.N</h1>

        <div className="flex flex-col gap-3 flex-1">
          {nilai.map((n) => (
            <div key={n.letter} className="flex items-start gap-4 bg-gradient-to-r from-rstu-red to-rstu-dark rounded-2xl p-4 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-black">{n.letter}</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-bold text-base">{n.name}</p>
                <p className="text-xs opacity-80 mt-1 leading-relaxed">{n.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

function HEMATSlide() {
  const hemat = [
    { letter: 'H', name: 'Hijrah Tatakelola', desc: 'Berani berhijrah menurusi kepekaan dengan tuntutan perubahan semasa, menjalankan tugas dengan rapi dan cekap.' },
    { letter: 'E', name: 'Empati Rakyat', desc: 'Mendengar dan memahami permasalahan rakyat, sentiasa prihatin dan menyayangi rakyat.' },
    { letter: 'M', name: 'Minda Pekin', desc: 'Sentiasa bersikap cermat dalam membelanjakan dana awam, sentiasa kreatif dan inovatif, minda "value for money".' },
    { letter: 'A', name: 'Apresiasi Inovasi', desc: 'Sentiasa menyokong dan menghargai perkembangan idea-idea baharu bagi memperkasakan Perkhidmatan Awam.' },
    { letter: 'T', name: 'Telus Tadbiran', desc: 'Menyematkan nilai-nilai integriti dalam menjalankan tugas seharian, sentiasa membudayakan amalan sonsang.' },
  ]

  return (
    <div className="h-full flex flex-col bg-rstu-strong relative px-6 pt-10">
      <div className="animate-in flex flex-col flex-1">
        <h2 className="text-lg font-bold text-gray-500 text-center">NILAI-NILAI</h2>
        <h1 className="text-4xl font-black text-gray-900 text-center tracking-wide mb-6">PENJAWAT AWAM</h1>

        <div className="flex flex-col gap-3 flex-1">
          {hemat.map((h) => (
            <div key={h.letter} className="flex items-start gap-3 bg-white rounded-2xl p-4 border-2 border-rstu-red/15 shadow-sm">
              <div className="w-11 h-11 bg-rstu-red rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-black text-white">{h.letter}</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-bold text-sm text-rstu-red">{h.name}</p>
                <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default function RSTU() {
  return (
    <SlideShow autoPlay autoPlayInterval={10000}>
      <CoverSlide />
      <EkonomiSlide />
      <CabaranSlide />
      <CabaranSelangorSlide />
      <ObjektifSlide />
      <KerangkaSlide />
      <EHSANSlide />
      <HEMATSlide />
    </SlideShow>
  )
}
