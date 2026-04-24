'use client'

import { useEffect, useRef } from 'react'

interface VideoModalProps {
  src: string
  onClose: () => void
}

export default function VideoModal({ src, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    videoRef.current?.play()
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.92)' }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white/70 hover:text-white z-10 p-2"
        aria-label="Close video"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      <video
        ref={videoRef}
        src={src}
        controls
        playsInline
        className="w-full max-w-sm rounded-2xl shadow-2xl"
        style={{ maxHeight: '90dvh' }}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}
