import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StarBackground from './components/StarBackground';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Footer from './components/Footer';
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
                <Technologies />
                <Projects />
                <Contact />
                <Footer />
              </>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;