"use client";

import { useEffect, useState } from "react";
import { Mail, PhoneCall } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const getSectionId = (href: string) => href.replace("/", "").replace("#", "");

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#about-section" },
  { label: "Actualités", href: "#actualites" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("accueil");

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

  return (
    <section id="accueil">
      <div className="grid grid-cols-12 col-span-12 h-[761px] w-full border-b border-light bg-[url('/images/bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="col-span-12 flex flex-col lg:flex-row h-auto lg:h-[150px] justify-between items-center bg-white/40 px-4 py-3 gap-4">
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-4">
            <img
              src="/images/header.png"
              alt="logo"
              className="w-[160px] h-[77px] cursor-pointer"
              onClick={() => (window.location.href = "/")}
            />
            <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6">
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
        <div className="container px-4 xl:px-0 mx-auto col-span-12 flex  fixed left-1/2 transform -translate-x-1/2 top-28 ml-14 z-20 py-2 ">
          <nav className="w-full bg-white rounded-full shadow-lg flex items-center justify-between h-[64px] backdrop-blur-sm bg-white/25">
            <ul className="flex items-center gap-8 list-none px-4 font-assistant text-[17px] text-gray">
              {navLinks.map((item) => {
                const isActive = activeSection === getSectionId(item.href);
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={`text-[15px] font-medium transition-colors ${
                        isActive
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
              className="bg-[#54BE73] text-white text-[15px] font-semibold space-x-4 px-8 py-[1.3rem] rounded-r-full transition-colors whitespace-nowrap"
            >
              Get Free Quote
            </a>
          </nav>
        </div>

        <div className="col-span-12 col-start-5 flex flex-col items-center justify-center text-center gap-4 px-6 py-10 text-white relative z-10 -top-40 w-[583px]">
          <span className="text-[53px] font-bold font-merriweather ">
            WYSIWYG
          </span>
          <span className="max-w-[500px] text-[20px] text-center md:text-base text-secondary font-assistant font-bold">
            Ce nom est basé sur un concept basique de qualité totale. Chaque
            entreprise doit avoir une vision de ce qu’elle veut être
          </span>

          <button className="bg-secondary px-6 py-2 rounded-full text-black font-medium  transition font-assistant">
            En savoir plus
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
