'use client';

import React, { useEffect, useRef } from 'react';
import {
  motion,
  useInView,
  useAnimation,
  useMotionValue,
  useTransform,
  animate,
} from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { statsSectionTexts } from '../constants/statsSectionTexts';

interface AnimatedNumberProps {
  to: number;
  isInView: boolean;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ to, isInView }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration: 1.5,
        ease: 'easeOut',
      });
      return controls.stop;
    }
  }, [isInView, count, to]);

  return <motion.span>{rounded}</motion.span>;
};

const StatsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

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

  return (
    <motion.section
      ref={ref}
      className="section stats-section"
      variants={containerVariants}
      initial="hidden"
      animate={mainControls}
    >
      <div className="container-default w-container">
        <motion.div
          className="inner-container _834px center"
        
        >
          <div className="text-center mg-bottom-32px">
            <div className="subtitle">{statsSectionTexts[useLanguage().language]?.subtitle || statsSectionTexts.en.subtitle}</div>
            <h2 className="heading-h1-size color-neutral-100">
              {statsSectionTexts[useLanguage().language]?.title || statsSectionTexts.en.title}
            </h2>
          </div>
        </motion.div>
        <div className="w-layout-grid grid-stats-3-columns">
          <motion.div
            id="w-node-_608d377d-2bfc-a1c6-21a5-1b10ed595302-954d1e5b"
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="heading-h1-size color-neutral-100 mg-bottom-16px">
              <AnimatedNumber to={500} isInView={isInView} />
              <span className="color-accent-1">+</span>
            </div>
            <h3 className="heading-h3-size color-neutral-100 mg-bottom-0">
              {statsSectionTexts[useLanguage().language]?.happyClients || statsSectionTexts.en.happyClients}
            </h3>
          </motion.div>
          <motion.div
            className="divider-vertical white stats-divider"
          ></motion.div>
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="heading-h1-size color-neutral-100 mg-bottom-16px">
              <AnimatedNumber to={1000} isInView={isInView} />
              <span className="color-accent-1">+</span>
            </div>
            <h3 className="heading-h3-size color-neutral-100 mg-bottom-0">
              {statsSectionTexts[useLanguage().language]?.customizationsDone || statsSectionTexts.en.customizationsDone}
            </h3>
          </motion.div>
          <motion.div
            className="divider-vertical white stats-divider"
          ></motion.div>
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="heading-h1-size color-neutral-100 mg-bottom-16px">
              <AnimatedNumber to={98} isInView={isInView} />
              <span className="color-accent-1">%</span>
            </div>
            <h3 className="heading-h3-size color-neutral-100 mg-bottom-0">
              {statsSectionTexts[useLanguage().language]?.satisfactionRate || statsSectionTexts.en.satisfactionRate}
            </h3>
          </motion.div>
        </div>
      </div>
      <div className="position-absolute top">
        <div className="decoration-section-shape right"></div>
      </div>
      <div className="position-absolute bottom">
        <div className="decoration-section-shape left"></div>
      </div>
      <motion.div
        className="bg-text-wrapper our-number"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="bg-text-font white">{statsSectionTexts[useLanguage().language]?.bgText || statsSectionTexts.en.bgText}</div>
      </motion.div>
    </motion.section>
  );
}

export default StatsSection;
