import { z } from "zod";

export const urlLikeSchema = z
  .string()
  .min(3, "URL is too short")
  .regex(
    /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/.*)?$/i,
    "Please enter a valid URL or domain"
  );

// 1️⃣ Zod schema for URL validation
export const UrlSchema = z.object({
  url: urlLikeSchema,
  competitors: urlLikeSchema.optional().or(z.literal("")),
});

export type UrlFormValues = z.infer<typeof UrlSchema>;