import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FrameworkStrip from "@/components/FrameworkStrip";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Frameworks from "@/components/Frameworks";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FrameworkStrip />
        <Services />
        <WhyUs />
        <Frameworks />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
