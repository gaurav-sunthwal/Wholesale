import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Upper Section - White Background */}
      <div className="bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Column 1: Useful Links */}
            <div className="text-center lg:text-left">
              <h3 className="text-[#2c3e50] font-bold text-lg sm:text-xl mb-4 sm:mb-6">Useful Links</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-2 sm:space-y-3">
                  <a href="#" className="block text-[#2c3e50] hover:text-[#34495e] transition-colors text-sm sm:text-base">Home</a>
                  <a href="#" className="block text-[#2c3e50] hover:text-[#34495e] transition-colors text-sm sm:text-base">About Us</a>
                  <a href="#" className="block text-[#2c3e50] hover:text-[#34495e] transition-colors text-sm sm:text-base">Contact Us</a>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <a href="#" className="block text-[#2c3e50] hover:text-[#34495e] transition-colors text-sm sm:text-base">Terms & Conditions</a>
                  <a href="#" className="block text-[#2c3e50] hover:text-[#34495e] transition-colors text-sm sm:text-base">Privacy</a>
                  <a href="#" className="block text-[#2c3e50] hover:text-[#34495e] transition-colors text-sm sm:text-base">Site Maps</a>
                </div>
              </div>
            </div>

            {/* Column 2: Stay Connected */}
            <div className="text-center lg:text-left">
              <h3 className="text-[#2c3e50] font-bold text-lg sm:text-xl mb-4 sm:mb-6">Stay Connected</h3>
              <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4">
                {/* TikTok Icon */}
                <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                
                {/* Instagram Icon */}
                <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                {/* Facebook Icon */}
                <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 3: Newsletter & Payment Methods */}
            <div className="text-center lg:text-left">
              <h3 className="text-[#2c3e50] font-bold text-lg sm:text-xl mb-4 sm:mb-6">Sign Up to our newsletter</h3>
              <div className="flex flex-col sm:flex-row mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-t-md sm:rounded-l-md sm:rounded-t-none focus:outline-none focus:ring-2 focus:ring-[#2c3e50] focus:border-transparent text-sm sm:text-base"
                />
                <button className="bg-[#2c3e50] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-b-md sm:rounded-r-md sm:rounded-b-none hover:bg-[#34495e] transition-colors flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </button>
              </div>
              
              <h3 className="text-[#2c3e50] font-bold text-lg sm:text-xl mb-3 sm:mb-4">We Accept</h3>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 max-w-md mx-auto lg:mx-0">
                {/* American Express */}
                <div className="bg-white border border-gray-300 rounded px-2 sm:px-3 py-1 sm:py-2 text-blue-600 font-bold text-xs sm:text-sm whitespace-nowrap">
                  American Express
                </div>
                
                {/* Visa */}
                <div className="bg-white border border-gray-300 rounded px-2 sm:px-3 py-1 sm:py-2 text-blue-600 font-bold text-xs sm:text-sm">
                  <div>Visa</div>
                  <div className="text-xs">Electron</div>
                </div>
                
                {/* Maestro */}
                <div className="bg-white border border-gray-300 rounded px-2 sm:px-3 py-1 sm:py-2 flex items-center">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 bg-blue-600 rounded-full mr-1"></div>
                  <div className="w-4 h-4 sm:w-6 sm:h-6 bg-red-600 rounded-full"></div>
                </div>
                
                {/* MasterCard */}
                <div className="bg-white border border-gray-300 rounded px-2 sm:px-3 py-1 sm:py-2 flex items-center">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 bg-red-600 rounded-full mr-1"></div>
                  <div className="w-4 h-4 sm:w-6 sm:h-6 bg-orange-500 rounded-full"></div>
                </div>
                
                {/* PayPal */}
                <div className="bg-white border border-gray-300 rounded px-2 sm:px-3 py-1 sm:py-2 text-blue-600 font-bold text-xs sm:text-sm whitespace-nowrap">
                  PayPal
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Section - Dark Background */}
      <div className="bg-[#2c3e50] py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white text-center text-xs sm:text-sm">
            © Copyright 2024-2025 Wholesale Furniture Outlet All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
