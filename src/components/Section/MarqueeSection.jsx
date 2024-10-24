import Marquee from "react-fast-marquee";
import Image from "next/image";

const MarqueeSection = () => {
  const clients = [
    "/images/logo/logo-lotte.png",
    "/images/logo/logo-growell.png",
    "/images/logo/logo-rambla.png",
    "/images/logo/logo-grand-lucky.png",
    "/images/logo/logo-market.png",
    // Add more client logos here
  ];

  return (
    <div>
      <div className="w-full bg-gray-800 py-4 h-40">
        <Marquee speed={60} gradient={false}>
          {clients.map((client, index) => (
            <Image
              width={200}
              height={120}
              key={index}
              src={client}
              alt={`Client ${index + 1}`}
              className="h-36 mx-11"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeSection;
