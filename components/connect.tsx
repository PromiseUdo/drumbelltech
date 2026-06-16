"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Linkedin } from "lucide-react";
import { FaWhatsapp, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import Link from "next/link";

const socialLinks = [
  {
    icon: <Linkedin size={32} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/drumbell-technologies",
  },
  {
    icon: <FaWhatsapp size={32} />,
    label: "WhatsApp",
    href: "https://wa.me/+447899365494",
  },
  {
    icon: <FaXTwitter size={32} />,
    label: "X / Twitter",
    href: "https://x.com/DrumbellTech",
  },
  {
    icon: <FaEnvelope size={32} />,
    label: "Email",
    href: "mailto:thedrumbell@gmail.com",
  },
];

const Connect = () => {
  const boxesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    boxesRef.current.forEach((box) => {
      if (!box) return;

      const bubble = document.createElement("div");
      bubble.className =
        "absolute inset-0 bg-transparent pointer-events-none z-0";
      box.appendChild(bubble);

      let bubbleX = 0;
      let bubbleY = 0;

      const updateBubblePosition = (e: MouseEvent) => {
        const rect = box.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const leftDist = x;
        const rightDist = rect.width - x;
        const topDist = y;
        const bottomDist = rect.height - y;
        const minDist = Math.min(leftDist, rightDist, topDist, bottomDist);

        bubbleX = x;
        bubbleY = y;

        if (minDist === leftDist) bubbleX = 0;
        else if (minDist === rightDist) bubbleX = rect.width;
        else if (minDist === topDist) bubbleY = 0;
        else if (minDist === bottomDist) bubbleY = rect.height;
      };

      box.addEventListener("mouseenter", (e) => {
        bubble.style.backgroundColor = "white";
        updateBubblePosition(e);
        gsap.set(bubble, {
          clipPath: `circle(0% at ${bubbleX}px ${bubbleY}px)`,
        });
        gsap.to(bubble, {
          clipPath: `circle(150% at ${bubbleX}px ${bubbleY}px)`,
          duration: 0.5,
          ease: "power2.out",
        });
      });

      box.addEventListener("mousemove", updateBubblePosition);

      box.addEventListener("mouseleave", () => {
        gsap.to(bubble, {
          clipPath: `circle(0% at ${bubbleX}px ${bubbleY}px)`,
          duration: 0.5,
          ease: "power2.in",
          onComplete: () => {
            bubble.style.backgroundColor = "transparent";
          },
        });
      });

      return () => {
        box.removeEventListener("mouseenter", () => {});
        box.removeEventListener("mousemove", updateBubblePosition);
        box.removeEventListener("mouseleave", () => {});
        if (bubble.parentNode) {
          bubble.parentNode.removeChild(bubble);
        }
      };
    });
  }, []);

  return (
    <div className="w-full overflow-hidden mt-[5rem] relative">
      <h2 className="text-[#f1d59f] text-xs uppercase tracking-wide mb-8 font-nbInternational">
        Connect with us
      </h2>
      <div className="flex flex-wrap gap-4">
        {socialLinks.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl border border-[#f1d59f] w-[9rem] h-24 flex flex-col items-center justify-center gap-2 overflow-hidden cursor-pointer no-underline"
          >
            <div
              ref={(el: HTMLDivElement | null) => {
                boxesRef.current[index] = el;
              }}
              className="absolute inset-0"
            />
            <div className="relative z-10 text-[#f1d59f] group-hover:text-gray-900 transition-colors duration-500">
              {item.icon}
            </div>
            <span className="relative z-10 font-nbMono text-[10px] text-[#f1d59f] group-hover:text-gray-900 transition-colors duration-500 uppercase tracking-wider">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Connect;
