export const content = {
  es: {
    nav: {
      inicio: "Inicio",
      proyectos: "Proyectos",
      skills: "Skills",
      contacto: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Alejo Arenas",
      role: "Desarrollador Frontend",
      bio: "Especializado en React y TypeScript. Bienvenido a mi portfolio.",
      primaryCta: "Proyectos",
      secondaryCta: "Contacto",
    },
    projects: {
      label: "01",
      title: "Proyectos",
      items: [
        {
          title: "PRIA",
          description:
            "Empresa especializada en soluciones digitales para restaurantes.",
          stack: ["React", "Node.js"],
          liveUrl: "https://tecnopria.netlify.app",
          repoUrl: "https://github.com/alearenass090/PRIA",
          badge: "En vivo",
        },
        {
          title: "Mi Manga Dinamita",
          description:
            "Lector de manga open source multiplataforma, buqueda multi-source, lector con modo pagina por pagina y scroll vertical, biblioteca con categorías, descargas offline y sistema de 48+ extensiones.",
          stack: ["Angular", "RxJS", "TypeScript", "Capacitor"],
          liveUrl: "https://mimangadinamita.netlify.app",
          repoUrl: "https://github.com/alearenass090/mi-manga-dinamita",
          badge: "En vivo",
        },
        {
          title: "Libros Rivendell",
          description:
            "Librería digital con catálogo de 1500+ libros en español, carrusel interactivo, buscador, carrito de compras con integración a WhatsApp y diseño responsive.",
          stack: ["React", "TypeScript", "Tailwind", "Vite"],
          liveUrl: "https://libros-arg.netlify.app",
          repoUrl: "https://github.com/alearenass090/libros-arg",
          badge: "En vivo",
        },
      ],
    },
    skills: {
      label: "02",
      title: "Skills",
      categories: [
        {
          name: "Lenguajes",
          items: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
        },
        {
          name: "Frameworks & Librerías",
          items: ["React.js", "Angular", "RxJS"],
        },
        {
          name: "Herramientas",
          items: ["Git", "GitHub", "Node.js", "npm", "Vite"],
        },
        {
          name: "Metodologías",
          items: ["Scrum", "Agile"],
        },
      ],
    },
    contact: {
      label: "03",
      title: "Contacto",
      description:
        "Si querés contactarme, tengo disponibilidad. Estoy abierto a nuevas oportunidades laborales y proyectos.",
      copyLabel: "Copiar email",
      copiedLabel: "¡Copiado!",
    },
    commandPalette: {
      placeholder: "Buscar...",
      empty: "Sin resultados",
    },
  },
  en: {
    nav: {
      inicio: "Home",
      proyectos: "Projects",
      skills: "Skills",
      contacto: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Alejo Arenas",
      role: "Frontend Developer",
      bio: "Specialized in React and TypeScript. Welcome to my portfolio.",
      primaryCta: "Projects",
      secondaryCta: "Contact",
    },
    projects: {
      label: "01",
      title: "Projects",
      items: [
        {
          title: "PRIA",
          description:
            "SaaS platform for restaurants. Modular architecture with landing page, contact form, and authentication system.",
          stack: ["React", "Node.js", "Supabase"],
          liveUrl: "https://tecnopria.netlify.app",
          repoUrl: "https://github.com/alearenass090/PRIA",
          badge: "Live",
        },
        {
          title: "Mi Manga Dinamita",
          description:
           " Open source cross-platform manga reader, multi-source search, page/longstrip reader modes, categorized library, offline downloads, and 48+ extension system.",
          stack: ["Angular", "RxJS", "TypeScript", "Capacitor"], 
          liveUrl: "https://mimangadinamita.netlify.app",
          repoUrl: "https://github.com/alearenass090/mi-manga-dinamita",
          badge: "Live",
        },
        {
          title: "Libros Rivendell",
          description:
            "Digital bookstore with 1500+ Spanish books catalog, interactive carousel, search engine, shopping cart with WhatsApp integration and responsive design.",
          stack: ["React", "TypeScript", "Tailwind", "Vite"],
          liveUrl: "https://libros-arg.netlify.app",
          repoUrl: "https://github.com/alearenass090/libros-arg",
          badge: "Live",
        },
      ],
    },
    skills: {
      label: "02",
      title: "Skills",
      categories: [
        {
          name: "Languages",
          items: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
        },
        {
          name: "Frameworks & Libraries",
          items: ["React.js", "Angular", "RxJS"],
        },
        {
          name: "Tools",
          items: ["Git", "GitHub", "Node.js", "npm", "Vite"],
        },
        {
          name: "Methodologies",
          items: ["Scrum", "Agile"],
        },
      ],
    },
    contact: {
      label: "03",
      title: "Contact",
      description:
        "Feel free to reach out — I'm available and open to new job opportunities and projects.",
      copyLabel: "Copy email",
      copiedLabel: "Copied!",
    },
    commandPalette: {
      placeholder: "Search...",
      empty: "No results",
    },
  },
};

export const SOCIAL_LINKS = {
  github: "https://github.com/alearenass090",
  linkedin: "https://www.linkedin.com/in/alejo-arenas/",
  email: "alearenass04@gmail.com",
} as const;

export type Lang = "es" | "en";
export type Content = (typeof content)["es"];
