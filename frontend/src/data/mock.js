// Mock data for Star Wars Dark Side themed portfolio

export const developerInfo = {
  name: "João Pedro da Cruz",
  title: "Desenvolvedor do Lado Sombrio",
  subtitle: "Dominando o poder do código com a força do lado sombrio",
  description: "Front-End Developer em início de carreira, com experiência em HTML, CSS, JavaScript e React, focado em criar interfaces intuitivas e envolventes. Minha paixão por resolver problemas me impulsiona a buscar a melhor solução para cada desafio. Atualmente, estou expandindo minhas habilidades para o universo Fullstack, aprendendo sobre Back-End (MySQL e Firebase), para construir projetos cada vez mais completos. Sou movido pela curiosidade e pelo aprendizado contínuo, sempre buscando aprimorar a experiência do usuário (UX) e entregar resultados de qualidade.",
  quote: "O poder do código flui através de mim",
  location: "Do lado sombrio da Força...",
  experience: "1 anos dominando as artes do desenvolvimento"
};

export const technologies = [
  {src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", label: "JavaScript"},
  {src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", label: "React"},
  {src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", label: "HTML5"},
  {src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", label: "CSS3"},
  {src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", label: "PHP"},
  {src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", label: "Firebase"},
  {src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", label: "Git"},
  {src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", label: "Docker"},
  {src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", label: "Figma"},
  {src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", label: "MySQL"},
  {src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", label: "Azure"},
  {src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", label: "Java"},
  {src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", label: "Angular"},
  {src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", label: "Python"},
  {src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", label: "C"},
  {src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg", label: "Kotlin"}
];

export const projects = [
  {
    id: 1,
    title: "Calendario Escolar",
    description: "O projeto consiste no desenvolvimento de um protótipo de aplicativo de calendário escolar, destinado a facilitar a gestão e visualização do calendário da instituição de ensino. O aplicativo permite que os usuários criem, visualizem, editem e excluam eventos de forma intuitiva, superando as limitações do calendário oficial em PDF. Além disso, o projeto está em evolução, com a inclusão de funcionalidades como cadastro de usuários e sistema de login nas próximas atualizações.",
    technologies: ["React", "CSS3", "Firebase"],
    image: "https://media.licdn.com/dms/image/v2/D4D2DAQEWHKa4XhfpXA/profile-treasury-image-shrink_800_800/B4DZbbY07QGwAY-/0/1747437441159?e=1757822400&v=beta&t=Aec9Rk0hgeHYe_rzx4xsacZ8VB8hiMoOOWKG7Of-Vf8",
    status: "Operacional",
    project_link: "https://pedrocruzdm.github.io/Etec_Calendario/",
    github: "https://github.com/PedroCruzDm/Etec_Calendario",
    category: "Fullstack"
  },
  {
    id: 2,
    title: "QiPlanta e-commerce informativo",
    description: "Um e-commerce de plantas e produtos de jardinagem onde além do usuário poderá comprar os produtos, ele poderá saber mais sobre o produto, por exemplo, quando o usuário for comprar uma planta ele saberá para que ela serve, quais lugares são bons para ela ficar e outros. Onde o meu desenvolvimento foi no front-end para deixar o site mais atrativo e fácil de mexer.",
    technologies: ["MySQL", "PHP", "JavaScript", "CSS3", "HTML5", "API"],
    image: "https://workana.s3.amazonaws.com/portfolios/gd/6aa93b409c8b5b567c073c6a86902d3f/Capturadetela20250304114536.png?response-content-disposition=inline%3Bfilename%3D%22Captura%20de%20tela%202025-03-04%20114536.png%22&response-content-type=image%2Fpng&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA33COQEVTJSIXHA73%2F20250907%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250907T014726Z&X-Amz-SignedHeaders=host&X-Amz-Expires=21600&X-Amz-Signature=363f4b96535e02a40e218738d79b0495f2762ceb65fa635fffb863b5730191bc",
    project_link: "#",
    github: "https://github.com/GRNSz/Projeto_Feira_Tecnologica_QiPlanta",
    status: "Protótipo",
    category: "Frontend"
  },
  {
    id: 3,
    title: "Pontuar Calendar",
    description: "Protótipo de um aplicativo de calendário escolar desenvolvido com React e Firebase. Com foco na facilidade da comunicação de instituições ou empresas compartilhar um calendário online sem muita dificuldade e com atualizações do calendário em tempo real, onde o usuário poderá visualizar os eventos e a empresa ou escola criar, visualizar, editar, deletar e compartilhar.",
    technologies: ["React", "CSS3", "Firebase"],
    image: "blob:https://web.whatsapp.com/4be7d3dc-d320-40ca-b0ce-d112cea49801",
    project_link: "https://pontuar-calendar.onrender.com/",
    github: "",
    status: "Operacional",
    category: "Fullstack"
  },
  {
    id: 4,
    title: "Orbis",
    description: "Um aplicativo.... em breve mais informações.",
    technologies: ["Angular", "scss", "Firebase", "TypeScript", "HTML5"],
    image: "https://images.unsplash.com/photo-1505506874110-6a7a69069a08",
    status: "Em desenvolvimento",
    category: "fullstack"
  }
];

export const contactInfo = {
  email: "joaope14dro@gmail.com",
  github: "https://github.com/PedroCruzDm",
  linkedin: "https://www.linkedin.com/in/jo%C3%A3o-pedro-cruz-237131277/",
  portfolio: "",
  social: {
    youtube: "@JoaoPedroDev",
    discord: "ofamosopedro"
  }
};

export const timeline = [
  {
    year: "2022",
    title: "Despertar do Lado Sombrio",
    description: "Primeiros passos no desenvolvimento, descobrindo o poder do Kotlin e Android Studio"
  },
  {
    year: "2023",
    title: "Despertar do Web",
    description: "Mergulho nas águas do desenvolvimento web com HTML, CSS e JavaScript"
  },
  {
    year: "2024",
    title: "Domínio do React",
    description: "Aprofundamento nas artes obscuras do React, construindo interfaces poderosas"
  },
  {
    year: "2025",
    title: "Ascensão ao Fullstack",
    description: "Expandindo o domínio para backend, conquistando MySQL, Firebase e outras tecnologias"
  },
  {
    year: "05/09",
    title: "Agora",
    description: "Criação deste portfólio para mostrar minhas habilidades e descobrindo linguagens como Python, C e Assembly no curso superior"
  }
];