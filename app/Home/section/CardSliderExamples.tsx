'use client'

import React from 'react'
import CardSlider, { CardSliderConfig, cardSliderConfigs } from './cardSlider'
import { customElectronicsProducts, customFurnitureProducts } from '@/app/data/productDataExamples'

// Example usage of the flexible CardSlider component

export default function CardSliderExamples() {
  // Example 1: Using a preset configuration
  const PayOnDeliverySlider = () => (
    <CardSlider preset="payOnDelivery" />
  )

  // Example 2: Using a different preset
  const BestSellersSlider = () => (
    <CardSlider preset="bestSellers" />
  )

  // Example 3: Custom configuration
  const customConfig: CardSliderConfig = {
    title: "Custom Product Slider",
    products: [
      {
        id: 1,
        name: "Custom Product 1",
        currentPrice: "£199.00",
        originalPrice: "£299.00",
        image: "/slider/slider1.png",
        discount: "33%"
      },
      {
        id: 2,
        name: "Custom Product 2",
        currentPrice: "£399.00",
        originalPrice: "£599.00",
        image: "/slider/slider1.png",
        discount: "33%"
      }
    ],
    autoplayDelay: 3000,
    showNavigation: true,
    showPagination: true,
    slidesPerView: {
      mobile: 1,
      tablet: 2,
      desktop: 3
    },
    spaceBetween: 30,
    className: "bg-gray-50"
  }

  const CustomSlider = () => (
    <CardSlider config={customConfig} />
  )

  // Example 4: Minimal configuration (uses default values)
  const minimalConfig: CardSliderConfig = {
    title: "Minimal Slider",
    products: cardSliderConfigs.payOnDelivery.products.slice(0, 3) // Use first 3 products
  }

  const MinimalSlider = () => (
    <CardSlider config={minimalConfig} />
  )

  // Example 5: Using custom electronics products
  const ElectronicsSlider = () => (
    <CardSlider 
      config={{
        title: "Electronics Sale",
        products: customElectronicsProducts,
        autoplayDelay: 3000,
        showNavigation: true,
        slidesPerView: {
          mobile: 1,
          tablet: 2,
          desktop: 3
        }
      }} 
    />
  )

  // Example 6: Using custom furniture products
  const FurnitureSlider = () => (
    <CardSlider 
      config={{
        title: "Furniture Collection",
        products: customFurnitureProducts,
        autoplayDelay: 4000,
        showNavigation: true,
        showPagination: true,
        slidesPerView: {
          mobile: 1,
          tablet: 2,
          desktop: 2
        }
      }} 
    />
  )

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold mb-4">CardSlider Usage Examples</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">1. Pay On Delivery (Preset)</h3>
            <PayOnDeliverySlider />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">2. Best Sellers (Preset)</h3>
            <BestSellersSlider />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">3. Custom Configuration</h3>
            <CustomSlider />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">4. Minimal Configuration</h3>
            <MinimalSlider />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">5. Custom Electronics Products</h3>
            <ElectronicsSlider />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">6. Custom Furniture Products</h3>
            <FurnitureSlider />
          </div>
        </div>
      </div>
    </div>
  )
}

// Available presets:
// - payOnDelivery: Default configuration with "Pay On Delivery" title
// - bestSellers: Faster autoplay (3s) with "Best Sellers" title
// - newArrivals: Fewer slides per view with "New Arrivals" title
// - clearance: Clearance sale configuration
// - featured: Shows pagination dots with "Featured Products" title
