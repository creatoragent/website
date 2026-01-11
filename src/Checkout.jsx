import { useState } from 'react'
import { Lock, ShieldCheck, CreditCard, Check } from 'lucide-react'

export default function Checkout() {
  const [status, setStatus] = useState('')
  const [showCoupon, setShowCoupon] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Success! Your trial is activated. Redirecting to your dashboard… (demo)')
  }

  return (
    <div className="min-h-screen bg-[#F6F2EA] text-[#0B3D2E]">
      {/* Top bar */}
      <header className="bg-[#EDE6D6] border-b border-[#0B3D2E]/10">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#0B3D2E]"></div>
            <a href="/" className="text-[#0B3D2E] font-medium">Creator Agent</a>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-[#0B3D2E]">
            <a href="/#pricing" className="hover:underline">Pricing</a>
            <a href="/agent" className="hover:underline">Agent</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-semibold">Secure Checkout</h1>
          <p className="mt-2 text-[#2F4F4F]">Start your 7-day free access. Cancel anytime within the trial.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Order Summary */}
          <aside className="lg:col-span-2">
            <div className="rounded-2xl border border-[#D7C9A4] bg-[#EDE6D6] shadow-sm p-5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-[#0B3D2E]" size={20} />
                <h2 className="text-lg font-semibold">Your Access</h2>
              </div>
              <div className="mt-4 space-y-3 text-[#2F4F4F]">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-[#0B3D2E]">Top Agent — Lifetime Access</span>
                  <span className="text-[#0B3D2E] font-semibold">$199</span>
                </div>
                <div className="text-sm italic">Includes: Brand Analyzer, Meeting Script Generator, and agent-grade pitch drafting.</div>
                <div className="h-px bg-[#D7C9A4]" />
                <div className="flex items-center justify-between text-sm">
                  <span>Today</span>
                  <span className="text-[#0B3D2E] font-medium">$0</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>After 7 days</span>
                  <span className="text-[#0B3D2E] font-medium">$199 one-time</span>
                </div>
              </div>

              <div className="mt-4">
                {!showCoupon ? (
                  <button type="button" onClick={() => setShowCoupon(true)} className="text-sm underline underline-offset-4 text-[#0B3D2E] hover:text-[#2F4F4F]">
                    Have a coupon?
                  </button>
                ) : (
                  <div className="flex items-center gap-2">
                    <input type="text" placeholder="Coupon code" className="flex-1 rounded-md border border-[#D7C9A4] bg-[#F6F2EA] px-3 py-2 text-sm focus:outline-none focus:border-[#C8A96E]" />
                    <button className="rounded-md bg-[#0B3D2E] px-3 py-2 text-sm text-[#EDE6D6] hover:bg-[#2F4F4F]">Apply</button>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 text-xs text-[#2F4F4F]">
              <div className="inline-flex items-center gap-2">
                <Lock size={14} />
                <span>256-bit encryption • PCI compliant</span>
              </div>
            </div>
          </aside>

          {/* Payment Form */}
          <section className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="rounded-2xl border border-[#D7C9A4] bg-[#EDE6D6] shadow-sm p-5">
              <div className="flex items-center gap-2">
                <CreditCard className="text-[#0B3D2E]" size={20} />
                <h2 className="text-lg font-semibold">Billing Details</h2>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm mb-1" htmlFor="fullName">Full name</label>
                  <input id="fullName" name="fullName" autoComplete="name" required className="w-full rounded-md border border-[#D7C9A4] bg-[#F6F2EA] px-3 py-2 focus:outline-none focus:border-[#C8A96E]" />
                </div>
                <div>
                  <label className="block text-sm mb-1" htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" autoComplete="email" required className="w-full rounded-md border border-[#D7C9A4] bg-[#F6F2EA] px-3 py-2 focus:outline-none focus:border-[#C8A96E]" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm mb-1" htmlFor="company">Company (optional)</label>
                  <input id="company" name="company" className="w-full rounded-md border border-[#D7C9A4] bg-[#F6F2EA] px-3 py-2 focus:outline-none focus:border-[#C8A96E]" />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm mb-1" htmlFor="card">Card details</label>
                <div className="grid grid-cols-12 gap-2">
                  <input id="card" name="card" placeholder="1234 1234 1234 1234" className="col-span-12 sm:col-span-6 rounded-md border border-[#D7C9A4] bg-[#F6F2EA] px-3 py-2 focus:outline-none focus:border-[#C8A96E]" />
                  <input name="expiry" placeholder="MM / YY" className="col-span-6 sm:col-span-3 rounded-md border border-[#D7C9A4] bg-[#F6F2EA] px-3 py-2 focus:outline-none focus:border-[#C8A96E]" />
                  <input name="cvc" placeholder="CVC" className="col-span-6 sm:col-span-3 rounded-md border border-[#D7C9A4] bg-[#F6F2EA] px-3 py-2 focus:outline-none focus:border-[#C8A96E]" />
                </div>
                <p className="mt-2 text-xs text-[#2F4F4F]">We never store your card. You won’t be charged today.</p>
              </div>

              <div className="mt-4 flex items-start gap-2">
                <input id="tos" type="checkbox" required className="mt-1" />
                <label htmlFor="tos" className="text-sm text-[#2F4F4F]">I agree to the Terms and Privacy Policy.</label>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#0B3D2E] px-5 py-3 text-[#EDE6D6] text-base font-semibold shadow-[0_8px_24px_rgba(11,61,46,0.15)] hover:bg-[#0B3D2E]/90 transition-colors"
                aria-label="Start free trial"
                title="Start free trial"
              >
                <Check size={18} className="text-[#C8A96E]" />
                Start 7-day free access
              </button>

              {status && <p className="mt-3 text-sm italic text-[#C8A96E]" role="status" aria-live="polite">{status}</p>}
            </form>
          </section>
        </div>
      </main>

      <footer className="bg-[#F6F2EA] text-[#0B3D2E] border-t border-[#0B3D2E]/10">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm">© {new Date().getFullYear()} Creator Agent. All rights reserved.</p>
            <div className="flex items-center gap-4 text-xs sm:text-sm text-[#2F4F4F]">
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Terms</a>
              <a href="#" className="hover:underline">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
