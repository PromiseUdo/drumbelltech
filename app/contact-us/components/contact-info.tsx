"use client";
import MaxWidthWrapper from "@/components/max-width-wrapper";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="w-full ">
      <MaxWidthWrapper className="py-4 md:py-12">
        <div>
          <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-12">
            <motion.div className="group flex items-center gap-4 border border-[#f1d59f] hover:bg-gray-50 p-4 rounded  transition-all duration-300">
              <FaLinkedin className="h-5 w-5 md:h-10 md:w-10 text-[#ffffff] flex-shrink-0 group-hover:text-[#1e1e1e]" />
              <div>
                <p className=" font-nbMono text-xs font-semibold text-white group-hover:text-[#1e1e1e]">
                  Linkedin
                </p>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-nbMono text-muted-foreground group-hover:text-[#1e1e1e] hover:text-safetyYellow text-xs "
                >
                  Follow us on Linkedin
                </a>
              </div>
            </motion.div>

            <motion.div className="group flex items-center gap-4 border border-[#f1d59f] hover:bg-gray-50 p-4 rounded  transition-all duration-300">
              <FaWhatsapp className="h-5 w-5 md:h-10 md:w-10 text-[#ffffff] flex-shrink-0 group-hover:text-[#1e1e1e]" />
              <div>
                <p className="font-nbMono text-xs font-semibold text-white group-hover:text-[#1e1e1e]">
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/+447899365494"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-nbMono group-hover:text-[#1e1e1e] text-muted-foreground hover:text-safetyYellow text-xs "
                >
                  +44 7899 365494
                </a>
              </div>
            </motion.div>
            <motion.div className="group flex items-center border border-[#f1d59f] gap-4 hover:bg-gray-50 p-4 rounded transition-all duration-300">
              <FaEnvelope className="group-hover:text-[#1e1e1e] h-5 w-5 md:h-10 md:w-10 text-[#ffffff] flex-shrink-0" />
              <div>
                <p className="font-nbMono group-hover:text-[#1e1e1e] text-xs font-semibold text-[#ffffff]">
                  Email
                </p>
                <a
                  href="mailto:info.gustoprofessionals@gmail.com"
                  className="font-nbMono group-hover:text-[#1e1e1e] text-muted-foreground  text-xs "
                >
                  fortuneokwu@gmail.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ContactInfo;
