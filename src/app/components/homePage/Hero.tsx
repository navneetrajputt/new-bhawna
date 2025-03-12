"use client";
import React from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-black text-white text-center px-5 py-20 overflow-hidden">
      {/* Glowing Animated Circle */}
      <div className="absolute top-1/2 left-1/2 w-[clamp(250px,80vw,400px)] h-[clamp(250px,80vw,400px)] bg-blue-500/20 rounded-full blur-[80px] animate-spin-slow -translate-x-1/2 -translate-y-1/2" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-[clamp(2.5rem,8vw,3.5rem)] font-bold leading-tight mb-6 drop-shadow-lg">
          Welcome to <span className="text-[#0099FF]">NetwortyIdeas</span>
        </h1>

        {/* Subheading */}
        <p className="text-[clamp(1.1rem,2.5vw,1.4rem)] max-w-3xl mx-auto opacity-90 leading-relaxed mb-10">
          Connecting influencers with brands for amazing collaborations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="https://app.networtyideas.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#0099FF] text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Join as Influencer
          </Link>

          <Link
            href="https://app.networtyideas.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border-2 border-[#0099FF] text-white font-semibold rounded-lg shadow-md hover:bg-[#0099FF]/20 transition-all duration-300"
          >
            Brand Sign Up
          </Link>
        </div>
      </div>

      {/* Tailwind-based Animation */}
      <style>
        {`
          @layer utilities {
            @keyframes spin-slow {
              from { transform: translate(-50%, -50%) rotate(0deg); }
              to { transform: translate(-50%, -50%) rotate(360deg); }
            }
            .animate-spin-slow {
              animation: spin-slow 6s linear infinite;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
