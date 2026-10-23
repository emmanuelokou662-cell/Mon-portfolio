export type ProjectCategory = 'Web' | 'Vidéo' | 'Affiches' | 'IA';
export type ProjectType = 'Client' | 'Démo';

export interface IProject {
  id: string;
  slug: string;
  title: string;
  type: ProjectType;
  demoNote?: string;
  date: string;
  role: string;
  category: ProjectCategory;
  clientName?: string;
  needs: string;
  solution: string;
  contribution: string;
  tools: string[];
  results?: string[];
  demoLinks?: {
    label: string;
    url: string;
  }[];
  images: string[];
  videos?: string[];
  featuredImage: string;
}

export interface IService {
  id: string;
  title: string;
  problem: string;
  solution: string;
  deliverables: string[];
  ctaText: string;
  image?: string;
}
