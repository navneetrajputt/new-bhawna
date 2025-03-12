"use client";
import { LucideIcon, Users, DollarSign, TrendingUp, CheckCircle, Video, Target, BarChart } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SuccessStoriesSection from "@/app/components/homePage/SuccessStoriesSection";



// Feature Card Component
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, delay = 0 }) => (
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

export default function InfluencersPage() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mb-6 drop-shadow-glow"
          >
            Monetize Your Influence & Grow Your Brand
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Turn your passion into profit with NetwortyIdeas.com
          </motion.p>
        <Link
          href="https://app.networtyideas.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transform hover:scale-105 transition-transform duration-300"
          >
            Sign Up Now
          </motion.button>
        </Link>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="container mx-auto px-4 py-24 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-16 drop-shadow-glow"
        >
          Why Join NetwortyIdeas?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Users}
            title="Work with Leading Brands"
            description="Get exclusive collaboration opportunities from brands that align with your niche."
            delay={0.1}
          />
          <FeatureCard
            icon={DollarSign}
            title="Get Paid for Your Content"
            description="Secure fair compensation for the value you bring to brand campaigns."
            delay={0.2}
          />
          <FeatureCard
            icon={TrendingUp}
            title="Grow Your Influence"
            description="Expand your audience and visibility by working with reputed companies."
            delay={0.3}
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-16 drop-shadow-glow"
          >
            How It Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <FeatureCard
              icon={CheckCircle}
              title="Sign Up & Create Profile"
              description="Showcase your content, audience insights, and engagement stats."
              delay={0.1}
            />
            <FeatureCard
              icon={Target}
              title="Discover Campaigns"
              description="Get matched with brands that fit your content style and values."
              delay={0.2}
            />
            <FeatureCard
              icon={Video}
              title="Submit & Collaborate"
              description="Create high-quality content that aligns with brand expectations."
              delay={0.3}
            />
            <FeatureCard
              icon={DollarSign}
              title="Get Paid Securely"
              description="Receive timely payments for your contributions without hassle."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <SuccessStoriesSection />

      {/* Future of Influencer Marketing Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 drop-shadow-glow"
          >
            The Future of Influencer Marketing
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Video}
              title="Short-Form Dominance"
              description="Platforms like Youtube-Shorts and Instagram Reels are shaping brand partnerships."
              delay={0.1}
            />
            <FeatureCard
              icon={Target}
              title="Niche Content Wins"
              description="Brands prefer specialized creators with strong audience trust."
              delay={0.2}
            />
            <FeatureCard
              icon={BarChart}
              title="Performance Partnerships"
              description="Metrics like engagement and conversions are now key."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-6 drop-shadow-glow"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Join NetwortyIdeas.com today and unlock premium brand collaborations!
          </motion.p>
      <Link
        href="https://app.networtyideas.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transform hover:scale-105 transition-transform duration-300"
        >
          Sign Up Now
        </motion.button>
      </Link>
        </div>
      </section>
    </div>
  );
}