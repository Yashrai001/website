import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Gallery } from "@/components/sections/Gallery";

export default function GalleryPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <PageHero 
        title="Visual Memories"
        subtitle="Our Gallery"
        backgroundImage="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="container mx-auto px-4 md:px-8 py-8">
        <Breadcrumbs items={[{ label: "Gallery" }]} />
      </div>

      <Gallery />

      <Footer />
    </main>
  );
}
