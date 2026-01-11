import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB2c9k8xz4y4SX6qlF2EKR6fYs6X1RkQHg",
  authDomain: "creator-agent-co.firebaseapp.com",
  projectId: "creator-agent-co",
  storageBucket: "creator-agent-co.firebasestorage.app",
  messagingSenderId: "107641170614",
  appId: "1:107641170614:web:355671bf15c1f98153d417"
}

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwOLqwTx_8qS6kREcZ7SsgyD7rfC-8AsIyEiPLHN_yCB1ci-mu2mqi67V3VXHSASl8S/exec"
const VOICEFLOW_PROJECT_ID = "68326daf9050c5f6f04fed8d"

function CreatorAgent() {
  const [authState, setAuthState] = useState('loading') // loading, signedOut, checking, authorized, notAuthorized
  const [user, setUser] = useState(null)
  const [userName, setUserName] = useState('')
  const [firebaseReady, setFirebaseReady] = useState(false)
  const navigate = useNavigate()

  // Load Firebase SDK dynamically
  useEffect(() => {
    const loadFirebase = async () => {
      if (window.firebase) {
        setFirebaseReady(true)
        return
      }

      const loadScript = (src) => {
        return new Promise((resolve, reject) => {
          const script = document.createElement('script')
          script.src = src
          script.onload = resolve
          script.onerror = reject
          document.head.appendChild(script)
        })
      }

      try {
        await loadScript('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js')
        await loadScript('https://www.gstatic.com/firebasejs/10.7.1/firebase-auth-compat.js')
        
        if (!window.firebase.apps.length) {
          window.firebase.initializeApp(firebaseConfig)
        }
        
        setFirebaseReady(true)
      } catch (error) {
        console.error('Failed to load Firebase:', error)
      }
    }

    loadFirebase()
  }, [])

  // Load Voiceflow
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs'
    script.type = 'text/javascript'
    document.head.appendChild(script)
  }, [])

  // Check auth state
  useEffect(() => {
    if (!firebaseReady) return

    const unsubscribe = window.firebase.auth().onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser)
        setAuthState('checking')
        
        // Check authorization with Google Sheet
        try {
          const response = await fetch(`${GOOGLE_SCRIPT_URL}?email=${encodeURIComponent(firebaseUser.email)}`)
          const data = await response.json()
          
          if (data.authorized) {
            setUserName(data.name || firebaseUser.displayName?.split(' ')[0] || 'there')
            setAuthState('authorized')
            
            // Initialize Voiceflow
            initVoiceflow(firebaseUser.email, data.name || firebaseUser.displayName)
          } else {
            setAuthState('notAuthorized')
          }
        } catch (error) {
          console.error('Authorization check failed:', error)
          setAuthState('notAuthorized')
        }
      } else {
        setAuthState('signedOut')
        setUser(null)
      }
    })

    return () => unsubscribe()
  }, [firebaseReady])

  const initVoiceflow = (userEmail, userName) => {
    const checkVoiceflow = setInterval(() => {
      if (window.voiceflow && window.voiceflow.chat) {
        clearInterval(checkVoiceflow)
        
        window.voiceflow.chat.load({
          verify: { projectID: VOICEFLOW_PROJECT_ID },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          user: {
            name: userName,
            email: userEmail
          },
          userID: userEmail,
          autostart: false,
          assistant: {
            renderMode: 'popover'
          }
        })
      }
    }, 100)

    // Clear interval after 10 seconds to prevent infinite loop
    setTimeout(() => clearInterval(checkVoiceflow), 10000)
  }

  const openChat = () => {
    if (window.voiceflow && window.voiceflow.chat) {
      window.voiceflow.chat.open()
    }
  }

  const handleSignOut = async () => {
    try {
      await window.firebase.auth().signOut()
      navigate('/login')
    } catch (error) {
      console.error('Sign out error:', error)
    }
  }

  // Loading State
  if (authState === 'loading' || authState === 'checking') {
    return (
      <div className="min-h-screen bg-[#F6F2EA] text-[#0B3D2E] flex flex-col">
        <Header onSignOut={handleSignOut} showSignOut={false} />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-[#0B3D2E]/20 border-t-[#0B3D2E] rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-[#2F4F4F]">
              {authState === 'loading' ? 'Loading...' : 'Checking access...'}
            </p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  // Signed Out State
  if (authState === 'signedOut') {
    return (
      <div className="min-h-screen bg-[#F6F2EA] text-[#0B3D2E] flex flex-col">
        <Header onSignOut={handleSignOut} showSignOut={false} />
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full ring-2 ring-[#C8A96E] overflow-hidden shadow-sm mx-auto mb-4">
              <img
                src="https://flamesimagestorage.blob.core.windows.net/files/be1e265c-3c0d-403a-b6da-b77e17e78677_1767687743135_prj_utdafphk/801e10ab-76f7-4901-8742-5b39bc9ff408-f9409cf5-cc66-42b6-aee8-2fca3e4a7b23.png"
                alt="Creator Agent"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0B3D2E] mb-2">Welcome to Creator Agent</h2>
            <p className="text-[#2F4F4F] mb-6">Sign in to access your AI talent agent</p>
            
            <a
              href="/login"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0B3D2E] text-[#EDE6D6] px-6 py-3 font-medium hover:bg-[#2F4F4F] transition-colors"
            >
              Sign In to Continue
            </a>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  // Not Authorized State
  if (authState === 'notAuthorized') {
    return (
      <div className="min-h-screen bg-[#F6F2EA] text-[#0B3D2E] flex flex-col">
        <Header onSignOut={handleSignOut} showSignOut={true} />
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <div className="w-20 h-20 bg-[#C8A96E]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-[#C8A96E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0B3D2E] mb-2">Membership Required</h2>
            <p className="text-[#2F4F4F] mb-2">
              Your account (<span className="font-medium">{user?.email}</span>) doesn't have access yet.
            </p>
            <p className="text-[#2F4F4F] mb-6">
              Get access by joining the Creator Agent membership.
            </p>
            
            <a
              href="/#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0B3D2E] text-[#EDE6D6] px-6 py-3 font-medium hover:bg-[#2F4F4F] transition-colors"
            >
              Get Membership
            </a>
            
            <button
              onClick={handleSignOut}
              className="block w-full mt-4 py-2 text-[#2F4F4F] hover:text-[#0B3D2E] text-sm transition-colors"
            >
              Sign in with a different account
            </button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  // Authorized State - Show Chat
  return (
    <div className="min-h-screen bg-[#F6F2EA] text-[#0B3D2E] flex flex-col">
      <Header onSignOut={handleSignOut} showSignOut={true} />
      
      <main className="flex-1 mx-auto w-full max-w-3xl px-4 sm:px-6 py-8 sm:py-10">
        {/* Profile */}
        <div className="flex flex-col items-center mb-5 sm:mb-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full ring-2 ring-[#C8A96E] overflow-hidden shadow-sm">
            <img
              src="https://flamesimagestorage.blob.core.windows.net/files/be1e265c-3c0d-403a-b6da-b77e17e78677_1767687743135_prj_utdafphk/801e10ab-76f7-4901-8742-5b39bc9ff408-f9409cf5-cc66-42b6-aee8-2fca3e4a7b23.png"
              alt="Creator Agent profile"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <h2 className="mt-3 text-base sm:text-lg font-semibold text-[#0B3D2E]">Hey {userName}! 👋</h2>
          <p className="text-xs sm:text-sm text-[#C8A96E] italic">Your AI Talent Agent is ready</p>
          <p className="text-xs text-[#2F4F4F] mt-1">{user?.email}</p>
        </div>

        {/* Chat Card */}
        <section className="rounded-2xl border border-[#D7C9A4] bg-[#EDE6D6] shadow-sm">
          <div className="p-4 sm:p-6">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#0B3D2E]">LET'S CHAT!</p>
            <div className="mt-2 h-px bg-[#D7C9A4]"></div>

            <div className="mt-4 space-y-3 text-[#2F4F4F]">
              <p>Ready to find brand contacts, craft pitches, or prep for a call?</p>
              <p>Click below to start chatting with your AI talent agent.</p>
            </div>

            <button
              onClick={openChat}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-md bg-[#0B3D2E] text-[#EDE6D6] px-4 py-4 shadow-sm hover:bg-[#2F4F4F] transition-colors"
            >
              <span className="text-lg">💬</span>
              <span className="font-medium">Start Chatting</span>
            </button>
          </div>
        </section>

        {/* Quick Actions */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <a
            href="/"
            className="rounded-xl border border-[#D7C9A4] bg-[#EDE6D6] p-4 text-center hover:border-[#C8A96E] transition-colors"
          >
            <span className="text-sm text-[#2F4F4F]">Home</span>
          </a>
          <a
            href="https://t.me/+xZMTX0k_zMZjMzRh"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-[#D7C9A4] bg-[#EDE6D6] p-4 text-center hover:border-[#C8A96E] transition-colors"
          >
            <span className="text-sm text-[#2F4F4F]">Telegram</span>
          </a>
        </div>
      </main>

      <Footer />

      {/* Hide Voiceflow launcher */}
      <style>{`
        .vfrc-launcher {
          display: none !important;
        }
      `}</style>
    </div>
  )
}

// Header Component
function Header({ onSignOut, showSignOut }) {
  return (
    <header className="bg-[#EDE6D6] border-b border-[#0B3D2E]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#0B3D2E]"></div>
          <span className="text-[#0B3D2E] font-medium">Creator Agent</span>
        </div>
        <nav className="flex items-center gap-4 sm:gap-6 text-[#0B3D2E]">
          <a href="/" className="hover:underline text-sm sm:text-base">Home</a>
          {showSignOut && (
            <button
              onClick={onSignOut}
              className="text-sm px-3 py-1.5 rounded-md border border-[#0B3D2E]/20 hover:bg-[#0B3D2E] hover:text-[#EDE6D6] transition-colors"
            >
              Sign Out
            </button>
          )}
        </nav>
      </div>
    </header>
  )
}

// Footer Component
function Footer() {
  return (
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
  )
}

export default CreatorAgent
