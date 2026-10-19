export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'fullstack' | 'backend' | 'frontend' | 'cloud';
  description: string;
  longDescription: string;
  metrics: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  highlights: string[];
  architecture: string;
  challenges: string;
}

export interface SkillGroup {
  category: string;
  iconName: 'Code2' | 'Server' | 'Database' | 'Cpu';
  skills: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  stack: string[];
}
