"use client"

import Image from 'next/image'
import React from 'react'
import type { Service } from '../lib/servicesData'

type Props = {
  service: Service
}

export default function ServicePage({ service }: Props) {
  const imageSrc = service.imgSrc.startsWith('/') ? service.imgSrc : `/${service.imgSrc}`

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <p className="text-gray-600 mb-6">{service.description}</p>

      <div className="w-full h-64 relative mb-6">
        <Image src={imageSrc} alt={service.imgAlt} fill className="object-cover" />
      </div>

      <section>
        <h2 className="text-xl font-semibold mb-2">What we do</h2>
        <p className="text-gray-700">We provide professional {service.title.toLowerCase()} with quality parts and experienced technicians. Contact us to get a quote or schedule an appointment.</p>
      </section>
    </main>
  )
}
