"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Input, Button } from "@learnix/ui";

import { zodResolver } from "@hookform/resolvers/zod";
import { SetupFormData, setupSchema, defaultSetupValues } from "../schemas";
import { InfrastructureStep } from "./steps/InfrastructureStep";
import { ExternalServicesStep } from "./steps/ExternalServicesStep";
import { AdminStep } from "./steps/AdminStep";

export function SetupWizard() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<SetupFormData>({
    resolver: zodResolver(setupSchema),
    defaultValues: defaultSetupValues,
  });

  const nextStep = async (fieldsToValidate: (keyof SetupFormData)[]) => {
    const isValid = await trigger(fieldsToValidate);
    if (isValid) setStep((s) => s + 1);
  };

  const prevStep = () => setStep((s) => s - 1);

  const onSubmit = async (data: SetupFormData) => {
    setIsSubmitting(true);
    const loadingToast = toast.loading("Configuring platform, running migrations, and creating admin account. This may take a minute...");
    
    try {
      const res = await fetch("http://localhost:8000/api/v1/setup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.detail || "Setup failed");
      }

      toast.success(result.message, { id: loadingToast });
      
      // Give the backend a few seconds to restart
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);

    } catch (err: any) {
      toast.error(err.message, { id: loadingToast });
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full bg-neutral-900 border-neutral-800 text-neutral-100 shadow-2xl">
      <CardHeader>
        <CardTitle className="text-xl">
          {step === 1 && "1. Core Infrastructure"}
          {step === 2 && "2. External Services (Optional)"}
          {step === 3 && "3. Root Administrator"}
        </CardTitle>
        <CardDescription className="text-neutral-400">
          {step === 1 && "Configure your PostgreSQL and Redis connections."}
          {step === 2 && "Configure cloud storage, email, and telemetry."}
          {step === 3 && "Create the super admin account for the platform."}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form id="setup-form" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          
          {/* STEP 1 */}
          <div className={step === 1 ? "block space-y-4" : "hidden"}>
            <InfrastructureStep register={register} errors={errors} />
          </div>

          {/* STEP 2 */}
          <div className={step === 2 ? "block space-y-4" : "hidden"}>
            <ExternalServicesStep register={register} errors={errors} />
          </div>

          {/* STEP 3 */}
          <div className={step === 3 ? "block space-y-4" : "hidden"}>
            <AdminStep register={register} errors={errors} />
          </div>

        </form>
      </CardContent>

      <CardFooter className="flex justify-between border-t border-neutral-800 pt-6">
        <Button 
          variant="outline" 
          onClick={prevStep} 
          disabled={step === 1 || isSubmitting}
          className="border-neutral-700 bg-transparent text-neutral-300 hover:bg-neutral-800 hover:text-white"
        >
          Back
        </Button>

        {step < 3 ? (
          <Button 
            onClick={() => {
              if (step === 1) nextStep(["database_url", "redis_url"]);
              if (step === 2) nextStep([]);
            }} 
            variant="default"
          >
            Continue
          </Button>
        ) : (
          <Button 
            type="submit" 
            form="setup-form" 
            disabled={isSubmitting}
            variant="default"
          >
            {isSubmitting ? "Configuring..." : "Complete Setup"}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
