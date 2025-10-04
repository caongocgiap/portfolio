import projects from "../../data/projects.json";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="min-h-screen md:pt-30">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center hover:scale-110 hover:text-blue-400 hover:drop-shadow-2xl hover:drop-shadow-blue-500/50 animate-pulse hover:animate-none transform transition-all duration-1000 ease-out">
        {t("projects.projects")}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 mt-5 lg:mt-10 mx-2 md:mx-5 justify-items-center">
        {projects.map((project, index) => {
          const i18nResp = t(`projects.project${index + 1}.responsible`, {
            returnObjects: true,
          }) as unknown;
          const responsibilities: string[] = Array.isArray(i18nResp)
            ? i18nResp
            : Array.isArray((project as any).responsible)
            ? ((project as any).responsible as string[])
            : typeof i18nResp === "string" && i18nResp
            ? [i18nResp]
            : typeof (project as any).responsible === "string"
            ? (t(`projects.${(project as any).responsible}`, {
                returnObjects: true,
              }) as unknown as string[]) || []
            : [];

          const i18nName = t(`projects.project${index + 1}.name`);
          const displayName =
            i18nName &&
            typeof i18nName === "string" &&
            !i18nName.startsWith("projects.project")
              ? i18nName
              : (project as any).name;

          const i18nDescription = t(`projects.project${index + 1}.description`);
          const displayDescription =
            i18nDescription &&
            typeof i18nDescription === "string" &&
            !i18nDescription.startsWith("projects.project")
              ? i18nDescription
              : (project as any).description;

          return (
            <div key={index} className="w-full h-full py-3 lg:py-6 rounded-2xl lg:rounded-4xl bg-white/16 backdrop-blur-lg shadow-lg text-white border border-white/50 hover:bg-white/20 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.02] hover:border-purple-400/50 hover:-translate-y-2 group transition-all duration-300 ease-out">
              <div className="col-span-full px-3 lg:px-6 pb-3 lg:pb-6 flex justify-between items-center">
                <div className="flex flex-col items-start gap-2">
                  <h2 className="text-xl lg:text-3xl font-bold text-center group-hover:text-purple-300 group-hover:scale-105 transition-all duration-300">
                    {displayName}
                  </h2>
                  <div className="mt-2 flex space-x-1 lg:space-x-3">
                    <span className="inline-flex items-center px-2 lg:px-3 py-1 rounded-lg bg-purple-900/80 text-purple-300 font-mono text-xs hover:scale-105 hover:bg-purple-800/90 group-hover:bg-purple-700/90 transition-all duration-300">
                      <img
                        src="/assets/images/icons8-company-32.png"
                        className="w-4 h-4 mr-1 lg:mr-2 group-hover:rotate-12 transition-transform duration-300"
                        alt="Company"
                      />
                      {project.company}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-lg bg-green-700/80 text-green-300 font-mono text-xs hover:scale-105 hover:bg-green-600/90 group-hover:bg-green-500/90 transition-all duration-300">
                      <img
                        src="/assets/images/icons8-collaborator-male-32.png"
                        className="w-4 h-4 mr-1 lg:mr-2 group-hover:rotate-12 transition-transform duration-300"
                        alt="Role"
                      />
                      {project.role}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="hidden md:inline-block px-5 py-3 border rounded-xl font-semibold shadow-lg drop-shadow-lg border-foreground/20 bg-foreground group-hover:scale-110 group-hover:bg-orange-500 group-hover:border-orange-400 group-hover:shadow-orange-500/50 transition-all duration-300">
                    {project.progress === 100 ? "Completed" : "In Development"}
                  </div>
                </div>
              </div>
              <div className="w-full h-1 bg-white/20 overflow-hidden shadow-inner group-hover:bg-white/30 transition-colors duration-300">
                <div
                  className="h-full bg-gradient-to-r from-gray-300 via-orange-300 to-orange-400 group-hover:from-purple-300 group-hover:via-pink-300 group-hover:to-orange-400 transition-all duration-500"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
              <div className="mt-4 px-3 lg:px-6 space-y-3 lg:space-y-5">
                <div>
                  <p className="text-xs lg:text-lg group-hover:text-blue-200 transition-colors duration-300">
                    {displayDescription}
                  </p>
                </div>

                <div>
                  <div className="flex items-center mb-2">
                    <img
                      src="/assets/images/icons8-hand-with-pen-32.png"
                      className="inline w-5 h-5 lg:w-7 lg:h-7 mr-2 drop-shadow group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
                      alt="Responsible"
                    />
                    <span className="font-bold text-xl lg:text-2xl tracking-wide group-hover:text-purple-300 transition-colors duration-300">
                      Responsible
                    </span>
                  </div>
                  <ul className="lg:space-y-2 mt-2 text-xs lg:text-lg">
                    {responsibilities?.map((responsibleItem, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs lg:text-base text-white/90 hover:text-orange-200 hover:translate-x-2 hover:font-medium group-hover:text-green-300 transition-all duration-300"
                      >
                        <svg
                          className="w-3 h-3 lg:w-5 lg:h-5 mt-0.5 text-orange-400 shrink-0 group-hover:text-green-400 group-hover:scale-110 transition-all duration-300"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{responsibleItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center">
                    <img
                      src="/assets/images/icons8-setting.svg"
                      className="inline w-5 h-5 lg:w-7 lg:h-7 mr-1 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
                      alt="Tech Stack"
                    />
                    <span className="font-bold text-xl lg:text-2xl tracking-wide group-hover:text-purple-300 transition-colors duration-300">
                      Tech Stack
                    </span>
                  </div>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block px-2 lg:px-3 py-1 mr-2 mt-2 rounded-lg bg-foreground text-primary font-mono text-xs lg:text-sm lg:font-semibold hover:scale-105 hover:bg-purple-500 hover:text-white group-hover:bg-purple-600 group-hover:text-white transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
