import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import QuickServices from "@/components/sections/QuickServices";

export default function Home() {
  return (
    <main>
      <Navbar />
      <QuickServices />
      <About />
    </main>
  );
}
