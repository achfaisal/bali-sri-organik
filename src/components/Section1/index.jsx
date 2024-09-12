import React from "react";
import Image from "next/image";

const Section1 = () => {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="sm:text-7xl text-6xl my-10 font-bold">
            Pertanian <span className="text-green-600">organik</span>
            <span>.</span>
          </h1>
          <p className="leading-7">
            Bertani organik merupakan bertani selaras dengan alam , dengan
            menggunakan bahan yang tersedia dari alam dan menghindari atau
            membatasi bahan kimia sintetis, dengan tujuan menyediakan produk -
            produk pertanian yang aman bagi kesehatan serta menjaga keseimbangan
            lingkungan dan siklus alamnya dengan memegang 4 prinsip organik.
          </p>
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
