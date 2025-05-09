"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react"; // Only import used icons
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  EmailIcon,
} from "react-share";

const Header = ({ title = "Default Blog Title" }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [postUrl, setPostUrl] = useState("");

  // Get current URL on client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      setPostUrl(window.location.href); // Get the full URL of the current page
    }
  }, []);

  // Calculate scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="border-b border-gray-900 sticky top-16 z-20 bg-background shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Left: Back Button and Title */}
        <div className="flex items-center gap-2 md:gap-5">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-2 text-white" />

            <h2 className="font-nbMono md:hidden text-sm text-[#f1d59f] truncate max-w-[80%] sm:max-w-[90%]">
              Go back
            </h2>
          </Link>

          {/* Post Title */}
          <h2 className="font-nbMono hidden md:block text-sm text-[#f1d59f]  truncate max-w-[80%] sm:max-w-[90%]">
            {title}
          </h2>
        </div>

        {/* Right: Social Share Icons */}
        <div className="flex items-center space-x-3">
          <LinkedinShareButton url={postUrl} title={title}>
            <LinkedinIcon size={28} round />
          </LinkedinShareButton>
          <TwitterShareButton url={postUrl} title={title}>
            <TwitterIcon size={28} round />
          </TwitterShareButton>
          <FacebookShareButton url={postUrl}>
            <FacebookIcon size={28} round />
          </FacebookShareButton>
          <EmailShareButton
            url={postUrl}
            subject={title}
            body={`Check out this blog post: ${postUrl}`}
          >
            <EmailIcon size={28} round />
          </EmailShareButton>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative w-full h-0.5">
        <div
          className="absolute top-0 left-0 h-full bg-blue-600 transition-all duration-200"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </div>
  );
};

export default Header;
