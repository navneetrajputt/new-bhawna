import React from "react";
import AnimatedButton from "@/app/components/Buttons/AnimatedButton";
import Link from "next/link";

const FutureSection = () => {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen px-5 py-20 text-center bg-gradient-to-br from-neutral-900 to-black text-white overflow-hidden"
    >
      {/* Glowing Animated Circle */}
      <div
        className="absolute top-1/2 left-1/2 rounded-full bg-blue-500/20 blur-[80px] animate-rotateGlow"
        style={{
          width: "clamp(250px, 80vw, 400px)",
          height: "clamp(250px, 80vw, 400px)",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-[clamp(2.5rem,8vw,3.5rem)] font-bold leading-tight mb-6 text-shadow-blue">
          The Future of Influencer Marketing Starts Here
        </h2>

        {/* Subheading */}
        <p className="text-[clamp(1.1rem,2.5vw,1.4rem)] opacity-90 max-w-3xl mx-auto leading-relaxed mb-10">
          Join the revolution and transform the way brands and influencers collaborate.
        </p>

        {/* CTA Button */}
        <Link
          href="https://app.networtyideas.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <AnimatedButton>Get Started</AnimatedButton>
        </Link>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes rotateGlow {
            0% {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            100% {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }
          .animate-rotateGlow {
            animation: rotateGlow 6s linear infinite;
          }
          .text-shadow-blue {
            text-shadow: 0px 0px 15px rgba(0, 153, 255, 0.5);
          }
        `}
      </style>
    </section>
  );
};

export default FutureSection;
