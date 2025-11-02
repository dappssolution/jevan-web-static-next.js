"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { teamSectionTexts } from '../../constants/teamSectionTexts';

interface TeamMember {
  slug: string;
  name: string;
  role: string;
  imageUrl: string;
  imageAlt: string;
  imageSizes: string;
}

// ...existing code...

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

const TeamSection: React.FC = () => {
  const { language } = useLanguage();
  const texts = teamSectionTexts[language] || teamSectionTexts.en;
  return (
    <section className="section pd-bottom-270px">
      <div className="container-default w-container">
        <div className="responsive-container _700px _500px">
          <div className="mg-bottom-32px">
            <div className="text-center---tablet">
              <motion.div
                className="w-layout-grid grid-2-columns title-and-buttons _1-col-tablet"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div id="w-node-ef5a575d-de91-b3d0-9156-d359b70412fd-a60db103" className="inner-container _880px">
                  <div className="subtitle">{texts.subtitle}</div>
                  <h2 className="heading-h1-size mg-bottom-0">{texts.title}</h2>
                </div>
                <div id="w-node-ef5a575d-de91-b3d0-9156-d359b7041302-a60db103">
                  <div className="buttons-row center---tablet">
                    <Link href="/team" className="btn-primary w-button">
                      {texts.joinBtn}
                      <span className="line-rounded-icon arrow-right"></span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="w-dyn-list"
     
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div role="list" className="grid-3-columns _1-col-tablet w-dyn-items">
              {texts.members.map((member, index) => (
                <motion.div
                  key={member.slug}
                  role="listitem"
                  className="w-dyn-item"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300 }}
               
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                >
                  <Link href={`/team/${member.slug}`} className="team-member-wrapper w-inline-block">
                    <div className="team-member-image">
                      <img
                        src={member.imageUrl}
                        alt={member.imageAlt}
                  
              
                        sizes={member.imageSizes}
                        className="picture-link-card _w-h-100 team-image"
                      />
                    </div>
                    <div className="z-index-1">
                      <div>
                        <h3 className="card-white-title display-3 mg-bottom-16px">{member.name}</h3>
                        <div className="text-100 medium text-uppercase">{member.role}</div>
                      </div>
                    </div>
                    <div className="bg-overlay-gradient team-member-v8"></div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;