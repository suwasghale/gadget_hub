"use client";
import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface CompanyInfo {
  registeredName: string;
  panVat: string;
  address: string;
  contact: string;
  email: string;
  eCommerceNumber: string;
  mainOffice: string;
  registrationNumber: string;
  complainOfficer: {
    name: string;
    phone: string;
    email: string;
  };
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections: FooterSection[] = [
    {
      title: "Quick Links",
      links: [
        { label: "Buy a Phone", href: "/phones" },
        { label: "Buy iPad", href: "/ipads" },
        { label: "Buy MacBook", href: "/macbooks" },
        { label: "Apple Pencil Compatibility", href: "/apple-pencil" },
      ]
    },
    {
      title: "Categories",
      links: [
        { label: "Action Camera", href: "/action-cameras" },
        { label: "Drones", href: "/drones" },
        { label: "Speakers", href: "/speakers" },
        { label: "Compare Wanbo", href: "/compare-wanbo" },
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Our Locations", href: "/locations" },
        { label: "EMI Calculator", href: "/emi-calculator" },
        { label: "FAQ", href: "/faq" },
        { label: "Track Order", href: "/track-order" },
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Press", href: "/press" },
        { label: "Careers", href: "/careers" },
        { label: "Blog", href: "/blog" },
      ]
    }
  ];

  const companyInfo: CompanyInfo = {
    registeredName: "Gadget Hub Pvt. Ltd.",
    panVat: "304563074",
    address: "351 Basanta Marga, Babarmahal, Kathmandu, Nepal",
    contact: "info@gadgethub.com",
    email: "info@gadgethub.com",
    eCommerceNumber: "Coming Soon...",
    mainOffice: "Kathmandu",
    registrationNumber: "OCR: 77343/067/068",
    complainOfficer: {
      name: "Gadget Hub, Kathmandu",
      phone: "9861060000",
      email: "info@gadgethub.com"
    }
  };

  const legalLinks: FooterLink[] = [
    { label: "Terms and Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Return Policy", href: "/returns" },
    { label: "Shipping Policy", href: "/shipping" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/gadgethub", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/gadgethub", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/gadgethub", label: "Twitter" },
    { icon: Youtube, href: "https://youtube.com/gadgethub", label: "YouTube" },
    { icon: Linkedin, href: "https://linkedin.com/company/gadgethub", label: "LinkedIn" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white overflow-hidden">
      {/* SVG Background Patterns */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Circuit-like pattern */}
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <circle cx="100" cy="100" r="2" fill="currentColor" />
            <circle cx="300" cy="150" r="2" fill="currentColor" />
            <circle cx="500" cy="80" r="2" fill="currentColor" />
            <circle cx="700" cy="200" r="2" fill="currentColor" />
            <circle cx="900" cy="120" r="2" fill="currentColor" />
            <circle cx="1100" cy="180" r="2" fill="currentColor" />
            <circle cx="1300" cy="90" r="2" fill="currentColor" />
            <circle cx="1500" cy="160" r="2" fill="currentColor" />
            
            <path d="M100 100L300 150M300 150L500 80M500 80L700 200M700 200L900 120M900 120L1100 180M1100 180L1300 90M1300 90L1500 160" />
            
            <circle cx="200" cy="300" r="2" fill="currentColor" />
            <circle cx="400" cy="350" r="2" fill="currentColor" />
            <circle cx="600" cy="280" r="2" fill="currentColor" />
            <circle cx="800" cy="400" r="2" fill="currentColor" />
            <circle cx="1000" cy="320" r="2" fill="currentColor" />
            <circle cx="1200" cy="380" r="2" fill="currentColor" />
            <circle cx="1400" cy="290" r="2" fill="currentColor" />
            
            <path d="M200 300L400 350M400 350L600 280M600 280L800 400M800 400L1000 320M1000 320L1200 380M1200 380L1400 290" />
          </g>
          
          {/* Geometric shapes */}
          <g opacity="0.5">
            <polygon points="1700,50 1750,100 1700,150 1650,100" stroke="currentColor" strokeWidth="1" fill="none" />
            <polygon points="1800,200 1850,250 1800,300 1750,250" stroke="currentColor" strokeWidth="1" fill="none" />
            <rect x="50" y="400" width="60" height="60" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(45 80 430)" />
            <rect x="1600" y="500" width="80" height="80" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(30 1640 540)" />
          </g>
        </svg>
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 to-red-800/80"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Logo and Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <span className="text-2xl font-bold">GH</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Gadget Hub</h2>
                  <p className="text-sm text-red-200 flex items-center gap-1">
                    <span className="text-white">📱</span>
                    Authorised Reseller
                  </p>
                  <p className="text-xs text-red-300">UPGRADE YOUR LIFESTYLE</p>
                </div>
              </div>
              
              <div className="space-y-3 text-sm text-red-100">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>{companyInfo.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors">
                    {companyInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>{companyInfo.complainOfficer.phone}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-sm"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-semibold text-lg text-white">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-red-200 hover:text-white transition-colors text-sm block py-1"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Company Details Grid */}
          <div className="mt-16 pt-8 border-t border-red-700/50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
              <div>
                <h4 className="font-medium text-white mb-2">Registered Business Name</h4>
                <p className="text-red-200">{companyInfo.registeredName}</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">PAN/VAT Number</h4>
                <p className="text-red-200">{companyInfo.panVat}</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Company Address</h4>
                <p className="text-red-200">{companyInfo.address}</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Registration Number</h4>
                <p className="text-red-200">{companyInfo.registrationNumber}</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Contact</h4>
                <p className="text-red-200">{companyInfo.contact}</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">E-Commerce Number</h4>
                <p className="text-red-200">{companyInfo.eCommerceNumber}</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Main Office</h4>
                <p className="text-red-200">{companyInfo.mainOffice}</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Complain Officer</h4>
                <p className="text-red-200">{companyInfo.complainOfficer.name}</p>
                <p className="text-red-200">{companyInfo.complainOfficer.phone}</p>
                <p className="text-red-200">{companyInfo.complainOfficer.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-red-700/50 bg-red-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Legal Links */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                {legalLinks.map((link, index) => (
                  <React.Fragment key={index}>
                    <a
                      href={link.href}
                      className="text-red-200 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                    {index < legalLinks.length - 1 && (
                      <span className="text-red-400">•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Copyright */}
              <div className="text-center md:text-right">
                <p className="text-red-200 text-sm">
                  ©{currentYear} Gadget Hub Pvt. Ltd. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Floating Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            onClick={() => window.open('https://wa.me/9779861060000', '_blank')}
          >
            <MessageCircle className="h-6 w-6 text-white" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;