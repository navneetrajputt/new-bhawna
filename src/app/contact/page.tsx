"use client";
import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-6 my-24">
      <h1 className="text-5xl font-bold mb-8 text-gray-800 animate-fade-in">
        Contact Us
      </h1>
      <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-md w-full transform transition-all hover:scale-105 duration-300">
        <p className="text-lg mb-6 text-gray-600">
          Have questions or want to get in touch? We&apos;d love to hear from you!
        </p>

        {/* Email Section */}
        <div className="mb-6">
          <h2 className="font-semibold text-gray-700">Email:</h2>
          <a
            href="mailto:contact@networtyideas.com"
            className="text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200"
          >
            contact@networtyideas.com
          </a>
        </div>

        {/* Phone Section */}
        <div className="mb-8">
          <h2 className="font-semibold text-gray-700">Phone:</h2>
          <a
            href="tel:+919779773919"
            className="text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200"
          >
            +91 9779773919
          </a>
        </div>

        {/* Contact Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows={4}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;