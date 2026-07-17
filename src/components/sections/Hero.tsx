"use client";
import { useTranslations } from "next-intl";
const Hero = () => {
  const t = useTranslations("Hero");
  const tW = useTranslations("AboutPage");

  return (
    <div className="relative grid grid-cols-12 col-span-12 h-auto lg:h-[761px] w-full bg-[url('/images/hero.png')] bg-cover bg-center bg-no-repeat overflow-hidden pb-10 ">
      <div className="absolute inset-0 bg-black/200 opacity-50 backdrop-blur-sm" />
      <div className="col-span-12 lg:col-start-5 flex flex-col items-center justify-center text-center w-full gap-6 relative z-10 pt-20 lg:pt-20 lg:-top-5 lg:w-[700px]">
        <h1 className="mb-2">
          <span className="relative inline-block font-mono">
            <span className="inline-block overflow-hidden whitespace-nowrap border-r-[3px] border-white typing-cursor">
              <span className="text-[#05e7eb] text-[20px] lg:text-[38px]">
                C
              </span>
              <span className="text-[#05e7eb] text-[16px] lg:text-[30px]">
                onsole
              </span>
              <span className="text-white text-[11px] lg:text-[20px]">.</span>
              <span className="text-yellow-300 text-[16px] lg:text-[30px]">
                log
              </span>
              <span className="text-[#b205eb] text-[18px] lg:text-[34px]">
                (
              </span>
              <span className="text-primary text-[14px] lg:text-[30px] font-bold font-merriweather">
                &quot;{tW("title")}&quot;
              </span>
              <span className="text-[#b205eb] text-[20px] lg:text-[40px]">
                )
              </span>
              <span className="text-white text-[16px] lg:text-[30px]">;</span>
            </span>
          </span>
        </h1>
        <span className="max-w-[500px] text-[16px] lg:text-[22px] text-center text-secondary font-assistant font-bold lg:leading-[2rem]">
          {t("title")}
        </span>
        <a
          type="button"
          href="/about"
          className="bg-secondary px-6 py-2 rounded-full text-black font-medium transition font-assistant text-[21px]"
        >
          {t("BtnPlus")}
        </a>
      </div>
    </div>
  );
};

export default Hero;
