"use client";

import { useState, useEffect } from "react";
// import { services } from "../lib/servicesData";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import { ourServiceSectionTexts } from "../constants/ourServiceSectionTexts";
import { services as servicesData } from "../lib/servicesData";

function ServicesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { language } = useLanguage();
  const texts = ourServiceSectionTexts[language] || ourServiceSectionTexts.en;
  // Merge image data from servicesData with localized texts
  const services = texts.services.map((service) => {
    const imgData = servicesData.find((s) => s.slug === service.slug);
    return {
      ...service,
      imgSrc: imgData?.imgSrc || "/placeholder.svg",
      imgAlt: imgData?.imgAlt || service.title,
    };
  });

  // Animation trigger
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Auto slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 3) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = (currentSlide + 1) % services.length;
  const thirdSlide = (currentSlide + 2) % services.length;

  // WhatsApp integration
  const phoneNumber = "971559268787"; // no '+'
  const shopMessage = encodeURIComponent(texts.shopMessage);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${shopMessage}`;

  return (
    <section className="w-full py-8 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* === Section Heading === */}
        <div
          className={`mb-8 md:mb-12 lg:mb-16 transition-all duration-700 ${
            hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[#f28701] font-bold text-sm md:text-base tracking-wider mb-4">
            {texts.sectionLabel}
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-black leading-tight md:leading-tight lg:leading-tight text-balance mb-3 md:mb-4">
            {texts.heading}
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed">
            {texts.description}
          </p>
        </div>

        {/* === Carousel Container === */}
        <div className="space-y-8 md:space-y-12">
          {/* === Mobile View === */}
          <div className="md:hidden">
            <div
              className={`bg-white border border-gray-200 overflow-hidden transition-all duration-700 ${
                hasAnimated ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
                {/* imgSrc and imgAlt are not in texts.services, so fallback to placeholder */}
                <img
                  src={services[currentSlide].imgSrc}
                  alt={services[currentSlide].imgAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-black text-[#f28701]">
                  {services[currentSlide].title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {services[currentSlide].description}
                </p>
                <a
                  href={`/services/${services[currentSlide].slug}`}
                  className="inline-flex items-center gap-2 text-black font-bold text-sm hover:gap-3 transition-all"
                  style={{ textDecoration: "none" }}
                >
                  {texts.learnMore}
                </a>
              </div>
            </div>

            {/* === Mobile Dots === */}
            <div className="flex justify-center gap-2 mt-6 px-2">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentSlide ? "bg-[#f28701] w-6" : "bg-gray-300 w-2"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* === Desktop View === */}
          <div className="hidden md:block">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {[currentSlide, nextSlide, thirdSlide].map((slideIdx) => (
                <div
                  key={slideIdx}
                  className={`bg-white border border-gray-200 overflow-hidden transition-all duration-700 hover:shadow-lg transform hover:scale-[1.02] ${
                    hasAnimated ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                >
                  {/* Image */}
                  <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={services[slideIdx].imgSrc}
                      alt={services[slideIdx].imgAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-black text-[#f28701] mb-3">
                        {services[slideIdx].title}
                      </h3>
                      <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                        {services[slideIdx].description}
                      </p>
                    </div>

                    <a
                      href={`/services/${services[slideIdx].slug}`}
                      className="inline-flex items-center gap-2 text-black font-bold text-sm mt-6 hover:gap-3 transition-all group"
                      style={{ textDecoration: "none" }}
                    >
                      {texts.learnMore}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* === Desktop Dots === */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: Math.ceil(services.length / 3) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx * 3)}
                  className={`h-2 rounded-full transition-all ${
                    idx * 3 === currentSlide ? "bg-[#f28701] w-8" : "bg-gray-300 w-2"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* === CTA Buttons === */}
          <div
            className={`flex flex-col md:flex-row justify-center gap-4 md:gap-6 pt-8 md:pt-12 transition-all duration-700 delay-200 ${
              hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* ✅ WhatsApp Appointment Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
          <div className="bg-[#f28701] hover:bg-[#7b490d] text-white font-bold py-3 md:py-4 px-6 md:px-8 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 w-full md:w-auto rounded-md">
            {texts.scheduleBtn}
          </div>
            </a>

            {/* Browse Services Button */}
            <Link
              href={"/services"}
              style={{ textDecoration: "none" }}
            >
              <div className="border-2 border-black hover:bg-black hover:text-white text-black font-bold py-3 md:py-4 px-6 md:px-8 transition-all transform hover:scale-105 active:scale-95 w-full md:w-auto rounded-md">
                {texts.browseBtn}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <ServicesCarousel />
    </div>
  );
}
