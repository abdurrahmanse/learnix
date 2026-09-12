import { UseFormRegister, FieldErrors } from "react-hook-form";
import { Input } from "@learnix/ui";
import { SetupFormData } from "../../schemas";

interface AdminStepProps {
  register: UseFormRegister<SetupFormData>;
  errors: FieldErrors<SetupFormData>;
}

export function AdminStep({ register, errors }: AdminStepProps) {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Username</label>
          <Input {...register("admin_username")} className="bg-neutral-950 border-neutral-800 text-white" />
          {errors.admin_username && <span className="text-red-500 text-sm mt-1">{errors.admin_username.message}</span>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <Input {...register("admin_full_name")} className="bg-neutral-950 border-neutral-800 text-white" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email Address</label>
        <Input type="email" {...register("admin_email")} className="bg-neutral-950 border-neutral-800 text-white" />
        {errors.admin_email && <span className="text-red-500 text-sm mt-1">{errors.admin_email.message}</span>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Password</label>
        <Input type="password" {...register("admin_password")} className="bg-neutral-950 border-neutral-800 text-white" />
        {errors.admin_password && <span className="text-red-500 text-sm mt-1">{errors.admin_password.message}</span>}
      </div>
    </>
  );
}
