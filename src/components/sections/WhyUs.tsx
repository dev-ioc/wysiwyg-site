"use client";
import { useInView } from "@/hooks/useInView";
import { useTranslations } from "next-intl";

const WhyUs = () => {
  const { ref, isVisible } = useInView(0.2);
  const t = useTranslations("WhyUs");
  return (
    <div className="px-8 h-auto mb-0 bg-[#D9D9D9] py-2 dark:text-white  dark:bg-slate-900 border-b border-light">
      <div className="container mx-auto lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
        <div
          ref={ref}
          className={`flex flex-col gap-8 transition-all duration-700 ease-out ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <h1 className="text-left text-[#222222] font-bold text-[38px] font-merriweather dark:text-white">
            {t("title")}
          </h1>

          <div className="flex flex-row items-start gap-6">
            <div className="flex-shrink-0 w-[70px] h-[70px] rounded-full bg-white flex items-center justify-center shadow-sm">
              <img
                src="/images/informatique-si.png"
                alt="Informatique et SI"
                className="w-7 h-7"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[19px] font-bold text-[#282828] font-assistant dark:text-white">
                {t("information")}
              </h3>
              <p className="text-[15px] text-[#7E7E7E] leading-[1.5rem] font-medium font-assistant">
                {t("descriptionW1")}
              </p>
            </div>
          </div>
          <div className="flex flex-row items-start gap-6">
            <div className="flex-shrink-0 w-[70px] h-[70px] rounded-full bg-white flex items-center justify-center shadow-sm">
              <img
                src="/images/gestion-processus.png"
                alt="Gestion et Processus"
                className="w-7 h-7"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[19px] font-bold text-[#282828] font-assistant dark:text-white">
                {t("management")}
              </h3>
              <p className="text-[15px] text-[#7E7E7E] leading-[1.5rem] font-medium font-assistant">
                {t("descriptionW2")}
              </p>
            </div>
          </div>

          <div className="flex flex-row items-start gap-6">
            <div className="flex-shrink-0 w-[70px] h-[70px] rounded-full bg-white flex items-center justify-center shadow-sm">
              <img
                src="/images/commercial-bi.png"
                alt="Commercial et BI"
                className="w-7 h-7"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[19px] font-bold text-[#282828] font-assistant dark:text-white">
                {t("commercial")}
              </h3>
              <p className="text-[15px] text-[#7E7E7E] leading-[1.5rem] font-medium font-assistant">
                {t("descriptionW3")}
              </p>
            </div>
          </div>
        </div>
        <div
          ref={ref}
          className={`bg-[url('/images/why-choise-us.png')] bg-no-repeat bg-contain bg-center w-full h-[450px] lg:h-[536px] ${isVisible ? "animate-slideLeft [animation-delay:200ms]" : "opacity-0"}   `}
        />
      </div>
    </div>
  );
};

export default WhyUs;
