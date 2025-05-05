"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LoaderCircle } from "lucide-react";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { useForm } from "react-hook-form";
import { Turnstile } from "@marsidev/react-turnstile";
import { useRef } from "react"; // Add useRef
import {
  ContactFormSchema,
  zContactFormSchema,
} from "@/types/contact-form-schema";
import { z } from "zod";
import { useAction } from "next-safe-action/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendContactFormEmailAction } from "@/server/actions/send-contact-email-action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const ContactFormAndMap = () => {
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      whatsappNumber: "",
      "cf-turnstile-response": "",
    },
  });
  const siteKey = process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY || "";
  const router = useRouter();
  const turnstileRef = useRef<any>(null); // Create a ref for Turnstile

  const { execute, result, isExecuting } = useAction(
    sendContactFormEmailAction,
    {
      onSuccess: (data) => {
        toast.dismiss("contact-form-toast");

        if (data?.data?.error) {
          toast.error(data.data.error);
        }
        if (data?.data?.success) {
          toast.success(data.data.success);
          router.refresh();
          form.reset();
          if (turnstileRef.current) {
            turnstileRef.current.reset(); // Reset Turnstile widget
          }
        }
      },
      onExecute: (data) => {},
      onError({ error }) {
        toast.dismiss("contact-form-toast");
        console.error(error);
        toast.error("Form submission failed");
      },
    }
  );

  async function onSubmit(values: zContactFormSchema) {
    toast.loading("Submitting form", {
      id: "contact-form-toast",
    });
    execute(values);
  }

  return (
    <section className="w-full py-16 bg-background">
      <MaxWidthWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Contact Form */}
          <div className="p-3 md:p-8 rounded border border-[#f1d59f]">
            <h2 className="font-nbInternational text-5xl font-bold text-[#f1d59f] mb-6">
              Send Message
            </h2>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="font-nbMono focus-visible:!ring-[#04306e] focus-visible:!ring-2 mt-1 py-6 shadow-none border-gray-300 !rounded"
                          placeholder="Your name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="whatsappNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="font-nbMono focus-visible:!ring-[#04306e] focus-visible:!ring-2 mt-1 py-6 shadow-none border-gray-300 !rounded"
                          placeholder="Your Whatsapp number (optional)"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="font-nbMono focus-visible:!ring-[#04306e] focus-visible:!ring-2 mt-1 py-6 shadow-none border-gray-300 !rounded"
                          placeholder="Your email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          className="font-nbMono focus-visible:!ring-[#04306e] focus-visible:!ring-2 mt-1 py-6 shadow-none border-gray-300 !rounded"
                          placeholder="Your message"
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="cf-turnstile-response"
                  render={({ field }) => (
                    <FormItem className="w-full relative">
                      <FormLabel className="font-nbMono text-sm !font-normal text-gray-500">
                        Let us know you're human
                      </FormLabel>
                      <FormControl>
                        <Turnstile
                          ref={turnstileRef} // Attach ref to Turnstile
                          options={{
                            theme: "dark",
                            size: "flexible",
                          }}
                          siteKey={siteKey}
                          onSuccess={(token) =>
                            form.setValue("cf-turnstile-response", token)
                          }
                          onError={() => {
                            console.log("Turnstile error");
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  disabled={isExecuting}
                  className=" font-nbMono w-full bg-[#f6deb2] hover:bg-[#f1d59f] "
                >
                  {isExecuting ? (
                    <>
                      <LoaderCircle className="animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </Form>
          </div>

          {/* Map */}
          <div className="h-96 lg:h-auto rounded overflow-hidden shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.848156879165!2d55.31098821502178!3d25.263103783863846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c4b7e1b7b8d%3A0x1f6b4b7b8b7e1b7!2sAl%20Fahad%20Plaza%2C%20Al%20Rigga%20Rd%2C%20Dubai%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1734567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Location Map"
            ></iframe>
          </div>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ContactFormAndMap;
