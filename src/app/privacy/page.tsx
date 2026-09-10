import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/lib/config";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Hotel Luxe",
  description: "Privacy policy and client data protection guidelines for Hotel Luxe.",
};

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <PageHero
        title="Privacy Policy"
        subtitle="Your Trust is Our Commitment"
        backgroundImage="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop"
      />

      <div className="container mx-auto px-4 md:px-8 py-8">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
      </div>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-8">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-normal tracking-wide text-foreground mb-4">
              1. Information We Collect
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At Hotel Luxe, we respect your privacy and are committed to protecting the personal information you share with us. When you submit a booking request, schedule a venue tour, or contact our event concierges, we may collect your name, email address, phone number, event dates, and specific event preferences.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-normal tracking-wide text-foreground mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The information collected is used solely to arrange your venue visit, provide detailed event estimates, coordinate decor and catering requirements, and ensure flawless execution of your event. We do not sell, rent, or distribute your personal data to third parties.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-normal tracking-wide text-foreground mb-4">
              3. Communications & Consultations
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our event planners will communicate with you via phone, email, or WhatsApp strictly concerning your event inquiries and bookings. You may request to update or delete your details from our consultation records at any time.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-normal tracking-wide text-foreground mb-4">
              4. Contact Us
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about our privacy practices, please contact our administrative team at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline font-medium">
                {siteConfig.email}
              </a>{" "}
              or visit our{" "}
              <Link href="/contact" className="text-primary hover:underline font-medium">
                Contact Page
              </Link>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
