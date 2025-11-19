"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, type Variants, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { homeBannerTexts } from '../constants/homeBannerTexts';

const textItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.6, 0.01, 0, 0.95] },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { 
      duration: 1.0, 
      ease: [0.6, 0.01, 0, 0.95],
      delay: 0.2 
    },
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

const imageVariants: Variants = {
  enter: {
    opacity: 0,
    x: 100,
  },
  center: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.0,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 0.8,
      ease: 'easeIn',
    },
  },
};

const HomeBanner: React.FC = () => {
  const { language } = useLanguage();
  const texts = homeBannerTexts[language] || homeBannerTexts.en;
  const phoneNumber = '971559268787'; // without '+'
  const shopMessage = encodeURIComponent(texts.shopMessage);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${shopMessage}`;

  const images = [
    "/64d44a7d239aa1639d8553cd/64f7bff8e4e160feca4a76eb_image-left-home-v3-carrepair-x-webflow-template.png",
    "https://res.cloudinary.com/dk9i6oh5y/image/upload/v1763373732/car_2_oysyiz.png",
    "https://res.cloudinary.com/dk9i6oh5y/image/upload/v1763366202/patrol_ry5gtv.png",
    "https://res.cloudinary.com/dk9i6oh5y/image/upload/v1763366331/LC_cfdkns.png",
    "https://res.cloudinary.com/dk9i6oh5y/image/upload/v1763370546/car_1_lovxlm.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

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

                <motion.div className="buttons-row button-row-hide-mobile" variants={textItemVariants}>
                  {/* === Button 1: Explore Services === */}
                  <motion.div whileHover="hover" whileTap="tap" variants={buttonHoverTap}>
                    <Link
                      href="/services"
                      className="btn-primary white button-row w-button"
                    >
                      {texts.learnMoreBtn}
                    </Link>
                  </motion.div>

                  {/* === Button 2: Get Quote (WhatsApp) === */}
                  <motion.div whileHover="hover" whileTap="tap" variants={buttonHoverTap}>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary white w-button"
                    >
                      {texts.contactBtn}
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* === Right Image Section with Auto Slide === */}
      <div className="hero-v3-full-image-right">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <Image
              src={images[currentImageIndex]}
              alt={`Jevan Auto Accessories ${currentImageIndex + 1}`}
              width={920}
              height={800}
              priority={currentImageIndex === 0}
              className="_w-h-100 fit-cover home-v3-full-image-right-position"
              sizes="(max-width: 479px) 96vw, (max-width: 767px) 97vw, (max-width: 991px) 98vw, 51vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="position-absolute bg-shadow-gradient-overlay hero-v3"></div>
        
        {/* === Image Indicators === */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '10px',
          zIndex: 10
        }}>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: '2px solid white',
                backgroundColor: currentImageIndex === index ? 'white' : 'transparent',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="position-absolute bottom hero-v3-bottom">
        <div className="decoration-section-shape left hero-v3"></div>
      </div>
    </section>
  );
};

export default HomeBanner;