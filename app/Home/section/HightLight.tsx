import React from 'react'
import Image from 'next/image'
import product1 from '@/public/slider/produt1.png'
import { Button } from '@/components/ui/button'
export default function HightLight() {
  const cardData = [
    {
      title: "Designer Bed's",
      subtitle: "Available in various sizes and colours",
      image: product1
    },
    {
      title: "Dinning Sets", 
      subtitle: "Marble dinning sets and chairs",
      image: product1
    },
    {
      title: "Designer Sofas",
      subtitle: "Available in various sizes and colours",
      image: product1
    }
  ]

  return (
    <section
      className="py-20 px-4"
      style={{
        background: "linear-gradient(180deg, #0B0C10 50%, #254655 100%)"
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cardData.map((card) => (
            <div
              key={card.title}
              className="relative w-full rounded-[35px] overflow-hidden shadow-lg"
            >
              <div className="relative h-80 w-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl xl:text-3xl font-bold mb-2 text-white">
                    {card.title}
                  </h3>
                  <p className="text-sm xl:text-base mb-4 text-white opacity-90">
                    {card.subtitle}
                  </p>
                  <Button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md transition-colors text-sm font-medium">
                    Shop now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}