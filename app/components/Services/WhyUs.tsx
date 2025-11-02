"use client";


import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { whyUsSectionTexts } from '../../constants/whyUsSectionTexts';

interface Feature {
  id: string;
  dataWId: string;
  imgSrc: string;
  imgAlt: string;
  imgClass?: string;
}

const featureData: Feature[] = [
  {
    id: 'w-node-_8b9f226c-e5bf-a594-71c2-bec16a4bb88e-32668424',
    dataWId: '8b9f226c-e5bf-a594-71c2-bec16a4bb88e',
    imgSrc: '/64d44a7d239aa1639d8553cd/64db99548e9e44c6a94172b5_advanced-technology-icon-carrepair-x-webflow-template.svg',
    imgAlt: 'Advanced Technology Icon - Carrepair X Webflow Template',
    imgClass: 'invert-color-icon',
  },
  {
    id: 'w-node-_0d6ff3e0-022a-d424-66e6-0dc31577edf8-32668424',
    dataWId: '0d6ff3e0-022a-d424-66e6-0dc31577edf8',
    imgSrc: '/64d44a7d239aa1639d8553cd/64db9954aabef6bbf62f49fe_certificated-icon-carrepair-x-webflow-template.svg',
    imgAlt: 'Certificated Experts Icon - Carrepair X Webflow Template',
    imgClass: 'invert-color-icon',
  },
  {
    id: 'w-node-ddd95620-cc30-919a-af9a-5456385a3347-32668424',
    dataWId: 'ddd95620-cc30-919a-af9a-5456385a3347',
    imgSrc: '/64d44a7d239aa1639d8553cd/64dbe8711386946f9c420ea7_schedule-availale-carrepair-x-webflow-template.svg',
    imgAlt: 'Always Available - Carrepair X Webflow Template',
  },
  {
    id: 'w-node-e841a7c1-4cac-bb45-777c-6810a679fb05-32668424',
    dataWId: 'e841a7c1-4cac-bb45-777c-6810a679fb05',
    imgSrc: '/64d44a7d239aa1639d8553cd/64db99540aeef21b0593e1dc_trophy-icon-carrepair-x-webflow-template.svg',
    imgAlt: 'Professional Team Icon - Carrepair X Webflow Template',
    imgClass: 'invert-color-icon',
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const WhyUsSection: React.FC = () => {
  const { language } = useLanguage();
  const texts = whyUsSectionTexts[language] || whyUsSectionTexts.en;
  return (
    <section className="section pd-bottom-270px">
      <div className="container-default w-container">
        <motion.div
          className="inner-container _596px center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inner-container _500px---mbl center">
            <div className="text-center mg-bottom-50px">
              <div className="inner-container _300px---mbp center">
                <div className="inner-container _350px---mbl center">
                  <div className="inner-container _450px---tablet center">
                    <div className="subtitle mg-bottom-16px">{texts.subtitle}</div>
                    <h2 className="heading-h1-size">{texts.title}</h2>
                  </div>
                </div>
              </div>
              <div className="inner-container _760px center">
                <p>{texts.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="w-layout-grid grid-4-columns"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featureData.map((feature, idx) => (
            <motion.div
              key={feature.id}
              id={feature.id}
              data-w-id={feature.dataWId}
              className="inner-container _280px center---mbp"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div className="text-center">
                <div className="mg-bottom-24px">
                  <img
                    src={feature.imgSrc}
                    loading="lazy"
                    alt={feature.imgAlt}
                    className={feature.imgClass || ''}
                  />
                </div>
                <h3 className="heading-h3-size mg-bottom-8px">{feature.imgAlt}</h3>
                <p className="mg-bottom-0">{feature.imgClass ? feature.imgClass : ''}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;