import { LucideIcon } from 'lucide-react';

export type Language = 'en' | 'he' | 'zh' | 'hi' | 'de' | 'es' | 'fr' | 'pt' | 'it';
export type FontSize = 'sm' | 'md' | 'lg';

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