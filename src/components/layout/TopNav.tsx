"use client";
import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Menu, X, ChevronLeft, ChevronRight, Phone, MapPin, Truck, Zap, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface NavTopProps {
  cartCount?: number;
  onSearch?: (query: string) => void;
  onCartClick?: () => void;
  onAccountClick?: () => void;
  onMenuToggle?: () => void;
}

const NavTop: React.FC<NavTopProps> = ({
  cartCount = 2,
  onSearch,
  onCartClick,
  onAccountClick,
  onMenuToggle
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [countdown, setCountdown] = useState<string>('10:13:43:21');
  const [showTopBanner, setShowTopBanner] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        const time = prev.split(':').map(Number);
        
        if (time[3] > 0) time[3]--;
        else if (time[2] > 0) { time[2]--; time[3] = 59; }
        else if (time[1] > 0) { time[1]--; time[2] = 59; time[3] = 59; }
        else if (time[0] > 0) { time[0]--; time[1] = 23; time[2] = 59; time[3] = 59; }
        
        return time.map(t => String(t).padStart(2, '0')).join(':');
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSearch = (): void => {
    if (searchQuery.trim() && onSearch) {
      onSearch(searchQuery.trim());
    }
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="w-full">
      {/* Desktop Version */}
      <div className="hidden md:block">
        {/* Top Banner */}
        {showTopBanner && (
          <div className="bg-gradient-to-r from-red-600 to-red-500 text-white relative">
            <div className="max-w-7xl mx-auto px-4 py-2">
              <div className="flex items-center justify-between">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-white hover:bg-white/20 p-1"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                <div className="text-center flex-1">
                  <span className="text-sm font-medium">
                    Sign Up & Get Rs. 200 off. 
                    <span className="text-blue-200 underline cursor-pointer ml-1">
                      Click Here
                    </span>
                  </span>
                </div>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-white hover:bg-white/20 p-1"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-6 mt-2 text-xs">
                <div className="flex items-center gap-1">
                  <Phone className="h-3 w-3" />
                  <span>Call Us: 01.532.7800</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  <span>Store Location</span>
                </div>
                <div className="flex items-center gap-1">
                  <Truck className="h-3 w-3" />
                  <span>Track an order</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between gap-6">
              {/* Left side - Tagline */}
              <div className="text-red-600 text-sm font-medium">
                Dream. Dare. Inspire.
              </div>

              {/* Center - Logo + Search */}
              <div className="flex items-center gap-6 flex-1 justify-center max-w-4xl">
                {/* Logo */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">M</span>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-black">mudita</h1>
                    <p className="text-xs text-gray-500">store</p>
                  </div>
                </div>

                {/* Search */}
                <div className="flex-1 max-w-2xl">
                  <div className="relative">
                    <Input 
                      placeholder="Search entire store here..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={handleSearchKeyDown}
                      className="w-full pl-4 pr-12 py-2.5 rounded-lg border-2 border-gray-200 focus:border-red-600 bg-gray-50"
                    />
                    <Button 
                      onClick={handleSearch}
                      size="sm"
                      className="absolute right-1 top-1 h-8 w-8 rounded-md bg-gray-400 hover:bg-red-600 text-white"
                    >
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right side - Actions */}
              <div className="flex items-center gap-4">
                {/* Deal Badge */}
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-2 rounded-full flex items-center gap-2 text-sm font-bold">
                  <Zap className="h-4 w-4" />
                  <div>
                    <div>DASHAIN DEAL</div>
                    <div className="text-xs">Ends in {countdown}</div>
                  </div>
                </div>

                {/* User Account */}
                <Button 
                  variant="ghost" 
                  className="flex items-center gap-2 text-gray-700"
                  onClick={onAccountClick}
                >
                  <User className="h-5 w-5" />
                  <div className="text-left">
                    <div className="text-sm">Hello,</div>
                    <div className="text-xs">My Account</div>
                  </div>
                  <ChevronRight className="h-3 w-3" />
                </Button>

                {/* Cart */}
                <Button 
                  variant="ghost" 
                  className="relative flex items-center gap-2 text-gray-700"
                  onClick={onCartClick}
                >
                  <div className="relative">
                    <ShoppingCart className="h-5 w-5" />
                    {cartCount > 0 && (
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-red-600 text-xs">
                        {cartCount}
                      </Badge>
                    )}
                  </div>
                  <span className="text-sm">My Cart</span>
                  <ChevronRight className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Version */}
      <div className="block md:hidden">
        {/* Mobile Top Banner */}
        {showTopBanner && (
          <div className="bg-gradient-to-r from-red-600 to-red-500 text-white p-3 relative">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium flex-1 text-center">
                Free Cash on Delivery All Over Nepal! T&C*
              </span>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:bg-white/20 p-1 absolute right-2"
                onClick={() => setShowTopBanner(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Mobile Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="px-4 py-3">
            {/* Top row - Menu, Logo, Icons */}
            <div className="flex items-center justify-between mb-3">
              {/* Menu Button */}
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-2"
                onClick={onMenuToggle}
              >
                <Menu className="h-6 w-6" />
              </Button>

              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-orange-500 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-black">mudita</h1>
                  <p className="text-xs text-gray-500">store</p>
                </div>
              </div>

              {/* Right Icons */}
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="sm" className="p-2">
                  <HelpCircle className="h-6 w-6 text-gray-600" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="p-2"
                  onClick={onAccountClick}
                >
                  <User className="h-6 w-6 text-gray-600" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="relative p-2"
                  onClick={onCartClick}
                >
                  <ShoppingCart className="h-6 w-6 text-gray-600" />
                  {cartCount > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 bg-red-600 text-xs">
                      {cartCount}
                    </Badge>
                  )}
                </Button>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <div className="flex items-center bg-white border-2 border-red-600 rounded-lg overflow-hidden">
                <Search className="h-5 w-5 text-gray-400 ml-3 flex-shrink-0" />
                <Input 
                  placeholder="Search entire store here.."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearchKeyDown}
                  className="border-0 bg-transparent focus:ring-0 flex-1 py-3 px-3"
                />
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default NavTop;