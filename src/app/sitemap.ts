import type { MetadataRoute } from "next";

const BASE_URL = "https://wysiwyg-website.onrender.com";

const pages = [
  {
    fr: "",
    en: "",
  },
  {
    fr: "about",
    en: "about",
  },
  {
    fr: "messagerie-bluemind",
    en: "messagerie-bluemind",
  },
  {
    fr: "blog",
    en: "blog",
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];

  pages.forEach((page) => {
    urls.push({
      url: `${BASE_URL}/fr${page.fr ? `/${page.fr}` : ""}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
    });

    urls.push({
      url: `${BASE_URL}/en${page.en ? `/${page.en}` : ""}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: page.fr === "" ? 1 : 0.8,
    });
  });

  return urls;
}
