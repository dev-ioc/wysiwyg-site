"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaLinkedin,
} from "react-icons/fa";
import { ChevronDown, ChevronUp } from "lucide-react";

const Footer = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaFacebookF,
      label: "Facebook",
      color: "hover:text-blue-600",
      url: "#",
    },
    {
      icon: FaTwitter,
      label: "Twitter",
      color: "hover:text-sky-500",
      url: "#",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      color: "hover:text-pink-500",
      url: "#",
    },
    {
      icon: FaPinterest,
      label: "Pinterest",
      color: "hover:text-red-600",
      url: "#",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      color: "hover:text-blue-700",
      url: "#",
    },
  ];

  const navigationLinks = [
    { label: "Accueil", href: "/#acueil" },
    { label: "À propos", href: "/about" },
    { label: "Actualités", href: "/actualites" },
    { label: "Services", href: "/#services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/#contact" },
  ];

  const servicesList = [
    "Gestion & Comptabilité",
    "Production Management",
    "Analyse Prédictive / BI",
    "ISO Management Systems",
    "Architecte ERP et BPM",
    "Supply chain Management",
  ];

  return (
    <footer
      role="contentinfo"
      aria-label="Pied de page"
      className="bg-[#F1F1F1]"
    >
      <div className="w-full py-12 md:py-16 px-4 bg-[url('/images/bg-footer.png')] bg-cover bg-center bg-no-repeat min-h-[584px]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
            <div className="relative w-[150px] md:w-[188px] h-[120px] md:h-[148px]">
              <Image
                src="/images/logo-footer.png"
                alt="Logo WYSIWYG"
                fill
                className="object-contain"
                priority={false}
                loading="lazy"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {socialLinks.map(({ icon: Icon, label, color, url }) => (
                <a
                  key={label}
                  href={url}
                  aria-label={`Suivez-nous sur ${label}`}
                  className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-black rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg"
                >
                  <Icon
                    className={`w-4 h-4 md:w-5 md:h-5 text-white ${color} transition-colors duration-300`}
                  />
                </a>
              ))}
            </div>
          </div>

          <hr className="border-[#b3b4b5] w-full mt-6 md:mt-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 py-8 md:py-12">
            <section
              aria-labelledby="contact-title"
              className="text-center md:text-left"
            >
              <h2
                id="contact-title"
                className="text-[20px] text-[#FFFFFF] font-poppins font-bold mb-4 md:mb-6"
              >
                Contactez-nous
              </h2>
              <div className="text-black text-[15px] md:text-[16px] font-assistant leading-[1.8rem] space-y-3">
                <p>
                  WYSIWYG a été créée le 1er Avril 1999{" "}
                  <br className="hidden md:block" />
                  par Xavier LOPEZ.
                </p>
                <address className="not-italic space-y-1">
                  <p>
                    Téléphone :{" "}
                    <a
                      href="tel:+330892490071"
                      className="hover:text-[#52BC71] transition-colors"
                    >
                      +33 08 92 49 00 71
                    </a>
                  </p>
                  <p>
                    E-mail :{" "}
                    <a
                      href="mailto:support@caspeo.fr"
                      className="hover:text-[#52BC71] transition-colors"
                    >
                      support@caspeo.fr
                    </a>
                  </p>
                  <p>
                    Site web :{" "}
                    <a
                      href="https://exemple.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#52BC71] transition-colors"
                    >
                      https://exemple.com
                    </a>
                  </p>
                </address>
              </div>
            </section>
            <section
              aria-labelledby="services-title"
              className="text-center md:text-left"
            >
              <h2
                id="services-title"
                className="text-[20px] text-[#FFFFFF] font-poppins font-bold mb-4 md:mb-6"
              >
                Nos Services
              </h2>
              <ul className="text-black text-[15px] md:text-[16px] font-assistant space-y-2 leading-[1.6rem]">
                {servicesList.map((service) => (
                  <li key={service}>
                    <Link
                      href={`/services/${service.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                      className="hover:text-[#52BC71] transition-colors duration-300"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
            <section
              aria-labelledby="navigation-title"
              className="text-center md:text-left"
            >
              <div className="flex items-center justify-between md:justify-start cursor-pointer md:cursor-default">
                <h2
                  id="navigation-title"
                  className="text-[20px] text-[#FFFFFF] font-poppins font-bold"
                >
                  Navigation
                </h2>
                <button
                  onClick={() => setIsNavOpen(!isNavOpen)}
                  className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                  aria-expanded={isNavOpen}
                  aria-label="Menu de navigation"
                >
                  {isNavOpen ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
              </div>

              <nav
                aria-label="Navigation principale"
                className={`flex flex-col gap-3 mt-4 md:mt-6 ${
                  isNavOpen ? "block" : "hidden md:flex"
                }`}
              >
                {navigationLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-black text-[15px] md:text-[16px] hover:text-[#52BC71] transition-colors duration-300 relative group w-fit mx-auto md:mx-0"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#52BC71] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </nav>
            </section>
          </div>
        </div>
      </div>
      <div className="bg-black w-full py-4 md:py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 text-white gap-2 md:gap-0">
          <p className="text-sm md:text-base text-center">
            &copy; Copyright {currentYear} WYSIWYG. Tous droits réservés
          </p>
          <p className="text-sm md:text-base text-center">
            Conception par l&apos;équipe IOC
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
