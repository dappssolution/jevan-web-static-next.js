"use client";

import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { aboutUsSectionTexts } from "../constants/aboutUsSectionTexts";

const textVariants: Variants = {
  hidden: { opacity: 0, y: "10%" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.6, ease: "circOut" },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "circOut", delay: 0.2 },
  },
};

const AboutUsSection: React.FC = () => {
  const { language } = useLanguage();
  const texts = aboutUsSectionTexts[language] || aboutUsSectionTexts.en;
  const phoneNumber = "971559268787"; // no '+'
  const shopMessage = encodeURIComponent(texts.shopMessage);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${shopMessage}`;

  return (
    <section className="section overflow-hidden" dir="ltr">
      <div className="position-relative">
        <div className="container-default w-container">
          <div>
            <div className="w-layout-grid grid-2-columns about-us-grid v3">
              {/* Left Content Section */}
              <div
                id="w-node-_35fa1830-a403-a085-33e5-74f4e85d93a2-954d1e5b"
                className="about-us-content"
              >
                <motion.div
                  className={`inner-container _550px ${
                    language === "ar" ? "text-right" : "text-left"
                  }`}
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="subtitle">{texts.subtitle}</div>
                  <h2 className="heading-h1-size">
                    {texts.title}
                  </h2>
                  <p className="mg-bottom-32px">
                    {texts.description}
                  </p>
                  <div className="buttons-row">
                    <a href={whatsappLink} className="btn-primary w-button" target="_blank" rel="noopener noreferrer">
                      {texts.connectBtn}
                      <span className="line-rounded-icon arrow-right"></span>
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Right Image Section */}
              <motion.div
                id="w-node-_35fa1830-a403-a085-33e5-74f4e85d93af-954d1e5b"
                className="full-section-image-right-container"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Image
                  src="/64d44a7d239aa1639d8553cd/64dd242ebd835d86d6d444f6_engine-image-right-carrepair-x-webflow-template.jpg"
                  loading="eager"
                  priority
                  layout="fill"
                  objectFit="cover"
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 97vw, (max-width: 991px) 98vw, 50vw"
                  alt="Jevan Auto Accessories custom car modification workshop"
                  className="_w-h-100 fit-cover why-us-full-image-left"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
