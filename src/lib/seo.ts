import type { Metadata } from "next";

const BASE_URL = "https://wysiwyg-website.onrender.com";

type SeoAlternatesParams = {
  path: string;
  locale: string;
};

export function createSeoAlternates({
  path,
  locale,
}: SeoAlternatesParams): Metadata["alternates"] {
  const cleanPath = path.replace(/^\/|\/$/g, "");

  const frUrl = cleanPath ? `${BASE_URL}/fr/${cleanPath}` : `${BASE_URL}/fr`;

  const enUrl = cleanPath ? `${BASE_URL}/en/${cleanPath}` : `${BASE_URL}/en`;

  const canonical = locale === "en" ? enUrl : frUrl;

  return {
    canonical,

    languages: {
      fr: frUrl,
      en: enUrl,
      "x-default": frUrl,
    },
  };
}
