"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Shield } from "lucide-react";

// Animation variants for the container and items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const WhyDrumbellTech = () => {
  const reasons = [
    {
      title: "UK-Based <br />Excellence",
      icon: <Award className="h-8 w-8 text-white" />,
      bgColor: "#FF6B6B", // Coral Red
      description:
        "We uphold the highest standards of quality, compliance, and innovation.",
    },
    {
      title: "Client-Centric <br />Approach",
      icon: <Users className="h-8 w-8 text-white" />,
      bgColor: "#4ECDC4", // Turquoise
      description:
        "From startups to large enterprises, we co-create solutions that align with your vision.",
    },
    {
      title: "Security <br />First",
      icon: <Shield className="h-8 w-8 text-white" />,
      bgColor: "#FFD93D", // Golden Yellow
      description:
        "Our cybersecurity expertise is built into everything we develop—so you can innovate with confidence.",
    },
  ];

  return (
    <div className="w-full py-12 md:py-16 bg-background ">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <h2 className="font-medium leading-relaxed text-5xl font-nbInternational tracking-tight text-[#1e1e1e] mb-4">
            <span className="text-white ">Why Choose Drumbell Tech?</span>
          </h2>
          <p className="font-nbMono text-xs text-muted-foreground max-w-2xl mx-auto mb-12">
            Partner with Drumbell Tech for innovative, secure, and
            client-focused technology solutions.
          </p>

          {/* Grid Layout for Reasons */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 max-w-4xl mx-auto">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group p-4 rounded-lg  transition-all duration-300"
              >
                {/* Icon Circle */}
                <div
                  className="flex items-center justify-center w-16 h-16 rounded-full shadow group-hover:shadow-md transition-transform duration-300 mb-4"
                  style={{ backgroundColor: reason.bgColor }}
                >
                  {reason.icon}
                </div>
                {/* Title */}
                <span
                  className="text-xs uppercase font-nbInternational font-semibold text-white mb-2 leading-tight"
                  dangerouslySetInnerHTML={{ __html: reason.title }}
                />
                {/* Description */}
                <p className="font-nbMono text-xs text-muted-foreground max-w-[200px]">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyDrumbellTech;
