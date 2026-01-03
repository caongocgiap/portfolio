import { useTranslation } from "react-i18next";
import cv from "@/assets/cv/intern-backend_caongocgiap.pdf?url";

export default function ButtonDownloadCV() {
  const {t} = useTranslation();

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cv;
    link.download = "intern-backend_caongocgiap.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <button 
        onClick={handleDownloadCV}
        className="hidden lg:flex border border-foreground px-5.5 py-4 rounded-full items-center gap-2 opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 hover:bg-orange-500/10"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span className="text-lg font-normal">{t("header.DownloadCV")}</span>
      </button>
      
      <button 
        onClick={handleDownloadCV}
        className="lg:hidden group relative border border-foreground px-3 py-2 rounded-[40px] flex items-center gap-1 opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 hover:bg-orange-500/10"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span className="text-sm font-normal relative z-10">CV</span>
      </button>
    </>
  );
}
