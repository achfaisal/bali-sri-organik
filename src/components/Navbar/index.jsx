"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { useTranslations } from "next-intl";

const NavbarComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const t = useTranslations();
  const navbarData = t.raw("Navbar");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Check position on load
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar sticky z-[100] top-0 transition-colors duration-300 ${
        isScrolled
          ? "bg-white text-slate-600 drop-shadow-md"
          : "bg-white/10 backdrop-blur-sm text-white"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex navbar-start">
          <Link href={"/"}>
            <div className="flex py-1">
              <Image
                src={`${
                  isScrolled
                    ? "/images/logo-only-bso.svg"
                    : "/images/logo/logo-bso-putih.png"
                }`}
                width={1000}
                height={300}
                className="w-[50px] ml-4"
                alt="logo-bali-sri-organik"
              />
              <Image
                src="/images/tulisan-bso.svg"
                width={1000}
                height={300}
                className={`w-[150px] ml-1 hidden sm:block ${
                  isScrolled ? "" : "filter brightness-0 invert"
                } `}
                alt="logo-bali-sri-organik"
              />
            </div>
          </Link>
        </div>

        <div className="flex navbar-end">
          <div className="2xl:flex 2xl:gap-6 2xl:text-nowrap 2xl:items-center hidden font-semibold">
            {navbarData.map((navbar) => (
              <Link
                className="hover:text-green-500"
                key={navbar.title}
                href={navbar.link}
              >
                {navbar.title}
              </Link>
            ))}
          </div>
          <div className="2xl:hidden mr-4"></div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
