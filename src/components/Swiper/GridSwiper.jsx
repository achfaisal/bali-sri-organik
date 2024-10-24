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
        spaceBetween={0}
        modules={[Autoplay, Grid]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            grid: {
              rows: 1,
            },
          },
          768: {
            slidesPerView: 2,
            grid: {
              rows: 1,
            },
          },
          1024: {
            slidesPerView: 3,
            grid: {
              rows: 1,
            },
          },
          1280: {
            slidesPerView: 4,
            grid: {
              rows: 1,
            },
          },
        }}
        className="mySwiper h-40"
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
