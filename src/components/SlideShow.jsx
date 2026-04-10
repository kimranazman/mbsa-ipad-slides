import { useNavigate } from 'react-router-dom'

export function BackButton({ to }) {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate(to || -1)}
      className="tap flex items-center gap-2 text-rstu-red font-semibold text-sm"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      Kembali
    </button>
  )
}

export function PageHeader({ title, subtitle, back }) {
  return (
    <div className="flex items-center gap-3 px-6 pt-6 pb-4">
      {back && <BackButton to={back} />}
      {!back && (
        <div>
          <h1 className="text-xl font-black text-gray-900">{title}</h1>
          {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
        </div>
      )}
    </div>
  )
}

export function Footer() {
  return (
    <div className="flex items-center justify-between px-6 py-3 text-[10px] text-gray-400 flex-shrink-0">
      <span>www.selangor.gov.my</span>
      <div className="flex items-center gap-1.5">
        <span className="font-semibold text-gray-500">MALAYSIA MADANI</span>
        <span className="text-gray-300">|</span>
        <span className="font-bold text-rstu-red">KITA SELANGOR</span>
      </div>
    </div>
  )
}
