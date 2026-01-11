import { Instagram, LogIn } from 'lucide-react'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Testimonials from './components/Testimonials'
import Showcase from './components/Showcase'
import Story from './components/Story'
import Pricing from './components/Pricing'
import Signature from './components/Signature'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-[#F6F2EA]">
      {/* Top bar */}
      <header className="bg-[#EDE6D6] border-b border-[#0B3D2E]/10 sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[#EDE6D6]/90">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#0B3D2E]" aria-hidden="true"></div>
            <span className="text-[#0B3D2E] font-medium">Creator Agent</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-[#0B3D2E]">
            <a href="#story-features" className="hover:underline">Story</a>
            <a href="#pricing" className="hover:underline">Pricing</a>
            <a href="#faq" className="hover:underline">FAQ</a>
            <a href="#signature" className="hover:underline">Signature</a>
            <a href="/agent" className="hover:underline">Agent</a>
            <a
              href="/login"
              className="inline-flex items-center gap-2 rounded-md bg-[#0B3D2E] px-3 py-2 text-[#EDE6D6] hover:bg-[#2F4F4F] transition-colors min-h-[44px]"
              title="Login"
              aria-label="Login"
            >
              <LogIn size={16} className="text-[#C8A96E]" />
              <span className="font-semibold">Login</span>
            </a>
          </nav>
        </div>
        {/* Mobile quick nav */}
        <div className="sm:hidden border-t border-[#0B3D2E]/10">
          <div className="px-4 py-2 overflow-x-auto scroll-smooth snap-x snap-mandatory">
            <nav className="flex items-center gap-3 text-sm text-[#0B3D2E] whitespace-nowrap">
              {[
                { href: '#story-features', label: 'Story' },
                { href: '#pricing', label: 'Pricing' },
                { href: '#faq', label: 'FAQ' },
                { href: '#signature', label: 'Signature' },
                { href: '/agent', label: 'Agent' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center snap-start rounded-full border border-[#0B3D2E]/15 bg-white/40 px-3 py-2 min-h-[40px]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Intro />
        <Testimonials />
        <Showcase />
        <Story />
        <Pricing />
        <FAQ />
        <Signature />
      </main>

      <footer className="bg-[#0B3D2E] text-[#EDE6D6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4">
            <p className="text-sm">© {new Date().getFullYear()} Creator Agent. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm text-[#C0D5CB]">
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Terms</a>
              <a href="#" className="hover:underline">Security</a>
            </div>
          </div>

          <div className="mt-6 border-t border-[#EDE6D6]/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#C0D5CB] text-center sm:text-left">By Order of the Creator Agent Syndicate. "For creators tired of Googling 'how to write a brand pitch.'"</p>
            <a
              href="https://instagram.com/creatoragent"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Creator Agent on Instagram"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[#EDE6D6]/20 hover:border-[#C8A96E] transition-colors"
              title="Instagram"
            >
              <Instagram size={18} className="text-[#EDE6D6] hover:text-[#C8A96E] transition-colors" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
