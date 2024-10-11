"use client";

import { useEffect, useState } from "react";
import Card from "../Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; // Import Pagination styles
import { Navigation, Pagination } from "swiper/modules";
import { useTranslations } from "next-intl";

export default function App() {
  const t = useTranslations();
  const certificateData = t.raw("Certificate");

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

  return (
    <>
      <Swiper
        spaceBetween={0}
        navigation={showNavigation} // Show navigation based on state
        pagination={{ clickable: true }} // Enable pagination
        modules={[Navigation, Pagination]} // Include Pagination module
        className="mySwiper"
        slidesPerView={1}
        breakpoints={{
          1024: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
      >
        {certificateData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex justify-center items-center pb-12">
              <Card data={slide} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
