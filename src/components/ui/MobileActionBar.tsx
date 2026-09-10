import { siteConfig } from "@/lib/config";
import { Phone, MessageCircle, CalendarDays } from "lucide-react";
import Link from "next/link";

export function MobileActionBar() {
  const whatsappUrl = `https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(siteConfig.defaultWhatsAppMessage)}`;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border/50 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-between h-16">
        <a 
          href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`} 
          className="flex-1 flex flex-col items-center justify-center h-full text-muted-foreground hover:text-primary transition-colors border-r border-border/50"
          aria-label="Call Hotel Luxe"
        >
          <Phone className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-medium tracking-wide uppercase">Call</span>
        </a>
        
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center h-full text-muted-foreground hover:text-[#25D366] transition-colors border-r border-border/50"
          aria-label="WhatsApp Hotel Luxe"
        >
          <MessageCircle className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-medium tracking-wide uppercase">WhatsApp</span>
        </a>
        
        <Link 
          href="/book" 
          className="flex-1 flex flex-col items-center justify-center h-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          aria-label="Book a Visit"
        >
          <CalendarDays className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-medium tracking-wide uppercase">Book Visit</span>
        </Link>
      </div>
    </div>
  );
}
