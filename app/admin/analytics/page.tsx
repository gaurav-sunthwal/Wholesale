'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ProductType, defaultProducts } from '@/app/data/productData'
import { BarChart3, TrendingUp, DollarSign, Package, Users, Eye } from 'lucide-react'

export default function AdminAnalytics() {
  const [products, setProducts] = useState<ProductType[]>([])
  const [analytics, setAnalytics] = useState({
    totalRevenue: 0,
    averageOrderValue: 0,
    totalOrders: 0,
    conversionRate: 0,
    topSellingCategory: '',
    inventoryValue: 0
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
    // Calculate analytics data (mock data for demo)
    if (products.length > 0) {
      const inventoryValue = products.reduce((sum, product) => {
        const price = parseFloat(product.currentPrice.replace(/[£,]/g, ''))
        return sum + price
      }, 0)

      // Mock analytics data
      setAnalytics({
        totalRevenue: 125000,
        averageOrderValue: 450,
        totalOrders: 278,
        conversionRate: 3.2,
        topSellingCategory: 'Furniture',
        inventoryValue
      })
    }
  }, [products])

  const mockSalesData = [
    { month: 'Jan', sales: 12000 },
    { month: 'Feb', sales: 15000 },
    { month: 'Mar', sales: 18000 },
    { month: 'Apr', sales: 22000 },
    { month: 'May', sales: 19000 },
    { month: 'Jun', sales: 25000 }
  ]

  const mockTopProducts = [
    { name: 'Luxury Crushed Diamond Fireplace', sales: 45, revenue: 29205 },
    { name: 'Premium Diamond Wall Art', sales: 32, revenue: 6368 },
    { name: 'Crystal Glass Coffee Table', sales: 28, revenue: 11172 },
    { name: 'Crushed Diamond Angel Wings', sales: 25, revenue: 7475 },
    { name: 'Diamond Accent Mirror', sales: 22, revenue: 3278 }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#2c3e50]">Analytics Dashboard</h1>
        <p className="text-gray-600 mt-2">Track your store performance and insights</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">£{analytics.totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-green-600">
              +12.5% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Order Value</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">£{analytics.averageOrderValue}</div>
            <p className="text-xs text-green-600">
              +8.2% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.totalOrders}</div>
            <p className="text-xs text-green-600">
              +15.3% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.conversionRate}%</div>
            <p className="text-xs text-red-600">
              -2.1% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockSalesData.map((data, index) => (
                <div key={data.month} className="flex items-center space-x-4">
                  <div className="w-12 text-sm text-gray-600">{data.month}</div>
                  <div className="flex-1">
                    <div className="bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-[#2c3e50] h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(data.sales / 25000) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="w-16 text-sm font-medium">£{data.sales.toLocaleString()}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle>Top Selling Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockTopProducts.map((product, index) => (
                <div key={product.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#2c3e50] text-white rounded-full flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{product.name}</p>
                      <p className="text-xs text-gray-600">{product.sales} sales</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-sm">£{product.revenue.toLocaleString()}</p>
                    <p className="text-xs text-gray-600">revenue</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Package className="w-5 h-5 mr-2" />
              Inventory Value
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#2c3e50]">
              £{analytics.inventoryValue.toLocaleString()}
            </div>
            <p className="text-sm text-gray-600">
              Across {products.length} products
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="w-5 h-5 mr-2" />
              Top Category
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#2c3e50]">
              {analytics.topSellingCategory}
            </div>
            <p className="text-sm text-gray-600">
              45% of total sales
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Eye className="w-5 h-5 mr-2" />
              Page Views
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#2c3e50]">
              12,450
            </div>
            <p className="text-sm text-green-600">
              +23% this month
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
