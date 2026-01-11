function Intro() {
  return (
    <section className="bg-[#F6F2EA] py-8 sm:py-10">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap');
        .font-baskerville{font-family:'Baskerville','Libre Baskerville','Baskerville Old Face','Times New Roman',serif;}
      `}</style>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Centered label with flanking lines */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-8 h-px bg-[#C8A96E]" />
          <span className="text-xs tracking-[0.2em] uppercase text-[#C8A96E]">INTRO: The Brief</span>
          <span className="w-8 h-px bg-[#C8A96E]" />
        </div>

        {/* Horizontal, centered pill card */}
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl bg-[#EDE6D6] p-1.5">
            <div className="rounded-2xl bg-[#F6F2EA] shadow p-6 sm:p-10 border-y border-[#C8A96E]">
              {/* Horizontal layout: text left, image right */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
                {/* Left: Title + Narrative text */}
                <div className="flex-1 text-[#2F4F4F]">
                  <h2 className="text-xl sm:text-3xl font-semibold text-[#0B3D2E] mb-4 sm:mb-5">Founder’s Note</h2>
                  <div className="leading-relaxed space-y-4 md:space-y-5">
                    <p className="text-base sm:text-lg">
                      <span className="font-baskerville">Creator representation isn’t a product. It’s presence when it matters most.</span> When you’re writing a pitch, preparing for a brand call, sharing your rate, or deciding whether a contract actually makes sense.
                    </p>
                    <p className="text-base sm:text-lg">Creator Agent brings agent-level perspective and execution: how agents think, what brands actually pay, and which terms are worth pushing back on: so you show up confident, and prepared.</p>
                    <p className="text-base sm:text-lg">This is representation, redesigned for how creators actually work today.</p>
                  </div>
                </div>

                {/* Right: Framed GIF with preserved border (labels removed) */}
                <div className="flex-1 w-full md:max-w-md">
                  <div className="relative rounded-2xl border border-[#C8A96E] bg-[#EDE6D6] shadow-sm overflow-hidden h-56 sm:h-80 md:h-96">
                    {/* GIF */}
                    <img
                      src="https://flamesimagestorage.blob.core.windows.net/files/fe2c4042-cb8c-4144-9d8d-92aeb9c75293_1767651268918_prj_utdafphk/94857c1d-2d99-4498-ac87-38e7aac5c967-IMB_vPJKlA.GIF"
                      alt="Creator Agent desk animation"
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      width="640"
                      height="384"
                    />

                    {/* Inner frame overlay */}
                    <div className="absolute inset-3 rounded-xl border border-[#C8A96E]/50 pointer-events-none z-10" />
                    {/* Corner labels removed per request */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
