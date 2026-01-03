function Signature() {
  return (
    <section id="signature" className="relative overflow-hidden bg-[#0B3D2E] text-[#EDE6D6] py-24">
      {/* Abstract design background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <svg
          className="absolute inset-0 h-full w-full mix-blend-soft-light"
          viewBox="0 0 800 600"
          preserveAspectRatio="none"
        >
          <defs>
            <radialGradient id="sigGlow" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#C8A96E" stopOpacity="0.18" />
              <stop offset="60%" stopColor="#C8A96E" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#C8A96E" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="sigStripes" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#C8A96E" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#C8A96E" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {/* soft glow */}
          <rect x="0" y="0" width="800" height="600" fill="url(#sigGlow)" />

          {/* concentric circles */}
          <g fill="none" stroke="#C8A96E" strokeOpacity="0.12">
            <circle cx="400" cy="300" r="220" />
            <circle cx="400" cy="300" r="170" />
            <circle cx="400" cy="300" r="120" />
            <circle cx="400" cy="300" r="70" />
          </g>

          {/* diagonal lines */}
          <g stroke="url(#sigStripes)" strokeWidth="1" transform="rotate(-18 400 300)">
            {Array.from({ length: 22 }).map((_, i) => {
              const x = i * 40 - 40;
              return (
                <line key={i} x1={x} y1={-100} x2={x + 600} y2={700} />
              );
            })}
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-2xl sm:text-3xl tracking-wide uppercase text-[#C8A96E] font-semibold">THE SIGNATURE — Final CTA</h2>
        <div className="mt-4 h-px bg-[#C8A96E]/30 mx-auto max-w-[260px]" />

        <div className="mt-8 space-y-4">
          <p className="text-lg">You’ve read the brief. You’ve seen the record.</p>
          <p className="text-lg">Now it’s time to move from outreach to opportunity.</p>
          <p className="text-lg">Representation isn’t outsourced anymore, it’s built into the way you operate.</p>
          <p className="text-lg">Your membership has been approved.</p>
          <p className="text-lg">Your seat at the table is waiting.</p>
        </div>

        <a
          href="#pricing"
          className="mt-10 inline-flex items-center justify-center rounded-md bg-[#EDE6D6] text-[#0B3D2E] px-6 py-3 font-semibold shadow-sm hover:bg-[#F6F2EA] transition-colors"
        >
          Welcome to the Boardroom
        </a>
      </div>
    </section>
  )
}

export default Signature
