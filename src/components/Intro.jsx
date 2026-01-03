function Intro() {
  return (
    <section className="bg-[#F6F2EA]">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="inline-flex items-center gap-2 mb-8">
          <span className="text-xs tracking-[0.2em] uppercase text-[#C8A96E]">INTRO: The Brief</span>
          <span className="w-8 h-px bg-[#C8A96E]/30" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 md:items-center">
          {/* Left: Text content */}
          <div className="space-y-3 sm:space-y-4 text-[#2F4F4F] leading-snug md:self-center">
            <p className="text-base sm:text-lg">Creator representation isn’t a product.</p>
            <p className="text-base sm:text-lg">It’s presence when it matters most.</p>
            <p className="text-base sm:text-lg">When you’re staring at a blank pitch, wondering what actually earns a reply.</p>
            <p className="text-base sm:text-lg">When a brand asks for your rate, and the question is to anchor high, or stay flexible.</p>
            <p className="text-base sm:text-lg">When a contract feels close, but something in the terms doesn’t sit right.</p>
            <p className="text-base sm:text-lg">This is where Creator Agent comes in.</p>
            <p className="text-base sm:text-lg">Not to automate the process, but to bring perspective to it.</p>
            <p className="text-base sm:text-lg">To help you frame outreach like an agent would.</p>
            <p className="text-base sm:text-lg">To validate your rate before you send it.</p>
            <p className="text-base sm:text-lg">To think through partnerships beyond the single deal.</p>
            <p className="text-base sm:text-lg">Every member works with an AI Talent Agent, trained on eight years of experience and over $6M in closed deals.</p>
            <p className="text-base sm:text-lg">This is representation, designed for how solo creators actually work.</p>
          </div>

          {/* Right: Photo placeholder */}
          <div className="relative md:-mt-10 lg:-mt-12">
            <div className="relative rounded-2xl border border-[#C8A96E] bg-[#EDE6D6] shadow-sm h-64 sm:h-80 md:h-[28rem] overflow-hidden">
              {/* Inner frame */}
              <div className="absolute inset-3 rounded-xl border border-[#C8A96E]/50" />

              {/* Top-left label */}
              <div className="absolute top-4 left-4 text-[#0B3D2E] text-xs tracking-[0.2em] uppercase">
                Creator Agent
              </div>

              {/* Bottom-right label */}
              <div className="absolute bottom-4 right-4 text-[#0B3D2E] text-xs">
                Est. 2017
              </div>

              {/* Center placeholder text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[#2F4F4F] text-xs sm:text-sm tracking-[0.25em] uppercase">
                  Photo Placeholder
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
