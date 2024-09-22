"use client";

import React from "react";
import { Link } from "@/i18n/routing";

const Drawer = () => {
  const closeDrawer = () => {
    const drawerCheckbox = document.getElementById("my-drawer");
    if (drawerCheckbox) {
      drawerCheckbox.checked = false;
    }
  };

  return (
    <div className="drawer flex sm:hidden">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="bg-white ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 max-w-72 p-4">
          <ul className="menu bg-base-200 rounded-box w-56">
            <li>
              <Link href={"/"} onClick={closeDrawer}>
                Home
              </Link>
            </li>
            <li>
              <details open>
                <summary>Products</summary>
                <ul>
                  <li>
                    <Link
                      href={"/products/beras-organik"}
                      onClick={closeDrawer}
                    >
                      Beras Organik
                    </Link>
                  </li>
                  <li>
                    <Link href={"/products/beras-merah"} onClick={closeDrawer}>
                      Beras Merah
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a onClick={closeDrawer}>Contact Us</a>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
