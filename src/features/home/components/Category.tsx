"use client";
import React from "react";
import {
  Phone,
  Laptop,
  Monitor,
  Tablet,
  Camera,
  Cpu,
  Tv,
  Keyboard,
  MousePointer as Mouse,
  Headphones,
  Speaker,
  HardDrive as SSD,
  Usb,
  Car,
  Printer,
  Glasses
} from "lucide-react";

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  count?: number;
}

const Category: React.FC = () => {
  const categories: Category[] = [
    { id: "mobiles", name: "Mobiles", count: 2500, icon: <Phone /> },
    { id: "ultrabook", name: "Ultrabook", count: 850, icon: <Laptop /> },
    { id: "branded-desktops", name: "Branded Desktops", count: 1200, icon: <Cpu /> },
    { id: "tablets", name: "Tablets", count: 950, icon: <Tablet /> },
    { id: "monitors", name: "Monitors", count: 650, icon: <Monitor /> },
    { id: "camera", name: "Camera", count: 420, icon: <Camera /> },
    { id: "graphics-card", name: "Graphics Card", count: 380, icon: <Cpu /> },
    { id: "projectors", name: "Projectors", count: 180, icon: <Tv /> },
    { id: "keyboard", name: "Keyboard", count: 720, icon: <Keyboard /> },
    { id: "mouse", name: "Mouse", count: 540, icon: <Mouse /> },
    { id: "headphones", name: "Headphones", count: 890, icon: <Headphones /> },
    { id: "speakers", name: "Speakers", count: 340, icon: <Speaker /> },
    { id: "ssd", name: "SSD", count: 620, icon: <SSD /> },
    { id: "external-storage", name: "External Storage", count: 450, icon: <Usb /> },
    { id: "gaming-chairs", name: "Gaming Chairs", count: 280, icon: <Car /> },
    { id: "printers", name: "Printers", count: 310, icon: <Printer /> },
    { id: "gaming-console", name: "Gaming Console", count: 190, icon: <Glasses /> }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7l2 2-2 2m2 8l-2 2 2 2M9 7h1a3 3 0 013 3v2.5M9 7H8a3 3 0 00-3 3v2.5m8 0V17a3 3 0 01-3 3H8a3 3 0 01-3-3v-2.5" />
            </svg>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our curated collection of premium tech products across multiple categories. 
            From cutting-edge mobile devices to professional gaming setups.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative bg-white rounded-2xl p-6 transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:scale-105"
            >
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                {/* Icon Container */}
                <div className="relative">
                  <div className="w-16 h-16 flex items-center justify-center text-gray-400 group-hover:text-red-600 transition-colors duration-300">
                    {React.cloneElement(category.icon as React.ReactElement, {
                      className: "w-12 h-12 transition-all duration-300 group-hover:scale-110"
                    })}
                  </div>
                </div>

                {/* Category Name */}
                <div className="space-y-1">
                  <h3 className="font-semibold text-gray-900 text-sm lg:text-base group-hover:text-red-900 transition-colors duration-300">
                    {category.name}
                  </h3>
                  {category.count && (
                    <p className="text-xs text-gray-500 group-hover:text-red-600 transition-colors duration-300">
                      {category.count.toLocaleString()} items
                    </p>
                  )}
                </div>

                {/* Hover Arrow */}
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
