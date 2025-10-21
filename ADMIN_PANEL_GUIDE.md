# Admin Panel Guide

## Overview
This admin panel provides a complete management system for your wholesale furniture store. It includes authentication, product management, analytics, and a modern, responsive interface.

## Features

### 🔐 Authentication
- **Login Page**: Secure admin login with demo credentials
- **Session Management**: Persistent login state using localStorage
- **Logout Functionality**: Secure logout with session cleanup

### 📊 Dashboard
- **Overview Statistics**: Total products, inventory value, average price, discounted items
- **Recent Products**: Quick view of latest added products
- **Quick Actions**: Easy access to add new products

### 📦 Product Management
- **Add Products**: Comprehensive form with image upload, pricing, categories
- **View Products**: Grid layout with search functionality
- **Product Statistics**: Inventory value and product count
- **Auto-calculated Discounts**: Automatic discount calculation based on prices

### 📈 Analytics
- **Sales Metrics**: Revenue, order value, conversion rates
- **Visual Charts**: Monthly sales trends and top-selling products
- **Performance Indicators**: Growth percentages and key metrics

## Access Information

### Login Credentials
- **URL**: `/admin/login`
- **Username**: `admin`
- **Password**: `admin123`

### Navigation Structure
```
/admin/
├── login/          # Login page
├── /               # Dashboard (home)
├── products/       # Product management
├── add-product/    # Add new product
└── analytics/      # Analytics dashboard
```

## Technical Features

### 🎨 Styling
- **Consistent Design**: Matches your existing site's color scheme (#2c3e50)
- **Responsive Layout**: Works on desktop, tablet, and mobile
- **Modern UI**: Clean, professional interface using shadcn/ui components
- **Hover Effects**: Smooth transitions and interactive elements

### 💾 Data Management
- **Local Storage**: Products are stored in browser localStorage for persistence
- **Default Data**: Falls back to existing product data if no custom products exist
- **CRUD Operations**: Create, read, update, and delete products
- **Image Handling**: Support for image uploads with preview functionality

### 🔧 Functionality
- **Search & Filter**: Real-time product search
- **Form Validation**: Required fields and input validation
- **Error Handling**: User-friendly error messages
- **Loading States**: Visual feedback during operations

## File Structure

```
app/admin/
├── layout.tsx              # Main admin layout with sidebar
├── page.tsx                # Dashboard home page
├── login/
│   ├── layout.tsx          # Login layout
│   └── page.tsx            # Login form
├── products/
│   └── page.tsx            # Product management page
├── add-product/
│   └── page.tsx            # Add product form
└── analytics/
    └── page.tsx            # Analytics dashboard
```

## Usage Instructions

### 1. Access Admin Panel
- Navigate to `/admin/login`
- Enter credentials: `admin` / `admin123`
- You'll be redirected to the dashboard

### 2. Add Products
- Click "Add New Product" from dashboard or sidebar
- Fill in product details (name, prices are required)
- Upload an image or use default
- Click "Add Product" to save

### 3. Manage Products
- View all products in `/admin/products`
- Search products by name or price
- Edit or delete products as needed

### 4. View Analytics
- Check sales performance in `/admin/analytics`
- Monitor key metrics and trends
- Track top-selling products

## Customization

### Colors
The admin panel uses your brand colors:
- Primary: `#2c3e50` (dark blue-gray)
- Hover: `#34495e` (slightly lighter)
- Background: `#f9fafb` (light gray)

### Adding Features
To add new features:
1. Create new page in `app/admin/`
2. Add navigation link in `layout.tsx`
3. Follow existing component patterns
4. Use the same styling approach

## Security Notes

- This is a demo implementation using localStorage
- For production, implement proper authentication with:
  - Server-side sessions
  - JWT tokens
  - Database storage
  - Password hashing
  - Rate limiting

## Support

The admin panel is fully integrated with your existing product data structure and styling. All components follow your established design patterns and use the same UI library (shadcn/ui) as your main site.
