import { useNavigate } from 'react-router-dom'
import { IconBack } from './Icons'

export function BackButton({ to, label = 'Kembali' }) {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate(to || -1)}
      className="tap flex items-center gap-1.5 text-rstu-red font-semibold text-sm"
    >
      <IconBack size={18} />
      {label}
    </button>
  )
}

export function SectionLabel({ children }) {
  return (
    <span className="badge-gold">{children}</span>
  )
}

export function Footer() {
  return (
    <div className="flex items-center justify-between px-6 py-3 text-[10px] text-gray-400 flex-shrink-0">
      <span>www.selangor.gov.my</span>
      <div className="flex items-center gap-1.5">
        <span className="font-semibold text-gray-500">MALAYSIA MADANI</span>
        <span className="text-gray-300">|</span>
        <span className="font-bold text-rstu-red tracking-wide">KITA SELANGOR</span>
      </div>
    </div>
  )
}
