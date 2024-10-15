"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";
import Image from "next/image";

export default function GridCarousel() {
  return (
    <section>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
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
        <SwiperSlide className="">
          <div className="flex justify-center items-center h-full">
            <Image
              width={110}
              height={132}
              src="/images/Lotte.png"
              alt="Logo Lotte"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-full">
            <Image
              width={180}
              height={60}
              src="/images/logo-growell.png"
              alt="Logo Growell"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-full">
            <Image
              width={200}
              height={200}
              src="/images/logo-rambla.png"
              alt="Logo Rambla"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-full">
            <Image
              width={200}
              height={200}
              src="/images/logo-grand-lucky.png"
              alt="Logo Grand Lucky"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-full">
            <Image
              width={200}
              height={200}
              src="/images/logo-market.png"
              alt="Logo Market"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
