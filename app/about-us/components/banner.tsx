import MaxWidthWrapper from "@/components/max-width-wrapper";
import React from "react";

const Banner = () => {
  return (
    <div className="w-full relative bg-[#021a44] text-white py-16 md:py-[4.5rem] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#021a44] to-[#04306e] animate-gradient-bg opacity-90" />

      {/* Patterned Corners */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-Left Corner Pattern */}
        <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(255,255,255,0.1)_0%,_transparent_50%)] rounded-br-full" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,_rgba(255,255,255,0.05)_0%,_transparent_70%)] rounded-br-full" />
        </div>

        {/* Top-Right Corner Pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.1)_0%,_transparent_50%)] rounded-bl-full" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,_rgba(255,255,255,0.05)_0%,_transparent_70%)] rounded-bl-full" />
        </div>

        {/* Bottom-Left Corner Pattern */}
        <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(255,255,255,0.1)_0%,_transparent_50%)] rounded-tr-full" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,_rgba(255,255,255,0.05)_0%,_transparent_70%)] rounded-tr-full" />
        </div>

        {/* Bottom-Right Corner Pattern */}
        <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_rgba(255,255,255,0.1)_0%,_transparent_50%)] rounded-tl-full" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_90%,_rgba(255,255,255,0.05)_0%,_transparent_70%)] rounded-tl-full" />
        </div>
      </div>

      <MaxWidthWrapper className="!md:px-12 !lg:px-12 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Title */}
          <h2 className="text-5xl font-nbInternational  max-w-2xl text-white tracking-tight mb-5">
            Building the Future of Secure, Smart, and Scalable Digital Solutions
          </h2>
          {/* Subtitle */}
          {/* <p className="text-base text-white/90 max-w-lg mb-10">
          Building the Future of Secure, Smart, and Scalable Digital Solutions
          </p> */}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Banner;
