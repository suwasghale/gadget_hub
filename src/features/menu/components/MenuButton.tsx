"use client";
import { ChevronDown } from "lucide-react";
import { LucideIcon } from "lucide-react";
import React from "react";

interface MenuButtonProps {
  title: string;
  icon: LucideIcon;
  color: string;
  isActive: boolean;
  onClick?: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ title, icon: Icon, color, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-6 text-sm font-medium flex items-center space-x-1 transition-colors duration-200 ${
        isActive ? `bg-${color}-500 text-white` : "text-gray-700 hover:text-gray-900"
      }`}
    >
      <Icon className="w-5 h-5" />
      <span>{title}</span>
      <ChevronDown
        className={`w-4 h-4 transition-transform duration-200 ${isActive ? "rotate-180" : ""}`}
      />
    </button>
  );
};

export default MenuButton;
