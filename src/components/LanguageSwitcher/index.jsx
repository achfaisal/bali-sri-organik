// components/LanguageSwitcher.js
"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";

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
              <div>
                English{" "}
                <span>
                  <svg
                    width="12px"
                    height="12px"
                    className="hidden h-2 w-2 fill-current opacity-60 sm:inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2048 2048"
                  >
                    <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                  </svg>
                </span>
              </div>
            ) : (
              <div>
                Indonesia{" "}
                <span>
                  <svg
                    width="12px"
                    height="12px"
                    className="hidden h-2 w-2 fill-current opacity-60 sm:inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2048 2048"
                  >
                    <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                  </svg>
                </span>
              </div>
            )}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow"
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
