"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { faqSectionTexts } from "../../constants/faqSectionTexts";

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

import type { FaqSectionTexts, Faq } from "../../constants/faqSectionTexts";

function getFaqData(language: string): Faq[] {
  const texts = faqSectionTexts[language as keyof FaqSectionTexts] || faqSectionTexts.en;
  return texts.faqs.map((item: Faq) => ({
    question: item.question,
    answer: item.answer,
  }));
}

interface AccordionItemProps {
  question: ReactNode;
  answer: ReactNode;
  isOpen: boolean;
  onClick: () => void;
  isFirst?: boolean;
}

function AccordionItem({
  question,
  answer,
  isOpen,
  onClick,
  isFirst = false,
}: AccordionItemProps) {
  return (
    <div
      className={`accordion-item-wrapper v2 ${isFirst ? "first" : ""}`}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <div className="accordion-content-wrapper v2">
        <div className="accordion-header">
          <h3 className="accordion-title color-neutral-100">{question}</h3>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="acordion-body"
              style={{ overflow: "hidden" }}
            >
              <div className="accordion-spacer"></div>
              <p className="color-neutral-100 mg-bottom-0">{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="accordion-side right-side">
        <motion.div
          className="accordion-icon-wrapper"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="accordion-btn-line v2 vertical"></div>
          <div className="accordion-btn-line v2 horizontal"></div>
        </motion.div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const { language } = useLanguage();
  const texts = faqSectionTexts[language] || faqSectionTexts.en;
  const faqData = getFaqData(language);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="overflow-hidden bg-neutral-800">
      <section className="section pd-bottom-228px position-relative">
        <div className="position-relative">
          <div className="container-default w-container">
            <div className="responsive-container _700px _500px">
              <motion.div
                {...fadeInAnimation}
                className="inner-container _800px center"
              >
                <div className="text-center mg-bottom-32px">
                  <div className="subtitle white">{texts.subtitle}</div>
                  <h2 className="heading-h1-size color-neutral-100">
                    {texts.title}
                  </h2>
                  <div className="inner-container _574px center">
                    <p className="color-neutral-100">
                      {texts.description}
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                {...fadeInAnimation}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inner-container _830px center"
              >
                <div className="w-layout-grid grid-1-column gap-row-0">
                  {faqData.map((item: Faq, index: number) => (
                    <AccordionItem
                      key={index}
                      question={item.question}
                      answer={item.answer}
                      isOpen={openIndex === index}
                      onClick={() => handleClick(index)}
                      isFirst={index === 0}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
          <div className="bg-text-wrapper faqs-text">
            <div className="bg-text-font vertical white">{texts.bgText}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
