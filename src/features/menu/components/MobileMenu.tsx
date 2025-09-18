"use client";
import React, { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import type { MenuItem, MenuData } from "../types/menu.types";

interface MobileMenuProps {
  menuData: MenuData;
}

interface MenuStackItem {
  key: string;
  menu: MenuItem;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ menuData }) => {
  const [menuStack, setMenuStack] = useState<MenuStackItem[]>([]);

  const currentMenu = menuStack.length > 0 ? menuStack[menuStack.length - 1].menu : null;

  const openMenu = (key: string, menu: MenuItem) => {
    setMenuStack([...menuStack, { key, menu }]);
  };

  const goBack = () => setMenuStack(menuStack.slice(0, -1));

  return (
    <div className="lg:hidden bg-white border-t shadow-md">
      <div className="p-4 space-y-2">
        {currentMenu ? (
          <>
            <button onClick={goBack} className="flex items-center text-gray-600 hover:text-gray-900 mb-4">
              <ChevronLeft className="w-5 h-5 mr-2" /> Back
            </button>
            <h3 className="text-lg font-semibold" style={{ color: currentMenu.color }}>
              {currentMenu.title}
            </h3>
            <div className="mt-2 space-y-3">
              {currentMenu.sections.map((section) => (
                <div key={section.title}>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">{section.title}</h4>
                  <div className="space-y-2">
                    {section.items.map((item) => (
                      <a key={item} href="#" className="block text-gray-700 hover:text-gray-900">
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="space-y-2">
            {Object.entries(menuData).map(([key, menu]) => {
              const Icon = menu.icon;
              return (
                <button
                  key={key}
                  onClick={() => openMenu(key, menu)}
                  className="flex justify-between items-center w-full px-2 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  <span className="flex items-center space-x-2">
                    <Icon className="w-5 h-5" style={{ color: menu.color }} />
                    <span>{menu.title}</span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
