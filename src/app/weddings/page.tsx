import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { WeddingExperience } from "@/components/sections/WeddingExperience";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Heart } from "lucide-react";

export default function WeddingsPage() {
  const steps = [
    { title: "Tell Us Your Vision", desc: "Share your dreams and inspiration with our expert planners." },
    { title: "Choose Your Space", desc: "Select from our opulent halls or natural lawns." },
    { title: "Personalize", desc: "Curate your decor, catering, and entertainment." },
    { title: "Celebrate", desc: "Immerse yourself in a flawlessly executed event." },
    { title: "Create Memories", desc: "Leave with beautiful moments to cherish forever." }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <PageHero 
        title="Your Dream Wedding Awaits"
        subtitle="Weddings at Hotel Luxe"
        backgroundImage="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="container mx-auto px-4 md:px-8 py-8">
        <Breadcrumbs items={[{ label: "Weddings" }]} />
      </div>

      <WeddingExperience />

      {/* Wedding Journey Timeline */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <SectionHeading title="The Journey to 'I Do'" subtitle="How It Works" />
          
          <div className="relative mt-16">
            {/* Connecting Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-12 relative">
              {steps.map((step, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8`}>
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary -translate-x-1/2 flex items-center justify-center z-10 hidden md:flex">
                    <Heart className="w-3 h-3 text-primary fill-primary" />
                  </div>
                  
                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-16 md:text-left' : 'md:pr-16 md:text-right'}`}>
                    <div className="bg-muted/30 p-6 rounded-sm border border-border/50 shadow-sm hover:border-primary/30 transition-colors">
                      <span className="text-primary font-serif font-bold text-xl mb-2 block">Step {index + 1}</span>
                      <h4 className="text-xl font-medium text-foreground mb-3">{step.title}</h4>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <Link href="/book">
              <Button size="lg" className="px-10">Start Your Journey</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
