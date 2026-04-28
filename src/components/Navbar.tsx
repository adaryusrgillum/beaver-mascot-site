import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'

const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'OUR CRAFT', href: '#services' },
  { label: 'TIDE PLANS', href: '#packages' },
  { label: 'RESULTS', href: '#stats' },
  { label: 'THE POD', href: '#contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/images/whale-logo.png"
                alt="AdvertiseWhale Logo"
                className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-oswald text-lg font-bold tracking-wider text-slate-900 block leading-tight">
                ADVERTISE<span className="text-sky-500">WHALE</span>
              </span>
              <span className="font-space text-[10px] tracking-[3px] text-slate-400 uppercase">.COM</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-xs font-space tracking-[2px] text-slate-500 hover:text-sky-500 transition-all duration-300 rounded-lg hover:bg-sky-50"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 text-sky-500/60 mr-2">
              <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              <span className="font-space text-[10px] tracking-wider">SURFING NOW</span>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-space text-xs font-bold tracking-wider px-5 py-2.5 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/25"
            >
              <Zap size={14} className="fill-white" />
              DIVE IN!
            </a>
          </div>

          <button
            className="md:hidden text-slate-700 p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-100">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-space tracking-widest text-slate-600 hover:text-sky-500 hover:bg-sky-50 transition-all py-3 px-3 rounded-lg"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center bg-sky-500 text-white font-space text-sm font-bold tracking-wider px-5 py-3 rounded-lg mt-4"
            >
              DIVE IN!
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
