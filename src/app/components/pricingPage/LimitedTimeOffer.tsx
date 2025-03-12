"use client"
import { Rocket, Target } from "lucide-react";
import Link from "next/link";

const LimitedTimeOffer = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
      <div className="container mx-auto px-4 text-center">
        {/* Heading with Animated Rocket Icon */}
        <h2 className="text-4xl font-bold mb-4 text-white flex justify-center items-center gap-2">
          <Rocket className="w-8 h-8 text-yellow-300 animate-bounce" />
          Join today and get <span className="text-yellow-300">10% off</span> your first month!
        </h2>

        {/* Subtitle with Target Icon */}
        <p className="text-xl mb-8 text-gray-200 flex justify-center items-center gap-2">
          <Target className="w-6 h-6 text-green-300 animate-pulse" />
          Ready to scale your brand collaborations? Choose your plan now!
        </p>

        {/* Call-to-Action Button */}
        <Link
            href="https://app.networtyideas.com"
            target="_blank"
            rel="noopener noreferrer"
          >
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300">
          Get Started
        </button>
        </Link>
      </div>
    </section>
  );
};

export default LimitedTimeOffer;
