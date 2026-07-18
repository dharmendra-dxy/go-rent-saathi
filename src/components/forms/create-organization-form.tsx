"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { orgFormSchema, orgFormValues } from "@/lib/schema/org-from.schema";

export function CreateOrganizationForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<orgFormValues>({
    resolver: zodResolver(orgFormSchema),
    defaultValues: {
      name: "",
      slug: "",
    },
  });

  async function onSubmit(values: orgFormValues) {
    try {
      setIsLoading(true);
      await authClient.organization.create({
        name: values.name,
        slug: values.slug,
      });

      toast.success("Organization created successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create organization");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="email">Org Name</FieldLabel>
            <Input
              {...field}
              id="name"
              aria-invalid={fieldState.invalid}
              placeholder="Organization Name"
              autoComplete="off"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Controller
        name="slug"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="email">Org Slug</FieldLabel>
            <Input
              {...field}
              id="slug"
              aria-invalid={fieldState.invalid}
              placeholder="Organization Slug"
              autoComplete="off"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Button disabled={isLoading} type="submit">
        {isLoading ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          "Create Organization"
        )}
      </Button>
    </form>
  );
}
