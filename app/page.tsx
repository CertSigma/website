import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FrameworkStrip from "@/components/FrameworkStrip";
import NumbersStrip from "@/components/NumbersStrip";
import WhoWeHelp from "@/components/WhoWeHelp";
import UseCases from "@/components/UseCases";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Frameworks from "@/components/Frameworks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import SEOContent from "@/components/SEOContent";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <FrameworkStrip />
      <NumbersStrip />
      <WhoWeHelp />
      <UseCases />
      <Services />
      <WhyUs />
      <Process />
      <Frameworks />
      <Testimonials />
      <FAQ />
      <SEOContent />
      <CTA />
      <Footer />
    </>
  );
}
