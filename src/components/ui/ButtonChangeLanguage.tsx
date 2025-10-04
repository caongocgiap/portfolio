import { useEffect, useState } from "react";
import i18n from "../../config/i18n";
import vi from "/assets/images/vi.png";
import en from "/assets/images/en.png";

export default function ButtonChangeLanguage() {
  const [language, setLanguage] = useState(i18n.language || "en");
  const isEnglish = language === "en";

  const handleChangeLanguage = () => {
    const newLanguage = isEnglish ? "vi" : "en";
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("LANGUAGE", newLanguage);
  };

  useEffect(() => {
    const languageStorage = localStorage.getItem("LANGUAGE");
    const currentLanguage = languageStorage || i18n.language || "en";
    i18n.changeLanguage(currentLanguage);
    setLanguage(currentLanguage);
  }, []);

  return (
    <>
      <button
      onClick={handleChangeLanguage}
      className={`flex items-center cursor-pointer transition-transform duration-500 border border-foreground rounded-full p-2 ${
        isEnglish ? "rotate-360" : "rotate-0"
      }`}
    >
      <img src={isEnglish ? en : vi} alt="Language" className="h-8 w-8 lg:h-12 lg:w-12 rotate-0 transition-all hover:scale-105" />
    </button>
    </>
  );
};
