"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Instagram, Linkedin } from "lucide-react";

const Connect = () => {
  const boxesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    boxesRef.current.forEach((box) => {
      if (!box) return;

      // Create a background layer for the white bubble
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

        // Determine entry/exit side
        const leftDist = x;
        const rightDist = rect.width - x;
        const topDist = y;
        const bottomDist = rect.height - y;
        const minDist = Math.min(leftDist, rightDist, topDist, bottomDist);

        bubbleX = x;
        bubbleY = y;

        if (minDist === leftDist) {
          bubbleX = 0;
        } else if (minDist === rightDist) {
          bubbleX = rect.width;
        } else if (minDist === topDist) {
          bubbleY = 0;
        } else if (minDist === bottomDist) {
          bubbleY = rect.height;
        }
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

      // Cleanup
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
    <div className="w-full overflow-hidden mt-[12rem] md:mt-[5rem]  relative">
      <h2 className="text-[#f1d59f] text-xs uppercase tracking-wide mb-8 font-nbInternational">
        Connect with us
      </h2>
      <div className="space-x-4 flex flex-start w-full">
        {/* bg-gray-900  */}
        {[{ icon: <Linkedin size={40} />, label: "LinkedIn" }].map(
          (item, index) => (
            <div
              key={index}
              ref={(el: HTMLDivElement | null) => {
                boxesRef.current[index] = el;
              }}
              className="group relative rounded-2xl border border-[#f1d59f] w-[8rem] h-24 flex items-center justify-center overflow-hidden cursor-pointer"
            >
              <div className="relative z-10 text-[#f1d59f] group-hover:text-gray-900 transition-colors duration-500">
                {item.icon}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Connect;
