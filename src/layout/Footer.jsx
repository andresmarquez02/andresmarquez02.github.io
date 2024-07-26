import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t, i18n } = useTranslation(["lang"]);

  const contacts = [
    {
      icon: "lar la-envelope",
      url: "mailto:andres03marquez@gmail.com",
      name: "contact_me",
    },
    {
      icon: "lab la-linkedin-in",
      url: "https://www.linkedin.com/in/andres-marquez-02/",
      name: "Linkedin",
    },
    {
      icon: "lab la-whatsapp",
      url: "https://wa.me/+584129298833",
      name: "Whatsapp",
    },
  ];
  return (
    <footer className="mt-16 pb-10">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="px-4 py-6 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2024 - Andres Marquez
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            {contacts.map((item, key) => (
              <a
                className="text-gray-400 hover:text-white dark:hover:text-whit"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                key={key}
              >
                <i className={item.icon+" text-lg"}></i>&nbsp;
                {/* {t(item.name)} */}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
