import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { VenueDetail } from "@/components/sections/VenueDetail";
import { venues } from "@/lib/data";

export default function HallsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <PageHero 
        title="Find the Perfect Space for Your Celebration"
        subtitle="Our Venues"
        backgroundImage="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="container mx-auto px-4 md:px-8 py-8">
        <Breadcrumbs items={[{ label: "Halls" }]} />
      </div>

      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-8">
          {venues.map((venue, index) => (
            <VenueDetail 
              key={venue.id} 
              venue={venue} 
              reverse={index % 2 !== 0} 
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
