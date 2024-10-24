import Image from "next/image";

const BackgroundBlurSection = ({ children }) => {
  // Accept children instead of content
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
          className="backdrop-blur-3xl"
          style={{
            background: `rgba(${[110, 110, 110, 0.7]})`,
          }}
        >
          <div className="text-white">
            <div className="">
              {children} {/* Render children here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundBlurSection;
