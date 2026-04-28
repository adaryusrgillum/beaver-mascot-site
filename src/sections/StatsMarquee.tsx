const stats = [
  { value: '5M+', label: 'WAVES SENT' },
  { value: '121K', label: 'DIVES TAKEN' },
  { value: '10K+', label: 'REEFS BUILT' },
  { value: '50+', label: 'PODS THRIVING' },
]

export default function StatsMarquee() {
  const doubledStats = [...stats, ...stats, ...stats, ...stats]

  return (
    <section id="stats" className="relative z-10 py-14 bg-slate-50 border-y border-slate-200/60 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-300 to-transparent" />
      <div className="flex animate-marquee whitespace-nowrap">
        {doubledStats.map((stat, i) => (
          <div key={`${stat.label}-${i}`} className="flex items-center gap-6 mx-10">
            <div className="flex items-baseline gap-3">
              <span className="font-oswald text-5xl sm:text-6xl font-bold gradient-text-animated">
                {stat.value}
              </span>
              <span className="font-space text-[10px] tracking-[3px] text-sky-500/50 uppercase">
                {stat.label}
              </span>
            </div>
            <span className="text-sky-300/40 text-3xl">&#9670;</span>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-300 to-transparent" />
    </section>
  )
}
