"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { UI_ROUTES } from "@/utils/ui-routes";
import Link from "next/link";
import {
  signUpFormSchema,
  signupFormValues,
} from "@/lib/schema/auth-form.schema";
import { signUp } from "@/actions/users";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ActionResponse } from "@/utils/action-response";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";

export default function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // form:
  const form = useForm<signupFormValues>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // onSubmit :
  async function onSubmit(data: signupFormValues) {
    setIsLoading(true);
    const res: ActionResponse<unknown> = await signUp(
      data.name,
      data.email,
      data.password,
    );

    if (res?.success) {
      toast.success(res?.message);
      router.push(UI_ROUTES.DASHBOARD);
    } else toast.error(res?.message);

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
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Fill in the form below to create your account
          </p>
        </div>
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input
                {...field}
                id="name"
                aria-invalid={fieldState.invalid}
                placeholder="John Doe"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
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
          <Button type="submit" disabled={false}> {isLoading ? <Spinner/> : "Create Account"} </Button>
        </Field>
        <Field>
         
          <FieldDescription className="px-6 text-center">
            Already have an account?{" "}
            <Link href={UI_ROUTES.SIGNIN}>Sign in</Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
