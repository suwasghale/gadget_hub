"use client";

import React from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import type { Menu, SubMenu } from "@/features/menu/types";

interface MobileMenuProps {
  activeMenu: string | null;
  setActiveMenu: (menu: string | null) => void;
  menuData: Record<string, Menu>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  activeMenu,
  setActiveMenu,
  menuData,
}) => {
  const currentMenu = activeMenu ? menuData[activeMenu] : null;

  return (
    <div className="lg:hidden bg-white border-t shadow-md">
      <div className="p-4 space-y-2">
        {/* If user is inside a submenu */}
        {currentMenu ? (
          <>
            {/* Back Button */}
            <button
              onClick={() => setActiveMenu(null)}
              className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Back
            </button>

            {/* Submenu title */}
            <h3
              className="text-lg font-semibold"
              style={{ color: currentMenu.color }}
            >
              {currentMenu.title}
            </h3>

            {/* Submenu Items */}
            <div className="mt-2 space-y-3">
              {currentMenu.sections.map((section) => (
                <div key={section.title}>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">
                    {section.title}
                  </h4>
                  <div className="space-y-2">
                    {section.items.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        className="block text-gray-700 hover:text-gray-900"
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* Top-level menu */
          <div className="space-y-2">
            {Object.entries(menuData).map(([key, menu]) => (
              <button
                key={key}
                onClick={() => setActiveMenu(key)}
                className="flex justify-between items-center w-full px-2 py-2 rounded-md text-gray-700 hover:bg-gray-100"
              >
                <span className="flex items-center space-x-2">
                  <menu.icon className="w-5 h-5" style={{ color: menu.color }} />
                  <span>{menu.title}</span>
                </span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
