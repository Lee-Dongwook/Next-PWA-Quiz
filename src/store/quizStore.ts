import { create } from 'zustand';

type QuizResult = {
  question: string;
  isCorrect: boolean;
};

type QuizState = {
  totalQuestions: number;
  correctAnswers: number;
  results: QuizResult[];
  setResults: (results: QuizResult[]) => void;
  resetResults: () => void;
};

export const useQuizStore = create<QuizState>((set: any) => ({
  totalQuestions: 0,
  correctAnswers: 0,
  results: [],
  setResults: (results: any) => {
    const correctAnswers = results.filter((r: any) => r.isCorrect).length;
    set({
      results,
      totalQuestions: results.length,
      correctAnswers,
    });
  },
  resetResults: () =>
    set({
      totalQuestions: 0,
      correctAnswers: 0,
      results: [],
    }),
}));
