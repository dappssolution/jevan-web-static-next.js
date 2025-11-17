"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import Link from "next/link";
import Image from "next/image";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { heroSectionTexts } from "../constants/heroSectionTexts";

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
      stiffness: 300,
    },
  },
  tap: { scale: 0.95 },
};

const titleContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const titleWordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Slide animation variants
const slideVariants: Variants = {
  enter: {
    x: "100%",
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.5 },
    },
  },
  exit: {
    x: "-100%",
    opacity: 0,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.5 },
    },
  },
};

const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const texts = heroSectionTexts[language] || heroSectionTexts.en;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/64d44a7d239aa1639d8553cd/64f7bff8e4e160feca4a76eb_image-left-home-v3-carrepair-x-webflow-template.png",
    "https://res.cloudinary.com/dk9i6oh5y/image/upload/v1763373732/car_2_oysyiz.png",
    "https://res.cloudinary.com/dk9i6oh5y/image/upload/v1763366202/patrol_ry5gtv.png",
    "https://res.cloudinary.com/dk9i6oh5y/image/upload/v1763366331/LC_cfdkns.png",
    "https://res.cloudinary.com/dk9i6oh5y/image/upload/v1763370546/car_1_lovxlm.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  // WhatsApp prefilled message setup
  const phoneNumber = "971559268787";
  const shopMessage = encodeURIComponent(texts.shopMessage);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${shopMessage}`;

  const titleWords = texts.title.split(" ");

  return (
    <section className="section hero v3" dir="ltr">
      <div className="z-index-3">
        <div className="container-default z-index-1 w-container">
          <div className="w-layout-grid grid-2-columns _1-2fr---1fr">
            <div
              className={`inner-container _708px ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            >
              <motion.div initial="hidden" animate="visible" variants={{}}>
                <div className="inner-container _550px---mbl">
                  <div className="inner-container _500px---mbl">
                    <motion.div
                      className="subtitle"
                      variants={textItemVariants}
                    >
                      {texts.subtitle}
                    </motion.div>

                    {/* Animated Title */}
                    <motion.h1
                      className="color-neutral-100"
                      initial="hidden"
                      animate="visible"
                      variants={titleContainerVariants}
                    >
                      {titleWords.map((word, index) => (
                        <motion.span
                          key={index}
                          variants={titleWordVariants}
                          style={{
                            display: "inline-block",
                            marginRight: "0.3em",
                          }}
                        >
                          {word}
                        </motion.span>
                      ))}
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

                  <motion.div
                    className="buttons-row hidden md:flex !hidden md:!flex"
                    variants={textItemVariants}
                  >
                    {/* === Button 1: Browse Services === */}
                    <motion.div
                      whileHover="hover"
                      whileTap="tap"
                      variants={buttonHoverTap}
                    >
                      <Link
                        href="/services"
                        className="btn-primary white button-row w-button"
                      >
                        {texts.servicesBtn}
                      </Link>
                    </motion.div>

                    {/* === Button 2: Connect Us (WhatsApp) === */}
                    <motion.div
                      whileHover="hover"
                      whileTap="tap"
                      variants={buttonHoverTap}
                    >
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
      </div>

      {/* === Right Image Section with Slider === */}
      <div className="hero-v3-full-image-right" style={{ overflow: "hidden" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{ width: "100%", height: "100%" }}
          >
            <Image
              src={images[currentImageIndex]}
              alt="Auto Maintenance, Service & Repair"
              fill
              priority
              className="_w-h-100 fit-cover home-v3-full-image-right-position"
              sizes="(max-width: 479px) 96vw, (max-width: 767px) 97vw, (max-width: 991px) 98vw, 51vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </motion.div>
        </AnimatePresence>
        <div className="position-absolute bg-shadow-gradient-overlay hero-v3"></div>
      </div>

      <div className="position-absolute bottom hero-v3-bottom">
        <div className="decoration-section-shape left hero-v3"></div>
      </div>
    </section>
  );
};

export default HeroSection;
