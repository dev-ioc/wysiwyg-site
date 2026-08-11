import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Providers } from "./providers";

const BASE_URL = "https://wysiwyg-website.onrender.com";

const SEO = {
  fr: {
    title: "WYSIWYG | Solutions numériques pour les entreprises",
    description:
      "Découvrez nos solutions numériques et nos services pour accompagner les entreprises dans leur transformation digitale.",
  },
  en: {
    title: "WYSIWYG | Digital solutions for businesses",
    description:
      "Discover our digital solutions and services designed to support businesses in their digital transformation.",
  },
};

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const currentLocale = locale === "en" ? "en" : "fr";
  const seo = SEO[currentLocale];

  const currentUrl = `${BASE_URL}/${currentLocale}`;

  return {
    metadataBase: new URL(BASE_URL),
    title: seo.title,
    description: seo.description,
    icons: "/logo.png",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: currentUrl,
      languages: {
        fr: `${BASE_URL}/fr`,
        en: `${BASE_URL}/en`,
        "x-default": `${BASE_URL}/fr`,
      },
    },
    openGraph: {
      type: "website",
      locale: currentLocale === "fr" ? "fr_FR" : "en_US",
      url: currentUrl,
      siteName: "WYSIWYG",
      title: seo.title,
      description: seo.description,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <Providers>
        <Navbar />
        {children}
        <Footer />
      </Providers>
    </NextIntlClientProvider>
  );
}
