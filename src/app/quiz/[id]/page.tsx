'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useTimer } from '@/hooks/useTimer';
import { useQuizStore } from '@/store/quizStore';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ProgressBar } from '@/components/ui/progress-bar';

const sampleQuestions = [
  {
    id: 1,
    question: 'What is the result of `typeof null`?',
    options: ['object', 'null', 'undefined', 'string'],
    answer: 'object',
  },
  {
    id: 2,
    question: 'Which hook is used to manage state in a functional component?',
    options: ['useState', 'useEffect', 'useContext', 'useReducer'],
    answer: 'useState',
  },
];

export default function QuizPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { setResults } = useQuizStore();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [results, setQuizResults] = useState<any[]>([]);

  const totalQuestions = sampleQuestions.length;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  const timeLeft = useTimer(600, () => {
    router.push('/results');
  });

  const question = sampleQuestions[currentQuestion];

  const handleNext = () => {
    const isCorrect = selectedOption === question.answer;

    setQuizResults((prev) => [
      ...prev,
      { question: question.question, isCorrect },
    ]);

    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setResults(results);
      router.push('/results');
    }
  };

  return (
    <main className="flex flex-col items-center min-h-screen p-6 bg-background">
      <h1 className="text-2xl font-bold text-foreground mb-6">
        Quiz: {params.id}
      </h1>
      <ProgressBar progress={progress} className="mb-4" />

      <Card className="w-full max-w-md p-4">
        <h2 className="text-lg font-medium text-foreground mb-2">
          {question.question}
        </h2>
        <div className="space-y-2">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant={selectedOption === option ? 'default' : 'secondary'}
              className="w-full"
              onClick={() => setSelectedOption(option)}
            >
              {option}
            </Button>
          ))}
        </div>
        <Button
          variant="default"
          className="w-full mt-4"
          onClick={handleNext}
          disabled={!selectedOption}
        >
          {currentQuestion < sampleQuestions.length - 1 ? 'Next' : 'Finish'}
        </Button>
      </Card>
    </main>
  );
}
