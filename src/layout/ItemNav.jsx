import { useTranslation } from "react-i18next";

export default function ItemNav({item}) {
  const { t, i18n } = useTranslation(["lang"]);
  return (
    <>
      <a
        className="hover:bg-white/10 hover:text-yellow-200 p-1 rounded-full px-2 sm:px-3 transition ease-in text-sm sm:text-base capitalize ms-2"
        href={item.url}
        aria-label={item.label}
      >
        {t(item.description)}
      </a>
    </>
  );
}
