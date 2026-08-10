import type { Metadata } from "next";
import About from "@/components/sections/About";
import { createSeoAlternates } from "@/lib/seo";

type Props = {
  params: {
    locale: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const isFrench = params.locale === "fr";

  return {
    title: isFrench ? "À propos de nous | WYSIWYG" : "About us | WYSIWYG",

    description: isFrench
      ? "Découvrez WYSIWYG, notre expertise, nos valeurs et notre approche pour accompagner les entreprises dans leur transformation numérique."
      : "Discover WYSIWYG, our expertise, values, and approach to helping businesses with their digital transformation.",

    alternates: createSeoAlternates({
      path: "about",
      locale: params.locale,
    }),
  };
}

export default function AboutPage() {
  return (
    <>
      <About />
    </>
  );
}
