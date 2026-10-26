import type { Project, SkillGroup, ExperienceItem } from '../types/portfolio';

export const PROJECTS: Project[] = [
  {
    id: 'la-angels-model-management',
    title: 'La Angels Model Management',
    subtitle: 'Plataforma editorial de representación de talentos con diseño de alta costura y navegación fluida',
    category: 'frontend',
    description: 'Sitio web editorial de alto rendimiento para agencia de moda internacional con catálogo categorizado, tema dual persistente y microinteracciones fluidas.',
    problemStatement: 'Las agencias de talentos y moda necesitan presentar catálogos visuales en altísima resolución a clientes y marcas internacionales en entornos móviles y desktop. Los sitios convencionales suelen sufrir de sobrecarga de carga de imágenes, parpadeo en cambios de tema y lentitud en el filtrado, lo que degrada la percepción de marca y la conversión de clientes.',
    solution: 'Desarrollo de un Single Page Application (SPA) ultrarrápido con React 19 y Vite, estilizado con Tailwind CSS v4 para garantizar consistencia visual moderna. Se incorporó Zustand para gestionar el estado atómico del filtrado de modelos y la preferencia de tema (Dark/Light mode) con persistencia, junto a transiciones coreografiadas con Framer Motion 12.',
    longDescription: 'La Angels Model Management es una experiencia web editorial diseñada para capturar la esencia sofisticada de la industria de la moda. El sistema permite explorar modelos clasificados por segmentos (Women, Men, New Faces), ofreciendo fichas individuales con galerías fotográficas de alta fidelidad, navegación por rutas optimizada con React Router DOM v7 y un diseño visual con glassmorphism y contrastes armónicos adaptados a cualquier dispositivo.',
    metrics: '100% Responsive · <0.6s TTI · 60 FPS en Animaciones',
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Vite 6', 'Zustand 5', 'Framer Motion 12', 'React Router DOM 7', 'Lucide React'],
    githubUrl: 'https://github.com/Dennis290699/react-model-management',
    liveUrl: 'https://react-model-management.vercel.app/',
    liveUrlLabel: 'Demostración en Vivo',
    highlights: [
      'Filtrado dinámico multicriterio por categorías de talentos impulsado por Zustand con cero latencia de renderizado.',
      'Sistema de tema dual (Dark/Light Mode) con persistencia local y transiciones de color sin destellos (FOUC).',
      'Orquestación visual con Framer Motion 12 y diseño adaptable con la nueva especificación de Tailwind CSS v4.'
    ],
    architecture: 'Component-Driven Architecture (React 19 + Vite 6) con estado global atómico en Zustand y rutas desacopladas con React Router v7.',
    challenges: 'El reto clave fue mantener un rendimiento fluido de 60 FPS al transicionar entre galerías con imágenes pesadas en móviles. Se solucionó mediante lazy loading progresivo, desacoplamiento del DOM virtual y control de renderizado con Tailwind v4.',
    pipelineFlow: {
      stage: 'UI / UX TRANSIT // STATE FLOW',
      flow: 'USER ACTION ──> ZUSTAND STORE ──> REACT 19 VIRTUAL DOM',
      sub: '└─ FRAMER MOTION ORCHESTRATION ──> OPTIMIZED IMAGE GRID'
    }
  },
  {
    id: 'streetwarm-ecommerce',
    title: 'StreetWarm Urban Fashion Store',
    subtitle: 'Storefront de comercio electrónico headless con arquitectura de islas y validación estricta de variantes',
    category: 'frontend',
    description: 'E-commerce especializado en moda streetwear con carrito de compras global reactivo, validación previa al checkout y navegación ultra rápida con Astro.',
    problemStatement: 'Las plataformas tradicionales de e-commerce suelen enviar paquetes gigantescos de JavaScript innecesario al cliente, elevando el tiempo de interacción y provocando abandonos de compra. Además, errores recurrentes de selección de tallas y colores antes del checkout dañan la experiencia de compra en tiendas de moda urbana.',
    solution: 'Implementación de un storefront headless con Astro 6 y React 19 mediante la arquitectura de islas. El estado global del carrito se gestiona con Zustand persistente, implementando un validador en tiempo real que exige la selección explícita de variantes de producto (tallas y colores) antes de habilitar el flujo de checkout.',
    longDescription: 'StreetWarm es una aplicación web de comercio electrónico moderna, de alto rendimiento y estéticamente potente. Combina un diseño con toques glassmorphism y animaciones fluidas con un catálogo interactivo de streetwear. Los usuarios cuentan con carruseles táctiles fluidos potenciados por Swiper.js, vistas detalladas de producto con selector dinámico de especificaciones y un carrito deslizable (drawer) totalmente sincronizado.',
    metrics: '99/100 Lighthouse Performance · <0.8s LCP · 0 Hydration Lag',
    techStack: ['Astro 6', 'React 19', 'Tailwind CSS v4', 'TypeScript', 'Zustand 5', 'Framer Motion 12', 'Swiper 12'],
    githubUrl: 'https://github.com/Dennis290699/astro-StreetWarm',
    liveUrl: 'https://astro-street-warm.vercel.app/',
    liveUrlLabel: 'Demostración en Vivo',
    highlights: [
      'Arquitectura de islas (Islands Architecture) que reduce drásticamente el bundle final de JavaScript sin perder interactividad.',
      'Carrito de compras reactivo en Zustand con persistencia en LocalStorage y validación estricta de variantes requeridas.',
      'Carruseles táctiles de producto optimizados con Swiper 12 y animaciones de microinteracción con Framer Motion.'
    ],
    architecture: 'Islands Architecture (Astro 6 + React 19) con Zustand Store desacoplado y renderizado estático de alto rendimiento.',
    challenges: 'Sincronizar el estado del carrito entre islas interactivas de React y páginas estáticas de Astro sin desajustes de hidratación. Se superó utilizando almacenamiento sincronizado en LocalStorage mediante hooks de Zustand.',
    pipelineFlow: {
      stage: 'ISLAND HYDRATION // SHOPPING ENGINE',
      flow: 'ASTRO STATIC CORE ──> REACT 19 ISLANDS ──> ZUSTAND CART',
      sub: '└─ VARIANT VALIDATOR ──> LOCALSTORAGE PERSISTENCE ──> CHECKOUT'
    }
  },
  {
    id: 'cursed-knight-portal',
    title: 'Chronicles of the Cursed Knight — Official Web',
    subtitle: 'Portal inmersivo oficial para videojuego indie con telemetría de satisfacción y distribución de demos',
    category: 'fullstack',
    description: 'Landing page promocional de fantasía oscura gótica con cronología interactiva, visor multimedia de escenarios, API de encuestas en Express y distribución de demo jugable.',
    problemStatement: 'Los videojuegos independientes requieren una presencia web oficial que no solo comunique la estética y lore del universo ficcional, sino que permita capturar retroalimentación cualitativa temprana de los jugadores y centralizar la distribución de demos de manera controlada y atractiva.',
    solution: 'Creación de un portal de alta inmersión visual construido con Astro 7, React 19 y Tailwind CSS v4, inspirado en códices medievales de oro y acero. El sitio integra un módulo interactivo de encuesta de personalidad y satisfacción conectado a un backend en Express.js para recopilar opiniones de testers, además de un hub de descarga directa para la build de PC.',
    longDescription: 'Sitio oficial desarrollado para el videojuego "Chronicles of the Cursed Knight" (Proyecto Arrow - UCE). La plataforma invita al usuario a sumergirse en el Reino de Valtheria y conocer a Sir Gareth, el Eco de Elara y Lord Malakor. Incluye una línea de tiempo histórica navegable desde el Florecimiento de Eldergrove hasta la Noche de la Ceniza, una galería interactiva de niveles (Jardines Marchitos, Mazmorras del Eco, Torre Marchita) y la descarga oficial de la demo jugable.',
    metrics: '100% Inmersión Gótica · API REST Integrada · <1s FCP',
    techStack: ['Astro 7', 'React 19', 'Tailwind CSS v4', 'Motion 12', 'Node.js', 'Express.js', 'TypeScript', 'Lucide React'],
    githubUrl: 'https://github.com/Dennis290699/astro-Chronicles-of-the-Cursed-Knight',
    liveUrl: 'https://astro-chronicles-of-the-cursed-knig.vercel.app/',
    liveUrlLabel: 'Demostración en Vivo',
    highlights: [
      'Narrativa interactiva con cronología histórica y visor de facciones con microinteracciones cinemáticas en Motion 12.',
      'Backend con API REST en Node.js y Express para captura, validación y persistencia de encuestas de jugadores.',
      'Centro de distribución seguro de la demo jugable para PC con telemetría de conversión de descargas.'
    ],
    architecture: 'Jamstack desacoplado: Frontend de alta velocidad en Astro 7 con micro-componentes React 19 y API de encuestas en Express.',
    challenges: 'Lograr una estética visual densa y rica en texturas góticas medievales (efectos de partículas, degradados oscuros y tipografía heráldica) manteniendo tiempos de carga inferiores a un segundo en conexiones móviles.',
    pipelineFlow: {
      stage: 'MEDIA PIPELINE // SURVEY TELEMETRY',
      flow: 'COMMUNITY PLAYER ──> ASTRO PORTAL ──> EXPRESS REST API',
      sub: '└─ SURVEY INGESTION ──> JSON DATASTORE ──> DEMO DISTRIBUTION'
    }
  },
  {
    id: 'cursed-knight-analytics',
    title: 'Cursed Knight Tester Hub & AI Analytics',
    subtitle: 'Plataforma de telemetría de juego en tiempo real con dashboards analíticos y motor de decisiones asistido por IA',
    category: 'ai',
    description: 'Sistema integral de gestión de pruebas para testers con API en Express, dashboards interactivos en Recharts y análisis predictivo con Google Gemini AI.',
    problemStatement: 'Durante las pruebas de juego (playtesting), la retroalimentación de los testers y los datos de telemetría suelen estar dispersos en hojas de cálculo o chats. Los diseñadores pierden horas intentando detectar cuellos de botella en la dificultad, curvas de abandono y prioridades de balanceo de los niveles.',
    solution: 'Desarrollo de una plataforma fullstack con React 19 y Express.js que centraliza las métricas de prueba en tiempo real. Incorpora un dashboard dinámico con Recharts para analizar KPIs de sesiones de juego y un motor de inteligencia artificial impulsado por el SDK oficial de Google Gemini (@google/genai) que analiza los datos y genera sugerencias estratégicas para la toma de decisiones del equipo de desarrollo.',
    longDescription: 'Esta plataforma sirve como centro de comando analítico para el equipo de desarrollo de "Chronicles of the Cursed Knight". Los testers registran sus experiencias a través de formularios validados; la API en Express procesa los eventos y los refleja en tableros en tiempo real. Al presionar el motor de IA, el sistema procesa la matriz de datos con Google Gemini para redactar informes de síntesis de bugs, anomalías de balance y recomendaciones de diseño.',
    metrics: 'Telemetría en tiempo real · Insights automáticos con Gemini AI · 10+ Métricas de Juego',
    techStack: ['React 19', 'Google Gemini AI SDK', 'Express.js', 'Zustand 5', 'Recharts 3', 'Motion 12', 'Vite 6', 'Tailwind CSS v4', 'TypeScript'],
    githubUrl: 'https://github.com/Dennis290699/react-ChroniclesOfTheCursedKnight',
    liveUrl: 'https://react-chronicles-of-the-cursed-knig.vercel.app/',
    liveUrlLabel: 'Demostración en Vivo',
    highlights: [
      'Integración con el SDK de Google Gemini (@google/genai) para diagnóstico automatizado y síntesis inteligente de métricas.',
      'Visualización de métricas críticas en tiempo real con gráficos interactivos construidos en Recharts 3.',
      'Servidor API en Express con TypeScript y tipado estricto para ingesta de eventos de prueba y evaluación de testers.'
    ],
    architecture: 'Fullstack Analytics Stack: Express API para ingesta de datos + React 19 SPA con Recharts y Google GenAI Integration.',
    challenges: 'Diseñar el pipeline de prompts estructurados y sanitización de datos de prueba para que el modelo Gemini proporcione análisis certeros de balanceo sin desbordar el contexto de la ventana de inferencia.',
    pipelineFlow: {
      stage: 'ANALYTICS & AI // INFERENCE PIPELINE',
      flow: 'TESTER SESSIONS ──> EXPRESS API ──> RECHARTS DASHBOARD',
      sub: '└─ DATA AGGREGATION ──> GOOGLE GEMINI SDK ──> GAME DESIGN INSIGHTS'
    }
  },
  {
    id: 'cursed-knight-game',
    title: 'Chronicles of the Cursed Knight — Videojuego Indie 2.5D',
    subtitle: 'Videojuego de plataformas y acción gótica para PC desarrollado en Unity 6 con gestión de assets por Git LFS',
    category: 'systems',
    description: 'Videojuego indie 2.5D desarrollado en Unity 6 LTS con física personalizada, combate dinámico de Sir Gareth, control de versiones con Git LFS y build descargable.',
    problemStatement: 'El desarrollo de un videojuego en equipo exige sincronizar de manera coordinada código C# y grandes volúmenes de assets multimedia binarios (texturas 4K, modelos 3D, pistas de audio orquestales, prefabs y escenas). Sin un flujo técnico estricto de control de versiones y convenciones de motor, los proyectos de Unity sufren corrupción frecuente de escenas y materiales.',
    solution: 'Desarrollo colaborativo en Unity 6 (6000.3.14f1 LTS) con arquitectura de componentes en C# y máquinas de estados finitos (FSM) para el combate y movimiento. Se implementó una infraestructura rigurosa basada en Git LFS (Large File Storage) que permitió sincronizar assets pesados sin colisionar el repositorio ni degradar el rendimiento.',
    longDescription: 'Chronicles of the Cursed Knight es un videojuego de acción y plataformas en perspectiva 2.5D ambientado en un universo de fantasía oscura. El jugador encarna a Sir Gareth en su búsqueda de redención a través de niveles verticales como los Jardines Marchitos y las Mazmorras del Eco. Cuenta con animaciones fluidas, combate cuerpo a cuerpo reactivo, control de cámara cinemático con Cinemachine e iluminación ambiental optimizada con URP.',
    metrics: '60 FPS Estables en PC · Git LFS Pipeline · Física 2.5D Precisa',
    techStack: ['Unity 6 (6000.3 LTS)', 'C#', 'Git LFS', 'Universal Render Pipeline (URP)', 'Cinemachine', 'Physics 2.5D', 'State Machines'],
    githubUrl: 'https://github.com/Dennis290699/Project-Arrow',
    liveUrl: 'https://www.mediafire.com/file/jfqackahtet3agu/ChroniclesOfTheCursedKnight.zip/file',
    liveUrlLabel: 'Descargar Demo (PC .zip)',
    highlights: [
      'Control y respuesta de combate en tiempo real con máquinas de estados (FSM) desacopladas en C#.',
      'Pipeline de versionado profesional con Git LFS para gestión íntegra de assets binarios, modelos 3D y prefabs.',
      'Iluminación dinámica y post-procesado optimizado a 60 FPS mediante Universal Render Pipeline (URP).'
    ],
    architecture: 'Component-Based Architecture en Unity 6 con Finite State Machines (FSM), URP y gestión binaria distribuida con Git LFS.',
    challenges: 'Sincronizar las colisiones 2.5D entre elementos 3D del escenario y el hitbox del personaje en combates rápidos, evitando que el personaje atravesara plataformas durante caídas o transiciones de ataque.',
    pipelineFlow: {
      stage: 'GAME ENGINE // ASSET & CODE LIFECYCLE',
      flow: 'C# LOGIC & INPUT ──> UNITY 6 ENGINE ──> PHYSICS / URP PIPELINE',
      sub: '└─ GIT LFS BINARY SYNC ──> STANDALONE PC BUILD (60 FPS)'
    }
  },
  {
    id: 'luminafx-software-renderer',
    title: 'LuminaFX — Motor de Renderizado 3D y Procesamiento por Software',
    subtitle: 'Pipeline gráfico tridimensional completo por CPU y suite de procesamiento digital de imágenes sin aceleración por hardware',
    category: 'systems',
    description: 'Motor gráfico 3D y suite de manipulación de imagen desarrollado en Java puro que implementa un pipeline gráfico completo por software (CPU) emulando la arquitectura de OpenGL.',
    problemStatement: 'Las APIs modernas de GPU (OpenGL, Vulkan, DirectX) abstraen gran parte de los procesos matemáticos de bajo nivel. Para comprender en profundidad los fundamentos de la computación gráfica, es indispensable recrear físicamente la rasterización, interpolación baricéntrica y tests de fragmentos en la memoria sin delegar en el hardware de vídeo.',
    solution: 'Desarrollo de LuminaFX en Java utilizando Swing y FlatLaf. Se diseñó desde cero un motor de rasterización 3D por software que manipula los búferes de color y profundidad directamente a nivel de píxel. Incluye algoritmos de trazado de líneas (Bresenham/DDA), rasterización de triángulos por coordenadas baricéntricas, corrección de perspectiva, mapeo bilineal de texturas, pipeline completo de operaciones sobre fragmentos (Scissor, Alpha, Depth y Stencil Test, Blending y 4x MSAA) y CI/CD con GitHub Actions.',
    longDescription: 'LuminaFX es un proyecto de ingeniería de software y computación gráfica de alto rigor. Recrea de forma física el pipeline de una GPU en la CPU: desde la proyección matricial de vértices hasta la composición final de fragmentos en el framebuffer. Además, cuenta con herramientas avanzadas de edición y filtrado 2D, búfer de acumulación en punto flotante y un flujo automatizado de empaquetado y releases con GitHub Actions.',
    metrics: 'Pipeline 100% CPU · 4x MSAA Anti-aliasing · CI/CD Automático con Releases',
    techStack: ['Java', 'Swing', 'FlatLaf', 'Algoritmos Bresenham & DDA', 'Rasterizado Baricéntrico', 'Z-Buffer', 'Stencil Test', '4x MSAA', 'GitHub Actions'],
    githubUrl: 'https://github.com/Dennis290699/TallerII-Grupal',
    liveUrl: 'https://github.com/Dennis290699/TallerII-Grupal/releases/tag/v1.0.7',
    liveUrlLabel: 'Ver Releases (v1.0.7 JAR)',
    highlights: [
      'Motor de rasterización 3D por software con coordenadas baricéntricas, interpolación UV y corrección de perspectiva.',
      'Pipeline de fragmentos completo: Z-Buffer (Depth Test), Scissor Test, Alpha Test, Stencil Test, Blending y 4x MSAA.',
      'Pipeline CI/CD configurado en GitHub Actions para compilación automatizada y generación de releases ejecutables.'
    ],
    architecture: 'Software-Rendered Graphics Pipeline emulando la máquina de estados y las etapas de fragmentos de OpenGL sobre memoria de píxeles en Java AWT/Swing.',
    challenges: 'Mantener tiempos de procesamiento interactivos en la CPU al rasterizar geometrías complejas con 4x MSAA y filtrado bilineal. Se optimizó mediante bucles de memoria contiguos en arrays unidimensionales y poda temprana de fragmentos.',
    pipelineFlow: {
      stage: 'GRAPHICS PIPELINE // CPU FRAMEBUFFER FLOW',
      flow: '3D VERTICES ──> BARYCENTRIC RASTERIZER ──> PERSPECTIVE INTERPOLATION',
      sub: '└─ FRAGMENT OPS (Z-BUFFER / STENCIL / 4x MSAA) ──> PIXEL COLOR BUFFER'
    }
  },
  {
    id: 'next-ai-animal-recognition',
    title: 'Next AI — Reconocimiento y Clasificación de Especies con IA',
    subtitle: 'Plataforma web de visión artificial para clasificación de fauna con inferencia en navegador y matriz de confusión',
    category: 'ai',
    description: 'Aplicación web inteligente que ejecuta modelos convolucionales de clasificación de animales en tiempo real con TensorFlow.js, backend en Nest.js y panel de evaluación métrica.',
    problemStatement: 'Desplegar modelos de visión artificial para la clasificación de fauna habitualmente depende de infraestructura servidora pesada que introduce latencias indeseadas de red y costes de GPU en la nube, alejando la herramienta de usuarios que necesitan diagnósticos inmediatos e interactivos.',
    solution: 'Construcción de una arquitectura web híbrida con Next.js 14 y Nest.js. El modelo convolucional preentrenado se carga e infiere directamente en el navegador del usuario utilizando TensorFlow.js acelerado por WebGL. El frontend proporciona una interfaz drag-and-drop con visualización diagnóstica que incluye matriz de confusión, métricas de precisión y distribución de probabilidades con Recharts.',
    longDescription: 'Next AI Animal Recognition combina el poder del aprendizaje automático con una interfaz moderna y accesible. Los usuarios pueden subir fotografías de diversas especies animales y obtener en milisegundos la predicción del modelo con su respectivo nivel de confianza. La plataforma expone métricas detalladas del desempeño del modelo, permitiendo inspeccionar falsos positivos, sensibilidad y especificidad mediante gráficos interactivos y tablas analíticas.',
    metrics: '<150ms Inferencia de IA · Matriz de Confusión Interactiva · 100% Client-Side Ingestion',
    techStack: ['Next.js 14', 'Nest.js', 'TensorFlow.js', 'TypeScript', 'Radix UI', 'Recharts 2', 'Framer Motion 11', 'Tailwind CSS', 'TensorBoard'],
    githubUrl: 'https://github.com/Dennis290699/next-ai-animal-recognition',
    liveUrl: 'https://next-ai-animal-recognition.vercel.app/',
    liveUrlLabel: 'Demostración en Vivo',
    highlights: [
      'Inferencia en el cliente con TensorFlow.js acelerado por hardware mediante WebGL backend para latencia ultra baja.',
      'Dashboard analítico con Recharts para inspeccionar la matriz de confusión, precisión y curvas de pérdida del modelo.',
      'Arquitectura robusta con Next.js 14 App Router en frontend y microservicios en Nest.js para procesamiento complementario.'
    ],
    architecture: 'Hybrid AI Web Architecture: Inferencia en el cliente con TensorFlow.js + Next.js 14 App Router + Backend optimizado en Nest.js.',
    challenges: 'Gestionar el preprocesamiento de tensores (redimensionamiento, normalización y liberación de memoria con tf.tidy) en el navegador sin bloquear el hilo de ejecución principal de la interfaz.',
    pipelineFlow: {
      stage: 'COMPUTER VISION // TENSOR INFERENCE',
      flow: 'IMAGE INPUT ──> TENSORFLOW.JS (WEBGL) ──> CONVOLUTION TENSORS',
      sub: '└─ SOFTMAX PROBABILITIES ──> CONFUSION MATRIX & RECHARTS METRICS'
    }
  },
  {
    id: 'next-neuro-museo',
    title: 'Neuro-Museo — Reconstrucción de Imágenes con Redes Neuronales',
    subtitle: 'Plataforma documental interactiva para divulgación y análisis de modelos neuronales entrenados desde cero',
    category: 'ai',
    description: 'Museo virtual e interactivo desarrollado en Next.js 15 y Supabase para documentar el proceso de reconstrucción de imágenes mediante arquitecturas neuronales diseñadas desde cero.',
    problemStatement: 'Los modelos de reconstrucción de imágenes basados en Deep Learning suelen quedar confinados en scripts de investigación poco accesibles para la comunidad educativa y el público general. Frecuentemente no existe un entorno didáctico que permita comparar visualmente cómo evoluciona la reconstrucción iteración a iteración frente a la imagen original.',
    solution: 'Desarrollo de Neuro-Museo utilizando Next.js 15, Supabase y Recharts. La plataforma funciona como una exhibición virtual interactiva que desglosa las capas, funciones de pérdida y etapas de entrenamiento del modelo de red neuronal. Permite cotejar imágenes reconstruidas con ground-truth, analizar curvas de convergencia y consultar registros persistidos en Supabase.',
    longDescription: 'Neuro-Museo une la divulgación científica rigurosa con el diseño interactivo de vanguardia. Diseñada con una estética documental armónica, la plataforma guía al usuario a través de los conceptos fundamentales del aprendizaje profundo, permitiéndole interactuar con sliders comparativos de reconstrucción, gráficos de error cuadrático medio (MSE) y un catálogo curado de experimentos almacenados en Supabase.',
    metrics: 'Next.js 15 + Supabase · Visualización de Tensores en tiempo real · Diseño Editorial de Alto Impacto',
    techStack: ['Next.js 15', 'React 18', 'Supabase', 'TypeScript', 'Zustand', 'Recharts 2', 'Framer Motion', 'Radix UI', 'Tailwind CSS', 'Zod'],
    githubUrl: 'https://github.com/Dennis290699/next-neuro-museo',
    liveUrl: 'https://next-neuro-museo.vercel.app/',
    liveUrlLabel: 'Demostración en Vivo',
    highlights: [
      'Documentación interactiva de modelos de redes neuronales convolucionales entrenadas desde cero.',
      'Persistencia y consulta de experimentos con la API de Supabase y validación de esquemas con Zod.',
      'Visualización analítica de métricas de entrenamiento (pérdida, fidelidad estructural) con Recharts y controles Zustand.'
    ],
    architecture: 'Documentary AI Showcase: Next.js 15 Fullstack con Supabase BaaS, Zustand para control de estados y animaciones con Framer Motion.',
    challenges: 'Traducir conceptos matemáticos abstractos de redes neuronales en visualizaciones web responsivas y atractivas que no saturen la atención del usuario ni degraden el rendimiento del navegador.',
    pipelineFlow: {
      stage: 'NEURAL DOCUMENTARY // DATA TRANSIT',
      flow: 'NEURAL EXPERIMENTS ──> SUPABASE DB ──> NEXT.JS 15 ENGINE',
      sub: '└─ RECONSTRUCTION SLIDERS ──> RECHARTS TELEMETRY ──> USER INSIGHTS'
    }
  },
  {
    id: 'nyc-taxi-bigdata',
    title: 'NYC Taxi Big Data — Pipeline Distribuido End-to-End',
    subtitle: 'Arquitectura analítica escalable para procesamiento de millones de viajes con Apache Spark, Hadoop HDFS y Docker',
    category: 'backend',
    description: 'Solución distribuida End-to-End para ingesta, procesamiento analítico y visualización de millones de registros de taxis de NYC usando Apache Spark en clúster Hadoop contenerizado.',
    problemStatement: 'Procesar y analizar decenas de millones de registros de transporte urbano (datasets de NYC Taxi en formato Parquet) supera con creces las capacidades de motores de bases de datos relacionales convencionales, generando cuellos de botella de memoria, bloqueos de disco y tiempos de consulta inviables para la toma de decisiones en movilidad urbana.',
    solution: 'Diseño e implementación de un pipeline distribuido End-to-End orquestado con Docker Compose. Los datos crudos en Parquet se ingieren en Hadoop HDFS, se limpian y transforman mediante jobs distribuidos de Apache Spark (PySpark), se exponen a través de una API REST en Node.js que consulta HDFS vía WebHDFS, y se presentan en un dashboard interactivo en Next.js.',
    longDescription: 'NYC Taxi Big Data Analytics es una arquitectura empresarial completa y reproducible mediante contenedores Docker. Permite ejecutar limpiezas masivas de datos espaciales y temporales, identificar patrones de demanda por distritos de Nueva York, calcular promedios de tarifas y propinas según horarios pico, y servir agregaciones analíticas estructuradas a través de una API REST moderna para su visualización interactiva.',
    metrics: 'Millones de Registros Procesados · Clúster Hadoop + Spark Dockerizado · Pipeline End-to-End',
    techStack: ['Apache Spark (PySpark)', 'Hadoop HDFS', 'Docker & Docker Compose', 'Node.js', 'Express.js', 'Next.js', 'React', 'Apache Parquet', 'Python'],
    githubUrl: 'https://github.com/Dennis290699/nyc-taxi-bigdata',
    liveUrl: 'https://github.com/Dennis290699/nyc-taxi-bigdata',
    liveUrlLabel: 'Explorar Arquitectura Docker',
    highlights: [
      'Ingesta masiva y almacenamiento distribuido particionado en HDFS (/raw y /processed) sobre clúster Hadoop.',
      'Transformaciones y agregaciones analíticas distribuidas de alto rendimiento escritas con Apache Spark (PySpark).',
      'API REST en Node.js/Express integrada con WebHDFS para servir datos procesados al dashboard en Next.js.'
    ],
    architecture: 'Lambda/Batch Big Data Architecture: Hadoop HDFS + Apache Spark Cluster en Docker + WebHDFS REST API + Next.js UI.',
    challenges: 'Orquestar la asignación de memoria y CPU entre el maestro y los trabajadores de Spark dentro de contenedores Docker, previniendo excepciones de falta de memoria (OOM) al leer archivos Parquet masivos particionados.',
    pipelineFlow: {
      stage: 'BIG DATA PIPELINE // DISTRIBUTED ARCHITECTURE',
      flow: 'RAW PARQUET ──> HADOOP HDFS (/raw) ──> APACHE SPARK CLUSTER',
      sub: '└─ PROCESSED JSON (/analytics) ──> NODE.JS API ──> NEXT.JS DASHBOARD'
    }
  }
];

export const SKILLS: SkillGroup[] = [
  {
    category: 'Frontend & UI',
    iconName: 'Code2',
    skills: ['Astro', 'React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'Zustand', 'HTML5 / Accesibilidad']
  },
  {
    category: 'Backend & APIs',
    iconName: 'Server',
    skills: ['Node.js', 'Express.js', 'Nest.js', 'APIs RESTful', 'WebHDFS', 'Arquitectura de Microservicios', 'Clean Architecture']
  },
  {
    category: 'IA, Big Data & Gráficos',
    iconName: 'Cpu',
    skills: ['Apache Spark (PySpark)', 'Hadoop HDFS', 'TensorFlow.js', 'Google Gemini AI SDK', 'Computer Graphics (Rasterización CPU)', 'Unity 6 & C#']
  },
  {
    category: 'Bases de Datos & DevOps',
    iconName: 'Database',
    skills: ['Docker & Docker Compose', 'Supabase / PostgreSQL', 'Git & Git LFS', 'GitHub Actions (CI/CD)', 'Vercel Deployments', 'Parquet Datasets']
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: 'Presente',
    role: 'Estudiante de Último Semestre — Carrera de Computación',
    company: 'Facultad de Ingeniería y Ciencias Aplicadas (FICA) · Universidad Central del Ecuador',
    description: 'Estudiante de último semestre en la Carrera de Computación. Formación académica integral en ciencias de la computación, arquitectura de software, sistemas distribuidos, algoritmos complejos, computación gráfica e inteligencia artificial aplicada al desarrollo de soluciones en producción.',
    stack: ['Ciencias de la Computación', 'Ingeniería de Software', 'Sistemas Distribuidos', 'Algoritmos & Estructuras de Datos', 'Inteligencia Artificial', 'Computación Gráfica'],
    tag: 'ETAPA ACTUAL // FORMACIÓN UNIVERSITARIA',
    context: 'Facultad de Ingeniería y Ciencias Aplicadas (FICA) · Carrera de Computación.'
  },
  {
    period: 'Septiembre de 2026',
    role: 'Fundamentos de AWS: Cloud, Serverless y Operación',
    company: 'Commit Academy',
    description: 'Especialización en arquitectura y despliegue de infraestructura en la nube sobre Amazon Web Services (AWS). Implementación de arquitecturas desacopladas Serverless, aprovisionamiento escalable y mejores prácticas en operaciones cloud.',
    stack: ['AWS', 'Cloud Computing', 'Serverless', 'Cloud Operations', 'Infraestructura Cloud'],
    tag: 'CLOUD & SERVERLESS // CERTIFICACIÓN OFICIAL',
    context: 'Infraestructura cloud en AWS, arquitecturas serverless y despliegue desacoplado.',
    certificateImage: '/certs/cert_QM4dveLRJk.webp'
  },
  {
    period: 'Septiembre de 2026',
    role: 'Curso de Iniciación a la IA (El Nuevo ChatGPT)',
    company: 'BIG school',
    description: 'Formación intensiva enfocada en la optimización de flujos de trabajo de ingeniería utilizando ChatGPT y modelos de lenguaje avanzados, formulación de prompts estructurados y automatización de procesos operativos.',
    stack: ['Inteligencia Artificial', 'ChatGPT', 'Prompt Engineering', 'Automatización de Flujos'],
    tag: 'IA APLICADA // OPTIMIZACIÓN DE FLUJOS',
    context: 'Integración de modelos LLM, ingeniería de prompts y optimización operativa.',
    certificateImage: '/certs/Certificado-Dennis-Trujillo-Vistin-qx6uktnh.webp'
  },
  {
    period: 'Julio de 2026',
    role: 'Curso Básico de Inteligencia Artificial Generativa',
    company: 'Universidad Central del Ecuador (UCE)',
    description: 'Certificación oficial de 40 horas académicas emitida por la Universidad Central del Ecuador. Formación teórico-práctica en fundamentos matemáticos, modelos generativos, arquitecturas Transformer y aplicaciones empresariales de IA Generativa.',
    stack: ['IA Generativa', 'Modelos Transformer', 'Deep Learning', 'LLMs', 'Fundamentos Teóricos'],
    tag: 'ACREDITACIÓN OFICIAL // 40 HORAS ACADÉMICAS',
    context: 'Formación académica en modelos generativos, redes neuronales y Transformers.',
    certificateImage: '/certs/3273_TRUJILLO VISTIN_1805372081-signed-signed.webp'
  },
  {
    period: 'Junio de 2026',
    role: 'Iniciación al Desarrollo con IA: Programa con Agentes',
    company: 'BIG school',
    description: 'Jornadas técnicas de especialización en el desarrollo de software integrando agentes autónomos de Inteligencia Artificial, razonamiento guiado y conexión mediante herramientas y APIs.',
    stack: ['Agentes de IA', 'Desarrollo de Software', 'Tool Calling', 'Integración de APIs', 'Automatización'],
    tag: 'AGENTES DE IA // DESARROLLO DE SOFTWARE',
    context: 'Programación asistida, sistemas agénticos autónomos y ejecución de tareas.',
    certificateImage: '/certs/Certificado-Dennis-Trujillo-Vistin-cvklznem.webp'
  },
  {
    period: 'Mayo de 2026',
    role: 'Curso de IA: De 0 a Agentes Autónomos',
    company: 'BIG school',
    description: 'Formación especializada en el diseño y arquitectura de agentes de Inteligencia Artificial, automatización de tareas complejas, memoria contextual y aplicación práctica en flujos de trabajo.',
    stack: ['Agentes de IA', 'Automatización de Tareas', 'Memoria Contextual', 'IA Aplicada'],
    tag: 'ARQUITECTURA AGÉNTICA // AUTOMATIZACIÓN',
    context: 'Diseño de agentes de IA, memoria contextual y automatización de procesos.',
    certificateImage: '/certs/Certificado-Dennis-Trujillo-Vistin-ck4blv7t.webp'
  },
  {
    period: 'Mayo de 2026',
    role: 'Curso de SEO Técnico para IA y Google (GEO)',
    company: 'BIG school',
    description: 'Capacitación en posicionamiento web (SEO) técnico avanzado optimizado para el algoritmo de Google y nuevos motores de búsqueda basados en IA (GEO). Estructuración semántica, indexabilidad y optimización de rendimiento.',
    stack: ['SEO Técnico', 'GEO (Generative Engine Optimization)', 'Semántica Web', 'Core Web Vitals'],
    tag: 'SEO TÉCNICO & GEO // MOTORES DE IA',
    context: 'Posicionamiento en Google y motores de búsqueda generativa (GEO).',
    certificateImage: '/certs/Certificado-Dennis-Trujillo-Vistin-njxohgld.webp'
  },
  {
    period: 'Abril de 2026',
    role: 'Curso de Ciberseguridad y Hacking Ético',
    company: 'BIG school',
    description: 'Formación técnica en metodologías de detección de vulnerabilidades, auditoría de seguridad informática en aplicaciones web, conceptos de ethical hacking y directrices de defensa digital.',
    stack: ['Ciberseguridad', 'Hacking Ético', 'Análisis de Vulnerabilidades', 'OWASP', 'Defensa Digital'],
    tag: 'CIBERSEGURIDAD // HACKING ÉTICO & DEFENSE',
    context: 'Detección de vulnerabilidades, seguridad perimetral y hacking ético.',
    certificateImage: '/certs/Certificado-Dennis-Trujillo-Vistin-nw4qhqup.webp'
  },
  {
    period: 'Marzo de 2026',
    role: 'Desarrollo con IA: De 0 a Producción',
    company: 'BIG school',
    description: 'Orientado a la integración de Inteligencia Artificial en todo el ciclo de vida del desarrollo de software (SDLC), desde la concepción arquitectónica hasta el pase controlado a producción.',
    stack: ['Desarrollo con IA', 'Ciclo SDLC', 'Paso a Producción', 'CI/CD', 'Arquitectura de Software'],
    tag: 'CICLO DE VIDA (SDLC) // PRODUCCIÓN CON IA',
    context: 'Integración end-to-end de modelos de IA desde la arquitectura a producción.',
    certificateImage: '/certs/Certificado-Dennis-Trujillo-Vistin-a4vo94xe.webp'
  },
  {
    period: 'Octubre de 2025',
    role: 'Domina la IA con Google Gemini',
    company: 'Santander Open Academy (Contenido oficial de Google)',
    description: 'Certificación con contenido oficial desarrollado por Google enfocada en el dominio, prompt engineering avanzado y aplicación práctica de la inteligencia artificial multimodal Google Gemini.',
    stack: ['Google Gemini', 'Modelos Multimodales', 'Prompt Engineering', 'Google Cloud AI'],
    tag: 'ACREDITACIÓN GOOGLE // IA MULTIMODAL',
    context: 'Ecosistema multimodal Gemini, prompt engineering y servicios de Google.',
    certificateImage: '/certs/2828_trujilloadrian29@gmail.com.webp'
  },
  {
    period: 'Octubre de 2025',
    role: 'Curso de Iniciación al Desarrollo con IA',
    company: 'BIG school',
    description: 'Certificado de asistencia a jornadas formativas enfocado en la introducción e integración de modelos de Inteligencia Artificial en el desarrollo de software y flujos de trabajo de ingeniería.',
    stack: ['Desarrollo con IA', 'Modelos de Lenguaje', 'Programación Asistida', 'Software Engineering'],
    tag: 'INICIOS IA // DESARROLLO BASE',
    context: 'Introducción a la aplicación de modelos de IA en la ingeniería de software.',
    certificateImage: '/certs/Dennis _trujilloadrian29@gmail.com.webp'
  },
  {
    period: '2022 — 2023',
    role: 'Desarrollador de Computación Gráfica & Videojuegos',
    company: 'Proyectos Universitarios Avanzados (FICA · UCE)',
    description: 'Implementación de pipeline gráfico tridimensional por software (LuminaFX) en Java y desarrollo del videojuego indie 2.5D Chronicles of the Cursed Knight en Unity 6 con gestión de assets por Git LFS.',
    stack: ['Unity 6', 'C#', 'Java', 'Git LFS', 'Computer Graphics', 'GitHub Actions'],
    tag: 'COMPUTACIÓN GRÁFICA // SISTEMAS & MOTOR',
    context: 'Pipeline gráfico por software en Java y desarrollo de videojuegos en Unity 6.'
  }
];
