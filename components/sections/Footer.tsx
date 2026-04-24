import GhostIcon from '@/components/icons/GhostIcon'

const productLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Industries', href: '#industries' },
  { label: 'Case study', href: '#case-study' },
]

const companyLinks = [
  { label: 'About', href: '#about' },
  { label: 'Contact', href: 'mailto:hello@duppy.ai' },
  { label: 'Privacy', href: '#privacy' },
]

const socials = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.528 5.852L.057 23.995l6.304-1.451A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.306-1.558l-.379-.228-3.941.907.948-3.825-.249-.393A9.818 9.818 0 0 1 2.182 12C2.182 6.561 6.561 2.182 12 2.182S21.818 6.561 21.818 12 17.439 21.818 12 21.818z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="relative bg-duppy-dark overflow-hidden">
      {/* Amber horizon glow — rises from bottom center */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '65%',
          background: 'radial-gradient(ellipse 120% 90% at 50% 115%, rgba(232,148,58,0.18) 0%, rgba(195,105,15,0.07) 42%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      {/* Links section */}
      <div className="relative z-10 max-w-7xl mx-auto pt-20 px-6">
        <div className="flex flex-col md:flex-row md:justify-between gap-14 md:gap-12 pb-16 border-b border-white/8">

          {/* Brand column */}
          <div className="flex flex-col gap-6 md:max-w-sm">
            <div className="flex items-center gap-2.5">
              <GhostIcon size={28} color="#E8943A" />
              <span
                className="text-white"
                style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 700, fontSize: '26px', letterSpacing: '0.06em' }}
              >
                DUPPY
              </span>
            </div>

            <p className="text-duppy-muted text-base leading-relaxed">
              The invisible operator behind your business.
              <br />
              Your brand, your systems, one interface.
            </p>

            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-[8px] bg-duppy-card border border-white/8 flex items-center justify-center text-duppy-muted hover:text-duppy-amber hover:border-duppy-amber/30 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <a
              href="mailto:hello@duppy.ai"
              className="inline-flex items-center gap-2 text-duppy-amber text-base font-semibold hover:text-duppy-amber-light transition-colors"
            >
              <GhostIcon size={14} color="currentColor" />
              <span>hello@duppy.ai</span>
            </a>
          </div>

          {/* Nav columns — stacked on mobile, side by side on desktop */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-16">

            {/* Product links */}
            <div>
              <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">The Operator</h4>
              <ul className="flex flex-col gap-3">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-duppy-muted text-base hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company links */}
            <div>
              <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">The Studio</h4>
              <ul className="flex flex-col gap-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-duppy-muted text-base hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Copyright row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-6">
          <p className="text-duppy-muted text-sm">© 2026 DUPPY. All rights reserved.</p>
          <p className="text-duppy-muted/40 text-xs italic" style={{ fontFamily: 'var(--font-fraunces), serif' }}>
            The invisible operator.
          </p>
        </div>
      </div>

      {/* Bottom wordmark — centered, ghost + DUPPY, flush to footer base */}
      <div
        className="relative z-10 overflow-hidden flex items-end justify-center"
        style={{ height: 'clamp(128px, 15.5vw, 205px)' }}
        aria-hidden="true"
      >
        <div className="flex items-end">
          <div
            className="[&>svg]:!w-full [&>svg]:!h-full flex-shrink-0"
            style={{ width: 'clamp(92px, 14.5vw, 178px)', height: 'clamp(92px, 14.5vw, 178px)' }}
          >
            <GhostIcon
              size={160}
              color="rgba(255,255,255,0.07)"
              bgColor="transparent"
            />
          </div>
          <span
            className="text-white select-none whitespace-nowrap"
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontWeight: 700,
              letterSpacing: '0.06em',
              fontSize: 'clamp(88px, 13.5vw, 190px)',
              lineHeight: 0.88,
              opacity: 0.055,
              marginLeft: '0.08em',
            }}
          >
            DUPPY
          </span>
        </div>
      </div>
    </footer>
  )
}
