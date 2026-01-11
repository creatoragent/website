function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#EDE6D6] pt-14 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20">
      {/* Load EB Garamond for the hero title and Baskerville for body copy */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap');
        .font-ebgaramond{font-family:'EB Garamond', Garamond, 'Times New Roman', serif;}
        .font-baskerville{font-family:'Baskerville','Libre Baskerville','Baskerville Old Face','Times New Roman',serif;}
      `}</style>

      {/* Decorative corner accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 w-20 h-20 sm:w-24 sm:h-24 border-t-4 border-l-4 border-[#0B3D2E]/20 rounded-tl-xl"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-24 sm:h-24 border-b-4 border-r-4 border-[#0B3D2E]/20 rounded-br-xl"></div>
      </div>

      <div className="mx-auto max-w-[88rem] px-4 sm:px-8 xl:px-12">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 items-center">
          {/* Copy */}
          <div>
            <h1 className="font-ebgaramond text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-[#0B3D2E]">
              The AI Talent Agent for Creators
            </h1>

            <p className="font-baskerville mt-5 text-base sm:text-lg lg:text-xl leading-tight text-[#2F4F4F] max-w-prose">
              Representation used to be exclusive. Now it’s accessible.
            </p>

            <p className="font-baskerville mt-3 text-base sm:text-lg lg:text-xl leading-tight text-[#2F4F4F] max-w-prose">
              Creator Agent gives you the same playbook top agents use to pitch brands, set pricing, and negotiate better deals.
            </p>

            <p className="font-baskerville mt-3 text-base sm:text-lg lg:text-xl leading-tight text-[#2F4F4F] max-w-prose">
              Without giving up 20% of your income.
            </p>

            <div className="mt-7">
              <a
                href="#pricing"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-md border border-[#0B3D2E] bg-[#0B3D2E] text-[#EDE6D6] px-6 py-3 font-semibold shadow-sm hover:bg-[#0B3D2E]/90 transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EDE6D6]"
                aria-label="Meet Your Agent"
              >
                Meet Your Agent
              </a>
              <p className="w-full mt-2 text-xs text-[#2F4F4F] italic text-center sm:text-left" style={{ fontFamily: 'var(--font-button)' }}>Full agent access for 7 days. No charge.</p>
            </div>
          </div>

          {/* Members' Club card with gold glow */}
          <div className="relative rounded-xl bg-[#EDE6D6] lg:-mt-10 p-0">
            <div className="relative mx-auto w-full sm:w-[30rem]">
              {/* Gold glow backdrop */}
              <div className="pointer-events-none absolute -inset-4 rounded-[1.5rem] bg-[#C8A96E]/40 blur-2xl opacity-60"></div>

              {/* Card */}
              <div className="relative rounded-2xl border border-[#C8A96E] bg-gradient-to-br from-[#F6F2EA] to-[#EDE6D6] shadow-lg">
                <div className="px-6 py-5">
                  <div className="flex items-center justify-between">
                    <div className="h-10 w-10 rounded-full bg-[#0B3D2E] text-[#EDE6D6] flex items-center justify-center text-xs font-semibold tracking-widest">CA</div>
                    <span className="text-[10px] tracking-[0.25em] uppercase text-[#C8A96E]">Members’ Club</span>
                  </div>
                  <div className="mt-4 h-px bg-[#C8A96E]/60"></div>
                  <div className="mt-4">
                    <p className="text-[#0B3D2E] text-lg sm:text-2xl font-semibold">Creator Agent</p>
                    <p className="mt-1 text-[#2F4F4F] text-xs sm:text-sm">Admit to agent-backed correspondence, partnerships, and deals.</p>
                  </div>
                </div>

                <div className="px-6 pb-5">
                  <ul className="text-[#2F4F4F] text-sm space-y-2">
                    <li className="flex items-center gap-2"><span className="h-px w-6 bg-[#C8A96E]"></span> Direct access to 1M+ verified brand decision-makers</li>
                    <li className="flex items-center gap-2"><span className="h-px w-6 bg-[#C8A96E]"></span> Agent-grade pitches drafted in minutes</li>
                    <li className="flex items-center gap-2"><span className="h-px w-6 bg-[#C8A96E]"></span> Pricing and negotiation guides backed by real deals</li>
                    <li className="flex items-center gap-2"><span className="h-px w-6 bg-[#C8A96E]"></span> Keep 100% of what you earn</li>
                  </ul>
                </div>

                <div className="rounded-b-2xl bg-[#0B3D2E]/5 px-6 py-4 flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#2F4F4F]">Est. 2017</span>
                  <a
                    href="#signature"
                    className="inline-flex items-center justify-center rounded-md border border-[#C8A96E] text-[#0B3D2E] bg-[#F6F2EA] px-4 py-2 text-sm font-medium hover:bg-[#EDE6D6] hover:border-[#C8A96E] transition"
                  >
                    Request Invitation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
