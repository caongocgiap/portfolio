import { useTranslation } from "react-i18next";
import collaborator from "@/assets/images/icons8-collaborator-male-32.webp";
import company from "@/assets/images/icons8-company-32.png";
import handWithPen from "@/assets/images/icons8-hand-with-pen-32.png";
import setting from "@/assets/images/icons8-setting.svg";

type Project = {
  name: string;
  company: string;
  timeframe: string;
  technologies: string[];
  role: string;
  progress: number;
  description: string;
  responsible: string[];
  teamSize?: number;
  linkGithub?: string;
  linkDemo?: string;
  linkYoutube?: string;
};

export default function Projects() {
  const { t } = useTranslation();

  const projects = t("projects.project", { returnObjects: true }) as Project[];

  return (
    <section id="projects" className="min-h-screen md:pt-30">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center hover:scale-110 hover:text-blue-400 hover:drop-shadow-2xl hover:drop-shadow-blue-500/50 animate-pulse hover:animate-none transform transition-all duration-1000 ease-out">
        {t("projects.title")}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 mt-5 lg:mt-10 mx-2 md:mx-5 justify-items-center">
        {projects.map((project: Project, index: number) => {
          const responsibilities: string[] = project.responsible || [];

          const displayDescription = project.description || "";

          return (
            <div key={index} className="w-full h-full py-3 lg:py-6 rounded-2xl lg:rounded-4xl bg-white/16 backdrop-blur-lg shadow-lg text-white border border-white/50 hover:bg-white/20 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.02] hover:border-purple-400/50 hover:-translate-y-2 group transition-all duration-300 ease-out">
              <div className="col-span-full px-3 lg:px-6 pb-3 lg:pb-6 flex justify-between items-center">
                <div className="flex flex-col items-start gap-2">
                  <h2 className="text-xl lg:text-3xl font-bold text-center group-hover:text-purple-300 group-hover:scale-105 transition-all duration-300">
                    {project.name}
                  </h2>
                  <p className="text-[10px] lg:text-xs text-white/60 font-mono">
                    {project.timeframe}
                  </p>
                  <div className="mt-2 flex space-x-1 lg:space-x-3 flex-wrap">
                    <span className="inline-flex items-center px-2 lg:px-3 py-1 rounded-lg bg-purple-900/80 text-purple-300 font-mono text-xs hover:scale-105 hover:bg-purple-800/90 group-hover:bg-purple-700/90 transition-all duration-300">
                      <img
                        src={company}
                        loading="lazy"
                        decoding="async"
                        className="w-4 h-4 mr-1 lg:mr-2 group-hover:rotate-12 transition-transform duration-300"
                        alt="Company"
                      />
                      {project.company}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-lg bg-green-700/80 text-green-300 font-mono text-xs hover:scale-105 hover:bg-green-600/90 group-hover:bg-green-500/90 transition-all duration-300">
                      <img
                        src={collaborator}
                        loading="lazy"
                        decoding="async"
                        className="w-4 h-4 mr-1 lg:mr-2 group-hover:rotate-12 transition-transform duration-300"
                        alt="Role"
                      />
                      {project.role}
                    </span>
                    {project.teamSize && (
                      <span className="inline-flex items-center px-2 lg:px-3 py-1 rounded-lg bg-blue-700/80 text-blue-300 font-mono text-xs hover:scale-105 hover:bg-blue-600/90 group-hover:bg-blue-500/90 transition-all duration-300">
                        <svg
                          className="w-4 h-4 mr-1 lg:mr-2 group-hover:rotate-12 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        Team: {project.teamSize}
                      </span>
                    )}
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
                      src={handWithPen}
                      loading="lazy"
                      decoding="async"
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
                      src={setting}
                      loading="lazy"
                      decoding="async"
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

                {(project.linkGithub || project.linkDemo || project.linkYoutube) && (
                  <div className="mt-4 lg:mt-6 flex items-center gap-2 lg:gap-3 flex-wrap">
                    {project.linkGithub && (
                      <a
                        href={project.linkGithub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 lg:gap-2 px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg bg-gray-700/80 text-white font-medium text-xs lg:text-sm hover:scale-105 hover:bg-gray-600/90 group-hover:bg-gray-500/90 transition-all duration-300 border-none"
                      >
                        <span>Link GitHub</span>
                        <svg
                          className="w-4 h-4 lg:w-5 lg:h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    )}
                    {project.linkDemo && (
                      <a
                        href={project.linkDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 lg:gap-2 px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg bg-blue-600/80 text-white font-medium text-xs lg:text-sm hover:scale-105 hover:bg-blue-500/90 group-hover:bg-blue-400/90 transition-all duration-300 border-none"
                      >
                        <span>Link demo</span>
                        <svg
                          className="w-4 h-4 lg:w-5 lg:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                    {project.linkYoutube && (
                      <a
                        href={project.linkYoutube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 lg:gap-2 px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg bg-red-600/80 text-white font-medium text-xs lg:text-sm hover:scale-105 hover:bg-red-500/90 group-hover:bg-red-400/90 transition-all duration-300 border-none"
                      >
                        <span>Link YouTube</span>
                        <svg
                          className="w-4 h-4 lg:w-5 lg:h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
