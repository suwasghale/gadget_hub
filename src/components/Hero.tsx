"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Summer Collection 2024",
      desc: "Discover the latest trends with up to 50% off",
      btn: "Shop Now",
      bg: `linear-gradient(135deg, rgba(102,126,234,0.8), rgba(118,75,162,0.8)), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'><rect fill='%23667eea' width='1200' height='600'/><path fill='%23764ba2' d='M0 300L50 325L100 300L150 275L200 300L250 325L300 300L350 275L400 300L450 325L500 300L550 275L600 300L650 325L700 300L750 275L800 300L850 325L900 300L950 275L1000 300L1050 325L1100 300L1150 275L1200 300V600H0V300Z'/></svg>")`,
    },
    {
      title: "Exclusive Deals",
      desc: "Limited time offers on premium products",
      btn: "View Deals",
      bg: `linear-gradient(135deg, rgba(240,147,251,0.8), rgba(245,87,108,0.8)), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'><rect fill='%23f093fb' width='1200' height='600'/><circle fill='%23f5576c' cx='600' cy='300' r='200'/></svg>")`,
    },
    {
      title: "New Arrivals",
      desc: "Be the first to explore our latest collection",
      btn: "Explore",
      bg: `linear-gradient(135deg, rgba(79,172,254,0.8), rgba(0,242,254,0.8)), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'><rect fill='%234facfe' width='1200' height='600'/><rect fill='%2300f2fe' x='300' y='150' width='600' height='300'/></svg>")`,
    },
  ];

  const heroRef = useRef<HTMLDivElement>(null);

  const changeSlide = (dir: number) => {
    setCurrentSlide((prev) => (prev + dir + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => changeSlide(1), 5000);
    return () => clearInterval(interval);
  }, []);

  // Parallax effect
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      heroRef.current.style.transform = `perspective(1000px) rotateY(${(x - 0.5) * 2}deg) rotateX(${(y - 0.5) * -2}deg)`;
    };

    const reset = () => {
      if (heroRef.current)
        heroRef.current.style.transform = "perspective(1000px) rotateY(0) rotateX(0)";
    };

    document.addEventListener("mousemove", handleMove);
    heroRef.current?.addEventListener("mouseleave", reset);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      heroRef.current?.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 to-purple-700 p-5 font-sans">
      <div
        ref={heroRef}
        className="max-w-[1400px] mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-5 shadow-2xl"
      >
        <div className="grid grid-cols-3 grid-rows-[repeat(3,280px)] gap-5 lg:h-[900px] md:grid-cols-2 md:grid-rows-[repeat(4,250px)] md:auto-rows-[250px] sm:grid-cols-1 sm:grid-rows-[repeat(6,250px)]">
          {/* Carousel */}
          <div className="relative col-span-2 row-span-1 rounded-xl overflow-hidden bg-gradient-to-br from-indigo-400 to-purple-700">
            <div
              className="flex h-full transition-transform duration-500"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((s, i) => (
                <div
                  key={i}
                  className="min-w-full h-full flex items-center justify-center bg-cover bg-center relative text-white"
                  style={{ backgroundImage: s.bg }}
                >
                  <div className="text-center z-10 p-8 bg-black/40 rounded-lg backdrop-blur-sm animate-fadeIn">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slideInDown">
                      {s.title}
                    </h2>
                    <p className="text-lg mb-6 animate-slideInUp">{s.desc}</p>
                    <a
                      href="#"
                      className="inline-block px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-pink-400 to-red-400 shadow-md hover:-translate-y-1 hover:shadow-xl transition"
                    >
                      {s.btn}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            {/* Navigation */}
            <button
              onClick={() => changeSlide(-1)}
              className="absolute top-1/2 left-5 -translate-y-1/2 bg-white/20 text-white p-4 rounded-full hover:bg-white/30"
            >
              ❮
            </button>
            <button
              onClick={() => changeSlide(1)}
              className="absolute top-1/2 right-5 -translate-y-1/2 bg-white/20 text-white p-4 rounded-full hover:bg-white/30"
            >
              ❯
            </button>
            {/* Indicators */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, i) => (
                <span
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`cursor-pointer transition-all h-3 rounded-full ${
                    currentSlide === i
                      ? "bg-white w-8"
                      : "bg-white/50 w-3"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Flash Sale */}
          <div className="photo-section relative rounded-xl overflow-hidden cursor-pointer col-span-1 row-span-1 bg-gradient-to-br from-pink-400 via-yellow-300 to-yellow-200 flex flex-col items-center justify-center text-center text-white p-8 transition-transform hover:scale-[1.02] hover:shadow-2xl">
            <h2 className="text-2xl mb-2">Flash Sale</h2>
            <p className="mb-4">24 Hours Only</p>
            <a href="#" className="cta-button inline-block px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-pink-400 to-red-400 shadow-md hover:-translate-y-1 hover:shadow-xl transition">Shop Flash Sale</a>
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition">
              <h3 className="text-lg">Limited Time</h3>
              <p className="text-sm opacity-80">Do not miss out on these incredible deals</p>
            </div>
          </div>

          {/* Premium Quality */}
          <div className="photo-section relative rounded-xl overflow-hidden col-span-1 row-span-2 bg-gradient-to-br from-teal-200 to-pink-200 flex flex-col items-center justify-center text-center text-white p-10">
            <h2 className="text-3xl mb-4">Premium Quality</h2>
            <p className="max-w-sm mb-6">Handcrafted with care and attention to detail</p>
            <a href="#" className="cta-button inline-block px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-pink-400 to-red-400 shadow-md hover:-translate-y-1 hover:shadow-xl transition">Learn More</a>
          </div>

          {/* Trending */}
          <div className="photo-section relative rounded-xl overflow-hidden col-span-1 bg-gradient-to-br from-orange-100 to-orange-300 flex flex-col items-center justify-center text-center text-white p-8">
            <h2 className="text-2xl mb-2">Trending</h2>
            <p>Hot picks this week</p>
          </div>

          {/* Members Only */}
          <div className="photo-section relative rounded-xl overflow-hidden col-span-1 bg-gradient-to-br from-pink-300 to-pink-100 flex flex-col items-center justify-center text-center text-white p-8">
            <h2 className="text-2xl mb-2">Members Only</h2>
            <p>Exclusive benefits</p>
          </div>

          {/* Free Shipping */}
          <div className="photo-section relative rounded-xl overflow-hidden col-span-2 bg-gradient-to-br from-blue-400 to-cyan-400 flex flex-col items-center justify-center text-center text-white p-10">
            <h2 className="text-3xl mb-4">Free Shipping Worldwide</h2>
            <p className="max-w-md mb-6">On orders over $100. No hidden fees, delivered to your door.</p>
            <a href="#" className="cta-button inline-block px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-pink-400 to-red-400 shadow-md hover:-translate-y-1 hover:shadow-xl transition">Start Shopping</a>
          </div>
        </div>
      </div>
    </div>
  );
}