import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import React from "react";

const Banner = () => {
  return (
    <div
      className="w-full relative text-white py-12 md:py-16 overflow-hidden"
      style={{
        backgroundImage: "url('/contact1.jpg')", // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000] to-[#000000] animate-gradient-bg opacity-80" />

      {/* Patterned Corners */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(255,255,255,0.1)_0%,_transparent_50%)] rounded-br-full" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,_rgba(255,255,255,0.05)_0%,_transparent_70%)] rounded-br-full" />
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.1)_0%,_transparent_50%)] rounded-bl-full" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,_rgba(255,255,255,0.05)_0%,_transparent_70%)] rounded-bl-full" />
        </div>
        <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(255,255,255,0.1)_0%,_transparent_50%)] rounded-tr-full" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,_rgba(255,255,255,0.05)_0%,_transparent_70%)] rounded-tr-full" />
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_rgba(255,255,255,0.1)_0%,_transparent_50%)] rounded-tl-full" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_90%,_rgba(255,255,255,0.05)_0%,_transparent_70%)] rounded-tl-full" />
        </div>
      </div>

      <MaxWidthWrapper className="!px-4 md:!px-12 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Title */}
          <h2 className="font-nbInternational text-5xl max-w-2xl text-white tracking-tight mb-5">
            Get in Touch
          </h2>
          {/* Subtitle */}
          <p className="font-nbMono text-xs text-muted-foreground max-w-lg mb-8">
            Have questions about our sservices or your project? Contact us today
            for personalized guidance and support.
          </p>
          {/* CTA Button */}
          {/* <Button
            asChild
            size="lg"
            className="text-white bg-[#05418f] hover:bg-[#04306e]"
          >
            <a href="#contact-form">Contact Us Now</a>
          </Button> */}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Banner;
