import Image from "next/image";
import { Link } from "@/i18n/routing";
import LanguageSwitcher from "../LanguageSwitcher";
import Drawer from "../Drawer";
import Dropdown from "../Dropdown";

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

        <div className="flex items-center navbar-end">
          <div className="sm:flex hidden items-center">
            <Dropdown />
            <div
              role="button"
              className="btn m-1 bg-white border-0 shadow-none text-green-700"
            >
              <Link href="/contact-us">Contact Us</Link>
            </div>
          </div>
          <div>
            <LanguageSwitcher />
          </div>
          <div className="mr-4">
            <Drawer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
