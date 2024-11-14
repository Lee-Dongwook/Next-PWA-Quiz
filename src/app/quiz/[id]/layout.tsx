export const metadata = {
  title: 'Quiz | Quiz App',
  description: 'Test your knowledge in various topics.',
};

export default function QuizLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  return (
    <main className="flex flex-col items-center min-h-screen p-4 bg-background">
      <header className="w-full max-w-md mb-6">
        <h1 className="text-2xl font-bold text-foreground text-center">
          Quiz: {params.id}
        </h1>
      </header>
      {children}
    </main>
  );
}
