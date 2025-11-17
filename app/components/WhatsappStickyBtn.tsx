"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

const WhatsAppStickyButton = () => {
  const { language } = useLanguage();
  
  const phoneNumber = "971559268787";
  const shopMessage = encodeURIComponent(
    language === "ar"
      ? `مرحباً جيفان لإكسسوارات السيارات 👋،\n\nأنا مهتم بخدمات تعديل وتخصيص السيارات الخاصة بكم.\n\nتفاصيل المتجر:\nجيفان لإكسسوارات السيارات\nأفضل تعديل للسيارات في دبي\nنحن متخصصون في جميع أنواع الأعمال الداخلية والخارجية، ونقدم تحولات شاملة لتخصيص سيارتك.\n\nيرجى مشاركة المزيد من التفاصيل أو العروض.`
      : `Hello Jevan Auto Accessories 👋,\n\nI'm interested in your car modification and customization services.\n\nShop Details:\nJevan Auto Accessories\nBest Car Modification in Dubai\nWe specialize in all types of interior and exterior work, offering comprehensive transformations to personalize your vehicle.\n\nPlease share more details or offers.`
  );
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${shopMessage}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
      style={{
        width: "60px",
        height: "60px",
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.5,
      }}
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 10px 30px rgba(37, 211, 102, 0.4)"
      }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp size={32} />
      
      {/* Pulse animation ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
    </motion.a>
  );
};

export default WhatsAppStickyButton;