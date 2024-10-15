"use client";

import { useState } from "react";
import DropdownIcon from "../Icons/DropdownIcon"; // Adjust the import based on your project structure
import { Link } from "@/i18n/routing";

const Dropdown = ({ switcher, displayedText, options }) => {
  const data = switcher ? switcher() : { displayedText, options };

  // State to control dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the dropdown
  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="dropdown dropdown-hover dropdown-end"
      onMouseEnter={() => setIsOpen(true)} // Open on hover
      onMouseLeave={closeDropdown} // Close when not hovering
    >
      <div
        tabIndex={0}
        role="button"
        className="m-1"
        onClick={() => setIsOpen(!isOpen)} // Toggle dropdown on click
      >
        {data.displayedText}
        <span className="pl-1">
          <DropdownIcon />
        </span>
      </div>

      {isOpen && (
        <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          {data.options.map((data, index) => (
            <li key={index}>
              {data.link ? (
                <Link href={data.link} onClick={closeDropdown}>
                  {data.title || data.label}
                </Link>
              ) : (
                <button
                  onClick={() => {
                    data.onSelect(); // Perform the action
                    closeDropdown(); // Close the dropdown
                  }}
                >
                  {data.title || data.label}
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
