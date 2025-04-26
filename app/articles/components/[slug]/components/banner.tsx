"use client";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import React from "react";
import Image from "next/image";
import readingTime from "reading-time";
import { extractTextFromPostBody } from "../../post-reel";

const Banner = ({
  title,
  date,
  featuredImage, // Fallback image
  post,
}: {
  title: string;
  date: string;
  featuredImage: string;
  post: any;
}) => {
  const postBodyText = extractTextFromPostBody(post?.fields?.postBody);
  const readTime = readingTime(postBodyText).text;

  return (
    <div className="w-full relative text-white py-16 md:py-[4.5rem] overflow-hidden">
      {/* Background Featured Image */}
      <div className="absolute inset-0">
        <Image
          src={featuredImage}
          alt={`${title} featured image`}
          fill
          style={{ objectFit: "cover" }}
          className="opacity-80" // Optional: Adjust opacity for text readability
          priority
          quality={85}
        />
        {/* Optional overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <MaxWidthWrapper className="!md:px-12 !lg:px-12 relative z-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {/* Post Category */}
          <p className="text-xs uppercase tracking-wider text-white/90 mb-3">
            {"article"}
          </p>
          {/* Post Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 max-w-3xl">
            {title}
          </h1>
          {/* Post Date and Reading Time */}
          <p className="text-xs text-white/80 uppercase tracking-wider">
            {date} | {readTime}
          </p>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Banner;
