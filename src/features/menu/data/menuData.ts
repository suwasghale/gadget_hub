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
import { MenuData } from "../types/menu.types";

export const menuData: MenuData = {

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
}