"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { contactLocationSectionTexts } from "../../constants/contactLocationSectionTexts";

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

export default function LocationSection() {
  const { language } = useLanguage();
  const texts = contactLocationSectionTexts[language] || contactLocationSectionTexts.en;
  
  return (
    <section className="section pd-0px overflow-hidden">
      {texts.locations.map((loc, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="location-half-image-wrapper relative overflow-hidden min-h-screen"
        >
          {/* Background Image - Left Side */}
          <div className="absolute inset-0 w-full md:w-1/2 h-full">
            <img
              src="https://wordpress-content.vroomly.com/wp-content/uploads/2023/03/iStock-1368159665_2.jpg"
              loading="eager"
              alt={`${loc.title} Location`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          {/* Content - Right Side */}
          <div className="container-default relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
              {/* Empty space for image on desktop */}
              <div className="hidden md:block"></div>
              
              {/* Content Column */}
              <motion.div
                {...fadeInAnimation}
                className="flex items-center py-16 md:py-24 px-6 md:px-12 bg-white"
              >
                <div className="w-full max-w-xl">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                    {loc.title}
                  </h2>
                  <p className="text-lg md:text-xl mb-10 text-gray-700 leading-relaxed">
                    {loc.description}
                  </p>
                  
                  <div className="space-y-4">
                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-5 border-2 border-gray-200 hover:border-orange-500 hover:bg-orange-50 transition-all duration-300 rounded-lg group"
                    >
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                          {loc.address}
                        </div>
                      </div>
                      <div className="ml-4 text-2xl text-orange-500 group-hover:translate-x-2 transition-transform">
                        →
                      </div>
                    </a>
                    
                    <a
                      href={`tel:${loc.phone1.replace(/\s+/g, '')}`}
                      className="flex items-center justify-between p-5 border-2 border-gray-200 hover:border-orange-500 hover:bg-orange-50 transition-all duration-300 rounded-lg group"
                    >
                      <div className="flex-1">
                        <div className="text-base font-semibold text-gray-900 uppercase tracking-wide">
                          {loc.phone1}
                        </div>
                      </div>
                      <div className="ml-4 text-2xl text-orange-500 group-hover:translate-x-2 transition-transform">
                        →
                      </div>
                    </a>

                    <a
                      href={`tel:${loc.phone2.replace(/\s+/g, '')}`}
                      className="flex items-center justify-between p-5 border-2 border-gray-200 hover:border-orange-500 hover:bg-orange-50 transition-all duration-300 rounded-lg group"
                    >
                      <div className="flex-1">
                        <div className="text-base font-semibold text-gray-900 uppercase tracking-wide">
                          {loc.phone2}
                        </div>
                      </div>
                      <div className="ml-4 text-2xl text-orange-500 group-hover:translate-x-2 transition-transform">
                        →
                      </div>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}