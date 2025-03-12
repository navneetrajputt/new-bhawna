import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Main Content */}
      <main className="space-y-8">
        <h1 className="text-4xl font-bold text-center mb-6">About Networty Ideas</h1>

        <section className="text-center">
          <p className="text-xl text-gray-700">
            Revolutionizing Influencer-Brand Collaborations Through Strategic
            Partnerships
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <div className="text-gray-600">
            <p>
              Founded in 2023, Networty Ideas was born from the vision of creating
              meaningful, authentic, and data-driven collaborations between brands
              and influencers. From a humble start with a small group of creators,
              we have expanded into a thriving community across 50+ countries,
              driving over 10,000 successful collaborations.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <div className="text-gray-600">
            <p>We empower creators and brands with:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>🔗 Transparent and trusted partnership opportunities</li>
              <li>📊 Advanced AI-driven influencer-brand matching</li>
              <li>📈 Data-backed campaign performance insights</li>
              <li>🌍 Access to a global network of industry leaders</li>
              <li>💡 Creative solutions tailored for impactful branding</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">For Influencers</h3>
              <p className="text-gray-600">
                We provide access to premium brand partnerships, fair
                compensation, and valuable growth tools to help creators scale
                their impact.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">For Brands</h3>
              <p className="text-gray-600">
                AI-powered insights and seamless campaign management to ensure
                authentic, high-impact collaborations with the right creators.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Authenticity First</h3>
              <p className="text-gray-600">
                Genuine connections and meaningful content over mere promotions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Data-Driven Strategy</h3>
              <p className="text-gray-600">
                Leveraging analytics to create high-performing, scalable campaigns.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Community-Centric</h3>
              <p className="text-gray-600">
                Fostering long-term relationships that go beyond one-time deals.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">By The Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-gray-600">Successful Collaborations</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold">1M+</div>
              <div className="text-gray-600">Monthly Campaign Impressions</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold">98%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;