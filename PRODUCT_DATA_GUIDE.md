# Product Data Modification Guide

This guide explains how to easily modify product data for the CardSlider component.

## 📁 File Structure

```
app/
├── data/
│   ├── productData.ts          # Main product data file
│   └── productDataExamples.ts  # Examples and helper functions
├── Home/section/
│   ├── cardSlider.tsx          # Main slider component
│   └── CardSliderExamples.tsx  # Usage examples
```

## 🔧 How to Modify Product Data

### 1. **Edit Main Product Data** (`app/data/productData.ts`)

Open `app/data/productData.ts` and modify the product arrays:

```typescript
export const defaultProducts: ProductType[] = [
  {
    id: 1,
    name: "Your Product Name",           // ← Change this
    currentPrice: "£299.00",            // ← Change this
    originalPrice: "£399.00",           // ← Change this
    image: "/slider/your-image.png",    // ← Change this
    discount: "25%"                     // ← Change this
  },
  // Add more products here...
]
```

### 2. **Add New Product Categories**

Create new product arrays for different categories:

```typescript
export const myCustomProducts: ProductType[] = [
  {
    id: 100,
    name: "Custom Product 1",
    currentPrice: "£199.00",
    originalPrice: "£299.00",
    image: "/slider/custom1.png",
    discount: "33%"
  }
]
```

### 3. **Add Product Images**

1. Add your images to the `public/slider/` folder
2. Reference them in the product data: `"/slider/your-image.png"`

## 🎯 Quick Examples

### Using Presets (Easiest)
```tsx
<CardSlider preset="bestSellers" />
<CardSlider preset="newArrivals" />
<CardSlider preset="clearance" />
```

### Using Custom Products
```tsx
<CardSlider 
  config={{
    title: "My Custom Title",
    products: myCustomProducts,
    autoplayDelay: 3000
  }} 
/>
```

## 📋 Product Data Structure

Each product must have this structure:

```typescript
{
  id: number,              // Unique number (1, 2, 3...)
  name: string,           // Product name
  currentPrice: string,   // Current price with currency "£299.00"
  originalPrice: string,  // Original price with currency "£399.00"
  image: string,          // Image path "/slider/image.png"
  discount: string        // Discount percentage "25%"
}
```

## ⚠️ Important Notes

1. **IDs must be unique** - Don't use the same ID twice
2. **Images must exist** - Make sure image files are in `public/slider/`
3. **Price format** - Always include currency symbol (£) and decimals (.00)
4. **Discount calculation** - Round to whole numbers and add % symbol

## 🚀 Available Presets

- `payOnDelivery` - Default products
- `bestSellers` - Best selling products
- `newArrivals` - New arrival products  
- `clearance` - Clearance sale products
- `featured` - Featured products mix

## 📝 Helper Functions

Use these functions to programmatically modify products:

```typescript
import { addProduct, updateProduct, removeProduct } from '@/app/data/productData'

// Add new product
addProduct({
  name: "New Product",
  currentPrice: "£199.00",
  originalPrice: "£299.00",
  image: "/slider/new.png",
  discount: "33%"
})

// Update existing product
updateProduct(1, { name: "Updated Name" })

// Remove product
removeProduct(1)
```

## 🎨 Customization Options

The CardSlider component supports many customization options:

- `title` - Section title
- `products` - Product array
- `autoplayDelay` - Autoplay speed (milliseconds)
- `showNavigation` - Show/hide arrow buttons
- `showPagination` - Show/hide dots
- `slidesPerView` - Responsive slide counts
- `spaceBetween` - Space between slides
- `className` - Additional CSS classes

Happy customizing! 🎉
