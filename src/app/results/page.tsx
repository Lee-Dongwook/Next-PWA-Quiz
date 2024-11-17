'use client';

import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useQuizStore } from '@/store/quizStore';

const sampleResults = {
  totalQuestions: 5,
  correctAnswers: 3,
  wrongAnswers: 2,
  details: [
    { question: 'What is the result of `typeof null`?', isCorrect: true },
    { question: 'Which hook is used to manage state?', isCorrect: true },
    { question: 'What is JSX?', isCorrect: false },
    { question: 'How to use `useEffect`?', isCorrect: false },
    { question: 'What is a virtual DOM?', isCorrect: true },
  ],
};

export default function ResultsPage() {
  const router = useRouter();
  const { totalQuestions, correctAnswers, results, resetResults } =
    useQuizStore();

  const handleRetakeQuiz = () => {
    resetResults();
    router.push('/quiz');
  };

  return (
    <main className="flex flex-col items-center min-h-screen p-6 bg-background">
      <h1 className="text-2xl font-bold text-foreground mb-6">Quiz Results</h1>

      <Card className="w-full max-w-md p-4">
        <div className="mb-4">
          <p className="text-lg font-medium text-foreground">
            Correct Answers: {correctAnswers} / {totalQuestions}
          </p>
          <p className="text-sm text-muted-foreground">
            Well done! Review your answers below.
          </p>
        </div>

        <div className="space-y-2">
          {results.map((result, index) => (
            <div
              key={index}
              className={`p-2 border rounded ${result.isCorrect ? 'border-green-500 text-green-700' : 'border-red-500 text-red-700'}`}
            >
              {result.question} -{' '}
              <span className="font-semibold">
                {result.isCorrect ? 'Correct' : 'Wrong'}
              </span>
            </div>
          ))}
        </div>

        <Button
          variant="default"
          className="w-full mt-6"
          onClick={handleRetakeQuiz}
        >
          Retake Quiz
        </Button>
      </Card>
    </main>
  );
}
