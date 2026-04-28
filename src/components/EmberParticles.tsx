import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  radius: number
  speedY: number
  opacity: number
  drift: number
  color: string
}

export default function EmberParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const particles: Particle[] = []
    const PARTICLE_COUNT = 100
    let w = 0
    let h = 0

    const colors = [
      '245, 158, 11',   // amber-500
      '251, 191, 36',   // amber-400
      '217, 119, 6',    // amber-600
      '255, 255, 255',  // white (rare)
    ]

    function resize() {
      w = window.innerWidth
      h = window.innerHeight
      canvas!.width = w
      canvas!.height = h
    }

    function createParticle(): Particle {
      return {
        x: Math.random() * w,
        y: h + Math.random() * 150,
        radius: Math.random() * 2.5 + 0.3,
        speedY: Math.random() * 0.6 + 0.15,
        opacity: Math.random() * 0.4 + 0.05,
        drift: (Math.random() - 0.5) * 0.25,
        color: colors[Math.floor(Math.random() * colors.length)],
      }
    }

    function initParticles() {
      particles.length = 0
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = createParticle()
        p.y = Math.random() * h
        particles.push(p)
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h)

      for (const p of particles) {
        p.y -= p.speedY
        p.x += p.drift + Math.sin(p.y * 0.008) * 0.15

        if (p.y < -15) {
          p.y = h + 15
          p.x = Math.random() * w
          p.opacity = Math.random() * 0.4 + 0.05
        }
        if (p.x < -15) p.x = w + 15
        if (p.x > w + 15) p.x = -15

        // Draw particle with soft glow
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.radius * 2, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(${p.color}, ${p.opacity * 0.15})`
        ctx!.fill()

        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(${p.color}, ${p.opacity})`
        ctx!.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    resize()
    initParticles()
    draw()

    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
