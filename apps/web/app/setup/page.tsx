import { SetupWizard } from "@/features/setup/components/SetupWizard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Setup | Learnix",
  description: "Initial platform configuration",
};

export default function SetupPage() {
  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center p-4 py-12 text-white">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-2 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
            Welcome to Learnix
          </h1>
          <p className="text-neutral-400">
            Let's get your platform configured and ready for production.
          </p>
        </div>
        
        <SetupWizard />
      </div>
    </div>
  );
}
