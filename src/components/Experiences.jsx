import Experience from "./Experience";
import { useTranslation } from "react-i18next";

export default function Experiences() {
  const { t, i18n } = useTranslation(["lang"]);
  const experiences = [
    {
      date: 'date_exp1',
      title: 'title_exp1',
      description: 'description_exp1',
    },
    {
      date: 'date_exp2',
      title: 'title_exp2',
      description: 'description_exp2',
    },
    {
      date: 'date_exp3',
      title: 'title_exp3',
      description: 'description_exp3',
    }
  ];
  return (
    <section
      id="experience"
      data-section="experience"
      className="section pb-24"
    >
      <h2 className="text-3xl font-semibold mb-6 flex md:gap-x-3 items-center text-black/80 dark:text-white/80">
        <i className="fa-solid fa-briefcase"></i>
        {t("title_exp")}
      </h2>
      <ol className="relative border-s border-gray-200 md:ml-3">
        {
          experiences.map((experience, key) => <Experience key={key} experience={experience}/>)
        }
      </ol>
    </section>
  );
}
