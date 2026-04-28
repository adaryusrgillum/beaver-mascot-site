import { Target, BarChart3, TrendingUp, Shield } from 'lucide-react'

const benefits = [
  { icon: Target, title: 'Focused', subtitle: 'We find the best currents', color: '#0ea5e9' },
  { icon: BarChart3, title: 'Trackable', subtitle: 'Every ripple accounted for', color: '#38bdf8' },
  { icon: TrendingUp, title: 'Deep Impact', subtitle: 'Waves that keep rolling', color: '#0284c7' },
  { icon: Shield, title: 'Depth Strong', subtitle: 'No contracts, no BS', color: '#0ea5e9' },
]

export default function BenefitsBar() {
  return (
    <section className="relative z-10 py-10 bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {benefits.map((b, i) => (
            <div key={b.title} className="flex items-center gap-4 group" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                <b.icon size={22} className="text-white" />
              </div>
              <div>
                <h3 className="font-oswald text-lg font-bold text-white uppercase tracking-wide">{b.title}</h3>
                <p className="text-xs text-white/70 font-space">{b.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
