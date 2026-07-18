import * as z from "zod";

export const signinFormSchema = z.object({
  email: z.string().email("Email should have proper type"),
  password: z.string().min(8, "Password should have minimum 8 characters"),
});

export const signUpFormSchema = z.object({
  name: z.string().min(3).max(120),
  email: z.string().email("Email should have proper type"),
  password: z.string().min(8, "Password should have minimum 8 characters"),
  organizationName: z
    .string()
    .min(3, "Organization name should have minimum 3 characters")
    .max(60, "Organization name cannot exceed 60 characters"),
});

// export type:
export type signinFormValues = z.infer<typeof signinFormSchema>;
export type signupFormValues = z.infer<typeof signUpFormSchema>;
