"use client";

import Link from "next/link";
import { FallbackImage as Image } from "@/components/ui/FallbackImage";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";
import { motion } from "framer-motion";

export function Introduction() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              <Image 
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop" 
                alt="Elegant Indian Wedding Decor"
                fill
                className="object-cover rounded-sm shadow-xl"
              />
              <div className="absolute -bottom-8 -right-8 w-2/3 aspect-square border border-primary/30 -z-10 hidden md:block" />
              <div className="absolute -top-8 -left-8 w-1/2 aspect-square bg-muted -z-10 hidden md:block" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <SectionHeading 
              title="More Than a Venue. A Beginning." 
              subtitle="Our Story" 
              centered={false}
              className="mb-8 w-full flex flex-col items-center lg:items-start"
            />
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-xl">
              At Hotel Luxe, we believe that every grand celebration deserves a breathtaking canvas. 
              Our venue is meticulously designed to host premium weddings, sophisticated receptions, 
              and unforgettable gatherings that reflect your unique story.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl">
              From our palatial ballrooms to lush open-air lawns, every corner exudes luxury and 
              refinement, ensuring your special moments are nothing short of extraordinary.
            </p>
            
            <Link 
              href="/about" 
              className={buttonVariants({ variant: "outline", size: "lg", className: "px-8" })}
            >
              Discover Our Story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
