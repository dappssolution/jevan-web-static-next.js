"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { services } from "../lib/servicesData";
import { useLanguage } from "@/app/contexts/LanguageContext"; 
import { footerTexts } from "@/app/constants/footerTexts"; // <-- create this file

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const { language } = useLanguage();
  const t = footerTexts[language];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = footerRef.current?.querySelectorAll(
      ".menu-wrapper, .footer-bottom"
    );
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
              {/* Quick Links */}
              <div className="menu-wrapper">
                <div className="inner-container">
                  <div className="unline-block">
                    <div className="heading-h2-size footer-title">{t.quickLinks}</div>
                    <div className="underline-title"></div>
                  </div>
                  <div className="nav-content">
                    <ul role="list" className="nav-menu-list-wrapper">
                      <li className="nav-menu-list-item">
                        <Link href="/" className="nav-link white">{t.home}</Link>
                      </li>
                      <li className="nav-menu-list-item">
                        <Link href="/about" className="nav-link white">{t.aboutUs}</Link>
                      </li>
                      <li className="nav-menu-list-item">
                        <Link href="/services" className="nav-link white">{t.services}</Link>
                      </li>
                      <li className="nav-menu-list-item mg-bottom-0">
                        <Link href="/contact" className="nav-link white">{t.contact}</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Our Services */}
              <div className="menu-wrapper">
                <div className="inner-container">
                  <div className="unline-block">
                    <div className="heading-h2-size footer-title">{t.ourServices}</div>
                    <div className="underline-title"></div>
                  </div>
                  <div>
                    <ul role="list" className="nav-menu-list-wrapper">
                      {services.slice(0, 5).map((s) => (
                        <li key={s.slug} className="nav-menu-list-item">
                          <Link href={`/services/${s.slug}`} className="nav-link white">
                            {s.title}
                          </Link>
                        </li>
                      ))}
                      {services.length > 5 && (
                        <li className="nav-menu-list-item mg-bottom-0">
                          <Link href="/services" className="nav-link white" style={{ fontWeight: "600" }}>
                            {t.viewAllServices} →
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="menu-wrapper">
                <div className="inner-container _272px">
                  <div className="unline-block">
                    <div className="heading-h2-size footer-title">{t.getInTouch}</div>
                    <div className="underline-title"></div>
                  </div>
                  <div>
                    <ul role="list" className="nav-menu-list-wrapper">
                      <li className="nav-menu-list-item">
                        <div className="footer-label">{t.callUs}</div>
                        <a href="tel:+971559268787" className="nav-link white">+971 55 926 8787</a>
                      </li>
                      <li className="nav-menu-list-item">
                        <a href="tel:+971524642299" className="nav-link white">+971 52 464 2299</a>
                      </li>
                      <li className="nav-menu-list-item">
                        <div className="footer-label">{t.email}</div>
                        <a 
                          href="mailto:jevanautoaccessories@gmail.com" 
                          className="nav-link white"
                          style={{ wordBreak: "break-word" }}
                        >
                          jevanautoaccessories@gmail.com
                        </a>
                      </li>
                      <li className="nav-menu-list-item mg-bottom-0">
                        <div className="footer-label">{t.location}</div>
                        <span className="nav-link white" style={{ lineHeight: "1.6" }}>
                          {t.address1}<br />
                          {t.address2}<br />
                          {t.address3}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="w-layout-grid grid-footer-logo---paragraph">
              <Link href="/" className="footer-logo-wrapper w-inline-block">
                <img
                  src="/main-logo.png"
                  alt="Jevan Auto Accessories"
                  className="footer-logo"
                  style={{ width: "60px", height: "auto" }}
                />
              </Link>
              <p className="color-neutral-100 mg-bottom-0">
                © {new Date().getFullYear()} Jevan Auto Accessories. {t.rightsReserved}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
