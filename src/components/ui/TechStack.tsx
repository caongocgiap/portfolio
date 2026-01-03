import JavaIcon from "@/assets/images/java.svg?react";
import SpringBootIcon from "@/assets/images/spring-boot.svg?react";
import MysqlIcon from "@/assets/images/mysql.svg?react";
import ThymeleafIcon from "@/assets/images/thymeleaf.svg?react";
import TailwindcssIcon from "@/assets/images/tailwindcss.svg?react";
import TypescriptIcon from "@/assets/images/typescript.svg?react";
import ReactIcon from "@/assets/images/react.svg?react";
import TechStackItem from "./TechStackItem";
import setting from "@/assets/images/icons8-setting.svg";

const ICONS = {
  java: JavaIcon,
  springBoot: SpringBootIcon,
  mysql: MysqlIcon,
  thymeleaf: ThymeleafIcon,
  tailwindcss: TailwindcssIcon,
  typescript: TypescriptIcon,
  react: ReactIcon,
};

export default function TechStack() {
  return (
    <>
      <div className="flex items-center mb-4 lg:mb-6 group cursor-pointer">
        <img
          src={setting}
          loading="lazy"
          decoding="async"
          className="inline w-5 h-5 lg:w-12 lg:h-12 mr-1 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-12"
          alt="Tech Stack"
        />
        <h2 className="text-2xl lg:text-4xl font-bold transition-all duration-300 ease-in-out group-hover:scale-105">
          Tech Stack
        </h2>
      </div>
      <div className="inline-flex flex-wrap gap-6 lg:gap-8">
        {Object.entries(ICONS).map(([key, icon]) => (
          <TechStackItem
            key={key}
            Icon={icon}
            label={key.charAt(0).toUpperCase() + key.slice(1)}
          />
        ))}
      </div>
    </>
  );
}
