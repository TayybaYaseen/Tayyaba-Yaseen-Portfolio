import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Education from "@/components/Education";
import Feedback from "@/components/Feedback";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Education />
      <Feedback />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
