export default function CourseDetailLoading() {
  return (
    <div className="w-full max-w-6xl mx-auto py-8 md:py-12 animate-pulse">
      <div className="w-32 h-4 bg-muted rounded mb-8" />
      <div className="w-full aspect-video md:aspect-[21/9] bg-muted/30 rounded-3xl mb-12" />
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-2/3 space-y-6">
          <div className="w-3/4 h-8 bg-muted rounded" />
          <div className="w-full h-4 bg-muted rounded" />
          <div className="w-5/6 h-4 bg-muted rounded" />
          <div className="w-full h-4 bg-muted rounded" />
          <div className="w-4/5 h-4 bg-muted rounded" />
        </div>
        <div className="w-full lg:w-1/3">
          <div className="w-full h-72 bg-muted/20 rounded-3xl" />
        </div>
      </div>
    </div>
  );
}
