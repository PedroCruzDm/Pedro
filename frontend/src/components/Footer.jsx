import React from 'react';
import { Badge } from './ui/badge';
import { Heart, Code, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t border-blue-500/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Desenvolvedor Jedi
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Construindo o futuro, um componente por vez
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['React', 'JavaScript', 'CSS3', 'HTML5', 'Firebase', 'MySQL'].map((tech) => (
              <Badge 
                key={tech}
                variant="outline"
                className="border-gray-600 text-gray-400 hover:border-blue-400/50 hover:text-blue-300 transition-colors cursor-pointer"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Quote */}
          <div className="max-w-2xl mx-auto mb-8">
            <blockquote className="text-blue-300 italic text-lg">
              "Que a Força do código esteja com você"
            </blockquote>
          </div>

          {/* Copyright and Made with Love */}
          <div className="pt-8 border-t border-gray-700/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {currentYear} Desenvolvedor Jedi. Todos os direitos reservados.
              </p>
              
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>Feito com</span>
                <Heart className="h-4 w-4 text-red-400 animate-pulse" />
                <span>e</span>
                <Code className="h-4 w-4 text-blue-400" />
                <span>na galáxia</span>
                <Zap className="h-4 w-4 text-yellow-400" />
              </div>
            </div>

            {/* Force Bar Animation */}
            <div className="mt-6">
              <div className="w-full bg-slate-700 rounded-full h-1 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;