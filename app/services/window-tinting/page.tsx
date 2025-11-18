"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { serviceDetailsTexts } from "@/app/constants/serviceDetailsTexts";

const WindowTintingPage = () => {
  const { language } = useLanguage();
  const texts = serviceDetailsTexts[language].windowTinting;

  const sectionAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true },
  };

  return (
    <>
      {/* HEADER SECTION */}
      <section className="py-24">
        <div className="container-default w-container">
          <motion.div {...sectionAnimation} className="text-center max-w-2xl mx-auto">
            <h1 className="heading-h1-size">{texts.title}</h1>
            <p className="mt-4 text-neutral-600 leading-relaxed">{texts.intro}</p>
          </motion.div>

          {/* MAIN IMAGE */}
          <motion.div {...sectionAnimation} className="mt-12">
            <Image
              src="https://res.cloudinary.com/dk9i6oh5y/image/upload/v1763356695/2149593827_d2x0or.jpg"
              alt={texts.title}
              width={1100}
              height={600}
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ABOUT SERVICE */}
      <section className="py-20 bg-white">
        <div className="container-default w-container">
          <motion.div
            {...sectionAnimation}
            className="max-w-2xl mx-auto rich-text-v2 w-richtext"
          >
            <h2>{texts.aboutTitle}</h2>
            <p>{texts.aboutText}</p>

            <h3>{texts.includedTitle}</h3>
            <ul>
              <li>✔ Up to 70% heat reduction</li>
              <li>✔ Blocks 99% harmful UV rays</li>
              <li>✔ Enhances privacy & security</li>
              <li>✔ Reduces glare during driving</li>
              <li>✔ Improves car styling instantly</li>
            </ul>

            <h3>Available Tint Types</h3>
            <ul>
              <li>• Standard Sun Control Film</li>
              <li>• Premium Heat Rejection Film</li>
              <li>• Ceramic Tint (High Performance)</li>
              <li>• Legal Tint Shades Available</li>
            </ul>

            <h3>Why Customers Prefer Us?</h3>
            <ul>
              <li>✔ Skilled technicians</li>
              <li>✔ Smooth bubble-free application</li>
              <li>✔ Long-lasting and scratch-resistant films</li>
              <li>✔ Quick service with perfect finishing</li>
              <li>✔ Warranty available</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* SECOND IMAGE */}
      <section className="py-16 bg-white">
        <div className="container-default w-container">
          <motion.div {...sectionAnimation}>
            <Image
              src="https://res.cloudinary.com/dk9i6oh5y/image/upload/v1763458174/auto-service-salon-doign-car-wrapping_rbyxry.jpg"
              alt="Window Tinting Installation Process"
              width={1100}
              height={600}
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-neutral-200">
        <div className="container-default w-container text-center max-w-2xl mx-auto">
          <motion.div {...sectionAnimation}>
            <h2 className="text-4xl font-bold mb-4">{texts.ctaTitle}</h2>
            <p className="text-neutral-600 mb-8 leading-relaxed">{texts.ctaText}</p>

            <Link
              href="/contact"
              className="btn-primary inline-block px-8 py-3 text-white font-semibold rounded-md hover:scale-105 transition-transform"
            >
              {texts.ctaBtn} →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default WindowTintingPage;
