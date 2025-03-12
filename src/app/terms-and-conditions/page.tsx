"use client";

import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Terms and Conditions
      </h1>

      {/* Sections */}
      {[
        {
          title: "Introduction",
          content:
            "Welcome to Networty Ideas! These Terms and Conditions govern your use of our platform and services. By accessing or using our platform, you agree to comply with and be bound by these terms. If you do not agree with any part of these terms, you must not use our services.",
        },
        {
          title: "User Responsibilities",
          content: (
            <>
              <p className="mb-4">
                As a user of Networty Ideas, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Provide accurate and complete information when registering or using our services.</li>
                <li>Use the platform only for lawful purposes and in compliance with all applicable laws.</li>
                <li>Not engage in any activity that disrupts or interferes with the platform&apos;s functionality.</li>
                <li>Respect the intellectual property rights of Networty Ideas and other users.</li>
              </ul>
            </>
          ),
        },
        {
          title: "Intellectual Property",
          content:
            "All content, trademarks, logos, and software on the Networty Ideas platform are the property of Networty Ideas or its licensors. You may not use, reproduce, or distribute any content from the platform without prior written permission.",
        },
        {
          title: "Limitations of Liability",
          content: (
            <>
              <p>
                Networty Ideas shall not be liable for any indirect, incidental, or consequential damages arising out of your use of the platform. This includes, but is not limited to, loss of data, loss of profits, or business interruption.
              </p>
              <p>
                Our total liability to you for any claims arising from your use of the platform shall not exceed the amount you paid to us, if any, in the last 12 months.
              </p>
            </>
          ),
        },
        {
          title: "Termination",
          content: (
            <>
              <p>
                Networty Ideas reserves the right to terminate or suspend your access to the platform at any time, without notice, for any reason, including but not limited to a breach of these terms.
              </p>
              <p>
                Upon termination, your right to use the platform will immediately cease, and you must cease all use of the platform and any content obtained from it.
              </p>
            </>
          ),
        },
        {
          title: "Governing Law",
          content:
            "These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be resolved exclusively in the courts of India.",
        },
        {
          title: "Changes to Terms",
          content:
            "Networty Ideas reserves the right to modify or update these Terms and Conditions at any time. We will notify you of any changes by posting the updated terms on our platform. Your continued use of the platform after such changes constitutes your acceptance of the new terms.",
        },
        {
          title: "Contact Us",
          content: (
            <>
              <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
              <p>
                Email: {" "}
                <a
                  href="mailto:terms@networtyideas.com"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  terms@networtyideas.com
                </a>
              </p>
            </>
          ),
        },
      ].map((section, index) => (
        <section key={index} className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">{section.title}</h2>
          <div className="text-gray-600">{section.content}</div>
        </section>
      ))}
    </div>
  );
}