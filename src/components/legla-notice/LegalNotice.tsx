import { useTranslations } from "next-intl";

const LegalNotice = () => {
  const t = useTranslations("MentionsLegales");

  const communicationListItems = t.raw(
    "communicationServices.listItems",
  ) as string[];

  return (
    <div className="bg-white dark:bg-slate-900">
      <div className="grid grid-cols-1 container mx-auto max-w-6xl pt-20 space-y-10 mb-20 px-6 py-6">
        <h1 className="text-xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight text-black dark:text-white/50">
          {t("title")}
        </h1>

        <h2 className="text-xl md:text-3xl font-extrabold leading-tight mb-6 tracking-tight text-black dark:text-white/50">
          {t("agreement.title")}
        </h2>
        <p className="text-lg md:text-xl text-black dark:text-white/50">
          {t("agreement.paragraph1")}
        </p>
        <p className="text-lg md:text-xl text-black dark:text-white/50">
          {t("agreement.paragraph2")}
        </p>

        <h2 className="text-xl md:text-3xl font-extrabold leading-tight mb-6 tracking-tight text-black dark:text-white/50">
          {t("modification.title")}
        </h2>
        <p className="text-lg md:text-xl text-black dark:text-white/50">
          {t("modification.content")}
        </p>

        <h2 className="text-xl md:text-3xl font-extrabold leading-tight mb-6 tracking-tight text-black dark:text-white/50">
          {t("linksToThirdPartySites.title")}
        </h2>
        <p className="text-lg md:text-xl text-black dark:text-white/50">
          {t("linksToThirdPartySites.content")}
        </p>

        <h2 className="text-xl md:text-3xl font-extrabold leading-tight mb-6 tracking-tight text-black dark:text-white/50">
          {t("noUnlawfulUse.title")}
        </h2>
        <p className="text-lg md:text-xl text-black dark:text-white/50">
          {t("noUnlawfulUse.content")}
        </p>

        <h2 className="text-xl md:text-3xl font-extrabold leading-tight mb-6 tracking-tight text-black dark:text-white/50">
          {t("communicationServices.title")}
        </h2>
        <p className="text-lg md:text-xl text-black dark:text-white/50">
          {t("communicationServices.intro")}
        </p>
        <ul className="list-disc pl-8 space-y-2">
          {communicationListItems?.map((item, index) => (
            <li
              key={index}
              className="text-lg md:text-xl text-black dark:text-white/50"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="text-lg md:text-xl text-black dark:text-white/50">
          {t("communicationServices.paragraph1")}
        </p>
        <p className="text-lg md:text-xl text-black dark:text-white/50">
          {t("communicationServices.paragraph2")}
        </p>
        <p className="text-lg md:text-xl text-black dark:text-white/50">
          {t("communicationServices.paragraph3")}
        </p>
        <p className="text-lg md:text-xl text-black dark:text-white/50">
          {t("communicationServices.paragraph4")}
        </p>

        <h2 className="text-xl md:text-3xl font-extrabold leading-tight mb-6 tracking-tight text-black dark:text-white/50">
          {t("materialsProvided.title")}
        </h2>
        <p className="text-lg md:text-[20px] text-black dark:text-white/50">
          {t("materialsProvided.paragraph1")}
        </p>
        <p className="text-lg md:text-[20px] text-black dark:text-white/50">
          {t("materialsProvided.paragraph2")}
        </p>
        <p className="text-lg md:text-[20px] text-black dark:text-white/50">
          {t("materialsProvided.paragraph3")}
        </p>

        <h2 className="text-xl md:text-3xl font-extrabold leading-tight mb-6 tracking-tight text-black dark:text-white/50">
          {t("liabilityDisclaimer.title")}
        </h2>
        <p className="text-lg md:text-[20px] text-black dark:text-white/50 uppercase">
          {t("liabilityDisclaimer.paragraph1")}
        </p>
        <p className="text-lg md:text-[20px] text-black dark:text-white/50 uppercase">
          {t("liabilityDisclaimer.paragraph2")}
        </p>
        <p className="text-lg md:text-[20px] text-black dark:text-white/50 uppercase">
          {t("liabilityDisclaimer.paragraph3")}
        </p>

        <p className="text-lg md:text-xl text-black dark:text-white/50">
          <strong>{t("serviceContact.title")}</strong> :{" "}
          <a
            href={`mailto:${t("serviceContact.email")}`}
            className="text-blue-600 hover:text-blue-800 underline"
          >
            {t("serviceContact.email")}
          </a>
        </p>

        <h2 className="text-xl md:text-3xl font-extrabold leading-tight mb-6 tracking-tight text-black dark:text-white/50">
          {t("terminationAccessRestriction.title")}
        </h2>
        <p className="text-lg md:text-[20px] text-black dark:text-white/50">
          {t("terminationAccessRestriction.content")}
        </p>

        <h2 className="text-xl md:text-3xl font-extrabold leading-tight mb-6 tracking-tight text-black dark:text-white/50">
          {t("copyrightTrademarkNotices.title")}
        </h2>
        <p className="text-lg md:text-[20px] text-black dark:text-white/50">
          {t("copyrightTrademarkNotices.content")}
        </p>

        <h2 className="text-xl md:text-3xl font-extrabold leading-tight mb-6 tracking-tight text-black dark:text-white/50">
          {t("trademarks.title")}
        </h2>
        <p className="text-lg md:text-[20px] text-black dark:text-white/50">
          {t("trademarks.paragraph1")}
        </p>
        <p className="text-lg md:text-[20px] text-black dark:text-white/50">
          {t("trademarks.paragraph2")}
        </p>
        <p className="text-lg md:text-[20px]text-black dark:text-white/50">
          {t("trademarks.paragraph3")}
        </p>

        <h2 className="text-xl md:text-3xl font-extrabold leading-tight mb-6 tracking-tight text-black dark:text-white/50">
          {t("noticesProcedureCopyright.title")}
        </h2>
        <p className="text-lg md:text-[20px] text-black dark:text-white/50">
          {t("noticesProcedureCopyright.content")}
        </p>
      </div>
    </div>
  );
};

export default LegalNotice;
