"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils"; // helper from shadcn
import {
  LayoutDashboard,
  Package,
  PlusCircle,
  ShoppingCart,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavLink {
  title: string;
  href: string;
  icon: React.ReactNode;
}

const navLinks: NavLink[] = [
  { title: "Dashboard", href: "/admin", icon: <LayoutDashboard className="w-5 h-5" /> },
  { title: "Products", href: "/admin/products", icon: <Package className="w-5 h-5" /> },
  { title: "Add Product", href: "/admin/products/add", icon: <PlusCircle className="w-5 h-5" /> },
  { title: "Orders", href: "/admin/orders", icon: <ShoppingCart className="w-5 h-5" /> },
  { title: "Users", href: "/admin/users", icon: <Users className="w-5 h-5" /> },
  { title: "Settings", href: "/admin/settings", icon: <Settings className="w-5 h-5" /> },
];

export const AdminSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(true)}
          className="bg-white shadow-md"
        >
          <Menu className="w-5 h-5" />
        </Button>
      </div>

      {/* Sidebar (desktop + mobile) */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-white border-r shadow-sm z-40 transform transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h1 className="text-xl font-bold text-red-600">Admin</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="lg:hidden"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.icon}
              <span className="text-sm font-medium">{link.title}</span>
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="border-t px-4 py-4">
          <Button
            variant="ghost"
            className="w-full flex items-center gap-3 justify-start text-gray-700 hover:text-red-600 hover:bg-red-50"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
