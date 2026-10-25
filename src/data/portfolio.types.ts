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

export interface PortfolioData {
  personal: PersonalInfo;
  navItems: NavItem[];
  experiences: Experience[];
  projects: Project[];
  skillCategories: SkillCategory[];
  education: Education[];
  ui: {
    aboutTitle: string;
    experienceTitle: string;
    projectsTitle: string;
    skillsTitle: string;
    educationTitle: string;
    resumeButton?: string;
    moreReposButton: string;
    sourceCodeButton: string;
    demoButton: string;
    techStackLabel: string;
  };
}
