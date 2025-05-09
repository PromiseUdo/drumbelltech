import MaxWidthWrapper from "@/components/max-width-wrapper";
import React from "react";

const OurImpact = () => {
  const metrics = [
    { number: "180+", text: "HSE professionals deployed across 6 countries" },
    { number: "93%", text: "Client retention across multi-year contracts" },
    {
      number: "0",
      text: "Reportable incidents linked to our trained operatives in the last 24 months",
    },
    {
      number: "8",
      text: "Major projects supported under 30-day mobilisation SLA",
    },
  ];

  return (
    <div className="relative w-full bg-white text-[#1e1e1e]">
      <MaxWidthWrapper className="!md:px-12 py-12 !lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Text Section */}
          <div className="w-full space-y-4">
            <h2 className="text-3xl tracking-tight">Our Impact</h2>
            <p className="text-base">
              Gusto Professionals is a leader in HSE training and deployment,
              delivering measurable results across industries worldwide.
            </p>
            <p className="text-base">
              Our commitment to excellence ensures safety, compliance, and
              operational success for our clients, no matter the challenge.
            </p>
          </div>

          {/* Right: Metrics Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="relative bg-[#04306e] text-white rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md p-6 transform transition-all duration-300 shadow-lg hover:shadow-xl flex items-center flex-col justify-center overflow-hidden"
                style={{
                  boxShadow:
                    "8px 8px 15px rgba(0, 0, 0, 0.3), -4px -4px 10px rgba(255, 255, 255, 0.1)",
                  background:
                    "radial-gradient(circle at 50% 50%, #04306e 30%, #021a44 100%)", // Darker edges
                }}
              >
                {/* Subtle Inner Glow */}
                <div
                  className="absolute inset-0 opacity-20 hover:opacity-30 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.4), transparent 70%)",
                  }}
                />
                {/* Darker Edge Overlay (Enhanced on Hover) */}
                <div
                  className="absolute inset-0 opacity-50 hover:opacity-40 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, transparent 40%, #021a44 90%)",
                  }}
                />

                <h3 className="text-center text-4xl font-medium mb-2 relative z-10">
                  {metric.number}
                </h3>
                <p className="text-[#17f30e] text-center text-sm md:text-base leading-relaxed relative z-10">
                  {metric.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default OurImpact;
