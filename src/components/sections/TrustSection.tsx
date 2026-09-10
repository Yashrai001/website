import { SectionHeading } from "./SectionHeading";
import { CheckCircle2 } from "lucide-react";

const trustFactors = [
  "Experienced Hospitality Professionals",
  "Flexible Event Spaces (100 - 1500+ Guests)",
  "Dedicated Event Planning Team",
  "Premium Multi-Cuisine Catering",
  "Extensive Secure Valet Parking",
  "Personalized & Themed Celebrations"
];

export function TrustSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/30 border-y border-border/50">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          <div className="w-full lg:w-1/2">
            <SectionHeading 
              title="A Legacy of Excellence" 
              subtitle="Why Hotel Luxe?"
              centered={false}
              className="mb-8"
            />
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              Choosing the right venue is the foundation of a flawless celebration. At Hotel Luxe, we blend architectural grandeur with an uncompromising commitment to service. Our seasoned team ensures that from your first inquiry to the final farewell, every detail is handled with precision and grace.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trustFactors.map((factor, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium text-sm md:text-base">{factor}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <div className="bg-background p-6 rounded-sm border border-border shadow-sm text-center">
                  <span className="block text-4xl font-serif text-primary mb-2">500+</span>
                  <span className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Weddings Hosted</span>
                </div>
                <div className="bg-background p-6 rounded-sm border border-border shadow-sm text-center">
                  <span className="block text-4xl font-serif text-primary mb-2">15+</span>
                  <span className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Years of Legacy</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-background p-6 rounded-sm border border-border shadow-sm text-center">
                  <span className="block text-4xl font-serif text-primary mb-2">3</span>
                  <span className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Premium Venues</span>
                </div>
                <div className="bg-background p-6 rounded-sm border border-border shadow-sm text-center">
                  <span className="block text-4xl font-serif text-primary mb-2">4.9</span>
                  <span className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Star Rating</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
