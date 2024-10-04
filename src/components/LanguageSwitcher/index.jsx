// components/LanguageSwitcher.js
"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { Translate } from "@phosphor-icons/react";
import DropdownIcon from "../Icons/Dropdown";

const LanguageSwitcher = () => {
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();

  let editedPathname = pathname.slice(3) === "" ? "/" : pathname.slice(3);

  const onSelectChange = (e) => {
    const nextLocale = e.target.value;
    router.replace(`/${nextLocale}/${editedPathname}`);
  };

  return (
    <>
      <label>
        <p className="sr-only">Change language</p>
        <div className="dropdown dropdown-bottom dropdown-end">
          <div
            tabIndex={0}
            className="btn m-1 bg-white font-normal rounded-full"
          >
            {localActive === "en" ? (
              <div className="flex">
                <Translate />
                <span className="mx-2">EN</span>
                <span>
                  <DropdownIcon />
                </span>
              </div>
            ) : (
              <div className="flex">
                <Translate />
                <span className="mx-2">ID</span>
                <span>
                  <DropdownIcon />
                </span>
              </div>
            )}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-200 rounded-box z-[1] w-40 p-2 shadow"
          >
            <li>
              <a onClick={() => onSelectChange({ target: { value: "en" } })}>
                English
              </a>
            </li>
            <li>
              <a onClick={() => onSelectChange({ target: { value: "id" } })}>
                Bahasa Indonesia
              </a>
            </li>
          </ul>
        </div>
      </label>
    </>
  );
};

export default LanguageSwitcher;
