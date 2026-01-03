import { Instagram } from 'lucide-react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Testimonials from './components/Testimonials'
import Story from './components/Story'
import Pricing from './components/Pricing'
import Signature from './components/Signature'
import ChatPage from './components/ChatPage'

function HomePage() {
  return (
    <div className="min-h-screen bg-[#F6F2EA]">
      {/* Top bar */}
      <header className="bg-[#EDE6D6] border-b border-[#0B3D2E]/10">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#0B3D2E]"></div>
            <span className="text-[#0B3D2E] font-medium">Creator Agent</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-[#0B3D2E]">
            <a href="#story" className="hover:underline">Story</a>
            <a href="#pricing" className="hover:underline">Pricing</a>
            <a href="#signature" className="hover:underline">Signature</a>
            <a href="/chat" className="hover:underline">Chat</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Intro />
        <Testimonials />
        <Story />
        <Pricing />
        <Signature />
      </main>

      <footer className="bg-[#0B3D2E] text-[#EDE6D6]">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex items-center justify-between">
            <p className="text-sm">© {new Date().getFullYear()} Creator Agent. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm text-[#C0D5CB]">
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Terms</a>
              <a href="#" className="hover:underline">Security</a>
            </div>
          </div>

          <div className="mt-6 border-t border-[#EDE6D6]/10 pt-6 flex items-center justify-between">
            <p className="text-sm text-[#C0D5CB]">By Order of the Creator Agent Syndicate. "For creators tired of Googling 'how to write a brand pitch.'"</p>
            <a
              href="https://instagram.com/creatoragent"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Creator Agent on Instagram"
              className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#EDE6D6]/20 hover:border-[#C8A96E] transition-colors"
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </Router>
  )
}

export default App
