import { useState } from 'react'
import { ChevronRight, DollarSign, ArrowRight } from 'lucide-react'

function CreatorAgent() {
  const [input, setInput] = useState('')
  const [status, setStatus] = useState('')

  const suggestions = [
    'Find me the brand contact for Sony',
    'Write me a pitch for Airbnb',
    'Create a meeting script for my call with Adobe',
    "Analyze Oura Ring's socials and find content gaps I can pitch them",
  ]

  const handleSuggest = (text) => {
    setInput(text)
    setStatus('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) {
      setStatus('Please enter a prompt.')
      return
    }
    setStatus('Noted. The Agent will compose your correspondence. (Demo UI)')
  }

  return (
    <div className="min-h-screen bg-[#F6F2EA] text-[#0B3D2E] flex flex-col">
      {/* Top bar */}
      <header className="bg-[#EDE6D6] border-b border-[#0B3D2E]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#0B3D2E]"></div>
            <span className="text-[#0B3D2E] font-medium">Creator Agent</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-[#0B3D2E]">
            <a href="/" className="hover:underline">Home</a>
            <a href="/test" className="hover:underline">Status</a>
          </nav>
        </div>
      </header>

      <main className="flex-1 mx-auto w-full max-w-3xl px-4 sm:px-6 py-8 sm:py-10">
        {/* Centered profile with title and subtitle */}
        <div className="flex flex-col items-center mb-5 sm:mb-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full ring-2 ring-[#C8A96E] overflow-hidden shadow-sm">
            <img
              src="https://flamesimagestorage.blob.core.windows.net/files/be1e265c-3c0d-403a-b6da-b77e17e78677_1767687743135_prj_utdafphk/801e10ab-76f7-4901-8742-5b39bc9ff408-f9409cf5-cc66-42b6-aee8-2fca3e4a7b23.png"
              alt="Creator Agent profile"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <h2 className="mt-3 text-base sm:text-lg font-semibold text-[#0B3D2E]">Creator Agent</h2>
          <p className="text-xs sm:text-sm text-[#C8A96E] italic">The AI Talent Agent for Creators</p>
        </div>

        {/* Membership card */}
        <section className="rounded-2xl border border-[#D7C9A4] bg-[#EDE6D6] shadow-sm">
          <div className="p-3 sm:p-4">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#0B3D2E]">LET'S CHAT!</p>
            <div className="mt-2 h-px bg-[#D7C9A4]"></div>

            <form onSubmit={handleSubmit} className="mt-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                rows={3}
                placeholder="Who are we pitching today?"
                className="w-full rounded-lg bg-[#F6F2EA] border border-[#D7C9A4] p-2 sm:p-3 text-sm sm:text-base text-[#0B3D2E] placeholder-[#2F4F4F]/60 focus:outline-none focus:border-[#C8A96E]"
                aria-label="Prompt input"
              />

              {/* Suggestions and submit aligned to top */}
              <div className="mt-2 sm:mt-3 grid grid-cols-1 sm:grid-cols-[1fr,auto] items-start gap-2">
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((s, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleSuggest(s)}
                      className="inline-flex items-center gap-2 rounded-full border border-[#D7C9A4] bg-[#EDE6D6] px-3 py-1 sm:py-1.5 text-sm italic text-[#2F4F4F] hover:bg-[#EDE6D6]/80 hover:text-[#0B3D2E] transition-colors shadow-sm"
                    >
                      <ChevronRight size={16} className="text-[#0B3D2E]" />
                      {s}
                    </button>
                  ))}
                </div>

                <button
                  type="submit"
                  className="self-start w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-[#0B3D2E] text-[#EDE6D6] px-4 py-3 sm:py-2 shadow-sm hover:bg-[#2F4F4F] transition-colors"
                  aria-label="Chat with Creator Agent"
                  title="Chat"
                >
                  <DollarSign size={18} className="text-[#C8A96E]" />
                  <ArrowRight size={18} />
                </button>
              </div>

              {status && (
                <p className="mt-2 text-sm italic text-[#C8A96E]" role="status" aria-live="polite">{status}</p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#F6F2EA] text-[#0B3D2E] border-t border-[#0B3D2E]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-10">
          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4">
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

export default CreatorAgent
