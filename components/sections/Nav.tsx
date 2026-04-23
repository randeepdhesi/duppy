'use client'

import { useState, useEffect } from 'react'
import GhostIcon from '@/components/icons/GhostIcon'

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Industries', href: '#industries' },
  { label: 'About', href: '#about' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <GhostIcon size={28} color="#6C3FC5" />
          <span
            className={`font-bold text-lg lowercase tracking-tight transition-colors ${
              scrolled ? 'text-[#111111]' : 'text-white'
            }`}
          >
            duppy.ai
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? 'text-[#6B7280]' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:hello@duppy.ai"
            className="bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#5a32a3] transition-colors"
          >
            Get in touch
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className={`block w-5 h-0.5 transition-colors ${scrolled ? 'bg-[#111111]' : 'bg-white'}`} />
          <span className={`block w-5 h-0.5 transition-colors ${scrolled ? 'bg-[#111111]' : 'bg-white'}`} />
          <span className={`block w-5 h-0.5 transition-colors ${scrolled ? 'bg-[#111111]' : 'bg-white'}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#6B7280] font-medium hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:hello@duppy.ai"
            className="bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#5a32a3] transition-colors text-center"
          >
            Get in touch
          </a>
        </div>
      )}
    </nav>
  )
}
