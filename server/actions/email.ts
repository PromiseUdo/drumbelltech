"use server";

import { AdminEmailTemplate } from "@/components/email/admin-email-template";
import { EmailTemplate } from "@/components/email/contact-form-email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactFormEmail = async (
  name: string,
  whatsappNumber: string,
  email: string,
  message: string
) => {
  const { data, error } = await resend.emails.send({
    from: "Drumbell Technologies <no-reply@drumbelltechnologies.com>",
    to: "fortuneokwu@gmail.com",
    subject: "Confirmation Email",
    react: AdminEmailTemplate({
      name,
      whatsappNumber,
      email,
      message,
    }),
  });
  if (error) return console.log(error);
  if (data) return data;
};

export const sendContactFormReplyEmail = async (
  name: string,
  email: string
) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Drumbell Technologies <no-reply@drumbelltechnologies.com>",
      to: email,
      subject: "Message Received",
      react: EmailTemplate({
        actionLabel: "Thank you for reaching us",
        username: name,
        buttonText: "Confirm Your Email",
        href: "",
        statementLabel: "message acknowledgement",
      }),
    });

    if (error) {
      console.error("Error sending email:", error);
      return null; // or handle error appropriately
    }
    return data;
  } catch (fetchError) {
    console.error("Error fetching image:", fetchError);
    // Here you might want to send an email without the image or handle the error in another way
    return null;
  }
};
