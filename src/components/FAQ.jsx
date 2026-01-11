import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

function FAQ() {
  const faqs = [
    {
      q: 'What do I actually get access to?',
      a: 'You get the agent-grade toolkit: verified brand contacts, outreach frameworks, analysis tools, and negotiation guides—everything focused on helping you pitch, negotiate, and close better deals faster.'
    },
    {
      q: 'Is this a traditional subscription?',
      a: 'No. We don’t do tiers or confusing plans. It’s a single membership designed for creators who want agent-level support without the agency retainer.'
    },
    {
      q: 'How many contacts can I reach out to?',
      a: 'You get a monthly allowance of verified brand decision-makers. It’s curated to keep quality high and outreach targeted so your messages land in the right inboxes.'
    },
    {
      q: "What if I can't find a brand contact?",
      a: 'If you can’t find a specific brand contact, email concierge@creatoragent.co and we’ll personally send you the decision-maker you’re looking for.'
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes. You can cancel anytime within the 7-day trial period from your account. If you have an active trial, you keep full access until the end of the trial period.'
    },
    {
      q: 'Do you offer refunds?',
      a: 'We offer a 7-day no-charge trial so you can explore everything. After activation of paid access, refunds aren’t available.'
    },
    {
      q: 'How can I contact customer support?',
      a: 'You can reach our concierge team at concierge@creatoragent.co. We typically respond within 24 hours.'
    },
    {
      q: 'Do I need to be a full-time creator?',
      a: 'No. Whether you’re part-time or full-time, the tools help you pitch more strategically and close with confidence.'
    },
  ]

  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i))
  }

  return (
    <section id="faq" className="bg-[#EDE6D6] py-10">
      <div className="mx-auto max-w-5xl px-6">
        {/* Label */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-8 h-px bg-[#C8A96E]" />
          <span className="text-xs tracking-[0.2em] uppercase text-[#C8A96E]">FAQ</span>
        </div>

        {/* Title */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B3D2E]">Frequently Asked Questions</h2>
          <p className="mt-3 text-[#2F4F4F]">Everything you need to know before you join.</p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className="rounded-xl border border-[#C8A96E]/60 bg-gradient-to-br from-[#F6F2EA] to-[#EDE6D6] shadow-sm">
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-button-${i}`}
                  className="w-full flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 text-left"
                >
                  <span className="text-[#0B3D2E] font-semibold" style={{ fontFamily: 'var(--font-title)' }}>{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#C8A96E] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  className={`${isOpen ? 'block' : 'hidden'} border-t border-[#C8A96E]/30`}
                >
                  <p className="px-4 py-3 sm:px-6 sm:py-4 text-[#2F4F4F]">
                    {item.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
