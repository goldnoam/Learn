import { 
  Calculator, 
  Atom, 
  Languages, 
  Printer, 
  Wand2, 
  Cpu, 
  Scissors, // Used as a proxy for knitting/crafts
  Siren,
  BookOpen
} from 'lucide-react';
import { LearningModule } from './types';

export const LEARNING_MODULES: LearningModule[] = [
  {
    id: 'math',
    title: 'לימוד מתמטיקה',
    url: 'https://math-master1.vercel.app/',
    description: 'גלו את עולם המספרים, המשוואות והחשיבה הלוגית.',
    icon: Calculator,
    gradient: 'from-blue-500 to-cyan-400',
    textColor: 'text-blue-400',
    category: 'science'
  },
  {
    id: 'physics',
    title: 'לימוד פיזיקה',
    url: 'https://phisics.vercel.app/',
    description: 'הבנת חוקי היקום, כוחות, אנרגיה ותנועה.',
    icon: Atom,
    gradient: 'from-purple-500 to-violet-400',
    textColor: 'text-purple-400',
    category: 'science'
  },
  {
    id: 'english',
    title: 'לימוד אנגלית',
    url: 'https://science-hero.vercel.app/',
    description: 'שיפור אוצר מילים, דקדוק ושיחה בשפה הבינלאומית.',
    icon: Languages,
    gradient: 'from-green-500 to-emerald-400',
    textColor: 'text-green-400',
    category: 'arts'
  },
  {
    id: '3dprint',
    title: 'הדפסה תלת ממדית',
    url: 'https://3dprintmaster.vercel.app/',
    description: 'הפכו רעיונות למציאות בעזרת טכנולוגיית הדפסה מתקדמת.',
    icon: Printer,
    gradient: 'from-orange-500 to-amber-400',
    textColor: 'text-orange-400',
    category: 'tech'
  },
  {
    id: 'magic',
    title: 'האקדמיה של הקסמים',
    url: 'https://magicacademy.vercel.app',
    description: 'גלו את הסודות שמאחורי הקסמים והאשליות.',
    icon: Wand2,
    gradient: 'from-indigo-500 to-purple-400',
    textColor: 'text-indigo-400',
    category: 'arts'
  },
  {
    id: 'electronics',
    title: 'רכיבי אלקטרוניקה',
    url: 'https://maker-forge.vercel.app',
    description: 'בניית מעגלים, ארדואינו ורכיבים חכמים.',
    icon: Cpu,
    gradient: 'from-red-500 to-rose-400',
    textColor: 'text-red-400',
    category: 'tech'
  },
  {
    id: 'knitting',
    title: 'לימוד סריגה',
    url: 'https://soreg-ai.vercel.app',
    description: 'אומנות הסריגה, דוגמאות ויצירה בחוטים.',
    icon: Scissors, // Using Scissors/Craft icon logic
    gradient: 'from-pink-500 to-fuchsia-400',
    textColor: 'text-pink-400',
    category: 'arts'
  },
  {
    id: 'emergency',
    title: 'מוקדי חירום',
    url: 'https://911il.vercel.app/',
    description: 'טלפונים חשובים ומידע מציל חיים בזמן אמת.',
    icon: Siren,
    gradient: 'from-red-600 to-orange-600',
    textColor: 'text-red-500',
    category: 'emergency'
  }
];
