import { FallbackImage as Image } from "@/components/ui/FallbackImage";
import { Users, Maximize, CheckCircle2, LayoutTemplate } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SectionHeading } from "./SectionHeading";

interface VenueDetailProps {
  venue: {
    id: string;
    name: string;
    description: string;
    capacity: string;
    area: string;
    suitableFor: string[];
    amenities: string[];
    seatingStyles: string[];
    image: string;
    gallery: string[];
  };
  reverse?: boolean;
}

export function VenueDetail({ venue, reverse = false }: VenueDetailProps) {
  return (
    <div id={venue.id} className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-start py-16 border-b border-border/50 last:border-0`}>
      {/* Images Section */}
      <div className="w-full lg:w-1/2 space-y-4">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
          <Image 
            src={venue.image}
            alt={venue.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {venue.gallery.slice(1, 3).map((img, idx) => (
            <div key={idx} className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image 
                src={img}
                alt={`${venue.name} detail ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 flex flex-col">
        <SectionHeading 
          title={venue.name}
          centered={false}
          className="mb-6"
        />
        
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          {venue.description}
        </p>
        
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="flex items-start gap-3">
            <Users className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider mb-1">Capacity</h4>
              <p className="text-muted-foreground">{venue.capacity}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Maximize className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider mb-1">Area</h4>
              <p className="text-muted-foreground">{venue.area}</p>
            </div>
          </div>
        </div>

        <div className="space-y-8 mb-10">
          <div>
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" /> Ideal For
            </h4>
            <div className="flex flex-wrap gap-2">
              {venue.suitableFor.map((item, idx) => (
                <span key={idx} className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <LayoutTemplate className="w-4 h-4 text-primary" /> Seating Styles
            </h4>
            <div className="flex flex-wrap gap-2">
              {venue.seatingStyles.map((item, idx) => (
                <span key={idx} className="px-3 py-1 border border-border text-muted-foreground text-sm rounded-full">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" /> Key Amenities
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
              {venue.amenities.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link href={`/book?venue=${venue.id}`}>
          <Button size="lg" className="w-full sm:w-auto px-10">
            Request Availability
          </Button>
        </Link>
      </div>
    </div>
  );
}
