"use client";

import React from 'react';
 
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { serviceSectionTexts } from '../../constants/serviceSectionTexts';

interface Service {
  number: string;
  title: string;
  description: string;
  href: string;
  alt: string;
  imgSrc: string;
}

// ...existing code...

const containerVariants = {
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

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const ServicesSection: React.FC = () => {
  const { language } = useLanguage();
  const texts = serviceSectionTexts[language] || serviceSectionTexts.en;
  return (
    <section className="section hero v8">
      <div className="responsive-container pt-24 md:pt-32 ">
        <div className="container-default w-container">
          <div className="z-index-1">
            <div className="responsive-container _500px">
              <motion.div
                className="inner-container _668px center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="text-center mg-bottom-64px">
                  <div className="inner-container _350px---mbp center">
                    <div className="inner-container _400px---mbl center">
                      <div className="inner-container _500px---tablet center">
                        <div className="subtitle">{texts.subtitle}</div>
                        <h1 className="color-neutral-100">
                          {texts.title}
                        </h1>
                      </div>
                    </div>
                  </div>
                  <p className="color-neutral-100 mg-bottom-0">
                    {texts.description}
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="w-dyn-list"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <div role="list" className="grid-2-columns w-dyn-items">
                  {texts.services.map((service) => (
                    <motion.div
                      key={service.number}
                      role="listitem"
                      className="w-dyn-item"
                    >
                      <motion.div
                        whileHover={{ scale: 1.03, y: -5 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                      >
                        <Link href={service.href} className="card services-item w-inline-block">
                          <div className="z-index-1">
                            <div className="display-2 color-neutral-100">{service.number}</div>
                          </div>
                          <div className="image-wrapper services-image-thumbnail">
                            <img
                              alt={service.alt}
                              src={service.imgSrc}
                              className="picture-link-card _w-h-100 fit-cover"
                              loading="lazy"
                            />
                          </div>
                          <div className="z-index-1">
                            <div className="flex-vertical start">
                              <h2 className="card-white-title display-3">{service.title}</h2>
                              <p className="mg-bottom-32px">{service.description}</p>
                              <div className="btn-secondary white white---btn-article">
                                <div className="link-text">{texts.viewDetail}</div>
                              </div>
                            </div>
                          </div>
                          <div className="article-shadow v4"></div>
                        </Link>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          className="bg-text-wrapper services-page"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="bg-text-font vertical white">{texts.bgText}</div>
        </motion.div>
      </div>
      <div className="bg rectangle services"></div>
    </section>
  );
};

export default ServicesSection;