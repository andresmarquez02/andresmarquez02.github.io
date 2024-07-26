import Image from "../assets/image_about.png";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t, i18n } = useTranslation(["lang"]);

  return (
    <section
      id="about"
      data-section="about"
      className="section pb-10"
    >
      <h2 className="text-3xl font-semibold mb-6 flex gap-x-3 items-center text-black/80 dark:text-white/80">
        <fontsninja-text
          id="fontsninja-text-155"
          className="fontsninja-family-rule_onest-variable_600_normal"
        ></fontsninja-text>
        <svg
          className="size-7"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
          <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
          <path d="M15 19l2 2l4 -4"></path>
        </svg>
        <fontsninja-text
          id="fontsninja-text-155"
          className="fontsninja-family-rule_onest-variable_600_normal"
        >
          {t("about_title")}
        </fontsninja-text>
      </h2>
      <article className="flex flex-col md:flex-row gap-8 justify-center items-center">
        <div className="[&amp;>p]:mb-4 [&amp;>p>strong]:text-yellow-400 [&amp;>p>strong]:font-semibold text-base text-pretty order-2 md:order-1">
          {t("about_me")}
        </div>
        <img
          src={Image}
          className="rounded-2xl md:size-80 size-56 order-1 md:order-2 object-contain"
          alt="Andres Marquez"
        />
      </article>
    </section>
  );
}
