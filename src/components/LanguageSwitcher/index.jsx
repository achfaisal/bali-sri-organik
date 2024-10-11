import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { Translate } from "@phosphor-icons/react";
import DropdownIcon from "../Icons/Dropdown";

const LanguageSwitcher = ({ isScrolled }) => {
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
            className={`p-2 m-1 font-normal rounded-full cursor-pointer ${
              isScrolled
                ? "bg-black/10 hover:bg-black/20"
                : "bg-white/10 hover:bg-white/20"
            } backdrop-blur-sm transition-all duration-75`}
          >
            <div className="flex items-center">
              <Translate />
              {localActive === "en" ? (
                <span className="mx-2"> EN</span>
              ) : (
                <span className="mx-2">ID</span>
              )}
              <span>
                <DropdownIcon />
              </span>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-200 rounded-box z-[1] w-40 p-2 shadow text-black"
          >
            <li>
              <a onClick={() => onSelectChange({ target: { value: "en" } })}>
                English
              </a>
            </li>
            <li>
              <a
                className="text-nowrap"
                onClick={() => onSelectChange({ target: { value: "id" } })}
              >
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
