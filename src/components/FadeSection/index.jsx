"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const FadeSection = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target;
          const img = section.querySelector(".lazy-image");

          if (entry.isIntersecting) {
            // Apply fade-in effect when section is in view
            section.classList.add("show");

            // Lazy load the image
            if (img && !img.classList.contains("loaded")) {
              img.src = img.getAttribute("data-src");
              img.onload = () => img.classList.add("loaded");
            }
          } else {
            // Remove fade-in effect when section leaves the view
            section.classList.remove("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <section className="bg-[url('/images/background.png')] bg-no-repeat bg-bottom sm:min-h-[900px] lg:min-h-[750px] min-h-[1400px]">
      {/* First Section */}
      <div
        ref={(el) => (sectionsRef.current[0] = el)}
        className="fade-in-section text-center w-screen container mx-auto px-4 mt-10"
      >
        <h1 className="text-4xl font-extrabold mt-6 my-12">
          Keunggulan Pertanian <span className="text-green-600">Organik</span>{" "}
          Bali
        </h1>
        <div className="flex flex-col items-center sm:gap-6">
          <div className="sm:flex sm:flex-1 sm:gap-3 sm:justify-evenly flex-wrap">
            <div className="w-[500px] max-w-72 flex flex-col items-center text-center gap-3 mb-6 sm:mb-0">
              <Image
                src={"/images/1.svg"}
                height={100}
                width={100}
                className="bg-green-900 p-2 rounded-lg"
              />
              <p>
                Peluang ekspor yang sangat tinggi dikarenakan banyak wisatawan
                dan acara manca negara.
              </p>
            </div>
            <div className="w-[500px] max-w-72 flex flex-col items-center text-center gap-3 mb-6 sm:mb-0">
              <Image
                src={"/images/2.svg"}
                height={100}
                width={100}
                className="bg-green-900 p-2 rounded-lg"
              />
              <p>
                Pulau dengan adat istiadat yang kental, memudahkan untuk
                menerapkan konsep pertanian Organik.
              </p>
            </div>
            <div className="w-[500px] max-w-72 flex flex-col items-center text-center gap-3 mb-6 sm:mb-0">
              <Image
                src={"/images/3.svg"}
                height={100}
                width={100}
                className="bg-green-900 p-2 rounded-lg"
              />
              <p>
                Dukungan pemerintah Provinsi bali dengan disahkan undang -
                undang Bali menjadi pulau Organik.
              </p>
            </div>
          </div>

          <div className="flex sm:flex-row flex-col flex-1 sm:gap-3 justify-evenly">
            <div className="w-[500px] max-w-72 flex flex-col items-center text-center gap-3 mb-6 sm:mb-0">
              <Image
                src={"/images/4.svg"}
                height={100}
                width={100}
                className="bg-green-900 p-2 rounded-lg"
              />
              <p>Sistem perairan Subak yang sudah menjadi warisan dunia.</p>
            </div>
            <div className="w-[500px] max-w-72 flex flex-col items-center text-center gap-3 mb-6 sm:mb-0">
              <Image
                src={"/images/5.svg"}
                height={100}
                width={100}
                className="bg-green-900 p-2 rounded-lg"
              />
              <p>Lahan pertanian yang masih sangat luas +/- 150.000 Ha.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FadeSection;
