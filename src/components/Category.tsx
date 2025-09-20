"use client";
import React from 'react';

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  count?: number;
}

const Category: React.FC = () => {
  const categories: Category[] = [
    {
      id: 'mobiles',
      name: 'Mobiles',
      count: 2500,
      icon: (
        <svg className="w-12 h-12 transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="2" width="14" height="20" rx="3" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
          <circle cx="12" cy="18" r="1" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
        </svg>
      )
    },
    {
      id: 'ultrabook',
      name: 'Ultrabook',
      count: 850,
      icon: (
        <svg className="w-12 h-12 transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="6" width="20" height="12" rx="2" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
          <rect x="4" y="8" width="16" height="6" rx="1" className="stroke-current stroke-1 fill-none group-hover:fill-current transition-all duration-300"/>
          <rect x="2" y="16" width="20" height="2" rx="1" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
        </svg>
      )
    },
    {
      id: 'branded-desktops',
      name: 'Branded Desktops',
      count: 1200,
      icon: (
        <svg className="w-12 h-12 transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="18" height="12" rx="2" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
          <rect x="5" y="6" width="14" height="8" rx="1" className="stroke-current stroke-1 fill-none group-hover:fill-current transition-all duration-300"/>
          <path d="M12 16v2" className="stroke-current stroke-2"/>
          <path d="M8 20h8" className="stroke-current stroke-2"/>
        </svg>
      )
    },
    {
      id: 'tablets',
      name: 'Tablets',
      count: 950,
      icon: (
        <svg className="w-12 h-12 transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="2" width="16" height="20" rx="3" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
          <rect x="6" y="4" width="12" height="14" rx="1" className="stroke-current stroke-1 fill-none group-hover:fill-current transition-all duration-300"/>
          <circle cx="12" cy="20" r="1" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
        </svg>
      )
    },
    {
      id: 'monitors',
      name: 'Monitors',
      count: 650,
      icon: (
        <svg className="w-12 h-12 transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="3" width="20" height="14" rx="2" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
          <rect x="4" y="5" width="16" height="10" rx="1" className="stroke-current stroke-1 fill-none group-hover:fill-current transition-all duration-300"/>
          <path d="M12 17v2" className="stroke-current stroke-2"/>
          <path d="M8 21h8" className="stroke-current stroke-2"/>
        </svg>
      )
    },
    {
      id: 'camera',
      name: 'Camera',
      count: 420,
      icon: (
        <svg className="w-12 h-12 transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="7" width="20" height="12" rx="3" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
          <circle cx="12" cy="13" r="3" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
          <rect x="8" y="5" width="8" height="2" rx="1" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
          <circle cx="17" cy="10" r="1" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
        </svg>
      )
    },
    {
      id: 'graphics-card',
      name: 'Graphics Card',
      count: 380,
      icon: (
        <svg className="w-12 h-12 transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="8" width="20" height="8" rx="2" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
          <rect x="4" y="10" width="4" height="4" rx="1" className="stroke-current stroke-1 fill-none group-hover:fill-current transition-all duration-300"/>
          <rect x="10" y="10" width="4" height="4" rx="1" className="stroke-current stroke-1 fill-none group-hover:fill-current transition-all duration-300"/>
          <rect x="16" y="10" width="4" height="4" rx="1" className="stroke-current stroke-1 fill-none group-hover:fill-current transition-all duration-300"/>
          <rect x="4" y="6" width="2" height="2" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
        </svg>
      )
    },
    {
      id: 'projectors',
      name: 'Projectors',
      count: 180,
      icon: (
        <svg className="w-12 h-12 transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="8" width="12" height="8" rx="2" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
          <circle cx="9" cy="12" r="2" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
          <path d="M15 10l6-2v8l-6-2" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
          <circle cx="6" cy="10" r="0.5" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
        </svg>
      )
    },
    {
      id: 'keyboard',
      name: 'Keyboard',
      count: 720,
      icon: (
        <svg className="w-12 h-12 transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="8" width="20" height="8" rx="2" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
          <rect x="4" y="10" width="2" height="1.5" rx="0.5" className="stroke-current stroke-1 fill-none group-hover:fill-current transition-all duration-300"/>
          <rect x="7" y="10" width="2" height="1.5" rx="0.5" className="stroke-current stroke-1 fill-none group-hover:fill-current transition-all duration-300"/>
          <rect x="10" y="10" width="2" height="1.5" rx="0.5" className="stroke-current stroke-1 fill-none group-hover:fill-current transition-all duration-300"/>
          <rect x="13" y="10" width="2" height="1.5" rx="0.5" className="stroke-current stroke-1 fill-none group-hover:fill-current transition-all duration-300"/>
          <rect x="16" y="10" width="2" height="1.5" rx="0.5" className="stroke-current stroke-1 fill-none group-hover:fill-current transition-all duration-300"/>
          <rect x="6" y="13" width="8" height="1.5" rx="0.5" className="stroke-current stroke-1 fill-none group-hover:fill-current transition-all duration-300"/>
        </svg>
      )
    },
    {
      id: 'mouse',
      name: 'Mouse',
      count: 540,
      icon: (
        <svg className="w-12 h-12 transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 4h8c2.2 0 4 1.8 4 4v8c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4V8c0-2.2 1.8-4 4-4z" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
          <path d="M12 4v6" className="stroke-current stroke-2"/>
          <circle cx="12" cy="7" r="1" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
        </svg>
      )
    },
    {
      id: 'headphones',
      name: 'Headphones',
      count: 890,
      icon: (
        <svg className="w-12 h-12 transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" className="stroke-current stroke-2 fill-none"/>
          <rect x="21" y="16" width="3" height="5" rx="1.5" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
          <rect x="0" y="16" width="3" height="5" rx="1.5" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
          <path d="M12 4v2" className="stroke-current stroke-2"/>
        </svg>
      )
    },
    {
      id: 'speakers',
      name: 'Speakers',
      count: 340,
      icon: (
        <svg className="w-12 h-12 transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="2" width="16" height="20" rx="2" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
          <circle cx="12" cy="8" r="2" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
          <circle cx="12" cy="16" r="4" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
          <circle cx="12" cy="16" r="2" className="stroke-current stroke-1 fill-none group-hover:fill-current transition-all duration-300"/>
        </svg>
      )
    },
    {
      id: 'ssd',
      name: 'SSD',
      count: 620,
      icon: (
        <svg className="w-12 h-12 transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="8" width="18" height="8" rx="2" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
          <rect x="5" y="10" width="3" height="4" rx="0.5" className="stroke-current stroke-1 fill-none group-hover:fill-current transition-all duration-300"/>
          <rect x="10" y="11" width="8" height="0.5" className="stroke-current stroke-1 fill-none group-hover:fill-current transition-all duration-300"/>
          <rect x="10" y="12.5" width="6" height="0.5" className="stroke-current stroke-1 fill-none group-hover:fill-current transition-all duration-300"/>
          <rect x="17" y="10" width="2" height="1" className="stroke-current stroke-1 fill-none group-hover:fill-current transition-all duration-300"/>
        </svg>
      )
    },
    {
      id: 'external-storage',
      name: 'External Storage',
      count: 450,
      icon: (
        <svg className="w-12 h-12 transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="6" width="16" height="12" rx="2" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
          <rect x="6" y="8" width="2" height="8" rx="1" className="stroke-current stroke-1 fill-none group-hover:fill-current transition-all duration-300"/>
          <rect x="10" y="10" width="8" height="1" className="stroke-current stroke-1 fill-none group-hover:fill-current transition-all duration-300"/>
          <rect x="10" y="12" width="6" height="1" className="stroke-current stroke-1 fill-none group-hover:fill-current transition-all duration-300"/>
          <rect x="10" y="14" width="4" height="1" className="stroke-current stroke-1 fill-none group-hover:fill-current transition-all duration-300"/>
        </svg>
      )
    },
    {
      id: 'gaming-chairs',
      name: 'Gaming Chairs',
      count: 280,
      icon: (
        <svg className="w-12 h-12 transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 4h12c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2h-2l-1 4h-6l-1-4H6c-1.1 0-2-0.9-2-2V6c0-1.1 0.9-2 2-2z" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
          <path d="M6 14v4" className="stroke-current stroke-2"/>
          <path d="M18 14v4" className="stroke-current stroke-2"/>
          <circle cx="6" cy="20" r="1" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
          <circle cx="18" cy="20" r="1" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
        </svg>
      )
    },
    {
      id: 'hubs-dock',
      name: 'Hubs & Dock',
      count: 230,
      icon: (
        <svg className="w-12 h-12 transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="10" width="20" height="6" rx="2" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
          <rect x="5" y="12" width="2" height="2" rx="0.5" className="stroke-current stroke-1 fill-none group-hover:fill-current transition-all duration-300"/>
          <rect x="9" y="12" width="2" height="2" rx="0.5" className="stroke-current stroke-1 fill-none group-hover:fill-current transition-all duration-300"/>
          <rect x="13" y="12" width="2" height="2" rx="0.5" className="stroke-current stroke-1 fill-none group-hover:fill-current transition-all duration-300"/>
          <rect x="17" y="12" width="2" height="2" rx="0.5" className="stroke-current stroke-1 fill-none group-hover:fill-current transition-all duration-300"/>
          <path d="M12 8v2" className="stroke-current stroke-2"/>
        </svg>
      )
    },
    {
      id: 'printers',
      name: 'Printers',
      count: 310,
      icon: (
        <svg className="w-12 h-12 transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="8" width="16" height="8" rx="2" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
          <rect x="6" y="4" width="12" height="4" rx="1" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
          <rect x="6" y="16" width="12" height="4" rx="1" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
          <circle cx="8" cy="12" r="1" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
          <rect x="12" y="11" width="4" height="2" rx="0.5" className="stroke-current stroke-1 fill-none group-hover:fill-current transition-all duration-300"/>
        </svg>
      )
    },
    {
      id: 'gaming-console',
      name: 'Gaming Console',
      count: 190,
      icon: (
        <svg className="w-12 h-12 transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="9" width="20" height="6" rx="3" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
          <circle cx="7" cy="12" r="1.5" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
          <circle cx="17" cy="11" r="0.8" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
          <circle cx="19" cy="13" r="0.8" className="stroke-current stroke-2 fill-none group-hover:fill-current transition-all duration-300"/>
          <path d="M5 12h4" className="stroke-current stroke-2"/>
          <path d="M7 10v4" className="stroke-current stroke-2"/>
        </svg>
      )
    }
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-9 gap-4 lg:gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:scale-105"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                {/* Icon Container */}
                <div className="relative">
                  <div className="w-16 h-16 flex items-center justify-center text-gray-400 group-hover:text-blue-600 transition-colors duration-300">
                    {category.icon}
                  </div>
                  {/* Animated Ring on Hover */}
                  <div className="absolute inset-0 rounded-full border-2 border-blue-600 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500"></div>
                </div>

                {/* Category Name */}
                <div className="space-y-1">
                  <h3 className="font-semibold text-gray-900 text-sm lg:text-base group-hover:text-blue-900 transition-colors duration-300">
                    {category.name}
                  </h3>
                  
                  {/* Product Count */}
                  {category.count && (
                    <p className="text-xs text-gray-500 group-hover:text-blue-600 transition-colors duration-300">
                      {category.count.toLocaleString()} items
                    </p>
                  )}
                </div>

                {/* Hover Arrow */}
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>

              {/* Subtle Border Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <span>View All Categories</span>
            <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Category;