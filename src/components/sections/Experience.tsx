import experiences from "../../data/experiences.json";
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";

export default function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="min-h-screen md:pt-30 mx-2 md:mx-5">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center hover:scale-110 hover:text-blue-400 hover:drop-shadow-2xl hover:drop-shadow-blue-500/50 animate-pulse hover:animate-none transform transition-all duration-1000 ease-out">
        {t("experience.experience")}
      </h1>
      <div className="mt-5 lg:mt-10 flex flex-col justify-center items-center">
        <div className="w-full lg:w-3/4 py-3 lg:py-6 rounded-2xl lg:rounded-4xl bg-white/16 backdrop-blur-lg shadow-lg text-white border border-white/50 lg:mb-10 transition-all duration-500 ease-in-out hover:bg-white/20 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-[1.02] hover:border-blue-400/50 group">
          <div className="flex border-b border-white/50 pb-4 px-3 lg:px-6 items-center">
            <div className="flex space-x-1 lg:space-x-2 border-r-2 border-white/50 pr-1 lg:pr-4 h-6 items-center mr-1 lg:mr-4">
              <span className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-red-500 animate-pulse"></span>
              <span className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-yellow-500 animate-pulse [animation-delay:0.15s]"></span>
              <span className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-green-500 animate-pulse [animation-delay:0.3s]"></span>
            </div>
            <img
              src="/assets/images/icons8-terminal-32.png"
              alt="Terminal"
              className="w-5 h-5 lg:w-6 lg:h-6 mr-1 lg:mr-3 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-12"
            />
            <div className="text-lg lg:text-xl font-mono font-semibold">
              <Typewriter
                options={{
                  strings: "Git log -- Experience --",
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </div>
          </div>
          <div className="px-3 lg:px-6">
            <p className="text-xs lg:text-lg mt-4 font-mono">
              <span className="text-green-500">me@work </span>
              <span className="text-pink-500">MINGW64 </span>
              <span className="text-yellow-500">~/git </span>
              <span className="text-cyan-500">{"(main)"}</span>
            </p>
            <p className="text-xs lg:text-lg font-mono">
              $ git log --oneline --decorate --all
            </p>
            {experiences.map((exp, index) => (
              <div key={index} className="text-xs lg:text-lg">
                <p className="text-yellow-500 lg:mt-3">
                  Commit: {exp.role} at {exp.company}
                  <span className="ml-3">{"("}</span>
                  <span className="text-cyan-500">{"HEAD-> "}</span>
                  <span className="text-green-500">{"main"}</span>
                  <span>{")"}</span>
                </p>
                <p>
                  {t("experience.Date")}: {exp.period}
                </p>
                <p>{t("experience.Responsibility")}:</p>
                <ul className="ps-4 py-3 lg:ps-10 lg:py-5">
                  {exp.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="transition-all duration-300 ease-in-out hover:text-blue-300 hover:translate-x-2 hover:font-medium"
                    >
                      {t(`experience.${detail}`)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <p className="text-xs lg:text-lg">
              <span className="text-green-500">me@work </span>
              <span className="text-pink-500">MINGW64 </span>
              <span className="text-yellow-500">~/git </span>
              <span className="text-cyan-500">{"(main)"}</span>
            </p>
            <p className="text-xs lg:text-lg">
              $ <span className="terminal-cursor"></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
