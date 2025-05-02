"use client";
import MaxWidthWrapper from "@/components/max-width-wrapper";

import { motion } from "framer-motion";
import { FaEnvelope, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="w-full ">
      <MaxWidthWrapper className="py-4 md:py-12">
        <div>
          <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-12">
            <motion.div className="group flex items-center gap-4 border border-[#f1d59f] hover:bg-gray-50 p-4 rounded  transition-all duration-300">
              <FaFacebookF className="h-6 w-6 md:h-10 md:w-10 text-[#ffffff] flex-shrink-0 group-hover:text-[#1e1e1e]" />
              <div>
                <p className="text-sm font-semibold text-white group-hover:text-[#1e1e1e]">
                  Facebook
                </p>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground group-hover:text-[#1e1e1e] hover:text-safetyYellow text-sm "
                >
                  Follow us on Facebook
                </a>
              </div>
            </motion.div>

            <motion.div className="group flex items-center gap-4 border border-[#f1d59f] hover:bg-gray-50 p-4 rounded  transition-all duration-300">
              <FaWhatsapp className="h-6 w-6 md:h-10 md:w-10 text-[#ffffff] flex-shrink-0 group-hover:text-[#1e1e1e]" />
              <div>
                <p className="text-sm font-semibold text-white group-hover:text-[#1e1e1e]">
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/+447899365494"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group-hover:text-[#1e1e1e] text-muted-foreground hover:text-safetyYellow text-sm "
                >
                  +44 7899 365494
                </a>
              </div>
            </motion.div>
            <motion.div className="group flex items-center border border-[#f1d59f] gap-4 hover:bg-gray-50 p-4 rounded transition-all duration-300">
              <FaEnvelope className="group-hover:text-[#1e1e1e] h-6 w-6 md:h-10 md:w-10 text-[#ffffff] flex-shrink-0" />
              <div>
                <p className="group-hover:text-[#1e1e1e] text-sm font-semibold text-[#ffffff]">
                  Email
                </p>
                <a
                  href="mailto:info.gustoprofessionals@gmail.com"
                  className="group-hover:text-[#1e1e1e] text-muted-foreground  text-sm "
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
