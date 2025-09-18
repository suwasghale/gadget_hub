import React from "react";
import MenuSection from "./MenuSection";
import { MenuItem } from "../types/menu.types";

interface DesktopMenuProps {
  menu: MenuItem;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ menu }) => {
  return (
    // full width absolute wrapper
    <div className="absolute top-full left-0 right-0 bg-white shadow-xl border-t z-50">
      {/* optional inner padding container for spacing */}
      <div className="w-full px-8 py-8">
        {/* grid that now can take full width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {menu.sections.map((section, idx) => (
            <MenuSection key={idx} title={section.title} items={section.items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesktopMenu;
