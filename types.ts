export type LayoutType =
  | 'logo'
  | 'title'
  | 'section'
  | 'content'
  | 'two-column'
  | 'code'
  | 'diagram'
  | 'timeline'
  | 'roadmap'
  | 'presenters'
  | 'social-qr';

export interface SlideData {
  id: number;
  layout: LayoutType;
  title: string;
  subtitle?: string;
  content?: string[]; // Bullet points or text paragraphs
  columns?: {
    left: { title?: string; content: string[] | string; isCode?: boolean; color?: string };
    right: { title?: string; content: string[] | string; isCode?: boolean; color?: string };
  };
  code?: string; // For code layout
  visualDesc?: string; // Description of visual for context
  notes: string; // Speaker notes
  takeaway: string;
  duration: number; // In minutes
  sectionTitle?: string; // For section breaks
   presenters?: {
    name: string;
    title?: string;
    experience?: string;
    bio: string;
    photoUrl?: string;
    linkedin?: string;
  }[];
}