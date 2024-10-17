import Image from "next/image";

const LeftImageSection = ({ data }) => {
  return (
    <div className="relative text-black">
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
            {data("Vision-mission")}
          </h1>
          <div className="flex w-full flex-col">
            <h1 className="text-2xl font-semibold">{data("Vision")}</h1>
            <p>{data("Vision-description")}</p>
            <div className="divider"></div>
            <h1 className="text-2xl font-semibold">{data("Mission")}</h1>
            <p>{data("Mission-description")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftImageSection;
