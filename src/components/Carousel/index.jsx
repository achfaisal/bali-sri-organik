"use client";

import React, { useState } from "react";
import Image from "next/image";

const Carousel = () => {
  const images = [
    "/images/visi.jpg",
    "/images/background-products.png",
    "/images/visi.jpg",
    "/images/visi.jpg",
    "/images/visi.jpg",
    "/images/visi.jpg",
    "/images/visi.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionClass, setTransitionClass] = useState("");

  const handleNext = () => {
    if (currentIndex < images.length - 4) {
      setTransitionClass(
        "transition-all duration-300 ease-in-out transform translate-x-[-100%]"
      ); // Set transition
      setCurrentIndex(currentIndex + 4); // Change from 3 to 4
      setTimeout(() => {
        setTransitionClass(""); // Reset after transition
      }, 300); // Match the duration with CSS transition time
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setTransitionClass(
        "transition-all duration-300 ease-in-out transform translate-x-[100%]"
      ); // Set transition
      setCurrentIndex(currentIndex - 4); // Change from 3 to 4
      setTimeout(() => {
        setTransitionClass(""); // Reset after transition
      }, 300); // Match the duration with CSS transition time
    }
  };

  return (
    <div className="relative w-full">
      <div className="flex items-center justify-center relative">
        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 w-full overflow-hidden ${transitionClass}`}
        >
          {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
            <div key={index}>
              <button
                onClick={() =>
                  document.getElementById("my_modal_4").showModal()
                }
              >
                <Image
                  src={image}
                  alt="Gambar Pertanian Organik"
                  width={1000}
                  height={1000}
                  className="rounded-lg"
                />
              </button>
              {/* Open the modal using document.getElementById('ID').showModal() method */}

              <dialog id="my_modal_4" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Coming Soon</h3>
                  <p className="py-4">Coming soon</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          ))}
        </div>
        {/* 
        <div className="absolute bottom-[-70px] left-1/2 transform -translate-x-1/2 flex items-center">
          <button
            onClick={handlePrev}
            className="btn btn-outline border-0 text-white bg-transparent disabled:bg-transparent"
            disabled={currentIndex === 0}
          >
            Previous
          </button>

          <div className="border-l border-white/10 h-6 mx-2"></div>

          <button
            onClick={handleNext}
            className="btn btn-outline border-0 text-white bg-transparent disabled:bg-transparent"
            disabled={currentIndex >= images.length - 4}
          >
            Next
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Carousel;
