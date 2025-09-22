"use client";

import React, { useState } from "react";
import { Heart, ShoppingCart, Clock, Eye, Star } from "lucide-react";
import type { Product } from "./types/product"; // <-- reuse your shared type

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price: number) => `₹ ${price.toLocaleString("en-IN")}.00`;

  const renderActionButton = () => {
    switch (product.status) {
      case "in-stock":
        return (
          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center space-x-2">
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
        );
      case "out-of-stock":
        return (
          <button
            disabled
            className="w-full bg-gray-400 text-white font-semibold py-3 px-4 rounded-lg cursor-not-allowed opacity-70"
          >
            Out of Stock
          </button>
        );
      case "coming-soon":
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
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-red-200 group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden bg-gray-50 p-4">
        {product.isNew && (
          <div className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
            NEW
          </div>
        )}

        {product.discount && product.discount > 0 && (
          <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
            SAVE {product.discount}%
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className={`absolute top-12 right-3 p-2 rounded-full transition-all duration-300 z-10 ${
            isWishlisted
              ? "bg-red-600 text-white hover:bg-red-700"
              : "bg-white text-gray-600 hover:bg-red-50 hover:text-red-600"
          } shadow-lg hover:shadow-xl hover:scale-110`}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? "fill-current" : ""}`} />
        </button>

        {/* Quick View */}
        <button
          aria-label="Quick View"
          className={`absolute bottom-3 right-3 p-2 rounded-full bg-white text-gray-600 hover:bg-red-50 hover:text-red-600 shadow-lg transition-all duration-300 z-10 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <Eye className="w-4 h-4" />
        </button>

        <div className="flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Details Section */}
      <div className="p-5 space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 hover:text-red-600 transition-colors duration-300 leading-tight">
          {product.name}
        </h3>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating!)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            {product.reviewCount && (
              <span className="text-sm text-gray-500">
                ({product.reviewCount})
              </span>
            )}
          </div>
        )}

        {/* Pricing */}
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-gray-900">
              {formatPrice(product.currentPrice)}
            </span>
            {product.originalPrice > product.currentPrice && (
              <span className="text-lg text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {product.freeShipping && (
            <div className="flex items-center">
              <span className="text-sm text-green-600 font-medium bg-green-50 px-2 py-1 rounded">
                Free Shipping
              </span>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="space-y-3 pt-2">
          {renderActionButton()}

          {/* Compare */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={`compare-${product.id}`}
              className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 focus:ring-2"
            />
            <label
              htmlFor={`compare-${product.id}`}
              className="text-sm text-gray-600 hover:text-red-600 cursor-pointer transition-colors duration-300"
            >
              Add to Compare
            </label>
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-red-600/5 to-transparent pointer-events-none transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default ProductCard;
