export default function CoursesLoading() {
  return (
    <div className="w-full py-8 animate-pulse space-y-8">
      {/* Header skeleton */}
      <div className="space-y-3">
        <div className="h-8 w-64 bg-muted rounded-lg" />
        <div className="h-4 w-96 bg-muted/60 rounded" />
      </div>
      {/* Cards skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-border/40 overflow-hidden">
            <div className="aspect-video bg-muted" />
            <div className="p-5 space-y-3">
              <div className="h-5 bg-muted rounded w-3/4" />
              <div className="h-4 bg-muted/60 rounded w-full" />
              <div className="h-4 bg-muted/60 rounded w-5/6" />
              <div className="h-8 bg-muted rounded-full w-1/2 mt-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
