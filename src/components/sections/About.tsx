import { CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("AboutPage");
  const features = t.raw("features") as string[];
  return (
    <div
      className="w-full  bg-[#D9D9D9] dark:text-white bg-white dark:bg-slate-900 "
      id="no-section"
    >
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-20 px-6 lg:px-12 py-6">
        <div className="pt-10  lg:px-0 md:px-4 sm:px-4">
          <img
            src="/images/logo.png"
            alt="WYSIWYG"
            className="w-[480px] h-[710px] py-10 col-span-4 col-start-2"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4 w-full space-y-2 ">
          <span className="text-primary text-[13px] font-bold uppercase tracking-widest ">
            {t("bienvenue")}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold  text-gray-800 leading-snug">
            {t("title")}
          </h2>
          <p className="text-gray-600 text-[15px] leading-relaxed">
            {t("description")}
          </p>

          <p className="text-gray-600 text-[15px] leading-relaxed">
            {t("Wysiwyg")}
          </p>

          <ul className="flex flex-col gap-2 mt-2">
            {features.map((feature, index) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-gray-700 text-[15px]"
              >
                <CheckCircle size={18} className="text-primary flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <a
              href="/a-propos"
              className="inline-block bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-green-600 transition-colors uppercase tracking-wide"
            >
              {t("btn")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
