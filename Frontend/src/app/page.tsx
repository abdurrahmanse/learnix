"use client";

import { useEffect, useState } from "react";

interface HealthCheckResponse {
  success: boolean;
  message: string;
  version: string;
}

export default function Home() {
  const [data, setData] = useState<HealthCheckResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHealth = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/v1/health");
        if (!res.ok) {
          throw new Error("Failed to connect to backend");
        }
        const json = await res.json();
        setData(json);
      } catch (err: any) {
        setError(err.message || "Backend is unreachable");
      } finally {
        setLoading(false);
      }
    };

    fetchHealth();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Learnix Integration Test</h1>
        
        {loading && (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mb-4"></div>
            <p className="text-gray-500 font-medium">Connecting to backend...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-lg border border-red-200">
            <div className="font-semibold text-lg mb-1 flex items-center">
              <span className="mr-2">❌</span> Connection Failed
            </div>
            <p className="text-sm opacity-90">{error}</p>
          </div>
        )}

        {data && (
          <div className="space-y-4">
            <div className="bg-green-50 text-green-700 p-4 rounded-lg border border-green-200">
              <div className="font-semibold text-lg mb-1 flex items-center">
                <span className="mr-2">✅</span> Connection Successful
              </div>
            </div>
            
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="font-medium text-gray-500">Status:</span>
                <span className="font-mono bg-gray-100 px-2 py-0.5 rounded">{data.success ? "true" : "false"}</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="font-medium text-gray-500">Message:</span>
                <span className="font-medium">{data.message}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-500">Version:</span>
                <span className="font-mono bg-blue-50 text-blue-700 px-2 py-0.5 rounded">{data.version}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
