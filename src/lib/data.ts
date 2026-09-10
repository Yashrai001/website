import { Sparkles, Utensils, HeartHandshake, Car, Flower2, Music, Camera } from "lucide-react";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/halls", label: "Halls" },
  { href: "/weddings", label: "Weddings" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export const venues = [
  {
    id: "luxe-grand-ballroom",
    name: "Luxe Grand Ballroom",
    description: "Our signature indoor venue featuring crystal chandeliers, premium acoustics, and elegant interiors perfect for grand receptions.",
    capacity: "800 - 1000 Guests",
    area: "12,000 sq ft",
    suitableFor: ["Grand Receptions", "Large Weddings", "Corporate Galas"],
    amenities: ["Crystal Chandeliers", "Central AC", "Built-in Stage", "Bridal Suite", "Premium Acoustics"],
    seatingStyles: ["Banquet (Round Tables)", "Theatre Style", "Lounge / Mixed"],
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop", // Grand Ballroom (Interior)
    gallery: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop"
    ]
  },
  {
    id: "royal-banquet",
    name: "Royal Banquet Hall",
    description: "A sophisticated space designed for intimate ceremonies, engagement parties, and elegant dining experiences.",
    capacity: "200 - 400 Guests",
    area: "6,500 sq ft",
    suitableFor: ["Engagements", "Sangeet", "Intimate Weddings", "Anniversaries"],
    amenities: ["Elegant Decor", "Adjustable Lighting", "Dedicated Bar Area", "Dance Floor"],
    seatingStyles: ["Banquet", "Cabaret", "U-Shape"],
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop", // Elegant dining/decor
    gallery: [
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: "luxe-lawn",
    name: "Luxe Lawn",
    description: "A breathtaking open-air luxury lawn offering a natural backdrop for mandap ceremonies and large-scale celebrations under the stars.",
    capacity: "1000+ Guests",
    area: "25,000 sq ft",
    suitableFor: ["Mandap Ceremonies", "Large Receptions", "Sangeet Nights", "Haldi"],
    amenities: ["Landscaped Gardens", "Outdoor Lighting", "Stage Setup Area", "Food Stalls Area", "Marquee Option"],
    seatingStyles: ["Theatre", "Round Table", "Casual Lounge"],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop", // Indian wedding outdoor lawn
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
    ]
  }
];

export const features = [
  {
    icon: Sparkles,
    title: "Grand Wedding Spaces",
    description: "Versatile, opulent halls and open lawns designed to accommodate both intimate and massive celebrations.",
  },
  {
    icon: HeartHandshake,
    title: "Premium Hospitality",
    description: "Our dedicated staff provides impeccable, intuitive service to ensure every guest feels like royalty.",
  },
  {
    icon: Flower2,
    title: "Bespoke Decor",
    description: "Collaborate with our in-house decor specialists to create breathtaking, customized floral and lighting designs.",
  },
  {
    icon: Utensils,
    title: "Gourmet Catering",
    description: "Culinary excellence featuring curated menus, from authentic traditional feasts to global fusion delicacies.",
  },
  {
    icon: Music,
    title: "Event Support",
    description: "Complete logistical support including state-of-the-art audiovisual systems, stage setup, and entertainment coordination.",
  },
  {
    icon: Car,
    title: "Ample Parking",
    description: "Extensive, secure parking facilities with valet services ensuring a seamless arrival and departure experience.",
  },
];

export const services = [
  {
    icon: Flower2,
    title: "Decor & Styling",
    description: "Transform our spaces with bespoke floral arrangements, elegant drapery, and custom stage setups tailored to your theme.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: Utensils,
    title: "Gourmet Catering",
    description: "From traditional Indian banquets to global cuisines, our culinary team creates an unforgettable dining experience.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: HeartHandshake,
    title: "Event Planning",
    description: "Our expert wedding planners assist with every detail, ensuring your celebration is flawless and stress-free.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop"
  },
  {
    icon: Sparkles,
    title: "Guest Hospitality",
    description: "Premium concierge and hospitality services to warmly welcome and assist your guests throughout the event.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: Camera,
    title: "Photography Support",
    description: "We provide picturesque spots and optimal lighting conditions for your photography and videography teams.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop"
  },
  {
    icon: Music,
    title: "DJ & Entertainment",
    description: "High-end sound systems and dedicated acoustic environments for DJs, live bands, and traditional performers.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
  }
];

export const galleryImages = [
  { id: 1, category: "Weddings", src: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?q=80&w=2070&auto=format&fit=crop", alt: "Indian Wedding Rituals", className: "col-span-1 row-span-2" },
  { id: 2, category: "Venue", src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop", alt: "Grand Ballroom Setup", className: "col-span-2 row-span-1" },
  { id: 3, category: "Decor", src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop", alt: "Elegant Floral Decor", className: "col-span-1 row-span-1" },
  { id: 4, category: "Celebrations", src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070&auto=format&fit=crop", alt: "Guests Celebrating", className: "col-span-1 row-span-1" },
  { id: 5, category: "Decor", src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop", alt: "Banquet Hall Lighting", className: "col-span-1 row-span-2" },
  { id: 6, category: "Weddings", src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop", alt: "Couple Mandap Moment", className: "col-span-2 row-span-2" },
  { id: 7, category: "Food", src: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop", alt: "Gourmet Catering", className: "col-span-1 row-span-1" },
  { id: 8, category: "Celebrations", src: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=2070&auto=format&fit=crop", alt: "Haldi Celebration", className: "col-span-1 row-span-1" },
  { id: 9, category: "Receptions", src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop", alt: "Reception Details", className: "col-span-2 row-span-1" },
];

export const testimonials = [
  {
    quote: "Hotel Luxe transformed our vision into reality. The Grand Ballroom was breathtaking, and the hospitality team ensured every guest felt special. It was truly the best day of our lives.",
    author: "Priya & Rahul",
    role: "Wedding Couple",
  },
  {
    quote: "As an event planner, working with Hotel Luxe is always a dream. Their attention to detail, impeccable service, and stunning venues make every celebration an absolute masterpiece.",
    author: "Ananya Desai",
    role: "Luxury Event Planner",
  },
  {
    quote: "We hosted our daughter's reception at the Luxe Lawn. The ambiance under the stars, combined with the exquisite catering, left our guests mesmerized. Highly recommended.",
    author: "Vikram Singhania",
    role: "Father of the Bride",
  }
];
