import { CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("AboutPage");
  const tA = useTranslations("AlsoSection");
  const features = t.raw("features") as string[];
  const teamMembers = t.raw("teamMembers") as any[];
  return (
    <div className="grid grid-clos-1">
      <div
        className="w-full  dark:text-white  bg-[#D9D9D9] dark:bg-slate-900 "
        id="no-section"
      >
        <div className="container mx-auto lg:gap-20 px-6 lg:px-12 py-6">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-20">
            <div className="pt-10  lg:px-0 md:px-4 sm:px-4">
              <img
                src="/images/logo.png"
                alt="WYSIWYG"
                className="w-[480px] h-[710px] py-10 col-span-4 col-start-2"
              />
            </div>
            <div className="flex-1 flex flex-col gap-4 w-full space-y-4 ">
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
                    <CheckCircle
                      size={18}
                      className="text-primary flex-shrink-0"
                    />
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
      </div>
      <div className="bg-white py-20">
        <div className="container mx-auto">
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
