"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="locaton-half-image-wrapper"
      >
        <motion.div
          {...fadeInAnimation}
          className="container-default flex-growth"
        >
          <div className="w-layout-grid grid-2-columns location-grid">
            {texts.locations.map((loc, idx) => (
              <div className="inner-container _492px" key={idx}>
                <div className="z-index-1">
                  <h2 className="display-3 color-neutral-100 mg-bottom-8px">
                    {loc.title}
                  </h2>
                  <p className="color-neutral-100 mg-bottom-32px">
                    {loc.description}
                  </p>
                  <div className="location-link-wrapper">
                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      className="location-link-item white w-inline-block"
                    >
                      <div className="link-text">
                        <div className={`inner-container ${idx === 0 ? '_210px' : '_238px'}`}>
                          <div className="text-100 medium text-uppercase">
                            {loc.address}
                          </div>
                        </div>
                      </div>
                      <div className="line-rounded-icon link-icon-right mg-left-16px">
                        &#xe803;
                      </div>
                    </a>
                    <a
                      href={`tel:${loc.phone.replace(/\s+/g, '')}`}
                      className="location-link-item white w-inline-block"
                    >
                      <div className="link-text">
                        <div className="text-300 medium text-uppercase">
                          {loc.phone}
                        </div>
                      </div>
                      <div className="line-rounded-icon link-icon-right mg-left-16px">
                        &#xe803;
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <div className="half-bg-image-right">
          <img
            src="https://wallpaperaccess.com/full/8857411.jpg"
            loading="eager"
           
            
            alt="Umm Ramool Dubai Location - Carrepair X Webflow Template"
            className="image _w-h-100 fit-cover"
          />
          <div className="position-absolute bg-shadow-gradient-overlay"></div>
        </div>
        <div className="half-bg-image-left">
          <img
            src="https://wordpress-content.vroomly.com/wp-content/uploads/2023/03/iStock-1368159665_2.jpg"
            loading="eager"
          
             
            alt="Umm Ramool Dubai Location - Carrepair X Webflow Template"
            className="image _w-h-100 fit-cover"
          />
          <div className="position-absolute bg-shadow-gradient-overlay"></div>
        </div>
      </motion.div>
    </section>
  );

}