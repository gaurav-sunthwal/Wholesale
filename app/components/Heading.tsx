"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ChevronDownIcon,
  ShoppingCartIcon,
  SearchIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";

const navigationItems = [
  {
    name: "Bedroom",
    hasDropdown: true,
    dropdownItems: [
      { name: "Bed Frames", href: "/bedroom/bed-frames" },
      { name: "Mattresses", href: "/bedroom/mattresses" },
      { name: "Bedside Tables", href: "/bedroom/bedside-tables" },
      { name: "Wardrobes", href: "/bedroom/wardrobes" },
      { name: "Dressing Tables", href: "/bedroom/dressing-tables" },
      { name: "Bedroom Sets", href: "/bedroom/bedroom-sets" },
    ],
  },
  {
    name: "Dinning Furnitures",
    hasDropdown: true,
    dropdownItems: [
      { name: "Dining Tables", href: "/dining/tables" },
      { name: "Dining Chairs", href: "/dining/chairs" },
      { name: "Dining Sets", href: "/dining/sets" },
      { name: "Bar Stools", href: "/dining/bar-stools" },
      { name: "Buffets & Sideboards", href: "/dining/buffets" },
      { name: "Dining Benches", href: "/dining/benches" },
    ],
  },
  { name: "Glam Accessories", hasDropdown: false, href: "/glam-accessories" },
  {
    name: "Sofas",
    hasDropdown: true,
    dropdownItems: [
      { name: "3-Seater Sofas", href: "/sofas/3-seater" },
      { name: "2-Seater Sofas", href: "/sofas/2-seater" },
      { name: "Corner Sofas", href: "/sofas/corner" },
      { name: "Sofa Beds", href: "/sofas/sofa-beds" },
      { name: "Recliner Sofas", href: "/sofas/recliner" },
      { name: "Leather Sofas", href: "/sofas/leather" },
    ],
  },
  { name: "Wall Panels", hasDropdown: false, href: "/wall-panels" },
  { name: "Wardrobes", hasDropdown: false, href: "/wardrobes" },
  { name: "Clearance", hasDropdown: false, href: "/clearance" },
  {
    name: "Landlord Furniture",
    hasDropdown: false,
    href: "/landlord-furniture",
  },
];

// Types
interface DropdownItem {
  name: string;
  href?: string;
  subItems?: DropdownItem[];
}

interface NavigationItemType {
  name: string;
  hasDropdown: boolean;
  href?: string;
  dropdownItems?: DropdownItem[];
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
      className={`bg-white text-gray-900 placeholder-gray-500 px-2 sm:px-3 py-2 ${
        isMobile
          ? "flex-1 focus:outline-none border-none focus:ring-0 min-w-0"
          : ` md:w-20 xl:w-30 focus:outline-none border-none focus:ring-0 min-w-0 ${
              isFocused ? "border-none" : ""
            }`
      }`}
    />
    <div className="bg-[#364451] flex-shrink-0 h-full flex items-center justify-center p-2">
      <SearchIcon className="text-white w-5 " />
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
        ? "bg-teal-800 text-white p-2 sm:p-3 rounded-lg hover:bg-teal-700 transition-colors flex-shrink-0"
        : "bg-[#163040] text-white px-2 sm:px-3 md:px-4 py-2 rounded-lg flex items-center space-x-1 md:space-x-2 hover:bg-teal-700 transition-colors flex-shrink-0"
    } ${className}`}
  >
    <ShoppingCartIcon />
    {!isMobile && showPrice && (
      <span className="text-xs md:text-sm font-medium hidden xl:inline">
        £0.00
      </span>
    )}
  </button>
);

// Dropdown Component
const Dropdown = ({
  items,
  isOpen,
  onClose,
  isMobile = false,
  className = "",
}: {
  items: DropdownItem[];
  isOpen: boolean;
  onClose: () => void;
  isMobile?: boolean;
  className?: string;
}) => {
  if (!isOpen) return null;

  return (
    <div
      className={`${
        isMobile
          ? "bg-gray-50 border-l-2 border-teal-600 ml-4 mt-2 space-y-1"
          : "absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[200px]"
      } ${className}`}
    >
      {items.map((item, index) => (
        <div key={index}>
          <a
            href={item.href || "#"}
            className={`${
              isMobile
                ? "block px-3 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-800 transition-colors"
                : "block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-800 transition-colors first:rounded-t-lg last:rounded-b-lg"
            }`}
            onClick={onClose}
          >
            {item.name}
          </a>
          {item.subItems && (
            <div className={`${isMobile ? "ml-4" : "pl-4"}`}>
              {item.subItems.map((subItem, subIndex) => (
                <a
                  key={subIndex}
                  href={subItem.href || "#"}
                  className={`${
                    isMobile
                      ? "block px-3 py-1 text-xs text-gray-600 hover:bg-teal-50 hover:text-teal-800 transition-colors"
                      : "block px-4 py-1 text-xs text-gray-600 hover:bg-teal-50 hover:text-teal-800 transition-colors"
                  }`}
                  onClick={onClose}
                >
                  {subItem.name}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const NavigationItem = ({
  item,
  isMobile = false,
  className = "",
  isDropdownOpen = false,
  onDropdownToggle = () => {},
  onDropdownClose = () => {},
  onDropdownOpen = () => {},
}: {
  item: NavigationItemType;
  isMobile?: boolean;
  className?: string;
  isDropdownOpen?: boolean;
  onDropdownToggle?: () => void;
  onDropdownClose?: () => void;
  onDropdownOpen?: () => void;
}) => (
  <div
    className={`${isMobile ? "" : "relative"} ${className}`}
    onMouseEnter={!isMobile && item.hasDropdown ? onDropdownOpen : undefined}
    onMouseLeave={!isMobile && item.hasDropdown ? onDropdownClose : undefined}
  >
    <div
      className={`flex items-center ${
        isMobile
          ? "justify-between cursor-pointer hover:text-teal-800 transition-colors py-2 border-b border-gray-100 last:border-b-0"
          : `cursor-pointer hover:text-teal-800 transition-colors ${
              item.hasDropdown ? "space-x-1" : "space-x-0"
            }`
      }`}
      onClick={item.hasDropdown ? onDropdownToggle : undefined}
    >
      <a
        className={`text-[#163040] ${
          isMobile ? "text-sm font-medium" : "text-md font-bold"
        }`}
        href={item.href || "#"}
      >
        {item.name}
      </a>
      {item.hasDropdown && <DropdownIcon />}
    </div>
    {item.hasDropdown && item.dropdownItems && (
      <Dropdown
        items={item.dropdownItems}
        isOpen={isDropdownOpen}
        onClose={onDropdownClose}
        isMobile={isMobile}
      />
    )}
  </div>
);

export default function Heading() {
  const [isFocused, setIsFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  const headerRef = useRef<HTMLElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle dropdown toggle with delay
  const handleDropdownToggle = (index: number) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const handleDropdownClose = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdownIndex(null);
    }, 150); // Small delay to allow mouse movement
  };

  const handleDropdownOpen = (index: number) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setOpenDropdownIndex(index);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setOpenDropdownIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header ref={headerRef} className="w-full">
      <div className=" bg-[#163040] text-white text-sm font-medium p-5 text-center">
        <div className="flex items-center justify-center gap-2">
          <Logo width={100} height={100} className="block md:hidden" />
          <p className=" font-bold">
            {"PAY ON DELIVERY ALL DINING SETS & WARDROBES - CALL: 01772 428823"}
          </p>
        </div>
      </div>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <div className="flex items-center justify-between py-4 min-w-0">
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
              <NavigationItem
                key={index}
                item={item}
                isMobile={false}
                isDropdownOpen={openDropdownIndex === index}
                onDropdownToggle={() => handleDropdownToggle(index)}
                onDropdownClose={handleDropdownClose}
                onDropdownOpen={() => handleDropdownOpen(index)}
              />
            ))}
          </nav>

          {/* Search and Cart Section */}
          <div className="hidden sm:flex items-center space-x-2 md:space-x-3 flex-shrink-0">
            <SearchBar
              isMobile={false}
              isFocused={isFocused}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <ShoppingCartButton isMobile={false} showPrice={true} />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex justify-between w-full lg:hidden items-center space-x-2">
            <button
              className="lg:hidden hover:text-teal-800 p-2 bg-[#163040] rounded-lg text-white flex-shrink-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <XIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
            <SearchBar />
            <ShoppingCartButton isMobile={true} />
          </div>

          {/* Mobile Search and Cart */}

          {/* Mobile Menu Button */}
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <nav className="px-4 py-4 space-y-3">
              {navigationItems.map((item, index) => (
                <NavigationItem
                  key={item.name}
                  item={item}
                  isMobile={true}
                  isDropdownOpen={openDropdownIndex === index}
                  onDropdownToggle={() => handleDropdownToggle(index)}
                  onDropdownClose={handleDropdownClose}
                  onDropdownOpen={() => handleDropdownOpen(index)}
                />
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
