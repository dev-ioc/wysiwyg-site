"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type CookieItem = {
  name: string;
  description: string;
};

const PrivacyPolicy = () => {
  const t = useTranslations("PrivacyPolicy");
  const tb = t.raw("cookieList.items") as CookieItem[];

  const [isConsentModalOpen, setIsConsentModalOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-slate-900">
      <div className="grid grid-cols-1 container mx-auto max-w-6xl pt-20 space-y-10  px-6 py-6">
        <h1 className="text-xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight text-black dark:text-white/50">
          {t("title")}
        </h1>
        <h2 className="text-xl md:text-4xl font-extrabold leading-tight mb-6 tracking-tight text-black dark:text-white/50">
          {t("cookiePolicy.title")}
        </h2>
        <p className="text-lg md:text-xl text-black dark:text-white/50">
          {t("cookiePolicy.intro")}
        </p>
        <p className="text-lg md:text-xl text-black dark:text-white/50">
          {t("cookiePolicy.changeConsent")}
        </p>
        <p className="text-lg md:text-xl text-black dark:text-white/50">
          {t("cookiePolicy.currentState")}
          <u className="text-blue-600 hover:text-blue-800">
            <a
              href=""
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setIsConsentModalOpen(true);
              }}
            >
              {t("cookiePolicy.manageConsent")}
            </a>
          </u>
        </p>
        <h2 className="text-xl md:text-4xl font-extrabold leading-tight mb-6 tracking-tight text-black dark:text-white/50">
          {t("whatAreCookies.title")}
        </h2>
        <p className="text-lg md:text-xl text-black dark:text-white/50">
          {t("whatAreCookies.content")}
        </p>
        <h2 className="text-xl md:text-4xl font-extrabold leading-tight mb-6 tracking-tight text-black dark:text-white/50">
          {t("howWeUseCookies.title")}
        </h2>
        <p className="text-lg md:text-xl text-black dark:text-white/50">
          {t("howWeUseCookies.paragraph1")}
        </p>
        <p className="text-lg md:text-xl text-black dark:text-white/50">
          {t("howWeUseCookies.paragraph2")}
        </p>
        <h2 className="text-xl md:text-4xl font-extrabold leading-tight mb-6 tracking-tight text-black dark:text-white/50">
          {t("typesOfCookies.title")}
        </h2>
        <p className="text-lg md:text-xl text-black dark:text-white/50">
          {t("typesOfCookies.essential.title")} {":"}{" "}
          {t("typesOfCookies.essential.content")}
        </p>
        <p className="text-lg md:text-xl text-black dark:text-white/50">
          {t("typesOfCookies.statistics.title")} {":"}{" "}
          {t("typesOfCookies.statistics.content")}
        </p>
        <p className="text-lg md:text-xl text-black dark:text-white/50">
          {t("typesOfCookies.marketing.title")} {":"}{" "}
          {t("typesOfCookies.marketing.content")}
        </p>
        <p className="text-lg md:text-xl text-black dark:text-white/50">
          {t("typesOfCookies.functional.title")} {":"}{" "}
          {t("typesOfCookies.functional.content")}
        </p>
        <p className="text-lg md:text-xl text-black dark:text-white/50">
          {t("typesOfCookies.preferences.title")} {":"}{" "}
          {t("typesOfCookies.preferences.content")}
        </p>
        <p className="text-lg md:text-xl text-black dark:text-white/50">
          <strong>{t("cookieList.title")}</strong>
        </p>
        <table className="table-auto w-full border border-collapse border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-[#e2e2e2] dark:bg-gray-700">
              <th className="border border-gray-100 dark:border-gray-600 px-4 py-3 text-left font-bold text-black ">
                {t("cookieList.columns.cookie")}
              </th>
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold text-black">
                {t("cookieList.columns.description")}
              </th>
            </tr>
          </thead>
          <tbody>
            {tb?.map((item) => (
              <tr key={item.name}>
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 align-top text-black dark:text-white/50">
                  {item.name}
                </td>
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 align-top text-black dark:text-white/50">
                  {item.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 className="text-xl md:text-4xl font-extrabold leading-tight mb-6 tracking-tight text-black dark:text-white/50 ">
          {t("controlPreferences.title")}
        </h2>
        <p className="text-lg md:text-xl text-black dark:text-white/50">
          {t("controlPreferences.paragraph1")}
        </p>
        <p className="text-lg md:text-xl text-black dark:text-white/50">
          {t("controlPreferences.paragraph2")}
        </p>
      </div>

      {isConsentModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          onClick={() => setIsConsentModalOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-md bg-white dark:bg-slate-800 p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold text-black dark:text-white mb-4">
              {t("consentModal.title")}
            </h3>

            <p className="text-sm text-black dark:text-white/70 mb-4">
              {t("consentModal.paragraph1")}
            </p>

            <p className="text-sm text-black dark:text-white/70 mb-4">
              {t("consentModal.paragraph2")}
            </p>

            <p className="text-sm text-black dark:text-white/70 mb-6">
              {t("consentModal.paragraph3")}{" "}
              <u className="text-blue-600 hover:text-blue-800">
                <a href="/privacy-policy">
                  {t("consentModal.privacyPolicyLinkText")}
                </a>
              </u>
              .
            </p>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setIsConsentModalOpen(false)}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded"
              >
                {t("consentModal.acceptButton")}
              </button>
              <button
                type="button"
                onClick={() => setIsConsentModalOpen(false)}
                className="text-black dark:text-white/70 underline text-sm"
              >
                {t("consentModal.settingsButton")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivacyPolicy;
