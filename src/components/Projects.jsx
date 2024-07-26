import Project from "./Project";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t, i18n } = useTranslation(["lang"]);

  const projects = [
    {
      title: 'Whatsapp-Clone',
      description: 'description_project1',
      urlCode: 'https://github.com/andresmarquez02/whatsapp-clone',
      urlProject: 'https://whatsapp-clone-nu-one.vercel.app/',
      image: 'whatsapp_clone.png',
      technologies: [
        {
          icon: 'lab la-vuejs',
          technology: 'Vue'
        },
        {
          icon: 'las la-database',
          technology: 'Firebase'
        }
      ]
    },
    {
      title: 'Expresso',
      description: 'description_project2',
      urlCode: 'https://github.com/andresmarquez02/expresso',
      image: 'expresso.png',
      urlProject: 'https://expressomarket.netlify.app/',
      technologies: [
        {
          icon: 'lab la-vuejs',
          technology: 'Vue'
        },
        {
          icon: 'las la-database',
          technology: 'LocalStorage'
        }
      ]
    },
    // {
    //   title: 'Papper',
    //   description: 'description_project3',
    //   urlCode: 'https://github.com/andresmarquez02/Papper',
    //   image: 'papper.png',
    //   urlProject: '',
    //   technologies: [
    //     {
    //       icon: 'lab la-laravel',
    //       technology: 'Laravel'
    //     },
    //     {
    //       icon: 'lab la-vuejs',
    //       technology: 'Vue'
    //     },
    //     {
    //       icon: 'lab la-bootstrap',
    //       technology: 'Bootstrap'
    //     },
    //     {
    //       icon: 'las la-database',
    //       technology: 'Mysql'
    //     }
    //   ]
    // }
  ]
  return (
    <section
      id="projects"
      data-section="projects"
      className="section pb-24"
    >
      <h2 className="text-3xl font-semibold mb-6 flex gap-x-3 items-center text-black/80 dark:text-white/80">
        <i className="fa-solid fa-code"></i>
        {t("title_projects")}
      </h2>
      <div className="flex flex-col gap-y-16">
        {
          projects.map((project, key) => <Project key={key} project={project}/>)
        }
      </div>
    </section>
  );
}
