"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section id="contact" className="relative py-32 bg-[#141414] text-white overflow-hidden flex items-center justify-center">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
      
      <div className="container relative z-10 mx-auto px-4 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl flex flex-col items-center"
        >
          <span className="block text-sm font-medium tracking-widest text-primary uppercase mb-6">
            Begin Your Journey
          </span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight text-white">
            Let&apos;s Plan Something Unforgettable.
          </h2>
          <p className="text-stone-300 text-lg md:text-xl mb-12 max-w-2xl font-light">
            Tell us about your celebration and let our team help you create the perfect experience tailored to your vision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Link href="/book" className={buttonVariants({ size: "lg", className: "px-10 h-14 text-base min-w-[200px]" })}>
              Book a Visit
            </Link>
            <Link 
              href="/contact" 
              className={buttonVariants({ 
                size: "lg", 
                variant: "outline", 
                className: "px-10 h-14 text-base min-w-[200px] text-white border-white hover:bg-white hover:text-black" 
              })}
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
