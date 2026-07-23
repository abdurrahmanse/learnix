export function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-muted-foreground/60 w-full">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
            <span>Frontend Online</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
            <span>Backend Online</span>
          </div>
        </div>
        <p className="opacity-80">
          Learnix Platform &copy; {new Date().getFullYear()} &middot; Development Environment
        </p>
      </div>
    </footer>
  );
}
