function Showcase() {
  return (
    <section id="showcase" className="bg-[#EDE6D6] text-[#0B3D2E] py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Outer golden aura to match the reference photo (hidden on mobile for performance) */}
        <div className="relative overflow-hidden">
          <div
            aria-hidden
            className="hidden sm:block pointer-events-none absolute -inset-2 rounded-[1.6rem] bg-[#C8A96E]/25 blur-[10px]"
          />

          {/* Primary framed panel */}
          <div className="relative z-10 mx-auto rounded-[1.6rem] border border-[#C8A96E] bg-[#F9F5EC] p-5 sm:p-8 md:p-10 shadow-[0_16px_28px_rgba(200,169,110,0.18)]">
            {/* Soft inner golden glow + subtle ring to mirror Founder's Note */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[1.6rem] shadow-[inset_0_0_40px_rgba(200,169,110,0.10)] ring-1 ring-[#C8A96E]/20"
            />
            {/* Inner rule for the stationery look (pulled farther from content for breathing room) */}
            <div className="pointer-events-none absolute inset-[14px] sm:inset-[20px] rounded-2xl border border-[#C8A96E]/40" />

            <div className="grid items-center gap-6 sm:gap-8 md:gap-10 md:grid-cols-2">
              {/* Left: Photo within bordered frame */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-md rounded-xl overflow-hidden border border-[#C8A96E] bg-[#EDE6D6]">
                  <div className="absolute inset-3 rounded-lg border border-[#C8A96E]/35 pointer-events-none" />
                  <img
                    src="https://flamesimagestorage.blob.core.windows.net/files/f16b05e0-f264-48c7-9d7e-0a43381b6c3b_1767569397891_prj_utdafphk/a35a1aac-c50a-4211-ba74-07ab32584348-IMB_TywgbH.GIF"
                    alt="Agent showcase"
                    className="w-full h-[280px] sm:h-[420px] md:h-[500px] object-cover object-top"
                    loading="lazy"
                    decoding="async"
                    width="640"
                    height="420"
                  />
                </div>
              </div>

              {/* Right: Text content */}
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
                  <span className="w-8 h-px bg-[#C8A96E]" />
                  <span className="text-xs tracking-[0.2em] uppercase text-[#C8A96E]">About</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Meet Your Agent.</h2>

                <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4 text-[#2F4F4F]">
                  <p className="text-base sm:text-lg leading-relaxed">Jordan AI isn’t a chatbot. It’s an AI Talent Agent trained on 8 years of real deal-making experience and $6M+ in closed brand partnerships.</p>
                  <p className="text-base sm:text-lg leading-relaxed">Every member gets their own agent, available whenever a pitch needs tightening, a rate needs validating, or a contract needs a second look.</p>
                  <p className="text-base sm:text-lg leading-relaxed">Agent-level judgment. On call. 24/7.</p>
                </div>

                <div className="mt-6 sm:mt-8">
                  <button className="inline-flex w-full sm:w-auto items-center justify-center rounded-md border border-[#0B3D2E] bg-[#0B3D2E] px-5 py-3 text-white hover:bg-transparent hover:text-[#0B3D2E] transition min-h-[44px]">
                    Let's Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Showcase
