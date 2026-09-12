import { UseFormRegister, FieldErrors } from "react-hook-form";
import { Input } from "@learnix/ui";
import { SetupFormData } from "../../schemas";

interface ExternalServicesStepProps {
  register: UseFormRegister<SetupFormData>;
  errors: FieldErrors<SetupFormData>;
}

export function ExternalServicesStep({ register, errors }: ExternalServicesStepProps) {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-1">Cloudinary Cloud Name</label>
          <Input {...register("cloudinary_cloud_name")} className="bg-neutral-950 border-neutral-800 text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Cloudinary API Key</label>
          <Input {...register("cloudinary_api_key")} className="bg-neutral-950 border-neutral-800 text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Cloudinary API Secret</label>
          <Input type="password" {...register("cloudinary_api_secret")} className="bg-neutral-950 border-neutral-800 text-white" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Resend API Key</label>
        <Input type="password" {...register("resend_api_key")} className="bg-neutral-950 border-neutral-800 text-white" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Sentry DSN</label>
        <Input {...register("sentry_dsn")} className="bg-neutral-950 border-neutral-800 text-white" />
      </div>
    </>
  );
}
