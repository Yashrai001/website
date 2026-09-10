const getSiteUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "https://hotelluxe.vercel.app";
};

export const siteConfig = {
  name: "Hotel Luxe",
  description: "A luxurious destination for weddings, receptions, celebrations, and unforgettable gatherings.",
  url: getSiteUrl(),
  phone: "+91 98765 43210",
  email: "events@hotelluxe.com",
  address: {
    street: "123 Luxe Boulevard",
    locality: "Premium District",
    city: "Mumbai",
    region: "Maharashtra",
    postalCode: "400001",
    country: "IN",
    full: "123 Luxe Boulevard, Premium District, Mumbai, Maharashtra 400001, India",
  },
  googleMapsUrl: "https://maps.google.com/?q=123+Luxe+Boulevard,+Premium+District,+Mumbai,+Maharashtra+400001",
  whatsappNumber: "+919876543210",
  whatsappUrl: "https://wa.me/919876543210?text=Hi%20Hotel%20Luxe%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20venue%20for%20an%20upcoming%20celebration.",
  socials: {
    instagram: "https://instagram.com/hotelluxe",
    facebook: "https://facebook.com/hotelluxe",
    youtube: "https://youtube.com/hotelluxe",
  },
  defaultWhatsAppMessage: "Hi Hotel Luxe, I would like to inquire about booking a venue for an upcoming celebration.",
};

