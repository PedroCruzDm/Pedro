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
    ['PHP', 'Firebase', 'MySQL', 'Java', 'Python', 'C'].includes(tech.label)
  );
  
  const toolsTechs = technologies.filter(tech => 
    ['Git'].includes(tech.label)
  );

  const TechCategory = ({ title, techs, icon: Icon, gradient }) => (
    <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300">
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
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-4">
            Arsenal Tecnológico
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            As ferramentas que uso para construir experiências digitais incríveis
          </p>
          <div className="flex items-center justify-center mt-6">
            <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30 text-sm px-4 py-1">
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
            gradient="bg-gradient-to-br from-blue-500 to-blue-600"
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
            gradient="bg-gradient-to-br from-blue-700 to-blue-800"
          />
        </div>

        {/* Skills Progress */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-200 mb-8 text-center">
            Nível de Poder Jedi
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { skill: 'Frontend Development', level: 85, color: 'from-blue-400 to-blue-500' },
              { skill: 'React & JavaScript', level: 80, color: 'from-blue-500 to-blue-600' },
              { skill: 'Backend Development', level: 60, color: 'from-blue-600 to-blue-700' },
              { skill: 'Database Management', level: 55, color: 'from-blue-700 to-blue-800' }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-medium">{item.skill}</span>
                  <span className="text-blue-400 text-sm">{item.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-3 bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;