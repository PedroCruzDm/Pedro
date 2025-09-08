import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Mail, Github, Linkedin, Instagram, Send, MapPin, Clock, Youtube } from 'lucide-react';
import { contactInfo } from '../data/mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: 'joaope14dro@gmail.com',
    subject: '[Tentativa de contato com o Developer]',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Mensagem enviada:', formData);
    alert('Mensagem enviada com sucesso! Em breve retornarei o contato.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: contactInfo.github,
      color: 'hover:text-white'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      url: `https://www.instagram.com/apenaspedro1/?hl=pt-br`,
      color: 'hover:text-purple-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: contactInfo.linkedin,
      color: 'hover:text-blue-400'
    },
    {
      icon: Youtube,
      label: 'YouTube',
      url: `https://youtube.com/@apenasdev?si=U2S-rZfb5sddCj2P`,
      color: 'hover:text-red-300'
    }
  ];

  return (
    <section id="contact" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-red-950/60 to-black/90" />

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-600 mb-4">
            Iniciar Transmissão
          </h2>

          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Pronto para discutir seu próximo projeto? Vamos nos conectar e construir algo incrível juntos!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <Card className="bg-slate-800/50 border-red-500/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-200 mb-6">
                Enviar Mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">
                      Nome
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome"
                      className="bg-slate-700/50 border-gray-600 text-gray-200 focus:border-red-400 focus:ring-red-400/20"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu.email@exemplo.com"
                      className="bg-slate-700/50 border-gray-600 text-gray-200 focus:border-red-400 focus:ring-red-400/20"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">
                    Assunto
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Assunto da mensagem"
                    className="bg-slate-700/50 border-gray-600 text-gray-200 focus:border-red-400 focus:ring-red-400/20"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">
                    Mensagem
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-me sobre seu projeto ou ideia..."
                    rows={6}
                    className="bg-slate-700/50 border-gray-600 text-gray-200 focus:border-red-400 focus:ring-red-400/20 resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg text-lg font-semibold shadow-lg shadow-red-500/25 transition-all duration-300 hover:shadow-red-500/40 hover:scale-[1.02]"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">

            {/* Contact Details */}
            <Card className="bg-slate-800/50 border-red-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-200 mb-6">
                  Informações de Contato
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-red-400 mr-4" />
                    <div>
                      <p className="text-gray-300 font-medium">Email</p>
                      <p className="text-gray-400 text-sm">{contactInfo.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-red-400 mr-4" />
                    <div>
                      <p className="text-gray-300 font-medium">Localização</p>
                      <p className="text-gray-400 text-sm">São Paulo, Brasil</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-red-400 mr-4" />
                    <div>
                      <p className="text-gray-300 font-medium">Disponibilidade</p>
                      <p className="text-gray-400 text-sm">todos os dias</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-200 mb-6">
                  Redes Sociais
                </h3>
                
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 text-gray-400 ${social.color} group`}
                    >
                      <social.icon className="h-6 w-6 mr-4 transition-transform duration-300 group-hover:scale-110" />
                      <span className="font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Status Card */}
            <Card className="bg-gradient-to-r from-green-900/30 to-green-800/30 border-green-500/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Badge className="bg-green-600/20 text-green-300 border-green-500/30 mb-4">
                  Status: Online
                </Badge>
                <p className="text-gray-300 text-sm">
                  Atualmente disponível para novos projetos e oportunidades
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;