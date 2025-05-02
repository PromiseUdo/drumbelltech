"use server";

import { ContactFormSchema } from "@/types/contact-form-schema";
import { createSafeActionClient } from "next-safe-action";
import { z } from "zod";
import { Resend } from "resend";
import {
  sendAdminConsultationEmail,
  sendUserBookingConfirmationEmail,
} from "./email";

const resend = new Resend(process.env.RESEND_API_KEY);
const actionClient = createSafeActionClient();

export const sendConsultationEmailAction = actionClient
  .schema(ContactFormSchema)
  .action(async ({ parsedInput }) => {
    const {
      name,
      email,
      whatsappNumber,
      date,
      time,
      message,
      "cf-turnstile-response": token,
    } = parsedInput;

    try {
      const secret = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;
      if (!secret || !token) {
        return { error: "Missing verification data." };
      }

      // Verify Cloudflare Turnstile
      const response = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({ secret, response: token }),
        }
      );
      const outcome = await response.json();
      if (!outcome.success) {
        return { error: "Human verification failed." };
      }

      try {
        await sendAdminConsultationEmail(
          name,
          email,
          whatsappNumber,
          message,
          date,
          time
        );

        // Send the reply email
        await sendUserBookingConfirmationEmail(name, email, time, date);

        return { success: "Message sent successfully" };
      } catch (emailError) {
        console.error("Error sending initial contact form email:", emailError);
        return { error: "Failed to send the initial message." };
      }

      return { success: "Consultation request sent successfully" };
    } catch (e) {
      console.error("Error in sendConsultationEmailAction:", e);
      return { error: "Failed to send consultation request." };
    }
  });
