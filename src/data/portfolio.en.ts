import type { PortfolioData } from './portfolio.types';

export const portfolioEn: PortfolioData = {
  personal: {
    name: "SFBB",
    title: "Programming lover, Linux user, reader, and watcher",
    tagline: "Curiosity and imagination — if you can't imagine how it looks, how can you bring it to life?",
    bio: [
      "Hello! I am a game development engineer and software developer in my spare time.",
      "Over the past few years, I have contributed to game development. Turning ideas into interactive experiences in players' hands has always been thrilling.",
      "Outside of work, I am passionate about open source, continuously contributing my projects and engineering practices on GitHub."
    ],
    location: "Hangzhou, China / Remote",
    email: "sfbb123@proton.me",
    github: "https://github.com/sfbb",
  },

  navItems: [
    { label: "ABOUT", href: "#about" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "PROJECTS", href: "#projects" },
    { label: "SKILLS", href: "#skills" },
    { label: "EDUCATION", href: "#education" },
    { label: "BLOG", href: "/blog/" },
  ],

  experiences: [
    {
      period: "2021.07 — 2022.06",
      role: "Animation TA",
      company: "XiaoBai Studio",
      description: "Responsible for animation production toolchain maintenance and FPS locomotion system design & implementation.",
      achievements: [
        "Standardized concurrent animation asset import/export pipelines, improving team efficiency.",
        "Designed FPS animation system to achieve natural breathing rhythms and realistic physical inertia.",
      ],
      technologies: ["C++", "Python", "PyMEL", "SQLite"]
    },
    {
      period: "2022.06 — 2026.01",
      role: "Game Development Engineer",
      company: "Wooduan Technology Co., Ltd.",
      description: "Responsible for gameplay mechanics, animation systems, and physics simulation design & development.",
      achievements: [
        "Contributed to the development and production deployment of a PBD (Position Based Dynamics) physics simulation system.",
        "Developed multi-legged procedural movement systems, CCDIK-based robotic arm systems, monster animation systems, and procedural weapon sway/recoil animations.",
        "Implemented multiplayer network synchronization for tornado and boomerang mechanics.",
        "Designed, developed, and maintained modular, decoupled gameplay components.",
      ],
      technologies: ["C++", "IK", "PBD", "Animation", "Procedural Animation", "Network Sync"]
    }
  ],

  projects: [
    {
      title: "cowatcher extension",
      subtitle: "Browser Extension",
      description: "Enhance viewing experience on Netflix, TVer, and YouTube with real-time AI subtitle translation, watch history tracking, and vocabulary learning.",
      highlights: [
        "Domain-Driven Design (DDD) with strictly decoupled adapter interface architecture.",
        "Prioritizes native subtitles, supports Ollama / OpenRouter / Google Translate with character glossary constraints.",
        "Reverse-engineered native streaming platform data streams to ensure tracking accuracy.",
        "De-platformed architecture for effortless porting across multiple browser platforms.",
        "Fail-fast principles with explicit type definitions to prevent technical debt."
      ],
      technologies: ["TypeScript", "chrome-extension", "lint"],
      github: "https://github.com/cowatcher-app/cowatcher-extension",
      demo: "https://cowatcher-app.github.io/cowatcher-extension/",
      featured: true
    },
    {
      title: "Financial Simulation",
      subtitle: "Quant Strategy Script",
      description: "Quantitative trading strategy backtesting and live trading execution script powered by uv and Python.",
      highlights: [
        "Supports both US and A-share stock markets.",
        "Models slippage, transaction costs, taxes, and T+1 trading rules.",
        "Generates interactive return rate charts."
      ],
      technologies: ["Python", "uv"],
      github: "https://github.com/SFBB/FinancialSimulation",
      featured: true
    },
    {
      title: "wathcing_log_parser",
      subtitle: "CLI Tool",
      description: "A fast parser for non-standard plaintext viewing records using configurable regex pattern matching.",
      highlights: [
        "Outputs unfinished watchlists, lists full records, and queries status by title.",
        "Multi-threaded with intelligent caching for high-performance querying across complex regex rulesets.",
      ],
      technologies: ["Rust", "regex", "SQLite"],
      github: "https://github.com/SFBB/wathcing_log_parser",
      demo: "https://github.com/SFBB/wathcing_log_parser/releases/tag/v0.2.0",
      featured: true
    },
    {
      title: "scraper_library",
      subtitle: "Web Scraping Tool",
      description: "High-performance web crawler framework specialized for digital novels and audiobooks.",
      highlights: [
        "Supports multi-threading, live progress display, and resume-from-breakpoint.",
        "Outputs complete compiled books ready for reading.",
        "Separation of concerns: site-specific parsing rules are cleanly decoupled from the core fetching engine."
      ],
      technologies: ["Python", "uv"],
      github: "https://github.com/SFBB/scraper_library",
      featured: true
    },
    {
      title: "bash_notes",
      subtitle: "Privacy Tool",
      description: "Locally encrypted private journaling and notes management system.",
      highlights: [
        "Strong AES encryption for data security.",
        "Automated cross-device synchronization via Dropbox based on file attributes.",
        "Supports attaching and encrypting multimedia assets."
      ],
      technologies: ["Bash", "Python"],
      github: "https://github.com/SFBB/bash_notes",
      featured: true
    },
    {
      title: "Clock",
      subtitle: "Linux Utility",
      description: "An on-screen display (OSD) clock widget for Linux X11 desktop environments.",
      highlights: [
        "Leverages low-level X11 APIs for an iconless, permanently top-pinned window excluded from Alt+Tab switcher.",
      ],
      technologies: ["C++", "Qt"],
      github: "https://github.com/SFBB/Clock",
      featured: true
    },
  ],

  skillCategories: [
    {
      category: "Programming Languages",
      skills: ["C / C++", "Rust", "Go", "Python", "JavaScript / TypeScript", "SQL", "Shell / Bash"]
    },
    {
      category: "Backend & Systems",
      skills: ["Microservices", "JWT Auth", "Docker", "gRPC / Protobuf", "Linux Administration (8 years Linux user)"]
    },
    {
      category: "Frontend",
      skills: ["Vue 3"]
    },
    {
      category: "Engineering & Tools",
      skills: ["Git", "Neovim / Lazyvim"]
    }
  ],

  education: [
    {
      school: "Zhejiang University",
      degree: "Bachelor of Engineering",
      major: "Digital Media Technology",
      period: "2017.09 — 2021.09",
      details: [
        "Core coursework: Game Design, Multimedia Asset Processing & Management",
      ]
    }
  ],

  ui: {
    aboutTitle: "ABOUT",
    experienceTitle: "EXPERIENCE",
    projectsTitle: "FEATURED PROJECTS",
    skillsTitle: "SKILLS",
    educationTitle: "EDUCATION",
    moreReposButton: "View all repositories on GitHub",
    sourceCodeButton: "Source Code",
    demoButton: "Live Demo",
    techStackLabel: "Tech Stack"
  }
};
