import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Cpu, Code2, Database } from 'lucide-react';
import { technologies } from '../data/mock';

const Technologies = () => {
  const frontendTechs = technologies.filter(tech => 
    ['JavaScript', 'React', 'HTML5', 'CSS3', 'Angular'].includes(tech.label)
  );
  
  const backendTechs = technologies.filter(tech => 
    ['Firebase', 'MySQL', 'JavaScript', 'PHP'].includes(tech.label)
  );
  
  const toolsTechs = technologies.filter(tech => 
    ['Git', 'Docker', 'Figma', 'Azure'].includes(tech.label)
  );


  const TechCategory = ({ title, techs, icon: Icon, gradient }) => (

    <Card className="bg-slate-800/50 border-red-500/20 backdrop-blur-sm hover:border-red-400/40 transition-all duration-300">
      <CardContent className="p-6">


        <div className="flex items-center mb-6">
          <div className={`p-3 rounded-full ${gradient} mr-4`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-200">{title}</h3>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {techs.map((tech, index) => (
            <div 
              key={index}
              className="flex flex-col items-center p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 group"
            >
              <img 
                src={tech.src} 
                alt={tech.label}
                className="w-12 h-12 mb-3 transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <span className="text-sm text-gray-300 text-center font-medium">
                {tech.label}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="technologies" className="relative py-20 px-6">
            {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-red-950/60 to-black/35" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-600 mb-4">
            Arsenal Tecnológico
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            As ferramentas que uso para construir experiências digitais incríveis
          </p>
          <div className="flex items-center justify-center mt-6">
            <Badge className="bg-red-600/20 text-red-300 border-red-500/30 text-sm px-4 py-1 animate-pulse">
              Em constante evolução
            </Badge>
          </div>
        </div>

        {/* Tech Categories */}
        <div className="grid lg:grid-cols-3 gap-8">
          <TechCategory 
            title="Frontend"
            techs={frontendTechs}
            icon={Code2}
            gradient="bg-gradient-to-br from-orange-500 to-yellow-600"
          />
          
          <TechCategory 
            title="Backend & Databases"
            techs={backendTechs}
            icon={Database}
            gradient="bg-gradient-to-br from-blue-600 to-blue-700"
          />
          
          <TechCategory 
            title="Ferramentas"
            techs={toolsTechs}
            icon={Cpu}
            gradient="bg-gradient-to-br from-purple-700 to-blue-800"
          />
        </div>
      </div>
    </section>
  );
};

export default Technologies;