"use client";

import { useEffect, useState } from "react";
import { Mail, Menu, PhoneCall, X } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import ThemeSwitch from "../ThemeSwitch";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
const getSectionId = (href: string) => href.replace("/", "").replace("#", "");

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("Navbar");
  const navLinks = [
    { label: t("Accueil"), href: "/#accueil" },
    { label: t("About"), href: "/about" },
    { label: t("Actualites"), href: "/news" },
    { label: t("Services"), href: "/#services" },
    // { label: t("Blog"), href: "#blog" },
    { label: t("Contact"), href: "/#contact" },
  ];
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(getSectionId(link.href)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-140px 0px -60% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="sticky top-0 z-30 w-full dark:text-white dark:bg-slate-900">
      <div className="hidden lg:flex h-[130px] justify-between items-center backdrop-blur-sm bg-white/60 px-4 gap-4 shadow-sm">
        <div className="container mx-auto flex flex-row justify-between items-center gap-4 px-4">
          <img
            src="/images/header.png"
            alt="logo"
            className="w-[160px] h-[77px] cursor-pointer"
            onClick={() => (window.location.href = "/")}
          />
          <div className="flex items-center gap-6">
            <div className="flex gap-2 items-center">
              <Mail size={40} color="#54BE73" />
              <span className="text-dark text-[18px] font-bold dark:text-white">
                sales@wysiwyg.fr
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <PhoneCall size={40} color="#54BE73" />
              <span className="text-dark text-[18px] font-bold dark:text-white">
                +33 1 34 20 16 19
              </span>
            </div>
            <div className="flex gap-4 items-center">
              {/* <a href="#">
              <FaFacebookF className="w-5 h-5 hover:text-blue-600" />
            </a>
            <a href="#">
              <FaTwitter className="w-5 h-5 hover:text-sky-500" />
            </a>
            <a href="#">
              <FaInstagram className="w-5 h-5 hover:text-pink-500" />
            </a>
            <a href="#">
              <FaPinterest className="w-5 h-5 hover:text-red-600" />
            </a> */}
              <a href="#">
                <FaLinkedin
                  className="w-5 h-5 hover:text-blue-700 rounded-[6.5px] "
                  size={50}
                  color="#000000"
                />
              </a>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block container px-20 xl:px-0 mx-auto col-span-12 fixed left-1/2 transform -translate-x-1/2 top-24 ml-14 z-20 py-2">
        <nav className="w-full bg-white rounded-full shadow-xl flex items-center justify-between h-[60px] backdrop-blur-sm bg-white/90">
          <ul className="flex items-center gap-12 list-none px-8 font-assistant text-[22px] text-gray">
            {navLinks.map((item) => {
              const isActive = activeSection === getSectionId(item.href);
              const isRouteActive = pathname === item.href;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`text-[18px] transition-colors ${
                      isActive || isRouteActive
                        ? "text-primary font-bold"
                        : "text-dark hover:text-primary font-bold"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex flex-row gap-4 items-center bg-[#54BE73] text-white text-[15px] font-semibold px-8 py-3 rounded-r-full transition-colors whitespace-nowrap">
            <LocaleSwitcher />
            <div>
              <ThemeSwitch />
            </div>
          </div>
        </nav>
      </div>
      <div className="lg:hidden fixed top-0 left-0 w-full z-30 bg-white shadow-md flex items-center justify-between px-4 h-[72px] ">
        <img
          src="/images/header.png"
          alt="logo"
          className="w-[110px] h-auto cursor-pointer"
          onClick={() => (window.location.href = "/")}
        />
        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu-panel"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="flex items-center justify-center w-11 h-11 rounded-full bg-[#54BE73] text-white shrink-0"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`lg:hidden fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } `}
        onClick={closeMobileMenu}
      />
      <div
        id="mobile-menu-panel"
        className={`lg:hidden fixed top-0 right-0 h-full w-[82%] max-w-[320px] bg-white z-50 shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } dark:bg-slate-900`}
      >
        <div className="flex items-center justify-between px-5 h-[72px] border-b border-light shrink-0 ">
          <span className="font-merriweather font-bold text-dark text-[18px]  dark:text-white ">
            Menu
          </span>
          <button
            type="button"
            aria-label="Fermer le menu"
            onClick={closeMobileMenu}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 text-dark  dark:text-white "
          >
            <X size={18} />
          </button>
        </div>

        <ul className="flex flex-col list-none font-assistant text-[17px] text-gray py-2 overflow-y-auto">
          {navLinks.map((item) => {
            const isRouteActive = pathname === item.href;
            const isActive = activeSection === getSectionId(item.href);
            return (
              <li key={item.label} className="border-b border-light ">
                <a
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`block px-5 py-4 text-[15px] font-medium transition-colors ${
                    isActive || isRouteActive
                      ? "text-primary font-bold"
                      : "text-dark hover:text-primary"
                  }  dark:text-white text-center`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-row gap-4 justify-center items-center bg-[#54BE73] text-white text-[15px] font-semibold px-8 py-1  transition-colors whitespace-nowrap">
          <LocaleSwitcher />
          <div>
            <ThemeSwitch />
          </div>
        </div>

        <div className="mt-auto px-4 py-5 border-t border-light flex flex-col gap-3 shrink-0 items-start">
          <div className="flex gap-2 items-center">
            <Mail size={22} color="#54BE73" />
            <span className="text-dark text-[14px] font-bold dark:text-white">
              sales@wysiwyg.fr
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <PhoneCall size={22} color="#54BE73" />
            <span className="text-dark text-[14px] font-bold dark:text-white">
              +33 1 34 20 16 19
            </span>
          </div>
          <div className="flex gap-4 items-center pt-2 ">
            {/* <a href="#">
              <FaFacebookF className="w-4 h-4 hover:text-blue-600" />
            </a>
            <a href="#">
              <FaTwitter className="w-4 h-4 hover:text-sky-500" />
            </a>
            <a href="#">
              <FaInstagram className="w-4 h-4 hover:text-pink-500" />
            </a>
            <a href="#">
              <FaPinterest className="w-4 h-4 hover:text-red-600" />
            </a> */}
            <a href="#">
              <FaLinkedin className="w-4 h-4 hover:text-blue-700" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const LocaleSwitcher = ({ className = "" }: { className?: string }) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggle = () => {
    const next = locale === "fr" ? "en" : "fr";
    router.replace(pathname, { locale: next });
  };

  return (
    <button
      onClick={toggle}
      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-[13px] font-semibold  ${className}`}
    >
      <span className="text-white uppercase text-[16px]">{locale}</span>
    </button>
  );
};
