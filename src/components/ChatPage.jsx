import React, { useState } from 'react';

const ChatPage = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChatClick = () => {
    // Opens Voiceflow or chat window - customize this URL
    window.open('https://your-voiceflow-chat-url.com', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] flex flex-col">
      {/* Header */}
      <header className="px-6 py-4">
        <div className="flex items-center gap-2">
          <img 
            src="https://i.imgur.com/ren6gDk.png" 
            alt="Creator Agent" 
            className="h-10 w-auto"
          />
        </div>
        <div className="w-full h-1 bg-[#2d4a47] mt-4 rounded-full"></div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col md:flex-row px-6 py-8 gap-8 max-w-6xl mx-auto w-full">
        
        {/* Left Sidebar - Profile */}
        <div className="md:w-80 flex flex-col items-center">
          {/* Profile Image */}
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#2d4a47]/10 mb-8">
            <img 
              src="https://i.imgur.com/AQf7KEe.jpeg" 
              alt="Jordan"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 w-full max-w-[240px]">
            <a 
              href="https://creatoragent.vercel.app/" 
              className="w-full py-3 px-6 border-2 border-[#2d4a47]/30 rounded-full text-[#2d4a47] font-medium hover:bg-[#2d4a47] hover:text-white transition-all duration-200 text-center"
            >
              About
            </a>
            <a 
              href="https://t.me/+xZMTX0k_zMZjMzRh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3 px-6 border-2 border-[#2d4a47]/30 rounded-full text-[#2d4a47] font-medium hover:bg-[#2d4a47] hover:text-white transition-all duration-200 text-center"
            >
              Telegram
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-[#2d4a47] self-stretch"></div>

        {/* Right Side - Chat */}
        <div className="flex-1 flex flex-col">
          {/* Chat Messages */}
          <div className="flex-1 flex flex-col gap-4 mb-6">
            {/* User-style messages (dark) */}
            <div className="flex justify-end">
              <div className="flex items-start gap-2">
                <div className="bg-[#2d4a47] text-white px-5 py-3 rounded-2xl rounded-tr-sm max-w-md">
                  <p>Hi there, I'm Jordan</p>
                </div>
                <div className="flex gap-1 text-gray-400 mt-2">
                  <button className="hover:text-[#2d4a47] transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                  </button>
                  <button className="hover:text-[#2d4a47] transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="bg-[#2d4a47] text-white px-5 py-3 rounded-2xl rounded-tr-sm max-w-md">
                <p>The 24/7 AI talent agent for creators.</p>
              </div>
            </div>

            {/* Agent response (light) */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#2d4a47]/20">
                <img 
                  src="https://i.imgur.com/AQf7KEe.jpeg" 
                  alt="Agent"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#e8e6e1] text-[#2d4a47] px-5 py-4 rounded-2xl rounded-tl-sm max-w-lg">
                <p>Welcome to the Creator Agent beta! Right now, I can help you craft high-converting emails and find brand contacts you want to pitch.</p>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="mt-auto">
            <div className="w-full h-px bg-[#2d4a47] mb-4"></div>
            <div 
              onClick={handleChatClick}
              className="bg-[#e8e6e1] rounded-xl px-5 py-4 cursor-pointer hover:bg-[#ddd9d2] transition-colors"
            >
              <p className="text-[#2d4a47]/50">Type a message....</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-6 flex justify-center">
        <img 
          src="https://i.imgur.com/73Hrwgh.png" 
          alt="Creator Agent" 
          className="h-8 w-auto"
        />
      </footer>
    </div>
  );
};

export default ChatPage;
