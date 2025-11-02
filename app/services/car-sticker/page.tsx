 

"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ServiceDetails: React.FC = () => {
  // Common animation for sections fading in
  const sectionAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true },
  };

  // Hover animation for service cards
  const cardHover = {
    whileHover: { scale: 1.03 },
    transition: { duration: 0.3 },
  };

  return (
    <>
      {/* About Service Section */}
      <section className="section pd-140px">
        <div className="container-default w-container">
          <div className="responsive-container _700px _500px">
            <motion.div
              {...sectionAnimation}
              className="inner-container _800px center"
            >
              <div className="mg-bottom--32px">
                <div className="rich-text-v2 w-richtext">
                  <h2>About the service</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    lobortis arcu{' '}
                    <Link href="/home-pages/home-v1" className="underline">enim urna adipiscing</Link>{' '}
                    praesent velit viverra sit semper lorem eu cursus vel
                    hendrerit elementum morbi curabitur etiam nibh justo, lorem
                    aliquet donec sed sit mi dignissim at ante massa mattis.
                  </p>
                  <h3>What does the services includes?</h3>
                  <p>
                    Malesuada magna dui gravida laoreet facilisi adipiscing. Elit
                    ac at neque quisque et pharetra odio. Imperdiet in consequat
                    tincidunt faucibus arcu et. Mattis risus a leo eu condimentum
                    cursus nunc quam. Suspendisse tempor tincidunt eleifend
                    pulvinar morbi. Fermentum risus.
                  </p>
                  <ul role="list">
                    <li>
                      Neque sodales ut etiam sit amet nisl purus non tellus orci
                      ac auctor
                    </li>
                    <li>
                      Adipiscing elit ut aliquam purus sit amet viverra
                      suspendisse potent
                    </li>
                    <li>
                      Mauris commodo quis imperdiet massa tincidunt nunc pulvinar
                    </li>
                    <li>
                      Excepteur sint occaecat cupidatat non proident sunt in
                      culpa qui officia
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* More Services Section */}
      <div className="bg-neutral-200">
        <section className="section pd-bottom-270px position-relative">
          <div className="container-default w-container">
            <div className="responsive-container _500px">
              <div className="mg-bottom-40px">
                <div className="text-center---mbl">
                  <motion.div
                    {...sectionAnimation}
                    className="w-layout-grid grid-2-columns title-and-buttons"
                  >
                    <div id="w-node-_3d4c3f49-a3df-a281-6754-f753ed7c5d29-47532cc1">
                      <h2 className="heading-h1-size mg-bottom-0">
                        More services
                      </h2>
                    </div>
                    <div id="w-node-_3d4c3f49-a3df-a281-6754-f753ed7c5d2c-47532cc1">
            <Link href="/services" className="btn-secondary w-button">Browse all services</Link>
                    </div>
                  </motion.div>
                </div>
              </div>
              <motion.div {...sectionAnimation} className="w-dyn-list">
                <div role="list" className="grid-2-columns w-dyn-items">
                  <div role="listitem" className="w-dyn-item">
                    <motion.div {...cardHover}>
            <Link href="/wheels" className="card services-item w-inline-block">
              <div className="z-index-1">
                            <div className="display-2 color-neutral-100">
                              02
                            </div>
                          </div>
                          <div className="image-wrapper services-image-thumbnail">
                            <img
                              loading="eager"
                              alt="Wheels"
                              src="/64d44a7d239aa1639d8553d4/64dd80fe04993145b49ecaa6_wheels-thumbnail-image-carrepair-x-webflow-template.jpg"
                              sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 1439px) 46vw, 595px"
                              srcSet="/64d44a7d239aa1639d8553d4/64dd80fe04993145b49ecaa6_wheels-thumbnail-image-carrepair-x-webflow-template-p-500.jpg 500w, /64d44a7d239aa1639d8553d4/64dd80fe04993145b49ecaa6_wheels-thumbnail-image-carrepair-x-webflow-template-p-800.jpg 800w, /64d44a7d239aa1639d8553d4/64dd80fe04993145b49ecaa6_wheels-thumbnail-image-carrepair-x-webflow-template-p-1080.jpg 1080w, /64d44a7d239aa1639d8553d4/64dd80fe04993145b49ecaa6_wheels-thumbnail-image-carrepair-x-webflow-template-p-1600.jpg 1600w, /64d44a7d239aa1639d8553d4/64dd80fe04993145b49ecaa6_wheels-thumbnail-image-carrepair-x-webflow-template.jpg 2384w"
                              className="picture-link-card _w-h-100 fit-cover"
                            />
                          </div>
                          <div className="z-index-1">
                            <div className="flex-vertical start">
                              <h3 className="card-white-title display-3">
                                Wheels
                              </h3>
                              <p className="mg-bottom-32px">
                                Aliquet pulvinar vestibulum pulvinar pharetra t
                                auctor nisl est tortor. Urna semper scelerisque
                                eu vulputate et faucibus neque viverra dui nisi
                                ultricies pellentesque nulla eget tincidunt.
                              </p>
                              <div className="btn-secondary white white---btn-article">
                                <div className="link-text">learn more</div>
                                <div className="line-rounded-icon arrow-right">
                                  
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="article-shadow v4"></div>
                     
                      </Link>
                    </motion.div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <motion.div {...cardHover}>
            <Link href="/alignment" className="card services-item w-inline-block">
              <div className="z-index-1">
                            <div className="display-2 color-neutral-100">
                              03
                            </div>
                          </div>
                          <div className="image-wrapper services-image-thumbnail">
                            <img
                              loading="eager"
                              alt="Alignment"
                              src="/64d44a7d239aa1639d8553d4/64dd80eadd1682c031b30c1e_alignment-thumbnail-image-carrepair-x-webflow-template.jpg"
                              sizes="(max-vidth: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 1439px) 46vw, 595px"
                              srcSet="/64d44a7d239aa1639d8553d4/64dd80eadd1682c031b30c1e_alignment-thumbnail-image-carrepair-x-webflow-template-p-500.jpg 500w, /64d44a7d239aa1639d8553d4/64dd80eadd1682c031b30c1e_alignment-thumbnail-image-carrepair-x-webflow-template-p-800.jpg 800w, /64d44a7d239aa1639d8553d4/64dd80eadd1682c031b30c1e_alignment-thumbnail-image-carrepair-x-webflow-template-p-1080.jpg 1080w, /64d44a7d239aa1639d8553d4/64dd80eadd1682c031b30c1e_alignment-thumbnail-image-carrepair-x-webflow-template-p-1600.jpg 1600w, /64d44a7d239aa1639d8553d4/64dd80eadd1682c031b30c1e_alignment-thumbnail-image-carrepair-x-webflow-template.jpg 2384w"
                              className="picture-link-card _w-h-100 fit-cover"
                            />
                          </div>
                          <div className="z-index-1">
                            <div className="flex-vertical start">
                              <h3 className="card-white-title display-3">
                                Alignment
                              </h3>
                              <p className="mg-bottom-32px">
                                Sed cras ultrices aliquam suspendisse interdum
                                vulputate lobortis tellus mattis massa in tempor
                                urna cursus enim facilisi sed mauris odio
                                adipiscing diam purus turpis viverra sit dictum.
                              </p>
                              <div className="btn-secondary white white---btn-article">
                                <div className="link-text">learn more</div>
                                <div className="line-rounded-icon arrow-right">
                                  
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="article-shadow v4"></div>
                       
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="position-absolute top">
            <div className="decoration-section-shape right"></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceDetails;