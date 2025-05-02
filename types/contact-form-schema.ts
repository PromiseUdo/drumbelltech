import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string({
    required_error: "Your name is required",
    invalid_type_error: "Your name must be a valid text",
  }),

  email: z
    .string({
      invalid_type_error: "Must be a valid text",
      required_error: "Your email is required",
    })
    .email("Must be a valid email"),

  whatsappNumber: z.string({
    invalid_type_error: "Must be a valid text",
  }),

  message: z.string({
    required_error: "Message is required",
    invalid_type_error: "Message must be a valid text",
  }),

  "cf-turnstile-response": z.string({
    required_error: "Human verification is required",
  }),
  date: z.string().min(1, { message: "Please select a date." }).optional(), // Optional for backward compatibility
  time: z.string().min(1, { message: "Please select a time." }).optional(),
});

export type zContactFormSchema = z.infer<typeof ContactFormSchema>;
