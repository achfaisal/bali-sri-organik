// components/LanguageSwitcher.js
"use client";

import { useRouter } from "next/navigation"; // Use 'next/navigation' for app router
import { useTransition } from "react";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";

const LanguageSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();

  let editedPathname = pathname.slice(3) === "" ? "/" : pathname.slice(3);

  const onSelectChange = (e) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      // change this
      router.replace(`/${nextLocale}/${editedPathname}`);
    });
    console.log(e.target.value);
  };

  return (
    <>
      <label>
        <p className="sr-only">change language</p>
        <select
          defaultValue={localActive}
          onChange={onSelectChange}
          disabled={isPending}
          className="border rounded-md p-2 font-sans text-[14px]"
        >
          <option value="en" className="text-[14px]">
            English
          </option>
          <option value="id" className="text-[14px]">
            Indonesia
          </option>
        </select>
      </label>
    </>
  );
};

export default LanguageSwitcher;
