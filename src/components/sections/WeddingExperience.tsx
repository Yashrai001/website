"use client";

import { FallbackImage as Image } from "@/components/ui/FallbackImage";
import { motion } from "framer-motion";

export function WeddingExperience() {
  return (
    <section id="weddings" className="py-24 md:py-32 bg-[#141414] text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-5/12 lg:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="block text-sm font-medium tracking-widest text-primary uppercase mb-4">
                The Journey
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight text-white">
                Your Dream Wedding, Beautifully Brought to Life.
              </h2>
              <p className="text-stone-300 text-lg mb-8 leading-relaxed">
                From the vibrant colors of the Haldi and Mehndi to the sacred vows of the wedding ceremony and the grandeur of the reception, Hotel Luxe provides the perfect setting for every chapter of your celebration.
              </p>
              
              <ul className="grid grid-cols-2 gap-y-4 gap-x-8 text-stone-200 font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Engagements
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Mehndi & Sangeet
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Haldi Ceremonies
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Wedding Ceremonies
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Grand Receptions
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Anniversaries
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Right Editorial Images */}
          <div className="w-full lg:w-7/12 relative min-h-[600px] lg:min-h-[700px]">
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 right-0 w-[70%] h-[70%] z-10 overflow-hidden rounded-xs"
            >
              <Image 
                src="https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?q=80&w=2070&auto=format&fit=crop"
                alt="Wedding Ceremony Details"
                fill
                className="object-cover"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-0 left-0 w-[55%] h-[55%] z-20 border-8 border-[#141414] overflow-hidden rounded-xs"
            >
              <Image 
                src="https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=2070&auto=format&fit=crop"
                alt="Vibrant Sangeet or Haldi Celebration"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
