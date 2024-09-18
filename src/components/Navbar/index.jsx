import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import LanguageSwitcher from "../LanguageSwitcher";

const NavbarComponent = () => {
  return (
    <div className="navbar bg-base-100 sticky z-[100] top-0 border-b-2">
      <div className="container mx-auto">
        <div className="flex navbar-start">
          <Link href={"/"}>
            <div className="flex py-1">
              <Image
                src="/images/logo-only-bso.svg"
                width={1000}
                height={300}
                className="w-[50px] ml-4"
                alt="logo-bali-sri-organik"
              />
              <Image
                src="/images/tulisan-bso.svg"
                width={1000}
                height={300}
                className="w-[150px] ml-1"
                alt="logo-bali-sri-organik"
              />
            </div>
          </Link>
        </div>
        <div className="navbar-end flex items-center">
          <ul className="menu menu-horizontal px-1 items-center">
            <li>
              <Link className="hidden sm:flex" href={"/products"}>
                Products
              </Link>
            </li>
            <li>
              <a className="hidden sm:flex">Contact Us</a>
            </li>
            <li className="flex sm:hidden">
              <a>
                <button className="justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-5 w-5 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </a>
            </li>
          </ul>
          <div className="hidden sm:flex">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
