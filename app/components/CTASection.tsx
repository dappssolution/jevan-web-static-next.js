'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import { ctaSectionTexts } from '../constants/ctaSectionTexts';

export default function CTAv3() {
  const leftSectionRef = useRef<HTMLDivElement>(null);
  const rightSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px',
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (leftSectionRef.current) {
      observer.observe(leftSectionRef.current);
    }
    if (rightSectionRef.current) {
      observer.observe(rightSectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleButtonHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const button = e.currentTarget;
    button.style.transform = 'translateY(-2px)';
  };

  const handleButtonLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const button = e.currentTarget;
    button.style.transform = 'translateY(0)';
  };

  const { language } = useLanguage();
  const texts = ctaSectionTexts[language] || ctaSectionTexts.en;
  const phoneNumber = "971559268787"; // no '+'
  const shopMessage = encodeURIComponent(texts.shopMessage);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${shopMessage}`;

  return (
    <section className="cta-section cta-v3">
      <div className="container-default z-index-1 w-container">
        <div className="inner-container _1062px center">
          <div className="w-layout-grid grid-2-columns cta-v3">
            {/* Left Section */}
            <div
              ref={leftSectionRef}
              className="inner-container _590px _100---tablet"
            >
              <div className="subtitle">{texts.subtitle}</div>
              <h2 className="heading-h1-size color-neutral-100 mg-bottom-0">
                {texts.title}
              </h2>
            </div>

            {/* Right Section */}
            <div
              ref={rightSectionRef}
              className="inner-container _374px _100---tablet"
            >
              <p className="color-neutral-100 mg-bottom-32px">
                {texts.description}
              </p>
              <Link
                href="/contact"
                className="btn-primary white w-button"
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
                onClick={(e) => {
                  e.preventDefault();
                  window.open(whatsappLink, '_blank');
                }}
              >
                {texts.contactBtn}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="position-absolute bottom">
        <div className="decoration-section-shape left"></div>
      </div>
      <div className="position-absolute top">
        <div className="decoration-section-shape right"></div>
      </div>
    </section>
  );
}
