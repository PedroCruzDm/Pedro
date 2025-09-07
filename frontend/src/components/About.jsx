import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { User, Target, Lightbulb } from 'lucide-react';
import { developerInfo, timeline } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-4">
            O Caminho do Jedi
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Conheça a jornada de um desenvolvedor em constante evolução
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Description */}
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <User className="h-6 w-6 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-200">Sobre Mim</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {developerInfo.description}
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Target className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-200 mb-2">Foco</h4>
                  <p className="text-sm text-gray-400">Resolver problemas com soluções elegantes</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Lightbulb className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-200 mb-2">Filosofia</h4>
                  <p className="text-sm text-gray-400">Aprendizado contínuo e curiosidade</p>
                </CardContent>
              </Card>
            </div>

            {/* Quote */}
            <div className="text-center">
              <blockquote className="text-2xl font-light text-blue-300 italic">
                "{developerInfo.quote}"
              </blockquote>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-200 mb-6 text-center">
              Linha do Tempo Jedi
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start mb-8">
                  {/* Timeline Node */}
                  <div className="relative z-10 w-16 h-16 bg-slate-800 border-2 border-blue-400 rounded-full flex items-center justify-center mr-6">
                    <span className="text-blue-400 font-bold text-sm">{item.year}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm">
                      <CardContent className="p-4">
                        <h4 className="text-lg font-semibold text-gray-200 mb-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;