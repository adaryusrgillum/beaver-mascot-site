import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, Crown, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const plans = [
  {
    name: 'POD STARTER',
    subtitle: 'For the solo swimmer',
    price: '$99',
    period: '/mo',
    features: [
      'Google & Facebook Ads',
      'Targeted Audience Setup',
      'Monthly Tide Reports',
      'Ad Copy & Creative',
    ],
    highlighted: false,
    popular: false,
    image: 'images/whale-idea.png',
  },
  {
    name: 'CURRENT RIDER',
    subtitle: 'Claim your waters',
    price: '$199',
    period: '/mo',
    features: [
      'Everything in Pod Starter',
      'Geofencing Campaigns',
      'Lead Tracking',
      'Location Analytics',
    ],
    highlighted: false,
    popular: false,
    image: 'images/whale-idea.png',
  },
  {
    name: 'TIDE MASTER',
    subtitle: 'Rule the reef',
    price: '$299',
    period: '/mo',
    features: [
      'Everything in Current Rider',
      'Social Media Management',
      'Content Creation',
      'Community Engagement',
    ],
    highlighted: true,
    popular: true,
    image: 'images/whale-crown.png',
  },
  {
    name: 'DEEP BLUE',
    subtitle: 'Full-scale ocean operation',
    price: '$499',
    period: '/mo',
    features: [
      'Everything in Tide Master',
      'Dedicated Strategy Call',
      'Priority Support',
      'Real-time Tide Dashboard',
    ],
    highlighted: false,
    popular: false,
    image: 'images/whale-build.png',
  },
]

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.pricing-header',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } }
      )
      gsap.fromTo('.pricing-card',
        { y: 70, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: '.pricing-grid', start: 'top 75%' } }
      )
      gsap.fromTo('.pricing-whale',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'back.out(1.4)',
          scrollTrigger: { trigger: '.pricing-whale', start: 'top 85%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="packages" ref={sectionRef} className="relative z-10 py-28 sm:py-36 bg-slate-50 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-sky-100/50 rounded-full blur-[150px] pointer-events-none" />
      <div className="dot-pattern absolute inset-0 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="pricing-header flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-sky-400" />
              <p className="font-space text-[11px] tracking-[4px] text-sky-500 uppercase">Tide Plans</p>
            </div>
            <h2 className="font-oswald text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 uppercase leading-[0.95]">
              Pick Your<br />
              <span className="gradient-text-animated">Tide Plan</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-sky-300" />
            <p className="font-oswald text-lg text-slate-400 uppercase tracking-wide italic">
              No contracts. Just whale work.
            </p>
          </div>
        </div>

        <div className="pricing-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card relative rounded-2xl transition-all duration-500 overflow-visible ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-sky-500 via-sky-500 to-blue-600 text-white scale-105 shadow-2xl shadow-sky-500/20 z-10'
                  : 'bg-white border border-slate-200 text-slate-900 hover:border-sky-200 hover:-translate-y-3 hover:shadow-xl hover:shadow-sky-100/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 animate-pulse-glow rounded-full">
                  <div className="flex items-center gap-1.5 bg-white text-sky-500 text-[10px] font-space font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-full border border-sky-200 shadow-sm">
                    <Crown size={10} className="fill-sky-500" />
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="absolute -top-8 right-4 w-16 h-16 z-10">
                <img
                  src={plan.image}
                  alt=""
                  className="w-full h-full object-contain drop-shadow-xl hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className={`p-6 ${plan.highlighted ? 'pt-8' : ''}`}>
                <div className="mb-4">
                  <h3 className={`font-oswald text-xl font-bold uppercase tracking-wide ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mt-0.5 ${plan.highlighted ? 'text-white/60' : 'text-slate-400'}`}>
                    {plan.subtitle}
                  </p>
                </div>

                <div className="mb-6 pb-5 border-b border-current/10">
                  <div className="flex items-baseline gap-1">
                    <span className={`font-oswald text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm ${plan.highlighted ? 'text-white/60' : 'text-slate-400'}`}>
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${plan.highlighted ? 'bg-white/20' : 'bg-sky-50'}`}>
                        <Check size={12} className={plan.highlighted ? 'text-white' : 'text-sky-500'} />
                      </div>
                      <span className={`text-sm leading-snug ${plan.highlighted ? 'text-white/80' : 'text-slate-500'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3.5 rounded-xl font-space text-sm font-bold tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 ${
                    plan.highlighted
                      ? 'bg-white text-sky-500 hover:bg-sky-50 shadow-lg'
                      : 'bg-slate-50 border border-slate-200 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600'
                  }`}
                >
                  START SURFING
                  <ArrowRight size={14} />
                </button>
              </div>

              {plan.highlighted && (
                <>
                  <div className="absolute inset-0 -z-10 bg-sky-400/20 rounded-2xl blur-2xl" />
                  <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                    <div className="card-shimmer w-full h-full" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="pricing-whale mt-24 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex items-center gap-6">
            <img
              src="images/whale-celebrate.png"
              alt="Celebrating whale"
              className="w-40 h-auto object-contain drop-shadow-2xl animate-bounce-soft"
            />
            <div>
              <p className="font-oswald text-2xl text-slate-500 italic">
                "Every pod deserves a current that actually works."
              </p>
              <p className="font-space text-sm text-sky-500 mt-2 tracking-wider">
                — THE WHALE POD
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            {[
              { label: 'No Setup Fees', icon: Check },
              { label: 'Cancel Anytime', icon: Check },
              { label: '24/7 Support', icon: Check },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-2 text-slate-400">
                <t.icon size={14} className="text-sky-400" />
                <span className="font-space text-xs tracking-wider">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
