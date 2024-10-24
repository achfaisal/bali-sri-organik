import React from "react";
import Hero from "@/components/Hero";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Navbar from "@/components/Navbar";
const FertilizerSeeds = () => {
  // const fertilizer = useTranslations("Fertilizer");
  // const seeds = useTranslations("Seeds");
  return (
    <>
      <div className="bg-slate-400 mt-[-5rem] h-20"></div>
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner w-24 h-24"></span>
      </div>
    </>
  );
};

export default FertilizerSeeds;
