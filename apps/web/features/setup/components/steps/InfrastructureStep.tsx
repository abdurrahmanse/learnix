import { UseFormRegister, FieldErrors } from "react-hook-form";
import { Input } from "@learnix/ui";
import { SetupFormData } from "../../schemas";

interface InfrastructureStepProps {
  register: UseFormRegister<SetupFormData>;
  errors: FieldErrors<SetupFormData>;
}

export function InfrastructureStep({ register, errors }: InfrastructureStepProps) {
  return (
    <>
      <div>
        <label className="block text-sm font-medium mb-1">PostgreSQL URL</label>
        <Input
          {...register("database_url")}
          placeholder="postgresql+asyncpg://user:pass@host:5432/db"
          className="bg-neutral-950 border-neutral-800 text-white"
        />
        {errors.database_url && <span className="text-red-500 text-sm mt-1">{errors.database_url.message}</span>}
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Redis URL</label>
        <Input
          {...register("redis_url")}
          placeholder="redis://localhost:6379/0"
          className="bg-neutral-950 border-neutral-800 text-white"
        />
        {errors.redis_url && <span className="text-red-500 text-sm mt-1">{errors.redis_url.message}</span>}
      </div>
    </>
  );
}
