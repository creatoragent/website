import { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) {
      setStatus('Please enter your email and password.')
      return
    }
    setStatus('This is a demo form. Authentication will be connected next.')
  }

  return (
    <div className="min-h-screen bg-[#F6F2EA] text-[#0B3D2E]">
      {/* Top bar */}
      <header className="bg-[#EDE6D6] border-b border-[#0B3D2E]/10">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#0B3D2E]"></div>
            <span className="text-[#0B3D2E] font-medium">Creator Agent</span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <a href="/" className="text-[#0B3D2E] hover:underline">Home</a>
            <a href="/agent" className="text-[#0B3D2E] hover:underline">Agent</a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-md px-6 py-12">
        <div className="rounded-xl border border-[#0B3D2E]/20 bg-[#EDE6D6] p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold">Member Login</span>
            <span className="flex-1 h-px bg-[#C8A96E]"></span>
          </div>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md bg-[#F6F2EA] border border-[#0B3D2E]/20 p-3 focus:outline-none focus:border-[#C8A96E] focus:ring-1 focus:ring-[#C8A96E]"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md bg-[#F6F2EA] border border-[#0B3D2E]/20 p-3 focus:outline-none focus:border-[#C8A96E] focus:ring-1 focus:ring-[#C8A96E]"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-[#0B3D2E] px-4 py-3 text-[#EDE6D6] hover:bg-[#2F4F4F] transition-colors"
            >
              Login
            </button>
            {status && <p className="text-xs sm:text-sm italic text-[#C8A96E]">{status}</p>}
          </form>
        </div>
        <p className="mt-6 text-center text-xs sm:text-sm italic text-[#2F4F4F]">Access for paying members and managing directors.</p>
      </main>
    </div>
  )
}

export default Login
