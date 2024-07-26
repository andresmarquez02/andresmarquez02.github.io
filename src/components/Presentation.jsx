import Image from "../assets/andresmarquez.jpg";
import { useTranslation } from "react-i18next";

export default function Presentation() {
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
    <section className="section pb-24">
      <div className="flex items-center mb-4">
        <img
          className="rounded-full size-24"
          src={Image}
          alt="andresmarquez photo"
        />
        <button
          type="button"
          className="text-green-400 hover:text-white dark:text-white border border-green-400 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium md:text-xs px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:hover:text-white dark:hover:bg-green-500 dark:focus:ring-green-400 rounded-full ms-4 transition-all ease-in-out delay-75"
        >
          {t("availability")}
        </button>
      </div>
      <h1 className="text-gray-900 dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">
        {t("hi")}
      </h1>
      <h2 className="text-xl lg:text-2xl text-balance max-w-[700px] text-black dark:text-white">
        <span>{t("text1")}</span>
        <span className="text-yellow-500 dark:text-yellow-200">
          &nbsp;{t("text2")}
        </span>
        .
        <span className=" text-sky-800 dark:text-sky-400">
          &nbsp;{t("text3")}
        </span>
        .
        <span className="text-red-800 dark:text-red-400">
          &nbsp;{t("text3")}
        </span>
      </h2>
      <nav className="flex gap-4 mt-8 flex-wrap">
        {contacts.map((item,key) => (
          <a
            className="bg-white/5 border dark:border-white/10 border-gray-300 rounded-full flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-xs md:text-base text-black/70 dark:text-white transition hover:scale-110 hover:bg-white/10"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            key={key}
          >
            <i className={item.icon}></i>
            {t(item.name)}
          </a>
        ))}
      </nav>
    </section>
  );
}
