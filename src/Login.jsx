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

function Login() {
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const [firebaseReady, setFirebaseReady] = useState(false)
  const navigate = useNavigate()

  // Load Firebase SDK dynamically
  useEffect(() => {
    const loadFirebase = async () => {
      // Check if already loaded
      if (window.firebase) {
        setFirebaseReady(true)
        return
      }

      // Load Firebase scripts
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
        
        // Initialize Firebase
        if (!window.firebase.apps.length) {
          window.firebase.initializeApp(firebaseConfig)
        }
        
        setFirebaseReady(true)
      } catch (error) {
        console.error('Failed to load Firebase:', error)
        setStatus('Failed to load authentication. Please refresh.')
      }
    }

    loadFirebase()
  }, [])

  // Check if user is already signed in
  useEffect(() => {
    if (!firebaseReady) return

    const unsubscribe = window.firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is already signed in, redirect to agent
        navigate('/agent')
      }
    })

    return () => unsubscribe()
  }, [firebaseReady, navigate])

  const handleGoogleSignIn = async () => {
    if (!firebaseReady) {
      setStatus('Authentication is loading. Please wait...')
      return
    }

    setLoading(true)
    setStatus('')

    try {
      const provider = new window.firebase.auth.GoogleAuthProvider()
      await window.firebase.auth().signInWithPopup(provider)
      
      // Redirect to agent page after successful sign-in
      navigate('/agent')
    } catch (error) {
      console.error('Sign in error:', error)
      
      if (error.code === 'auth/popup-closed-by-user') {
        setStatus('Sign in cancelled. Please try again.')
      } else if (error.code === 'auth/popup-blocked') {
        setStatus('Popup blocked. Please allow popups for this site.')
      } else {
        setStatus('Sign in failed. Please try again.')
      }
    } finally {
      setLoading(false)
    }
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
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold">Member Login</span>
            <span className="flex-1 h-px bg-[#C8A96E]"></span>
          </div>

          <div className="text-center mb-6">
            <p className="text-[#2F4F4F] text-sm">
              Sign in to access your AI talent agent
            </p>
          </div>

          <button
            onClick={handleGoogleSignIn}
            disabled={loading || !firebaseReady}
            className="w-full inline-flex items-center justify-center gap-3 rounded-md bg-[#F6F2EA] border border-[#0B3D2E]/20 px-4 py-3 text-[#0B3D2E] hover:bg-[#EDE6D6] hover:border-[#C8A96E] focus:outline-none focus:border-[#C8A96E] focus:ring-1 focus:ring-[#C8A96E] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-[#0B3D2E]/20 border-t-[#0B3D2E] rounded-full animate-spin"></div>
                <span>Signing in...</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="font-medium">Continue with Google</span>
              </>
            )}
          </button>

          {status && (
            <p className="mt-4 text-xs sm:text-sm italic text-[#C8A96E] text-center">{status}</p>
          )}

          <div className="mt-6 pt-4 border-t border-[#0B3D2E]/10">
            <p className="text-xs text-[#2F4F4F] text-center">
              By signing in, you agree to our Terms and Privacy Policy
            </p>
          </div>
        </div>

        <p className="mt-6 text-center text-xs sm:text-sm italic text-[#2F4F4F]">
          Access for paying members and managing directors.
        </p>
      </main>
    </div>
  )
}

export default Login
