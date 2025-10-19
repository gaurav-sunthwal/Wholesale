import Image from "next/image"
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
  return (
    <div className="product-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-[440px] flex flex-col">
      {/* Product Image */}
      <div className="relative h-64 w-full flex-shrink-0">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      
      {/* Product Details */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-gray-800 font-medium text-sm mb-3 line-clamp-2 flex-shrink-0">
          {product.name}
        </h3>
        
        {/* Divider */}
        <div className="border-t border-gray-200 mb-3 flex-shrink-0"></div>
        
        {/* Pricing */}
        <div className="flex items-center justify-between mb-4 flex-shrink-0">
          <span className="text-xl font-bold text-gray-900">
            {product.currentPrice}
          </span>
          <span className="text-sm text-gray-500 line-through">
            {product.originalPrice}
          </span>
        </div>
        
        {/* Spacer to push buttons to bottom */}
        <div className="flex-grow"></div>
        
        {/* Action Buttons */}
        <div className="flex gap-2 flex-shrink-0">
          <Button 
            variant="default" 
            size="sm" 
            className="flex-1 bg-gray-800 hover:bg-gray-700 text-white"
          >
            Add to cart
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 border-gray-800 text-gray-800 hover:bg-gray-50"
          >
            Quickview
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard