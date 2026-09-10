"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/data";
import { siteConfig } from "@/lib/config";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll with passive listener for maximum performance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open to prevent background scrolling
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 ease-out",
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/40 shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
          : "bg-gradient-to-b from-black/40 via-black/10 to-transparent border-b border-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        
        {/* LEFT: Wordmark / Logo */}
        <Link 
          href="/" 
          className="group flex flex-col justify-center focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded-xs z-50 select-none py-1"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <span
            className={cn(
              "font-serif text-lg sm:text-xl font-normal tracking-[0.24em] uppercase transition-colors duration-300 leading-none",
              isScrolled || isMobileMenuOpen ? "text-foreground" : "text-white"
            )}
          >
            Hotel Luxe
          </span>
          <span
            className={cn(
              "text-[8px] sm:text-[8.5px] tracking-[0.34em] uppercase font-sans transition-colors duration-300 mt-1 opacity-75",
              isScrolled || isMobileMenuOpen ? "text-muted-foreground" : "text-white/80"
            )}
          >
            Palace &amp; Grounds
          </span>
        </Link>

        {/* CENTER: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center" aria-label="Main Navigation">
          <ul className="flex items-center gap-7 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "group relative text-xs tracking-[0.16em] uppercase font-medium py-1.5 transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded-xs",
                      isActive
                        ? isScrolled 
                          ? "text-primary font-semibold" 
                          : "text-white font-semibold"
                        : isScrolled
                        ? "text-foreground/75 hover:text-foreground"
                        : "text-white/75 hover:text-white"
                    )}
                  >
                    <span>{link.label}</span>
                    
                    {/* Subtle animated underline on hover & active */}
                    <span
                      className={cn(
                        "absolute bottom-0 left-0 w-full h-[1.5px] bg-primary rounded-full transition-transform duration-300 ease-out origin-left",
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* RIGHT: Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/book"
            className={cn(
              "relative inline-flex items-center justify-center px-5 py-2 text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.985] select-none focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded-xs",
              isScrolled
                ? "border border-primary/50 text-foreground bg-primary/5 hover:bg-primary hover:text-primary-foreground hover:shadow-xs"
                : "border border-white/60 text-white bg-white/5 hover:bg-white hover:text-neutral-950 backdrop-blur-xs hover:shadow-xs"
            )}
          >
            Book a Visit
          </Link>
        </div>

        {/* Mobile Minimal Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          className={cn(
            "lg:hidden relative p-2.5 rounded-full transition-colors duration-200 z-50 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary",
            isScrolled || isMobileMenuOpen 
              ? "text-foreground hover:bg-muted/60" 
              : "text-white hover:bg-white/10"
          )}
        >
          <div className="w-5 h-4 relative flex flex-col justify-between items-end">
            <span 
              className={cn(
                "w-5 h-[1.5px] transition-all duration-300 ease-out origin-center",
                isScrolled || isMobileMenuOpen ? "bg-foreground" : "bg-white",
                isMobileMenuOpen && "rotate-45 translate-y-[7.5px]"
              )} 
            />
            <span 
              className={cn(
                "w-3.5 h-[1.5px] transition-all duration-300 ease-out",
                isScrolled || isMobileMenuOpen ? "bg-foreground" : "bg-white",
                isMobileMenuOpen && "opacity-0 scale-x-0"
              )} 
            />
            <span 
              className={cn(
                "w-5 h-[1.5px] transition-all duration-300 ease-out origin-center",
                isScrolled || isMobileMenuOpen ? "bg-foreground" : "bg-white",
                isMobileMenuOpen && "-rotate-45 -translate-y-[7px]"
              )} 
            />
          </div>
        </button>

        {/* Mobile Full-Screen Overlay Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 h-[100dvh] w-full bg-background/98 backdrop-blur-2xl z-40 flex flex-col justify-between px-6 sm:px-12 pt-28 pb-10 overflow-y-auto lg:hidden"
            >
              <div className="flex flex-col flex-1 justify-center max-w-md mx-auto w-full">
                <p className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium mb-6">
                  Navigation
                </p>
                
                <ul className="space-y-4">
                  {navLinks.map((link, idx) => {
                    const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                    return (
                      <motion.li 
                        key={link.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.35, 
                          delay: 0.05 * idx, 
                          ease: [0.22, 1, 0.36, 1] 
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="group flex items-center justify-between py-2 border-b border-border/20 transition-colors duration-200"
                        >
                          <span className={cn(
                            "font-serif text-2xl tracking-wide transition-colors duration-200",
                            isActive 
                              ? "text-primary font-medium" 
                              : "text-foreground group-hover:text-primary"
                          )}>
                            {link.label}
                          </span>
                          <span className="text-[10px] tracking-[0.25em] font-sans text-muted-foreground/60 uppercase">
                            0{idx + 1}
                          </span>
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>

              {/* Mobile Menu Footer & CTA */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-md mx-auto w-full pt-6 flex flex-col gap-4"
              >
                <Link
                  href="/book"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-3.5 bg-primary text-primary-foreground text-center text-xs tracking-[0.2em] uppercase font-medium rounded-xs hover:bg-primary/95 transition-all duration-200 active:scale-[0.99] shadow-xs"
                >
                  Book a Visit
                </Link>
                
                <div className="flex justify-between items-center text-[10.5px] tracking-wider text-muted-foreground uppercase pt-1 px-1">
                  <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="hover:text-foreground transition-colors">
                    {siteConfig.phone}
                  </a>
                  <span className="text-border/60">|</span>
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground transition-colors">
                    {siteConfig.email}
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}
