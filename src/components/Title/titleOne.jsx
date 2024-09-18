"use client";
import React from "react";
import { useLocale } from "next-intl";

const TitleOne = () => {
  const localActive = useLocale();

  return (
    <div className="sm:text-7xl text-6xl my-10 font-bold">
      {localActive === "id" ? (
        <h1>
          Pertanian <span className="text-green-600">Organik</span>.
        </h1>
      ) : (
        <h1>
          <span className="text-green-600">Organic</span> Farming.
        </h1>
      )}
    </div>
  );
};

export default TitleOne;
