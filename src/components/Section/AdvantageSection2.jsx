"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ImageGallery from "@/components/Section/ImageGallery";
import BackgroundImage from "next/image";
import BackgroundBlurSection from "@/components/Section/BackgroundBlurSection";
import { useTranslations } from "next-intl";

const AdvantageSection2 = () => {
  const t = useTranslations();
  const advantage = t.raw("HomeSectionTwo.advantage");

  const images = [
    "/images/advantages-icon/1.png",
    "/images/advantages-icon/2.png",
    "/images/advantages-icon/3.png",
    "/images/advantages-icon/4.png",
    "/images/advantages-icon/5.png",
  ];

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
            {advantage.map((data, index) => (
              <div className="p-6 rounded-2xl shadow-md" key={index}>
                <Image
                  src={images[index]}
                  alt="advantage-icon"
                  height={60}
                  width={60}
                  className="pb-2"
                />
                <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
                <div>
                  <p>{data.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AdvantageSection2;
