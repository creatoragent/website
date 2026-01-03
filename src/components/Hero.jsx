function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#EDE6D6]">
      {/* Decorative corner accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-[#0B3D2E]/20 rounded-tl-xl"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-[#0B3D2E]/20 rounded-br-xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-[#0B3D2E]">
              The AI Talent Agent for Creators
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#2F4F4F] max-w-xl">
              The top 1% of creators earn 90% of the revenue.
            </p>

            <p className="mt-6 text-base sm:text-lg text-[#2F4F4F] max-w-xl">
              Not because they’re better, but because they’re represented.
            </p>

            <p className="mt-6 text-base sm:text-lg text-[#2F4F4F] max-w-xl">
              Access what only the top 1% used to have. Pitch confidently, negotiate higher rates, and land better partnerships - no 20% cut.
            </p>

            <div className="mt-8">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-md bg-[#0B3D2E] text-[#EDE6D6] px-6 py-3 font-medium shadow-sm hover:bg-[#0E4A39] transition-colors"
              >
                Meet Your Agent
              </a>
              <p className="mt-2 text-xs text-[#2F4F4F] italic">Full agent access, free for 7 days.</p>
            </div>
          </div>

          {/* Members' Club card promoted into hero */}
          <div className="relative rounded-xl overflow-hidden border border-[#0B3D2E]/15 bg-[#F6F2EA] lg:-mt-10 p-6 sm:p-8">
            <div className="mx-auto w-full sm:w-[28rem] rounded-2xl border border-[#C8A96E] bg-gradient-to-br from-[#F6F2EA] to-[#EDE6D6] shadow-lg">
              <div className="px-6 py-5">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-full bg-[#0B3D2E] text-[#EDE6D6] flex items-center justify-center text-xs font-semibold tracking-widest">CA</div>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#C8A96E]">Members’ Club</span>
                </div>
                <div className="mt-4 h-px bg-[#C8A96E]/60"></div>
                <div className="mt-4">
                  <p className="text-[#0B3D2E] text-xl sm:text-2xl font-semibold">Creator Agent</p>
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
    </section>
  )
}

export default Hero
