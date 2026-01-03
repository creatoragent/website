import { Mail, BarChart3, Users, BadgeCheck } from 'lucide-react'

function Story() {
  const brands = Array.from({ length: 8 }).map((_, i) => ({ name: `Brand ${i + 1}` }))

  return (
    <section id="story" className="bg-[#F6F2EA] text-[#0B3D2E] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-xs tracking-[0.2em] uppercase text-[#0B3D2E]">ACCESS</span>
          <span className="w-8 h-px bg-[#C8A96E]" />
          <span className="text-xs tracking-[0.2em] uppercase text-[#C8A96E]">1M+ VERIFIED EMAILS</span>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold">Access the Brands Everyone Wants</h2>
          <p className="mt-6 text-[#2F4F4F] text-lg leading-relaxed">
            Pitch the people who can actually say yes. Direct access to 1M+ verified decision-makers, not generic inboxes.
          </p>
        </div>

        {/* Centered logo placeholders below the text */}
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-5xl rounded-xl border border-[#0B3D2E]/15 bg-[#EDE6D6] p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {brands.map((brand) => (
                <div
                  key={brand.name}
                  className="flex items-center justify-center rounded-md bg-white/60 border border-[#C8A96E] p-4 shadow-sm hover:bg-white transition"
                >
                  <span className="text-[#2F4F4F] text-[10px] sm:text-xs tracking-[0.25em] uppercase">Logo</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features — Inside the Agency Files */}
        <div className="mt-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-sm sm:text-base tracking:[0.2em] uppercase text-[#0B3D2E]">FEATURES</span>
            <span className="w-8 h-px bg-[#C8A96E]" />
            <span className="text-sm sm:text-base tracking-[0.2em] uppercase text-[#C8A96E]">INSIDE THE AGENCY FILES</span>
          </div>

          <p className="text-[#2F4F4F] text-lg">Get insider access to Agency-level tools but 10X faster.</p>

          <div className="mt-10 grid sm:grid-cols-2 gap-8">
            <div className="rounded-xl border border-[#0B3D2E]/15 bg-[#EDE6D6] p-6">
              <div className="flex justify-center mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/70 border border-[#C8A96E]/60">
                  <Mail size={20} className="text-[#C8A96E]" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center">The Correspondence Concierge</h3>
              <p className="mt-3 text-[#2F4F4F] text-center">
                Write pitches that get replies. Crafts personalized outreach using proven frameworks, so your emails are relevant, confident, and worth answering.
              </p>
              <p className="mt-3 text-[#C8A96E] text-center text-xs sm:text-sm italic font-bold">→ Less guessing. More replies.</p>
            </div>

            <div className="rounded-xl border border-[#0B3D2E]/15 bg-[#EDE6D6] p-6">
              <div className="flex justify-center mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/70 border border-[#C8A96E]/60">
                  <BarChart3 size={20} className="text-[#C8A96E]" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center">The Partnership Index</h3>
              <p className="mt-3 text-[#2F4F4F] text-center">Spot what brands are missing, and pitch it.</p>
              <p className="mt-1 text-[#2F4F4F] text-center">Analyzes a brand’s Instagram to uncover content gaps, messaging weaknesses, and creative opportunities you can own.</p>
              <p className="mt-1 text-[#C8A96E] text-center text-xs sm:text-sm italic font-bold">→ Pitch with strategy</p>
            </div>

            <div className="rounded-xl border border-[#0B3D2E]/15 bg-[#EDE6D6] p-6">
              <div className="flex justify-center mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/70 border border-[#C8A96E]/60">
                  <Users size={20} className="text-[#C8A96E]" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center">The Contact Rolodex</h3>
              <p className="mt-3 text-[#2F4F4F] text-center">Pitch the people who can actually say yes. Direct access to 1M+ verified decision-makers, not generic inboxes.</p>
              <p className="mt-3 text-[#C8A96E] text-center text-xs sm:text-sm italic font-bold">→ Faster responses. Shorter deal cycles.</p>
            </div>

            <div className="rounded-xl border border-[#0B3D2E]/15 bg-[#EDE6D6] p-6">
              <div className="flex justify-center mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/70 border border-[#C8A96E]/60">
                  <BadgeCheck size={20} className="text-[#C8A96E]" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center">The Deal Concierge</h3>
              <p className="mt-3 text-[#2F4F4F] text-center">Negotiate with confidence, and close. Guides every reply, counteroffer, and close to position your work as a strategic partnership, not a one-off post.</p>
              <p className="mt-3 text-[#C8A96E] text-center text-xs sm:text-sm italic font-bold">→ Higher rates. Better terms.</p>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <button className="inline-flex items-center justify-center rounded-md border border-[#0B3D2E] bg-[#0B3D2E] px-6 py-3 text-white hover:bg-transparent hover:text-[#0B3D2E] transition">
              Unlock the Rolodex
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
