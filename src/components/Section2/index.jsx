import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import TitleTwo from "../Title/titleTwo";

const Section2 = () => {
  const t = useTranslations("HomeSectionTwo");
  const title = t("title");

  return (
    <section className="bg-[url('/images/backdrop.png'),url('/images/backdrop.png')] sm:bg-[position:-250px_top,calc(100%+250px)_top] bg-[position:-250px_top,calc(100%+250px)_center] bg-[length:500px,500px] bg-no-repeat">
      <div className="text-center bg-[url('/images/background.jpg')] bg-no-repeat bg-bottom sm:min-h-[1100px] lg:min-h-[900px] min-h-[1500px]">
        <TitleTwo />

        {/* Map description */}
        <div className="flex flex-col items-center sm:gap-6 bg-center bg-blend-normal">
          <div className="sm:flex sm:flex-1 sm:gap-3 sm:justify-evenly flex-wrap">
            <div className="w-[500px] max-w-72 flex flex-col items-center text-center gap-3 mb-6 sm:mb-0">
              <Image
                src={"/images/1.svg"}
                height={100}
                width={100}
                className="bg-green-900 p-2 rounded-lg"
                alt="worldwide-icon"
              />
              <p>{t("description.0")}</p>
            </div>
            <div className="w-[500px] max-w-72 flex flex-col items-center text-center gap-3 mb-6 sm:mb-0">
              <Image
                src={"/images/2.svg"}
                height={100}
                width={100}
                className="bg-green-900 p-2 rounded-lg"
                alt="cultural-icon"
              />
              <p>{t("description.1")}</p>
            </div>
            <div className="w-[500px] max-w-72 flex flex-col items-center text-center gap-3 mb-6 sm:mb-0">
              <Image
                src={"/images/3.svg"}
                height={100}
                width={100}
                className="bg-green-900 p-2 rounded-lg"
                alt="support-icon"
              />
              <p>{t("description.2")}</p>
            </div>
          </div>

          <div className="flex sm:flex-row flex-col flex-1 sm:gap-3 justify-evenly">
            <div className="w-[500px] max-w-72 flex flex-col items-center text-center gap-3 mb-6 sm:mb-0">
              <Image
                src={"/images/4.svg"}
                height={100}
                width={100}
                className="bg-green-900 p-2 rounded-lg"
                alt="droplet-icon"
              />
              <p>{t("description.3")}</p>
            </div>
            <div className="w-[500px] max-w-72 flex flex-col items-center text-center gap-3 mb-6 sm:mb-0">
              <Image
                src={"/images/5.svg"}
                height={100}
                width={100}
                className="bg-green-900 p-2 rounded-lg"
                alt="land-icon"
              />
              <p>{t("description.4")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
