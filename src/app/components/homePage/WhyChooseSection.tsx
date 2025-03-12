"use client";
import { LucideIcon, Users, BarChart, Shield, TrendingUp, BookOpen, Network } from "lucide-react";
import { motion } from "framer-motion";

// FeatureCard Component
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number; // For staggered animations
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-black/30 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-blue-500/50 hover:border-blue-500/80"
  >
    <div className="flex items-center mb-6">
      {/* Icon with Glow Effect */}
      <div className="w-12 h-12 flex items-center justify-center bg-blue-500/10 rounded-lg">
        <Icon className="w-8 h-8 text-blue-400 drop-shadow-glow" />
      </div>
      <h3 className="text-2xl font-semibold text-white ml-4">{title}</h3>
    </div>
    <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
  </motion.div>
);

const WhyChooseSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-black text-white py-20 px-6 text-center relative overflow-hidden">
      {/* Glowing Background Effect */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-5xl font-bold mb-16 text-white drop-shadow-glow relative"
      >
        Why Choose <span className="text-blue-400">NetwortyIdeas?</span>
      </motion.h2>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        <FeatureCard icon={Users} title="Seamless Matching" description="Connect with the right partners for successful collaborations." delay={0.1} />
        <FeatureCard icon={BarChart} title="Data-Driven Campaigns" description="Track performance, engagement, and ROI to optimize your efforts." delay={0.2} />
        <FeatureCard icon={Shield} title="Secure Transactions" description="Hassle-free payment processing ensures timely and fair compensation." delay={0.3} />
        <FeatureCard icon={TrendingUp} title="Scalable Growth" description="Elevate your marketing strategy with scalable influencer collaborations." delay={0.4} />
        <FeatureCard icon={BookOpen} title="Exclusive Insights" description="Access in-depth industry reports, case studies, and expert tips." delay={0.5} />
        <FeatureCard icon={Network} title="Community & Networking" description="Join a growing community of influencers and brands." delay={0.6} />
      </div>
    </section>
  );
};

export default WhyChooseSection;