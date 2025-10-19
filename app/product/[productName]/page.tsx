'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Minus, Plus } from 'lucide-react'

interface ProductDetailPageProps {
  params: {
    productName: string
  }
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const [selectedPackage, setSelectedPackage] = useState('3 Bedrooms')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isAddingToCart, setIsAddingToCart] = useState(false)

  // Handle add to cart functionality
  const handleAddToCart = async () => {
    setIsAddingToCart(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Here you would typically call your cart API
    console.log('Added to cart:', {
      product: productName,
      package: selectedPackage,
      quantity,
      price: product.price
    })
    
    setIsAddingToCart(false)
    
    // You could add a toast notification here
    alert(`Added ${quantity} x ${productName} (${selectedPackage}) to cart!`)
  }

  // Format product name from URL slug
  const formatProductName = (slug: string) => {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  // Get category from URL or default
  const getCategoryFromSlug = (slug: string) => {
    // You can customize this logic based on your routing structure
    const categoryMap: { [key: string]: string } = {
      'bedroom-packages': 'Bedroom',
      'dining-furniture': 'Dining Furnitures', 
      'glam-accessories': 'Glam Accessories',
      'sofas': 'Sofas',
      'wall-panels': 'Wall Panels',
      'wardrobes': 'Wardrobes',
      'clearance': 'Clearance',
      'landlord-furniture': 'Landlord Furniture'
    }
    
    // Try to match category from slug
    for (const [key, value] of Object.entries(categoryMap)) {
      if (slug.includes(key)) {
        return value
      }
    }
    
    return 'Landlord Furniture' // Default category
  }

  const productName = formatProductName(params.productName)
  const categoryName = getCategoryFromSlug(params.productName)

  // Sample product data - in real app, this would come from API/database
  const product = {
    id: 1,
    name: productName,
    price: '£1,999.00',
    images: [
      '/slider/slider1.png',
      '/slider/produt1.png',
      '/slider/room.png',
      '/slider/slider1.png',
      '/slider/produt1.png',
      '/slider/room.png'
    ],
    packages: ['3 Bedrooms', '4 Bedrooms', '5 Bedrooms', '6 Bedrooms'],
    description: `We specialize in landlord furniture packs, catering to landlords, property managers, and investors who need reliable, high-quality furniture for their rental properties. Our packages are designed to provide everything needed to furnish a bedroom professionally and attractively.

All our furniture packs include free UK delivery, assembly, and installation. We understand the importance of durability and style in rental properties, which is why we use high-quality composite materials with matt effect carcass and high gloss fronts, along with metal drawer runners for long-lasting performance.

Each package includes:
• Double Divan Base
• Double Orthopaedic Mattresses  
• Double Plain Headboard
• Reflect Two Door Wardrobe
• Reflect Five Drawer Chest
• Reflect Two Drawer Bedside

Additional options available:
• Matching desk for study areas
• Combi/mirrored wardrobe options
• Various divan bed colors and sizes
• Storage upgrades for enhanced functionality

Mix and match different packs to create the perfect setup for your property. Contact us for custom configurations and bulk pricing.`
  }

  // Handle social media sharing
  const handleSocialShare = (platform: string) => {
    const url = window.location.href
    
    switch (platform) {
      case 'heart':
        // Add to wishlist functionality
        alert(`Added ${productName} to wishlist!`)
        break
      case 'instagram':
        // Instagram sharing
        window.open(`https://www.instagram.com/`, '_blank')
        break
      case 'facebook':
        // Facebook sharing
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
        break
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      {/* Top Bar */}
     

      {/* Navigation Bar */}
     

      {/* Breadcrumb */}
      <div className="bg-gray-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm">
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link 
              href={`/${categoryName.toLowerCase().replace(/\s+/g, '-')}`} 
              className="hover:text-gray-300 transition-colors"
            >
              {categoryName}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">{productName}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Main Product Image */}
          <div className="lg:col-span-7">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Middle Column - Product Details */}
          <div className="lg:col-span-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h1 className="text-2xl font-bold text-gray-800 mb-6">{product.name}</h1>
              
              {/* Package Options */}
              <div className="mb-6">
                <div className="grid grid-cols-2 gap-2">
                  {product.packages.map((pkg) => (
                    <button
                      key={pkg}
                      onClick={() => setSelectedPackage(pkg)}
                      className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                        selectedPackage === pkg
                          ? 'bg-gray-800 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {pkg}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-800">{product.price}</span>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-700">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-gray-100"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 hover:bg-gray-100"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button 
                onClick={handleAddToCart}
                disabled={isAddingToCart}
                className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 mb-4 disabled:opacity-50"
              >
                {isAddingToCart ? 'Adding...' : 'Add to Cart'}
              </Button>

              {/* Social Media Icons */}
              <div className="flex gap-3">
                <button 
                  onClick={() => handleSocialShare('heart')}
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
                  title="Add to Wishlist"
                >
                  ❤️
                </button>
                <button 
                  onClick={() => handleSocialShare('instagram')}
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
                  title="Share on Instagram"
                >
                  📷
                </button>
                <button 
                  onClick={() => handleSocialShare('facebook')}
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
                  title="Share on Facebook"
                >
                  📘
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Thumbnail Gallery */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-full h-16 rounded-md overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-gray-800' : 'border-gray-200'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Description</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              We specialize in landlord furniture packs, catering to landlords, property managers, and investors who need reliable, high-quality furniture for their rental properties. Our packages are designed to provide everything needed to furnish a bedroom professionally and attractively.
            </p>
            
            <p className="text-gray-700 mb-4">
              All our furniture packs include free UK delivery, assembly, and installation. We understand the importance of durability and style in rental properties, which is why we use high-quality composite materials with matt effect carcass and high gloss fronts, along with metal drawer runners for long-lasting performance.
            </p>

            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Package includes:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Double Divan Base</li>
                <li>Double Orthopaedic Mattresses</li>
                <li>Double Plain Headboard</li>
                <li>Reflect Two Door Wardrobe</li>
                <li>Reflect Five Drawer Chest</li>
                <li>Reflect Two Drawer Bedside</li>
              </ul>
            </div>

            <p className="text-gray-700 mb-4">
              Additional options available: matching desk for study areas, combi/mirrored wardrobe options, various divan bed colors and sizes, and storage upgrades for enhanced functionality.
            </p>

            <p className="text-gray-700">
              Mix and match different packs to create the perfect setup for your property. Contact us for custom configurations and bulk pricing.
            </p>
          </div>
        </div>
      </div>

     
      
    </div>
  )
}
