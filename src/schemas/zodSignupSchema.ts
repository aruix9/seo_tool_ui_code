import { z } from "zod";

export const signUpSchema = z.object({
    name: z
      .string()
      .nonempty('Full names is required'),
    email: z
        .string()
      .email('Invalid email address')
      .nonempty('Email is required'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});