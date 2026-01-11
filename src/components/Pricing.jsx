import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'

function Pricing() {
  const plans = [
    {
      name: 'Top Agent',
      price: 199,
      period: '(Lifetime Access)',
      description: 'Agent-level guidance to help you pitch with clarity, price with confidence, and negotiate better partnerships.',
      features: [
        'Direct access to 1M+ verified brand decision-makers',
        'Access up to 50 brand contacts per month, on demand',
        'Agent-grade pitches, drafted in minutes',
        'Pricing and negotiation guidance informed by real deals',
        'Brand insight to identify the right partnership angles',
        'Meeting prep and call scripts, when it matters most',
        'Lifetime access to all future updates and releases',
      ],
      cta: 'Get Representation',
      spots: 97,
    },
  ]

  return (
    <section id="pricing" className="bg-[#EDE6D6] py-10 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Label */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-8 h-px bg-[#C8A96E]" />
          <span className="text-xs tracking-[0.2em] uppercase text-[#C8A96E]">Members Club</span>
        </div>

        {/* Title */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B3D2E]">MEMBERSHIP — Titles, Not Tiers</h2>
          <p className="mt-3 text-[#2F4F4F]">We don’t do plans. We grant access</p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 justify-items-center gap-6 md:gap-8">
          {plans.map((plan, idx) => (
            <div key={idx} className="relative w-full max-w-xl">
              {/* Stronger golden halo */}
              <div className="pointer-events-none absolute -inset-2 rounded-[2rem] bg-[#C8A96E]/40 blur-2xl" />
              <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[#C8A96E]/25 blur-3xl" />

              <div className="relative z-10 rounded-3xl bg-[#EDE6D6] p-1.5">
                <div className="relative rounded-2xl border border-[#C8A96E] bg-gradient-to-br from-[#F6F2EA] to-[#EDE6D6] shadow-[0_0_40px_rgba(200,169,110,0.2),0_6px_24px_rgba(11,61,46,0.08)] overflow-hidden ring-1 ring-[#C8A96E]/40">
                  {/* Membership card accents */}
                  <div className="absolute inset-x-0 top-0 h-px bg-[#C8A96E]" />
                  {/* Bottom shade */}
                  <div className="absolute inset-x-0 bottom-0 h-24 sm:h-28 bg-gradient-to-t from-[#0B3D2E]/8 to-transparent pointer-events-none" />

                  <div className="relative z-10 p-6 sm:p-8">
                    <div className="flex items-baseline justify-between">
                      <h4 className="text-lg sm:text-2xl font-semibold text-[#0B3D2E]">{plan.name}</h4>
                      <div className="text-[#0B3D2E]">
                        <span className="text-3xl sm:text-4xl md:text-5xl font-bold">${plan.price}</span>
                        <span className="ml-2 text-sm sm:text-base md:text-lg italic text-[#2F4F4F]">{plan.period}</span>
                      </div>
                    </div>

                    <p className="mt-3 text-[#2F4F4F]">{plan.description}</p>
                    {/* Gold divider under description */}
                    <div className="mt-4">
                      <span className="block w-full h-px bg-[#C8A96E]" />
                    </div>

                    <ul className="mt-6 space-y-3">
                      {plan.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-3 text-[#0B3D2E]">
                          <Check strokeWidth={3} className="mt-0.5 h-5 w-5 text-[#0B3D2E]" />
                          <span className="text-[#2F4F4F]">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/checkout"
                      className="mt-8 mx-auto flex w-full sm:w-auto items-center justify-center gap-3 rounded-lg bg-[#0B3D2E] px-6 py-3.5 sm:px-8 sm:py-4 text-[#EDE6D6] text-lg font-semibold shadow-[0_8px_24px_rgba(11,61,46,0.15)] hover:bg-[#0B3D2E]/90 transition-colors"
                      aria-label="Get access checkout"
                    >
                      <span>{plan.cta}</span>
                    </Link>

                    {/* Spots left pill below the CTA */}
                    <div className="mt-2 flex justify-center">
                      <span className="inline-flex items-center rounded-full bg-[#C8A96E] text-[#0B3D2E] px-3 py-1.5 text-xs font-semibold shadow-sm">
                        Only {plan.spots} Spots Left
                      </span>
                    </div>

                    {/* Subtext under button */}
                    <div className="mt-3 text-center text-sm italic text-[#2F4F4F]">Full agent access for 7 days. No charge.</div>

                    <div className="mt-6 text-center text-xs tracking-[0.2em] uppercase text-[#C8A96E]">Keep 100% of what you make</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
