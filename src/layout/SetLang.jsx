import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import { Dropdown } from "flowbite-react";
import { useEffect, useState } from "react";

export default function ItemNav({ item }) {
  const { t, i18n } = useTranslation(["header"]);
  const [langDefault, setlangDefault] = useState('');
 
  useEffect(()=>{
    if(!localStorage.getItem("lang")){
     
        localStorage.setItem("lang", "en");
    }
    setMyLang(localStorage.getItem("lang"));
  },[]);

  const setMyLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setlangDefault(localStorage.getItem("lang"));
  };
  return (
    <span className="p-1 px-2 sm:px-3 text-sm sm:text-base capitalize ms-2">
      <Dropdown label={langDefault} dismissOnClick={false} inline>
        <Dropdown.Item  onClick={() => setMyLang("es")}>ES</Dropdown.Item>
        <Dropdown.Item onClick={() => setMyLang("en")}>EN</Dropdown.Item>
      </Dropdown>
    </span>
  );
}
