import React from "react";
import Image from "next/image";
import Link from "next/link";

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
              />
              <Image
                src="/images/tulisan-bso.svg"
                width={1000}
                height={300}
                className="w-[150px] ml-1"
              />
            </div>
          </Link>
        </div>
        <div className="navbar-end flex">
          <ul className="menu menu-horizontal px-1 items-center">
            <li>
              <a className="hidden sm:flex">Products</a>
            </li>
            <li>
              <a className="hidden sm:flex">Contact Us</a>
            </li>
            <li>
              <a className="flex sm:hidden">
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
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
