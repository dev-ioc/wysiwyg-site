"use client";
import { useInView } from "@/hooks/useInView";
import { useTranslations } from "next-intl";

const Services = () => {
  const { ref, isVisible } = useInView(0.2);
  const t = useTranslations("NosServices");
  return (
    <div className="px-8 h-auto space-y-0 mb-0 bg-secondary dark:text-white  dark:bg-slate-900 border-b border-light">
      <div
        ref={ref}
        className={`container mx-auto lg:px-12 py-8 transition-all ${
          isVisible
            ? "animate-zoomIn opacity-100 scale-100"
            : "opacity-0 scale-90"
        }`}
      >
        <div className="text-center text-dark font-bold text-[38px] font-merriweather dark:text-white">
          {t("title")}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="w-full flex flex-row gap-8">
            <img
              src="/images/gestion-comptabilty.png"
              alt="gestion-comptabilty"
              className="w-[62px] h-[62px] rounded-full opacity-100"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-[#3699BE] font-inter font-bold text-[22px]">
                {t("HeadServices1")}
              </h1>
              <p className="text-[#A8A8A8] text-[18px] font-assistant font-bold">
                {t("descritpion1")}
              </p>
            </div>
          </div>
          <div className="w-full flex flex-row gap-8">
            <img
              src="/images/product-management.png"
              alt="gestion-comptabilty"
              className="w-[62px] h-[62px] rounded-full opacity-100"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-[#3699BE] font-inter font-bold text-[22px]">
                {t("HeadServices2")}
              </h1>
              <p className="text-[#A8A8A8] text-[18px] font-assistant font-bold">
                {t("descritpion2")}
              </p>
            </div>
          </div>
          <div className="w-full flex flex-row gap-8">
            <img
              src="/images/analyse-predictive.png"
              alt="gestion-comptabilty"
              className="w-[62px] h-[62px] rounded-full opacity-100"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-[#3699BE] font-inter font-bold text-[22px]">
                {t("HeadServices3")}
              </h1>
              <p className="text-[#A8A8A8] text-[18px] font-assistant font-bold">
                {t("descritpion3")}
              </p>
            </div>
          </div>
          <div className="w-full flex flex-row gap-8">
            <img
              src="/images/iso-management-system.png"
              alt="gestion-comptabilty"
              className="w-[62px] h-[62px] rounded-full opacity-100"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-[#3699BE] font-inter font-bold text-[22px]">
                {t("HeadServices4")}
              </h1>
              <p className="text-[#A8A8A8] text-[18px] font-assistant font-bold">
                {t("description4")}
              </p>
            </div>
          </div>
          <div className="w-full flex flex-row gap-8">
            <img
              src="/images/architect-erp-bi.png"
              alt="gestion-comptabilty"
              className="w-[62px] h-[62px] rounded-full opacity-100"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-[#3699BE] font-inter font-bold text-[22px]">
                {t("HeadServices5")}
              </h1>
              <p className="text-[#A8A8A8] text-[18px] font-assistant font-bold">
                {t("descritpion5")}
              </p>
            </div>
          </div>
          <div className="w-full flex flex-row gap-8">
            <img
              src="/images/supply-chain-management.png"
              alt="gestion-comptabilty"
              className="w-[62px] h-[62px] rounded-full opacity-100"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-[#3699BE] font-inter font-bold text-[22px]">
                {t("HeadServices6")}
              </h1>
              <p className="text-[#A8A8A8] text-[18px] font-assistant font-bold">
                {t("descritpion6")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
