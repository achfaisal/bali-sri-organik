import React from "react";
import Hero from "@/components/Hero";
import { useTranslations } from "next-intl";
import Image from "next/image";

const FertilizerSeeds = () => {
  // const fertilizer = useTranslations("Fertilizer");
  // const seeds = useTranslations("Seeds");
  return (
    <div className="">
      {/* <Hero text={fertilizer} /> */}

      <div className="container mx-auto px-4 ">
        <div className="container mx-auto p-4">
          <div className="text-black">
            <div className="flex items-center justify-between gap-10 flex-col lg:flex-row py-20">
              <Image
                src="/images/visi.jpg"
                alt="Gambar Pertanian Organik"
                width={1920}
                height={1080}
                className="w-full h-full lg:h-[200px] lg:w-1/3 object-cover rounded-xl"
              />
              <div>
                <h1 className="text-4xl mb-7 font-semibold">
                  Lorem ipsum dolor sit.
                </h1>
                <div className="flex w-full flex-col">
                  <h1 className="text-2xl font-semibold">
                    Lorem ipsum dolor sit.
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae in quos a consequuntur qui fugit, dolor commodi
                    reprehenderit ut doloremque.
                  </p>
                </div>
              </div>
              <div className="divider"></div>
            </div>
          </div>

          <div className="divider m-0"></div>

          <div className="text-black">
            <div className="flex items-center justify-between gap-10 flex-col lg:flex-row-reverse py-20">
              <Image
                src="/images/visi.jpg"
                alt="Gambar Pertanian Organik"
                width={1920}
                height={1080}
                className="w-full h-full lg:h-[200px] lg:w-1/3 object-cover rounded-xl"
              />
              <div>
                <h1 className="text-4xl mb-7 font-semibold">
                  Lorem ipsum dolor sit.
                </h1>
                <div className="flex w-full flex-col">
                  <h1 className="text-2xl font-semibold">
                    Lorem ipsum dolor sit.
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae in quos a consequuntur qui fugit, dolor commodi
                    reprehenderit ut doloremque.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="divider m-0"></div>

          <div className="text-black">
            <div className="flex items-center justify-between gap-10 flex-col lg:flex-row py-20">
              <Image
                src="/images/visi.jpg"
                alt="Gambar Pertanian Organik"
                width={1920}
                height={1080}
                className="w-full h-full lg:h-[200px] lg:w-1/3 object-cover rounded-xl"
              />
              <div>
                <h1 className="text-4xl mb-7 font-semibold">
                  Lorem ipsum dolor sit.
                </h1>
                <div className="flex w-full flex-col">
                  <h1 className="text-2xl font-semibold">
                    Lorem ipsum dolor sit.
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae in quos a consequuntur qui fugit, dolor commodi
                    reprehenderit ut doloremque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FertilizerSeeds;
