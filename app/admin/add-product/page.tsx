'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ProductType } from '@/app/data/productData'
import { Save, ArrowLeft, Upload, X } from 'lucide-react'

export default function AddProduct() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    currentPrice: '',
    originalPrice: '',
    discount: '',
    image: '',
    description: '',
    category: '',
    stock: '',
    tags: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Auto-calculate discount if both prices are provided
    if (name === 'currentPrice' || name === 'originalPrice') {
      const currentPrice = name === 'currentPrice' ? parseFloat(value.replace(/[£,]/g, '')) : parseFloat(formData.currentPrice.replace(/[£,]/g, ''))
      const originalPrice = name === 'originalPrice' ? parseFloat(value.replace(/[£,]/g, '')) : parseFloat(formData.originalPrice.replace(/[£,]/g, ''))
      
      if (currentPrice && originalPrice && originalPrice > currentPrice) {
        const discount = Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
        setFormData(prev => ({
          ...prev,
          discount: `${discount}%`
        }))
      } else if (currentPrice && originalPrice && originalPrice <= currentPrice) {
        setFormData(prev => ({
          ...prev,
          discount: '0%'
        }))
      }
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        setPreviewImage(result)
        setFormData(prev => ({
          ...prev,
          image: result
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Get existing products from localStorage
      const savedProducts = localStorage.getItem('adminProducts')
      const existingProducts = savedProducts ? JSON.parse(savedProducts) : []
      
      // Create new product
      const newProduct: ProductType = {
        id: Math.max(...existingProducts.map((p: ProductType) => p.id), 0) + 1,
        name: formData.name,
        currentPrice: `£${formData.currentPrice}`,
        originalPrice: formData.originalPrice ? `£${formData.originalPrice}` : '',
        discount: formData.discount || '0%',
        image: formData.image || '/slider/slider1.png' // Default image
      }

      // Add to existing products
      const updatedProducts = [...existingProducts, newProduct]
      localStorage.setItem('adminProducts', JSON.stringify(updatedProducts))

      // Reset form
      setFormData({
        name: '',
        currentPrice: '',
        originalPrice: '',
        discount: '',
        image: '',
        description: '',
        category: '',
        stock: '',
        tags: ''
      })
      setPreviewImage(null)

      alert('Product added successfully!')
      router.push('/admin')
    } catch (error) {
      console.error('Error adding product:', error)
      alert('Error adding product. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Button
          variant="outline"
          onClick={() => router.back()}
          className="flex items-center"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-[#2c3e50]">Add New Product</h1>
          <p className="text-gray-600 mt-2">Add a new product to your store</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Product Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product Name */}
              <div className="md:col-span-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Product Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter product name"
                  required
                />
              </div>

              {/* Current Price */}
              <div>
                <label htmlFor="currentPrice" className="block text-sm font-medium text-gray-700 mb-2">
                  Current Price (£) *
                </label>
                <Input
                  id="currentPrice"
                  name="currentPrice"
                  type="number"
                  step="0.01"
                  value={formData.currentPrice}
                  onChange={handleInputChange}
                  placeholder="299.00"
                  required
                />
              </div>

              {/* Original Price */}
              <div>
                <label htmlFor="originalPrice" className="block text-sm font-medium text-gray-700 mb-2">
                  Original Price (£)
                </label>
                <Input
                  id="originalPrice"
                  name="originalPrice"
                  type="number"
                  step="0.01"
                  value={formData.originalPrice}
                  onChange={handleInputChange}
                  placeholder="399.00"
                />
              </div>

              {/* Discount */}
              <div>
                <label htmlFor="discount" className="block text-sm font-medium text-gray-700 mb-2">
                  Discount
                </label>
                <Input
                  id="discount"
                  name="discount"
                  value={formData.discount}
                  onChange={handleInputChange}
                  placeholder="25%"
                  readOnly
                />
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full h-9 px-3 py-1 text-sm border border-input rounded-md bg-background"
                >
                  <option value="">Select Category</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Lighting">Lighting</option>
                  <option value="Decor">Decor</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>

              {/* Stock */}
              <div>
                <label htmlFor="stock" className="block text-sm font-medium text-gray-700 mb-2">
                  Stock Quantity
                </label>
                <Input
                  id="stock"
                  name="stock"
                  type="number"
                  value={formData.stock}
                  onChange={handleInputChange}
                  placeholder="100"
                />
              </div>

              {/* Image Upload */}
              <div className="md:col-span-2">
                <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                  Product Image
                </label>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <label htmlFor="image" className="cursor-pointer">
                      <div className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Image
                      </div>
                      <input
                        id="image"
                        name="image"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                    <span className="text-sm text-gray-500">
                      Or use default image if none selected
                    </span>
                  </div>
                  
                  {previewImage && (
                    <div className="relative w-32 h-32 border rounded-lg overflow-hidden">
                      <img
                        src={previewImage}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setPreviewImage(null)
                          setFormData(prev => ({ ...prev, image: '' }))
                        }}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 text-sm border border-input rounded-md bg-background resize-none"
                  placeholder="Enter product description..."
                />
              </div>

              {/* Tags */}
              <div className="md:col-span-2">
                <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
                  Tags (comma separated)
                </label>
                <Input
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  placeholder="luxury, modern, furniture"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4 pt-6 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-[#2c3e50] hover:bg-[#34495e] text-white"
              >
                <Save className="w-4 h-4 mr-2" />
                {isLoading ? 'Adding Product...' : 'Add Product'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
