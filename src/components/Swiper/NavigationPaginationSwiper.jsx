"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function NavigationPaginationSwiper({
  data,
  renderComponent,
  config,
}) {
  const [isMounted, setIsMounted] = useState(false);
  const [showNavigation, setShowNavigation] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      setShowNavigation(window.innerWidth > 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  if (!isMounted) return null; // Prevent rendering until the component is mounted

  // Default configuration (can be overridden by the config prop)
  const defaultConfig = {
    spaceBetween: 0,
    navigation: showNavigation,
    pagination: { clickable: true },
    modules: [Navigation, Pagination],
    className: "mySwiper",
    slidesPerView: 1,
    breakpoints: {
      1024: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 3,
      },
    },
  };

  // Merge defaultConfig with the passed config prop
  const swiperConfig = { ...defaultConfig, ...config };

  return (
    <Swiper {...swiperConfig}>
      {data.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="flex justify-center items-center pb-12">
            {renderComponent(slide)}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
