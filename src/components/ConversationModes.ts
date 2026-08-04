export type ConversationMode = 'SPANISH' | 'BILINGUAL' | 'ENGLISH' | 'AMERICAN_ENGLISH' | 'TRANSLATOR' | 'LIVE_TRANSLATOR' | 'LISTEN' | 'LISTEN_ONLY';

export interface ConversationModeInfo {
  id: ConversationMode;
  nameEs: string;
  nameEn: string;
  descEs: string;
  descEn: string;
  icon: string;
  tagEs: string;
  tagEn: string;
  bg: string;
}

export const CONVERSATION_MODES: ConversationModeInfo[] = [
  {
    id: 'SPANISH',
    nameEs: 'Español',
    nameEn: 'Spanish',
    descEs: 'Conversación puramente en español.',
    descEn: 'Purely Spanish conversation.',
    icon: 'MessageSquare',
    tagEs: 'Español',
    tagEn: 'Spanish',
    bg: 'hover:bg-black/5'
  },
  {
    id: 'BILINGUAL',
    nameEs: 'Bilingüe',
    nameEn: 'Bilingual',
    descEs: 'Soporte dinámico en inglés y español.',
    descEn: 'Dynamic English and Spanish support.',
    icon: 'Languages',
    tagEs: 'Bilingüe',
    tagEn: 'Bilingual',
    bg: 'hover:bg-black/5'
  },
  {
    id: 'ENGLISH',
    nameEs: 'Inglés',
    nameEn: 'English',
    descEs: 'Conversación de inmersión en inglés.',
    descEn: 'English immersion conversation.',
    icon: 'Headphones',
    tagEs: 'Inglés',
    tagEn: 'English',
    bg: 'hover:bg-black/5'
  },
  {
    id: 'TRANSLATOR',
    nameEs: 'Traductor',
    nameEn: 'Translator',
    descEs: 'Traducción directa y asistencia lingüística.',
    descEn: 'Direct translation and linguistic support.',
    icon: 'Sparkles',
    tagEs: 'Traductor',
    tagEn: 'Translator',
    bg: 'hover:bg-black/5'
  },
  {
    id: 'LISTEN',
    nameEs: 'Escucha',
    nameEn: 'Listen',
    descEs: 'Escucha atenta sin interrupciones habladas.',
    descEn: 'Attentive listening without spoken interruptions.',
    icon: 'Compass',
    tagEs: 'Escucha',
    tagEn: 'Listen',
    bg: 'hover:bg-black/5'
  }
];
