export interface ServiceTextType {
  title: string;
  intro: string;
  aboutTitle: string;
  aboutText?: string;
  includedTitle: string;
  ctaTitle: string;
  ctaText: string;
  ctaBtn: string;
}

export const serviceDetailsTexts: Record<
  "en" | "ar",
  Record<string, ServiceTextType>
> = {
  en: {
    dvdFixing: {
      title: "DVD Fixing & Installation",
      intro:
        "Professional installation and repair of car DVD & infotainment systems. Enjoy smooth in-car entertainment for families, business travel, and long drives.",
      aboutTitle: "About the Service",
      aboutText:
        "We install & repair DVD players, Android Auto screens, USB/AUX connections, Bluetooth systems, and more. Clean wiring & perfect calibration included.",
      includedTitle: "What's Included?",
      ctaTitle: "Want to Install or Repair Your DVD System?",
      ctaText:
        "Get neat installation, safe wiring and perfect calibration for long-lasting performance.",
      ctaBtn: "Contact Us",
    },

    seatCover: {
      title: "Seat Cover Installation",
      intro:
        "Upgrade your car interior with premium seat covers — leather, fabric & custom stitching with a perfect fit.",
      aboutTitle: "About the Service",
      includedTitle: "Available Materials",
      ctaTitle: "Want a Seat Cover Upgrade?",
      ctaText:
        "Choose from 50+ materials and custom designs. Professional fitting with premium finishing.",
      ctaBtn: "Contact Us",
    },

    centralLock: {
      title: "Central Lock Installation & Repair",
      intro:
        "Enhance your car’s security and convenience with expert central locking installation and repair.",
      aboutTitle: "About Central Lock Service",
      includedTitle: "What's Included?",
      ctaTitle: "Having Issues with Your Central Lock?",
      ctaText:
        "We install new systems or repair existing ones with neat wiring and warranty support.",
      ctaBtn: "Contact Us",
    },

    cameraFixing: {
      title: "Camera Fixing & Installation",
      intro:
        "Improve driving safety with rear-view, front and mirror cameras for clear visibility while reversing or parking.",
      aboutTitle: "About the Service",
      includedTitle: "Available Camera Types",
      ctaTitle: "Need a Camera Installed or Repaired?",
      ctaText:
        "Professional installation with neat wiring & high-quality components for safety.",
      ctaBtn: "Contact Us",
    },

    windowTinting: {
      title: "Window Tinting Service",
      intro:
        "Reduce heat, block UV rays, and improve privacy with our premium window tinting solutions.",
      aboutTitle: "Why Choose Our Tinting?",
      includedTitle: "Benefits of Tinting",
      ctaTitle: "Want Premium Window Tinting?",
      ctaText:
        "Choose from a wide range of legal and premium films. Fast and clean installation.",
      ctaBtn: "Contact Us",
    },

    carSticker: {
      title: "Car Sticker & Wrap Services",
      intro:
        "Add style or branding with high-quality car stickers and vinyl wraps. Weather-resistant & long-lasting.",
      aboutTitle: "About the Service",
      includedTitle: "Available Sticker Types",
      ctaTitle: "Want to Customize Your Car?",
      ctaText:
        "Get branding, racing stripes, or full car wraps with premium materials & neat finishing.",
      ctaBtn: "Contact Us",
    },

    headlightPolishing: {
      title: "Headlight Polishing Service",
      intro:
        "Restore your car headlights to a clear, like-new look and improve night visibility.",
      aboutTitle: "Why Headlight Polishing?",
      includedTitle: "What's Included?",
      ctaTitle: "Want Crystal Clear Headlights?",
      ctaText:
        "Safety + Clean Look = Headlight Polishing. Quick and professional restoration service.",
      ctaBtn: "Contact Us",
    },

    floorMat: {
      title: "Floor Mat Lamination",
      intro:
        "Durable, waterproof, and custom-fitted floor mat lamination to keep your car clean and protected.",
      aboutTitle: "Why Floor Mat Lamination?",
      includedTitle: "Benefits of Lamination",
      ctaTitle: "Need Quality Floor Mat Lamination?",
      ctaText:
        "We provide custom-fit, long-lasting laminated mats for perfect protection.",
      ctaBtn: "Contact Us",
    },

    mirrorCamera: {
      title: "Mirror Camera Fixing & Installation",
      intro:
        "Upgrade your visibility with mirror-mounted camera systems for safer driving and lane change assistance.",
      aboutTitle: "Why Mirror Cameras?",
      includedTitle: "Types of Mirror Cameras",
      ctaTitle: "Want a Safe Mirror Camera Setup?",
      ctaText:
        "We install high-quality mirror cameras with hidden wiring and professional alignment.",
      ctaBtn: "Contact Us",
    },

    navigationInstallation: {
      title: "Navigation System Installation",
      intro:
        "Get real-time GPS assistance, traffic alerts, voice commands, and Android Auto / CarPlay support.",
      aboutTitle: "Why Install GPS Navigation?",
      includedTitle: "Available Features",
      ctaTitle: "Want Advanced GPS Navigation?",
      ctaText:
        "We install modern navigation systems for smooth, safe, and smart driving.",
      ctaBtn: "Contact Us",
    },
  },

  ar: {
    dvdFixing: {
      title: "تركيب وإصلاح أنظمة DVD",
      intro:
        "تركيب وإصلاح احترافي لأنظمة DVD وأنظمة الترفيه داخل السيارة. استمتع بتجربة ترفيهية سلسة للعائلات ورجال الأعمال والرحلات الطويلة.",
      aboutTitle: "نبذة عن الخدمة",
      aboutText:
        "نقوم بتركيب وإصلاح مشغلات DVD، شاشات أندرويد، وصلات USB/AUX، أنظمة البلوتوث والمزيد. تركيب أنيق ومعايرة دقيقة.",
      includedTitle: "ماذا تشمل الخدمة؟",
      ctaTitle: "هل تريد تركيب أو إصلاح نظام DVD؟",
      ctaText:
        "نوفر تركيبًا أنيقًا، توصيلات آمنة، ومعايرة مثالية لأداء طويل الأمد.",
      ctaBtn: "اتصل بنا",
    },

    seatCover: {
      title: "تركيب أغطية المقاعد",
      intro:
        "طور مظهر سيارتك الداخلي بأغطية مقاعد فاخرة — جلد، قماش وخياطة مخصصة مع توافق مثالي.",
      aboutTitle: "نبذة عن الخدمة",
      includedTitle: "الخامات المتوفرة",
      ctaTitle: "هل تريد ترقية أغطية المقاعد؟",
      ctaText:
        "اختر من أكثر من 50 خامة وتصميم مخصص. تركيب احترافي وتشطيب فاخر.",
      ctaBtn: "اتصل بنا",
    },

    centralLock: {
      title: "تركيب وإصلاح السنتر لوك",
      intro:
        "عزز أمان سيارتك وراحتك مع خدمة تركيب وإصلاح أنظمة السنتر لوك الاحترافية.",
      aboutTitle: "حول خدمة السنتر لوك",
      includedTitle: "ماذا تشمل الخدمة؟",
      ctaTitle: "هل تواجه مشاكل في السنتر لوك؟",
      ctaText:
        "نقوم بتركيب الأنظمة الجديدة أو إصلاح الأنظمة الحالية مع تمديد الأسلاك بشكل أنيق وضمان.",
      ctaBtn: "اتصل بنا",
    },

    cameraFixing: {
      title: "تركيب وإصلاح الكاميرات",
      intro:
        "حسّن من سلامة القيادة مع كاميرات خلفية وأمامية وكاميرات المرايا لرؤية أوضح أثناء الرجوع أو الوقوف.",
      aboutTitle: "نبذة عن الخدمة",
      includedTitle: "أنواع الكاميرات المتوفرة",
      ctaTitle: "هل تحتاج إلى تركيب أو إصلاح كاميرا؟",
      ctaText: "تركيب احترافي بأسلاك مخفية ومكونات عالية الجودة لضمان السلامة.",
      ctaBtn: "اتصل بنا",
    },

    windowTinting: {
      title: "خدمة تظليل الزجاج",
      intro:
        "قلل الحرارة، احجب أشعة الشمس الضارة، وحافظ على الخصوصية مع حلول تظليل الزجاج الفاخرة.",
      aboutTitle: "لماذا تختار التظليل لدينا؟",
      includedTitle: "مزايا التظليل",
      ctaTitle: "هل ترغب في تظليل فاخر للنوافذ؟",
      ctaText:
        "اختر من مجموعة واسعة من الأفلام القانونية والفاخرة. تركيب سريع ونظيف.",
      ctaBtn: "اتصل بنا",
    },

    carSticker: {
      title: "خدمات استيكرات وتغليف السيارات",
      intro:
        "أضف لمسة جمالية أو علامة تجارية باستخدام استيكرات عالية الجودة ولف السيارات بالفينيل. مقاوم للعوامل الجوية وطويل الأمد.",
      aboutTitle: "نبذة عن الخدمة",
      includedTitle: "أنواع الاستيكرات المتوفرة",
      ctaTitle: "هل تريد تخصيص شكل سيارتك؟",
      ctaText:
        "نوفر لك شعارات تجارية، خطوط سباق، أو تغليف كامل للسيارة بخامات فاخرة وتشطيب أنيق.",
      ctaBtn: "اتصل بنا",
    },

    headlightPolishing: {
      title: "خدمة تلميع المصابيح الأمامية",
      intro:
        "استعد مظهر المصابيح الأمامية لتبدو جديدة تمامًا مع تحسين الرؤية الليلية.",
      aboutTitle: "لماذا تلميع المصابيح؟",
      includedTitle: "ماذا تشمل الخدمة؟",
      ctaTitle: "هل تريد مصابيح واضحة وجذابة؟",
      ctaText:
        "سلامة + مظهر نظيف = تلميع المصابيح. خدمة ترميم سريعة واحترافية.",
      ctaBtn: "اتصل بنا",
    },

    floorMat: {
      title: "تغليف وتبطين أرضيات السيارة",
      intro:
        "تغليف أرضيات السيارة بمواد متينة، مقاومة للماء، ومصممة حسب المقاس لضمان النظافة والحماية.",
      aboutTitle: "لماذا تغليف الأرضيات؟",
      includedTitle: "فوائد التغليف",
      ctaTitle: "هل تريد حماية أرضيات سيارتك؟",
      ctaText:
        "نوفر تغليفًا حسب المقاس، طويل الأمد، لحماية مثالية من الأوساخ والرطوبة.",
      ctaBtn: "اتصل بنا",
    },

    mirrorCamera: {
      title: "تركيب وإصلاح كاميرات المرايا",
      intro:
        "طور سلامة القيادة مع أنظمة كاميرات مثبتة على المرايا لدعم الرؤية وتغيير المسار بأمان.",
      aboutTitle: "لماذا كاميرات المرايا؟",
      includedTitle: "أنواع كاميرات المرايا",
      ctaTitle: "هل تريد تركيب كاميرا مرايا احترافية؟",
      ctaText:
        "نوفر تركيبًا بكاميرات عالية الجودة مع تمديد أسلاك مخفية ومعايرة احترافية.",
      ctaBtn: "اتصل بنا",
    },

    navigationInstallation: {
      title: "تركيب نظام الملاحة (GPS)",
      intro:
        "احصل على توجيه GPS مباشر، تنبيهات المرور، أوامر صوتية، ودعم Android Auto / CarPlay.",
      aboutTitle: "لماذا تركيب نظام الملاحة؟",
      includedTitle: "المميزات المتوفرة",
      ctaTitle: "هل تريد نظام ملاحة متطور؟",
      ctaText: "نقوم بتركيب أنظمة ملاحة حديثة تضمن قيادة سلسة وآمنة وذكية.",
      ctaBtn: "اتصل بنا",
    },
  },
};
