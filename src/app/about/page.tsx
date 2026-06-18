import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/Header";
import About from "@/components/sections/About";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader navLinks={navLinks} />
      <About />
      <Footer />
    </>
  );
}
