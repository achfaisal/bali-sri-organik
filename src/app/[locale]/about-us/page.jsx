import React from "react";
import Hero from "@/components/Hero";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Pagination from "@/components/Pagination";
import Modal from "@/components/Modal";

const AboutUs = () => {
  const aboutUs = useTranslations("AboutUs");
  const certificate = useTranslations().raw("Certificate");

  return (
    <>
      <Hero text={aboutUs} />

      {/* <div className="container mx-auto p-4">
        <div className="relative text-black">
          <div>
            <div className="flex items-center justify-between gap-10 flex-col lg:flex-row py-20">
              <Image
                src="/images/visi.jpg"
                alt="Gambar Pertanian Organik"
                width={1920}
                height={1080}
                className="w-full h-full lg:h-[500px] lg:w-1/3 object-cover rounded-xl"
              />
              <div>
                <h1 className="text-4xl mb-7 font-semibold">
                  {aboutUs("Vision-mission")}
                </h1>
                <div className="flex w-full flex-col">
                  <h1 className="text-2xl font-semibold">
                    {aboutUs("Vision")}
                  </h1>
                  <p>{aboutUs("Vision-description")}</p>
                  <div className="divider"></div>
                  <h1 className="text-2xl font-semibold">
                    {aboutUs("Mission")}
                  </h1>
                  <p>{aboutUs("Mission-description")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="flex flex-col">
        <div className="relative">
          <Image
            fill={true}
            src="/images/background.jpg"
            alt="Background Image"
            style={{
              objectFit: "cover",
            }}
          />
          <div
            className="backdrop-blur-2xl"
            style={{
              background: `rgba(${[110, 110, 110, 0.7]})`,
            }}
          >
            <div className="container mx-auto p-4">
              <div className="pt-16 pb-32">
                <div className="text-center text-white">
                  <h1 className="text-4xl font-semibold">
                    {aboutUs("Raw-material")}
                  </h1>
                  <p className="pt-8 pb-12">
                    {aboutUs("Raw-material-description")}
                  </p>
                </div>
                <Modal />
              </div>
            </div>
            <div className="divider m-0 text-white before:bg-white/20 after:bg-white/20"></div>

            <div className="container mx-auto p-4">
              <div className="pt-16 pb-32">
                <div className="text-center text-white">
                  <h1 className="text-4xl font-semibold">
                    {aboutUs("Farming-tools")}
                  </h1>
                  <p className="pt-8 pb-12">
                    {aboutUs("Farming-tools-description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-semibold">{aboutUs("Certificate")}</h1>
          <p className="py-8">{aboutUs("Certificate-description")}</p>
          <Pagination data={certificate} />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
