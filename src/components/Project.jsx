import React from "react";
import { useTranslation } from "react-i18next";

export default function Project({ project }) {
  const { t, i18n } = useTranslation(["lang"]);

  return (
    <div className="flex flex-col gap-y-16">
      <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
        {" "}
        <div className="w-full md:w-1/2">
          <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
            <img
              alt={project.title}
              className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
              src={project.image}
              loading="lazy"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 md:max-w-lg">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            {project.title}
          </h3>
          <div className="mt-2">
            {project.technologies.map((technology, key) => (
              // <li>
                <span key={key} className="inline-block mr-2 mb-2 rounded-full text-sm bg-[#003159] text-white py-1 px-2">
                  <i className={"items-center inline-block " + technology.icon}></i>
                  <span> {technology.technology}</span>
                </span>
              // </li>
            ))}
          </div>
          <div className="flex flex-wrap mt-2">
            <div className="mt-2 text-gray-700 dark:text-gray-400">
              {t(project.description)}
            </div>
            <footer className="flex gap-x-4 items-end justify-start mt-4">
              <a
                target="_blank"
                href={project.urlCode}
                className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-300 hover:bg-gray-50 hover:text-yellow-400 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white/15 transition-all delay-75 ease-in-out"
              >
                <i className="lab la-github"></i>
                &nbsp; {t("code")}
              </a>
              <a
                target="_blank"
                href={project.urlProject}
                className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-300 hover:bg-gray-50 hover:text-yellow-400 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white/15 transition-all delay-75 ease-in-out"
              >
                <i className="las la-globe"></i>
                &nbsp;{t("view")}
              </a>
            </footer>
          </div>
        </div>
      </article>
    </div>
  );
}
