import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import LanguageSwitcher from "../LanguageSwitcher";
import Drawer from "../Drawer";

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
                className="w-[150px] ml-1 hidden sm:block"
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
          </ul>

          <div className="flex items-center">
            <div>
              <LanguageSwitcher />
            </div>
            <div className="mr-4">
              <Drawer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
