"use client";
import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Dropdown from "../Dropdown";
import LanguageSwitcher from "@/utils/LanguageSwitcher";
import CloseIcon from "@/components/Icons/CloseIcon";
import HamburgerIcon from "@/components/Icons/HamburgerIcon";

export default function Navbar2() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations();
  const navbarData = t.raw("Navbar");
  const fertilizerAndSeeds = t.raw("Fertilizer & Seeds");
  const { options } = LanguageSwitcher();
  const localeActive = useLocale();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-[100] transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* Navbar content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <div className="flex">
            <Link href={"/"}>
              <Image src="/images/logo-bso.svg" width={175} height={175} />
            </Link>
          </div>
          {/* Hamburger menu button for mobile */}
          <div className="flex items-center xl:hidden">
            <button
              onClick={toggleSidebar}
              className="text-gray-500 focus:outline-none"
            >
              {isSidebarOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
          {/* Desktop Links */}
          <div className="hidden xl:flex sm:justify-start sm:space-x-4 items-center">
            {navbarData.map((data, index) => {
              if (index === 1) {
                return (
                  <Dropdown
                    key={index}
                    displayedText={fertilizerAndSeeds.title}
                    options={fertilizerAndSeeds.data}
                  />
                );
              }
              return (
                <Link
                  key={index}
                  className="text-gray-700 hover:text-gray-900 text-nowrap"
                  href={data.link}
                >
                  {data.title}
                </Link>
              );
            })}

            <Dropdown
              switcher={LanguageSwitcher}
              setSidebarOpen={setSidebarOpen}
              isSidebarOpen={isSidebarOpen}
            />
          </div>
        </div>
      </div>

      {/* Sidebar (for mobile view) */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-slate-800 shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out xl:hidden`}
      >
        <nav className="flex flex-col p-4 space-y-6">
          <ul className="menu bg-transparent text-white p-0 rounded-box w-full text-base">
            {navbarData.map((data, index) => {
              if (index === 1) {
                return (
                  <li key={index}>
                    <details open>
                      <summary>{data.title}</summary>
                      <ul>
                        <li>
                          {fertilizerAndSeeds.data.map((data, index) => (
                            <Link
                              href={data.link}
                              key={index}
                              onClick={() => setSidebarOpen(false)}
                            >
                              {data.title}
                            </Link>
                          ))}
                        </li>
                      </ul>
                    </details>
                  </li>
                );
              }
              return (
                <li key={index}>
                  <Link
                    className="text-nowrap text-white"
                    href={data.link}
                    onClick={() => setSidebarOpen(false)}
                  >
                    {data.title}
                  </Link>
                </li>
              );
            })}
            <li>
              <details open>
                <summary>
                  {localeActive == "en" ? "Language" : "Bahasa"}
                </summary>
                <ul>
                  {options.map((data, index) => (
                    <li key={index}>
                      <button
                        className="disabled:text-gray-600 disabled:cursor-not-allowed"
                        disabled={localeActive == data.value}
                        onClick={() => {
                          data.onSelect();
                          setSidebarOpen(false);
                        }}
                      >
                        {data.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </nav>
      </div>

      {/* Background overlay to close sidebar (adjust opacity or remove it) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-25"
          onClick={toggleSidebar}
        ></div>
      )}
    </nav>
  );
}
