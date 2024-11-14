import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Dashboard() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen p-6 bg-background">
      <h1 className="text-2xl font-bold text-foreground mb-6">Dashboard</h1>

      <div className="w-full max-w-md space-y-4">
        {/* Stats Card */}
        <Card className="p-4">
          <h2 className="text-lg font-medium text-foreground">Your Progress</h2>
          <p className="text-sm text-muted-foreground">Completed: 5 quizzes</p>
        </Card>

        {/* Action Card */}
        <Card className="p-4">
          <h2 className="text-lg font-medium text-foreground">Take a Quiz</h2>
          <p className="text-sm text-muted-foreground">
            Ready to test your knowledge? Start a new quiz now!
          </p>
          <Button variant="default" className="mt-2 w-full">
            Start Quiz
          </Button>
        </Card>

        {/* Settings */}
        <Card className="p-4">
          <h2 className="text-lg font-medium text-foreground">Settings</h2>
          <p className="text-sm text-muted-foreground">
            Customize your experience.
          </p>
          <Button variant="secondary" className="mt-2 w-full">
            Go to Settings
          </Button>
        </Card>
      </div>
    </main>
  );
}
