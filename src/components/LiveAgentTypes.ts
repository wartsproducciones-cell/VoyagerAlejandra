export interface ChatMessage {
  id: string;
  sender: 'user' | 'splash' | 'system';
  text: string;
  timestamp: string;
  timeMs: number;
  showForm?: boolean;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  notes: string;
  createdAt: string;
}

export interface TravelDestination {
  id: string;
  name: string;
  category: string;
  description: string;
  location: string;
}

export interface PronunciationFeedbackEvent {
  id?: string;
  word?: string;
  accuracyScore?: number;
  phoneticTip?: string;
  audioUrl?: string;
  sessionId?: string;
  phraseSpoken?: string;
  detectedIssue?: string;
  correctedPronunciation?: string;
  coachingSuggestion?: string;
  confidence?: number;
  timestamp?: number;
}

export interface ConversationEvent {
  id?: string;
  type: string;
  payload?: any;
  data?: any;
  timestamp: number;
  sessionId?: string;
}
