import React from "react";
import { LanguageProvider } from "@/lib/i18n";
import Navbar from "@/components/narvio/Navbar";
import Hero from "@/components/narvio/Hero";
import HowWeWork from "@/components/narvio/HowWeWork";
import Services from "@/components/narvio/Services";
import WhyUs from "@/components/narvio/WhyUs";
import InquiryForm from "@/components/narvio/InquiryForm";
import Footer from "@/components/narvio/Footer";
import StickyCTA from "@/components/narvio/StickyCTA";

const HERO_IMAGE = "/hero.png";
const SUCCESS_IMAGE = "/success.png";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#FDFBFA] text-[#1A1A1A] font-body antialiased selection:bg-[#C67D39]/20">
        <Navbar />
        <main className="pb-16 md:pb-0">
          <Hero image={HERO_IMAGE} />
          <HowWeWork />
          <Services />
          <WhyUs />
          <InquiryForm successImage={SUCCESS_IMAGE} />
        </main>
        <Footer />
        <StickyCTA />
      </div>
    </LanguageProvider>
  );
}
