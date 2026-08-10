import type { Metadata } from "next";
import News from "@/components/sections/News";
type Props = { params: { locale: string } };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const isFrench = params.locale === "fr";
  return {
    title: isFrench
      ? "Actualités et blog | WYSIWYG"
      : "News and Blog | WYSIWYG",
    description: isFrench
      ? "Découvrez les actualités, conseils, informations et nouveautés de WYSIWYG."
      : "Discover WYSIWYG news, insights, tips, and latest updates.",
  };
}
export default function NewsPage() {
  return <News />;
}
