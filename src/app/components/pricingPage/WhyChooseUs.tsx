import { Handshake, BarChart, TrendingUp, Wrench } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Handshake className="w-10 h-10 text-blue-300" />,
      title: "Seamless Collaboration",
      description: "Connect with brands and influencers effortlessly.",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: <BarChart className="w-10 h-10 text-purple-300" />,
      title: "Data-Driven Decisions",
      description: "Gain valuable insights to optimize your campaigns.",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-pink-300" />,
      title: "Scalable Plans",
      description: "Upgrade or downgrade anytime as per your needs.",
      color: "from-pink-400 to-pink-600",
    },
    {
      icon: <Wrench className="w-10 h-10 text-green-300" />,
      title: "Reliable Support",
      description: "Get assistance whenever you need it.",
      color: "from-green-400 to-green-600",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white flex justify-center items-center gap-3">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${feature.color} p-[2px] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <div className="bg-gray-900 rounded-2xl p-6 h-full flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
