"use client";
import React from "react";

interface PricingTier {
  name: string;
  price: string;
  features: string[];
  accentColor: string;
}

const PricingCards = () => {
  const pricingTiers: PricingTier[] = [
    {
      name: "Basic Plan",
      price: "₹0/month",
      features: [
        "Access to basic features",
        "Email support",
        "Community access",
        "Basic brand collaboration tools",
      ],
      accentColor: "from-blue-400 to-blue-600",
    },
    {
      name: "Pro Plan",
      price: "₹99/month",
      features: [
        "All basic features",
        "Priority support",
        "Advanced analytics",
        "Influencer insights",
        "Brand collaboration dashboard",
      ],
      accentColor: "from-purple-400 to-purple-600",
    },
    {
      name: "Enterprise Plan",
      price: "₹999/month",
      features: [
        "All pro features",
        "Dedicated account manager",
        "24/7 support",
        "Automated contract management",
        "Exclusive brand deals and insights",
      ],
      accentColor: "from-pink-400 to-pink-600",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen mt-[80px]">
      {pricingTiers.map((tier, index) => (
        <div
          key={index}
          className={`relative bg-gradient-to-br ${tier.accentColor} p-[2px] rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 group hover:shadow-2xl hover:shadow-[${tier.accentColor.replace("from-", "").replace("to-", "")}]`}
        >
          {/* Glow Effect */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${tier.accentColor} rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
          />
          {/* Card Content */}
          <div className="bg-gray-900 rounded-2xl p-8 w-80 relative">
            {/* Gradient Text for Tier Name */}
            <h2
              className={`text-2xl font-bold mb-4 bg-gradient-to-r ${tier.accentColor} bg-clip-text text-transparent`}
            >
              {tier.name}
            </h2>
            {/* Price */}
            <p className="text-3xl font-bold mb-6 text-white">{tier.price}</p>
            {/* Features List */}
            <ul className="space-y-3 mb-8">
              {tier.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className="text-gray-300 text-sm p-3 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800 transition-colors duration-200"
                >
                  {feature}
                </li>
              ))}
            </ul>
            {/* Choose Plan Button */}
            <button
              className={`w-full py-3 font-semibold rounded-lg bg-gradient-to-r ${tier.accentColor} text-white hover:opacity-90 transition-opacity duration-200`}
            >
              Choose Plan
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingCards;