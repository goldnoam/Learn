import { LucideIcon } from 'lucide-react';

export interface LearningModule {
  id: string;
  title: string;
  url: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  textColor: string;
  category: 'science' | 'arts' | 'tech' | 'emergency';
  featured?: boolean;
}