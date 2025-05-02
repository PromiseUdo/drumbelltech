"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { extractTextFromPostBody } from "@/app/articles/components/post-reel";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface BlogPost {
  title: string;
  description: string;
  image: string;
  slug: string;
}

interface BlogClientProps {
  featuredPosts: BlogPost[];
}

const BlogClient = ({ featuredPosts }: BlogClientProps) => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cards = cardsRef.current.filter(
      (card) => card !== null
    ) as HTMLDivElement[];
    const section = sectionRef.current;
    const container = containerRef.current;

    if (!section || !container || cards.length === 0) return;

    const navbarHeight = 100; // Adjust based on your navbar height
    const cardHeight = 400; // Match CSS card height

    // Set initial styles for all cards
    gsap.set(cards, {
      position: "absolute",
      top: 0,
      width: "100%",
      zIndex: (i) => 10 + i,
    });

    // Set initial positions for non-first cards (only if multiple cards)
    cards.forEach((card, index) => {
      if (index > 0) {
        gsap.set(card, { y: cardHeight * index });
      }
    });

    // Create timeline for pinning and animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: `top ${navbarHeight}px`,
        end:
          cards.length > 1
            ? `+=${(cards.length - 1) * cardHeight}`
            : `+=${cardHeight}`, // Use cardHeight for single card
        pin: true,
        scrub: 0.5,
        anticipatePin: 1,
      },
    });

    // Animate cards to overlap (only if multiple cards)
    cards.forEach((card, index) => {
      if (index > 0) {
        tl.to(
          card,
          {
            y: 0,
            zIndex: 10 + index,
            duration: 1,
            ease: "power2.out",
          },
          (index - 1) * 1
        );
      }
    });

    // Fade out first card only if there are multiple cards
    if (cards.length > 1) {
      tl.to(
        cards[0],
        {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        (cards.length - 2) * 1
      );
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="mt-[1.5rem] md:mt-[3rem] relative">
      <h2 className="text-lg mb-8 text-[#f1d59f]">Recent Articles</h2>
      <div
        ref={containerRef}
        className="blog-cards-container relative"
        style={{ height: "400px" }}
      >
        {featuredPosts.map((post: any, index) => {
          const postBodyText = extractTextFromPostBody(post?.description);
          const imageUrl = `https:${post.image}`; // Fallback image

          return (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="border border-[#f1d59f] w-full h-[500px] md:h-[400px] bg-card text-card-foreground rounded-2xl shadow-lg overflow-hidden"
              style={{ willChange: "transform, z-index, opacity" }}
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
                  <Image
                    src={imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                </div>
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-base text-muted-foreground line-clamp-4">
                    {postBodyText}
                  </p>
                  <Link
                    href={`/articles/${post?.slug}`}
                    target="_blank"
                    className="flex items-center space-x-2 mt-4 text-sm text-[#f1d59f] hover:underline"
                  >
                    <span>Read More</span>
                    <ExternalLink className="w-4 h-4 text-[#f1d59f]" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BlogClient;
