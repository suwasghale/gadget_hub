"use client";
import React, { useState } from 'react';
import { 
  Star, 
  Heart, 
  Share2, 
  Truck, 
  Store, 
  Shield, 
  ChevronLeft, 
  ChevronRight,
  Plus,
  Minus,
  User
} from 'lucide-react';

interface ProductSpec {
  label: string;
  value: string;
}

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  comment: string;
  avatar?: string;
}

const ProductDetailsPage = () => {
  const [activeTab, setActiveTab] = useState<'specifications' | 'reviews'>('specifications');
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [reviewForm, setReviewForm] = useState({
    name: '',
    email: '',
    review: ''
  });

  const product = {
    name: "Acer Nitro Lite 16 Gaming 2025 (Intel Core i7 13th Gen 13620H Processor | 16GB RAM | 512GB SSD | NVIDIA GEFORCE RTX 4050 6GB Graphics | 16\" WUXGA 165Hz IPS Display | 2 Years Warranty)",
    price: 139999,
    rating: 5,
    reviewCount: 1,
    images: [
      '/api/placeholder/600/400',
      '/api/placeholder/600/400',
      '/api/placeholder/600/400',
      '/api/placeholder/600/400',
    ],
    keyFeatures: {
      processor: "13th Gen Intel Core i7-13620H (10 Cores: 6P + 4E, 16 Threads, up to 4.9GHz, 24MB Cache)",
      graphics: "NVIDIA GeForce RTX 4050 6GB GDDR6 (65W TGP)",
      memory: "16GB DDR5 4800MHz (Upgradable to 32GB)",
      storage: "512GB PCIe NVMe SSD (Supports up to 2TB NVMe Gen 4)",
      display: "16\" WUXGA (1920×1200) IPS, 165Hz, 100% sRGB, 400nits, 16:10 Aspect Ratio",
      os: "Windows 11"
    }
  };

  const specifications: ProductSpec[] = [
    { label: "Brand", value: "Acer" },
    { label: "Series", value: "Nitro" },
    { label: "Type", value: "Powerful Gaming" },
    { label: "Processor", value: "Intel Core i7" },
    { label: "Graphic", value: "NVIDIA GeForce RTX 4050" },
    { label: "Gen", value: "13th Gen" },
    { label: "Chipset", value: "Intel® integrated chipset" },
    { label: "RAM", value: "16GB" },
    { label: "Memory Slot", value: "2" },
    { label: "Max Memory", value: "32GB DDR5 RAM" },
    { label: "Storage", value: "512GB SSD" },
    { label: "Storage Support", value: "Up to 2TB NVMe Gen 4 SSD" },
    { label: "Card Reader / Optical", value: "N/A" },
    { label: "Audio & Speaker", value: "2x Speakers" },
    { label: "Camera", value: "HD Webcam (1280 x 720) with Blue Glass Lens" },
    { label: "Microphone", value: "In-Built Microphone" }
  ];

  const reviews: Review[] = [
    {
      id: 1,
      name: "Suwas Ghale",
      rating: 5,
      date: "September 20, 2025",
      comment: "I'm an AI/ML engineer, and I've been genuinely loving this laptop features. It supports my coding tasks smoothly and also runs games without lag."
    }
  ];

  const handleQuantityChange = (type: 'increment' | 'decrement') => {
    if (type === 'increment') {
      setQuantity(prev => prev + 1);
    } else if (type === 'decrement' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle review submission logic here
    console.log({ ...reviewForm, rating: userRating });
  };

  const renderStars = (rating: number, interactive = false, size = 'w-5 h-5') => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${size} cursor-pointer transition-colors duration-200 ${
              star <= rating
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300 hover:text-yellow-400'
            }`}
            onClick={interactive ? () => setUserRating(star) : undefined}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Product Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden group">
              <img
                src={product.images[activeImageIndex]}
                alt={product.name}
                className="w-full h-[500px] object-contain p-8 group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Image Navigation */}
              <button
                aria-label = "Previous Image"
                onClick={() => setActiveImageIndex(prev => 
                  prev === 0 ? product.images.length - 1 : prev - 1
                )}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                aria-label = "Next Image"
                onClick={() => setActiveImageIndex(prev => 
                  prev === product.images.length - 1 ? 0 : prev + 1
                )}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-3 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    activeImageIndex === index 
                      ? 'border-blue-600 shadow-lg' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-contain bg-white p-1"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-2">
            <div>
              <h1 className="text-lg lg:text-xl font-bold text-gray-900 leading-tight mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                  {renderStars(product.rating)}
                  <span className="text-sm text-gray-600">
                    {product.reviewCount} review{product.reviewCount !== 1 ? 's' : ''}
                  </span>
                </div>
                
                <div className="flex space-x-3">
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      isWishlisted
                        ? 'bg-red-100 text-red-600 hover:bg-red-200'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>
                  
                  <button 
                  aria-label='Share product'
                  className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all duration-300">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="text-3xl font-bold text-gray-900 mb-6">
                NRS. {product.price.toLocaleString('en-IN')}.00
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    aria-label='Decrease quantity'
                    onClick={() => handleQuantityChange('decrement')}
                    className="p-2 hover:bg-gray-100 transition-colors duration-300"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 font-semibold">{quantity}</span>
                  <button
                    aria-label='Increase quantity'
                    onClick={() => handleQuantityChange('increment')}
                    className="p-2 hover:bg-gray-100 transition-colors duration-300"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                Add to Cart
              </button>
            </div>

            {/* Delivery Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <Truck className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-900">Free Express Delivery</span>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <Store className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-green-900">In-Store Pickup</span>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h3>
              <div className="space-y-3">
                {Object.entries(product.keyFeatures).map(([key, value]) => (
                  <div key={key} className="grid grid-cols-3 gap-4 py-2 border-b border-gray-100 last:border-b-0">
                    <dt className="font-medium text-gray-900 capitalize">{key}:</dt>
                    <dd className="col-span-2 text-gray-700">{value}</dd>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Tab Headers */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('specifications')}
              className={`px-8 py-4 font-semibold transition-all duration-300 ${
                activeTab === 'specifications'
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Specifications
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-8 py-4 font-semibold transition-all duration-300 ${
                activeTab === 'reviews'
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Reviews ({product.reviewCount})
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'specifications' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-2 gap-4 py-3 px-4 rounded-lg ${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    }`}
                  >
                    <dt className="font-medium text-gray-900">{spec.label}:</dt>
                    <dd className="text-gray-700">{spec.value}</dd>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-8">
                {/* Existing Reviews */}
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-gray-600" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-900">{review.name}</h4>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          {renderStars(review.rating)}
                          <p className="mt-3 text-gray-700 leading-relaxed">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Review Form */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">
                    Leave a review for &quot;{product.name.substring(0, 50)}...&quot;
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-6">
                    Note: Don&apos;t worry! Your email address will not be published.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-3">
                        Your Rating
                      </label>
                      {renderStars(userRating, true, 'w-8 h-8')}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          value={reviewForm.name}
                          onChange={(e) => setReviewForm(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Enter your name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Your Email
                        </label>
                        <input
                          type="email"
                          value={reviewForm.email}
                          onChange={(e) => setReviewForm(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="Enter your email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Your Review
                      </label>
                      <textarea
                        value={reviewForm.review}
                        onChange={(e) => setReviewForm(prev => ({ ...prev, review: e.target.value }))}
                        placeholder="Write your review"
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                    >
                      Submit Review
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;