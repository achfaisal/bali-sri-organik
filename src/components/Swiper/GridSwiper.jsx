"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Autoplay, Grid, Pagination } from "swiper/modules";
import Image from "next/image";

export default function GridSwiper({ data }) {
  return (
    <section>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Grid, Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            // Mobile view
            slidesPerView: 1,
            grid: {
              rows: 1, // Set grid to 1 row for mobile
            },
          },
          768: {
            // Tablet view
            slidesPerView: 2,
            grid: {
              rows: 2, // Set grid to 2 rows for tablet
            },
          },
          1024: {
            // Default for larger screens
            slidesPerView: 3,
            grid: {
              rows: 2, // Set grid to 2 rows for larger screens
            },
          },
        }}
        className="mySwiper h-80"
      >
        {data.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center h-full">
              <Image
                width={image.width}
                height={image.height}
                src={image.imageUrl}
                alt="Logo Company"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
