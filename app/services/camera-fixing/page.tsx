"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { serviceDetailsTexts } from "@/app/constants/serviceDetailsTexts";

const CameraFixingPage = () => {
  const { language } = useLanguage();
  const texts = serviceDetailsTexts[language].cameraFixing;

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
              src="https://res.cloudinary.com/dk9i6oh5y/image/upload/v1763356629/2149149644_yo55cy.jpg"
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
              <li>✔ Rear-view camera installation</li>
              <li>✔ Front camera for parking assistance</li>
              <li>✔ Mirror-mounted cameras for lane safety</li>
              <li>✔ 360° bird-view camera systems</li>
              <li>✔ Display screen installation (dashboard / mirror)</li>
            </ul>

            <h3>What We Fix</h3>
            <ul>
              <li>• Camera not showing on display</li>
              <li>• Blurry or low-quality image</li>
              <li>• Faulty wiring / loose connection</li>
              <li>• Camera delay while reversing</li>
              <li>• Night vision camera upgrade</li>
            </ul>

            <h3>Why Choose Us?</h3>
            <ul>
              <li>✔ Professional installation with neat wiring</li>
              <li>✔ Weatherproof & long-lasting camera setup</li>
              <li>✔ Works with all car models</li>
              <li>✔ Warranty available</li>
              <li>✔ Affordable pricing & quick service</li>
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

export default CameraFixingPage;
