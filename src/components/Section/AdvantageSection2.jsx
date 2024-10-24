"use client";

import { useState } from "react";
import Link from "next/link";

const AdvantageSection2 = () => {
  return (
    <>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center">
          <div className="lg:w-1/2 lg:text-left text-center lg:mr-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
              Keunggulan Pertanian Organik Bali
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Choosing Bali Sri Organik means investing in a vision for a
              sustainable future, where the rich cultural heritage and unique
              resources of Bali converge to create unparalleled opportunities in
              organic farming.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 lg:w-1/2">
            {/* Language Understanding */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Language Understanding
              </h3>
              <p className="text-gray-700">
                SmartAssist harnesses the power of advanced Natural Language
                Processing (NLP) to understand and interpret human language
                seamlessly.
              </p>
            </div>

            {/* Intelligent Virtual Assistant */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Intelligent Virtual Assistant
              </h3>
              <p className="text-gray-700">
                Meet IntelliConnect, your AI-driven personal assistant. It
                organizes your schedule, answers questions, and adapts to your
                preferences.
              </p>
            </div>

            {/* Personalized User Experience */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Personalized User Experience
              </h3>
              <p className="text-gray-700">
                Discover IntelliConnect: personalized tech that learns from you,
                tailoring content and streamlining tasks for a unique user
                experience.
              </p>
            </div>

            {/* Voice Command Capabilities */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Voice Command Capabilities
              </h3>
              <p className="text-gray-700">
                Effortlessly command your digital world with IntelliConnect's
                speech recognition. Speak for messaging, calls, and tasks – your
                voice is the key.
              </p>
            </div>

            {/* Point 5 */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Voice Command Capabilities
              </h3>
              <p className="text-gray-700">
                Effortlessly command your digital world with IntelliConnect's
                speech recognition. Speak for messaging, calls, and tasks – your
                voice is the key.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdvantageSection2;
