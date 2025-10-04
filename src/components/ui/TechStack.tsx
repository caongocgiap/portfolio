const images = [
  "java",
  "spring-boot",
  "mysql",
  "thymeleaf",
  "tailwindcss",
  "typescript",
  "react",
];

export default function TechStack() {
  return (
    <>
      <div className="flex items-center mb-4 lg:mb-6 group cursor-pointer">
        <img
          src="/assets/images/icons8-setting.svg"
          className="inline w-5 h-5 lg:w-12 lg:h-12 mr-1 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-12"
          alt="Tech Stack"
        />
        <h2 className="text-2xl lg:text-4xl font-bold transition-all duration-300 ease-in-out group-hover:scale-105">
          Tech Stack
        </h2>
      </div>
      <div className="inline-block">
        {images.map((img, key) => (
          <div className="inline-block" key={key}>
            <div
              key={key}
              className="flex flex-col items-center mr-4 lg:mr-8 mt-3 lg:mt-5 group cursor-pointer"
            >
              <div className="relative">
                <img
                  src={`/assets/images/${img}.svg`}
                  alt={img}
                  className="w-8 h-8 lg:w-12 lg:h-12 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-6 group-hover:drop-shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out blur-sm"></div>
              </div>
              <span className="mt-2 text-xs lg:text-sm text-center text-foreground/80 transition-all duration-300 ease-in-out group-hover:text-foreground group-hover:font-semibold group-hover:scale-105">
                {img.charAt(0).toUpperCase() + img.slice(1).replace("-", " ")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
