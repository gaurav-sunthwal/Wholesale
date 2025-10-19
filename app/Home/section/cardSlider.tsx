'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import ProductCard from '@/app/components/productCard'
import { defaultProducts, bestSellerProducts, newArrivalProducts, clearanceProducts, featuredProducts } from '@/app/data/productData'

// Types for component configuration
export interface ProductType {
  id: number
  name: string
  currentPrice: string
  originalPrice: string
  image: string
  discount: string
}

export interface CardSliderConfig {
  title: string
  products: ProductType[]
  autoplayDelay?: number
  showNavigation?: boolean
  showPagination?: boolean
  slidesPerView?: {
    mobile: number
    tablet: number
    desktop: number
  }
  spaceBetween?: number
  className?: string
}

// Default configuration
const defaultConfig: CardSliderConfig = {
  title: "Pay On Delivery",
  products: defaultProducts,
  autoplayDelay: 5000,
  showNavigation: true,
  showPagination: false,
  slidesPerView: {
    mobile: 1,
    tablet: 3,
    desktop: 4
  },
  spaceBetween: 20,
  className: ""
}

// Predefined configurations for different use cases
export const cardSliderConfigs = {
  payOnDelivery: {
    ...defaultConfig,
    title: "Pay On Delivery",
    products: defaultProducts
  },
  bestSellers: {
    ...defaultConfig,
    title: "Best Sellers",
    products: bestSellerProducts,
    autoplayDelay: 3000
  },
  newArrivals: {
    ...defaultConfig,
    title: "New Arrivals",
    products: newArrivalProducts,
    slidesPerView: {
      mobile: 1,
      tablet: 2,
      desktop: 3
    }
  },
  clearance: {
    ...defaultConfig,
    title: "Clearance Sale",
    products: clearanceProducts,
    autoplayDelay: 4000,
    slidesPerView: {
      mobile: 1,
      tablet: 2,
      desktop: 3
    }
  },
  featured: {
    ...defaultConfig,
    title: "Featured Products",
    products: featuredProducts,
    showPagination: true
  }
}

interface CardSliderProps {
  config?: CardSliderConfig
  preset?: keyof typeof cardSliderConfigs
}

export default function CardSlider({ config, preset }: CardSliderProps) {
  // Use preset config if provided, otherwise use custom config or default
  const sliderConfig = preset ? cardSliderConfigs[preset] : (config || defaultConfig)
  return (
    <div className={`w-full py-6 ${sliderConfig.className}`}>
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8 h-auto items-center justify-center">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-800">{sliderConfig.title}</h2>
          
          {/* Navigation Arrows - Only show if enabled */}
          {sliderConfig.showNavigation && (
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                className="card-slider-prev rounded-full bg-white shadow-md hover:shadow-lg"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="card-slider-next rounded-full bg-white shadow-md hover:shadow-lg"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </Button>
            </div>
          )}
        </div>
        
        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={sliderConfig.showNavigation ? {
            nextEl: '.card-slider-next',
            prevEl: '.card-slider-prev',
          } : false}
          pagination={sliderConfig.showPagination ? {
            clickable: true,
          } : false}
          spaceBetween={sliderConfig.spaceBetween}
          slidesPerView={sliderConfig.slidesPerView?.mobile || 1}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: sliderConfig.autoplayDelay || 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: sliderConfig.slidesPerView?.mobile || 2,
              spaceBetween: sliderConfig.spaceBetween,
            },
            768: {
              slidesPerView: sliderConfig.slidesPerView?.tablet || 3,
              spaceBetween: sliderConfig.spaceBetween,
            },
            1024: {
              slidesPerView: sliderConfig.slidesPerView?.desktop || 4,
              spaceBetween: sliderConfig.spaceBetween,
            },
          }}
          className="w-full h-[screen]"
          autoHeight={true}
        >
          {sliderConfig.products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
