"use client";

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { heroSectionTexts } from '../constants/heroSectionTexts';

const textItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.6, 0.01, 0, 0.95] },
  },
};

const buttonHoverTap: Variants = {
  hover: { 
    scale: 1.05, 
    transition: { 
      type: "spring" as const, 
      stiffness: 300 
    } 
  },
  tap: { scale: 0.95 },
};

const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const texts = heroSectionTexts[language] || heroSectionTexts.en;

  // WhatsApp prefilled message setup
  const phoneNumber = '971559268787'; // without '+'
  const shopMessage = encodeURIComponent(texts.shopMessage);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${shopMessage}`;

  return (
    <section className="section hero v3" dir="ltr">
      <div className="z-index-3">
        <div className="container-default z-index-1 w-container">
          <div className="w-layout-grid grid-2-columns _1-2fr---1fr">
            <motion.div
              className={`inner-container _708px ${
                language === 'ar' ? 'text-right' : 'text-left'
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="inner-container _550px---mbl">
                <div className="inner-container _500px---mbl">
                  <motion.div className="subtitle" variants={textItemVariants}>
                    {texts.subtitle}
                  </motion.div>
                  <motion.h1
                    className="color-neutral-100"
                    variants={textItemVariants}
                  >
                    {texts.title}
                  </motion.h1>
                </div>

                <div className="inner-container _560px _100---tablet">
                  <motion.p
                    className="color-neutral-100 mg-bottom-32px mg-bottom-32px---mbp"
                    variants={textItemVariants}
                  >
                    {texts.description}
                  </motion.p>
                </div>

                <motion.div className="buttons-row" variants={textItemVariants}>
                  {/* === Button 1: Browse Services === */}
                  <motion.div whileHover="hover" whileTap="tap" variants={buttonHoverTap}>
                    <Link
                      href="/services"
                      className="btn-primary white button-row w-button"
                    >
                      {texts.servicesBtn}
                    </Link>
                  </motion.div>

                  {/* === Button 2: Connect Us (WhatsApp) === */}
                  <motion.div whileHover="hover" whileTap="tap" variants={buttonHoverTap}>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary white w-button"
                    >
                      {texts.connectBtn}
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* === Right Image Section === */}
      <motion.div
        className="hero-v3-full-image-right"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.3, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <Image
          src="/64d44a7d239aa1639d8553cd/64f7bff8e4e160feca4a76eb_image-left-home-v3-carrepair-x-webflow-template.png"
          alt="Auto Maintenance, Service & Repair"
          width={920}
          height={800}
          priority
          className="_w-h-100 fit-cover home-v3-full-image-right-position"
          sizes="(max-width: 479px) 96vw, (max-width: 767px) 97vw, (max-width: 991px) 98vw, 51vw"
        />
        <div className="position-absolute bg-shadow-gradient-overlay hero-v3"></div>
      </motion.div>

      <div className="position-absolute bottom hero-v3-bottom">
        <div className="decoration-section-shape left hero-v3"></div>
      </div>
    </section>
  );
};

export default HeroSection;
