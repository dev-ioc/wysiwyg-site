import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AlsoSection from "@/components/sections/AlsoSection";
import ContactForm from "@/components/sections/ContactForm";
import Hero from "@/components/sections/Hero";
import HomePage from "@/components/sections/Home";
import HostedServices from "@/components/sections/HostedServices";
import Offers from "@/components/sections/Offers";
import QuickServices from "@/components/sections/QuickServices";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";

export default function Home() {
  return (
    <main>
      <section id="accueil">
        <Hero />
      </section>
      <section id="QuickServices">
        <QuickServices />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="why-us">
        <WhyUs />
      </section>
      <section id="offers">
        <Offers />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
      <section id="hosted-services">
        <HostedServices />
      </section>
      <section id="also">
        <AlsoSection />
      </section>
    </main>
  );
}
