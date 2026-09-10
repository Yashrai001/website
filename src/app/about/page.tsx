import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { FallbackImage as Image } from "@/components/ui/FallbackImage";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <PageHero 
        title="Where Hospitality Meets Celebration"
        subtitle="About Hotel Luxe"
        backgroundImage="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop"
      />

      <div className="container mx-auto px-4 md:px-8 py-8">
        <Breadcrumbs items={[{ label: "About" }]} />
      </div>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <SectionHeading title="Our Story" centered={false} />
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Founded with a vision to redefine luxury celebrations, Hotel Luxe has grown to become the city&apos;s most prestigious destination for weddings, galas, and milestone events.
                </p>
                <p>
                  Every pillar, every chandelier, and every curated space within our venue was designed with one singular goal: to provide an extraordinary canvas where moments are elevated into lifelong memories. We believe that true luxury lies not just in the aesthetics, but in the seamless, intuitive hospitality we provide.
                </p>
                <p>
                  Over the years, we have had the privilege of hosting thousands of couples as they embark on their new journeys, creating a legacy of joy, elegance, and unparalleled service.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative aspect-square max-w-lg mx-auto">
              <Image 
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop"
                alt="Hotel Luxe Architecture"
                fill
                className="object-cover rounded-sm shadow-xl"
              />
              <div className="absolute -bottom-8 -left-8 w-2/3 aspect-square border-2 border-primary/30 -z-10 hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Promise */}
      <section className="py-24 bg-[#141414] text-white">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <span className="block text-sm font-medium tracking-widest text-primary uppercase mb-6">
            The Luxe Philosophy
          </span>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-10 text-white drop-shadow-sm">
            &quot;We don&apos;t just host events; we curate emotions. Every detail is meticulously crafted so you can remain entirely present in your celebration.&quot;
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto opacity-70" />
        </div>
      </section>

      {/* Trust Section */}
      <TrustSection />

      {/* Reusing FeatureSection */}
      <FeatureSection />

      <Footer />
    </main>
  );
}
