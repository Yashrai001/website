"use client";

import { useState } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { MapPin, Phone, Mail, MessageSquare, Loader2, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", eventType: "", date: "", guests: "", message: ""
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.name.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }

    const cleanedPhone = formData.phone.replace(/\D/g, "");
    if (cleanedPhone.length < 10) {
      setErrorMsg("Please enter a valid phone number (at least 10 digits).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, guests: formData.guests || "1" }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setIsSuccess(true);
      setFormData({ name: "", phone: "", email: "", eventType: "", date: "", guests: "", message: "" });
    } catch (error: unknown) {
      setErrorMsg(error instanceof Error ? error.message : "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <PageHero 
        title="Get in Touch"
        subtitle="Contact Us"
        backgroundImage="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop"
      />

      <div className="container mx-auto px-4 md:px-8 py-8">
        <Breadcrumbs items={[{ label: "Contact" }]} />
      </div>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Info & Map */}
            <div className="w-full lg:w-5/12 space-y-10">
              <div>
                <h2 className="font-serif text-3xl mb-6 text-foreground">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Our dedicated team is here to assist you with every detail of your celebration. Reach out to schedule a consultation or a venue tour.
                </p>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 text-muted-foreground">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0 text-primary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Location</h4>
                      <a 
                        href={siteConfig.googleMapsUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors block text-sm leading-relaxed"
                      >
                        {siteConfig.address.full}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 text-muted-foreground">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0 text-primary">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Phone</h4>
                      <a 
                        href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                        className="hover:text-primary transition-colors text-sm"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 text-muted-foreground">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0 text-primary">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Email</h4>
                      <a 
                        href={`mailto:${siteConfig.email}`}
                        className="hover:text-primary transition-colors text-sm"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 text-muted-foreground">
                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 text-green-600 dark:text-green-400">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">WhatsApp Concierge</h4>
                      <a 
                        href={siteConfig.whatsappUrl}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm font-medium"
                      >
                        Chat directly on WhatsApp &rarr;
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Interactive Directions Card */}
              <a 
                href={siteConfig.googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-card p-6 rounded-xl border border-border flex flex-col items-center text-center group hover:border-primary/50 transition-all shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg font-medium text-foreground mb-1">Visit Hotel Luxe</h4>
                <p className="text-muted-foreground text-sm max-w-xs mb-4">{siteConfig.address.full}</p>
                <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-primary group-hover:underline">
                  Open in Google Maps &rarr;
                </span>
              </a>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-7/12">
              <div className="bg-muted/30 p-8 md:p-12 border border-border/50 rounded-sm">
                <h3 className="font-serif text-3xl mb-8 text-foreground">Send an Enquiry</h3>
                
                {errorMsg && (
                  <div className="mb-6 p-4 bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 rounded-md border border-red-200 dark:border-red-800 text-sm">
                    {errorMsg}
                  </div>
                )}

                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                    <CheckCircle2 className="w-16 h-16 text-primary mb-2" />
                    <h4 className="text-2xl font-serif text-foreground">Thank You!</h4>
                    <p className="text-muted-foreground">Your enquiry has been received. Our team will contact you shortly.</p>
                    <Button variant="outline" className="mt-4" onClick={() => setIsSuccess(false)}>Send Another Message</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">Name *</label>
                        <input id="name" name="name" required value={formData.name} onChange={handleChange} type="text" placeholder="Enter your full name" className="w-full h-12 px-4 border border-border bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all placeholder:text-muted-foreground/60" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone *</label>
                        <input id="phone" name="phone" required value={formData.phone} onChange={handleChange} type="tel" placeholder="Enter your phone number" className="w-full h-12 px-4 border border-border bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all placeholder:text-muted-foreground/60" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">Email *</label>
                        <input id="email" name="email" required value={formData.email} onChange={handleChange} type="email" placeholder="Enter your email address" className="w-full h-12 px-4 border border-border bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all placeholder:text-muted-foreground/60" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="eventType" className="text-sm font-medium text-foreground">Event Type</label>
                        <select id="eventType" name="eventType" value={formData.eventType} onChange={handleChange} className="w-full h-12 px-4 border border-border bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all cursor-pointer">
                          <option value="">Select an event</option>
                          <option value="wedding">Wedding</option>
                          <option value="reception">Reception</option>
                          <option value="corporate">Corporate Event</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="date" className="text-sm font-medium text-foreground">Preferred Date</label>
                        <input id="date" name="date" value={formData.date} onChange={handleChange} type="date" style={{ colorScheme: 'light dark' }} className="w-full h-12 px-4 border border-border bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="guests" className="text-sm font-medium text-foreground">No. of Guests</label>
                        <input id="guests" name="guests" value={formData.guests} onChange={handleChange} type="number" min="1" placeholder="Number of guests" className="w-full h-12 px-4 border border-border bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all placeholder:text-muted-foreground/60" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                      <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Tell us about your event..." className="w-full p-4 border border-border bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none placeholder:text-muted-foreground/60"></textarea>
                    </div>
                    <Button type="submit" disabled={isSubmitting} size="lg" className="w-full md:w-auto px-10">
                      {isSubmitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...</> : "Send Enquiry"}
                    </Button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
