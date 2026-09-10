"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-32 px-4 relative overflow-hidden">
        {/* Background elegant accents */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center flex flex-col items-center max-w-2xl"
        >
          <span className="text-primary font-serif text-8xl md:text-9xl mb-6">404</span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Page Not Found
          </h1>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let us guide you back to our luxurious spaces.
          </p>
          
          <Link href="/">
            <Button size="lg" className="px-10">
              Return Home
            </Button>
          </Link>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
