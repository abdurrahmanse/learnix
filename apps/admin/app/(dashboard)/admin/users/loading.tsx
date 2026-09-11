export default function AdminUsersLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <div className="h-8 w-48 bg-muted rounded mb-2" />
          <div className="h-4 w-72 bg-muted rounded" />
        </div>
        <div className="flex space-x-3">
          <div className="h-10 w-24 bg-muted rounded-md" />
          <div className="h-10 w-32 bg-muted rounded-md" />
        </div>
      </div>
      
      <div className="rounded-md border">
        <div className="h-14 border-b bg-muted/20" />
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center p-4 border-b">
            <div className="h-10 w-10 bg-muted rounded-md mr-4" />
            <div className="space-y-2 flex-1">
              <div className="h-4 w-1/4 bg-muted rounded" />
              <div className="h-3 w-1/3 bg-muted rounded" />
            </div>
            <div className="h-8 w-20 bg-muted rounded mr-4" />
            <div className="h-8 w-24 bg-muted rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
