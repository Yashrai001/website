"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2 } from "lucide-react";

function BookForm() {
  const searchParams = useSearchParams();
  const venueParam = searchParams.get("venue") || "";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    date: "",
    guests: "",
    venue: venueParam || "",
    message: ""
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Client-side validations
    if (!formData.name.trim()) {
      setErrorMsg("Please enter your full name.");
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

    if (!formData.eventType) {
      setErrorMsg("Please select an event type.");
      return;
    }

    if (!formData.date) {
      setErrorMsg("Please select a preferred date.");
      return;
    }

    const selectedDate = new Date(formData.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      setErrorMsg("Please select a date that is today or in the future.");
      return;
    }

    if (!formData.guests || parseInt(formData.guests, 10) <= 0) {
      setErrorMsg("Please enter a valid number of guests.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error: unknown) {
      setErrorMsg(error instanceof Error ? error.message : "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const todayStr = new Date().toISOString().split("T")[0];

  return (
    <div className="bg-card text-card-foreground p-6 sm:p-10 md:p-14 border border-border rounded-xl shadow-xl relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="relative z-10 text-center mb-10">
        <h2 className="font-serif text-3xl md:text-4xl mb-4 text-foreground">Request a Venue Tour</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Fill in the details below and our concierge will contact you to arrange a personalized tour and consultation.</p>
        {errorMsg && (
          <div className="mt-6 p-4 bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 rounded-md border border-red-200 dark:border-red-800 text-sm">
            {errorMsg}
          </div>
        )}
      </div>

      {isSuccess ? (
        <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-in fade-in duration-500">
          <CheckCircle2 className="w-20 h-20 text-primary mb-4" />
          <h3 className="text-3xl font-serif text-foreground">Request Received</h3>
          <p className="text-muted-foreground max-w-md">Thank you for your interest in Hotel Luxe. Our team has received your request and will be in touch with you shortly to confirm your visit.</p>
          <Button variant="outline" className="mt-8" onClick={() => {
            setIsSuccess(false);
            setFormData({ name: "", phone: "", email: "", eventType: "", date: "", guests: "", venue: "", message: "" });
          }}>Submit Another Request</Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1. Full Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-foreground">Full Name *</label>
              <input 
                id="name" 
                name="name" 
                required 
                value={formData.name} 
                onChange={handleChange} 
                type="text" 
                placeholder="Enter your full name" 
                className="w-full h-12 px-4 border border-border bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all placeholder:text-muted-foreground/60 text-sm md:text-base" 
              />
            </div>

            {/* 2. Phone Number */}
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-foreground">Phone Number *</label>
              <input 
                id="phone" 
                name="phone" 
                required 
                value={formData.phone} 
                onChange={handleChange} 
                type="tel" 
                placeholder="Enter your phone number" 
                className="w-full h-12 px-4 border border-border bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all placeholder:text-muted-foreground/60 text-sm md:text-base" 
              />
            </div>

            {/* 3. Email Address */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-foreground">Email Address *</label>
              <input 
                id="email" 
                name="email" 
                required 
                value={formData.email} 
                onChange={handleChange} 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full h-12 px-4 border border-border bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all placeholder:text-muted-foreground/60 text-sm md:text-base" 
              />
            </div>

            {/* 4. Event Type */}
            <div className="space-y-2">
              <label htmlFor="eventType" className="block text-sm font-medium text-foreground">Event Type *</label>
              <select 
                id="eventType" 
                name="eventType" 
                required 
                value={formData.eventType} 
                onChange={handleChange} 
                className="w-full h-12 px-4 border border-border bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all text-sm md:text-base cursor-pointer"
              >
                <option value="">Select event type</option>
                <option value="wedding">Wedding Ceremony</option>
                <option value="reception">Reception</option>
                <option value="engagement">Engagement</option>
                <option value="sangeet">Sangeet / Mehndi</option>
                <option value="other">Other Celebration</option>
              </select>
            </div>

            {/* 5. Preferred Date */}
            <div className="space-y-2">
              <label htmlFor="date" className="block text-sm font-medium text-foreground">Preferred Date *</label>
              <input 
                id="date" 
                name="date" 
                required 
                min={todayStr}
                value={formData.date} 
                onChange={handleChange} 
                type="date" 
                style={{ colorScheme: 'light dark' }}
                className="w-full h-12 px-4 border border-border bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all text-sm md:text-base" 
              />
            </div>

            {/* 6. Number of Guests */}
            <div className="space-y-2">
              <label htmlFor="guests" className="block text-sm font-medium text-foreground">Number of Guests *</label>
              <input 
                id="guests" 
                name="guests" 
                required 
                value={formData.guests} 
                onChange={handleChange} 
                type="number" 
                min="1" 
                placeholder="Enter number of guests" 
                className="w-full h-12 px-4 border border-border bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all placeholder:text-muted-foreground/60 text-sm md:text-base" 
              />
            </div>

            {/* 7. Preferred Venue */}
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="venue" className="block text-sm font-medium text-foreground">Preferred Venue</label>
              <select 
                id="venue" 
                name="venue" 
                value={formData.venue} 
                onChange={handleChange} 
                className="w-full h-12 px-4 border border-border bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all text-sm md:text-base cursor-pointer"
              >
                <option value="">Select venue</option>
                <option value="luxe-grand-ballroom">Luxe Grand Ballroom</option>
                <option value="royal-banquet">Royal Banquet Hall</option>
                <option value="luxe-lawn">Luxe Lawn</option>
              </select>
            </div>

            {/* 8. Message */}
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-foreground">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                rows={4} 
                placeholder="Tell us about your event..." 
                className="w-full p-4 border border-border bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none placeholder:text-muted-foreground/60 text-sm md:text-base"
              ></textarea>
            </div>
          </div>

          {/* 9. Submit Button */}
          <div className="pt-4 flex justify-center">
            <Button type="submit" disabled={isSubmitting} size="lg" className="w-full sm:w-auto px-16 h-14 text-base">
              {isSubmitting ? <><Loader2 className="w-5 h-5 mr-3 animate-spin" /> Submitting...</> : "Request a Visit"}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}

export default function BookPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <PageHero 
        title="Reserve Your Moment"
        subtitle="Book a Visit"
        backgroundImage="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
      />

      <div className="container mx-auto px-4 md:px-8 py-8">
        <Breadcrumbs items={[{ label: "Book a Visit" }]} />
      </div>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <Suspense fallback={<div className="p-12 text-center text-muted-foreground">Loading booking form...</div>}>
            <BookForm />
          </Suspense>
        </div>
      </section>

      <Footer />
    </main>
  );
}

