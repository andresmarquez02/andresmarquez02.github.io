import ItemNav from "./ItemNav";
import SidebarLang from "./SidebarLang";
import ToggleTheme from "./ToggleTheme";
import SetLang from "./SetLang";
import { useState } from "react";
import { useEffect } from "react";
import { Navbar, Sidebar } from "flowbite-react";
import SidebarItem from "./SidebarItem";
import { AiOutlineMail, AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlineLaptop } from "react-icons/ai";
import { useTranslation } from "react-i18next";


export default function Header() {
  const { t, i18n } = useTranslation(["lang"]);
  const [headerClass, setheaderClass] = useState("");
  const [showAside, setshowAside] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10)
        setheaderClass(
          "md:shadow md:dark:shadow-gray-700 bg-neutral-200/70 dark:bg-black/50 backdrop-blur-xl"
        );
      else setheaderClass("");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showbar = () => {
    if (showAside.length == 0) {
      setshowAside("rightAside");
      setheaderClass(
        "md:shadow md:dark:shadow-gray-700 bg-neutral-200/70 dark:bg-black/50 backdrop-blur-xl"
      );
    } else {
      setshowAside("");
      if (window.scrollY < 10) setheaderClass("");
    }
  };

  const items = [
    {
      url: "#experience",
      label: "experience",
      description: "experience",
      iconSidebar: AiOutlineLaptop,
    },
    {
      url: "#projects",
      label: "projects",
      description: "projects",
      iconSidebar: AiOutlineFundProjectionScreen,
    },
    {
      url: "#about",
      label: "about",
      description: "about",
      iconSidebar: AiOutlineUser,
    },
    {
      url: "mailto:andres03marquez@gmail.com",
      label: "contact",
      description: "contact",
      iconSidebar: AiOutlineMail ,
    },
  ];

  return (
    <>
      <header className="h-16 md:h-20 md:flex justify-center items-center mx-auto  md:pt-6 sticky top-0 w-full z-10">
        <nav
          className={
            headerClass +
            " " +
            "w-full md:w-3/4 lg:w-8/12  xl:w-6/12 h-full md:rounded-full md:px-6 px-3 py-1 md:my-2 transition-all duration-150 ease-in"
          }
        >
          <div className="hidden md:flex h-full flex-wrap flex-row items-center justify-center">
            {items.map((item, key) => (
              <ItemNav key={key} item={item} />
            ))}
            <ToggleTheme />
            <SetLang />
          </div>
          <div className="md:hidden h-full flex flex-wrap flex-row items-center justify-end">
            <a
              className="hover:bg-white/10 hover:text-yellow-200 p-1 rounded-full px-2 sm:px-3 transition ease-in text-2xl capitalize ms-2 "
              onClick={() => showbar()}
            >
              <i className="las la-bars"></i>
            </a>
          </div>
        </nav>
      </header>
      <Sidebar
        className={showAside + " sidebar md:hidden"}
        aria-label="Siderbar Andres Marquez"
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {items.map((item, key) => (
              <SidebarItem key={key} item={item} />
            ))}
            <Sidebar.Item className="item-toggle">
              <ToggleTheme />{" "}
              <span className="inline-block ml-2">{t("change_theme")}</span>
            </Sidebar.Item>
            <SidebarLang />
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
}
