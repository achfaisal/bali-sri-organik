import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";

const LanguageSwitcher = () => {
  const router = useRouter();
  const localeActive = useLocale();
  const pathname = usePathname();

  let editedPathname = pathname.slice(3) === "" ? "/" : pathname.slice(3);

  const onSelectChange = (nextLocale) => {
    router.replace(`/${nextLocale}/${editedPathname}`);
  };

  const options = [
    { title: "English", value: "en", onSelect: () => onSelectChange("en") },
    {
      title: "Bahasa Indonesia",
      value: "id",
      onSelect: () => onSelectChange("id"),
    },
  ];

  const displayedText = localeActive === "en" ? "EN" : "ID";

  return { options, displayedText };
};

export default LanguageSwitcher;
