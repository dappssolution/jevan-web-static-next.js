"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { accessoriesTexts } from '@/app/constants/accessoriesTexts';

interface Accessory {
  id: string;
  name: string;
  imageUrl: string;
  imageAlt: string;
}

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const AccessoriesSection: React.FC = () => {
  const { language } = useLanguage();
  const texts = accessoriesTexts[language] || accessoriesTexts.en;

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <div className="text-center lg:text-left">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
                <motion.div
                  className="max-w-3xl"
                  variants={itemVariants}
                >
                  <div className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-4">
                    {texts.subtitle}
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    {texts.title}
                  </h2>
                  <p className="text-lg text-gray-600">
                    {texts.description}
                  </p>
                </motion.div>
                <motion.div
                  className="flex justify-center lg:justify-end"
                  variants={itemVariants}
                >
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Accessories Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            {texts.accessories.map((accessory: Accessory) => (
              <motion.div
                key={accessory.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: 'easeOut' }
                }}
                className="group"
              >
                  {/* Image Section */}
                  <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                    <img
                      src={accessory.imageUrl}
                      alt={accessory.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {accessory.name}
                    </h3>
                  </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Shape */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default AccessoriesSection;