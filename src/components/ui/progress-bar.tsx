type ProgressBarProps = {
  progress: number;
  className?: string;
};

export function ProgressBar({ progress, className }: ProgressBarProps) {
  return (
    <div className={`w-full bg-gray-200 rounded-full h-4 ${className}`}>
      <div
        className="bg-primary h-4 rounded-full"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
