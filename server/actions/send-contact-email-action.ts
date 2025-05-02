"use server";

import { ContactFormSchema } from "@/types/contact-form-schema";
import { createSafeActionClient } from "next-safe-action";
import { z } from "zod";
import { sendContactFormEmail, sendContactFormReplyEmail } from "./email";
// Adjust import based on your setup

// Initialize the safe action client
const actionClient = createSafeActionClient();

// Define the server action
export const sendContactFormEmailAction = actionClient
  .schema(ContactFormSchema)
  .action(async ({ parsedInput }) => {
    const {
      name,
      whatsappNumber,
      email,
      message,
      "cf-turnstile-response": token,
    } = parsedInput;

    try {
      const secret = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;

      // Check if secret and token are defined
      if (!secret || !token) {
        return { error: "Missing verification data." };
      }

      // Log the token for debugging
      // console.log("Token type:", typeof token, "Token value:", token);

      // Verify the Cloudflare Turnstile token
      const response = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            secret,
            response: token,
          }),
        }
      );

      const outcome = await response.json();
      if (!outcome.success) {
        return { error: "Human verification failed." };
      }

      // Send the initial email
      try {
        await sendContactFormEmail(name, whatsappNumber, email, message);

        // Send the reply email
        await sendContactFormReplyEmail(name, email);

        return { success: "Message sent successfully" };
      } catch (emailError) {
        console.error("Error sending initial contact form email:", emailError);
        return { error: "Failed to send the initial message." };
      }
    } catch (e) {
      console.error("Error in sendContactFormEmailAction:", e);
      return { error: "Failed to send message." };
    }
  });
