'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, type Variants } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { FaWhatsapp } from 'react-icons/fa';

const navItemVariants: Variants = {
  hover: { 
    scale: 1.05, 
    transition: { 
      type: "spring" as const, 
      stiffness: 300 
    } 
  },
  tap: { scale: 0.95 },
};

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const pathname = usePathname();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Keep a ref of the open state so the pathname effect doesn't depend on it
  const isOpenRef = useRef(isMobileMenuOpen);
  useEffect(() => {
    isOpenRef.current = isMobileMenuOpen;
  }, [isMobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    if (!isOpenRef.current) return;
    const t = setTimeout(() => setIsMobileMenuOpen(false), 0);
    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMobileMenu();
    };
    if (isMobileMenuOpen) document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isMobileMenuOpen]);

  // ✅ WhatsApp prefilled message setup
  const phoneNumber = '971559268787'; // without '+' for WhatsApp API
  const shopMessage = encodeURIComponent(
    `Hello Jevan Auto Accessories 👋,\n\nI'm interested in your car modification and customization services.\n\nShop Details:\nJevan Auto Accessories\nBest Car Modification in Dubai\nWe specialize in all types of interior and exterior work, offering comprehensive transformations to personalize your vehicle.\n\nPlease share more details or offers.`
  );
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${shopMessage}`;

  return (
      <div
        className="fixed top-2 left-2 md:left-10 md:right-10 right-2 z-50 bg-black bg-opacity-100 rounded-full shadow-lg mx-2"
        style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
        dir="ltr"
      >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        data-animation="default"
        data-collapse="medium"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="header-wrapper w-nav"
      >
        <div className="container-default w-container px-4 py-2 max-w-7xl mx-auto">
          <div className="header-content-wrapper flex items-center justify-between">
            <Link href="/" passHref className="header-logo-link w-nav-brand">
              <Image
                src="/main-logo.png"
                alt="Jevan Auto Accessories Logo"
                className="header-logo w-[50px]"
                style={{ width: '60px' }}
                width={150}
                height={40}
                priority
              />
            </Link>

            <div className="header-right-side">
              <nav
                id="primary-navigation"
                role="navigation"
                className={`header-nav-menu-wrapper w-nav-menu ${
                  isMobileMenuOpen ? 'w--open' : ''
                }`}
                style={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : {}}
                aria-hidden={!isMobileMenuOpen}
                data-nav-menu-open={isMobileMenuOpen ? 'true' : undefined}
              >
                <ul role="list" className="header-nav-menu-list">
                  <motion.li className="header-nav-list-item" whileHover="hover" whileTap="tap">
                    <Link
                      href="/"
                      className={`header-nav-link white-transparent w-nav-link ${
                        pathname === '/' ? 'w--current' : ''
                      }`}
                      onClick={closeMobileMenu}
                    >
                      {t('nav.home')}
                    </Link>
                  </motion.li>

                  <motion.li className="header-nav-list-item" whileHover="hover" whileTap="tap">
                    <Link
                      href="/about"
                      className={`header-nav-link white-transparent w-nav-link ${
                        pathname === '/about' ? 'w--current' : ''
                      }`}
                      onClick={closeMobileMenu}
                    >
                      {t('nav.about')}
                    </Link>
                  </motion.li>

                  <motion.li className="header-nav-list-item" whileHover="hover" whileTap="tap">
                    <Link
                      href="/services"
                      className={`header-nav-link white-transparent w-nav-link ${
                        pathname === '/services' ? 'w--current' : ''
                      }`}
                      onClick={closeMobileMenu}
                    >
                      {t('nav.services')}
                    </Link>
                  </motion.li>

                  <motion.li className="header-nav-list-item" whileHover="hover" whileTap="tap">
                    <Link
                      href="/contact"
                      className={`header-nav-link white-transparent w-nav-link ${
                        pathname === '/contact' ? 'w--current' : ''
                      }`}
                      onClick={closeMobileMenu}
                    >
                      {t('nav.contact')}
                    </Link>
                  </motion.li>

                  <div className="mx-6">
                    <LanguageSwitcher />
                  </div>

                  {/* === Mobile Get Started button === */}
                  <li className="header-nav-list-item show-in-tablet header-button">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary small width-100 w-button rounded-full flex items-center justify-center gap-2"
                      onClick={closeMobileMenu}
                    >
                      <span className="flex items-center gap-2 justify-center">
                        <FaWhatsapp size={20} color="#25D366" className="shrink-0" />
                        {t('nav.getStarted')}
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>

              {/* === Desktop Get Started button === */}
              <motion.div whileHover="hover" whileTap="tap">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary rounded-full small header-white-btn-hidde-on-mb w-button flex items-center justify-center gap-2"
                  style={{borderRadius: '25px'}}
                >
                  <span className="flex items-center gap-2 justify-center">
                    <FaWhatsapp size={20} color="#25D366" className="shrink-0" />
                   
                  </span>
                </a>
              </motion.div>

              {/* === Mobile LanguageSwitcher + Hamburger Menu === */}
              <div className="flex items-center gap-6 md:hidden">
                <LanguageSwitcher />
                <button
                  type="button"
                  className={`hamburger-menu-wrapper w-nav-button ${
                    isMobileMenuOpen ? 'w--open' : ''
                  }`}
                  onClick={toggleMobileMenu}
                  aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="primary-navigation"
                >
                  <div className="hamburger-menu-bars-wrapper">
                    <div
                      className={`hamburger-menu-bar top white-transparent ${
                        isMobileMenuOpen ? 'w--open' : ''
                      }`}
                    ></div>
                    <div
                      className={`hamburger-menu-bar bottom white-transparent ${
                        isMobileMenuOpen ? 'w--open' : ''
                      }`}
                    ></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
