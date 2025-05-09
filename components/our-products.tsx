"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import MaxWidthWrapper from "./max-width-wrapper";
import { ExternalLinkIcon } from "lucide-react";

// Example product
const products = [
  {
    id: 1,
    name: "GetChatBank",
    image: "/chatbank.PNG",
    link: "https://getchatbank.com/",
    description: `Secure Messaging and Banking in One App. Chatbank integrates secure messaging, advanced banking, and robust security into a seamless experience. Join the waitlist for early access.`,
  },
  {
    id: 2,
    name: "Blomgram",
    image: "/blomgram.PNG",
    link: "https://blomgram.com/",
    description: `Experience real-time insights, automated trading, and a vibrant community that empowers you to trade smarter. Blomgram is not just a platform; it's a movement that gives you the tools and the freedom to exchange currencies on your terms.`,
  },
];

const OurProducts = () => {
  return (
    <div className="w-full bg-background mt-[1.5rem] md:mt-[3rem]">
      <h2 className="text-[#f1d59f] uppercase text-xs font-nbInternational tracking-wide mb-8">
        Our Products
      </h2>

      <div className="space-y-24">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product }: { product: (typeof products)[0] }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector("nav");
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: [`start ${navbarHeight + 100}px`, "end 100px"],
  });

  const lines = product.description.split("\n").map((line) => line.split(" "));
  const totalWords = lines.flat().length;

  return (
    <div ref={containerRef} className="flex flex-col items-center gap-8">
      {/* Image with Hover Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full overflow-hidden rounded-2xl shadow-xl relative group"
      >
        <Image
          src={product.image}
          alt={product.name}
          width={1200}
          height={700}
          className="w-full h-[16rem] md:h-[450px] object-cover rounded-2xl"
          priority
        />

        {/* Glassy Overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 h-0 opacity-0
            bg-black/60 backdrop-blur-md flex items-center justify-between px-4
            group-hover:h-16 group-hover:opacity-100
            transition-all duration-500 ease-out overflow-hidden"
        >
          <span className="text-[#f1d59f] uppercase font-nbInternational text-xs font-medium ">
            {product.name}
          </span>
          <a
            target="_blank"
            href={product.link}
            className="text-white text-xs  hover:text-[#f1d59f]
              transition-colors duration-200"
          >
            <ExternalLinkIcon className="h-5 w-5 md:h-6 md:w-6" />
          </a>
        </div>
      </motion.div>

      {/* Animated Description */}
      <div
        ref={textRef}
        className="font-nbMono mt-3 md:mt-6 text-xs font-medium "
      >
        {lines.map((line, lineIndex) => (
          <div key={lineIndex} className="inline-block">
            {line.map((word, wordIndex) => {
              const wordIndexGlobal =
                lines.slice(0, lineIndex).flat().length + wordIndex;
              const progressStart = (wordIndexGlobal / totalWords) * 0.9;
              const progressEnd = ((wordIndexGlobal + 1) / totalWords) * 0.9;
              const delay = 0.1;

              const color = useTransform(
                scrollYProgress,
                [0, delay, delay + progressStart, delay + progressEnd],
                ["#6b7280", "#6b7280", "#6b7280", "#ffffff"]
              );

              return (
                <motion.span
                  key={`${lineIndex}-${wordIndex}`}
                  style={{ color }}
                  className="md:mt-[0.5rem] inline-block whitespace-pre-wrap mr-2"
                >
                  {word}
                </motion.span>
              );
            })}
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
