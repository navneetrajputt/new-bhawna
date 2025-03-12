"use client";

import React from "react";
import SuccessStoriesSection from "@/app/components/homePage/SuccessStoriesSection"; // Adjust the import path as needed

export default function Privacypolicy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Privacy Policy</h1>

      {/* Privacy Policy Content */}
      <section className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Introduction</h2>
        <p className="text-gray-600 mb-6">
          At Networty Ideas, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and share your data when you use our platform.
        </p>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Data Collection</h2>
        <p className="text-gray-600 mb-4">
          We collect the following types of information:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
          <li>Personal Information: Name, email address, phone number, and payment details.</li>
          <li>Usage Data: Information about how you interact with our platform, such as pages visited and features used.</li>
          <li>Cookies: We use cookies to enhance your experience and analyze platform usage.</li>
        </ul>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">How We Use Your Data</h2>
        <p className="text-gray-600 mb-4">
          Your data is used for the following purposes:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
          <li>To provide and improve our services.</li>
          <li>To personalize your experience on our platform.</li>
          <li>To communicate with you about updates, promotions, and support.</li>
          <li>To analyze platform usage and optimize performance.</li>
        </ul>
      </section>

      {/* Facebook Ads Section */}
      <section className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Facebook Ads and Data Sharing</h2>
        <p className="text-gray-600 mb-4">
          When you use our platform, we may share anonymized data with Facebook to deliver targeted ads. This includes:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
          <li>Demographic information (e.g., age, gender, location).</li>
          <li>Behavioral data (e.g., interests, platform interactions).</li>
        </ul>
        <p className="text-gray-600 mb-4">
          This data is used to ensure that you see relevant ads and to measure the effectiveness of our campaigns. We do not share personally identifiable information (PII) without your consent.
        </p>
      </section>

      {/* Data Sharing with Brands */}
      <section className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Data Sharing with Brands</h2>
        <p className="text-gray-600 mb-4">
          To facilitate collaborations, we may share the following data with brands:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
          <li>Performance Metrics: Campaign results, engagement rates, and audience demographics.</li>
          <li>Content Data: Posts, stories, and other content created as part of collaborations.</li>
          <li>Contact Information: Only with your explicit consent, we may share your email or social media handles.</li>
        </ul>
        <p className="text-gray-600 mb-4">
          We ensure that all data sharing complies with applicable privacy laws and our internal data protection policies.
        </p>
      </section>

      {/* User Rights */}
      <section className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Your Rights</h2>
        <p className="text-gray-600 mb-4">
          You have the right to:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
          <li>Access and review your personal data.</li>
          <li>Request corrections or deletions of your data.</li>
          <li>Opt-out of data sharing with third parties.</li>
          <li>Withdraw consent for data processing at any time.</li>
        </ul>
        <p className="text-gray-600 mb-4">
          To exercise these rights, please contact us at{" "}
          <a href="mailto:privacy@networtyideas.com" className="text-blue-500 hover:underline">
            privacy@networtyideas.com
          </a>.
        </p>
      </section>

      {/* Influencer Testimonials */}
      <section className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">What Our Influencers and brands Say</h2>
        <SuccessStoriesSection />
      </section>

      {/* Contact Information */}
      <section className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Contact Us</h2>
        <p className="text-gray-600 mb-4">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p className="text-gray-600">
          Email:{" "}
          <a href="mailto:privacy@networtyideas.com" className="text-blue-500 hover:underline">
            privacy@networtyideas.com
          </a>
        </p>
      </section>
    </div>
  );
}