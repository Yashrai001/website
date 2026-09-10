"use client";

import Link from "next/link";
import { FallbackImage as Image } from "@/components/ui/FallbackImage";
import { ArrowRight, Users } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { motion } from "framer-motion";

import { venues } from "@/lib/data";

export function VenueSection() {
  return (
    <section id="halls" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="Spaces Designed for Extraordinary Celebrations" 
          subtitle="Our Venues"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {venues.map((venue, index) => (
            <motion.div 
              key={venue.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col bg-background overflow-hidden border border-border/50 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out rounded-xs"
            >
              <Link href={`/halls#${venue.id}`} className="relative aspect-[4/3] overflow-hidden block">
                <Image 
                  src={venue.image} 
                  alt={venue.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <div className="p-8 flex flex-col flex-grow">
                <Link href={`/halls#${venue.id}`}>
                  <h3 className="font-serif text-2xl mb-3 text-foreground hover:text-primary transition-colors">{venue.name}</h3>
                </Link>
                <p className="text-muted-foreground mb-6 flex-grow">
                  {venue.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-border">
                  <div className="flex items-center text-sm text-foreground/80 font-medium">
                    <Users className="w-4 h-4 mr-2 text-primary" />
                    {venue.capacity}
                  </div>
                  <Link 
                    href={`/halls#${venue.id}`} 
                    className="flex items-center text-sm font-semibold tracking-wide text-primary hover:text-foreground transition-colors group/btn"
                  >
                    Explore
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
