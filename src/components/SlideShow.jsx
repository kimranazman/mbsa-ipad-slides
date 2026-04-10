import { useState, useRef, useEffect, useCallback } from 'react'

export default function SlideShow({ children, autoPlay = false, autoPlayInterval = 8000 }) {
  const [current, setCurrent] = useState(0)
  const containerRef = useRef(null)
  const total = children.length
  const autoRef = useRef(null)

  const goTo = useCallback((index) => {
    const el = containerRef.current
    if (!el) return
    const target = Math.max(0, Math.min(index, total - 1))
    el.scrollTo({ left: target * el.offsetWidth, behavior: 'smooth' })
  }, [total])

  // Track current slide from scroll position
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const idx = Math.round(el.scrollLeft / el.offsetWidth)
        setCurrent(idx)
        ticking = false
      })
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  // Auto-play
  useEffect(() => {
    if (!autoPlay) return
    autoRef.current = setInterval(() => {
      setCurrent(prev => {
        const next = prev >= total - 1 ? 0 : prev + 1
        goTo(next)
        return next
      })
    }, autoPlayInterval)
    return () => clearInterval(autoRef.current)
  }, [autoPlay, autoPlayInterval, total, goTo])

  // Pause auto-play on touch
  const pauseAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current)
  }

  return (
    <div className="relative w-full h-full">
      {/* Slides */}
      <div
        ref={containerRef}
        onTouchStart={pauseAuto}
        className="slide-container flex w-full h-full overflow-x-auto"
      >
        {children.map((child, i) => (
          <div key={i} className="slide flex-shrink-0 w-full h-full overflow-hidden">
            {child}
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
        {Array.from({ length: total }, (_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'w-8 h-3 bg-rstu-red'
                : 'w-3 h-3 bg-rstu-red/25'
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute top-4 right-4 z-10 bg-black/10 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-600">
        {current + 1} / {total}
      </div>
    </div>
  )
}
