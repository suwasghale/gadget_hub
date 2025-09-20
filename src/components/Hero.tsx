"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselSlide {
  id: number;
  title: string;
  description: string;
  ctaText: string;
  gradient: string;
  backgroundPattern: string;
}

interface PhotoSection {
  title: string;
  description: string;
  ctaText?: string;
  overlayTitle: string;
  overlayDescription: string;
  gradient: string;
}

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  const carouselSlides: CarouselSlide[] = [
    {
      id: 1,
      title: "Summer Collection 2024",
      description: "Discover the latest trends with up to 50% off",
      ctaText: "Shop Now",

    },
    {
      id: 2,
      title: "Exclusive Deals",
      description: "Limited time offers on premium products",
      ctaText: "View Deals",

    },
    {
      id: 3,
      title: "New Arrivals",
      description: "Be the first to explore our latest collection",
      ctaText: "Explore",

    }
  ];

  const photoSections: Record<string, PhotoSection> = {
    flashSale: {
      title: "Flash Sale",
      description: "24 Hours Only",
      ctaText: "Shop Flash Sale",
      overlayTitle: "Limited Time",
      overlayDescription: "Don't miss out on these incredible deals",

    },
    premium: {
      title: "Premium Quality",
      description: "Handcrafted with care and attention to detail",
      ctaText: "Learn More",
      overlayTitle: "Craftsmanship",
      overlayDescription: "Every product tells a story",

    },
    trending: {
      title: "Trending",
      description: "Hot picks this week",
      overlayTitle: "Most Popular",
      overlayDescription: "Customer favorites",

    },
    members: {
      title: "Members Only",
      description: "Exclusive benefits",
      overlayTitle: "Join Today",
      overlayDescription: "Get special discounts",

    },
    shipping: {
      title: "Free Shipping Worldwide",
      description: "On orders over $100. No hidden fees, delivered to your door.",
      ctaText: "Start Shopping",
      overlayTitle: "Global Delivery",
      overlayDescription: "We ship to over 100 countries",

    }
  };

  const changeSlide = useCallback((direction: number) => {
    setCurrentSlide(prev => {
      const newSlide = prev + direction;
      if (newSlide < 0) return carouselSlides.length - 1;
      if (newSlide >= carouselSlides.length) return 0;
      return newSlide;
    });
  }, [carouselSlides.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [changeSlide]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePosition({ x: 0.5, y: 0.5 });
  }, []);

  // const parallaxStyle = {
  //   transform: `perspective(1000px) rotateY(${(mousePosition.x - 0.5) * 2}deg) rotateX(${(mousePosition.y - 0.5) * -2}deg)`,
  //   transition: 'transform 0.3s ease-out'
  // };

  return (
    <div className="min-h-screen ">
      <div 
        className="max-w-7xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-5 shadow-2xl"
        // style={parallaxStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:grid-rows-3 gap-5 h-[900px]">
          {/* Carousel Section (Row 1, Cols 1-2) */}
          <div className="col-span-2 row-span-1 relative overflow-hidden rounded-2xl group">
            <div 
              className="flex h-full transition-transform duration-500 ease-in-out"
              // style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carouselSlides.map((slide, index) => (
                <div 
                  key={slide.id}
                  className={`min-w-full h-full bg-gradient-to-r ${slide.gradient} flex items-center justify-center relative`}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="text-center z-10 p-8 bg-black/40 rounded-xl backdrop-blur-sm animate-fade-in">
                    <h2 className="text-4xl font-bold text-white mb-4 animate-slide-down">
                      {slide.title}
                    </h2>
                    <p className="text-xl text-white/90 mb-6 animate-slide-up">
                      {slide.description}
                    </p>
                    <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300 animate-fade-in-delayed">
                      {slide.ctaText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button aria-label='previous slide'
              onClick={() => changeSlide(-1)}
              className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 z-20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              aria-label='next slide'
              onClick={() => changeSlide(1)}
              className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 z-20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Indicators */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-20">
              {carouselSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'w-8 bg-white' 
                      : 'w-3 bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Flash Sale Section (Row 1, Col 3) */}
          <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${photoSections.flashSale.gradient} group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl`}>
            <div className="h-full flex flex-col items-center justify-center text-center text-white p-8 relative z-10">
              <h2 className="text-3xl font-bold mb-3">{photoSections.flashSale.title}</h2>
              <p className="text-lg mb-6 opacity-90">{photoSections.flashSale.description}</p>
              <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300">
                {photoSections.flashSale.ctaText}
              </button>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-lg font-semibold mb-1">{photoSections.flashSale.overlayTitle}</h3>
              <p className="text-sm opacity-90">{photoSections.flashSale.overlayDescription}</p>
            </div>
          </div>

          {/* Premium Quality Section (Rows 2-3, Col 1) */}
          <div className={`row-span-2 relative rounded-2xl overflow-hidden bg-gradient-to-br ${photoSections.premium.gradient} group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl`}>
            <div className="h-full flex flex-col items-center justify-center text-center text-white p-10 relative z-10">
              <h2 className="text-4xl font-bold mb-4">{photoSections.premium.title}</h2>
              <p className="text-lg mb-8 opacity-90 max-w-md leading-relaxed">{photoSections.premium.description}</p>
              <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300">
                {photoSections.premium.ctaText}
              </button>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-lg font-semibold mb-1">{photoSections.premium.overlayTitle}</h3>
              <p className="text-sm opacity-90">{photoSections.premium.overlayDescription}</p>
            </div>
          </div>

          {/* Trending Section (Row 2, Col 2) */}
          <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${photoSections.trending.gradient} group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl`}>
            <div className="h-full flex flex-col items-center justify-center text-center text-white p-8 relative z-10">
              <h2 className="text-2xl font-bold mb-3">{photoSections.trending.title}</h2>
              <p className="text-base opacity-90">{photoSections.trending.description}</p>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-lg font-semibold mb-1">{photoSections.trending.overlayTitle}</h3>
              <p className="text-sm opacity-90">{photoSections.trending.overlayDescription}</p>
            </div>
          </div>

          {/* Members Only Section (Row 2, Col 3) */}
          <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${photoSections.members.gradient} group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl`}>
            <div className="h-full flex flex-col items-center justify-center text-center text-white p-8 relative z-10">
              <h2 className="text-2xl font-bold mb-3">{photoSections.members.title}</h2>
              <p className="text-base opacity-90">{photoSections.members.description}</p>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-lg font-semibold mb-1">{photoSections.members.overlayTitle}</h3>
              <p className="text-sm opacity-90">{photoSections.members.overlayDescription}</p>
            </div>
          </div>

          {/* Free Shipping Section (Row 3, Cols 2-3) */}
          <div className={`col-span-2 relative rounded-2xl overflow-hidden bg-gradient-to-br ${photoSections.shipping.gradient} group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl`}>
            <div className="h-full flex flex-col items-center justify-center text-center text-white p-10 relative z-10">
              <h2 className="text-3xl font-bold mb-4">{photoSections.shipping.title}</h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl leading-relaxed">{photoSections.shipping.description}</p>
              <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300">
                {photoSections.shipping.ctaText}
              </button>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-lg font-semibold mb-1">{photoSections.shipping.overlayTitle}</h3>
              <p className="text-sm opacity-90">{photoSections.shipping.overlayDescription}</p>
            </div>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-5 space-y-0">
          {/* Carousel - Full width */}
          <div className="col-span-2 h-64 relative overflow-hidden rounded-2xl group">
            <div 
              className="flex h-full transition-transform duration-500 ease-in-out"
              // style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carouselSlides.map((slide) => (
                <div 
                  key={slide.id}
                  className={`min-w-full h-full bg-gradient-to-r ${slide.gradient} flex items-center justify-center relative`}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="text-center z-10 p-6 bg-black/40 rounded-xl backdrop-blur-sm">
                    <h2 className="text-3xl font-bold text-white mb-3">{slide.title}</h2>
                    <p className="text-lg text-white/90 mb-4">{slide.description}</p>
                    <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300">
                      {slide.ctaText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button aria-label='previous slide' onClick={() => changeSlide(-1)} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-20">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button aria-label='next slide' onClick={() => changeSlide(1)} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-20">
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {carouselSlides.map((_, index) => (
                <button key={index} onClick={() => goToSlide(index)} className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-6 bg-white' : 'w-2 bg-white/50'}`} />
              ))}
            </div>
          </div>

          {/* Other sections */}
          <div className={`col-span-2 h-48 relative rounded-2xl overflow-hidden bg-gradient-to-br ${photoSections.flashSale.gradient} group cursor-pointer transition-all duration-300 hover:scale-[1.02]`}>
            <div className="h-full flex items-center justify-center text-center text-white p-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">{photoSections.flashSale.title}</h2>
                <p className="text-base mb-4">{photoSections.flashSale.description}</p>
                <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-full font-semibold">{photoSections.flashSale.ctaText}</button>
              </div>
            </div>
          </div>

          <div className={`row-span-2 h-96 relative rounded-2xl overflow-hidden bg-gradient-to-br ${photoSections.premium.gradient} group cursor-pointer transition-all duration-300 hover:scale-[1.02]`}>
            <div className="h-full flex items-center justify-center text-center text-white p-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">{photoSections.premium.title}</h2>
                <p className="text-lg mb-6">{photoSections.premium.description}</p>
                <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-full font-semibold">{photoSections.premium.ctaText}</button>
              </div>
            </div>
          </div>

          <div className={`h-48 relative rounded-2xl overflow-hidden bg-gradient-to-br ${photoSections.trending.gradient} group cursor-pointer transition-all duration-300 hover:scale-[1.02]`}>
            <div className="h-full flex items-center justify-center text-center text-white p-6">
              <div>
                <h2 className="text-xl font-bold mb-2">{photoSections.trending.title}</h2>
                <p className="text-base">{photoSections.trending.description}</p>
              </div>
            </div>
          </div>

          <div className={`h-48 relative rounded-2xl overflow-hidden bg-gradient-to-br ${photoSections.members.gradient} group cursor-pointer transition-all duration-300 hover:scale-[1.02]`}>
            <div className="h-full flex items-center justify-center text-center text-white p-6">
              <div>
                <h2 className="text-xl font-bold mb-2">{photoSections.members.title}</h2>
                <p className="text-base">{photoSections.members.description}</p>
              </div>
            </div>
          </div>

          <div className={`col-span-2 h-48 relative rounded-2xl overflow-hidden bg-gradient-to-br ${photoSections.shipping.gradient} group cursor-pointer transition-all duration-300 hover:scale-[1.02]`}>
            <div className="h-full flex items-center justify-center text-center text-white p-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">{photoSections.shipping.title}</h2>
                <p className="text-lg mb-4">{photoSections.shipping.description}</p>
                <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-full font-semibold">{photoSections.shipping.ctaText}</button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-5">
          {/* Carousel */}
          <div className="h-64 relative overflow-hidden rounded-2xl group">
            <div 
              className="flex h-full transition-transform duration-500 ease-in-out"
              // style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carouselSlides.map((slide) => (
                <div 
                  key={slide.id}
                  className={`min-w-full h-full bg-gradient-to-r ${slide.gradient} flex items-center justify-center relative`}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="text-center z-10 p-4 bg-black/40 rounded-xl backdrop-blur-sm">
                    <h2 className="text-2xl font-bold text-white mb-2">{slide.title}</h2>
                    <p className="text-base text-white/90 mb-4">{slide.description}</p>
                    <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-full text-sm">
                      {slide.ctaText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => changeSlide(-1)} aria-label='previous slide' className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 text-white p-2 rounded-full">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={() => changeSlide(1)} aria-label='next slide' className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 text-white p-2 rounded-full">
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
              {carouselSlides.map((_, index) => (
                <button key={index} onClick={() => goToSlide(index)} className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-4 bg-white' : 'w-2 bg-white/50'}`} />
              ))}
            </div>
          </div>

          {/* Mobile sections */}
          {Object.entries(photoSections).map(([key, section]) => (
            <div key={key} className={`h-48 relative rounded-2xl overflow-hidden bg-gradient-to-br ${section.gradient} group cursor-pointer`}>
              <div className="h-full flex items-center justify-center text-center text-white p-6">
                <div>
                  <h2 className="text-xl font-bold mb-2">{section.title}</h2>
                  <p className="text-sm mb-4 opacity-90">{section.description}</p>
                  {section.ctaText && (
                    <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-full font-semibold text-sm">
                      {section.ctaText}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-delayed {
          animation: fade-in 1s ease-out 0.3s both;
        }
        .animate-slide-down {
          animation: slide-down 0.8s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.2s both;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;