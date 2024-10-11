"use client";

import React from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../LanguageSwitcher";

const Drawer = () => {
  const t = useTranslations();
  const navbarData = t.raw("Navbar");
  const closeDrawer = () => {
    const drawerCheckbox = document.getElementById("my-drawer");
    if (drawerCheckbox) {
      drawerCheckbox.checked = false;
    }
  };

  const onSelectChange = (e) => {
    const nextLocale = e.target.value;
    router.replace(`/${nextLocale}/${editedPathname}`);
  };

  return (
    <div className="drawer flex">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="bg-transparent ml-2">
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

            {navbarData.map((navbar) => (
              <li key={navbar.title}>
                <Link
                  className="hover:text-green-500"
                  key={navbar.title}
                  href={navbar.link}
                >
                  {navbar.title}
                </Link>
              </li>
            ))}
            <p>(Tombol sementara, masih mencong)</p>
            <LanguageSwitcher />
            {/* <li>
              <details open>
                <summary>Language</summary>
                <ul>
                  <li>
                    <a
                      onClick={() =>
                        onSelectChange({ target: { value: "en" } })
                      }
                    >
                      English
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-nowrap"
                      onClick={() =>
                        onSelectChange({ target: { value: "id" } })
                      }
                    >
                      Bahasa Indonesia
                    </a>
                  </li>
                </ul>
              </details>
            </li> */}
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
