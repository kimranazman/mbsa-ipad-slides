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
  const produk = [
    { name: 'SPKB', full: 'Sistem Penguatkuasaan Bersepadu' },
    { name: 'MyMR', full: 'Sistem MyMR' },
    { name: 'ABT Tracker', full: 'Sistem ABT Tracker' },
    { name: 'OTS', full: 'Overflow Tripping System' },
  ]

  return (
    <div className="h-full flex flex-col items-center justify-center bg-rstu-strong relative px-8">
      <div className="animate-in flex flex-col items-center gap-6">
        <div>
          <p className="text-sm font-semibold text-rstu-red uppercase tracking-widest">Inisiatif RSTU</p>
          <h1 className="text-4xl font-black text-gray-900 mt-2">Produk Inovasi</h1>
          <p className="text-sm text-gray-500 mt-2 text-center max-w-xs">
            4 produk inovasi yang dipilih dan dipersetujui oleh Majlis Mesyuarat Kerajaan Negeri Selangor Darul Ehsan (MMKN)
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
          {produk.map((p) => (
            <div key={p.name} className="bg-white border-2 border-rstu-red/15 rounded-2xl p-4 text-center shadow-sm">
              <p className="text-2xl font-black text-rstu-red">{p.name}</p>
              <p className="text-[10px] text-gray-500 mt-1">{p.full}</p>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-400 italic">Leret untuk maklumat lanjut</p>
      </div>
      <Footer />
    </div>
  )
}

function OverviewSlide() {
  const produk = [
    { name: 'SPKB', origin: 'MPHS', expanded: 'MPKS, MDSB', color: 'from-red-500 to-red-700' },
    { name: 'MyMR', origin: 'MPSp', expanded: 'MPS, MPKL, MPHS', color: 'from-red-600 to-red-800' },
    { name: 'ABT Tracker', origin: 'PDT Petaling', expanded: 'PDT Klang, Gombak, Hulu Langat', color: 'from-red-700 to-red-900' },
    { name: 'OTS', origin: 'SUK Selangor', expanded: 'MBSA, MBPJ, MBSJ, MBDK', color: 'from-red-800 to-red-950' },
  ]

  return (
    <div className="h-full flex flex-col bg-rstu-strong relative px-6 pt-10">
      <div className="animate-in flex flex-col flex-1">
        <h2 className="text-xl font-black text-gray-900 text-center">PENGEMBANGAN PRODUK INOVASI</h2>
        <p className="text-xs text-gray-500 text-center mt-1 mb-6">Di Bawah Inisiatif RSTU</p>

        <div className="flex flex-col gap-4 flex-1">
          {produk.map((p) => (
            <div key={p.name} className={`bg-gradient-to-r ${p.color} rounded-2xl p-5 text-white`}>
              <p className="text-2xl font-black">{p.name}</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="bg-white/20 rounded-lg px-3 py-1.5">
                  <p className="text-[10px] uppercase tracking-wider opacity-80">Asal</p>
                  <p className="text-sm font-bold">{p.origin}</p>
                </div>
                <div className="text-xl opacity-60">&rarr;</div>
                <div className="bg-white/20 rounded-lg px-3 py-1.5 flex-1">
                  <p className="text-[10px] uppercase tracking-wider opacity-80">Dikembangkan ke</p>
                  <p className="text-sm font-bold">{p.expanded}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

function SPKBSlide() {
  return (
    <div className="h-full flex flex-col bg-rstu-strong relative px-6 pt-10">
      <div className="animate-in flex flex-col flex-1">
        {/* Header */}
        <div className="bg-rstu-red rounded-2xl p-5 text-white text-center">
          <p className="text-4xl font-black">SPKB</p>
          <p className="text-sm opacity-80 mt-1">Sistem Penguatkuasaan Bersepadu</p>
        </div>

        <div className="flex flex-col gap-4 mt-5 flex-1">
          {/* Origin */}
          <div className="bg-white rounded-xl p-4 border border-rstu-red/10 shadow-sm">
            <p className="text-xs text-rstu-red font-bold uppercase tracking-wider">Agensi Pelaksana</p>
            <p className="text-lg font-bold text-gray-900 mt-1">MPHS</p>
            <p className="text-xs text-gray-500">Majlis Perbandaran Hulu Selangor</p>
          </div>

          {/* Expanded to */}
          <div className="bg-white rounded-xl p-4 border border-rstu-red/10 shadow-sm">
            <p className="text-xs text-rstu-red font-bold uppercase tracking-wider">Dikembangkan ke</p>
            <div className="flex gap-3 mt-2">
              {['MPKS', 'MDSB'].map(pbt => (
                <div key={pbt} className="flex-1 bg-rstu-light rounded-lg p-3 text-center">
                  <p className="text-lg font-black text-rstu-red">{pbt}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-xl p-4 border border-rstu-red/10 shadow-sm flex-1">
            <p className="text-xs text-rstu-red font-bold uppercase tracking-wider">Mengenai SPKB</p>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              Sistem Penguatkuasaan Bersepadu (SPKB) merupakan platform digital bersepadu yang membolehkan penguatkuasaan undang-undang tempatan dijalankan secara sistematik dan cekap. Sistem ini mengintegrasikan proses aduan, siasatan, kompaun dan pemantauan dalam satu platform.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

function MyMRSlide() {
  return (
    <div className="h-full flex flex-col bg-rstu-strong relative px-6 pt-10">
      <div className="animate-in flex flex-col flex-1">
        <div className="bg-rstu-red rounded-2xl p-5 text-white text-center">
          <p className="text-4xl font-black">MyMR</p>
          <p className="text-sm opacity-80 mt-1">Sistem MyMR</p>
        </div>

        <div className="flex flex-col gap-4 mt-5 flex-1">
          <div className="bg-white rounded-xl p-4 border border-rstu-red/10 shadow-sm">
            <p className="text-xs text-rstu-red font-bold uppercase tracking-wider">Agensi Pelaksana</p>
            <p className="text-lg font-bold text-gray-900 mt-1">MPSp</p>
            <p className="text-xs text-gray-500">Majlis Perbandaran Sepang</p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-rstu-red/10 shadow-sm">
            <p className="text-xs text-rstu-red font-bold uppercase tracking-wider">Dikembangkan ke</p>
            <div className="flex gap-3 mt-2">
              {['MPS', 'MPKL', 'MPHS'].map(pbt => (
                <div key={pbt} className="flex-1 bg-rstu-light rounded-lg p-3 text-center">
                  <p className="text-lg font-black text-rstu-red">{pbt}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 border border-rstu-red/10 shadow-sm flex-1">
            <p className="text-xs text-rstu-red font-bold uppercase tracking-wider">Mengenai MyMR</p>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              Sistem MyMR merupakan platform pengurusan mesyuarat digital yang membolehkan pengurusan mesyuarat dijalankan secara dalam talian. Sistem ini merangkumi pengurusan agenda, minit mesyuarat, tindakan susulan dan pemantauan keputusan mesyuarat secara bersepadu.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

function ABTSlide() {
  return (
    <div className="h-full flex flex-col bg-rstu-strong relative px-6 pt-10">
      <div className="animate-in flex flex-col flex-1">
        <div className="bg-rstu-red rounded-2xl p-5 text-white text-center">
          <p className="text-3xl font-black">ABT Tracker</p>
          <p className="text-sm opacity-80 mt-1">Sistem ABT Tracker</p>
        </div>

        <div className="flex flex-col gap-4 mt-5 flex-1">
          <div className="bg-white rounded-xl p-4 border border-rstu-red/10 shadow-sm">
            <p className="text-xs text-rstu-red font-bold uppercase tracking-wider">Agensi Pelaksana</p>
            <p className="text-lg font-bold text-gray-900 mt-1">PDT Petaling</p>
            <p className="text-xs text-gray-500">Pejabat Daerah & Tanah Petaling</p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-rstu-red/10 shadow-sm">
            <p className="text-xs text-rstu-red font-bold uppercase tracking-wider">Dikembangkan ke</p>
            <div className="flex gap-3 mt-2">
              {['PDT Klang', 'PDT Gombak', 'PDT Hulu Langat'].map(pbt => (
                <div key={pbt} className="flex-1 bg-rstu-light rounded-lg p-2.5 text-center">
                  <p className="text-sm font-black text-rstu-red">{pbt}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 border border-rstu-red/10 shadow-sm flex-1">
            <p className="text-xs text-rstu-red font-bold uppercase tracking-wider">Mengenai ABT Tracker</p>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              Sistem ABT Tracker merupakan platform pemantauan dan pengesanan Arahan Bil Tunjuk (ABT) secara digital. Sistem ini membolehkan pemantauan status ABT, pengesanan lokasi, dan pengurusan proses pentadbiran tanah secara sistematik merentasi pejabat daerah.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

function OTSSlide() {
  return (
    <div className="h-full flex flex-col bg-rstu-strong relative px-6 pt-10">
      <div className="animate-in flex flex-col flex-1">
        <div className="bg-rstu-red rounded-2xl p-5 text-white text-center">
          <p className="text-4xl font-black">OTS</p>
          <p className="text-sm opacity-80 mt-1">Overflow Tripping System</p>
        </div>

        <div className="flex flex-col gap-4 mt-5 flex-1">
          <div className="bg-white rounded-xl p-4 border border-rstu-red/10 shadow-sm">
            <p className="text-xs text-rstu-red font-bold uppercase tracking-wider">Agensi Pelaksana</p>
            <p className="text-lg font-bold text-gray-900 mt-1">SUK Selangor</p>
            <p className="text-xs text-gray-500">Pejabat Setiausaha Kerajaan Negeri</p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-rstu-red/10 shadow-sm">
            <p className="text-xs text-rstu-red font-bold uppercase tracking-wider">Dikembangkan ke</p>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {['MBSA', 'MBPJ', 'MBSJ', 'MBDK'].map(pbt => (
                <div key={pbt} className="bg-rstu-light rounded-lg p-3 text-center">
                  <p className="text-lg font-black text-rstu-red">{pbt}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 border border-rstu-red/10 shadow-sm flex-1">
            <p className="text-xs text-rstu-red font-bold uppercase tracking-wider">Mengenai OTS</p>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              Overflow Tripping System (OTS) merupakan produk inovatif yang berfungsi sebagai sistem perlindungan sekunder bagi menghentikan limpahan air sekiranya sistem pam air atau penderia bangunan gagal mengesan paras air dalam tangki. Sistem ini beroperasi secara automatik dengan mengesan limpahan air dan mematikan pam serta memberikan amaran melalui aplikasi telefon pintar.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {['Harta Intelek MY-198326-A', 'Produk Rintis SRIE 2023', 'Pemantauan 24 jam'].map(tag => (
                <span key={tag} className="text-[10px] bg-rstu-light text-rstu-red font-semibold px-2.5 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default function Produk() {
  return (
    <SlideShow autoPlay autoPlayInterval={10000}>
      <CoverSlide />
      <OverviewSlide />
      <SPKBSlide />
      <MyMRSlide />
      <ABTSlide />
      <OTSSlide />
    </SlideShow>
  )
}
