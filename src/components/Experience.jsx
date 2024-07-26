import React from "react";
import { useTranslation } from "react-i18next";

export default function Experience({experience}) {
  const { t, i18n } = useTranslation(["lang"]);

  return (
    <>
      <li className="mb-10 ms-4">
        <div className="absolute w-4 h-4 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-yellow-300"></div>
        <time className="mb-1 text-sm font-normal leading-none text-sky-800 dark:text-sky-200/80">
          {t(experience.date)}
        </time>
        <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 my-1">
            {t(experience.title)}
        </h3>
        <p className="mb-4 mt-1 text-base font-normal dark:text-gray-200 text-pretty">
            {t(experience.description)}
        </p>
      </li>
    </>
  );
}
