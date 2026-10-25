export type ProjectCategory = 'fullstack' | 'backend' | 'frontend' | 'ai' | 'systems';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  description: string;
  longDescription: string;
  problemStatement: string;
  solution: string;
  metrics: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  liveUrlLabel?: string;
  highlights: string[];
  architecture: string;
  challenges: string;
  pipelineFlow?: {
    stage: string;
    flow: string;
    sub: string;
  };
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
