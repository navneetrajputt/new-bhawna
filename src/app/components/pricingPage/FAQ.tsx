"use client"
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Can I upgrade or downgrade my plan anytime?",
      answer: "Yes, you can switch plans anytime based on your needs.",
    },
    {
      question: "Do you offer a free trial?",
      answer: "Currently, we don’t have a free trial, but we do offer a money-back guarantee.",
    },
    {
      question: "Is there a refund policy?",
      answer: "Yes, we provide a 7-day money-back guarantee if you're not satisfied.",
    },
    {
      question: "Which plan is best for me?",
      answer:
        "Basic Plan is great for beginners. Pro Plan is ideal for influencers and growing brands. Enterprise Plan is perfect for large-scale businesses and agencies.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-colors duration-200 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                <ChevronDown
                  className={`w-6 h-6 text-gray-300 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === index && (
                <p className="text-gray-300 mt-2 transition-opacity duration-300">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
