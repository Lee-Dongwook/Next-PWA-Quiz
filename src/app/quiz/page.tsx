'use client';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const categories = [
  { id: 1, name: 'JavaScript', description: 'Test your JS skills' },
  { id: 2, name: 'React', description: 'How well do you know React?' },
  { id: 3, name: 'Next.js', description: 'Explore your Next.js expertise' },
];

export default function QuizCategories() {
  const router = useRouter();

  const handleCategoryClick = (id: number) => {
    router.push(`/quiz/${id}`);
  };

  return (
    <main className="flex flex-col items-center min-h-screen p-6 bg-background">
      <h1 className="text-2xl font-bold text-foreground mb-6">Select a Quiz</h1>
      <div className="w-full max-w-md space-y-4">
        {categories.map((category) => (
          <Card key={category.id} className="p-4">
            <h2 className="text-lg font-medium text-foreground">
              {category.name}
            </h2>
            <p className="text-sm text-muted-foreground mb-2">
              {category.description}
            </p>
            <Button
              variant="default"
              className="w-full"
              onClick={() => handleCategoryClick(category.id)}
            >
              Start {category.name} Quiz
            </Button>
          </Card>
        ))}
      </div>
    </main>
  );
}
