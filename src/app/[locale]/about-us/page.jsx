"use client";

import React from "react";
import Hero from "@/components/Hero";
import Image from "next/image";
import { useTranslations } from "next-intl";
import NavigationPaginationSwiper from "@/components/Swiper/NavigationPaginationSwiper";
import CardWithBody from "@/components/Card/CardWithBody";
import CardWithoutBody from "@/components/Card/CardWithoutBody";
import LeftImageSection from "@/components/Section/LeftImageSection";
import BackgroundBlurSection from "@/components/Section/BackgroundBlurSection";
import ImageGallery from "@/components/Section/ImageGallery";

const AboutUs = () => {
  const aboutUs = useTranslations("AboutUs");
  const certificate = useTranslations().raw("Certificate");
  console.log(certificate);
  const SlideData = [
    {
      id: "gallery_1",
      name: "Lorem ipsum",
      imageUrl: "/images/visi.jpg",
    },
    {
      id: "gallery_2",
      name: "Lorem ipsum",
      imageUrl: "/images/visi.jpg",
    },
    {
      id: "gallery_3",
      name: "Lorem ipsum",
      imageUrl: "/images/visi.jpg",
    },
    {
      id: "gallery_4",
      name: "Lorem ipsum",
      imageUrl: "/images/visi.jpg",
    },
    {
      id: "gallery_5",
      name: "Lorem ipsum",
      imageUrl: "/images/visi.jpg",
    },
    {
      id: "gallery_6",
      name: "Lorem ipsum",
      imageUrl: "/images/visi.jpg",
    },
  ];

  return (
    <div className="mt-[-5rem]">
      <Hero
        title={aboutUs("title")}
        text={aboutUs("description")}
        imageUrl={"/images/background-products.png"}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <LeftImageSection data={aboutUs} />
      </div>

      <BackgroundBlurSection>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-semibold text-4xl pt-16">
              {aboutUs("Raw-material")}
            </h1>
            <p className="py-10">{aboutUs("Raw-material-description")}</p>
          </div>
          <div className="">
            <ImageGallery
              data={SlideData}
              renderComponent={(slide) => <CardWithoutBody props={slide} />}
            />
          </div>
        </div>
        <div className="divider m-0 text-white before:bg-white/20 after:bg-white/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-semibold text-4xl pt-16">
              {aboutUs("Farming-tools")}
            </h1>
            <p className="py-10">{aboutUs("Farming-tools-description")}</p>
          </div>
          <div className="">
            <ImageGallery
              data={SlideData}
              renderComponent={(slide) => <CardWithoutBody props={slide} />}
            />
          </div>
        </div>
      </BackgroundBlurSection>

      <div className="container mx-auto px-4 py-20 text-center">
        <div>
          <h1 className="text-4xl font-semibold">{aboutUs("Certificate")}</h1>
          <p className="py-8">{aboutUs("Certificate-description")}</p>
          <ImageGallery
            data={certificate}
            renderComponent={(slide) => <CardWithBody props={slide} />}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
