"use client";
import React, { useState } from 'react';
import { Heart, ShoppingCart, Clock, Eye, Star } from 'lucide-react';

interface Laptop {
  id: number;
  name: string;
  image: string;
  currentPrice: number;
  originalPrice: number;
  discount: number;
  status: 'in-stock' | 'out-of-stock' | 'coming-soon';
  isNew?: boolean;
  freeShipping?: boolean;
  rating?: number;
  reviewCount?: number;
}

const LaptopCard = ({ laptop }: { laptop: Laptop }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price: number) => {
    return `₹ ${price.toLocaleString('en-IN')}.00`;
  };

  const getStatusButton = () => {
    switch (laptop.status) {
      case 'in-stock':
        return (
          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center space-x-2">
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
        );
      case 'out-of-stock':
        return (
          <button disabled className="w-full bg-gray-400 text-white font-semibold py-3 px-4 rounded-lg cursor-not-allowed opacity-70">
            Out of Stock
          </button>
        );
      case 'coming-soon':
        return (
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>Coming Soon</span>
          </button>
        );
    }
  };

  return (
    <div
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-red-200 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Section */}
      <div className="relative overflow-hidden bg-gray-50 p-4">
        {laptop.isNew && (
          <div className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
            NEW
          </div>
        )}
        
        {laptop.discount > 0 && (
          <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
            SAVE {laptop.discount}%
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className={`absolute top-12 right-3 p-2 rounded-full transition-all duration-300 z-10 ${
            isWishlisted
              ? 'bg-red-600 text-white hover:bg-red-700'
              : 'bg-white text-gray-600 hover:bg-red-50 hover:text-red-600'
          } shadow-lg hover:shadow-xl hover:scale-110`}
        >
          <Heart
            className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`}
          />
        </button>

        {/* Quick View Button */}
        <button aria-label="quick view button"
          className={`absolute bottom-3 right-3 p-2 rounded-full bg-white text-gray-600 hover:bg-red-50 hover:text-red-600 shadow-lg transition-all duration-300 z-10 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <Eye className="w-4 h-4" />
        </button>

        <div className=" flex items-center justify-center">
          <img
            src={laptop.image}
            alt={laptop.name}
            className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Product Details Section */}
      <div className="p-5 space-y-4">
        {/* Product Name */}
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 hover:text-red-600 transition-colors duration-300 leading-tight">
          {laptop.name}
        </h3>

        {/* Rating */}
        {laptop.rating && (
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(laptop.rating!)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            {laptop.reviewCount && (
              <span className="text-sm text-gray-500">({laptop.reviewCount})</span>
            )}
          </div>
        )}

        {/* Pricing */}
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-gray-900">
              {formatPrice(laptop.currentPrice)}
            </span>
            {laptop.originalPrice > laptop.currentPrice && (
              <span className="text-lg text-gray-500 line-through">
                {formatPrice(laptop.originalPrice)}
              </span>
            )}
          </div>
          
          {laptop.freeShipping && (
            <div className="flex items-center">
              <span className="text-sm text-green-600 font-medium bg-green-50 px-2 py-1 rounded">
                Free Shipping
              </span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          {getStatusButton()}
          
          {/* Add to Compare */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={`compare-${laptop.id}`}
              className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 focus:ring-2"
            />
            <label
              htmlFor={`compare-${laptop.id}`}
              className="text-sm text-gray-600 hover:text-red-600 cursor-pointer transition-colors duration-300"
            >
              Add to Compare
            </label>
          </div>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-red-600/5 to-transparent pointer-events-none transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

const LaptopGrid = () => {
  const laptops: Laptop[] = [
    {
      id: 1,
      name: "Lenovo IdeaPad Slim 3 15IAN8 (13th Generation Intel Core i3 N305 Processor | 8GB RAM | 512GB SSD)",
      image: "https://mudita.com.np/media/catalog/product/cache/278abbc8911ee5bd8d9d36ef904a805f/l/e/lenovo-ideapad-slim-3-15ian8-price-in-nepal_1.webp",
      currentPrice: 48999,
      originalPrice: 62000,
      discount: 21,
      status: 'out-of-stock',
      isNew: true,
      freeShipping: true,
      rating: 4.5,
      reviewCount: 124
    },
    {
      id: 2,
      name: "HP Pavilion 15-eg2xxx (12th Gen Intel Core i5 | 16GB RAM | 1TB SSD | Windows 11)",
      image: "https://mudita.com.np/media/catalog/product/cache/278abbc8911ee5bd8d9d36ef904a805f/h/p/hp-notebook-14s-price-in-nepal.webp",
      currentPrice: 65999,
      originalPrice: 78000,
      discount: 15,
      status: 'in-stock',
      isNew: false,
      freeShipping: true,
      rating: 4.3,
      reviewCount: 89
    },
    {
      id: 3,
      name: "Dell Inspiron 15 3525 (AMD Ryzen 5 5500U | 8GB RAM | 512GB SSD | Ubuntu Linux)",
      image: "https://mudita.com.np/media/catalog/product/cache/278abbc8911ee5bd8d9d36ef904a805f/v/o/vostro-3520-laptop-02_2_1.jpg",
      currentPrice: 54999,
      originalPrice: 64000,
      discount: 14,
      status: 'coming-soon',
      isNew: true,
      freeShipping: true,
      rating: 4.7,
      reviewCount: 203
    },
    {
      id: 4,
      name: "ASUS VivoBook 15 X515EA (11th Gen Intel Core i3 | 8GB RAM | 256GB SSD | Windows 11)",
      image: "https://mudita.com.np/media/catalog/product/cache/036aa47742df3225beb764097d8b4fe8/a/s/asus_laptops.webp",
      currentPrice: 42999,
      originalPrice: 52000,
      discount: 17,
      status: 'in-stock',
      isNew: false,
      freeShipping: false,
      rating: 4.1,
      reviewCount: 67
    },
    {
      id: 5,
      name: "Acer Aspire 5 A515-57 (12th Gen Intel Core i5 | 16GB RAM | 512GB SSD | Windows 11 Home)",
      image: "https://mudita.com.np/media/catalog/product/cache/278abbc8911ee5bd8d9d36ef904a805f/a/c/acer-aspire-3-15-price-in-nepal_1.webp",
      currentPrice: 58999,
      originalPrice: 68000,
      discount: 13,
      status: 'in-stock',
      isNew: true,
      freeShipping: true,
      rating: 4.4,
      reviewCount: 156
    },
    {
      id: 6,
      name: "MSI Modern 14 C12M (12th Gen Intel Core i5 | 8GB RAM | 512GB SSD | Windows 11)",
      image: "https://mudita.com.np/media/catalog/product/cache/036aa47742df3225beb764097d8b4fe8/m/s/msi-cyborg-15-ai-a1vfk-price-in-nepal.webp",
      currentPrice: 61999,
      originalPrice: 72000,
      discount: 14,
      status: 'out-of-stock',
      isNew: false,
      freeShipping: true,
      rating: 4.6,
      reviewCount: 91
    },
    {
      id: 7,
      name: "Lenovo ThinkPad E14 Gen 4 (AMD Ryzen 5 5625U | 16GB RAM | 512GB SSD | Windows 11 Pro)",
      image: "https://mudita.com.np/media/catalog/product/cache/036aa47742df3225beb764097d8b4fe8/l/e/lenovo-yoga-9i-14imh9-price-in-nepal_1.webp",
      currentPrice: 72999,
      originalPrice: 85000,
      discount: 14,
      status: 'coming-soon',
      isNew: true,
      freeShipping: true,
      rating: 4.8,
      reviewCount: 234
    },
    {
      id: 8,
      name: "HP Envy 13-ba1xxx (11th Gen Intel Core i7 | 16GB RAM | 1TB SSD | Windows 11 Home)",
      image: "https://mudita.com.np/media/catalog/product/cache/036aa47742df3225beb764097d8b4fe8/h/p/hp-spectre-x360-ultra-7-price-in-nepal.webp",
      currentPrice: 84999,
      originalPrice: 98000,
      discount: 13,
      status: 'in-stock',
      isNew: false,
      freeShipping: false,
      rating: 4.5,
      reviewCount: 178
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Latest Laptops</h1>
          <p className="text-gray-600">Discover the perfect laptop for your needs</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {laptops.map((laptop) => (
            <LaptopCard key={laptop.id} laptop={laptop} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LaptopGrid;