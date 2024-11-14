'use client';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function HomePage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/dashboard');
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-background">
      <h1 className="text-2xl font-bold text-foreground mb-4 text-center">
        Welcome to the Quiz App
      </h1>

      <Card className="w-full max-w-sm p-4">
        <h2 className="text-lg font-medium text-foreground mb-2 text-center">
          Start your quiz journey today!
        </h2>
        <Input
          type="text"
          placeholder="Enter your name"
          className="mb-3 text-sm"
        />
        <Button variant="default" className="w-full" onClick={handleGetStarted}>
          Get Started
        </Button>
      </Card>

      <footer className="mt-6 text-xs text-muted-foreground">
        © 2024 Quiz App. All rights reserved.
      </footer>
    </main>
  );
}
