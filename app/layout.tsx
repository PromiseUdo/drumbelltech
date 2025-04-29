import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Drumbell Technologies",
  description: "IT Agency",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      {" "}
      {/* Add 'dark' class for default dark mode */}
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <main className="flex flex-col min-h-screen relative bg-background text-foreground">
          <Navbar />
          <div className="flex-grow flex-1">{children}</div>
          <Toaster />

          <Link
            href="https://wa.me/+447899365494"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20b85a] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 transition-all duration-300 hover:scale-105"
            aria-label="Chat with us on WhatsApp"
            title="Chat with us on WhatsApp"
          >
            <MessageCircle className="w-7 h-7" />
          </Link>
          <Footer />
        </main>
      </body>
    </html>
  );
}
