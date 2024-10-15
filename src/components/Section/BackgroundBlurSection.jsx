import Image from "next/image";

const BackgroundBlurSection = ({ title, content }) => {
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
          <div className="text-white container mx-auto">
            <div className="py-10">
              <h1 className="text-4xl font-semibold text-center pb-6">
                {title}
              </h1>
              {content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundBlurSection;
