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
import { useTranslations } from "next-intl";

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
  const t = useTranslations("Navbar");
  const ts = useTranslations("NosServices");
  const navigationLinks = [
    { label: t("Accueil"), href: "/#accueil" },
    { label: t("About"), href: "/about" },
    { label: t("Blog"), href: "/blog" },
    { label: t("Services"), href: "/#services" },
    // { label: t("Blog"), href: "#blog" },
    { label: t("Contact"), href: "/#contact" },
  ];
  const tf = useTranslations("Footer");
  const servicesList = tf.raw("servicesList") as string[];
  // const recentArticles = [
  //   "Test 1",
  //   "Test 2",
  //   "Test 3",
  //   "Test 4",
  //   "Test 5",
  //   "Test 6",
  // ];

  return (
    <footer
      role="contentinfo"
      aria-label="Pied de page"
      className="bg-[#F1F1F1]"
    >
      <div className="relative w-full py-12 md:py-16 px-4 bg-[url('https://www.wysiwyg.fr/wp-content/uploads/elementor/thumbs/pexels-brett-sayles-4508751-r4vkxymyczvr9djw100tz1iyeskebu44sw56c319jo.jpg')] bg-cover bg-center bg-no-repeat min-h-[584px]">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 container mx-auto lg:px-12">
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
          <hr className="border-white/20 w-full mt-6 md:mt-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-20 py-8 md:py-12">
            <section
              aria-labelledby="contact-title"
              className="text-center md:text-left"
            >
              <h2
                id="contact-title"
                className="text-[20px] text-white font-poppins font-bold mb-4 md:mb-6"
              >
                {tf("contact")}
              </h2>
              <div className="text-white/90 text-[14px] md:text-[15px] font-assistant leading-[1.8rem] space-y-3">
                <p>{tf("description")}</p>
                <address className="not-italic space-y-1">
                  <p>
                    <span className="text-[#52BC71]">{tf("phone")}</span> : +33
                    92 49 00 71
                  </p>
                  <p>
                    <span className="text-[#52BC71]">{tf("email")}</span> :
                    support@caspeo.fr
                  </p>
                  <p>
                    <span className="text-[#52BC71]">{tf("website")} </span> :{" "}
                    <a
                      href="https://wysiwyg-website.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#52BC71] transition-colors"
                    >
                      https://wysiwyg-website.onrender.com
                    </a>
                  </p>
                </address>
              </div>
            </section>
            <section
              aria-labelledby="navigation-title"
              className="text-center md:text-left"
            >
              <div className="flex items-center justify-between md:justify-start cursor-pointer md:cursor-default">
                <h2
                  id="navigation-title"
                  className="text-[20px] text-white font-poppins font-bold"
                >
                  {tf("navigation")}
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
                className={`flex flex-col gap-2 mt-4 md:mt-6 ${
                  isNavOpen ? "block" : "hidden md:flex"
                }`}
              >
                {navigationLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-white/90 text-[14px] md:text-[15px] hover:text-[#52BC71] transition-colors duration-300 relative group w-fit mx-auto md:mx-0"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#52BC71] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </nav>
            </section>
            <section aria-labelledby="services-title" className="md:text-left">
              <h2
                id="services-title"
                className="text-[20px] text-white font-poppins font-bold mb-4 md:mb-6"
              >
                {ts("title")}
              </h2>
              <ul className="text-white/90 text-[14px] md:text-[15px] font-assistant space-y-2">
                {servicesList.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </section>

            {/* <section
              aria-labelledby="articles-title"
              className="text-center md:text-left"
            >
              <h2
                id="articles-title"
                className="text-[20px] text-white font-poppins font-bold mb-4 md:mb-6"
              >
                {tf("articles")}
              </h2>
              <ul className="text-white/90 text-[14px] md:text-[15px] font-assistant space-y-2 ">
                {recentArticles.map((article, index) => (
                  <li key={index}>
                    <Link
                      href={`/blog/${article.toLowerCase().replace(/ /g, "-")}`}
                      className="hover:text-[#52BC71] transition-colors duration-300"
                    >
                      {article}
                    </Link>
                  </li>
                ))}
              </ul>
            </section> */}
          </div>
        </div>
      </div>

      <div className="bg-black w-full py-4 md:py-6 dark:text-white dark:bg-slate-900">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 text-white gap-2 md:gap-0">
          <p className="text-sm md:text-base text-center">
            &copy; {currentYear} WYSIWYG. {tf("copyright")}
          </p>
          <div className="flex items-center gap-4">
            <p className="text-sm md:text-base text-center">{tf("design")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
