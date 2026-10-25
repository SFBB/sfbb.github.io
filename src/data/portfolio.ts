export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string[];
  location?: string;
  email: string;
  github: string;
  linkedin?: string;
  blog?: string;
  resumeUrl?: string;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  description: string;
  achievements?: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  subtitle?: string;
  description: string;
  highlights?: string[];
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  school: string;
  degree: string;
  major: string;
  period: string;
  details?: string[];
}

export const portfolioData: {
  personal: PersonalInfo;
  navItems: NavItem[];
  experiences: Experience[];
  projects: Project[];
  skillCategories: SkillCategory[];
  education: Education[];
} = {
  personal: {
    name: "SFBB",
    title: "Programming lover, Linux user, reader, and watcher",
    tagline: "好奇心，想象力，如果你都不无法想象出它的样子，你又如何去将它变为现实呢",
    bio: [
      "你好，我是一个游戏开发工程师，业余软体开发工程师。",
      "过去的几年里，我参与了个游戏的开发，将自己的想法转换为实际玩家手中的交互是一件兴奋的事情。",
      "工作之余，我热爱开源、并在 GitHub 上持续输出自己的项目与技术实践。"
    ],
    location: "中国 · 杭州 / 远程",
    email: "sfbb123@proton.me",
    github: "https://github.com/sfbb",
  },

  navItems: [
    { label: "关于我 // ABOUT", href: "#about" },
    { label: "工作经历 // EXPERIENCE", href: "#experience" },
    { label: "精选项目 // PROJECTS", href: "#projects" },
    { label: "专业技能 // SKILLS", href: "#skills" },
    { label: "教育背景 // EDUCATION", href: "#education" },
    { label: "博客 // BLOG", href: "/blog/" },
  ],

  experiences: [
    {
      period: "2021.07 — 2022.06",
      role: "动画TA",
      company: "小白工作室",
      description: "负责动画生产工具链维护，FPS locomotion系统设计制作",
      achievements: [
        "并发的动画资产标准化导入导出，提升团队效率",
        "FPS 动画系统设计，达到呼吸和物理惯性的自然感",
      ],
      technologies: ["C++", "Python", "PyMEL", "SQLite",]
    },
    {
      period: "2022.06 — 2026.01",
      role: "游戏开发工程师",
      company: "无端网络科技有限公司",
      description: "负责gameplay、动画系统、物理模拟维护、设计开发",
      achievements: [
        "参与基于PBD的物理模拟系统开发，以及实际落地应用",
        "开发多足的程序化运动系统，开发基于CCDIK的机械臂系统，怪物动画系统维护、设计、开发，枪械摆件等传统程序化动画设计、开发",
        "龙卷风，回旋镖网络同步实现",
        "各种灵活的gameplay组件设计、开发、维护",
      ],
      technologies: ["C++", "IK", "PBD", "动画", "程序化动画", "网络同步",]
    }
  ],

  projects: [
    {
      title: "cowatcher extension",
      subtitle: "浏览器扩展",
      description: "增强Netflix, TVer, YouTube观影体验的助手，AI字幕实时翻译，观影记录，单字学习",
      highlights: [
        "DDD设计，强约束的adapter接口设计",
        "优先使用原生字幕，支持Ollama/Openrouter/Google Translate翻译，支持角色名翻译术语表约束",
        "逆向串流平台原生数据，保证记录的准确",
        "去平台化，方便port到各种其它浏览器平台",
        "Fail fast，显示定义，专治js/ts屎山"
      ],
      technologies: ["Typescript", "chrome-extension", "lint"],
      github: "https://github.com/cowatcher-app/cowatcher-extension",
      demo: "https://cowatcher-app.github.io/cowatcher-extension/",
      featured: true
    },
    {
      title: "Financial Simulation",
      subtitle: "量化策略回测脚本",
      description: "基于uv和python实现的量化策略回测和实盘脚本",
      highlights: [
        "支持美股和A股",
        "支持滑点，交易成本，tax，T+1交易",
        "支持绘制收益图表"
      ],
      technologies: ["Python", "uv",],
      github: "https://github.com/SFBB/FinancialSimulation",
      featured: true
    },
    {
      title: "wathcing_log_parser",
      subtitle: "小工具",
      description: "基于regex规则对非标准的个人纯文本形式的观影记录进行解析",
      highlights: [
        "支持打印未完成的观影，列出所有观影，基于名字查询观影的状态",
        "多线程，caching，哪怕是多个regex规则，也可以实现高性能查询",
      ],
      technologies: ["rust", "regex", "SQLite",],
      github: "https://github.com/SFBB/wathcing_log_parser",
      demo: "https://github.com/SFBB/wathcing_log_parser/releases/tag/v0.2.0",
      featured: true
    },
    {
      title: "scraper_library",
      subtitle: "小工具",
      description: "爬虫库",
      highlights: [
        "支持多线程，实时显示，断点续爬",
        "针对网络小说和有声书进行设计，最后output整本书",
        "Separate of concerns, 具体网站的规则和核心爬取流程分开解藕，可以快速迭代爬虫适配"
      ],
      technologies: ["Python", "uv",],
      github: "https://github.com/SFBB/scraper_library",
      featured: true
    },
    {
      title: "bash_notes",
      subtitle: "小工具",
      description: "本地加密私密日记",
      highlights: [
        "aes加密",
        "dropbox同步，基于属性的自动化跨设备同步",
        "支持媒体资源纳入和加密"
      ],
      technologies: ["bash", "Python",],
      github: "https://github.com/SFBB/bash_notes",
      featured: true
    },
    {
      title: "Clock",
      subtitle: "小工具",
      description: "一个在Linux X11 de上osd显示的钟表",
      highlights: [
        "通过x11底层接口实现无图标，永久置顶，不再alt+tab中",
      ],
      technologies: ["C++", "Qt",],
      github: "https://github.com/SFBB/Clock",
      featured: true
    },
  ],

  skillCategories: [
    {
      category: "编程语言",
      skills: ["C / C++", "Rust", "Go", "Python", "JavaScript / TypeScript", "SQL", "Shell / Bash",]
    },
    {
      category: "后端",
      skills: ["微服务架构", "jwt鉴权", "Docker", "gRPC / Protobuf", "Linux 运维(毕竟我用Linux 8年了)"]
    },
    {
      category: "前端",
      skills: ["Vue 3"]
    },
    {
      category: "工程化与工具",
      skills: ["Git", "Neovim / Lazyvim",]
    }
  ],

  education: [
    {
      school: "浙江大学",
      degree: "工学学士",
      major: "数字媒体技术",
      period: "2017.09 — 2021.09",
      details: [
        "主修课程：游戏设计，多媒体资源处理/管理",
      ]
    }
  ]
};
