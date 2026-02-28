import { useEffect, useState, useRef } from "react";
import ButtonDownloadCV from "../ui/ButtonDownloadCV";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const lastScrollYRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);
  const { t } = useTranslation();
  const MENU = [
    { id: "home", label: t("header.home") },
    { id: "experience", label: t("header.experience") },
    { id: "projects", label: t("header.projects") },
    { id: "connect", label: t("header.connect") },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const getCurrentSection = () => {
    const sectionsEng = ["home", "experience", "projects", "connect"];
    const sections = sectionsEng.map(item => item.toLowerCase());
    const scrollPosition = window.scrollY + 100;

    for (let i = sections.length - 1; i >= 0; i--) {
      const element = document.getElementById(sections[i]);
      if (element && element.offsetTop <= scrollPosition) {
        return sections[i];
      }
    }
    return "home";
  };

  useEffect(() => {
    const updateActiveSection = () => {
      const currentSection = getCurrentSection();
      setActiveSection(currentSection);
    };

    const handleScroll = () => {
      if (rafIdRef.current != null) return;
      rafIdRef.current = window.requestAnimationFrame(() => {
        rafIdRef.current = null;

        updateActiveSection();

        const currentScrollY = window.scrollY;
        const lastScrollY = lastScrollYRef.current;
        const delta = currentScrollY - lastScrollY;
        lastScrollYRef.current = currentScrollY;

        if (isMobileMenuOpen || currentScrollY < 80) {
          setIsHeaderVisible(true);
        } else if (Math.abs(delta) > 10) {
          setIsHeaderVisible(delta < 0);
        }

        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
        }
      });
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      if (rafIdRef.current != null) {
        window.cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 py-4 md:py-7.5 z-50 bg-black md:bg-transparent w-full backdrop-blur-md transform transition-transform duration-300 ease-out ${isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="container mx-auto flex h-12 md:h-16 items-center justify-between px-4 md:px-0">
        <h1 className="font-semibold text-2xl md:text-4xl cursor-pointer" onClick={() => scrollToSection("home")}>Ngcoo.Giapw_</h1>

        <div className="hidden lg:flex gap-4">
          <nav className="border border-white/30 px-10 py-4 rounded-full">
            <ul className="flex gap-20 font-normal text-2xl">
              {MENU.map((item, key) => (
                <li key={key}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`hover:opacity-100 transition-all duration-200 cursor-pointer ${activeSection === item.id
                      ? 'text-foreground opacity-100'
                      : 'opacity-70'
                      }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <ButtonDownloadCV />
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ButtonDownloadCV />

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex flex-col gap-1 p-2"
            aria-label="Toggle mobile menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </div>

      <div
        ref={mobileMenuRef}
        className={`lg:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
          }`}
      >
        <nav className="container mx-auto px-4 py-6">
          <ul className="flex flex-col gap-4 font-normal text-xl opacity-70">
            {MENU.map((item, key) => (
              <li key={key}>
                <button
                  className={`w-full text-left py-2 hover:opacity-100 transition-all duration-200 ${activeSection === item.id
                    ? 'text-foreground opacity-100'
                    : 'opacity-70'
                    }`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
