"use client";
import React, { useState, useRef, useEffect } from "react";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Facebook,
  MessageCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Banner from "./components/banner";
import Faq from "./components/faq";
import ContactFormAndMap from "./components/contact-form-and-map";
import ContactInfo from "./components/contact-info";

const Contact = () => {
  return (
    <div className=" border-b border-gray-300 flex flex-col items-center w-full bg-background">
      {/* Banner */}
      <Banner />

      {/* Contact Form and Map */}
      <ContactFormAndMap />

      {/* Contact Information */}

      <ContactInfo />

      {/* <Faq /> */}
    </div>
  );
};

export default Contact;
