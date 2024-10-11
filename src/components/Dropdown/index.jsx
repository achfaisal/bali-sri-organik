"use client";

import { useState, useEffect, useRef } from "react";
import DropdownIcon from "../Icons/Dropdown";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navbar = useTranslations("Navbar");
  const products = useTranslations().raw("Products");

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`dropdown dropdown-hover ${isOpen ? "dropdown-open" : ""}`}
      ref={dropdownRef}
    >
      <div
        tabIndex={0}
        role="button"
        className="border-0 shadow-none"
        onClick={toggleDropdown}
      >
        <div className="flex items-center">
          <div className="mr-2">{navbar("products")}</div>
          <DropdownIcon />
        </div>
      </div>
      {isOpen && (
        <div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-200 z-[1] p-2 shadow rounded-box w-56 mt-3 text-black"
          >
            <li>
              <a className="btn-disabled font-semibold">
                {navbar("product-one")}
              </a>
              <ul>
                {products.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={`/products/${item.link}`}
                      onClick={closeDropdown}
                    >
                      {item.product}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
