import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ChevronDown, Zap, Sword } from 'lucide-react';
import { developerInfo } from '../data/mock';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [ //frases rotativas
    "O poder do código flui através de mim",
    "Do lado sombrio, construo o futuro",
    "Aprendiz das artes do desenvolvimento",
    "Firebase, MySQL e além"
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
      {/* Hero Background with Red Lightsaber */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1533613220915-609f661a6fe1')`
        }}
      />
      
        {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-red-950/60 to-black/45" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Main Title with Dark Side Glow */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-orange-500 mb-4 animate-pulse">
            {developerInfo.name}
          </h1>
          <div className="h-16 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-red-300 font-light transition-all duration-500 animate-fade-in">
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

        {/* CTA Buttons with Dark Side styling */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg shadow-red-500/25 transition-all duration-300 hover:shadow-red-500/40 hover:scale-105 group border border-red-500/50"
            onClick={scrollToNext}
          >
            <Sword className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            Explorar Arsenal
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-orange-400/50 text-orange-400 hover:bg-orange-400/10 hover:text-orange-300 hover:border-orange-400/70 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Estabelecer Domínio
          </Button>
        </div>

        {/* Location */}
        <p className="text-gray-500 text-sm mb-12 italic">
          {developerInfo.location}
        </p>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ChevronDown 
            className="h-8 w-8 text-red-400 mx-auto cursor-pointer hover:text-red-300 transition-colors" 
            onClick={scrollToNext}
          />
        </div>
      </div>

      {/* Dark Side Floating Elements */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-red-500 rounded-full animate-ping opacity-75" />
      <div className="absolute bottom-32 right-32 w-2 h-2 bg-orange-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-10 w-2.5 h-2.5 bg-red-600 rounded-full animate-ping opacity-80" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-20 w-1.5 h-1.5 bg-red-400 rounded-full animate-ping opacity-70" style={{ animationDelay: '3s' }} />
      
      {/* Lightsaber glow effects */}
      <div className="absolute bottom-20 left-1/4 w-1 h-20 bg-gradient-to-t from-red-500 to-transparent opacity-50 animate-pulse" />
      <div className="absolute top-40 right-1/3 w-1 h-16 bg-gradient-to-b from-orange-500 to-transparent opacity-40 animate-pulse" style={{ animationDelay: '1.5s' }} />
    </section>
  );
};

export default Hero;