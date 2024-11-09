import { z } from "zod";

export const loginFormSchema = z.object({
    name: z
        .string()
        .min(3, { message: "Please input a valid name."}),
    password: z.string().min(3, "Please input a valid password."),
});

export type LoginValidationSchemaType = z.infer<typeof loginFormSchema>;