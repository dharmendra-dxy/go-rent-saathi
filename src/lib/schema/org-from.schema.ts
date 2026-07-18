import z from "zod";

export const orgFormSchema = z.object({
  name: z.string().min(2).max(50),
  slug: z.string().min(2).max(50),
});

// export type:
export type orgFormValues = z.infer<typeof orgFormSchema>;