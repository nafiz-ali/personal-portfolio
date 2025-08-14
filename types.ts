
import type { ReactNode } from 'react';

export type Theme = 'dark' | 'light-dark';

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface Skill {
  name: string;
  icon: ReactNode;
}

export interface Experience { 
  id: number; 
  title: string; 
  company: string; 
  date: string; 
  details: string[]; 
  icon: ReactNode; 
  certificateUrl?: string; 
} 
export interface Certification {
  id: number;
  title: string;
  date: string;
  details: string[];
  icon: ReactNode;
}
