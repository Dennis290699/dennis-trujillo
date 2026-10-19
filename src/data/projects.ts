import type { Project, SkillGroup, ExperienceItem } from '../types/portfolio';

export const PROJECTS: Project[] = [
  {
    id: 'nexus-cloud',
    title: 'NexusCloud Distributed Orchestrator',
    subtitle: 'Plataforma de gestión de microservicios en tiempo real con alta disponibilidad',
    category: 'backend',
    description: 'Sistema backend distribuido desarrollado en Node.js y TypeScript con clustering avanzado y balanceo de carga predictivo.',
    longDescription: 'NexusCloud fue diseñado para resolver cuellos de botella en infraestructuras con más de 500k peticiones diarias. Implementa un patrón de arquitectura orientada a eventos con Redis Pub/Sub, gRPC para comunicación interna entre microservicios de baja latencia y PostgreSQL optimizado con particionamiento de tablas.',
    metrics: '+500k req/día · 99.99% Uptime · <15ms Latencia',
    techStack: ['TypeScript', 'Node.js', 'Docker', 'PostgreSQL', 'Redis', 'gRPC', 'Kubernetes'],
    githubUrl: 'https://github.com/trujilloadrian29',
    liveUrl: 'https://github.com/trujilloadrian29',
    highlights: [
      'Reducción del 45% en tiempos de respuesta mediante caché en memoria con Redis Cluster.',
      'Implementación de pipelines CI/CD automatizados con pruebas de carga automatizadas en GitHub Actions.',
      'Arquitectura zero-downtime deployment con rolling updates en Kubernetes.'
    ],
    architecture: 'Clean Architecture + Domain Driven Design con separación estricta de capas de infraestructura, dominio y aplicación.',
    challenges: 'El principal desafío fue mantener la consistencia de datos entre nodos distribuidos geográficamente bajo picos masivos de tráfico. Se resolvió implementando un protocolo de sincronización optimizado con Redis y transacciones idempotentes.'
  },
  {
    id: 'synapse-ai',
    title: 'Synapse Analytics Dashboard',
    subtitle: 'Panel de inteligencia de datos con visualización geoespacial interactiva',
    category: 'fullstack',
    description: 'Dashboard analítico empresarial con renderizado en tiempo real de grandes volúmenes de datos geoespaciales y métricas financieras.',
    longDescription: 'Una solución full stack de alto rendimiento construida con React 19, Tailwind CSS y un backend en Node.js capaz de procesar flujos de datos en tiempo real mediante WebSockets. Incorpora algoritmos de agregación espacial y gráficos optimizados para renderizar 100k+ puntos sin caída de FPS.',
    metrics: '100k+ Puntos en tiempo real · 60 FPS estables',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'WebSockets', 'PostGIS', 'Vite'],
    githubUrl: 'https://github.com/trujilloadrian29',
    liveUrl: 'https://github.com/trujilloadrian29',
    highlights: [
      'Optimización extrema del DOM virtual con virtualización de listas y Web Workers para procesamiento pesado.',
      'Diseño UX/UI minimalista enfocado en la legibilidad de datos complejos y modo oscuro nativo.',
      'Sistema de autenticación robusto basado en JWT con rotación segura de tokens y RBAC.'
    ],
    architecture: 'Single Page Application SPA con Server-Sent Events y arquitectura modular basada en componentes atómicos.',
    challenges: 'El renderizado fluido de 100k+ elementos gráficos en el navegador requirió el traslado de cálculos pesados a Web Workers y la optimización de los ciclos de render con requestAnimationFrame.'
  },
  {
    id: 'dev-workspace',
    title: 'DevScale Automated CLI & CI/CD',
    subtitle: 'Herramienta de automatización y scaffolding para equipos de ingeniería',
    category: 'cloud',
    description: 'CLI de línea de comandos en Node.js para aprovisionamiento automatizado de entornos de desarrollo y validación estática.',
    longDescription: 'Herramienta orientada a desarrolladores para estandarizar la creación de microservicios, la inyección de secretos de entorno y la ejecución de auditorías de seguridad en repositorios corporativos.',
    metrics: 'Reducción de 80% en tiempo de setup de proyectos',
    techStack: ['TypeScript', 'Node.js', 'Commander.js', 'Docker API', 'GitHub REST API'],
    githubUrl: 'https://github.com/trujilloadrian29',
    liveUrl: 'https://github.com/trujilloadrian29',
    highlights: [
      'Adopción por más de 30 desarrolladores en entornos de producción internos.',
      'Integración nativa con hooks de Git para validación de commits y linters estrictos.'
    ],
    architecture: 'Módulos CLI desacoplados con arquitectura extensible mediante plugins y soporte multi-plataforma.',
    challenges: 'Asegurar la compatibilidad multiplataforma (Linux, macOS, Windows) en la ejecución de contenedores Docker mediante la API de Node.js.'
  },
  {
    id: 'pulse-commerce',
    title: 'Pulse E-Commerce Engine',
    subtitle: 'Motor de comercio electrónico headless de ultra baja latencia',
    category: 'frontend',
    description: 'Frontend headless altamente optimizado para e-commerce con Server-Side Rendering y optimización rigurosa de Core Web Vitals.',
    longDescription: 'Desarrollado para maximizar la tasa de conversión mediante tiempos de carga inferiores al segundo. Integra pasarelas de pago seguras, gestión de inventario reactiva y motor de búsqueda instantánea client-side.',
    metrics: '100/100 Lighthouse Performance · <0.8s LCP',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'GraphQL', 'Stripe API', 'Redis'],
    githubUrl: 'https://github.com/trujilloadrian29',
    liveUrl: 'https://github.com/trujilloadrian29',
    highlights: [
      'Puntuación perfecta de 100 en accesibilidad, SEO y rendimiento en Google Lighthouse.',
      'Estrategia avanzada de prefetching de rutas y optimización estricta de recursos estáticos.'
    ],
    architecture: 'Jamstack moderno con hidratación parcial y gestión de estado optimizada sin dependencias redundantes.',
    challenges: 'Minimizar el bundle JavaScript inicial mediante code-splitting agresivo y lazy-loading de componentes pesados de pago.'
  },
  {
    id: 'quantum-sec',
    title: 'QuantumSec Zero-Trust Gateway',
    subtitle: 'Puerta de enlace de seguridad perimetral con encriptación avanzada',
    category: 'backend',
    description: 'Gateway de autenticación y autorización zero-trust para inspección de tráfico de red corporativo en tiempo real.',
    longDescription: 'Sistema de interceptación de peticiones HTTP/gRPC implementado en Go y Node.js que evalúa políticas de seguridad basadas en contexto, identidad y postura del dispositivo antes de otorgar acceso a los servicios internos.',
    metrics: 'Inspección de 200k peticiones/seg · 0 vulnerabilidades OWASP',
    techStack: ['TypeScript', 'Node.js', 'Go', 'Docker', 'OAuth2', 'JWT'],
    githubUrl: 'https://github.com/trujilloadrian29',
    liveUrl: 'https://github.com/trujilloadrian29',
    highlights: [
      'Cero falsos positivos en auditorías de seguridad automatizadas con herramientas SAST/DAST.',
      'Integración con sistemas IAM corporativos vía OIDC y SAML 2.0.'
    ],
    architecture: 'Proxy inverso desacoplado con motor de evaluación de políticas basado en reglas declarativas en memoria.',
    challenges: 'Optimizar el throughput del proxy para que la sobrecarga de inspección criptográfica no superara los 2ms por petición.'
  },
  {
    id: 'hyperion-ui',
    title: 'Hyperion Design System',
    subtitle: 'Librería de componentes UI accesibles y de alta gama para enterprise',
    category: 'frontend',
    description: 'Sistema de diseño modular con soporte completo para WCAG 2.1 AAA, temas dinámicos y animaciones optimizadas.',
    longDescription: 'Hyperion estandariza la experiencia visual y de interacción en un ecosistema de 12 aplicaciones web corporativas, reduciendo el tiempo de desarrollo frontend en un 50% y garantizando accesibilidad universal.',
    metrics: '100% Accesibilidad WCAG AAA · 12 Apps unificadas',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook', 'Radix UI'],
    githubUrl: 'https://github.com/trujilloadrian29',
    liveUrl: 'https://github.com/trujilloadrian29',
    highlights: [
      'Documentación interactiva completa con Storybook y pruebas automatizadas de regresión visual.',
      'Soporte nativo para navegación por teclado y lectores de pantalla.'
    ],
    architecture: 'Arquitectura monorepo con paquetes npm privados y tokens de diseño sincronizados automáticamente.',
    challenges: 'Diseñar un sistema de tokens dinámicos que soportara modo oscuro y contraste adaptativo sin penalizar el rendimiento de renderizado.'
  }
];

export const SKILLS: SkillGroup[] = [
  {
    category: 'Frontend & UI',
    iconName: 'Code2',
    skills: ['Astro', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Next.js / Vite', 'HTML5 semántico', 'Accesibilidad web (WCAG)', 'Gestión de estado']
  },
  {
    category: 'Backend & APIs',
    iconName: 'Server',
    skills: ['Node.js', 'Express.js', 'APIs RESTful', 'GraphQL', 'gRPC', 'WebSockets', 'Arquitectura de microservicios']
  },
  {
    category: 'Bases de datos',
    iconName: 'Database',
    skills: ['PostgreSQL', 'PostGIS', 'Redis', 'Prisma ORM', 'Drizzle ORM', 'MongoDB', 'Optimización de consultas']
  },
  {
    category: 'Cloud & DevOps',
    iconName: 'Cpu',
    skills: ['Docker', 'Kubernetes', 'Google Cloud Platform', 'AWS', 'Pipelines de CI/CD', 'GitHub Actions', 'Linux / Bash']
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: '2023 — Presente',
    role: 'Senior Full Stack Software Engineer',
    company: 'TechCorp Enterprise Solutions',
    description: 'Liderazgo técnico en el desarrollo de plataformas web escalables y microservicios en la nube. Reducción del 35% en costos de infraestructura cloud y optimización de pipelines de CI/CD.',
    stack: ['React / Astro', 'TypeScript', 'Node.js', 'PostgreSQL', 'GCP', 'Docker']
  },
  {
    period: '2021 — 2023',
    role: 'Full Stack Developer',
    company: 'Digital Innovators Lab',
    description: 'Diseño y construcción de aplicaciones web de alta concurrencia para clientes del sector fintech y logística. Implementación de arquitecturas serverless y APIs seguras.',
    stack: ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'Redis']
  },
  {
    period: '2019 — 2021',
    role: 'Frontend & UI Engineer',
    company: 'WebCraft Studio',
    description: 'Desarrollo de interfaces de usuario altamente responsivas, accesibles y optimizadas para SEO. Colaboración directa con equipos de diseño UX para garantizar máxima fidelidad.',
    stack: ['JavaScript (ES6+)', 'HTML5', 'CSS3 / Tailwind', 'Git', 'Webpack / Vite']
  },
  {
    period: '2018 — 2019',
    role: 'Junior Web Developer',
    company: 'Nexus Software Labs',
    description: 'Desarrollo de módulos web, mantenimiento de bases de datos relacionales y refactorización de código legacy hacia estándares modernos.',
    stack: ['JavaScript (ES6)', 'HTML5 / CSS3', 'Node.js', 'MySQL', 'Git']
  }
];
