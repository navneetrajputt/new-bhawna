"use client"
import Hero from "@/app/components/homePage/Hero";
import UserCards from "@/app/components/homePage/UseCard";
import WhyChooseSection from "@/app/components/homePage/WhyChooseSection";
import HowItWorksSection from "@/app/components/homePage/HowItWorksSection";
import SuccessStoriesSection from "@/app/components/homePage/SuccessStoriesSection";
import FutureSection from "@/app/components/homePage/FutureSection";
import CallToActionSection from "@/app/components/homePage/CallToActionSection";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <Hero />
      
      <WhyChooseSection />
      <FutureSection />
      <HowItWorksSection />
      <UserCards />
      <SuccessStoriesSection />
      <CallToActionSection />
     </div>
  );
}
