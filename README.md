# Portafolio Profesional – Dennis Trujillo (Astro Edition)

Portafolio profesional editorial de alto impacto para **Senior Full Stack Software Engineer & Cloud Architect**, desarrollado en **Astro** con **Tailwind CSS v4** y administrado enteramente con **Bun**.

---

## 🛠️ Stack Tecnológico & Mejoras

- **Framework**: [Astro](https://astro.build/) (Renderizado estático SSG ultra rápido con 0 KB de JavaScript inicial en componentes estáticos).
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/) integrado a través del plugin oficial `@tailwindcss/vite` con soporte nativo de variables `@theme`, `@variant dark` y tipografías editoriales (`Outfit` & `Playfair Display`).
- **Iconos**: [lucide-astro](https://github.com/lucide-icons/lucide) (Componentes de iconos SVG nativos sin sobrecarga de runtime).
- **Gestor de paquetes & Runtime**: [Bun](https://bun.sh/) (Instalación ultrarrápida y ejecución de scripts optimizada).
- **Navegación Fluida**: Astro `ClientRouter` (View Transitions) para transiciones instantáneas entre el Home y las páginas dedicadas de proyectos (`/proyectos/[id]`).
- **SEO & Accesibilidad**:
  - Metadatos OpenGraph y Twitter Cards dinámicos por página.
  - Datos estructurados Schema.org JSON-LD para el perfil profesional.
  - Script sincrónico de Dark Mode en el `<head>` que previene el destello blanco (FOUC).

---

## 📁 Estructura del Proyecto

```text
astro-portfolio-Dennis/
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   └── profile.svg               # Avatar recortado por defecto
├── src/
│   ├── components/               # Componentes Astro modulares
│   │   ├── Navbar.astro          # Barra flotante con scroll dinámico y toggle de tema
│   │   ├── Hero.astro            # Portada de revista con avatar interactivo y modal
│   │   ├── ProjectsSection.astro # Bento grid con filtrado y paginación reactiva
│   │   ├── SkillsSection.astro   # Tarjetas estáticas de stack técnico
│   │   ├── ExperienceSection.astro# Línea de tiempo editorial de experiencia
│   │   ├── ContactSection.astro  # Formulario interactivo y copiado de email
│   │   └── Footer.astro          # Pie de página editorial
│   ├── data/
│   │   └── projects.ts           # Datos de proyectos, habilidades y trayectoria
│   ├── layouts/
│   │   └── Layout.astro          # Layout base con View Transitions, Google Fonts y SEO
│   ├── pages/
│   │   ├── index.astro           # Página principal
│   │   └── proyectos/
│   │       └── [id].astro        # Casos de estudio individuales (SSG dinámico)
│   ├── styles/
│   │   └── global.css            # Hoja de estilos global Tailwind CSS v4
│   └── types/
│       └── portfolio.ts          # Definiciones TypeScript de datos
├── astro.config.mjs              # Configuración de Astro con @tailwindcss/vite
├── bun.lock                      # Lockfile optimizado de Bun
├── package.json
└── tsconfig.json
```

---

## 🚀 Comandos con Bun

Todos los comandos se ejecutan desde la raíz del proyecto usando `bun`:

| Comando | Descripción |
| :--- | :--- |
| `bun install` | Instala todas las dependencias del proyecto |
| `bun dev` | Inicia el servidor de desarrollo local en `http://localhost:4321` |
| `bun build` | Compila el sitio estático para producción en `./dist/` |
| `bun preview` | Previsualiza la versión compilada localmente |
| `bun --bun astro dev --background` | Inicia el servidor de desarrollo en segundo plano |
