"use client";
import SuccessStoriesSection from "@/app/components/homePage/SuccessStoriesSection";
import { LucideIcon, Users, MessageCircle, BarChart } from "lucide-react";
import { motion } from "framer-motion";

// Feature Card Component
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number; // For staggered animations
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  delay = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-black/30 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-blue-500/50 hover:border-blue-500/80 backdrop-blur-md"
  >
    <div className="flex items-center mb-6">
      <Icon className="w-10 h-10 text-blue-400 mr-4" />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <p className="text-gray-300 leading-relaxed">{description}</p>
  </motion.div>
);

export default function BrandPage() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-32 relative overflow-hidden">
        {/* Glowing Background Effect */}
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6 drop-shadow-glow">
            Power Your Brand with Influencer-Driven Growth
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Reach the right audience with authentic micro-influencers and scale
            your brand&apos;s success.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transform hover:scale-105 transition-transform duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 py-24 -mt-20 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-16 drop-shadow-glow">
          Why Choose NetwortyIdeas?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Users}
            title="Data-Driven Matching"
            description="Get paired with influencers that align with your niche and brand values."
            delay={0.1}
          />
          <FeatureCard
            icon={MessageCircle}
            title="Performance-Based Campaigns"
            description="Track real-time analytics and measure campaign success."
            delay={0.2}
          />
          <FeatureCard
            icon={BarChart}
            title="Boost Brand Awareness"
            description="Leverage influencer credibility to maximize reach and engagement."
            delay={0.3}
          />
        </div>
      </section>

      {/* Success Stories Section */}
      <SuccessStoriesSection />

      {/* Call-to-Action Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black py-24 relative overflow-hidden">
        {/* Glowing Background Effect */}
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 drop-shadow-glow">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Sign up today and launch your first influencer campaign in minutes!
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transform hover:scale-105 transition-transform duration-300">
            Join NetwortyIdeas Now
          </button>
        </div>
      </section>
    </div>
  );
}