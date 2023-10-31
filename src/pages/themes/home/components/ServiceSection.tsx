import React from 'react'
import ServiceCard from './ServiceCard'

function ServiceSection() {
  return (
    <div className="container mx-auto">
    <div>
      <p className="text-sm text-center font-medium text-green-600">
        WOODEN ACCESSORIES
      </p>
      <p className="text-xl uppercase text-neutral-800 font-medium text-center my-3">
        HAND MADE SERVICE
      </p>
      <p className="text-sm text-neutral-800 text-center font-light">
        Visit our shop to see amazing creations from our designers.
      </p>
    </div>
    <div className="mt-24 grid grid-cols-2 xl:grid-cols-4 gap-8">
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
    </div>
  </div>
  )
}

export default ServiceSection