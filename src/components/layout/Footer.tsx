"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaLinkedin,
} from "react-icons/fa";
import { ChevronUp } from "lucide-react";
import { useTranslations } from "next-intl";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaTwitter, label: "Twitter", url: "#" },
    { icon: FaLinkedin, label: "LinkedIn", url: "#" },
    { icon: FaInstagram, label: "Instagram", url: "#" },
    { icon: FaFacebookF, label: "Facebook", url: "#" },
    { icon: FaPinterest, label: "Pinterest", url: "#" },
  ];

  const t = useTranslations("Navbar");
  const ts = useTranslations("NosServices");
  const tf = useTranslations("Footer");

  const navigationLinks = [
    { label: t("Accueil"), href: "/#accueil" },
    { label: t("About"), href: "/about" },
    { label: t("Blog"), href: "/blog" },
    { label: t("Services"), href: "/#services" },
    { label: t("Contact"), href: "/#contact" },
    { label: tf("privacyPolicy"), href: "/privacy-policy" },
    { label: tf("legalNotice"), href: "/legal-notice" },
  ];

  const servicesList = tf.raw("servicesList") as string[];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      role="contentinfo"
      aria-label="Pied de page"
      className="bg-[#123932]"
    >
      <div className="relative overflow-hidden py-14 md:py-20 px-4">
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.15]"
          viewBox="0 0 1000 500"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polyline
            points="200,500 520,60 850,500"
            fill="none"
            stroke="#F5EFE6"
            strokeWidth="1"
          />
          <polyline
            points="380,500 650,180 1000,500"
            fill="none"
            stroke="#F5EFE6"
            strokeWidth="1"
          />
          <polyline
            points="0,500 220,260 460,500"
            fill="none"
            stroke="#F5EFE6"
            strokeWidth="1"
          />
        </svg>

        <div className="relative z-10 container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-12 md:gap-8">
            <section className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                <div className="relative w-[34px] h-[34px] flex-shrink-0">
                  <img
                    src="/images/logo-footer.png"
                    alt="Logo WYSIWYG"
                    className="object-contain w-full h-full"
                    loading="lazy"
                  />
                </div>
                <span className="text-white font-poppins font-bold tracking-[0.15em] text-lg">
                  WYSIWYG
                </span>
              </div>

              <p className="text-white/70 text-[14px] md:text-[15px] font-assistant leading-[1.8rem] max-w-sm mx-auto md:mx-0 mb-6">
                {tf("description")}
              </p>

              <div className="flex justify-center md:justify-start gap-3 mb-8">
                {socialLinks.map(({ icon: Icon, label, url }) => (
                  <a
                    key={label}
                    href={url}
                    aria-label={`Suivez-nous sur ${label}`}
                    className="w-[38px] h-[38px] rounded-full border border-white/25 flex items-center justify-center text-white hover:bg-[#E3A73D] hover:border-[#E3A73D] hover:text-[#123932] transition-all duration-300"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>

              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 border border-white/30 text-white text-[12px] font-semibold tracking-[0.1em] uppercase px-4 py-2.5 rounded hover:bg-white/10 transition-colors duration-300"
              >
                <ChevronUp size={16} />
                Back to top
              </button>
            </section>
            <section
              aria-labelledby="navigation-title"
              className="text-center md:text-left"
            >
              <h2
                id="navigation-title"
                className="text-white font-poppins font-bold text-[15px] tracking-[0.1em] uppercase mb-6"
              >
                {tf("navigation")}
              </h2>
              <nav
                aria-label="Navigation principale"
                className="flex flex-col gap-3"
              >
                {navigationLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`text-[14px] md:text-[15px] w-fit mx-auto md:mx-0 transition-colors duration-300 ${
                      index === 0
                        ? "text-white underline underline-offset-4"
                        : "text-white/70 hover:text-[#E3A73D]"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </section>
            <section
              aria-labelledby="services-title"
              className="text-center md:text-left"
            >
              <h2
                id="services-title"
                className="text-white font-poppins font-bold text-[15px] tracking-[0.1em] uppercase mb-6"
              >
                {ts("title")}
              </h2>
              <ul className="flex flex-col gap-3 text-[14px] md:text-[15px] text-white/70 font-assistant">
                {servicesList.map((service) => (
                  <li
                    key={service}
                    className="hover:text-[#E3A73D] transition-colors duration-300"
                  >
                    {service}
                  </li>
                ))}
              </ul>

              <address className="not-italic mt-6 space-y-1 text-[13px] text-white/60 font-assistant">
                <p>
                  <span className="text-[#E3A73D]">{tf("phone")}</span> : +33 92
                  49 00 71
                </p>
                <p>
                  <span className="text-[#E3A73D]">{tf("email")}</span> :
                  support@caspeo.fr
                </p>
              </address>
            </section>
          </div>
        </div>
      </div>
      <div className="bg-black w-full py-3">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[13px] md:text-sm text-white font-semibold">
            &copy; {currentYear} WYSIWYG. {tf("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
