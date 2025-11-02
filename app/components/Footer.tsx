'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { services } from '../lib/servicesData';

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = footerRef.current?.querySelectorAll('.menu-wrapper, .footer-bottom');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="decoration-section-shape dark left"></div>
      <div className="footer-wrapper">
        <div className="container-default w-container">
          <div className="footer-middle">
              <div className="w-layout-grid grid-3-columns footer-pages-grid">
              <div className="menu-wrapper">
                <div className="inner-container">
                  <div className="unline-block">
                    <div className="heading-h2-size footer-title">Maps</div>
                    <div className="underline-title"></div>
                  </div>
                  <div className="nav-content">
                    <ul role="list" className="nav-menu-list-wrapper">
                      <li className="nav-menu-list-item">
                        <Link href="/" className="nav-link white">Home</Link>
                      </li>
                      <li className="nav-menu-list-item">
                        <Link href="/about" className="nav-link white">About Us</Link>
                      </li>
                      <li className="nav-menu-list-item">
                        <Link href="/services" className="nav-link white">Services</Link>
                      </li>
                      <li className="nav-menu-list-item mg-bottom-0">
                        <Link href="/contact" className="nav-link white">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="menu-wrapper">
                <div className="inner-container">
                  <div className="unline-block">
                    <div className="heading-h2-size footer-title">Our Services</div>
                    <div className="underline-title"></div>
                  </div>
                  <div>
                    <ul role="list" className="nav-menu-list-wrapper">
                      {services.map((s) => (
                        <li key={s.slug} className="nav-menu-list-item">
                          <Link href={`/services/${s.slug}`} className="nav-link white">
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="menu-wrapper">
                <div className="inner-container _272px">
                  <div className="unline-block">
                    <div className="heading-h2-size footer-title">Contact Us</div>
                    <div className="underline-title"></div>
                  </div>
                  <div>
                    <ul role="list" className="nav-menu-list-wrapper">
                      <li className="nav-menu-list-item">
                        <a href="tel:+971559268787" className="nav-link white">+971 55 926 8787</a>
                      </li>
                      <li className="nav-menu-list-item">
                        <a href="tel:+971524642299" className="nav-link white">+971 52 464 2299</a>
                      </li>
                      <li className="nav-menu-list-item">
                        <a href="mailto:jevanautoaccessories@gmail.com" className="nav-link white">jevanautoaccessories@gmail.com</a>
                      </li>
                      <li className="nav-menu-list-item mg-bottom-0">
                        <span className="nav-link white">Showroom No- 7, AJD Building, Umm Ramool, Rashidiya, Dubai, UAE</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="w-layout-grid grid-footer-logo---paragraph">
              <Link href="/" className="footer-logo-wrapper w-inline-block">
                <img
                  src="/logo.png"
                  alt="Jevan Auto Accessories - Logo"
                  className="footer-logo"
                  style={{width: '60px'}}
                />
              </Link>
              <p className="color-neutral-100 mg-bottom-0">
                Copyright © Jevan Auto Accessories. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;