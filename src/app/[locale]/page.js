import Hero from "@/components/Hero";
import { useTranslations } from "next-intl";

import AdvantageSection from "@/components/Section/AdvantageSection";
import GridCarousel from "@/components/Carousel/GridSwiper";
import ClientSection from "@/components/Section/BackgroundBlurSection";
import Timeline from "@/components/Timeline";
import BackgroundBlurSection from "@/components/Section/BackgroundBlurSection";

export default function App() {
  const t = useTranslations("HomeSectionOne");
  return (
    <>
      <Hero text={t} imageUrl={"/images/gambar-1.jpg"} />

      <AdvantageSection />
      <Timeline />
      <BackgroundBlurSection title={"Judul"} content={<GridCarousel />} />
    </>
  );
}
