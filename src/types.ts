export interface Question {
  id: number;
  block: string;
  number: number;
  question: string;
  image?: string;
  imageAlt?: string;
  options: Record<string, string>;
  correct: string;
  chapter: string;
}

export interface Answer {
  questionId: number;
  selected: string;
  correct: string;
  isCorrect: boolean;
}
