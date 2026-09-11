"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

import { authService } from "@learnix/api-client";
import { loginSchema } from "@learnix/utils";
import { useAuthStore } from "@/features/auth/store/authStore";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@learnix/ui";
import { Input } from "@learnix/ui";
import { Button } from "@learnix/ui";

export function StudentLoginForm() {
  const router = useRouter();
  const { setAuth } = useAuthStore();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: login, isPending } = useMutation({
    mutationFn: (values: z.infer<typeof loginSchema>) => 
      authService.login(values.email, values.password),
    onSuccess: async (data) => {
      try {
        const user = await authService.getMe(data.access_token);
        setAuth(user, data.access_token);
        router.replace("/my-courses");
      } catch {
        toast.error("Failed to fetch user details.");
      }
    },
    onError: () => {
      toast.error("Invalid credentials.");
    },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    login(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" {...field} disabled={isPending} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••" {...field} disabled={isPending} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? "Signing in..." : "Sign In"}
        </Button>
      </form>
    </Form>
  );
}
