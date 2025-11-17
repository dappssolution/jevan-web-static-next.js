export type Service = {
  slug: string;
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
};


export const services: Service[] = [
  {
    slug: "dvd-fixing",
    title: "DVD Fixing",
    description:
      "Service and repair for in-car DVD players and entertainment systems to keep them performing smoothly.",
    imgSrc:
      "https://res.cloudinary.com/dk9i6oh5y/image/upload/v1763351089/2149413372_xspih1.jpg",
    imgAlt: "Car Dashboard DVD Player Repair",
  },
  {
    slug: "seat-cover",
    title: "Seat Cover",
    description:
      "Custom seat covers designed to enhance comfort and give your car’s interior a premium look.",
    imgSrc:
      "https://res.cloudinary.com/dk9i6oh5y/image/upload/v1763355347/16595_smdjhj.jpg",
    imgAlt: "Custom Car Seat Cover & Upholstery",
  },
  {
    slug: "central-lock",
    title: "Central Lock",
    description:
      "Central locking repair and installation for enhanced vehicle security and convenience.",
    imgSrc:
      "https://res.cloudinary.com/dk9i6oh5y/image/upload/v1763355448/central-lock_ginik3.jpg",
    imgAlt: "Car Central Lock Repair",
  },
  {
    slug: "camera-fixing",
    title: "Camera Fixing",
    description:
      "Professional installation and fixing of dash, rear, and mirror cameras for better visibility and safety.",
    imgSrc:
      "https://res.cloudinary.com/dk9i6oh5y/image/upload/v1763356629/2149149644_yo55cy.jpg",
    imgAlt: "Car Reverse and Mirror Camera Installation",
  },
  {
    slug: "window-tinting",
    title: "Window Tinting",
    description:
      "High-quality tinting for UV protection, heat reduction, and improved privacy in all conditions.",
    imgSrc:
      "https://res.cloudinary.com/dk9i6oh5y/image/upload/v1763356695/2149593827_d2x0or.jpg",
    imgAlt: "Car Window Tinting Service",
  },
  {
    slug: "car-sticker-fixing",
    title: "Car Sticker Fixing",
    description:
      "Precision sticker and wrap services to personalize and style your vehicle the way you like.",
    imgSrc:
      "https://res.cloudinary.com/dk9i6oh5y/image/upload/v1763356806/sticker-fixing_htxvms.jpg",
    imgAlt: "Car Sticker Fixing and Decals",
  },
  {
    slug: "headlight-polishing",
    title: "Headlight Polishing",
    description:
      "Restore brightness and clarity — remove haze and yellowing for a new-like headlight finish.",
    imgSrc:
      "https://res.cloudinary.com/dk9i6oh5y/image/upload/v1763356895/headlight-polishing_v40x7s.jpg",
    imgAlt: "Headlight Polishing Before and After",
  },
  {
    slug: "floor-mat-lamination",
    title: "Floor Mat Lamination",
    description:
      "Durable lamination to protect your car’s floor from dust, sand, and spills — easy to clean and long-lasting.",
    imgSrc:
      "https://res.cloudinary.com/dk9i6oh5y/image/upload/v1763356992/mat-laminiation_sud93u.jpg",
    imgAlt: "Car Floor Mat Lamination",
  },
  {
    slug: "mirror-camera-fixing",
    title: "Mirror Camera Fixing",
    description:
      "Expert fixing and installation of mirror cameras for improved rear and side view clarity.",
    imgSrc:
      "https://res.cloudinary.com/dk9i6oh5y/image/upload/v1763357006/mirror-camera_pgbbsu.jpg",
    imgAlt: "Car Mirror Camera Repair",
  },
  {
    slug: "navigation-installation",
    title: "Navigation Installation",
    description:
      "Installation of advanced navigation systems and infotainment upgrades for smooth and safe drives.",
    imgSrc:
      "https://res.cloudinary.com/dk9i6oh5y/image/upload/v1763357088/58616_pqrsxu.jpg",
    imgAlt: "Car Navigation and DVD Installation",
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
