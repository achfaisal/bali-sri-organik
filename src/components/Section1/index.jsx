import Image from "next/image";
import { useTranslations } from "next-intl";
import TitleOne from "../Title/titleOne";

const Section1 = () => {
  const t = useTranslations("HomeSectionOne");
  return (
    <section>
      <div className="relative hero min-h-screen mt-[-5rem]">
        {/* Background Image */}
        <Image
          src="/images/gambar-1.jpg" // Absolute path to the image
          alt="Background image"
          layout="fill" // Fills the parent container
          objectFit="cover" // Ensures the image covers the area
          quality={100} // Optional: To ensure the best quality
          priority // Optional: Loads this image as a priority
          className="z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-700/60 z-10"></div>

        {/* Content */}
        <div className="text-neutral-content text-center relative z-20">
          <div className="container mx-auto px-4">
            <h1 className="mb-10 text-5xl font-bold">{t("title")}</h1>
            <p className="mb-5">{t("description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
