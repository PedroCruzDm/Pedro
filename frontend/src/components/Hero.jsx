import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ChevronDown, Zap } from 'lucide-react';
import { developerInfo } from '../data/mock';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "May the Code be with you",
    "Building the Future, One Component at a Time",
    "From Padawan to Jedi Developer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1537420327992-d6e192287183')`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-800/60 to-slate-900/80" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Main Title with Glow Effect */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 mb-4 animate-pulse">
            {developerInfo.name}
          </h1>
          <div className="h-16 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-blue-300 font-light transition-all duration-500 animate-fade-in">
              {texts[textIndex]}
            </p>
          </div>
        </div>

        {/* Subtitle */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-2 font-semibold">
            {developerInfo.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-light">
            {developerInfo.subtitle}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40 hover:scale-105 group"
            onClick={scrollToNext}
          >
            <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            Explorar Portfólio
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Iniciar Transmissão
          </Button>
        </div>

        {/* Location */}
        <p className="text-gray-500 text-sm mb-12 italic">
          {developerInfo.location}
        </p>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ChevronDown 
            className="h-8 w-8 text-blue-400 mx-auto cursor-pointer hover:text-blue-300 transition-colors" 
            onClick={scrollToNext}
          />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-75" />
      <div className="absolute bottom-32 right-32 w-1 h-1 bg-blue-300 rounded-full animate-ping opacity-60" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-10 w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping opacity-80" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;