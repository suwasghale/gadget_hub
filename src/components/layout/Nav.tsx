"use client";
import React, { useState, useEffect } from "react";
import MenuButton from "@/features/menu/components/MenuButton";
import DesktopMenu from "@/features/menu/components/DesktopMenu";
import MobileMenu from "@/features/menu/components/MobileMenu";
import { menuData } from "@/features/menu/data/menuData";

const Nav: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <nav className="bg-white shadow-lg relative z-50">
      <div className="border-b">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-gray-800 block lg:hidden">Gadget Hub</div>

          {!isMobile && (
            <div className="hidden lg:flex items-center space-x-1">
              {Object.entries(menuData).map(([key, menu]) => (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(key)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <MenuButton
                    title={menu.title}
                    icon={menu.icon as any}
                    color={menu.color}
                    isActive={activeMenu === key}
                  />
                  {activeMenu === key && <DesktopMenu menu={menu} />}
                </div>
              ))}
            </div>
          )}

          {isMobile && <MobileMenu menuData={menuData} />}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
