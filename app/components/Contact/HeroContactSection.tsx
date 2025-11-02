"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../../contexts/LanguageContext";
import { heroContactSectionTexts } from "../../constants/heroContactSectionTexts";

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};


export default function HeroContactSection() {
  const { language } = useLanguage();
  const texts = heroContactSectionTexts[language] || heroContactSectionTexts.en;
  // Handler to send data to WhatsApp
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const phone = (form.elements.namedItem("Phone") as HTMLInputElement)?.value;
    const location = (form.elements.namedItem("location") as HTMLInputElement)?.value;
    const yearModel = (form.elements.namedItem("year-and-model") as HTMLInputElement)?.value;
    const carOdometer = (form.elements.namedItem("car-odometer") as HTMLInputElement)?.value;
    const message = (form.elements.namedItem("Message") as HTMLTextAreaElement)?.value;

    // Format message for WhatsApp
    const whatsappMessage =
      `${texts.form.name}: ${name}\n` +
      `${texts.form.email}: ${email}\n` +
      `${texts.form.phone}: ${phone}\n` +
      `${texts.form.location}: ${location}\n` +
      `${texts.form.yearModel}: ${yearModel}\n` +
      `${texts.form.carOdometer}: ${carOdometer}\n` +
      `${texts.form.message}: ${message}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    // WhatsApp URL
    const whatsappUrl = `https://wa.me/971559268787?text=${encodedMessage}`;
    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="section hero v17">
      <div className="container-default z-index-1 w-container">
        <div className="responsive-container _500px">
          <div className="inner-container _792px center">
            <motion.div
              {...fadeInAnimation}
              className="text-center mg-bottom-32px"
            >
              <div className="inner-container _466px center">
                <div className="subtitle">{texts.subtitle}</div>
                <h1 className="color-neutral-100">{texts.title}</h1>
              </div>
              <div className="inner-container _586px center">
                <p className="color-neutral-100 mg-bottom-0">
                  {texts.description}
                </p>
              </div>
            </motion.div>
            <motion.div {...fadeInAnimation} transition={{ duration: 0.5, delay: 0.2 }} className="card form v3">
              <div className="form-block v3 w-form">
                <form
                  id="wf-form-Email-Contact-Form"
                  name="wf-form-Email-Contact-Form"
                  data-name="Email Contact Form"
                  method="get"
                  onSubmit={handleSubmit}
                >
                  <div className="inner-container _660px center">
                    <div className="w-layout-grid grid-2-columns form v3">
                      <div>
                        <input
                          className="input w-input"
                          maxLength={256}
                          name="name"
                          data-name="Name"
                          placeholder={texts.form.name}
                          type="text"
                          id="name"
                          required
                        />
                      </div>
                      <div>
                        <input
                          className="input w-input"
                          maxLength={256}
                          name="email"
                          data-name="Email"
                          placeholder={texts.form.email}
                          type="email"
                          id="email"
                          required
                        />
                      </div>
                      <div>
                        <input
                          className="input w-input"
                          maxLength={256}
                          name="Phone"
                          data-name="Phone"
                          placeholder={texts.form.phone}
                          type="tel"
                          id="phone"
                          required
                        />
                      </div>
                      <div>
                        <input
                          className="input w-input"
                          maxLength={256}
                          name="location"
                          data-name="Location"
                          placeholder={texts.form.location}
                          type="text"
                          id="location"
                          required
                        />
                      </div>
                      <div>
                        <input
                          className="input w-input"
                          maxLength={256}
                          name="year-and-model"
                          data-name="Year And Model"
                          placeholder={texts.form.yearModel}
                          type="text"
                          id="year-and-model"
                          required
                        />
                      </div>
                      <div>
                        <input
                          className="input w-input"
                          maxLength={256}
                          name="car-odometer"
                          data-name="Car Odometer"
                          placeholder={texts.form.carOdometer}
                          type="text"
                          id="car-odometer"
                          required
                        />
                      </div>
                      <div
                        id="w-node-ac574f75-397d-e492-bfdb-88220aee4c86-a60e6258"
                        className="text-area-wrapper"
                      >
                        <textarea
                          id="message"
                          name="Message"
                          maxLength={5000}
                          data-name="Message"
                          placeholder={texts.form.message}
                          className="text-area w-input"
                        ></textarea>
                      </div>
                      <div id="w-node-ac574f75-397d-e492-bfdb-88220aee4c88-a60e6258">
                        <div className="btn-primary btn-form-wrapper---default">
                          <input
                            type="submit"
                            data-wait="Please wait..."
                            id="w-node-ac574f75-397d-e492-bfdb-88220aee4c8a-a60e6258"
                            className="btn-primary btn-contact-arrow w-button"
                            value={texts.form.sendBtn}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="success-message w-form-done">
                  <div>
                    <div className="line-rounded-icon success-message-check large">
                      
                    </div>
                    <div className="heading-h3-size mg-bottom-8px">
                      {texts.form.successTitle}
                    </div>
                    <div>
                      {texts.form.successMsg.split("\n").map((line, idx) => (
                        <span key={idx}>{line}<br /></span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="error-message w-form-fail">
                  <div>{texts.form.errorMsg}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg bg-hero-image-right-half"
      >
        <Image
          src="/64d44a7d239aa1639d8553cd/64de91220bb421010e7c6384_luxury-car-header-carrepair-x-webflow-template.jpg"
          loading="eager"
          priority
          layout="fill"
          objectFit="cover"
          alt="Get In Touch Today Luxury Car Header - Carrepair X Webflow Template"
          className="_w-h-100 fit-cover contact-image-hero"
        />
        <div className="position-absolute bg-shadow-gradient-overlay hero-v17"></div>
      </motion.div>
    </section>
  );
}