"use client";

import React, { useEffect, useState } from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  FaFacebookF,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Start hidden

  const toggleSection = (section: number) => {
    setOpenSection(openSection === section ? null : section);
  };

  const footerContent = [
    {
      heading: "Company",
      links: [
        { label: "About Us", href: "/" },
        { label: "Products", href: "/" },
        { label: "Contact", href: "/" },
        { label: "Articles", href: "/articles" },
      ],
    },
    {
      heading: "Services",
      links: [
        { label: "App development", href: "/" },
        { label: "Penetration Testing", href: "/" },
        { label: "Digital Marketing", href: "/" },
        { label: "Cyber Security Analysis", href: "/" },
      ],
    },
    {
      heading: "Products",
      links: [
        { label: "GetChatBank", href: "/" },
        { label: "Bloomgram", href: "/" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy Policy", href: "/legal/privacy-policy" },
        { label: "Terms of Use", href: "/legal/terms-of-use" },
      ],
    },
  ];

  useEffect(() => {
    // Check initial hasLoaded state
    if (sessionStorage.getItem("hasLoaded")) {
      setIsLoading(false);
    }

    // Listen for loader completion
    const handleLoaderComplete = () => {
      setIsLoading(false);
    };
    window.addEventListener("loaderComplete", handleLoaderComplete);

    return () => {
      window.removeEventListener("loaderComplete", handleLoaderComplete);
    };
  }, []);

  // Hide footer during loading
  if (isLoading) {
    return null;
  }

  return (
    <footer className="relative bg-background text-white">
      <MaxWidthWrapper className="py-10 !md:px-12 md:py-12 !lg:px-12 relative z-10">
        {/* Desktop: 4 Columns */}
        <div className="hidden md:grid md:grid-cols-4 gap-8">
          {footerContent.map((column, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-lg font-semibold text-white tracking-tight">
                {column.heading}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-[#f1d59f] hover:underline underline-offset-4 transition-all duration-200 ease-in-out"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile: Accordion */}
        <div className="md:hidden space-y-4 border border-gray-300 rounded-lg p-4">
          {footerContent.map((column, idx) => (
            <div
              key={idx}
              className="border-b border-gray-600/30 last:border-b-0"
            >
              <button
                onClick={() => toggleSection(idx)}
                className="flex w-full items-center justify-between py-4 text-left focus:outline-none"
                aria-expanded={openSection === idx}
                aria-controls={`accordion-content-${idx}`}
              >
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  {column.heading}
                </h3>
                {openSection === idx ? (
                  <ChevronUp className="h-5 w-5 text-white" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-white" />
                )}
              </button>
              <div
                id={`accordion-content-${idx}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openSection === idx ? "max-h-96 pb-4" : "max-h-0"
                }`}
              >
                <ul className="space-y-2">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-[#f1d59f] hover:underline underline-offset-4 transition-all duration-200 ease-in-out block py-1"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Copyright and Social Media */}
        <div className="mt-10 md:mt-12 border-t border-gray-500 pt-6 text-center">
          <div className="flex justify-center gap-6 mb-4">
            <Link
              href="https://web.facebook.com/profile.php?id=61575082984278"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#f1d59f] transition-colors"
            >
              <FaFacebookF className="h-6 w-6" />
            </Link>
            <Link
              href="https://wa.me/+447448504110"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#f1d59f] transition-colors"
            >
              <FaWhatsapp className="h-6 w-6" />
            </Link>
            <Link
              href="https://x.com/Gustoprof007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#f1d59f] transition-colors"
            >
              <FaXTwitter className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.instagram.com/gustoprofessionals/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#f1d59f] transition-colors"
            >
              <FaInstagram className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:info.gustoprofessionals@gmail.com"
              className="text-muted-foreground hover:text-[#f1d59f] transition-colors"
            >
              <FaEnvelope className="h-6 w-6" />
            </Link>
          </div>
          <div className="space-y-2 text-xs text-muted-foreground">
            <p>© 2025 Drumbell Technologies. All rights reserved.</p>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
