import Image from "next/image";
import { useTranslations } from "next-intl";
import TitleOne from "../Title/titleOne";

const Section1 = () => {
  const t = useTranslations("HomeSectionOne");
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <TitleOne />
          <p className="leading-7 text-lg font-medium">{t("description")}</p>
        </div>
      </div>
      <div className="w-full">
        <Image
          src="/images/gambar-1.jpg"
          alt="Gambar Pertanian Organik"
          width={1000}
          height={600}
          className="w-full h-[300px] object-cover"
        />
      </div>
    </section>
  );
};

export default Section1;
