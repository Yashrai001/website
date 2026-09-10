import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { services } from "@/lib/data";
import { FallbackImage as Image } from "@/components/ui/FallbackImage";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <PageHero 
        title="Curated for Perfection"
        subtitle="Our Premium Services"
        backgroundImage="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="container mx-auto px-4 md:px-8 py-8">
        <Breadcrumbs items={[{ label: "Services" }]} />
      </div>

      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading title="Experience the Extraordinary" subtitle="What We Offer" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 mt-16">
            {services.map((service, idx) => (
              <div key={idx} className="flex flex-col group">
                <div className="relative aspect-[16/9] overflow-hidden rounded-sm mb-6">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-background/90 backdrop-blur-sm flex items-center justify-center rounded-sm">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link href="/book">
              <Button size="lg" className="px-10">Plan Your Event</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
