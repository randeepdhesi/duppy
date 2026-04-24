'use client'

import { useState, useEffect } from 'react'
import GhostIcon from '@/components/icons/GhostIcon'

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Industries', href: '#industries' },
  { label: 'About', href: '#about' },
]

const socials = [
  { label: 'LinkedIn', href: '#', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )},
  { label: 'X / Twitter', href: '#', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )},
  { label: 'Instagram', href: '#', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )},
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => {
    setClosing(true)
    setTimeout(() => {
      setMenuOpen(false)
      setClosing(false)
    }, 280)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-duppy-cream/96 backdrop-blur-md border-b border-duppy-cream-deep/60'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-18 grid grid-cols-2 md:grid-cols-3 items-center">
          {/* Logo — left column */}
          <a href="/" className="flex items-center gap-2.5">
            <div className="[&>svg]:!w-full [&>svg]:!h-full w-[40px] h-[40px] md:w-[34px] md:h-[34px]">
              <GhostIcon size={34} color="#E8943A" />
            </div>
            <span
              className={`transition-colors text-[30px] ${scrolled ? 'text-duppy-text' : 'text-white'}`}
              style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 700, letterSpacing: '0.06em' }}
            >
              DUPPY
            </span>
          </a>

          {/* Desktop nav — center column */}
          <div className="hidden md:flex items-center justify-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-base font-medium transition-colors ${
                  scrolled ? 'text-duppy-body hover:text-duppy-amber' : 'text-white/75 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + hamburger — right column */}
          <div className="flex items-center justify-end">
            <a
              href="mailto:hello@duppy.ai"
              className={`hidden md:inline-flex text-base font-semibold px-5 py-2.5 rounded-[10px] transition-all duration-200 ${
                scrolled
                  ? 'bg-duppy-amber text-white hover:bg-duppy-amber-dark shadow-sm'
                  : 'border border-white/30 text-white hover:bg-white/10'
              }`}
            >
              Get in touch
            </a>

            {/* Hamburger */}
            <button
              aria-label="Toggle menu"
              className={`md:hidden flex flex-col gap-1.5 p-2 z-[60] ${menuOpen ? 'fixed right-6 top-4' : 'relative'}`}
              onClick={() => menuOpen ? closeMenu() : setMenuOpen(true)}
            >
              {menuOpen ? (
                <>
                  <span className={`block w-6 h-0.5 rotate-45 translate-y-[8px] transition-all ${scrolled ? 'bg-duppy-text' : 'bg-white'}`} />
                  <span className={`block w-6 h-0.5 opacity-0 transition-all ${scrolled ? 'bg-duppy-text' : 'bg-white'}`} />
                  <span className={`block w-6 h-0.5 -rotate-45 -translate-y-[8px] transition-all ${scrolled ? 'bg-duppy-text' : 'bg-white'}`} />
                </>
              ) : (
                <>
                  <span className={`block w-6 h-0.5 transition-colors ${scrolled ? 'bg-duppy-text' : 'bg-white'}`} />
                  <span className={`block w-6 h-0.5 transition-colors ${scrolled ? 'bg-duppy-text' : 'bg-white'}`} />
                  <span className={`block w-6 h-0.5 transition-colors ${scrolled ? 'bg-duppy-text' : 'bg-white'}`} />
                </>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen mobile overlay */}
      {menuOpen && (
        <div
          className={`md:hidden fixed inset-0 z-40 bg-duppy-dark flex flex-col overflow-hidden ${
            closing ? 'overlay-out' : 'overlay-in'
          }`}
        >
          {/* Ghost watermark */}
          <div className="absolute right-[-60px] bottom-[-40px] pointer-events-none ghost-drift opacity-[0.06]" aria-hidden="true">
            <GhostIcon size={380} color="white" withWisp bgColor="transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full px-8 pt-24 pb-12">
            {/* Nav links — evenly spaced and centered */}
            <nav className="flex flex-col justify-center items-center flex-1 gap-0">
              {navLinks.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-white/80 hover:text-white transition-colors w-full text-center py-5 border-b border-white/8"
                  style={{
                    fontFamily: 'var(--font-fraunces), serif',
                    fontSize: 'clamp(32px, 8vw, 48px)',
                    fontStyle: 'italic',
                    animationDelay: `${i * 60}ms`,
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:hello@duppy.ai"
                onClick={closeMenu}
                className="text-white/80 hover:text-white transition-colors w-full text-center py-5 border-b border-white/8"
                style={{
                  fontFamily: 'var(--font-fraunces), serif',
                  fontSize: 'clamp(32px, 8vw, 48px)',
                  fontStyle: 'italic',
                }}
              >
                Contact
              </a>
            </nav>

            {/* Bottom row */}
            <div className="flex flex-col gap-5">
              <a
                href="mailto:hello@duppy.ai"
                className="w-full bg-duppy-amber text-white font-semibold text-lg py-4 rounded-[12px] hover:bg-duppy-amber-dark transition-colors text-center"
              >
                Get in touch
              </a>

              {/* Duppy mark */}
              <div className="flex items-center justify-center gap-2">
                <GhostIcon size={16} color="#E8943A" />
                <span className="text-duppy-muted text-xs italic" style={{ fontFamily: 'var(--font-fraunces), serif' }}>
                  Your invisible operator.
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
