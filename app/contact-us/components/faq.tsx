import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "What types of HSE training do you offer?",
      answer:
        "We offer a range of HSE courses, including Health & Safety, First Aid, ISO/Lead Auditor, and more. Check our Courses page for details.",
    },
    {
      question: "How can I register for a course?",
      answer:
        "You can register by filling out the contact form, emailing us, or sending a WhatsApp message. We’ll guide you through the process.",
    },
    {
      question: "Do you offer online or in-person training?",
      answer:
        "We provide both online and in-person training options, depending on the course. Contact us to discuss your preferences.",
    },
    {
      question: "What are your training locations?",
      answer:
        "Our primary training center is at 712, Al Fahad Plaza Building, Opposite KFC, Al Rigga Road, Al Rigga, Dubai. We also offer on-site training for businesses.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const AccordionContent = ({
    index,
    answer,
  }: {
    index: number;
    answer: string;
  }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
      if (contentRef.current) {
        setHeight(contentRef.current.scrollHeight);
      }
    }, [answer]);

    return (
      <AnimatePresence>
        {openFaq === index && (
          <motion.div
            id={`faq-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden bg-gray-50 text-[#1e1e1e]/80"
          >
            <div ref={contentRef} className="p-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <div className="w-full">
      <MaxWidthWrapper className="py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-[#1e1e1e] mb-6 text-center">
            Frequently Asked Questions
          </h3>
          <p className="text-base text-[#1e1e1e]/80 mb-8 text-center max-w-2xl mx-auto">
            Find answers to common questions about our training programs and
            contact process.
          </p>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-gray-100 rounded-lg overflow-hidden"
                initial={false}
              >
                <button
                  className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-all duration-300"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-${index}`}
                >
                  <span className="text-[#1e1e1e] font-medium">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-[#05418f]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#05418f]" />
                  )}
                </button>
                <AccordionContent index={index} answer={faq.answer} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Faq;
