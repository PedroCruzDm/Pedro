import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Eye, Rocket } from 'lucide-react';
import { projects } from '../data/mock';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Frontend', 'Backend'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Operacional': return 'bg-green-600/20 text-green-300 border-green-500/30';
      case 'Em desenvolvimento': return 'bg-yellow-600/20 text-yellow-300 border-yellow-500/30';
      case 'Protótipo': return 'bg-blue-600/20 text-blue-300 border-blue-500/30';
      case 'Beta': return 'bg-purple-600/20 text-purple-300 border-purple-500/30';
      default: return 'bg-gray-600/20 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <section id="projects" className="relative py-20 px-6">

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-red-950/60 to-black/50" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-600 mb-4">
            Missões Concluídas
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Projetos que demonstram minha jornada pelo universo do desenvolvimento
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-500/25'
                    : 'border-red-400/30 text-red-400 hover:bg-red-400/10 hover:border-red-400/50'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (

            <Card 
              key={project.id} 
              className="bg-slate-800/50 border-red-500/20 backdrop-blur-sm hover:border-red-400/40 transition-all duration-300 hover:scale-[1.02] group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-red-600/20 text-red-300 border-red-500/30">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-200 mb-2 group-hover:text-red-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge 
                        key={index}
                        variant="outline"
                        className="text-xs border-gray-600 text-gray-300 hover:border-red-400/50 hover:text-red-300 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      size="sm"
                      className="flex-1 bg-red-600/20 text-red-300 border border-red-500/30 hover:bg-red-600/30 hover:border-red-400/50 transition-all duration-300"
                      onClick={() => window.open(project.project_link, '_blank')}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Ver Projeto
                    </Button>
                    <Button 
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:border-red-400/50 hover:text-red-300 transition-all duration-300"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-red-900/30 to-orange-800/30 border-red-500/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <Rocket className="h-12 w-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-200 mb-4">
                Pronto para a próxima missão?
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Estou sempre em busca de novos desafios e oportunidades para aplicar minhas habilidades.
                Vamos construir algo incrível juntos!
              </p>
              <Button 
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg shadow-red-500/25 transition-all duration-300 hover:shadow-red-500/40 hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Entrar em Contato
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;