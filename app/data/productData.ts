// Product data configuration file
// Users can easily modify this file to change product information

import { ProductType } from '../Home/section/cardSlider'

// Re-export ProductType for use in other files
export type { ProductType }

// Default product data - Users can modify this array
export const defaultProducts: ProductType[] = [
  {
    id: 1,
    name: "Crushed Diamond Angel Wings",
    currentPrice: "£299.00",
    originalPrice: "",
    image: "/slider/slider1.png",
    discount: "0%"
  },
  {
    id: 2,
    name: "Crushed Glass TV Unit With Fireplace",
    currentPrice: "£1299.00",
    originalPrice: "",
    image: "/slider/slider1.png",
    discount: "0%"
  },
  {
    id: 3,
    name: "Luxury Crushed Diamond Fireplace With LED Heat Three Setting Supply",
    currentPrice: "£649.00",
    originalPrice: "£1189.00",
    image: "/slider/slider1.png",
    discount: "45%"
  },
  {
    id: 4,
    name: "Premium Diamond Wall Art",
    currentPrice: "£199.00",
    originalPrice: "£350.00",
    image: "/slider/slider1.png",
    discount: "43%"
  },
  {
    id: 5,
    name: "Crystal Glass Coffee Table",
    currentPrice: "£399.00",
    originalPrice: "£599.00",
    image: "/slider/slider1.png",
    discount: "33%"
  },
  {
    id: 6,
    name: "Diamond Accent Mirror",
    currentPrice: "£149.00",
    originalPrice: "£249.00",
    image: "/slider/slider1.png",
    discount: "40%"
  },
  {
    id: 7,
    name: "Luxury Diamond Chandelier",
    currentPrice: "£799.00",
    originalPrice: "£1299.00",
    image: "/slider/slider1.png",
    discount: "38%"
  },
  {
    id: 8,
    name: "Crushed Glass Side Table",
    currentPrice: "£249.00",
    originalPrice: "£399.00",
    image: "/slider/slider1.png",
    discount: "38%"
  },
  {
    id: 9,
    name: "Diamond Wall Sconce",
    currentPrice: "£99.00",
    originalPrice: "£179.00",
    image: "/slider/slider1.png",
    discount: "45%"
  }
]

// Additional product datasets for different categories
export const bestSellerProducts: ProductType[] = [
  {
    id: 7,
    name: "Premium Leather Recliner Chair",
    currentPrice: "£599.00",
    originalPrice: "£799.00",
    image: "/slider/produt1.png",
    discount: "25%"
  },
  {
    id: 8,
    name: "Modern Sectional Sofa Set",
    currentPrice: "£1,299.00",
    originalPrice: "£1,599.00",
    image: "/slider/produt1.png",
    discount: "19%"
  },
  {
    id: 9,
    name: "Industrial Style Dining Table",
    currentPrice: "£399.00",
    originalPrice: "£549.00",
    image: "/slider/produt1.png",
    discount: "27%"
  },
  {
    id: 9,
    name: "Industrial Style Dining Table",
    currentPrice: "£399.00",
    originalPrice: "£549.00",
    image: "/slider/produt1.png",
    discount: "27%"
  },
  {
    id: 9,
    name: "Industrial Style Dining Table",
    currentPrice: "£399.00",
    originalPrice: "£549.00",
    image: "/slider/produt1.png",
    discount: "27%"
  }
]

export const newArrivalProducts: ProductType[] = [
  {
    id: 10,
    name: "Smart Home Office Desk",
    currentPrice: "£349.00",
    originalPrice: "£449.00",
    image: "/slider/produt1.png",
    discount: "22%"
  },
  {
    id: 11,
    name: "Minimalist Bookshelf Unit",
    currentPrice: "£199.00",
    originalPrice: "£299.00",
    image: "/slider/produt1.png",
    discount: "33%"
  },
  {
    id: 12,
    name: "Ergonomic Office Chair",
    currentPrice: "£249.00",
    originalPrice: "£349.00",
    image: "/slider/produt1.png",
    discount: "29%"
  }
]

export const clearanceProducts: ProductType[] = [
  {
    id: 13,
    name: "Vintage Wooden Cabinet",
    currentPrice: "£149.00",
    originalPrice: "£399.00",
    image: "/slider/produt1.png",
    discount: "63%"
  },
  {
    id: 14,
    name: "Classic Reading Chair",
    currentPrice: "£99.00",
    originalPrice: "£249.00",
    image: "/slider/produt1.png",
    discount: "60%"
  },
  {
    id: 15,
    name: "Traditional Coffee Table",
    currentPrice: "£79.00",
    originalPrice: "£199.00",
    image: "/slider/produt1.png",
    discount: "60%"
  }
]

// Featured products (mix of different categories)
export const featuredProducts: ProductType[] = [
  ...defaultProducts.slice(0, 2),
  ...bestSellerProducts.slice(0, 2),
  ...newArrivalProducts.slice(0, 2)
]

// Helper function to get products by category
export const getProductsByCategory = (category: string): ProductType[] => {
  switch (category.toLowerCase()) {
    case 'bestsellers':
      return bestSellerProducts
    case 'newarrivals':
      return newArrivalProducts
    case 'clearance':
      return clearanceProducts
    case 'featured':
      return featuredProducts
    default:
      return defaultProducts
  }
}

// Helper function to add new product
export const addProduct = (product: Omit<ProductType, 'id'>): ProductType => {
  const newId = Math.max(...defaultProducts.map(p => p.id)) + 1
  const newProduct: ProductType = { ...product, id: newId }
  defaultProducts.push(newProduct)
  return newProduct
}

// Helper function to update existing product
export const updateProduct = (id: number, updates: Partial<ProductType>): ProductType | null => {
  const index = defaultProducts.findIndex(p => p.id === id)
  if (index !== -1) {
    defaultProducts[index] = { ...defaultProducts[index], ...updates }
    return defaultProducts[index]
  }
  return null
}

// Helper function to remove product
export const removeProduct = (id: number): boolean => {
  const index = defaultProducts.findIndex(p => p.id === id)
  if (index !== -1) {
    defaultProducts.splice(index, 1)
    return true
  }
  return false
}
