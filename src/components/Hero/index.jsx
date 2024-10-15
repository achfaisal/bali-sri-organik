import React from "react";
import Image from "next/image";

const Hero = ({ text, imageUrl }) => {
  // Split the description into paragraphs
  const paragraphs = text("description")
    .split("\n")
    .filter((paragraph) => paragraph.trim() !== "");

  return (
    <section>
      <div className="relative">
        {/* Background Image */}
        <Image
          src={imageUrl}
          alt="Background image"
          fill="true"
          priority // Optional: Loads this image as a priority
          className="z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-700/70 z-10"></div>

        {/* Content */}
        <div className="text-neutral-content text-center relative z-20 container mx-auto px-4">
          <div className="flex flex-col pt-48 pb-40">
            <h1 className="mb-16 text-5xl font-bold">{text("title")}</h1>
            <div className="">
              {paragraphs.map((paragraph, index) => (
                <p className="pb-5" key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
