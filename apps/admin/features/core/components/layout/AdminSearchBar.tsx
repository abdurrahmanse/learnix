"use client";

import { Search } from "lucide-react";
import { Input } from "@learnix/ui";

/** Admin global search bar. */
export function AdminSearchBar() {
  return (
    <div className="hidden sm:flex relative w-full max-w-sm group">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
      <Input
        placeholder="Search across modules..."
        className="pl-9 bg-muted/50 border-transparent focus-visible:bg-background focus-visible:ring-primary/20 transition-all rounded-full"
      />
    </div>
  );
}
