'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { testimonialsSectionTexts } from '../constants/testimonialsSectionTexts';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
 
interface Testimonial {
  name: string;
  location: string;
  text: string;
  imageSrc: string;
  altText: string;
}

// ...existing code...

// --- 2. Animation Variants ---
const fadeInAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

// --- 3. The Component ---
const Testimonials: React.FC = () => {
  const { language } = useLanguage();
  const texts = testimonialsSectionTexts[language] || testimonialsSectionTexts.en;
  const phoneNumber = "971559268787"; // no '+'
  const shopMessage = encodeURIComponent(texts.shopMessage);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${shopMessage}`;

  return (
    <section className="section overflow-hidden">
      <div className="container-default w-container">
        {/* --- Header Section --- */}
        <motion.div
          className="mg-bottom-32px"
          {...fadeInAnimation}
        >
          <div className="w-layout-grid grid-2-columns title-and-buttons _1-col-tablet">
            <div className="inner-container _690px">
              <div className="inner-container _600px---mbl">
                <div className="inner-container _500px---tablet">
                  <div className="inner-container _400px---mbl">
                    <div className="inner-container _350px---mbp">
                      <div className="subtitle">{texts.subtitle}</div>
                      <h2 className="heading-h1-size">
                        {texts.title}
                      </h2>
                    </div>
                  </div>
                </div>
                <p className="mg-bottom-0">
                  {texts.description}
                </p>
              </div>
            </div>
            {/* <div className="buttons-row right left-tablet">
              <a
                href={whatsappLink}
                className="btn-primary white w-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                {texts.scheduleBtn}
              </a>
            </div> */}
          </div>
        </motion.div>

        {/* --- Slider Section --- */}
        <motion.div
          {...fadeInAnimation}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* This replaces the Webflow slider div.
            We use the class names on the wrapper to connect our custom arrows.
          */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            className="slider-wrapper arrows-bottom w-slider"
            spaceBetween={30} // Space between slides
            slidesPerView={1}  // Default to 1 slide
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: '.slider-arrow-next', // Custom next arrow
              prevEl: '.slider-arrow-prev', // Custom prev arrow
            }}
            breakpoints={{
              // When window width is >= 768px
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // When window width is >= 992px
              992: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            <div className="slider-mask width-492px w-slider-mask">
              {texts.testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} className="slide-item-mg w-slide">
                  <div className="card testimonial-content v2" style={{ 
                    backgroundColor: '#1a1a1a', 
                    borderRadius: '12px',
                    padding: '24px',
                    border: '1px solid #333'
                  }}>
                    <div className="mg-bottom-20px">
                      <div className="flex-horizontal start wrap---row-16px" style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '12px',
                        marginBottom: '16px'
                      }}>
                        {/* Profile Circle */}
                        <div style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '50%',
                          backgroundColor: '#4285f4',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: '20px',
                          fontWeight: 'bold',
                          flexShrink: 0
                        }}>
                          {testimonial.name.charAt(0)}
                        </div>
                        
                        <div style={{ flex: 1 }}>
                          <div style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '8px',
                            marginBottom: '4px'
                          }}>
                            <div className="display-4" style={{ 
                              fontSize: '16px',
                              fontWeight: '500',
                              color: 'white',
                              margin: 0
                            }}>
                              {testimonial.name}
                            </div>
                            {/* Google Icon */}
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                            </svg>
                          </div>
                          <div style={{ 
                            fontSize: '13px',
                            color: '#999',
                            marginBottom: '8px'
                          }}>
                            10 months ago
                          </div>
                          {/* Star Rating */}
                          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                              </svg>
                            ))}
                            {/* Verified Badge */}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="#4285f4" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '4px' }}>
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p style={{ 
                      margin: 0,
                      color: '#e0e0e0',
                      fontSize: '14px',
                      lineHeight: '1.6'
                    }}>
                      {testimonial.text}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </div>

            {/* --- Custom Navigation Arrows --- */}
            {/* Added 'slider-arrow-prev' and 'slider-arrow-next' classes for Swiper to find */}
            <div className="slider-bottom-arrows-divider white"></div>
            <div className="btn-circle-secondary slider-arrow bottom-left w-slider-arrow-left slider-arrow-prev">
              <div className="line-rounded-icon"></div>
            </div>
            <div className="btn-circle-secondary slider-arrow bottom-right w-slider-arrow-right slider-arrow-next">
              <div className="line-rounded-icon"></div>
            </div>
            
            {/* Swiper will automatically generate pagination dots. 
              The original 'w-slider-nav' div is no longer needed.
            */}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;