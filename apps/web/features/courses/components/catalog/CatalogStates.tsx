import { Search } from "lucide-react";
import { Heading, Text, Button } from "@learnix/ui";

export function CatalogErrorState({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
        <span className="text-destructive font-bold text-2xl">!</span>
      </div>
      <Heading className="text-xl font-bold mb-2" level={3}>
        Failed to load courses
      </Heading>
      <Text className="text-muted-foreground mb-6">We encountered an error while fetching the catalog.</Text>
      <Button onClick={onRetry} variant="outline" className="rounded-full">
        Try Again
      </Button>
    </div>
  );
}

export function CatalogEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <Search className="w-16 h-16 text-muted-foreground/30 mb-4" />
      <Heading className="text-xl font-bold mb-2" level={3}>
        No courses found
      </Heading>
      <Text className="text-muted-foreground">Try adjusting your search query.</Text>
    </div>
  );
}
