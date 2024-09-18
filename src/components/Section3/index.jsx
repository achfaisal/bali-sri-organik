import Image from "next/image";

const Section3 = () => {
  return (
    <section className="flex flex-col">
      <div className="relative">
        <Image
          fill={true}
          src="/images/gambar-1.jpg"
          alt="Background Image"
          style={{
            objectFit: "cover",
          }}
        />
        <div
          className="backdrop-blur"
          style={{
            background: `rgba(${[110, 110, 110, 0.7]})`,
          }}
        >
          <div className="text-white w-full container mx-auto px-4 py-12">
            <h1 className=" flex text-3xl font-bold mb-12 justify-center items-center align-middle w-full">
              Our Client
            </h1>

            <div className="flex flex-wrap justify-center gap-16 items-center">
              <Image
                width={110}
                height={132}
                src="/images/Lotte.png"
                alt="Logo Lotte"
                // className="h-[144px] w-[122px]"
              />
              <Image
                width={180}
                height={60}
                src="/images/logo-growell.png"
                alt="Logo Growell"
              />
              <Image
                width={200}
                height={200}
                src="/images/logo-rambla.png"
                alt="Logo Rambla"
              />
              <Image
                width={200}
                height={200}
                src="/images/logo-grand-lucky.png"
                alt="Logo Grand Lucky"
              />
              <Image
                width={200}
                height={200}
                src="/images/logo-market.png"
                alt="Logo Grand Lucky"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
