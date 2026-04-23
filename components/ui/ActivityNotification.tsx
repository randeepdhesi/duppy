'use client'

import { useState, useEffect } from 'react'

const notifications = [
  {
    icon: '✓',
    title: 'Order #4821 created in BisTrack',
    sub: 'Pacific Coast Builders · just now',
  },
  {
    icon: '✓',
    title: 'Invoice $3,117.76 sent to Jim',
    sub: 'Pacific Coast Builders · 12s ago',
  },
  {
    icon: '↑',
    title: 'Inventory synced — Burnaby branch',
    sub: "16' Norwegian Fluted in Teak · 8 units",
  },
  {
    icon: '✓',
    title: 'Delivery scheduled — Friday 9am',
    sub: 'Auto-confirmed in calendar',
  },
]

export default function ActivityNotification() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), 1800)
    return () => clearTimeout(startTimer)
  }, [])

  useEffect(() => {
    if (!started) return

    const show = setTimeout(() => {
      setVisible(false)
      setTimeout(() => {
        setCurrent((c) => (c + 1) % notifications.length)
        setVisible(true)
      }, 500)
    }, 3800)

    return () => clearTimeout(show)
  }, [current, started])

  if (!started) return null

  const n = notifications[current]

  return (
    <div
      className={`${visible ? 'notify-in' : 'notify-out'} pointer-events-none`}
      style={{ willChange: 'opacity, transform' }}
    >
      <div className="flex items-start gap-3 bg-duppy-card/90 backdrop-blur-sm border border-white/10 rounded-[12px] px-4 py-3 shadow-xl max-w-[280px]">
        <span className="text-duppy-amber text-sm font-bold mt-0.5 shrink-0">{n.icon}</span>
        <div className="flex flex-col gap-0.5 min-w-0">
          <span className="text-white text-xs font-semibold leading-snug truncate">{n.title}</span>
          <span className="text-duppy-muted text-[10px] leading-snug">{n.sub}</span>
        </div>
        {/* Live indicator */}
        <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-duppy-amber glow-pulse" aria-hidden="true" />
      </div>
    </div>
  )
}
