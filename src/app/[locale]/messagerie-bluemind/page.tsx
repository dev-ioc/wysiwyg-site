import MessagerieBlueMind from "@/components/messagerie-bluemind/MessagerieBluemind";
import type { Metadata } from "next";

const BASE_URL = "https://wysiwyg-website.onrender.com";
const SEO = {
  fr: {
    title: "Messagerie Bluemind | WYSIWYG",
    description:
      "WYSIWYG déploie et accompagne la messagerie Bluemind pour les entreprises : installation, migration, support et personnalisation.",
  },
  en: {
    title: "Bluemind Messaging | WYSIWYG",
    description:
      "WYSIWYG deploys and supports Bluemind messaging for businesses: installation, migration, support and customization.",
  },
};

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const currentLocale = locale === "en" ? "en" : "fr";
  const seo = SEO[currentLocale];
  const url = `${BASE_URL}/${currentLocale}/messagerie-bluemind`;

  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: url },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url,
    },
  };
}
export default function MessagerieBlueMindPage() {
  return (
    <div>
      <MessagerieBlueMind />
    </div>
  );
}
