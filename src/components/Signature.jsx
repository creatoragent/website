function Signature() {
  return (
    <section id="signature" className="relative overflow-hidden bg-[#0B3D2E] text-[#EDE6D6] pt-8 pb-16">
      {/* Load modern cursive fonts via Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600&family=Great+Vibes&display=swap');
        .font-cursive{font-family:'Dancing Script','Segoe Script','Lucida Handwriting',cursive;}
        .font-signature{font-family:'Great Vibes','Segoe Script','Lucida Handwriting',cursive;}
      `}</style>

      {/* Background accents remain subtle to keep focus on the letter board */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <svg
          className="absolute inset-0 h-full w-full mix-blend-soft-light"
          viewBox="0 0 800 600"
          preserveAspectRatio="none"
        >
          <defs>
            <radialGradient id="sigGlow" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#C8A96E" stopOpacity="0.14" />
              <stop offset="60%" stopColor="#C8A96E" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#C8A96E" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect x="0" y="0" width="800" height="600" fill="url(#sigGlow)" />
          <g fill="none" stroke="#C8A96E" strokeOpacity="0.10">
            <circle cx="400" cy="300" r="220" />
            <circle cx="400" cy="300" r="170" />
            <circle cx="400" cy="300" r="120" />
          </g>
        </svg>
      </div>

      {/* Letter board without gold border, glow, or paper texture */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative rounded-2xl">
          {/* Tighter top spacing to bring the headline closer to the section top */}
          <div className="relative px-8 sm:px-12 pt-6 sm:pt-8 pb-8 sm:pb-12 text-center">
            <h2
              className="text-2xl sm:text-3xl tracking-[0.22em] uppercase text-[#C8A96E] font-semibold"
              style={{ fontFamily: 'var(--font-title)' }}
            >
              MEMBERSHIP APPROVED
            </h2>
            <div className="mt-4 h-px bg-[#C8A96E]/40 mx-auto max-w-[420px]" />

            {/* Body text now uses Baskerville */}
            <div className="mt-8 space-y-6" style={{ fontFamily: 'var(--font-body)' }}>
              <p className="text-[1.375rem] leading-relaxed">You’ve read the brief. You’ve seen the record.</p>
              <p className="text-[1.375rem] leading-relaxed">Now it’s time to move from outreach to opportunity.</p>
              <p className="text-[1.375rem] leading-relaxed">Representation isn’t outsourced anymore, it’s built into the way you operate.</p>
              <p className="text-[1.375rem] leading-relaxed">Your membership has been approved.</p>
              <p className="text-[1.375rem] leading-relaxed">Your seat at the table is waiting.</p>
            </div>

            {/* Equal spacing between the last line, divider, and signature */}
            <div className="mt-8 h-px w-40 bg-[#C8A96E]/45 mx-auto" />
            <div className="mt-8 font-signature text-[2.25rem] sm:text-[2.75rem] leading-none">Jordan AI</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signature