import { CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("AboutPage");
  const tA = useTranslations("AlsoSection");
  const features = t.raw("features") as string[];
  const teamMembers = t.raw("teamMembers") as any[];
  return (
    <div className="grid grid-clos-1">
      <div className="bg-white py-20 dark:text-white  bg-[#F8F8FF] dark:bg-slate-900 dark:border-b border-light">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-36 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
          <div className="flex-1 w-full text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 leading-tight mb-4 sm:mb-6">
              {t("about_wysiwyg")}
              <br />
              <span className="text-black text-[20px] dark:text-white">
                {" "}
                {t("for_mission")}
              </span>
            </h1>

            <p className="text-gray-500 mb-2 text-sm sm:text-base leading-[2rem] whitespace-pre-line">
              {t("company_history")}
            </p>

            <div className="inline-block bg-orange-500 text-white rounded-md px-4 py-2 mt-4 shadow-lg z-30 w-1/2 sm:w-1/3 lg:w-1/4">
              <p className="text-2xl sm:text-3xl font-bold leading-none">12+</p>
              <p className="text-xs mt-1 whitespace-nowrap">{t("secteur")}</p>
            </div>
          </div>
          <div className="flex-1 relative w-full max-w-sm sm:max-w-md lg:max-w-lg h-[260px] sm:h-[320px] lg:h-[380px]">
            <div className="group absolute top-0 left-0 w-[70%] h-[80%] rounded-md shadow-lg z-10 overflow-hidden">
              <img
                src="/images/expert3.png"
                alt="Cargo ship"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
            </div>
            <div className="group absolute bottom-0 right-8 w-[48%] h-[63%] rounded-md shadow-lg z-20 overflow-hidden">
              <img
                src="/images/expert4.png"
                alt="Container ship at sunset"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full  dark:text-white  bg-[#F8F8FF] dark:bg-slate-900 dark:border-b border-light"
        id="no-section"
      >
        <div className="container mx-auto lg:gap-20 px-6 lg:px-20 py-6">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-20">
            <div className="pt-10  lg:px-0 md:px-4 sm:px-4">
              <img
                src="/images/logo.png"
                alt="WYSIWYG"
                className="w-[460px] h-[700px] py-10 col-span-4 col-start-2"
              />
            </div>
            <div className="flex-1 flex flex-col gap-4 w-full space-y-6 ">
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
                    key={index}
                    className="flex items-center gap-2 text-gray-700 text-[15px]"
                  >
                    <CheckCircle
                      size={18}
                      className="text-primary flex-shrink-0"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-20 dark:text-white  bg-[#F8F8FF] dark:bg-slate-900 ">
        <div className="container mx-auto lg:px-16">
          <div className="flex flex-col gap-4 w-full justify-center items-center">
            <h1 className="text-[32px] font-bold">
              {t("team") === "Équipe" ? (
                <>
                  <span className="text-orange-500">{t("team")}</span>{" "}
                  {t("expert")}
                </>
              ) : (
                <>
                  <span className="text-orange-500">{t("expert")}</span>{" "}
                  {t("team")}
                </>
              )}
            </h1>
            <p className="text-gray-600 text-center w-1/2">
              {tA.raw("cards.0.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-6 md:px-20">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden shadow-md group"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/20 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 bg-[#0b2b3c]/90 text-white px-4 py-3">
                  <p className="text-orange-400 text-sm">{member.role}</p>
                  <p className="font-semibold">{member.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
