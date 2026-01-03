import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ConnectForm from "../ui/ConnectForm";
import { useTranslation } from "react-i18next";
import avatar from "@/assets/images/avatar-connect.webp";
import facebook from "@/assets/images/facebook.webp";
import github from "@/assets/images/github.webp";
import linkedin from "@/assets/images/linkedin.png";

export default function Connect() {
  const { t } = useTranslation();

  const developer = {
    name: "Cao Ngọc Giáp",
    role: "Backend Developer",
    email: "ngocgiap5204@gmail.com",
    phone: "+84 359 430 937",
    location: "Ha Noi City",
    skills: ["Backend Development", "Frontend Development", "IT Support"],

    connect: async () => {
      return await "sendMessage()";
    },
  };

  const codeString = `const developer = ${stringifyWithFunctions(developer)}`;

  function stringifyWithFunctions(obj: any) {
    const jsonString = JSON.stringify(
      obj,
      (_key, value) => {
        if (typeof value === "function") {
          return value.toString();
        }
        return value;
      },
      2
    );

    return jsonString.replace(/\"(async.*?}\s*)\"/gs, (_, fnString) => {
      let cleanFn = fnString.replace(/\\n/g, "\n");

      cleanFn = cleanFn.replace(/\\"/g, '"');

      return cleanFn.trim();
    });
  }

  return (
    <section id="connect" className="min-h-screen mt-10 md:pt-30 px-2 md:mx-5">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center hover:scale-110 hover:text-blue-400 hover:drop-shadow-2xl hover:drop-shadow-blue-500/50 animate-pulse hover:animate-none transform transition-all duration-1000 ease-out">
        {t(`connect.connect`)}
      </h1>
      <div className="grid grid-cols-full lg:grid-cols-7 gap-2 lg:gap-6 mt-5 lg:mt-10">
        <div className="grid-cols-full lg:col-span-3 rounded-2xl lg:rounded-4xl bg-white/16 backdrop-blur-lg shadow-lg text-white border border-white/50 mb-6 lg:mb-10 p-3 lg:p-6 hover:bg-white/20 hover:shadow-2xl hover:shadow-green-500/20 hover:scale-[1.02] hover:border-green-400/50 hover:-translate-y-2 group transition-all duration-300 ease-out">
          <div className="flex items-center gap-3 lg:gap-8">
            <div>
              <img
                src={avatar} 
                loading="lazy" 
                decoding="async"
                alt="Avatar - Cao Ngoc Giap"
                className="inline-block size-16 lg:size-25 rounded-full ring-2 ring-foreground outline -outline-offset-1 outline-white/10 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:ring-green-400 group-hover:outline-green-400/30"
              />
            </div>
            <div className="lg:space-y-2">
              <h3 className="text-xl lg:text-3xl font-bold transition-colors duration-300 group-hover:text-green-300">
                Cao Ngọc Giáp
              </h3>
              <h2 className="text-sm lg:text-lg transition-colors duration-300 group-hover:text-blue-300">
                Java Developer | Backend Developer
              </h2>
              <span className="inline-flex items-center rounded-md bg-green-500/40 px-2 py-1 text-xs lg:text-sm lg:font-medium text-green-500 inset-ring inset-ring-green-500 transition-all duration-300 ease-in-out group-hover:bg-green-400/60 group-hover:text-green-400 group-hover:scale-105">
                Available
              </span>
            </div>
          </div>

          <div className="mt-6 bg-white/1 backdrop-blur-lg shadow-lg rounded-xl border border-white/50 min-h-64 p-3 lg:p-6 font-mono text-xs lg:text-base transition-all duration-300 ease-in-out group-hover:bg-white/5 group-hover:border-green-400/30 group-hover:shadow-green-500/10">
            <SyntaxHighlighter
              language="javascript"
              style={dracula}
              showLineNumbers={false}
              customStyle={{
                backgroundColor: "transparent",
                padding: 0,
                margin: 0,
              }}
            >
              {codeString}
            </SyntaxHighlighter>
          </div>

          <div className="mt-6 space-y-3 text-xs lg:text-base">
            <h2 className="text-xl lg:text-2xl font-bold transition-colors duration-300 group-hover:text-green-300">
              System Status
            </h2>
            <div className="flex items-center justify-between transition-all duration-300 ease-in-out hover:bg-white/5 hover:rounded-lg hover:px-2 hover:py-1 group/status">
              <p className="font-semibold transition-colors duration-300 group-hover/status:text-blue-300">
                Email API
              </p>
              <div className="flex items-center justify-between min-w-15">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse transition-all duration-300 group-hover/status:scale-125"></span>
                <p className="transition-colors duration-300 group-hover/status:text-green-300">
                  99.9%
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between transition-all duration-300 ease-in-out hover:bg-white/5 hover:rounded-lg hover:px-2 hover:py-1 group/status">
              <p className="font-semibold transition-colors duration-300 group-hover/status:text-blue-300">
                Connect Form
              </p>
              <div className="flex items-center justify-between min-w-15">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse transition-all duration-300 group-hover/status:scale-125"></span>
                <p className="transition-colors duration-300 group-hover/status:text-green-300">
                  100%
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between transition-all duration-300 ease-in-out hover:bg-white/5 hover:rounded-lg hover:px-2 hover:py-1 group/status">
              <p className="font-semibold transition-colors duration-300 group-hover/status:text-blue-300">
                Response Time
              </p>
              <div className="flex items-center justify-between min-w-15">
                <span className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse transition-all duration-300 group-hover/status:scale-125"></span>
                <p className="transition-colors duration-300 group-hover/status:text-yellow-300">
                  {"< 24h"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid-cols-full lg:col-span-4 py-3 lg:py-6 rounded-2xl lg:rounded-4xl bg-white/16 backdrop-blur-lg shadow-lg text-white border border-white/50 mb-4 lg:mb-6 hover:bg-white/20 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-[1.02] hover:border-blue-400/50 hover:-translate-y-2 group/form transition-all duration-300 ease-out">
          <div className="flex border-b border-white/50 pb-3 lg:pb-4 px-3 lg:px-6 items-center">
            <div className="flex space-x-2 pr-3 lg:pr-4 items-center">
              <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse [animation-delay:0.15s]"></span>
              <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse [animation-delay:0.3s]"></span>
            </div>
            <p className="text-xl font-mono transition-colors duration-300 group-hover/form:text-blue-300">
              connect-form.js
            </p>
          </div>

          <ConnectForm />
        </div>
      </div>
      <div className="mb-6 lg:mb-10">
        <h2 className="text-2xl lg:text-4xl font-bold transition-colors duration-300 hover:text-blue-300">
          {t(`connect.social-network`)}
        </h2>
        <div className="flex items-center justify-start gap-3 lg:gap-4 mt-2 lg:mt-4">
          <a
            href="https://github.com/caongocgiap"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 lg:p-3 rounded-2xl bg-gray-400/40 border-2 border-gray-400 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-black/30"
          >
            <img
              src={github}
              loading="lazy"
              decoding="async"
              alt="Github"
              className="w-6 lg:w-8 h-6 lg:h-8"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ngcoogiapw/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 lg:p-3 rounded-2xl bg-blue-400/40 border-2 border-blue-400 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-blue-400/40"
          >
            <img
              src={linkedin}
              loading="lazy"
              decoding="async"
              alt="LinkedIn"
              className="w-6 lg:w-8 h-6 lg:h-8"
            />
          </a>
          <a
            href="https://www.facebook.com/ngcoogiapw"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 lg:p-3 rounded-2xl bg-blue-400/40 border-2 border-blue-400 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-blue-400/40"
          >
            <img
              src={facebook}
              loading="lazy"
              decoding="async"
              alt="Facebook"
              className="w-6 lg:w-8 h-6 lg:h-8"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
