'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Package, TrendingUp, Users, DollarSign, Eye, Edit, Trash2 } from 'lucide-react'
import { ProductType, defaultProducts } from '@/app/data/productData'
import Link from 'next/link'
import Image from 'next/image'

export default function AdminDashboard() {
  const [products, setProducts] = useState<ProductType[]>([])
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalValue: 0,
    averagePrice: 0,
    discountedProducts: 0
  })

  useEffect(() => {
    // Load products from localStorage or use default data
    const savedProducts = localStorage.getItem('adminProducts')
    if (savedProducts) {
      const parsedProducts = JSON.parse(savedProducts)
      setProducts(parsedProducts)
    } else {
      setProducts(defaultProducts)
    }
  }, [])

  useEffect(() => {
    // Calculate statistics
    if (products.length > 0) {
      const totalProducts = products.length
      const totalValue = products.reduce((sum, product) => {
        const price = parseFloat(product.currentPrice.replace(/[£,]/g, ''))
        return sum + price
      }, 0)
      const averagePrice = totalValue / totalProducts
      const discountedProducts = products.filter(p => p.discount !== '0%' && p.discount !== '').length

      setStats({
        totalProducts,
        totalValue,
        averagePrice,
        discountedProducts
      })
    }
  }, [products])

  const handleDeleteProduct = (id: number) => {
    if (confirm('Are you sure you want to delete this product?')) {
      const updatedProducts = products.filter(p => p.id !== id)
      setProducts(updatedProducts)
      localStorage.setItem('adminProducts', JSON.stringify(updatedProducts))
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#2c3e50]">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your wholesale furniture store</p>
        </div>
        <Link href="/admin/add-product">
          <Button className="bg-[#2c3e50] hover:bg-[#34495e] text-white">
            <Package className="w-4 h-4 mr-2" />
            Add New Product
          </Button>
        </Link>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalProducts}</div>
            <p className="text-xs text-muted-foreground">
              Active products in store
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Inventory Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">£{stats.totalValue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              Current inventory value
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Price</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">£{stats.averagePrice.toFixed(0)}</div>
            <p className="text-xs text-muted-foreground">
              Per product average
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Discounted Items</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.discountedProducts}</div>
            <p className="text-xs text-muted-foreground">
              Products on sale
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Products */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Recent Products</span>
            <Link href="/admin/products">
              <Button variant="outline" size="sm">
                View All
              </Button>
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {products.slice(0, 5).map((product) => (
              <div key={product.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-gray-900 truncate">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {product.currentPrice}
                    {product.originalPrice && product.originalPrice !== product.currentPrice && (
                      <span className="ml-2 text-xs text-green-600">
                        ({product.discount} off)
                      </span>
                    )}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleDeleteProduct(product.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
