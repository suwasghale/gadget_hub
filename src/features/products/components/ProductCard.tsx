"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, ShoppingCart, Clock, Eye, Star } from "lucide-react";
import type { Product } from "@/features/products/types";

const ProductCard = ({ product }: { product: Product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price: number) =>
    `₹ ${price.toLocaleString("en-IN")}.00`;

  const getStatusButton = () => {
    switch (product.status) {
      case "in-stock":
        return (
          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 px-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center space-x-2 text-sm">
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
        );
      case "out-of-stock":
        return (
          <button
            disabled
            className="w-full bg-gray-400 text-white font-semibold py-2.5 px-3 rounded-lg cursor-not-allowed opacity-70 text-sm"
          >
            Out of Stock
          </button>
        );
      case "coming-soon":
        return (
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 px-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 text-sm">
            <Clock className="w-4 h-4" />
            <span>Coming Soon</span>
          </button>
        );
    }
  };

  return (
    <div
      className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-red-200 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Section */}
      <div className="relative h-56 md:h-64 bg-gray-50">
        {/* Badges */}
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-0.5 rounded-full text-[10px] font-bold z-10">
            NEW
          </div>
        )}
        {product.discount > 0 && (
          <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-0.5 rounded-full text-[10px] font-bold z-10">
            -{product.discount}%
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className={`absolute top-10 right-2 p-1.5 rounded-full transition-all duration-300 z-10 ${
            isWishlisted
              ? "bg-red-600 text-white hover:bg-red-700"
              : "bg-white text-gray-600 hover:bg-red-50 hover:text-red-600"
          } shadow hover:shadow-md`}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? "fill-current" : ""}`} />
        </button>

        {/* Quick View */}
        <button
          aria-label="quick view button"
          className={`absolute bottom-2 right-2 p-1.5 rounded-full bg-white text-gray-600 hover:bg-red-50 hover:text-red-600 shadow transition-all duration-300 z-10 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <Eye className="w-4 h-4" />
        </button>

        {/* Next.js Optimized Image */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 25vw"
          className="object-cover p-4 transition-transform duration-300 group-hover:scale-105"
          priority={product.isNew}
        />
      </div>

      {/* Product Details */}
      <div className="p-4 space-y-2">
        {/* Product Name */}
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-red-600 transition-colors duration-300">
          {product.name}
        </h3>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(product.rating!)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
            {product.reviewCount && (
              <span className="text-xs text-gray-500">
                ({product.reviewCount})
              </span>
            )}
          </div>
        )}

        {/* Pricing */}
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">
              {formatPrice(product.currentPrice)}
            </span>
            {product.originalPrice > product.currentPrice && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {product.freeShipping && (
            <span className="inline-block mt-1 text-xs text-green-600 font-medium bg-green-50 px-1 py-0.5 rounded">
              Free Shipping
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="pt-2 space-y-2">
          {getStatusButton()}
          <label className="flex items-center space-x-1 text-xs text-gray-600 hover:text-red-600 cursor-pointer">
            <input
              type="checkbox"
              className="w-3.5 h-3.5 text-red-600 border-gray-300 rounded focus:ring-red-500"
            />
            <span>Add to Compare</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
