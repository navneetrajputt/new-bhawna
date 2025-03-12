"use client";
import { LucideIcon, UserPlus, Search, Rocket, CreditCard, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

// StepCard Component
interface StepCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

const StepCard: React.FC<StepCardProps> = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-black/40 backdrop-blur-md p-6 rounded-xl shadow-lg border border-blue-500/20 hover:shadow-blue-500/30 hover:border-blue-500/50 transition-all text-left"
  >
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 flex items-center justify-center bg-blue-500/10 rounded-lg">
        <Icon className="w-7 h-7 text-blue-400" />
      </div>
      <h3 className="text-xl font-semibold text-white ml-4">{title}</h3>
    </div>
    <p className="text-gray-300 text-base leading-relaxed">{description}</p>
  </motion.div>
);

const HowItWorksSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      {/* Glowing Background Effect */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-14 drop-shadow-lg"
        >
          How It Works
        </motion.h2>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <StepCard
            icon={UserPlus}
            title="Sign Up"
            description="Create your profile and set your goals."
            delay={0.1}
          />
          <StepCard
            icon={Search}
            title="Find Matches"
            description="AI-powered suggestions for collaborations."
            delay={0.2}
          />
          <StepCard
            icon={Rocket}
            title="Launch Campaigns"
            description="Streamline your workflow with approvals."
            delay={0.3}
          />
          <StepCard
            icon={CreditCard}
            title="Secure Payments"
            description="Fair compensation guaranteed."
            delay={0.4}
          />
          <StepCard
            icon={TrendingUp}
            title="Optimize & Scale"
            description="Use analytics to improve and grow."
            delay={0.5}
          />
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <Link
            href="https://app.networtyideas.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-medium hover:bg-blue-600 transition-all"
          >
            <span className="mr-2">Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
