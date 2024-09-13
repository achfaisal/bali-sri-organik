import React from "react";
import { useLocale } from "next-intl";

const TitleTwo = () => {
  const localActive = useLocale();
  return (
    <div className="text-4xl font-extrabold mt-6 my-12">
      {localActive === "id" ? (
        <p>
          Keunggulan Pertanian <span className="text-green-500">Organik</span>{" "}
          Bali
        </p>
      ) : (
        <p>
          Advantages of <span className="text-green-500">Organic</span> Farming
          in Bali
        </p>
      )}
    </div>
  );
};

export default TitleTwo;
