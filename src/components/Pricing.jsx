function Pricing() {
  const memberships = [
    {
      name: 'Agent',
      price: '$40',
      period: 'per month',
      features: [
        'The Advancement.',
        'Unlocks the Partnership Index and Performance Ledger.',
        'For creators managing multiple brands and negotiations.',
      ],
    },
    {
      name: 'Managing Director',
      price: '$70',
      period: 'per month',
      features: [
        'The Full Firm Experience.',
        'Access to every tool, advanced analytics, and exclusive deal insights.',
        'For creators ready to turn influence into enterprise.',
      ],
    },
  ]

  return (
    <section id="pricing" className="bg-[#EDE6D6] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm tracking-wide uppercase text-[#C8A96E]">MEMBERSHIP — Titles, Not Tiers</p>
          <div className="mt-3 h-px bg-[#C8A96E]/30 mx-auto max-w-sm" />
          <h2 className="mt-6 text-3xl sm:text-4xl font-semibold text-[#0B3D2E]">We don’t do plans. We grant titles.</h2>
          <p className="mt-2 text-[#2F4F4F]">Each one earned — not subscribed.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {memberships.map((m, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-[#0B3D2E]/20 bg-white p-6 flex flex-col"
            >
              <div className="flex-1">
                <h3 className="text-xl font-medium text-[#0B3D2E]">{m.name}</h3>
                <div className="mt-4 flex items-end gap-2">
                  <span className="text-4xl font-semibold text-[#0B3D2E]">{m.price}</span>
                  <span className="text-sm text-[#2F4F4F]">{m.period}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {m.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#2F4F4F]">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#C8A96E]"></span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#"
                className="mt-6 inline-flex items-center justify-center rounded-md px-6 py-3 font-medium border border-[#0B3D2E] text-[#0B3D2E] hover:bg-[#0B3D2E]/5"
              >
                Request consideration
              </a>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-[#0B3D2E]">
          No middlemen. No gatekeepers. Just creators with leverage.
        </p>
      </div>
    </section>
  )
}

export default Pricing
