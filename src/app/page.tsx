import Navbar from "@/components/layout/Navbar";
import ContactForm from "@/components/sections/ContactForm";
import HostedServices from "@/components/sections/HostedServices";
import Offers from "@/components/sections/Offers";
import QuickServices from "@/components/sections/QuickServices";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";

export default function Home() {
  return (
    <main>
      <Navbar />
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
    </main>
  );
}
