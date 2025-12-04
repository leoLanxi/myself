export interface ContactInfo {
  phone: string;
  email: string;
  location?: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  details: string[];
  tags: string[];
}

export interface Job {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Project {
  name: string;
  role: string;
  period: string;
  description: string;
  responsibilities: string[];
  challenges: string[];
  tags: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  contact: ContactInfo;
  education: Education[];
  experience: Job[];
  projects: Project[];
  skills: SkillCategory[];
  honors: string[];
  resumePdfUrl?: string;
}
