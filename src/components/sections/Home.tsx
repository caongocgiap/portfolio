import TechStack from "../ui/TechStack";
import avatar from "@/assets/images/avatar-2.webp";
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";
import cvUrl from "@/assets/cv/intern-backend_caongocgiap.html?url";

export default function Home() {
  const { t } = useTranslation();
  const handleHireMeClick = () => {
    const connectSection = document.getElementById("connect");
    if (connectSection) {
      connectSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      setTimeout(() => {
        const nameInput = document.getElementById("name") as HTMLInputElement;
        if (nameInput) {
          nameInput.focus();
        }
      }, 500);
    }
  };

  const handleViewCVClick = () => {
    window.open(cvUrl, "_blank");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-[100px]"
    >
      <div className="mb-5 lg:mb-10">
        <h2 className="text-2xl lg:text-4xl font-base mb-2 lg:mb-4">
          <span className="text-foreground opacity-70">
            {t("home.Hi, I am")}
          </span>{" "}
          <span className="font-semibold text-primary">Giap</span>
        </h2>
        <h1 className="text-4xl lg:text-8xl font-semibold mb-3 lg:mb-5">
          <Typewriter
            options={{
              strings: ["Java Developer", "Backend Developer", "Web Developer"],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 70,
            }}
          />
        </h1>
        <p className="text-lg lg:text-xl font-normal opacity-70 lg:max-w-2/3">
          {t("home.I am always")}
        </p>
      </div>
      <div className="flex gap-3 lg:gap-5 mb-5 lg:mb-10">
        <button
          onClick={handleHireMeClick}
          className="px-3 py-2 lg:px-6 lg:py-4 bg-foreground rounded-3xl lg:rounded-[40px] font-normal text-lg lg:text-2xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-orange-500/50 hover:bg-orange-500 hover:-translate-y-1 active:scale-95"
        >
          {t("home.hireMe")}
        </button>
        <button
          onClick={handleViewCVClick}
          className="border border-white rounded-[100px] bg-white/10 w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-110 hover:bg-white/20 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-400/50 hover:-translate-y-1 hover:rotate-6 active:scale-95 group"
        >
          <svg
            className="w-8 h-8 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              className="transition-all duration-300 ease-in-out group-hover:stroke-blue-400"
            />
          </svg>
          {/* <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-12"
          >
            <path
              d="M8.75668 10.6223L12.4342 12.7973C14.5779 14.0648 15.4342 14.0648 17.5792 12.7973L21.2567 10.6223"
              stroke="white"
              stroke-width="1.60714"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="transition-all duration-300 ease-in-out group-hover:stroke-blue-400"
            />
            <path
              d="M2.52233 16.844C2.60358 20.6753 2.64483 22.5915 4.05858 24.0103C5.47233 25.4303 7.43983 25.479 11.3761 25.5778C13.8011 25.6403 16.2036 25.6403 18.6286 25.5778C22.5648 25.479 24.5323 25.4303 25.9461 24.0103C27.3598 22.5915 27.4011 20.6753 27.4836 16.844C27.5086 15.6115 27.5086 14.3865 27.4836 13.154C27.4011 9.32276 27.3598 7.40651 25.9461 5.98776C24.5323 4.56776 22.5648 4.51901 18.6286 4.42026C16.2115 4.35926 13.7932 4.35926 11.3761 4.42026C7.43983 4.51901 5.47233 4.56776 4.05858 5.98776C2.64483 7.40651 2.60358 9.32276 2.52108 13.154C2.49476 14.3839 2.49601 15.6141 2.52233 16.844Z"
              stroke="white"
              stroke-width="1.60714"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="transition-all duration-300 ease-in-out group-hover:stroke-blue-400"
            />
          </svg> */}
        </button>
      </div>
      <hr className="color-white opacity-30 w-3/4 lg:w-2/5" />
      <div className="mt-5 lg:mt-10">
        <TechStack />
      </div>
      <div className="hidden lg:block lg:absolute bottom-0 right-0">
        <img src={avatar} alt="image-home" loading="lazy" decoding="async" />
      </div>
    </section>
  );
}
