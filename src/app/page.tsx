import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { VenueSection } from "@/components/sections/VenueSection";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { WeddingExperience } from "@/components/sections/WeddingExperience";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { TrustSection } from "@/components/sections/TrustSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <Hero />
      <Introduction />
      <VenueSection />
      <FeatureSection />
      <WeddingExperience />
      <Gallery />
      <Testimonials />
      <TrustSection />
      <CTA />
      <Footer />
    </main>
  );
}
