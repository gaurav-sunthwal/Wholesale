// Product Data Modification Guide
// This file shows users how to easily modify product data

import { ProductType, addProduct, updateProduct, removeProduct } from './productData'

// ========================================
// HOW TO MODIFY PRODUCT DATA
// ========================================

// 1. ADDING NEW PRODUCTS
// To add a new product, simply add it to the array in productData.ts:

const newProduct: Omit<ProductType, 'id'> = {
  name: "Your New Product Name",
  currentPrice: "£299.00",
  originalPrice: "£399.00",
  image: "/slider/your-image.png", // Make sure to add your image to public/slider/
  discount: "25%"
}

// Add the product (this will automatically assign an ID)
// addProduct(newProduct)

// 2. UPDATING EXISTING PRODUCTS
// To update an existing product:

const productUpdates = {
  name: "Updated Product Name",
  currentPrice: "£199.00",
  originalPrice: "£299.00",
  discount: "33%"
}

// Update product with ID 1
// updateProduct(1, productUpdates)

// 3. REMOVING PRODUCTS
// To remove a product:

// removeProduct(1) // Removes product with ID 1

// ========================================
// EXAMPLE: CREATING CUSTOM PRODUCT SETS
// ========================================

// Example: Create a custom product set for a specific category
export const customElectronicsProducts: ProductType[] = [
  {
    id: 100,
    name: "Smart TV 55 inch",
    currentPrice: "£599.00",
    originalPrice: "£799.00",
    image: "/slider/electronics1.png",
    discount: "25%"
  },
  {
    id: 101,
    name: "Wireless Headphones",
    currentPrice: "£99.00",
    originalPrice: "£149.00",
    image: "/slider/electronics2.png",
    discount: "34%"
  },
  {
    id: 102,
    name: "Gaming Console",
    currentPrice: "£399.00",
    originalPrice: "£499.00",
    image: "/slider/electronics3.png",
    discount: "20%"
  }
]

// Example: Create a custom product set for furniture
export const customFurnitureProducts: ProductType[] = [
  {
    id: 200,
    name: "Modern Office Desk",
    currentPrice: "£249.00",
    originalPrice: "£349.00",
    image: "/slider/furniture1.png",
    discount: "29%"
  },
  {
    id: 201,
    name: "Ergonomic Office Chair",
    currentPrice: "£199.00",
    originalPrice: "£299.00",
    image: "/slider/furniture2.png",
    discount: "33%"
  }
]

// ========================================
// EXAMPLE: USING CUSTOM PRODUCTS IN COMPONENT
// ========================================

// You can use these custom products in your CardSlider component:

/*
// In your component file:
import CardSlider from './cardSlider'
import { customElectronicsProducts } from './productDataExamples'

// Use custom products
<CardSlider 
  config={{
    title: "Electronics Sale",
    products: customElectronicsProducts,
    autoplayDelay: 3000,
    showNavigation: true
  }} 
/>
*/

// ========================================
// TIPS FOR MODIFYING PRODUCT DATA
// ========================================

/*
1. IMAGE PATHS:
   - Add your images to the public/slider/ folder
   - Use the format: "/slider/your-image-name.png"
   - Supported formats: .png, .jpg, .jpeg, .webp

2. PRICING:
   - Always include currency symbol (£)
   - Use decimal places (.00) for consistency
   - Calculate discount percentage: ((original - current) / original) * 100

3. PRODUCT NAMES:
   - Keep names descriptive but concise
   - Include key features (size, color, material, etc.)
   - Avoid special characters that might break display

4. IDS:
   - Each product must have a unique ID
   - Use numbers starting from 1
   - Don't skip numbers (1, 2, 3, not 1, 3, 5)

5. DISCOUNT CALCULATION:
   - Round to nearest whole number
   - Format as string with % symbol: "25%"
   - Ensure discount makes sense with pricing

6. TESTING:
   - After adding products, test the slider
   - Check that images load correctly
   - Verify pricing displays properly
   - Test responsive behavior on different screen sizes
*/

// ========================================
// QUICK REFERENCE: PRODUCT STRUCTURE
// ========================================

/*
interface ProductType {
  id: number              // Unique identifier
  name: string           // Product name
  currentPrice: string   // Current selling price (with currency)
  originalPrice: string  // Original price (with currency)
  image: string          // Image path from public folder
  discount: string       // Discount percentage (with % symbol)
}
*/
