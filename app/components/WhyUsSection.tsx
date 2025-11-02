'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { whyUsSectionTexts } from '../constants/whyUsSectionTexts';

/**
 * --- IMPORTANT: Image Handling ---
 * * Place your image in the `public/images/` folder for simplicity.
 * * Example path:
 *   /public/images/jevan-auto-accessories-custom-work.jpg
 * * Then set:
 *   const imageSrc = "/images/jevan-auto-accessories-custom-work.jpg";
 */

const imageSrc = "https://img.redbull.com/images/q_auto,f_auto/redbullcom/2017/08/30/fc98f747-b38b-4b09-b9ef-9b80580c73c9/modifying-cars-for-beginners:-the-5-easiest-mods-to-do.jpg"; // update if needed

// Create a motion-compatible version of the Next.js Link component
const MotionLink = motion(Link);

const WhyUsSection: React.FC = () => {
  const { language } = useLanguage();
  const texts = whyUsSectionTexts[language] || whyUsSectionTexts.en;
  return (
    <section className="section pd-bottom-0px overflow-hidden">
      <div className="container-default w-container">
        <div className="position-relative">
          <div>
            <div className="w-layout-grid grid-2-columns why-us-grid v3">
              {/* === Image Column === */}
              <motion.div
                id="w-node-_08bf4d5f-63fc-820f-edf8-04c70d0a578f-954d1e5b"
                className="mg-left--71px mg-left-0px---tablet"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <div
                  id="w-node-d43288c9-4e86-46ef-e4ec-439777c151b1-954d1e5b"
                  data-w-id="d43288c9-4e86-46ef-e4ec-439777c151b1"
                  className="inner-container _644px height-100 _100---tablet"
                >
                  <img
                    src={ 'https://vroom.zone/wp-content/uploads/2023/11/Car-modification-trends.jpg'}
                    loading="eager"
                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1439px) 53vw, 644px"
                    alt="Jevan Auto Accessories custom interior and exterior work"
                    className="fit-cover _w-h-100 image-left-grid"
                  />
                </div>
              </motion.div>

              {/* === Text Column === */}
              <div id="w-node-_3e0dc2c3-a082-4213-ca0b-f02d43659f3f-954d1e5b">
                <motion.div
                  className="inner-container _550px _100---tablet lg:pr-8"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                >
                  <div className="inner-container _488px">
                    <div className="subtitle">{texts.subtitle}</div>
                    <h2 className="heading-h1-size">{texts.title}</h2>
                  </div>
                  <p className="mg-bottom-32px">
                    {texts.description}
                  </p>
                  <div className="buttons-row">
                    <MotionLink
                      data-w-id="3e0dc2c3-a082-4213-ca0b-f02d43659f48"
                      href="/services"
                      className="btn-primary w-button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {texts.servicesBtn}
                    </MotionLink>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* === Background Text === */}
          <motion.div
            data-w-id="32265f39-d072-5647-43c9-25ff87ea93bd"
            className="bg-text-wrapper why-us v3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.0, ease: 'easeOut', delay: 0.5 }}
          >
            <div className="bg-text-font vertical">{texts.bgText}</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
