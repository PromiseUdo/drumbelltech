"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants for the image and text
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <div className="w-full  py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Image */}
          <div className="relative w-full h-[16rem] md:h-[20rem] lg:h-full rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/about-us.jpg" // Replace with your image path
              alt="drumbell tech"
              fill
              className="object-cover"
              priority // Load eagerly since this is above the fold
            />
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Right: Text */}
          <div className="flex flex-col justify-center space-y-4 lg:pl-8">
            {/* <h2 className="font-medium text-white text-3xl tracking-tight ">
              Building the Future of Secure, Smart, and Scalable Digital
              Solutions
            </h2> */}
            <p className="leading-relaxed font-nbMono text-xs text-muted-foreground">
              At Drumbell Technologies, we’re not just developing software—we’re
              shaping the future.
            </p>
            <p className="leading-relaxed font-nbMono text-xs text-muted-foreground">
              Founded in the United Kingdom, our company is dedicated to
              delivering world-class web and mobile applications, cybersecurity
              services, and digital marketing solutions tailored to meet the
              evolving needs of businesses and communities across the globe.
            </p>
            <p className="leading-relaxed font-nbMono text-xs text-muted-foreground">
              Whether you're launching a fintech product, scaling your digital
              presence, or safeguarding your infrastructure, Drumbell
              Technologies is the partner you can rely on.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
