import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const whaleRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-tag', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out', delay: 0.2 })
      gsap.from('.hero-line', { y: 80, opacity: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out', delay: 0.4 })
      gsap.from('.hero-subtitle', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.9 })
      gsap.from('.hero-btn', { y: 20, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out', delay: 1.1 })
      gsap.from('.hero-stats-mini', { y: 20, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', delay: 1.3 })
      gsap.from(whaleRef.current, { x: 120, opacity: 0, scale: 0.9, duration: 1.4, ease: 'back.out(1.2)', delay: 0.5 })
      gsap.to(whaleRef.current, { y: -18, duration: 3, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 1.9 })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="home" ref={sectionRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white noise-bg">
      <div className="absolute top-20 left-10 w-72 h-72 bg-sky-200/30 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-[120px]" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-sky-400/50 animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-sky-400/40 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="hero-tag inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-200 bg-sky-50">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              <span className="font-space text-[11px] tracking-[3px] text-sky-600 uppercase">Waves That Deliver</span>
            </div>

            <h1 className="font-oswald font-bold uppercase leading-[0.92] text-slate-900">
              <span className="hero-line block text-5xl sm:text-6xl lg:text-[5.5rem]">Ride the Tide</span>
              <span className="hero-line block text-5xl sm:text-6xl lg:text-[5.5rem] gradient-text-animated">Make a Splash</span>
              <span className="hero-line block text-5xl sm:text-6xl lg:text-[5.5rem]">Dominate</span>
            </h1>

            <p className="hero-subtitle text-lg text-slate-500 max-w-lg leading-relaxed">
              Unstoppable marketing momentum. Deep strategy. Massive reach. We don't just run ads — we create tidal waves of growth.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="hero-btn group inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-space text-sm font-bold tracking-wider px-7 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/25"
              >
                START SURFING
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#packages"
                className="hero-btn group inline-flex items-center gap-2 border border-slate-200 hover:border-sky-300 text-slate-600 hover:text-sky-600 font-space text-sm font-semibold tracking-wider px-7 py-4 rounded-xl transition-all duration-300 hover:bg-sky-50"
              >
                <Play size={14} className="text-sky-500" />
                SEE TIDE PLANS
              </a>
            </div>

            <div className="flex items-center gap-8 pt-4">
              {[
                { value: '5M+', label: 'Waves Sent' },
                { value: '10K+', label: 'Reefs Built' },
                { value: '50+', label: 'Pods' },
              ].map((s) => (
                <div key={s.label} className="hero-stats-mini">
                  <div className="font-oswald text-2xl font-bold text-slate-900">{s.value}</div>
                  <div className="font-space text-[10px] tracking-wider text-slate-400 uppercase">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <img
              ref={whaleRef}
              src="/images/whale-hero.png"
              alt="Cool Whale Mascot"
              className="w-72 sm:w-80 lg:w-[440px] h-auto object-contain drop-shadow-2xl relative z-10"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-200/40 rounded-full blur-[80px] -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-200/30 rounded-full blur-[60px] -z-10 animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-sky-200/40 rounded-full -z-10 animate-spin-slow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] border border-dashed border-sky-200/30 rounded-full -z-10 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
