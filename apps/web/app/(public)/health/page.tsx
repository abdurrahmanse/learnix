"use client";

import { useSystemHealth } from "@/features/system/hooks/useSystemHealth";
import { Heading, Text } from "@learnix/ui";

export default function HealthPage() {
  const { data, isLoading: loading, error: queryError } = useSystemHealth();

  const error = queryError ? (queryError instanceof Error ? queryError.message : "Backend is unreachable") : null;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background">
      <div className="bg-card text-card-foreground p-8 rounded-xl shadow-lg border max-w-md w-full">
        <Heading className="text-2xl font-bold mb-6 text-center" level={1}>Learnix Integration Test</Heading>
        
        {loading && (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mb-4"></div>
            <Text className="text-muted-foreground font-medium">Connecting to backend...</Text>
          </div>
        )}

        {error && (
          <div className="bg-destructive/10 text-destructive p-4 rounded-lg border border-destructive/20">
            <div className="font-semibold text-lg mb-1 flex items-center">
              <span className="mr-2">❌</span> Connection Failed
            </div>
            <Text className="text-sm opacity-90">{error}</Text>
          </div>
        )}

        {data && (
          <div className="space-y-4">
            <div className="bg-green-500/10 text-green-600 dark:text-green-500 p-4 rounded-lg border border-green-500/20">
              <div className="font-semibold text-lg mb-1 flex items-center">
                <span className="mr-2">✅</span> Connection Successful
              </div>
            </div>
            
            <div className="space-y-2 text-sm text-foreground">
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium text-muted-foreground">Status:</span>
                <span className="font-mono bg-muted px-2 py-0.5 rounded">{data.success ? "true" : "false"}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium text-muted-foreground">Message:</span>
                <span className="font-medium">{data.message}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-muted-foreground">Version:</span>
                <span className="font-mono bg-primary/10 text-primary px-2 py-0.5 rounded">{data.version}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
