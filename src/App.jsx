import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Story from './components/Story';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Signature from './components/Signature';
import ChatPage from './components/ChatPage';

function HomePage() {
  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <Hero />
      <Intro />
      <Story />
      <Testimonials />
      <Pricing />
      <Signature />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </Router>
  );
}

export default App;
