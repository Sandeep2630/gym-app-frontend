import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email("Please add a valid email"),
  password: z
    .string()
    .min(1, "Password is a requrired field")
    .min(6, "Password must be 6 character long"),
});
