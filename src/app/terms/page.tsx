import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/lib/config";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Hotel Luxe",
  description: "Terms and conditions for event bookings and venue usage at Hotel Luxe.",
};

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <PageHero
        title="Terms of Service"
        subtitle="Venue Policies & Event Guidelines"
        backgroundImage="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop"
      />

      <div className="container mx-auto px-4 md:px-8 py-8">
        <Breadcrumbs items={[{ label: "Terms of Service" }]} />
      </div>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-8">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-normal tracking-wide text-foreground mb-4">
              1. Venue Reservations & Inquiries
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Online visit requests and availability checks submitted through our website serve as non-binding reservations until confirmed by our event concierge team with a formal agreement and advance deposit.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-normal tracking-wide text-foreground mb-4">
              2. Event Decor & Catering Standards
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              To uphold the premium ambience and heritage quality of Hotel Luxe, all in-house and third-party vendors must comply with venue safety regulations, noise ordinances, and structural guidelines.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-normal tracking-wide text-foreground mb-4">
              3. Rescheduling & Cancellations
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Rescheduling requests depend on date availability across our Grand Ballroom, Royal Banquet Hall, and Luxe Lawn. Specific terms concerning cancellations and refund policies will be articulated in your customized event contract.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-normal tracking-wide text-foreground mb-4">
              4. Inquiries & Assistance
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              For any questions regarding venue terms or to schedule an on-site walkthrough, please{" "}
              <Link href="/book" className="text-primary hover:underline font-medium">
                Book a Visit
              </Link>{" "}
              or contact us directly at{" "}
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="text-primary hover:underline font-medium">
                {siteConfig.phone}
              </a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
