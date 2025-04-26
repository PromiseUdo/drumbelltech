"use client";

import { Smartphone, ShieldCheck, Bug, Megaphone } from "lucide-react";

const services = [
  {
    title: "App Development",
    description: "Web and Mobile Apps to drive your business goals",
    icon: Smartphone,
  },
  {
    title: "Cyber Security Analysis",
    description:
      "Analysis of your computer networks and provide robust security",
    icon: ShieldCheck,
  },
  {
    title: "Penetration Testing",
    description: "Boosts your network security, uncover loopholes in networks",
    icon: Bug,
  },
  {
    title: "Digital Marketing",
    description:
      "Reach out your online audience with well-crafted media strategies",
    icon: Megaphone,
  },
];

export default function Services() {
  return (
    <div className="w-full overflow-hidden py-16 bg-background relative">
      <h2 className="text-[#f1d59f] text-lg tracking-wide mb-8">
        Our Services
      </h2>

      <div className="marquee-wrapper group">
        <div className="marquee-track group-hover:[animation-play-state:paused]">
          {[...services, ...services].map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="w-[300px] mx-4 mt-0.5 px-4 h-[350px] border border-[#f1d59f] rounded-2xl bg-transparent backdrop-blur-sm flex flex-col justify-center items-start"
              >
                <Icon className="w-[50px] h-[50px] text-white mb-4" />
                <h3 className="text-[#f1d59f] font-semibold text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-white text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .marquee-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: scroll-reverse 30s linear infinite;
        }

        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .service-box {
          flex-shrink: 0;
        }
      `}</style>
    </div>
  );
}
