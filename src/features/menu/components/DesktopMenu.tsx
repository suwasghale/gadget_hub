import React from "react";
import MenuSection from "./MenuSection";
import { MenuItem } from "../types/menu.types";

interface DesktopMenuProps {
  menu: MenuItem;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ menu }) => (
  <div className="absolute left-0 right-0 bg-white shadow-xl border-t">
    <div className="container mx-auto px-4 py-8">
      <div
        className="grid gap-8 items-start"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}
      >
        {menu.sections.map((section, idx) => (
          <MenuSection key={idx} title={section.title} items={section.items} />
        ))}
      </div>
    </div>
  </div>
);

export default DesktopMenu;
