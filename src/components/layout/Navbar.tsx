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

const getSectionId = (href: string) => href.replace("/", "").replace("#", "");

const navLinks = [
  { label: "Accueil", href: "/#accueil" },
  { label: "À propos", href: "/about" },
  { label: "Actualités", href: "#actualites" },
  { label: "Services", href: "/#services" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState("");

  useEffect(() => {
    setActiveRoute(window.location.pathname);

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
    <div className="sticky top-0 z-30 w-full">
      <div className="hidden lg:flex h-[155px] justify-between items-center backdrop-blur-sm bg-white/25 px-4 py-3 gap-4 shadow-sm">
        <div className="container mx-auto flex flex-row justify-between items-center gap-4">
          <img
            src="/images/header.png"
            alt="logo"
            className="w-[160px] h-[77px] cursor-pointer"
            onClick={() => (window.location.href = "/")}
          />
          <div className="flex items-center gap-6">
            <div className="flex gap-2 items-center">
              <Mail size={40} color="#54BE73" />
              <label className="text-dark text-[18px] font-bold">
                sales@wysiwyg.fr
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <PhoneCall size={40} color="#54BE73" />
              <label className="text-dark text-[18px] font-bold">
                +33 1 34 20 16 19
              </label>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <a href="#">
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
            </a>
            <a href="#">
              <FaLinkedin className="w-5 h-5 hover:text-blue-700" />
            </a>
          </div>
        </div>
      </div>
      <div className="hidden lg:block container px-4 xl:px-0 mx-auto col-span-12 fixed left-1/2 transform -translate-x-1/2 top-28 ml-14 z-20 py-2">
        <nav className="w-full bg-white rounded-full shadow-lg flex items-center justify-between h-[64px] backdrop-blur-sm bg-white/25">
          <ul className="flex items-center gap-8 list-none px-4 font-assistant text-[17px] text-gray">
            {navLinks.map((item) => {
              const isActive = activeSection === getSectionId(item.href);
              const isRouteActive = activeRoute === item.href;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`text-[15px] transition-colors ${
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

          <a
            href="#contact"
            className="bg-[#54BE73] text-white text-[15px] font-semibold px-8 py-5 rounded-r-full transition-colors whitespace-nowrap"
          >
            Get Free Quote
          </a>
        </nav>
      </div>

      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 w-full z-30 bg-white shadow-md flex items-center justify-between px-4 h-[72px]">
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

      {/* Mobile overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
      />

      {/* Mobile menu panel */}
      <div
        id="mobile-menu-panel"
        className={`lg:hidden fixed top-0 right-0 h-full w-[82%] max-w-[320px] bg-white z-50 shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 h-[72px] border-b border-light shrink-0">
          <span className="font-merriweather font-bold text-dark text-[18px]">
            Menu
          </span>
          <button
            type="button"
            aria-label="Fermer le menu"
            onClick={closeMobileMenu}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 text-dark"
          >
            <X size={18} />
          </button>
        </div>

        <ul className="flex flex-col list-none font-assistant text-[17px] text-gray py-2 overflow-y-auto">
          {navLinks.map((item) => {
            const isActive = activeSection === getSectionId(item.href);
            const isRouteActive = activeRoute === item.href;
            return (
              <li key={item.label} className="border-b border-light">
                <a
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`block px-5 py-4 text-[15px] font-medium transition-colors ${
                    isActive || isRouteActive
                      ? "text-primary font-bold"
                      : "text-dark hover:text-primary"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          onClick={closeMobileMenu}
          className="block bg-[#54BE73] text-white text-[15px] font-semibold text-center mx-5 mt-4 px-6 py-3 rounded-full transition-colors"
        >
          Get Free Quote
        </a>

        <div className="mt-auto px-5 py-5 border-t border-light flex flex-col gap-3 shrink-0">
          <div className="flex gap-2 items-center">
            <Mail size={22} color="#54BE73" />
            <label className="text-dark text-[14px] font-bold">
              sales@wysiwyg.fr
            </label>
          </div>
          <div className="flex gap-2 items-center">
            <PhoneCall size={22} color="#54BE73" />
            <label className="text-dark text-[14px] font-bold">
              +33 1 34 20 16 19
            </label>
          </div>
          <div className="flex gap-4 items-center pt-2">
            <a href="#">
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
            </a>
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
