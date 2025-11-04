'use client';

import { useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { locationSectionTexts } from '../constants/locationSectionTexts';

interface Location {
  id: number;
  name: string;
  description: string;
  email: string;
  phone: string;
  mapUrl: string;
}

const LocationsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targetRef = sectionRef.current;
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll(
            '[data-w-id]'
          ) as NodeListOf<HTMLElement>;
          
          elements.forEach((element, index) => {
            setTimeout(() => {
              element.style.opacity = '1';
              element.style.transform = 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)';
            }, index * 200);
          });

          const bgText = entry.target.querySelector('.bg-text-wrapper') as HTMLElement;
          if (bgText) {
            setTimeout(() => {
              bgText.style.opacity = '1';
            }, 600);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    if (targetRef) {
      observer.observe(targetRef);
    }

    return () => {
      if (targetRef) {
        observer.unobserve(targetRef);
      }
    };
  }, []);

  const handleEmailClick = useCallback((email: string) => {
    const mailtoUrl = `mailto:${email}`;
    window.open(mailtoUrl, '_blank');
  }, []);

  const handlePhoneClick = useCallback((phone: string) => {
    const telUrl = `tel:${phone}`;
    window.open(telUrl, '_blank');
  }, []);

  const { language } = useLanguage();
  const texts = locationSectionTexts[language] || locationSectionTexts.en;
    const locations: Location[] = [
      {
        id: 1,
        name: 'Umm Ramool, Dubai, UAE',
        description: 'Showroom No- 7, AJD Building, Umm Ramool, Rashidiya, Dubai, UAE',
        email: 'jevanautoaccessories@gmail.com',
        phone: '+971 559 268787',
        mapUrl: 'https://maps.app.goo.gl/CkRbH4Qw8mPSmBq69'
      }
    ];

  return (
    <section ref={sectionRef} className="section pd-0px overflow-hidden">
      <div className="container-default w-container">
        <div className="position-relative">
          <div className="z-index-1">
            <div>
              <div
                style={{
                  transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  
                  transition: 'all 0.6s ease-out'
                }}
                className="inner-container _728px center"
              >
                <div className="inner-container _500px---mbl center">
                  <div className="text-center mg-bottom-32px">
                    <div className="inner-container _600px---tablet center">
                      <div className="inner-container _350px---mbp center">
                        <div className="subtitle">{texts.subtitle}</div>
                        <h2 className="heading-h1-size">
                          {texts.title}
                        </h2>
                      </div>
                    </div>
                    <p>
                      {texts.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-layout-grid  one-column _1-col-tablet">
                {locations.map((location, index) => (
                  <div
                    key={location.id}
                    style={{
                      transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      transition: `all 0.6s ease-out ${index * 0.2}s`
                    }}
                    className="card"
                  >
                    <a href={location.mapUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'block', height: '400px' }}>
                      <div className="image-wrapper location-imagen-card" style={{ height: '400px' }}>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.2889628394253!2d55.367674!3d25.226906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f9c0f0000000f%3A0x0!2sJevan%20Auto%20Accessories!5e0!3m2!1sen!2sae!4v1635656234567!5m2!1sen!2sae"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </a>
                    <div className="pd---content-inside-card">
                      <div className="inner-container locations-content">
                        <h3 className="display-4 mg-bottom-16px">{location.name}</h3>
                        <p className="mg-bottom-16px">{location.description}</p>
                        <div className="mg-bottom-16px">
                          <span className="text-200 medium">Email: </span>
                          <button
                            onClick={() => handleEmailClick(location.email)}
                            className="location-link-item w-inline-block"
                            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit', color: '#0070f3' }}
                          >
                            {location.email}
                          </button>
                        </div>
                        <div className="mg-bottom-16px">
                          <span className="text-200 medium">Phone: </span>
                          <button
                            onClick={() => handlePhoneClick(location.phone)}
                            className="location-link-item w-inline-block"
                            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit', color: '#0070f3' }}
                          >
                            {location.phone}
                          </button>
                        </div>
                        <div className="mg-bottom-16px">
                          <span className="text-200 medium">Address: </span>
                          <span>{location.description}</span>
                        </div>
                        <div className='py-5'>

                        </div>
                        {/* Removed 'View on Google Maps' link as map is now clickable */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            style={{
            
              transition: 'opacity 0.6s ease-out 0.6s'
            }}
            className="bg-text-wrapper location v3"
          >
            <div className="bg-text-font vertical">{texts.bgText}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;