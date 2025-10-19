import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export type ProductType = {
  id: number
  name: string
  currentPrice: string
  originalPrice: string
  image: string
  discount: string
}

function ProductCard({ product }: { product: ProductType }) {
  // Create URL-friendly slug from product name
  const createSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  }

  const productSlug = createSlug(product.name)

  return (
    <Link href={`/product/${productSlug}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        {/* Product Image */}
        <div className="relative h-64 w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      
      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-gray-800 font-semibold text-sm mb-3 line-clamp-2">
          {product.name}
        </h3>
        
        {/* Pricing */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-bold text-gray-900">
            {product.currentPrice}
          </span>
          {product.originalPrice && product.originalPrice !== product.currentPrice && (
            <span className="text-sm text-gray-500 line-through">
              {product.originalPrice}
            </span>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button 
            variant="default" 
            size="sm" 
            className="flex-1 bg-gray-800 hover:bg-gray-700 text-white text-sm py-2"
            onClick={(e) => e.preventDefault()}
          >
            Add to cart
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 border-gray-800 text-gray-800 hover:bg-gray-50 text-sm py-2"
            onClick={(e) => e.preventDefault()}
          >
            Quickview
          </Button>
        </div>
      </div>
      </div>
    </Link>
  )
}

export default ProductCard