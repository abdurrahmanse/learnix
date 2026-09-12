import { Search, SlidersHorizontal } from "lucide-react";
import { Input, Heading, Text, Button } from "@learnix/ui";

interface CatalogHeaderProps {
  currentQuery: string;
  isPending: boolean;
  onSearch: (value: string) => void;
}

export function CatalogHeader({ currentQuery, isPending, onSearch }: CatalogHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-between items-center bg-card/30 p-6 rounded-3xl border border-white/5 backdrop-blur-md">
      <div className="space-y-1 w-full md:w-1/2">
        <Heading className="text-3xl md:text-4xl font-extrabold tracking-tight" level={1}>
          Explore Courses
        </Heading>
        <Text className="text-muted-foreground">Discover new skills and level up your career.</Text>
      </div>

      <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4 flex-1 justify-end">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search courses..."
            value={currentQuery}
            onChange={(e) => onSearch(e.target.value)}
            className="pl-10 rounded-full h-12 bg-background/50 border-white/10"
          />
          {isPending && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <div className="h-4 w-4 rounded-full border-2 border-primary border-t-transparent animate-spin" />
            </div>
          )}
        </div>
        <Button variant="outline" className="rounded-full h-12 px-6 border-white/10 hidden sm:flex">
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>
    </div>
  );
}
