import GhostIcon from '@/components/icons/GhostIcon'

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 pb-12 border-b border-white/10">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <GhostIcon size={24} color="#6C3FC5" />
              <span className="text-white font-bold text-lg lowercase">duppy.ai</span>
            </div>
            <p className="text-[#6B7280] text-sm">The spirit behind your operation</p>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Product</h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#how-it-works" className="text-[#6B7280] text-sm hover:text-white transition-colors">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#industries" className="text-[#6B7280] text-sm hover:text-white transition-colors">
                    Industries
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Company</h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#about" className="text-[#6B7280] text-sm hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@duppy.ai" className="text-[#6B7280] text-sm hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-[#6B7280] text-xs pt-8">© 2026 Duppy.ai. All rights reserved.</p>
      </div>
    </footer>
  )
}
