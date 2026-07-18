"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { UI_ROUTES } from "@/utils/ui-routes";
import { signIn } from "@/actions/users";
import Link from "next/link";
import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import {
  signinFormSchema,
  signinFormValues,
} from "@/lib/schema/auth-form.schema";
import { useRouter } from "next/navigation";
import { ActionResponse } from "@/utils/action-response";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";

export default function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  // form:
  const form = useForm<signinFormValues>({
    resolver: zodResolver(signinFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // onSubmit :
  async function onSubmit(data: signinFormValues) {
    setIsLoading(true);
    const res: ActionResponse<unknown> = await signIn(data.email, data.password);
    console.log("res: ", res);
    if (res?.success) {
      toast.success(res.message);
      router.push(UI_ROUTES.DASHBOARD);
    } else toast.error(res.message);

    setIsLoading(false);
  }

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      {...props}
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                {...field}
                id="email"
                aria-invalid={fieldState.invalid}
                placeholder="m@example.com"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                {...field}
                id="password"
                aria-invalid={fieldState.invalid}
                placeholder="********"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Field>
          <Button type="submit" disabled={isLoading}>{isLoading ? <Spinner/> : "Login"}</Button>
        </Field>
        <Field>
         
          <FieldDescription className="text-center">
            Don&apos;t have an account?{" "}
            <Link
              href={UI_ROUTES.SINGUP}
              className="underline underline-offset-4"
            >
              Sign up
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
