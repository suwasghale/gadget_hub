"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Laptop,
  Monitor,
  Gamepad2,
  Package,
  Home,
  Tag,
  Apple,
  Cpu,
} from "lucide-react";

// Type definitions
interface Section {
  title: string;
  items: string[];
}

interface MenuItem {
  title: string;
  icon: React.ReactNode;
  color: string;
  sections: Section[];
}

type MenuData = Record<string, MenuItem>;

const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Menu data (cut short here, but paste full data from your code)
  const menuData: MenuData = {
    laptops: {
      title: "LAPTOPS",
      icon: <Laptop className="w-5 h-5" />,
      color: "bg-blue-500",
      sections: [
        {
          title: 'By Brand',
          items: ['Dell Laptops', 'HP Laptops', 'Lenovo Laptops', 'ASUS Laptops', 'Acer Laptops', 'MSI Laptops', 'Razer Laptops', 'Samsung Laptops', 'LG Laptops', 'Microsoft Surface', 'Toshiba Laptops', 'Fujitsu Laptops']
        },
        {
          title: 'By Type',
          items: ['Gaming Laptops', 'Business Laptops', 'Ultrabooks', '2-in-1 Laptops', 'Student Laptops', 'Workstation Laptops']
        },
        {
          title: 'By Price',
          items: ['Under $500', '$500 - $1000', '$1000 - $1500', '$1500 - $2000', 'Above $2000', 'Budget Friendly']
        },
        {
          title: 'By Screen Size',
          items: ['11-12 inch', '13-14 inch', '15-16 inch', '17+ inch', 'Touch Screen', 'Non-Touch']
        },
        {
          title: 'By Screen Size',
          items: ['11-12 inch', '13-14 inch', '15-16 inch', '17+ inch', 'Touch Screen', 'Non-Touch']
        },
        {
          title: 'By Screen Size',
          items: ['11-12 inch', '13-14 inch', '15-16 inch', '17+ inch', 'Touch Screen', 'Non-Touch']
        },
        {
          title: 'By Screen Size',
          items: ['11-12 inch', '13-14 inch', '15-16 inch', '17+ inch', 'Touch Screen', 'Non-Touch']
        },
        {
          title: 'By Time',
          items: ['Newest', 'Oldest', 'Default', '2-in-1 Laptops', 'Student Laptops', 'Workstation Laptops']
        },
      ]
    },
    apple: {
      title: "APPLE",
      icon: <Apple className="w-5 h-5" />,
      color: "bg-gray-800",
      sections: [
        {
          title: 'MacBooks',
          items: ['MacBook Air', 'MacBook Pro 13"', 'MacBook Pro 14"', 'MacBook Pro 16"', 'Refurbished MacBooks']
        },
        {
          title: 'iPads',
          items: ['iPad Pro', 'iPad Air', 'iPad', 'iPad Mini', 'iPad Accessories']
        },
        {
          title: 'iPhones',
          items: ['iPhone 15 Series', 'iPhone 14 Series', 'iPhone 13 Series', 'iPhone SE', 'iPhone Accessories']
        },
        {
          title: 'Apple Accessories',
          items: ['AirPods', 'Apple Watch', 'Magic Keyboard', 'Magic Mouse', 'Apple Pencil', 'Charging Cables']
        }
      ]
    },
    monitors: {
      title: "MONITORS",
      icon: <Monitor className="w-5 h-5" />,
      color: "bg-purple-500",
        sections: [
        {
          title: 'By Resolution',
          items: ['Full HD (1080p)', '2K (1440p)', '4K UHD', '5K', '8K', 'Curved Monitors']
        },
        {
          title: 'By Size',
          items: ['21-24 inch', '27 inch', '32 inch', '34+ inch Ultrawide', '43+ inch', 'Portable Monitors']
        },
        {
          title: 'Gaming Monitors',
          items: ['144Hz', '165Hz', '240Hz+', 'G-Sync', 'FreeSync', 'HDR Gaming']
        },
        {
          title: 'Professional',
          items: ['Color Accurate', 'Design & Creative', 'Video Editing', 'CAD/CAM', 'Medical Grade', 'Touch Screen']
        }
      ]
    },
    gaming: {
      title: "GAMER'S ZONE",
      icon: <Gamepad2 className="w-5 h-5" />,
      color: "bg-red-500",
      sections: [
        {
          title: 'Gaming Peripherals',
          items: ['Gaming Keyboards', 'Gaming Mice', 'Gaming Headsets', 'Gaming Controllers', 'Gaming Chairs', 'Mouse Pads']
        },
        {
          title: 'Consoles',
          items: ['PlayStation 5', 'Xbox Series X/S', 'Nintendo Switch', 'Steam Deck', 'Retro Consoles', 'Console Accessories']
        },
        {
          title: 'Streaming Gear',
          items: ['Webcams', 'Microphones', 'Capture Cards', 'Green Screens', 'Ring Lights', 'Stream Decks']
        },
        {
          title: 'VR Gaming',
          items: ['Meta Quest', 'PlayStation VR', 'Valve Index', 'HTC Vive', 'VR Accessories', 'VR Ready PCs']
        }
      ]
        },
    accessories: {
      title: "ACCESSORIES",
      icon: <Package className="w-5 h-5" />,
      color: "bg-orange-500",
            sections: [
        {
          title: 'Computer Peripherals',
          items: ['Mice', 'Keyboards', 'Joystick/Controllers', 'Drawing Tablets', 'Webcams', 'Speakers']
        },
        {
          title: 'Audio Systems',
          items: ['Headphones/Earphones', 'Microphones', 'Speakers', 'Woofers', 'Earbuds', 'Audio Interfaces']
        },
        {
          title: 'Storage Devices',
          items: ['SSD (SATA/NVMe)', 'External SSDs', 'Internal HDDs', 'External HDDs', 'USB Pendrives', 'Memory Cards']
        },
      ],
    },
    office: {
      title: "HOME & OFFICE",
      icon: <Home className="w-5 h-5" />,
      color: "bg-indigo-500",
      sections: [
        { title: "Office Equipment", 
          items: ["Printers", "Scanners"] },
        {
          title: 'Networking',
          items: ['WiFi Routers', 'Mesh Systems', 'Network Switches', 'Ethernet Cables', 'WiFi Extenders', 'Modems']
        },
      ],
    },
    clearance: {
      title: "CLEARANCE SALE",
      icon: <Tag className="w-5 h-5" />,
      color: "bg-yellow-500",
       sections: [
        {
          title: 'Hot Deals',
          items: ['Flash Sales', 'Daily Deals', 'Weekend Specials', 'Bundle Offers', 'Coupon Deals', 'Member Exclusive']
        },
        {
          title: 'Clearance by Category',
          items: ['Laptop Clearance', 'Monitor Clearance', 'Accessory Clearance', 'Gaming Clearance', 'Apple Clearance', 'Office Clearance']
        },
        {
          title: 'Open Box',
          items: ['Open Box Laptops', 'Open Box Monitors', 'Open Box PCs', 'Customer Returns', 'Display Models', 'Refurbished Items']
        },
        {
          title: 'Last Stock',
          items: ['Discontinued Models', 'End of Line', 'Limited Quantity', 'Previous Gen', 'Seasonal Clearance', 'Overstock Items']
        },
        {
          title: 'Last Stock',
          items: ['Discontinued Models', 'End of Line', 'Limited Quantity', 'Previous Gen', 'Seasonal Clearance', 'Overstock Items']
        },
      ]
    },
  };

  const handleMouseEnter = (menu: string) => {
    if (!isMobile) setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setActiveMenu(null);
  };

  const handleMobileMenuClick = (menu: string) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <nav className="bg-white shadow-lg relative z-50">
      <div className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="text-2xl font-bold text-gray-800">TechStore</div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {Object.entries(menuData).map(([key, menu]) => (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`px-4 py-6 text-sm font-medium flex items-center space-x-1 transition-colors duration-200 ${
                      activeMenu === key
                        ? `${menu.color} text-white`
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    {menu.icon}
                    <span>{menu.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeMenu === key ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Mega Menu */}
      {!isMobile && activeMenu && (
        <div
          className="absolute left-0 right-0 bg-white shadow-xl border-t"
          onMouseEnter={() => setActiveMenu(activeMenu)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="container mx-auto px-4 py-8">
            <div
              className={`grid ${
                menuData[activeMenu].sections.length > 3
                  ? "grid-cols-4"
                  : "grid-cols-3"
              } gap-8`}
            >
              {menuData[activeMenu].sections.map((section, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="font-semibold text-gray-900 text-sm uppercase border-b pb-2">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <a
                          href="#"
                          className="text-sm text-gray-600 hover:text-gray-900 hover:translate-x-1 transition-all duration-200 inline-block"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobile && isMobileMenuOpen && (
        <div className="lg:hidden absolute left-0 right-0 bg-white shadow-lg border-t max-h-screen overflow-y-auto">
          <div className="px-4 py-2">
            {Object.entries(menuData).map(([key, menu]) => (
              <div key={key} className="border-b last:border-b-0">
                <button
                  onClick={() => handleMobileMenuClick(key)}
                  className="w-full px-2 py-3 text-left flex items-center justify-between hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-2">
                    {menu.icon}
                    <span className="font-medium text-gray-900">
                      {menu.title}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeMenu === key ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeMenu === key && (
                  <div className="bg-gray-50 px-4 py-3">
                    {menu.sections.map((section, idx) => (
                      <div key={idx} className="mb-4 last:mb-0">
                        <h3 className="font-semibold text-gray-900 text-sm mb-2">
                          {section.title}
                        </h3>
                        <ul className="space-y-1">
                          {section.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <a
                                href="#"
                                className="text-sm text-gray-600 hover:text-gray-900 block py-1"
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
