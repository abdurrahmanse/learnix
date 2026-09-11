interface StepProgressBarProps {
  /** Current step width as a percentage string e.g. "33%" */
  width: string;
}

/** Animated top-of-card progress indicator for multi-step forms. */
export function StepProgressBar({ width }: StepProgressBarProps) {
  return (
    <div className="absolute top-0 left-0 w-full h-1 bg-muted">
      <div
        className="h-full bg-primary transition-all duration-500 ease-in-out"
        style={{ width }}
      />
    </div>
  );
}
