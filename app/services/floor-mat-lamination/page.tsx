"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { serviceDetailsTexts } from "@/app/constants/serviceDetailsTexts";

const FloorMatLaminationPage = () => {
  const { language } = useLanguage();
  const texts = serviceDetailsTexts[language].floorMat;

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
          <motion.div
            {...sectionAnimation}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="heading-h1-size">{texts.title}</h1>
            <p className="mt-4 text-neutral-600 leading-relaxed">{texts.intro}</p>
          </motion.div>

          {/* MAIN IMAGE */}
          <motion.div {...sectionAnimation} className="mt-12">
            <Image
              src="https://res.cloudinary.com/dk9i6oh5y/image/upload/v1763356992/mat-laminiation_sud93u.jpg"
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
              <li>✔ Custom-fit floor mat lamination</li>
              <li>✔ Waterproof and dust-resistant coating</li>
              <li>✔ Anti-slip finishing</li>
              <li>✔ Odor-free material</li>
              <li>✔ Easy cleaning and maintenance</li>
            </ul>

            <h3>Benefits of Lamination</h3>
            <ul>
              <li>✓ Keeps your car interior clean longer</li>
              <li>✓ Protects original flooring from damage</li>
              <li>✓ Tough & long-lasting material</li>
              <li>✓ Ideal for sandy or wet areas</li>
              <li>✓ Increases resale value of the vehicle</li>
            </ul>

            <h3>Why Choose Us?</h3>
            <ul>
              <li>✔ Custom size and fitting</li>
              <li>✔ High-quality durable material</li>
              <li>✔ Quick installation process</li>
              <li>✔ Affordable pricing</li>
              <li>✔ Experienced technicians</li>
            </ul>
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

export default FloorMatLaminationPage;
