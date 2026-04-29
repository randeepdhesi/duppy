'use client'

import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import GhostIcon from '@/components/icons/GhostIcon'

interface StatItem {
  prefix?: string
  value: number | null
  suffix: string
  label: string
  duration?: number
}

const stats: StatItem[] = [
  { value: 12, suffix: 's', label: 'Avg per task', duration: 800 },
  { value: null, suffix: 'Zero', label: 'New software to learn', duration: 0 },
  { value: null, suffix: 'Days', label: 'Not months, to launch', duration: 0 },
  { value: 1, suffix: ' interface', label: 'To run your operations', duration: 600 },
]

function CountUp({ target, duration = 1600, prefix = '', suffix = '' }: {
  target: number; duration?: number; prefix?: string; suffix?: string
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref as any, { once: true })

  useEffect(() => {
    if (!isInView) return
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
      else setCount(target)
    }
    requestAnimationFrame(tick)
  }, [isInView, target, duration])

  const display = count >= 1000 ? count.toLocaleString() : count
  return <span ref={ref}>{prefix}{display}{suffix}</span>
}

export default function StatsBanner() {
  return (
    <section className="relative bg-duppy-amber py-20 px-6 overflow-hidden">
      {/* Ghost watermark */}
      <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 pointer-events-none ghost-drift" aria-hidden="true">
        <GhostIcon size={280} color="white" className="opacity-[0.08]" bgColor="transparent" />
      </div>

      {/* Subtle texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0,0,0,0.15) 0%, transparent 50%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col gap-2 text-center items-center px-6 py-8 md:py-0 md:px-10
                ${i < 2 ? 'border-b border-white/20 md:border-b-0' : ''}
                ${i === 0 ? 'border-r border-white/20' : ''}
                ${i === 1 ? 'md:border-r md:border-white/20' : ''}
                ${i === 2 ? 'border-r border-white/20' : ''}
              `}
            >
              <span
                className="text-white leading-none whitespace-nowrap"
                style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: 'clamp(32px, 4vw, 52px)', fontStyle: 'italic' }}
              >
                {stat.value === null ? (
                  stat.suffix
                ) : (
                  <CountUp target={stat.value} duration={stat.duration} prefix={stat.prefix} suffix={stat.suffix} />
                )}
              </span>
              <span className="text-white/70 text-base leading-snug">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
