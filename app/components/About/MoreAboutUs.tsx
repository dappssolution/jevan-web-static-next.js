"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { moreAboutUsTexts } from '../../constants/moreAboutUsTexts';

const MoreAboutUsSection: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const { language } = useLanguage();
  const texts = moreAboutUsTexts[language] || moreAboutUsTexts.en;
  return (
    <div className="overflow-hidden position-relative">
      <section className="section pd-top-232px bg-neutral-800">
        <div className="container-default w-container">
          <motion.div
            className="responsive-container _500px"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <motion.div
              className="inner-container _972px center"
            >
              <div className="text-center mg-bottom-124px">
                <div className="inner-container _700px---tablet center">
                  <div className="subtitle mg-bottom-16px">{texts.subtitle}</div>
                  <h2 className="heading-h1-size color-neutral-100">
                    {texts.title}
                  </h2>
                </div>
                <div className="inner-container _760px center">
                  <p className="color-neutral-100">
                    {texts.description}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="w-layout-grid grid-3-columns layout-v1"
              variants={sectionVariants}
            >
              <motion.div
                id="w-node-_31d078d6-14ed-9091-5171-c1a529cfb2b4-a60db103"
                className="inner-container _312px _100---tablet"
              >
                <div className="text-center">
                  <Image
                    src="64d44a7d239aa1639d8553cd/64db99540aeef21b0593e1dc_trophy-icon-carrepair-x-webflow-template.svg"
                    loading="eager"
                    alt="Professional Team Icon"
                    className="mg-bottom-24px"
                    width={64}
                    height={64}
                  />
                  <h3 className="display-3 color-neutral-100 mg-bottom-16px">
                    {texts.teamTitle}
                  </h3>
                  <div className="inner-container _500px---tablet center">
                    <p className="color-neutral-100 mg-bottom-0">
                      {texts.teamDesc}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                id="w-node-_0a0aeb36-c111-ae8a-7ef0-122a72fbd515-a60db103"
                className="inner-container _312px _100---tablet"
              >
                <div className="text-center">
                  <Image
                    src="64d44a7d239aa1639d8553cd/64db99548e9e44c6a94172b5_advanced-technology-icon-carrepair-x-webflow-template.svg"
                    loading="eager"
                    alt="Advanced Technology Icon"
                    className="mg-bottom-24px"
                    width={64}
                    height={64}
                  />
                  <h3 className="display-3 color-neutral-100 mg-bottom-16px">
                    {texts.techTitle}
                  </h3>
                  <div className="inner-container _500px---tablet center">
                    <p className="color-neutral-100 mg-bottom-0">
                      {texts.techDesc}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                id="w-node-bf4dcfff-9f7d-b990-41c3-fcad654de68d-a60db103"
                className="inner-container _312px _100---tablet"
              >
                <div className="text-center">
                  <Image
                    src="64d44a7d239aa1639d8553cd/64db9954aabef6bbf62f49fe_certificated-icon-carrepair-x-webflow-template.svg"
                    loading="eager"
                    alt="Certificated Experts Icon"
                    className="mg-bottom-24px"
                    width={64}
                    height={64}
                  />
                  <h3 className="display-3 color-neutral-100 mg-bottom-16px">
                    {texts.expertsTitle}
                  </h3>
                  <div className="inner-container _500px---tablet center">
                    <p className="color-neutral-100 mg-bottom-0">
                      {texts.expertsDesc}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <div className="position-absolute top">
          <div className="decoration-section-shape right"></div>
        </div>
      </section>
    </div>
  );
};

export default MoreAboutUsSection;