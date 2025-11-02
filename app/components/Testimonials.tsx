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
            <div className="buttons-row right left-tablet">
              {/* WhatsApp integration */}
              <a
                href={whatsappLink}
                className="btn-primary white w-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                {texts.scheduleBtn}
              </a>
            </div>
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
                  <div className="card testimonial-content v2">
                    <div className="mg-bottom-20px">
                      <div className="flex-horizontal start wrap---row-16px">
                        
                        <div>
                          <div className="display-4 mg-bottom-8px">{testimonial.name}</div>
                          <div className="color-neutral-800">
                            <div className="text-100 bold text-uppercase">
                              {testimonial.location}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="mg-bottom-0">{testimonial.text}</p>
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