import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import { Sidebar } from "flowbite-react";
import { useEffect, useState } from "react";
import { HiOutlinePlusSm, HiOutlineMinusSm } from "react-icons/hi";
import { AiOutlineTaobao } from "react-icons/ai";
import { twMerge } from "tailwind-merge";

export default function ItemNav({ item }) {
  const { t, i18n } = useTranslation(["lang"]);
  const [langDefault, setlangDefault] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "en");
    }
    setMyLang(localStorage.getItem("lang"));
  }, []);

  const setMyLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setlangDefault(localStorage.getItem("lang"));
  };
  return (
    <Sidebar.Collapse
      icon={AiOutlineTaobao}
      label="Language"
      renderChevronIcon={(theme, open) => {
        const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

        return (
          <IconComponent
            aria-hidden
            className={twMerge(theme.label.icon.open[open ? "on" : "off"])}
          />
        );
      }}
    >

      <Sidebar.Item onClick={() => setMyLang("es")} href="#">{t('spanish')}</Sidebar.Item>
      <Sidebar.Item  onClick={() => setMyLang("en")} href="#">{t('english')}</Sidebar.Item>
    </Sidebar.Collapse>
  );
}
