import ContactForm from "@/forms/ContactForm";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import Testimonials from "@/components/Testimonials";
import WorkingSection from "@/components/WorkingSection";

export default function Home() {
  return (
    <ScrollReveal>
      <HeroSection />
      <WorkingSection />
      <Features />
      <Testimonials />
      <ContactForm />
      <Footer />
    </ScrollReveal>
  );
}
