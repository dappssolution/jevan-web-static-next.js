export type Service = {
  slug: string;
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
};

export const services: Service[] = [
  {
    slug: 'seat-upholstery',
    title: 'Seat Cover & Upholstery',
    description:
      'Bespoke upholstery and seat covers that renew comfort and give your interior a premium look.',
    imgSrc: 'http://shop.barbourhendrickhonda.com/wp-content/uploads/sites/99/2020/03/car-wash-2-e1584115432423.jpg',
    imgAlt: 'Custom Car Seat Cover & Upholstery',
  },
  {
    slug: 'navigation-dvd',
    title: 'Navigation & DVD Installation',
    description:
      'Modern infotainment installs — navigation, DVD and touchscreen upgrades for safer, smoother drives.',
    imgSrc: 'https://media.wired.com/photos/648cf57182d37ced55dff5eb/master/w_2560%2Cc_limit/Massachusetts-Right-To-Repair-Law-vs-US-Govt-Business-1318473654.jpg',
    imgAlt: 'Car Navigation and DVD Installation',
  },
  {
    slug: 'window-tinting',
    title: 'Window Tinting',
    description:
      'High-performance tinting for heat reduction, UV protection and added privacy in hot climates.',
    imgSrc: 'https://www.forum-badharzburg.de/wp-content/uploads/2017/09/bigstock-Portrait-of-an-auto-mechanic-a-91601333.jpg',
    imgAlt: 'Car Window Tinting Service',
  },
  {
    slug: 'headlight-polishing',
    title: 'Headlight Polishing',
    description:
      'Restore clarity and visibility — remove haze and yellowing for a like-new headlight finish.',
    imgSrc: 'https://siempreauto.com/wp-content/uploads/sites/9/2023/09/shutterstock_2340377479.jpg?w=1200',
    imgAlt: 'Headlight Polishing Before and After',
  },
  {
    slug: 'camera-fixing',
    title: 'Camera & Mirror Camera Fixing',
    description:
      'Installations and repairs for dash, reverse and mirror cameras to improve safety and visibility.',
    imgSrc: 'https://www.mg.co.uk/sites/default/files/2023-03/iStock-1347150429%201258%20x%20838.jpg',
    imgAlt: 'Car Reverse and Mirror Camera Installation',
  },
  {
    slug: 'sound-system',
    title: 'Sound System Installation',
    description:
      'Custom audio setups and speaker tuning for a powerful, clear in-car listening experience.',
    imgSrc: 'https://specializedtruckandauto.com/wp-content/uploads/engine-repair-scaled.jpeg',
    imgAlt: 'Car Sound System Installation',
  },
  {
    slug: 'floor-lamination',
    title: 'Floor Mat Lamination',
    description:
      'Durable floor protection to keep carpets clean from sand, dirt and spills — easy to maintain.',
    imgSrc: 'https://www.endurancewarranty.com/wp-content/uploads/2022/12/average-car-maintenance-cost.jpg',
    imgAlt: 'Car Floor Mat Lamination',
  },
  {
    slug: 'car-sticker',
    title: 'Car Sticker Fixing',
    description:
      'Precision decal and wrap services to personalize your vehicle — from accents to full wraps.',
    imgSrc: 'https://www.garagedannythibert.com/ressources/images/8e6996bf7047.jpg',
    imgAlt: 'Car Sticker Fixing and Decals',
  },
  {
    slug: 'central-lock',
    title: 'Central Lock Fixing',
    description: 'Central locking repairs and upgrades for reliable security and everyday convenience.',
    imgSrc: 'https://www.ecoleauto.com/wp-content/uploads/2023/06/iStock-1387759698.jpg',
    imgAlt: 'Car Central Lock Repair',
  },
  {
    slug: 'dvd-fixing',
    title: 'DVD Player Fixing',
    description:
      'Service and repair for in-car DVD players and entertainment systems to keep them performing.',
    imgSrc: 'https://www.pamperedautocare.com/wp-content/uploads/2017/10/scheduled-car-maintenance-bmw-mercedes-audi-american-cars-luxury-austin-cedar-park-round-rock-1.jpg',
    imgAlt: 'Car Dashboard DVD Player Repair',
  },
  {
    slug: 'mirror-camera',
    title: 'Mirror Camera Fixing',
    description: 'Specialized mirror-camera installations and fixes to give clear rear and side visibility.',
    imgSrc: 'https://siempreauto.com/wp-content/uploads/sites/9/2023/09/shutterstock_2340377479.jpg?w=1200',
    imgAlt: 'Car Mirror Camera Repair',
  },
  // Additional services from ServiceSection
  {
    slug: 'maintenance',
    title: 'Maintenance',
    description:
      'General vehicle maintenance to keep systems operating efficiently and reliably.',
    imgSrc: 'https://wordpress-content.vroomly.com/wp-content/uploads/2023/03/iStock-1368159665_2.jpg',
    imgAlt: 'Maintenance',
  },
  {
    slug: 'wheels',
    title: 'Wheels',
    description: 'Wheels services including tire fitting and wheel care.',
    imgSrc: 'https://www.endurancewarranty.com/wp-content/uploads/2022/04/Car-Wash_Wheels.jpg',
    imgAlt: 'Wheels',
  },
  {
    slug: 'alignment',
    title: 'Alignment',
    description: 'Wheel alignment services for stable handling and even tire wear.',
    imgSrc: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/washing-white-suv-in-self-service-car-wash-with-a-wap-hose-free-photo.jpg?w=2210&quality=70',
    imgAlt: 'Alignment',
  },
  {
    slug: 'powder-coating',
    title: 'Powder coating',
    description: 'Powder coating for parts to improve durability and finish.',
    imgSrc: 'https://wallpaperaccess.com/full/8857411.jpg',
    imgAlt: 'Powder coating',
  },
  {
    slug: 'brakes',
    title: 'Brakes',
    description: 'Brake services for safety and reliability.',
    imgSrc: 'https://ic.pics.livejournal.com/byrdautomotiver/92394050/1038/1038_2000.jpg',
    imgAlt: 'Brakes',
  },
  {
    slug: 'engine-service',
    title: 'Engine service',
    description: 'Comprehensive engine servicing and diagnostics.',
    imgSrc: 'https://www.pamperedautocare.com/wp-content/uploads/2017/10/scheduled-car-maintenance-bmw-mercedes-audi-american-cars-luxury-austin-cedar-park-round-rock-1.jpg',
    imgAlt: 'Engine service',
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
