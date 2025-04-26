"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const blogPosts = [
    {
      title: "The Future of Web Development in 2025",
      description:
        "Explore the latest trends and technologies shaping the web development landscape.",
      image: "/app1.png",
    },
    {
      title: "Cybersecurity Best Practices for Startups",
      description:
        "Learn how to protect your startup from cyber threats with these essential tips.",
      image: "/app1.png",
    },
    {
      title: "Designing User-Centric Interfaces",
      description:
        "Discover the principles behind creating intuitive and engaging user interfaces.",
      image: "/app1.png",
    },
  ];

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
      zIndex: (i) => 10 + i, // Incremental z-index
    });

    // Set initial positions for non-first cards
    cards.forEach((card, index) => {
      if (index > 0) {
        gsap.set(card, { y: cardHeight * index }); // Stack below
      }
    });

    // Create a timeline for pinning and animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: `top ${navbarHeight}px`,
        end: `+=${(cards.length - 1) * cardHeight}`, // Duration for overlaps
        pin: true,
        scrub: 0.5,
        anticipatePin: 1,
      },
    });

    // Animate cards to overlap
    cards.forEach((card, index) => {
      if (index > 0) {
        tl.to(
          card,
          {
            y: 0, // Move to top
            zIndex: 10 + index, // Ensure it stacks above
            duration: 1,
            ease: "power2.out",
          },
          (index - 1) * 1 // Stagger animations
        );
      }
    });

    // Ensure the first card fades out when the last card overlaps
    tl.to(
      cards[0],
      {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      (cards.length - 2) * 1 // Sync with last overlap
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="mt-[1.5rem] md:mt-[3rem] relative">
      <h2 className="text-lg  mb-8 text-[#f1d59f]">Recent Articles</h2>
      <div
        ref={containerRef}
        className="blog-cards-container relative"
        style={{ height: "400px" }} // Match card height
      >
        {blogPosts.map((post, index) => (
          <div
            key={index}
            ref={(el: HTMLDivElement | null) => {
              cardsRef.current[index] = el;
            }}
            className="border border-[#f1d59f] w-full h-[500px] md:h-[400px] bg-card text-card-foreground rounded-2xl shadow-lg overflow-hidden"
            style={{ willChange: "transform, z-index, opacity" }}
          >
            <div className="flex flex-col md:flex-row h-full">
              <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>
              <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                <p className="text-base text-muted-foreground">
                  {post.description}
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block text-primary hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
