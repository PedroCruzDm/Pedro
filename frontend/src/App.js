import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StarBackground from './components/StarBackground';
import Hero from './components/Hero';
import About from './components/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App relative min-h-screen bg-slate-900 text-white">
        <StarBackground />
        
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
              </>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
