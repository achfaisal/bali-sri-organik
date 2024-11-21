import Hero from "@/components/Hero";
import { useTranslations, useLocale } from "next-intl";

import AdvantageSection from "@/components/Section/AdvantageSection";
import GridSwiper from "@/components/Swiper/GridSwiper";
import Timeline from "@/components/Timeline";
import BackgroundBlurSection from "@/components/Section/BackgroundBlurSection";
import SpanDotSection from "@/components/Section/SpanDotSection";
import AdvantageSection2 from "@/components/Section/AdvantageSection2";

export default function App() {
  const t = useTranslations("HomeSectionOne");

  const localeActive = useLocale();
  const imagesClient = [
    { imageUrl: "/images/logo/logo-lotte.png", width: "200", height: "200" },
    { imageUrl: "/images/logo/logo-growell.png", width: "200", height: "200" },
    { imageUrl: "/images/logo/logo-rambla.png", width: "200", height: "200" },
    {
      imageUrl: "/images/logo/logo-grand-lucky.png",
      width: "200",
      height: "200",
    },
    { imageUrl: "/images/logo/logo-market.png", width: "200", height: "200" },
  ];
  return (
    <div className="mt-[-5rem]">
      <Hero
        title={t("title")}
        text={t("description")}
        imageUrl={"/images/gambar-1.jpg"}
        content={<SpanDotSection />}
      />
      {/* <AdvantageSection /> */}
      <AdvantageSection2 />
      <Timeline />
      <div className="bg-slate-600">
        <h1 className="text-center font-semibold text-4xl pt-6 pb-2 text-white">
          {localeActive === "en" ? "Our Partners" : "Partner Kami"}
        </h1>
        <div className="pb-4">
          <GridSwiper data={imagesClient} />
        </div>
      </div>
    </div>
  );
}
