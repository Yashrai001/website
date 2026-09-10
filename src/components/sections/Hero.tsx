"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FallbackImage as Image } from "@/components/ui/FallbackImage";


export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-bg.jpg"
          alt="Hotel Luxe Celebration"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center mt-16">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-primary tracking-[0.2em] text-xs md:text-sm font-semibold uppercase mb-6 drop-shadow-md"
        >
          Where Your Moments Become Memories
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 max-w-5xl leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
        >
          Celebrate Life&apos;s Grandest Moments.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white text-lg md:text-xl max-w-2xl mb-10 font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
        >
          A luxurious destination for weddings, receptions, celebrations and unforgettable gatherings.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/book" className={buttonVariants({ size: "lg", className: "px-8" })}>
            Book a Visit
          </Link>
          <a 
            href="#about" 
            className={buttonVariants({ 
              size: "lg", 
              variant: "outline", 
              className: "text-white border-white hover:bg-white hover:text-black px-8" 
            })}
          >
            Explore Hotel Luxe
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a 
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer z-10"
        aria-label="Scroll to introduction"
      >
        <span className="text-white/70 group-hover:text-white text-xs tracking-widest uppercase transition-colors duration-200">Scroll</span>
        <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
          <motion.div 
            className="w-full h-1/2 bg-white absolute top-0"
            animate={{ top: ["-50%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.a>
    </section>
  );
}
