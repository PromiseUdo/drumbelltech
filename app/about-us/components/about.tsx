"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <div className="w-full py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
        >
          {/* Left: Image */}
          <motion.div
            variants={imageVariants}
            className="relative w-full h-[16rem] md:h-[20rem] lg:h-full rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src="/about-us.jpg"
              alt="Drumbell Technologies team"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            variants={textVariants}
            className="flex flex-col justify-center space-y-4 lg:pl-8"
          >
            <h2 className="font-nbInternational text-3xl text-white leading-tight">
              Building the Future of Secure, Smart Digital Solutions
            </h2>
            <p className="leading-relaxed font-nbMono text-xs text-muted-foreground">
              At Drumbell Technologies, we&apos;re not just developing
              software — we&apos;re shaping the future.
            </p>
            <p className="leading-relaxed font-nbMono text-xs text-muted-foreground">
              Founded in the United Kingdom, our company is dedicated to
              delivering world-class web and mobile applications, cybersecurity
              services, and digital marketing solutions tailored to meet the
              evolving needs of businesses and communities across the globe.
            </p>
            <p className="leading-relaxed font-nbMono text-xs text-muted-foreground">
              Whether you&apos;re launching a fintech product, scaling your
              digital presence, or safeguarding your infrastructure, Drumbell
              Technologies is the partner you can rely on.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
