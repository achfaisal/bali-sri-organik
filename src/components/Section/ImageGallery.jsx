"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function ImageGallery({ data, renderComponent }) {
  const swiperRef = useRef(null); // Ref for the Swiper instance

  return (
    <div className="relative">
      <Swiper
        ref={swiperRef}
        spaceBetween={10}
        navigation={false} // Disable default navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        slidesPerView={1} // Default to 1 slide for mobile
        breakpoints={{
          1024: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
      >
        {data.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex justify-center items-center pb-12">
              {renderComponent(slide)}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="absolute left-[-10px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer hidden md:block"
          onClick={() => swiperRef.current.swiper.slidePrev()} // Navigate to previous slide
        >
          <span className="text-2xl">&lt;</span>{" "}
          {/* You can replace this with an icon */}
        </div>
        <div
          className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer hidden md:block"
          onClick={() => swiperRef.current.swiper.slideNext()} // Navigate to next slide
        >
          <span className="text-2xl">&gt;</span>
          {/* You can replace this with an icon */}
        </div>
      </div>
    </div>
  );
}
