"use client";

import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, ChevronDown, ChevronLeft, ChevronRight, X, Plus, Minus, Package, Heart, Phone, MapPin, Truck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Navbar from './Navbar';

const Header = () => {
  const [cartItems, setCartItems] = useState([
    { id: 'item1', name: 'MacBook Pro 14" M3', price: 289999, quantity: 1, image: '💻' },
    { id: 'item2', name: 'Magic Mouse 2', price: 12999, quantity: 1, image: '🖱️' }
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [countdown, setCountdown] = useState('10:23:49:33');
  const [isCartOpen, setIsCartOpen] = useState(false);

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

  const updateQuantity = (itemId, change) => {
    setCartItems(prev => prev.map(item => 
      item.id === itemId 
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    ));
  };

  const removeItem = (itemId) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  const getTotalItems = () => cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const getTotalPrice = () => cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleSearch = (e) => {
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
    }
  };

  const navItems = [
    'LAPTOPS', 'APPLE', 'MONITORS', 'DESKTOP & PCS', 
    'GAMER\'S ZONE', 'ACCESSORIES', 'HOME & OFFICE SOLUTIONS'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-white">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="text-center flex-1">
              <span className="text-sm font-medium">Free Cash on Delivery All Over Nepal! T&C*</span>
            </div>
            
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
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

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">GH</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-red-600">Gadget Hub</h1>
                <p className="text-xs text-gray-500 tracking-wider">Dream. Dare. Inspire.</p>
              </div>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Input 
                  placeholder="Search entire store here..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-12 py-3 rounded-full border-2 focus:border-red-600"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSearch(e);
                    }
                  }}
                />
                <Button 
                  onClick={handleSearch}
                  size="sm"
                  className="absolute right-1 top-1 h-10 w-10 rounded-full bg-red-600 hover:bg-red-700"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center gap-4">
              {/* Deal Badge */}
              <Card className="bg-gradient-to-r from-yellow-400 to-yellow-300 border-0">
                <CardContent className="p-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-800">
                    <Zap className="h-4 w-4" />
                    <div>
                      <div>DASHAIN DEAL</div>
                      <div className="text-xs">Ends in {countdown}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <div className="text-left">
                      <div className="text-sm">Hello,</div>
                      <div className="text-xs text-gray-600">My Account</div>
                    </div>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64">
                  <div className="p-3 font-semibold border-b">Sign In to your Account</div>
                  <DropdownMenuItem>
                    <Button className="w-full bg-red-600 hover:bg-red-700">Sign In</Button>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Button variant="ghost" className="w-full">Sign Up a Mudita Account</Button>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Package className="h-4 w-4 mr-2" />
                    My Orders
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Heart className="h-4 w-4 mr-2" />
                    My Wish List
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Cart */}
              <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" className="relative flex items-center gap-2">
                    <div className="relative">
                      <ShoppingCart className="h-5 w-5" />
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-red-600">
                        {getTotalItems()}
                      </Badge>
                    </div>
                    <div className="text-left">
                      <div className="text-sm">My Cart</div>
                      <div className="text-xs text-gray-600">▼</div>
                    </div>
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-full sm:max-w-md">
                  <SheetHeader>
                    <SheetTitle className="flex items-center justify-between">
                      Shopping Cart ({getTotalItems()} items)
                    </SheetTitle>
                  </SheetHeader>
                  
                  <div className="flex flex-col h-full">
                    <div className="flex-1 overflow-y-auto py-4">
                      {cartItems.length === 0 ? (
                        <div className="text-center text-gray-500 py-8">
                          <ShoppingCart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                          <p>Your cart is empty</p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {cartItems.map((item) => (
                            <Card key={item.id}>
                              <CardContent className="p-4">
                                <div className="flex gap-4">
                                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                                    {item.image}
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-medium">{item.name}</h4>
                                    <p className="text-red-600 font-bold">NPR {item.price.toLocaleString()}</p>
                                    <div className="flex items-center gap-2 mt-2">
                                      <Button 
                                        size="sm" 
                                        variant="outline"
                                        onClick={() => updateQuantity(item.id, -1)}
                                      >
                                        <Minus className="h-3 w-3" />
                                      </Button>
                                      <span className="w-8 text-center">{item.quantity}</span>
                                      <Button 
                                        size="sm" 
                                        variant="outline"
                                        onClick={() => updateQuantity(item.id, 1)}
                                      >
                                        <Plus className="h-3 w-3" />
                                      </Button>
                                      <Button 
                                        size="sm" 
                                        variant="ghost"
                                        onClick={() => removeItem(item.id)}
                                        className="ml-auto text-red-600"
                                      >
                                        <X className="h-3 w-3" />
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {cartItems.length > 0 && (
                      <Card className="mt-4">
                        <CardContent className="p-4">
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span>Subtotal:</span>
                              <span>NPR {getTotalPrice().toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Delivery:</span>
                              <span className="text-green-600">FREE</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between font-bold text-lg">
                              <span>Total:</span>
                              <span>NPR {getTotalPrice().toLocaleString()}</span>
                            </div>
                            <Button className="w-full mt-4 bg-red-600 hover:bg-red-700">
                              Proceed to Checkout
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <div className="bg-red-600 text-white">
        <Navbar/>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-900 to-orange-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-6xl lg:text-8xl font-bold mb-4 drop-shadow-lg">
                LAPTOPS
              </h1>
              <p className="text-2xl lg:text-3xl opacity-90">
                PRICE IN NEPAL
              </p>
            </div>
            <div className="flex-1 relative h-80 w-full">
              <div className="absolute top-0 right-0 w-48 h-32 bg-gradient-to-br from-blue-800 to-blue-600 rounded-xl shadow-2xl transform -rotate-6"></div>
              <div className="absolute bottom-0 left-12 w-48 h-32 bg-gradient-to-br from-purple-800 to-purple-600 rounded-xl shadow-2xl transform rotate-6"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;