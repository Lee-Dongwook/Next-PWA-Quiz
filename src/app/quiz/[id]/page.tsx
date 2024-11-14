'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

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
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const question = sampleQuestions[currentQuestion];

  const handleNext = () => {
    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      router.push('/results');
    }
  };

  return (
    <main className="flex flex-col items-center min-h-screen p-6 bg-background">
      <h1 className="text-2xl font-bold text-foreground mb-6">
        Quiz: {params.id}
      </h1>

      <Card className="w-full max-w-md p-4">
        <h2 className="text-lg font-medium text-foreground mb-2">
          {question.question}
        </h2>
        <div className="space-y-2">
          {question.options.map((option, index) => (
            <Button key={index} variant="secondary" className="w-full">
              {option}
            </Button>
          ))}
        </div>
        <Button variant="default" className="w-full mt-4" onClick={handleNext}>
          Next
        </Button>
      </Card>
    </main>
  );
}
