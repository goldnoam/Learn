import { 
  Calculator, 
  Atom, 
  Languages, 
  Printer, 
  Wand2, 
  Cpu, 
  Scissors,
  Siren,
  Music,
  BookOpen,
  ShieldAlert,
  CigaretteOff,
  Utensils,
  HeartPulse,
  Zap,
  ShieldCheck,
  Candy,
  Activity,
  Flag,
  Eye,
  Keyboard,
  Telescope,
  Pickaxe,
  Palette,
  Flower
} from 'lucide-react';
import { LearningModule } from './types';

export const LEARNING_MODULES: LearningModule[] = [
  {
    id: 'goldcraft',
    title: 'GoldCraft - טיפים למיינקראפט',
    url: 'https://goldcraft.vercel.app',
    description: 'מדריכים, טיפים וסודות למשחק הפופולרי בעולם. למדו לבנות, לשרוד וליצור כמו מקצוענים.',
    icon: Pickaxe,
    gradient: 'from-yellow-600 to-amber-400',
    textColor: 'text-yellow-600',
    category: 'gaming',
    featured: true
  },
  {
    id: 'mobilepaint',
    title: 'MobilePaint - ציור דיגיטלי',
    url: 'https://mobilepaint.vercel.app',
    description: 'הפכו את המכשיר שלכם לקנבס דיגיטלי. כלי ציור פשוטים וחזקים ליצירה בכל מקום.',
    icon: Palette,
    gradient: 'from-pink-500 via-purple-500 to-indigo-500',
    textColor: 'text-purple-500',
    category: 'tech',
    featured: true
  },
  {
    id: 'mindfulness',
    title: 'מיינדפולנס ומודעות',
    url: 'https://mindfulness1.vercel.app/',
    description: 'תרגול רוגע, ריכוז וחיבור פנימי לשיפור איכות החיים והפחתת מתחים יומיומיים.',
    icon: Flower,
    gradient: 'from-emerald-400 to-teal-500',
    textColor: 'text-emerald-500',
    category: 'arts'
  },
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
    id: 'cosmos',
    title: 'קוסמוס - חלל ואסטרונומיה',
    url: 'https://cosmoskids.vercel.app/',
    description: 'גלו את נפלאות היקום, כוכבי הלכת והגלקסיות הרחוקות במסע בין כוכבים מרתק.',
    icon: Telescope,
    gradient: 'from-indigo-900 to-purple-800',
    textColor: 'text-indigo-300',
    category: 'science'
  },
  {
    id: 'senses',
    title: 'חמשת החושים',
    url: 'https://senses12.vercel.app/',
    description: 'מסע מרתק בעולם החושים: ראייה, שמיעה, ריח, טעם ומימוש.',
    icon: Eye,
    gradient: 'from-lime-500 to-green-400',
    textColor: 'text-lime-500',
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
    id: 'hebrew',
    title: 'לימוד עברית',
    url: 'https://learnivrit.vercel.app/',
    description: 'שיפור קריאה, כתיבה והבנת הנקרא בשפה העברית.',
    icon: BookOpen,
    gradient: 'from-sky-500 to-blue-600',
    textColor: 'text-sky-500',
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
    description: 'גלו את סודות שמאחורי הקסמים והאשליות.',
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
    id: 'young-electronics',
    title: 'האלקטרונאי הצעיר',
    url: 'https://the-young-electronics-guy.vercel.app/',
    description: 'מסע מרתק בעולם האלקטרוניקה המיועד לדור הבא של הממציאים.',
    icon: Zap,
    gradient: 'from-yellow-400 to-orange-500',
    textColor: 'text-yellow-500',
    category: 'tech'
  },
  {
    id: 'touch-typing',
    title: 'לימוד הקלדה עיוורת',
    url: 'https://cheetah-touch-typing.vercel.app/',
    description: 'שפרו את המהירות והדיוק שלכם בהקלדה בעזרת תרגול מהיר ומהנה.',
    icon: Keyboard,
    gradient: 'from-amber-400 to-yellow-600',
    textColor: 'text-amber-500',
    category: 'tech'
  },
  {
    id: 'little-chef',
    title: 'Little Chef השף הקטן',
    url: 'https://little-chef1.vercel.app',
    description: 'לימוד בישול חווייתי, מתכונים קלים וכיפיים לכל המשפחה.',
    icon: Utensils,
    gradient: 'from-orange-400 to-yellow-500',
    textColor: 'text-orange-500',
    category: 'arts'
  },
  {
    id: 'knitting',
    title: 'לימוד סריגה',
    url: 'https://soreg-ai.vercel.app',
    description: 'אומנות הסריגה, דוגמאות ויצירה בחוטים.',
    icon: Scissors,
    gradient: 'from-pink-500 to-fuchsia-400',
    textColor: 'text-pink-400',
    category: 'arts'
  },
  {
    id: 'flags',
    title: 'לימוד דגלי מדינות',
    url: 'https://flags1.vercel.app',
    description: 'הכירו את דגלי העולם, עובדות מעניינות על מדינות וגיאוגרפיה.',
    icon: Flag,
    gradient: 'from-blue-600 to-indigo-500',
    textColor: 'text-blue-500',
    category: 'arts'
  },
  {
    id: 'prevention',
    title: 'מניעת אלכוהול וסמים',
    url: 'https://bohrim-bahaim.vercel.app/',
    description: 'העלאת מודעות, כלים להתמודדות ובחירה בחיים בריאים.',
    icon: ShieldAlert,
    gradient: 'from-emerald-600 to-teal-500',
    textColor: 'text-emerald-500',
    category: 'emergency'
  },
  {
    id: 'road-safety',
    title: 'משמרות הזהירות בדרכים',
    url: 'https://zahavil.vercel.app/',
    description: 'לימוד זהירות בדרכים ושמירה על כללי הבטיחות בכביש למען הגנה על החיים.',
    icon: ShieldCheck,
    gradient: 'from-yellow-500 to-amber-600',
    textColor: 'text-amber-500',
    category: 'emergency'
  },
  {
    id: 'first-aid',
    title: 'לימוד עזרה ראשונה',
    url: 'https://1aid.vercel.app/',
    description: 'לימוד עזרה ראשונה מצילה חיים – ידע שיכול לעשות את ההבדל.',
    icon: HeartPulse,
    gradient: 'from-rose-500 to-red-600',
    textColor: 'text-rose-500',
    category: 'emergency'
  },
  {
    id: 'smoking-prevention',
    title: 'מניעת עישון',
    url: 'https://not-smoking.vercel.app/',
    description: 'העלאת מודעות לנזקי העישון, כלים להפסקת עישון ושמירה על ריאות נקיות.',
    icon: CigaretteOff,
    gradient: 'from-zinc-600 to-slate-500',
    textColor: 'text-zinc-400',
    category: 'emergency'
  },
  {
    id: 'sugar-awareness',
    title: 'מודעות לגבי נזקי מזון עתיר סוכר',
    url: 'https://sugar-awareness.vercel.app',
    description: 'העלאת מודעות לנזקי הסוכר, בחירת תחליפים בריאים ושיפור התזונה.',
    icon: Candy,
    gradient: 'from-pink-400 to-rose-500',
    textColor: 'text-pink-500',
    category: 'emergency'
  },
  {
    id: 'salt-awareness',
    title: 'מודעות לגבי מזון עתיר מלח',
    url: 'https://salt-awareness.vercel.app',
    description: 'הבנת ההשפעה של צריכת מלח גבוהה על הבריאות ולחץ הדם.',
    icon: Activity,
    gradient: 'from-slate-400 to-slate-600',
    textColor: 'text-slate-500',
    category: 'emergency'
  },
  {
    id: 'piano',
    title: 'לימוד פסנתר',
    url: 'https://master-piano.vercel.app/',
    description: 'גלו את עולם המוזיקה, נגינה על פסנתר וקריאת תווים.',
    icon: Music,
    gradient: 'from-cyan-500 to-teal-400',
    textColor: 'text-cyan-400',
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