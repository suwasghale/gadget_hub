import React from "react";

interface MenuSectionProps {
  title: string;
  items: string[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => (
  <div className="space-y-3">
    <h3 className="font-semibold text-gray-900 text-sm uppercase border-b pb-2">
      {title}
    </h3>
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li key={idx}>
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
);

export default MenuSection;
