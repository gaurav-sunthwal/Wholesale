import Image from "next/image";
import React from "react";
import { Facebook, Instagram, Send, MusicIcon as TikTok } from "lucide-react";

const usefulLinks = [
  [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ],
  [
    { label: "Terms & Conditions", href: "/T&C/terms" },
    { label: "Privacy", href: "/T&C/policy" },
    { label: "Site Maps", href: "#" },
  ],
];

const footerContent = {
  copyright:
    "© Copyright 2024-2025 Wholesale Furniture Outlet All rights reserved",
};

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Upper Section - White Background */}
      <div className="bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Column 1: Useful Links */}
            <div className="text-center lg:text-left">
              <h3 className="text-[#2c3e50] font-bold text-lg sm:text-xl mb-4 sm:mb-6">
                Useful Links
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {usefulLinks.map((col, i) => (
                  <div key={i} className="space-y-2 sm:space-y-3">
                    {col.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="block text-[#2c3e50] hover:text-[#34495e] transition-colors text-sm sm:text-base"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Stay Connected */}
            <div className="text-center lg:text-left">
              <h3 className="text-[#2c3e50] font-bold text-lg sm:text-xl mb-4 sm:mb-6">
                Stay Connected
              </h3>
              <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4">
                {/* TikTok Icon */}
                <a
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded flex items-center justify-center hover:bg-gray-800 transition-colors"
                  aria-label="TikTok"
                >
                  <TikTok className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </a>
                {/* Instagram Icon */}
                <a
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </a>
                {/* Facebook Icon */}
                <a
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </a>
              </div>
            </div>

            {/* Column 3: Newsletter & Payment Methods */}
            <div className="text-center lg:text-left ">
              <h3 className="text-[#2c3e50] font-bold text-xl mb-6 text-center ">
                Sign Up to our newsletter
              </h3>
              <div
                className={`flex items-center mb-6
                `}
              >
                <input
                  type="text"
                  placeholder="Search..."
                  className={`bg-white text-gray-900 placeholder-gray-500 px-2 sm:px-3 py-2  w-full rounded-l-3xl border border-gray-300`}
                />
                <div className="bg-[#364451] flex-shrink-0 h-full flex items-center justify-center p-2 rounded-r-3xl">
                  <Send className="text-white w-5 " />
                </div>
              </div>

              <h3 className="text-[#2c3e50] font-bold text-lg sm:text-xl mb-3 sm:mb-4">
                We Accept
              </h3>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 max-w-md mx-auto lg:mx-0">
                <Image
                  src={"/icons/image.png"}
                  alt="Mastercard"
                  width={200}
                  height={200}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Section - Dark Background */}
      <div className="bg-[#2c3e50] py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white text-center text-xs sm:text-sm">
            {footerContent.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
