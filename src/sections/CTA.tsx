import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Sparkles } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const text = 'READY TO MAKE A SPLASH THAT MATTERS?'
    const fontSize = 44
    const fontFamily = 'Oswald'
    const padding = 40

    ctx.font = `bold ${fontSize}px ${fontFamily}`
    const metrics = ctx.measureText(text)
    const textWidth = metrics.width

    const canvasW = (textWidth + padding * 2) * 2
    const canvasH = (fontSize + padding * 2) * 2
    canvas.width = canvasW
    canvas.height = canvasH
    canvas.style.width = `${textWidth + padding * 2}px`
    canvas.style.height = `${fontSize + padding * 2}px`

    let progress = 0
    let animId: number

    function draw() {
      ctx!.clearRect(0, 0, canvasW, canvasH)
      ctx!.font = `bold ${fontSize * 2}px ${fontFamily}`
      ctx!.textAlign = 'center'
      ctx!.textBaseline = 'middle'

      const centerX = canvasW / 2
      const centerY = canvasH / 2

      ctx!.save()
      ctx!.beginPath()
      ctx!.rect(0, canvasH * (1 - progress), canvasW, canvasH * progress)
      ctx!.clip()

      const glitchIntensity = 0.02 + Math.sin(Date.now() * 0.005) * 0.015
      const glitchLines: number[] = []
      if (glitchIntensity > 0.01) {
        const lineCount = Math.floor(glitchIntensity * 40)
        for (let i = 0; i < lineCount; i++) glitchLines.push(Math.random())
      }

      for (const lineY of glitchLines) {
        const y = centerY + (lineY - 0.5) * fontSize * 2
        const offset = (Math.random() - 0.5) * glitchIntensity * 60
        ctx!.fillStyle = `rgba(14, 165, 233, 0.8)`
        ctx!.fillText(text, centerX + offset, y)
        ctx!.fillStyle = `rgba(2, 132, 199, 0.6)`
        ctx!.fillText(text, centerX - offset, y)
      }

      ctx!.fillStyle = '#0f172a'
      ctx!.fillText(text, centerX, centerY)
      ctx!.restore()

      if (progress < 1) progress += 0.008
      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(animId)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePos({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const gsapCtx = gsap.context(() => {
      gsap.fromTo('.cta-whale',
        { x: 100, opacity: 0, scale: 0.8 },
        { x: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'back.out(1.2)',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' } }
      )
      gsap.fromTo('.cta-btn-wrap',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 55%' } }
      )
      gsap.to('.cta-whale-img', {
        y: -10, duration: 2.5, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 1.5,
      })
    }, sectionRef)
    return () => gsapCtx.revert()
  }, [])

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="relative z-10 py-28 sm:py-36 bg-white overflow-hidden"
      style={{
        transform: `skewX(${(mousePos.x - 0.5) * 0.3}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
    >
      <div className="absolute top-20 left-20 w-3 h-3 rounded-full bg-sky-400/30 animate-pulse" />
      <div className="absolute bottom-32 right-32 w-2 h-2 rounded-full bg-sky-400/20 animate-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-10 w-px h-20 bg-gradient-to-b from-transparent via-sky-300 to-transparent" />
      <div className="absolute top-1/3 right-20 w-px h-32 bg-gradient-to-b from-transparent via-sky-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-200 bg-sky-50">
              <Sparkles size={12} className="text-sky-500" />
              <span className="font-space text-[11px] tracking-[3px] text-sky-600 uppercase">Ready to Swim?</span>
            </div>

            <div className="flex justify-center lg:justify-start mb-8">
              <canvas ref={canvasRef} className="max-w-full" />
            </div>

            <p className="text-lg text-slate-500 mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed">
              We engineer campaigns that surge like a whale breaching the surface. From first ripple to tidal wave — we've got your pod covered.
            </p>

            <div className="cta-btn-wrap flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-sky-500 hover:bg-sky-600 text-white font-space text-sm font-bold tracking-wider px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/30"
              >
                START SURFING TODAY
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:681-837-2078"
                className="inline-flex items-center gap-2 border border-slate-200 hover:border-sky-300 text-slate-500 hover:text-sky-600 font-space text-sm tracking-wider px-6 py-4 rounded-xl transition-all duration-300 hover:bg-sky-50"
              >
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                681-837-2078
              </a>
            </div>
          </div>

          <div className="cta-whale relative flex-shrink-0">
            <img
              src="/images/whale-megaphone.png"
              alt="Whale with megaphone"
              className="cta-whale-img w-64 sm:w-80 lg:w-[380px] h-auto object-contain drop-shadow-2xl relative z-10"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-sky-200/40 rounded-full blur-[70px] -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-sky-200/40 rounded-full -z-10 animate-spin-slow" />
            <div className="absolute top-1/3 -right-8 flex flex-col gap-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-8 h-[2px] rounded-full bg-sky-300/40"
                  style={{ animation: `pulse 2s ease-in-out ${i * 0.3}s infinite`, width: `${24 + i * 8}px` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
