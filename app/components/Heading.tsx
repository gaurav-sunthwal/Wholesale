"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  ChevronDownIcon,
  ShoppingCartIcon,
  SearchIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";

// Types
interface NavigationItemType {
  name: string;
  hasDropdown: boolean;
}

// Reusable Components
const DropdownIcon = () => (
  <ChevronDownIcon className="w-3 h-3 text-[#163040]" />
);

const Logo = ({
  className = "",
  width = 120,
  height = 40,
  priority = false,
}) => (
  <Image
    src="/logo/logo.png"
    alt="logo"
    width={width}
    height={height}
    className={className}
    priority={priority}
  />
);

const SearchBar = ({
  isMobile = false,
  isFocused = false,
  onFocus = () => {},
  onBlur = () => {},
  className = "",
}) => (
  <div
    className={`flex items-center border border-gray-300 ${
      isMobile ? "rounded-lg" : "rounded-[100px]"
    } overflow-hidden ${className}`}
  >
    <input
      type="text"
      placeholder="Search..."
      onFocus={onFocus}
      onBlur={onBlur}
      className={`bg-white text-gray-900 placeholder-gray-500 px-3 py-2 ${
        isMobile
          ? "flex-1 focus:outline-none border-none focus:ring-0"
          : `w-24 sm:w-32 md:w-40 focus:outline-none border-none focus:ring-0 ${
              isFocused ? "border-none" : ""
            }`
      }`}
    />
    <div className="bg-[#364451] w-full h-full flex items-center justify-center p-2">
      <SearchIcon className="text-white" />
    </div>
  </div>
);

const ShoppingCartButton = ({
  isMobile = false,
  showPrice = true,
  className = "",
}) => (
  <button
    className={`${
      isMobile
        ? "bg-teal-800 text-white p-3 rounded-lg hover:bg-teal-700 transition-colors"
        : "bg-[#163040] text-white px-3 py-2 md:px-4 rounded-lg flex items-center space-x-1 md:space-x-2 hover:bg-teal-700 transition-colors"
    } ${className}`}
  >
    <ShoppingCartIcon className={isMobile ? "w-5 h-5" : "w-4 h-4"} />
    {!isMobile && showPrice && (
      <span className="text-xs md:text-sm font-medium hidden md:inline">
        £0.00
      </span>
    )}
  </button>
);

const NavigationItem = ({
  item,
  isMobile = false,
  className = "",
}: {
  item: NavigationItemType;
  isMobile?: boolean;
  className?: string;
}) => (
  <div
    className={`flex items-center ${
      isMobile
        ? "justify-between cursor-pointer hover:text-teal-800 transition-colors py-2 border-b border-gray-100 last:border-b-0"
        : `cursor-pointer hover:text-teal-800 transition-colors ${
            item.hasDropdown ? "space-x-1" : "space-x-0"
          }`
    } ${className}`}
  >
    <span
      className={`text-[#163040] ${
        isMobile ? "text-sm font-medium" : "text-md font-bold"
      }`}
    >
      {item.name}
    </span>
    {item.hasDropdown && <DropdownIcon />}
  </div>
);

export default function Heading() {
  const navigationItems = [
    { name: "Bedroom", hasDropdown: true },
    { name: "Dinning Furnitures", hasDropdown: true },
    { name: "Glam Accessories", hasDropdown: false },
    { name: "Sofas", hasDropdown: true },
    { name: "Wall Panels", hasDropdown: false },
    { name: "Wardrobes", hasDropdown: false },
    { name: "Clearance", hasDropdown: false },
    { name: "Landlord Furniture", hasDropdown: false },
  ];

  const [isFocused, setIsFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <div className=" bg-[#163040] text-white text-sm font-medium p-5 text-center">
        <div className="flex items-center justify-center gap-2">
          <Logo width={100} height={100} className="block md:hidden" />
          <p className=" font-bold">
            {"PAY ON DELIVERY ALL DINING SETS & WARDROBES - CALL: 01772 428823"}
          </p>
        </div>
      </div>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <div className="flex-shrink-0 md:block hidden">
            <Logo
              width={120}
              height={40}
              className="w-auto h-8 sm:h-10 md:h-12"
              priority={true}
            />
          </div>

          {/* Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {navigationItems.map((item, index) => (
              <NavigationItem key={index} item={item} isMobile={false} />
            ))}
          </nav>

          {/* Search and Cart Section */}
          <div className="hidden sm:flex items-center space-x-2 md:space-x-3">
            <SearchBar
              isMobile={false}
              isFocused={isFocused}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <ShoppingCartButton isMobile={false} showPrice={true} />
          </div>
          <button
            className="lg:hidden hover:text-teal-800 p-2 bg-[#163040] rounded-lg text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
          {/* Mobile Search and Cart */}
          <div className="flex sm:hidden items-center space-x-2">
            <SearchBar isMobile={true} />
            <ShoppingCartButton isMobile={true} />
          </div>

          {/* Mobile Menu Button */}
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <nav className="px-4 py-4 space-y-3">
              {navigationItems.map((item) => (
                <NavigationItem key={item.name} item={item} isMobile={true} />
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
