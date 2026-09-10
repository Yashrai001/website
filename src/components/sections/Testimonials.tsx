"use client";

import { SectionHeading } from "./SectionHeading";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="Celebrations That Stay With You" 
          subtitle="Testimonials"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-background p-10 border border-border/50 relative shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ease-out"
            >
              <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/10 rotate-180" />
              <div className="relative z-10">
                <p className="text-foreground/80 leading-relaxed italic mb-8 min-h-[120px]">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <h4 className="font-serif font-semibold text-lg text-foreground">{testimonial.author}</h4>
                  <span className="text-sm text-primary uppercase tracking-wider">{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
