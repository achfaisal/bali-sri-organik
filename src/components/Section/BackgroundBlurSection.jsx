import Image from "next/image";

const BackgroundBlurSection = ({ children }) => {
  // Accept children instead of content
  return (
    <section className="flex flex-col">
      <div className="relative rounded-2xl">
        <Image
          fill={true}
          src="/images/gambar-1.jpg"
          alt="Background Image"
          style={{
            objectFit: "cover",
            borderRadius: "16px",
          }}
        />
        <div
          className="backdrop-blur-3xl rounded-2xl"
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
